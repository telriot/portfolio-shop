import request from 'supertest';
import { app } from '../../../app';
import {adminSignIn} from'../../../test/adminSignIn';
import { testProducts } from '../../../test/mocks/data';
import {ProductDoc} from '../../../models/product'

const testRoute = '/api/carts'

describe('Has products to choose from', ()=> {
    let products:ProductDoc[]=[]
    beforeEach(async()=>{
        const cookie = await adminSignIn()
        const {body:product1} = await request(app).post('/api/products').set('Cookie', cookie).send(testProducts[0]).expect(201)
        const {body:product2} = await request(app).post('/api/products').set('Cookie', cookie).send(testProducts[0]).expect(201)
        products.push(product1, product2)
    })
    // test('Returns 400 on invalid data', async ()=>{
    //     await request(app).post(testRoute).send({products:'Some weird data'}).expect(400)
    // })
    test('Returns 201 on valid data', async ()=>{
        await request(app).post(testRoute).send({products:{[products[0].id]: 2}}).expect(201)
    })
})
