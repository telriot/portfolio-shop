import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
import { validateCartProducts } from 'validation/validators';
import { Cart } from 'models/cart';
import { buildExpirationDate } from 'custom/utils/buildExpirationDate';
const router = Router();

router.post(
	'/api/carts',
	validateCartProducts,
	validateRequest,
	async (req: Request, res: Response) => {
		const products = Cart.mapJSONProducts(req.body.products);
		const cart = Cart.build({
			products,
			expiresAt: buildExpirationDate()
		});
		await cart.save();
		res.status(201).send(cart);
	}
);
export { router as createCartRouter };
