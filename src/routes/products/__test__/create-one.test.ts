import request from 'supertest';
import { app } from '../../../app';
// import {createMongooseId} from '../../../test/createMongooseId'
import {adminSignIn} from '../../../test/adminSignIn'
import {signIn} from'../../../test/signIn';
import { testProducts } from '../../../test/mocks/data';

const testRoute = `/api/products`

// test('Returns 401 if not signed in', async ()=> {
//     await request(app).post(testRoute).send(testProducts[0]).expect(401)
// })
// test('Returns 401 if not admin', async ()=> {
//     await signIn();
//     await request(app).post(testRoute).send(testProducts[0]).expect(401)
// })
// test('Returns 400 on invalid data', async ()=> {
//     const cookie = await adminSignIn()
//     await request(app).post(testRoute).set('Cookie', cookie).send('sending a string').expect(400)
// })
// test('Returns 201 on valid data admin', async ()=> {
//     await request(app).post(testRoute).send(testProducts[0]).expect(401)
// }) 
 