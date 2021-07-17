import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
import {
	validateCartProducts,
	validateMongooseIdParam
} from 'validation/validators';
import { Cart } from 'models/cart';
import { NotFoundError } from 'custom/errors';
import { buildExpirationDate } from 'custom/utils/buildExpirationDate';

const router = Router();

router.patch(
	'/api/carts/:id',
	[validateCartProducts, validateMongooseIdParam],
	validateRequest,
	async (req: Request, res: Response) => {
		const { products } = req.body;
		const cart = await Cart.findByIdAndUpdate(
			req.params.id,
			{ products, expiresAt: buildExpirationDate() },
			{ new: true }
		);
		if(!cart){
			throw new NotFoundError()
		}
		res.status(200).send(cart);
	}
);
export { router as updateCartRouter };
