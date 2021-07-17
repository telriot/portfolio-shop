import request from 'supertest';
import { app } from '../../../app';
import {adminSignIn} from'../../../test/adminSignIn';
import { testProducts } from '../../../test/mocks/data';
import {createMongooseId} from '../../../test/createMongooseId'

const testRoute = '/api/carts'

test('Return 400 on invalid request', async ()=> {
    await request(app).get(`${testRoute}/invalidId`).expect(400)
})
test('Return 404 on valid but non existing cart id request', async ()=> {
    await request(app).get(`${testRoute}/${createMongooseId()}`).expect(404)
})
test('Returns cart contents on valid request', async ()=> {
    const cookie = await adminSignIn()
    const quantity = 2
    const {body:product} = await request(app).post('/api/products').set('Cookie', cookie).send(testProducts[0]).expect(201)
    const {body:cart} = await request(app).post(testRoute).send({products:{[product.id]: quantity}}).expect(201)
    const {body:fetchedCart} = await request(app).get(`${testRoute}/${cart.id}`).expect(200)
    expect(fetchedCart.products[product.id]).toEqual(quantity)
})
