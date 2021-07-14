import request from 'supertest';
import { app } from '../../../app';
import {signIn} from'../../../test/signIn';
import { password, email } from '../../../test/mocks/data';

const testRoute = '/api/auth/signin';

test('Fails when email does not exist', async () => {
	await request(app).post(testRoute).send({ email, password }).expect(400);
});
test('Fails when password is incorrect', async () => {
	await signIn();
	await request(app)
		.post(testRoute)
		.send({ email, password: 'wrongpassword' })
		.expect(400);
});
test('Responds with cookies with correct credentials', async () => {
	await signIn();
	const response = await request(app)
		.post(testRoute)
		.send({ email, password })
		.expect(200);
	expect(response.get('Set-Cookie')).toBeDefined();
});
