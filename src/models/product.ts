import mongoose, { Document, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export type Stock = Map<string, number>
export interface ProductAttrs {
	description: string;
	name: string;
	price: number;
	stock: Stock;
	imageSrc: string;
	stripeId: string;
}

interface ProductModel extends PaginateModel<ProductDoc> {
	build(attrs: ProductAttrs): ProductDoc;
}

export interface ProductDoc extends Document {
	description: string;
	name: string;
	price: number;
	stock: Stock;
	imageSrc: string;
	created: Date;
	stripeId: string;
}

const productSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		stock: {
			type: Map,
			required: true,
		},
		imageSrc: String,
		stripeId: {
			type: String,
			required: true
		},
		created: {
			type: Date,
			default: Date.now
		}
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

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model<ProductDoc, ProductModel>(
	'Product',
	productSchema
);

export { Product };
