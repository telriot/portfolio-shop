import request from 'supertest';
import { app } from '../../../app';
import signIn from '../../../test/signIn';
import {createMongooseId} from '../../../test/createMongooseId'
import { email, firstName } from '../../../test/mocks/data';
// import { userData } from '../../../test/mocks/data';

const testRoute = `/api/users`

test('Returns 401 when user is not logged in', async ()=> {
    await request(app).get(`${testRoute}/${createMongooseId()}`).expect(401)
})

test('Returns 401 when logged user and request user are different', async ()=> {
    await signIn()
    await request(app).get(`${testRoute}/${createMongooseId()}`).expect(401)
})
test('Returns user data when logged user and requested user match', async ()=> {
    const cookie = await signIn()
    const currentUserRes = await request(app).get('/api/auth/currentUser').set('Cookie', cookie )
    const response = await request(app).get(`${testRoute}/${currentUserRes.body.currentUser.id}`).set('Cookie', cookie ).expect(200)
    expect(response.body.firstName).toEqual(firstName)
    expect(response.body.email).toEqual(email)    
})