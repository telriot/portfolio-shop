import request from 'supertest';
import { app } from '../app';
import {userData} from './mocks/data'
const signIn = async () : Promise<string[]>=> {

	const response = await request(app)
		.post('/api/auth/signup')
		.send(userData)
		.expect(201);
	const cookie = response.get('Set-Cookie');
	return cookie;
};

export default signIn;
