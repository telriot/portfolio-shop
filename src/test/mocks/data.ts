import { UserAddress } from '../../models/user';
import { ProductAttrs } from '../../models/product';
//USER DATA
export const email = 'test@test.com';
export const password = 'password';
export const address: UserAddress = {
	addressLine1: 'testAddress line 1',
	addressLine2: 'testAddress line 2',
	city: 'testCity',
	country: 'testCountry',
	zip: '90102'
};
export const firstName = 'testUserFirst';
export const lastName = 'testUserLast';
export const userData = { email, password, address, firstName, lastName };

//USER UPDATE
export const updatedEmail = 'update@test.com';
export const updatedPassword = 'updatedPassword';
export const updatedAddress: UserAddress = {
	addressLine1: 'updateAddress line 1',
	addressLine2: 'updateAddress line 2',
	city: 'updateCity',
	country: 'updateCountry',
	zip: '90102'
};
export const updatedFirstName = 'updateUserFirst';
export const updatedLastName = 'updateUserLast';
export const updatedUserData = {
	updatedEmail,
	updatedPassword,
	updatedAddress,
	updatedFirstName,
	updatedLastName
};
//TEST PRODUCTS

const defaultStock = ({
	xs: 10,
	s: 10,
	m: 10,
	l: 10,
	xl: 10
})
export const testProducts: ProductAttrs[] = [
	{
		description: `A fantastic t-shirt inspired by Eric Cartman's wisdom. \nA favorite among the youth.`,
		name: `Respect My Authority T-shirt`,
		price: 1999,
		stock: new Map(Object.entries(defaultStock)),
		imageSrc: 'https://picsum.photos/200/300',
		stripeId: 'prod_JqkWc2SAl8mrzu'
	},
	{
		description: `Because it actually is. In the end, what should I say? It is what it is.`,
		name: `This Is Just A Test T-shirt`,
		price: 799,
		stock:  new Map(Object.entries(defaultStock)),
		imageSrc: 'https://picsum.photos/200/300',
		stripeId: 'prod_JqkVYfXo8hOjUH'
	},
	{
		description: `They Live now more than ever. But Roddy Piper is no longer there to save us from them.`,
		name: `They Live T-shirt`,
		price: 1299,
		stock:  new Map(Object.entries(defaultStock)),
		imageSrc: 'https://picsum.photos/200/300',
		stripeId: 'prod_JqkUAaP40afnHa'
	},
	{
		description: `Here we are not even testing. We are providing randomness. \nMath.random()*t-shirt.`,
		name: `Just A Random T-shirt`,
		price: 999,
		stock:  new Map(Object.entries(defaultStock)),
		imageSrc: 'https://picsum.photos/200/300',
		stripeId: 'prod_JqkUXzOodFhSkz'
	}
];
