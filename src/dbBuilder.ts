import dotenv from 'dotenv';
import { testProducts } from './test/mocks/data';
import { Product } from './models/product';
import mongoose from 'mongoose';
dotenv.config();

const start = async () => {
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
};

const buildTestDb = async () => {
	try {
		await start();
		await Promise.all(testProducts.map(async (prodInfo) => {
			const { name, description, price, stock, imageSrc, stripeId } = prodInfo;
			const product = Product.build({
				name,
				description,
				price,
				stock,
				imageSrc,
				stripeId
			});
			await product.save();
			console.log('Product created');
		}));
	} catch (error) {
		console.log('start failed');
	}
};
buildTestDb().then(() => process.exit());
