import { UserAddress } from '../../models/user';

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
