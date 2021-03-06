import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
import { BadRequestError } from 'custom/errors';
import { User } from 'models/user';
import { PasswordManager } from '../../services/passwordManager';
import jwt from 'jsonwebtoken';
import { validateEmail, validatePassword } from 'validation/validators';

const router = Router();

router.post(
	'/api/auth/signin',
	[validateEmail, validatePassword],
	validateRequest,
	async (req: Request, res: Response) => {
		const { email, password } = req.body;
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			throw new BadRequestError('Bad Credentials');
		}
		const passwordsMatch = await PasswordManager.compare(
			existingUser.password,
			password
		);
		if (!passwordsMatch) {
			throw new BadRequestError('Bad Credentials');
		}
		const userJwt = jwt.sign(
			{ id: existingUser.id, email: existingUser.email },
			process.env.JWT_KEY!
		);
		req.session = {
			jwt: userJwt
		};
		res.status(200).send(existingUser);
	}
);

export { router as signInRouter };
