import { body } from 'express-validator';

export const validateFirstName = body('firstName')
	.isLength({ min: 2, max: 30 })
	.withMessage('First name must be between 4 and 30 characters');
export const validateLastName = body('lastName')
	.isLength({ min: 2, max: 30 })
	.withMessage('Last name must be between 4 and 30 characters');
export const validateAddress = [
	body('address').isObject().withMessage('Address must be an object'),
	body('address.addressLine1')
		.isString()
		.notEmpty()
		.withMessage('AddressLine1 is required'),
	body('address.addressLine2')
		.isString()
		.withMessage('AddressLine2 must be a string'),
	body('address.city').isString().notEmpty().withMessage('City is required'),
	body('address.country')
		.isString()
		.notEmpty()
		.withMessage('Country is required'),
	body('address.zip').isString().notEmpty().withMessage('Zip is required')
];
export const validatePassword = body('password')
	.trim()
	.isLength({ min: 4, max: 20 })
	.withMessage('password must be between 4 and 20 characters');
export const validateEmail = body('email').trim().isEmail();
export const validateProduct = [
	body('description')
		.isString()
		.notEmpty()
		.withMessage('Description is required'),
	body('name').isString().notEmpty().withMessage('Name is required'),
	body('price')
		.isNumeric()
		.not()
		.notEmpty()
		.withMessage('Price is required'),
	body('stock').isNumeric().notEmpty().withMessage('Stock is required'),
	body('imageSrc')
		.isString()
		.notEmpty()
		.withMessage('Image source is required'),
	body('stripeId')
		.isString()
		.notEmpty()
		.withMessage('Stripe Id is required')
];
