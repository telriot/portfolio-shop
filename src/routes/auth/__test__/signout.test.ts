import request from 'supertest';
import { app } from '../../../app';
import {signIn} from'../../../test/signIn';

test('Clears the cookie after signout', async () => {
	await signIn()
	const response = await request(app).post('/api/auth/signout').expect(200);
	expect(response.get('Set-Cookie')[0]).toEqual(
		'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
	);
});
