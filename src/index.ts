import dotenv from "dotenv";
import mongoose from 'mongoose';
import { app } from './app';
dotenv.config();

export const start = async () => {
	if (!process.env.JWT_KEY) {
		throw new Error('JWT_KEY must be defined');
	}
	if (!process.env.MONGO_URI) {
		throw new Error('MONGO_URI must be defined');
	}
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
		console.log('Connected to MongoDB');
	} catch (err) {
		console.error('MongoDB connection error', err);
	}
	app.listen(5000, () => {
		console.log('Listening on 5000...');
	});
};

start();
