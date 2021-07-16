import { Document, Model, Schema, model } from 'mongoose';
import { PasswordManager } from 'services/passwordManager';

export interface UserAddress {
	addressLine1: string;
	addressLine2: string;
	city: string;
	country: string;
	zip: string;
	isAdmin?: boolean;
}

export interface UserAttrs {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	address: UserAddress;
}

interface UserModel extends Model<UserDoc> {
	build(attrs: UserAttrs, isAdmin?: boolean): UserDoc;
}

interface UserDoc extends Document {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	orders: string[];
	address: UserAddress;
	cart: Schema.Types.ObjectId;
	isAdmin: boolean;
}

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
		address: {
			type: {
				addressLine1: String,
				addressLine2: String,
				city: String,
				country: String,
				zip: String
			},
			required: true
		},
		isAdmin: Boolean,
		cart: [{ type: Schema.Types.ObjectId, ref: 'Cart' }]
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
			}
		}
	}
);
userSchema.statics.build = (attrs: UserAttrs, isAdmin: boolean = false) => {
	return new User({ ...attrs, isAdmin });
};

userSchema.pre('save', async function (done) {
	if (this.isModified('password')) {
		const hashed = await PasswordManager.toHash(this.get('password'));
		this.set('password', hashed);
	}
	done();
});
const User = model<UserDoc, UserModel>('User', userSchema);

export { User };
