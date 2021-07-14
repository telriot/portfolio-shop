import { User } from 'models/user';
import { userData } from './mocks/data';
import { JWT_KEY } from './setup';
import jwt from 'jsonwebtoken'

const adminSignIn = async () : Promise<string[]>=> {

	const user = User.build(userData, true);
	await user.save();
	
	const token = jwt.sign(
		{ id: user.id, email: user.email },
		JWT_KEY
	);
	const sessionJSON = JSON.stringify({jwt: token})
	const base64 = Buffer.from(sessionJSON).toString('base64')
	// return a string that is the cookie with the encoded data as an array (supertest requirement)
	return [`express:sess=${base64}`]
};

export default adminSignIn;
