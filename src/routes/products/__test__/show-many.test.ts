import request from 'supertest';
import { app } from '../../../app';
import {adminSignIn} from '../../../test/adminSignIn'
import { testProducts } from '../../../test/mocks/data';

const testRoute = `/api/products`

test('Returns an array of products of the correct length', async ()=> {
    const cookie = await adminSignIn()
    for (let i=0; i<3; i++){
        await request(app).post(testRoute).set('Cookie', cookie).send(testProducts[0]).expect(201)
    }
    const response = await request(app).get(testRoute).expect(200)
    expect(response.body.docs.length).toEqual(3)
})
test('Returns paginated results', async ()=> {
    const cookie = await adminSignIn()
    for (let i=0; i<8; i++){
        await request(app).post(testRoute).set('Cookie', cookie).send(testProducts[0]).expect(201)
    }
    const response = await request(app).get(testRoute).query({limit:5}).expect(200)
    expect(response.body.docs.length).toEqual(5)
    const pageTwoResponse = await request(app).get(testRoute).query({limit:5, page:2}).expect(200)
    expect(pageTwoResponse.body.docs.length).toEqual(3)
})
 