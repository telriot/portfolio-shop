import mongoose, { Document, Model } from 'mongoose';

export type OrderStatus= 'pending' | 'fulfilled' | 'canceled'

interface OrderAttrs {
    customerId: string
    status: OrderStatus
    priceTotal: number
}

interface OrderModel extends Model<OrderDoc> {
	build(attrs: OrderAttrs): OrderDoc;
}

interface OrderDoc extends Document {
    customerId: string
    status: OrderStatus
    priceTotal: number
    created: Date
    lastUpdated: Date
}

const orderSchema = new mongoose.Schema(
	{
        customerId: String,
        status: String,
        priceTotal: Number,
        created: {
            type: Date,
            default: Date.now,
        },
        lastUpdated: {
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
orderSchema.statics.build = (attrs: OrderAttrs) => {
	return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order };
