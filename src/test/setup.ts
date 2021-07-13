import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongo: MongoMemoryServer
beforeAll(async () => {
	process.env.JWT_KEY = 'testkey'
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

