import { Request, Response, Router } from 'express';
import { validateRequest } from 'custom/middlewares';
import { BadRequestError } from 'custom/errors';
import { User, UserAttrs } from 'models/user';
import jwt from 'jsonwebtoken';
import {
	validateAddress,
	validateFirstName,
	validateLastName,
	validatePassword,
	validateEmail
} from 'validation/validators';

const router = Router();

router.post(
	'/api/auth/signup',
	[
		validateFirstName,
		validateLastName,
		...validateAddress,
		validatePassword,
		validateEmail
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

export { router as signUpRouter };
