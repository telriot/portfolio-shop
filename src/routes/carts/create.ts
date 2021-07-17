import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
import { validateCartProducts } from 'validation/validators';
import { Cart } from 'models/cart';
const router = Router();
const EXPIRATION_WINDOW_SECONDS = 48 * 60 * 60;

router.post(
	'/api/carts',
	validateCartProducts,
	validateRequest,
	async (req: Request, res: Response) => {
		const products = Cart.mapJSONProducts(req.body.products);
		const expiration = new Date();
		expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);
		const cart = Cart.build({
			products,
			expiresAt: expiration.toISOString()
		});
		await cart.save();
		res.status(201).send(cart);
	}
);
export { router as createCartRouter };
