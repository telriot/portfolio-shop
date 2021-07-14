import request from 'supertest';
import { app } from '../../../app';
import {createMongooseId} from '../../../test/createMongooseId'
import { testProducts } from '../../../test/mocks/data';
import {adminSignIn} from '../../../test/adminSignIn'

const testRoute = `/api/products`

test('Returns 404 if requested product does not exist', async ()=> {
   await request(app).get(`${testRoute}/${createMongooseId()}`).expect(404)
})
test('Returns 200 and the requested product if it exists', async ()=> {
   const cookie = await adminSignIn()
   const response = await request(app).post(testRoute).set('Cookie', cookie).send(testProducts[0]).expect(201)
   await request(app).get(`${testRoute}/${response.body.id}`).expect(200)
})
