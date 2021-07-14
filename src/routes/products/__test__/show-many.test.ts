import request from 'supertest';
import { app } from '../../../app';
import {adminSignIn} from '../../../test/adminSignIn'
import { testProducts } from '../../../test/mocks/data';

const testRoute = `/api/products`

test('Returns an array of products', async ()=> {
    const cookie = await adminSignIn()
    await request(app).post(testRoute).set('Cookie', cookie).send(testProducts[0]).expect(201)
    await request(app).post(testRoute).set('Cookie', cookie).send(testProducts[1]).expect(201)
    await request(app).post(testRoute).set('Cookie', cookie).send(testProducts[2]).expect(201)
    const response = await request(app).get(testRoute).expect(200)
    console.log(response.body)
    expect(response.body.length).toEqual(3)
})
 
 