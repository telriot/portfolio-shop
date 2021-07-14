import mongoose, { Document, Model } from 'mongoose';

export type ProductStatus = 'pending' | 'fulfilled' | 'canceled';

export interface ProductAttrs {
	description: string;
	name: string;
	price: number;
	stock: number;
	imageSrc: string;
	stripeId: string;
}

interface ProductModel extends Model<ProductDoc> {
	build(attrs: ProductAttrs): ProductDoc;
}

interface ProductDoc extends Document {
	description: string;
	name: string;
	price: number;
	stock: number;
	imageSrc: string;
	created: Date;
	stripeId: string;
}

const productSchema = new mongoose.Schema(
	{
		description: String,
		name: String,
		price: Number,
		stock: Number,
		imageSrc: String,
        stripeId: String,
		created: {
			type: Date,
			default: Date.now
		},
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			}
		}
	}
);
productSchema.statics.build = (attrs: ProductAttrs) => {
	return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
	'Product',
	productSchema
);

export { Product };
