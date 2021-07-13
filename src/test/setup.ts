import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export const JWT_KEY='testKey'

let mongo: MongoMemoryServer
beforeAll(async () => {
	process.env.JWT_KEY = JWT_KEY
	mongo = await MongoMemoryServer.create();
	const uri = mongo.getUri();
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
        useFindAndModify: false
	});
});
beforeEach(async () => {
	const collections = await mongoose.connection.db.collections();
	collections.forEach(async (collection) => {
		await collection.deleteMany({});
	});
});
afterAll(async () => {
	await mongo.stop();
	await mongoose.connection.close();
});

