import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { validateRequest } from 'custom/middlewares';
import { BadRequestError } from 'custom/errors';
import { User, UserAttrs } from 'models/user';
import jwt from 'jsonwebtoken';

const router = Router();

router.post(
	'/api/auth/signup',
	[
		body('firstName')
			.isLength({ min: 2, max: 30 })
			.withMessage('First name must be between 4 and 30 characters'),
		body('lastName')
			.isLength({ min: 2, max: 30 })
			.withMessage('Last name must be between 4 and 30 characters'),
		body('address.addressLine1').not().isEmpty(),
		body('address.addressLine2').not().isEmpty(),
		body('address.city').not().isEmpty(),
		body('address.country').not().isEmpty(),
		body('address.zip').not().isEmpty(),
		body('password').trim().isLength({min:4, max:20}).withMessage("password must be between 4 and 20 characters"),
		body('email').trim().isEmail()
	],
	validateRequest,
	async (req: Request, res: Response) => {
		const { firstName, lastName, email, password, address }: UserAttrs =
			req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			throw new BadRequestError('Email in use');
		}
		const user = User.build({ firstName, lastName, email, password, address });
		await user.save();

		const userJwt = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_KEY!
		);
		req.session = {
			jwt: userJwt
		};

		res.status(201).send(user);
	}
);

export { router as signUpRouter}