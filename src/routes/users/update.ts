import { privateRoute, validateRequest } from 'custom/middlewares';
import { Router, Response, Request } from 'express';
import { User } from 'models/user';
import { validateAddress } from 'validation/validators';
const router = Router();

router.put(
	'/api/users/:id',
	privateRoute,
	validateAddress,
	validateRequest,
	async (req: Request, res: Response) => {
		const { address } = req.body;
		const user = await User.findByIdAndUpdate(
			req.params.id,
			{
				address
			},
			{ new: true }
		);
		res.status(200).send(user);
	}
);
export { router as updateUserRouter };
