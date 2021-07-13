import request from 'supertest';
import { app } from '../../../app';
import signIn from '../../../test/signIn'
import {email} from '../../../test/mocks/data'
test("Responds with details about the current user", async ()=>{
    const cookie = await signIn()

    const response = await request(app).get('/api/auth/currentuser').set('Cookie', cookie).send().expect(200)
    expect(response.body.currentUser.email).toEqual(email)
})

test('Responds with null if not authenticated', async ()=> {
    const response = await request(app).get('/api/auth/currentuser').send().expect(200)
    expect(response.body.currentUser).toEqual(null)
})