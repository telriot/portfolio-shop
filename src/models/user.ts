import { Document, Model, Schema, model } from 'mongoose';
import { PasswordManager } from 'services/passwordManager';

export interface UserAddress {
	addressLine1: string;
	addressLine2: string;
	city: string;
	country: string;
	zip: string;
}

export interface UserAttrs {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	address: UserAddress;
}

interface UserModel extends Model<UserDoc> {
	build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends Document {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	orders: string[];
	address: UserAddress;
	cart: Record<string, number>;
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
		firstName: String,
		lastName: String,
		orders: [{type: Schema.Types.ObjectId, ref:'Order'}],
		address: {
			addressLine1: String,
			addressLine2: String,
			city: String,
			country: String,
			zip: String
		},
		cart: Object
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
userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
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
