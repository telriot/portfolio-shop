import { body } from 'express-validator';

export const validateFirstName = body('firstName')
	.isLength({ min: 2, max: 30 })
	.withMessage('First name must be between 4 and 30 characters');
export const validateLastName = body('lastName')
	.isLength({ min: 2, max: 30 })
	.withMessage('Last name must be between 4 and 30 characters');
export const validateAddress = [
    body('address').isObject(),
	body('address.addressLine1').not().isEmpty(),
	body('address.addressLine2').not().isEmpty(),
	body('address.city').not().isEmpty(),
	body('address.country').not().isEmpty(),
	body('address.zip').not().isEmpty()
];
export const validatePassword = body('password')
	.trim()
	.isLength({ min: 4, max: 20 })
	.withMessage('password must be between 4 and 20 characters');
export const validateEmail = body('email').trim().isEmail();
