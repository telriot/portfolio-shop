import request from 'supertest';
import { app } from '../../../app';
import { userData } from '../../../test/mocks/data';

const testRoute = '/api/auth/signup';

test('Returns a 201 on successful signup', async () => {
	await request(app).post(testRoute).send(userData).expect(201);
});
test('Returns a 400 on invalid data', async ()=>{
	await request(app)
		.post(testRoute)
		.send({ ...userData, email: 'test'})
		.expect(400);
	await request(app)
		.post(testRoute)
		.send({ ...userData, password: '' })
		.expect(400);
    await request(app)
		.post(testRoute)
		.send({ ...userData, address: {} })
		.expect(400);
    await request(app)
		.post(testRoute)
		.send({ ...userData, firstName: '' })
		.expect(400);
    await request(app)
		.post(testRoute)
		.send({ ...userData, lastName: '' })
		.expect(400);
})
test('Does not allow duplicate emails', async () => {
	await request(app)
		.post(testRoute)
		.send(userData)
		.expect(201);
	await request(app)
		.post(testRoute)
		.send(userData)
		.expect(400);
});
test('It sets a cookie after successful signup', async () => {
	const response = await request(app)
        .post(testRoute)
        .send(userData)
		.expect(201);
    expect(response.get("Set-Cookie")).toBeDefined()
});
