import request from 'supertest';
import { app } from '../../../app';
import signIn from '../../../test/signIn';
import { createMongooseId } from '../../../test/createMongooseId';
import {
	userData,
    updatedAddress
} from '../../../test/mocks/data';

const testRoute = `/api/users`;

test('Returns 401 when user is not logged in', async () => {
	await request(app).put(`${testRoute}/${createMongooseId()}`).expect(401);
});

test('Returns 401 when logged user and request user are different', async () => {
	await signIn();
	await request(app).put(`${testRoute}/${createMongooseId()}`).expect(401);
});
test('Returns 400: Bad Request when provided invalid data', async () => {
	const cookie = await signIn();
	const currentUserRes = await request(app)
		.get('/api/auth/currentUser')
		.set('Cookie', cookie);
	await request(app)
		.put(`${testRoute}/${currentUserRes.body.currentUser.id}`)
		.set('Cookie', cookie)
		.send({...userData, address: 'A string instead of an address object'})
		.expect(400);
});

test('Returns user data when logged user and requested user match', async ()=> {
	const cookie = await signIn();
	const currentUserRes = await request(app)
		.get('/api/auth/currentUser')
		.set('Cookie', cookie);
	const response = await request(app)
		.put(`${testRoute}/${currentUserRes.body.currentUser.id}`)
		.set('Cookie', cookie)
		.send({...userData, address: updatedAddress})
		.expect(200);
    expect(response.body.address).toEqual(updatedAddress)
})
