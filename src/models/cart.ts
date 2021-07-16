import mongoose, { Document, Model } from 'mongoose';

enum CartStatus {
    Active = 'active',
    Abandoned = 'abandoned',
}
interface CartAttrs {
    products: Map<string, number>
}

interface CartModel extends Model<CartDoc> {
	build(attrs: CartAttrs): CartDoc;
    mapJSONProducts:(products: Record<string, unknown>) => Map<string, number>
}

interface CartDoc extends Document {
    id: string
    status: CartStatus
    products: Map<string, number>
    created: Date
    expiresAt: Date
}

const cartSchema = new mongoose.Schema(
	{
        status: {
            type:String,
            default: CartStatus.Active
        },
        products: Map,
        created: {
            type: Date,
            default: Date.now,
        },
        expiresAt: {
            type: Date,
            default: Date.now,
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
cartSchema.statics.build = (attrs: CartAttrs) => {
	return new Cart(attrs);
};

cartSchema.statics.mapJSONProducts = (products: Record<string, unknown>) : Map<string, number> =>
new Map(Object.entries(products)) as Map<string, number>;


const Cart = mongoose.model<CartDoc, CartModel>('Cart', cartSchema);

export { Cart };
