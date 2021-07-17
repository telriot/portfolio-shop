import request from 'supertest';
import { app } from '../../../app';
import {adminSignIn} from'../../../test/adminSignIn';
import { testProducts } from '../../../test/mocks/data';
import {createMongooseId} from '../../../test/createMongooseId'

const testRoute = '/api/carts'
const productId1 = createMongooseId()
const productId2 = createMongooseId()
const update = {products:{[productId1]:2, [productId2]:4}}

test('Return 400 on invalid product id', async ()=> {
    await request(app).patch(`${testRoute}/invalidId`).expect(400)
})

describe('Database has valid cart entries', ()=> {

    let cartId : string = ""

    beforeEach(async()=>{
        const adminCookie = await adminSignIn()
        const {body:product} = await request(app).post('/api/products').set('Cookie', adminCookie).send(testProducts[0]).expect(201)
        const {body: cart} = await request(app).post(testRoute).send({products:{[product.id]: 2}}).expect(201)
        cartId = cart.id
    })
    test('Return 400 on invalid update contents', async ()=> {
        await request(app).patch(`${testRoute}/${cartId}`).send('Some invalid update').expect(400)
    })
    test('Return 404 on valid contents but non existing cart id request', async ()=> {
        await request(app).patch(`${testRoute}/${createMongooseId()}`).send(update).expect(404)
    })
    test('Returns 204 and cart contents on valid request', async ()=> {
        const {body:cart} = await request(app).patch(`${testRoute}/${cartId}`).send(update).expect(200)
        expect(cart.products).toEqual(update.products)
    })
})
