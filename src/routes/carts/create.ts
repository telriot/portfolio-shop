import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
import { validateCartProducts } from 'validation/validators';
import { Cart } from 'models/cart';
const router = Router();

router.post(
	'/api/carts',
	validateCartProducts,
	validateRequest,
	async (req: Request, res: Response) => {
		const products = Cart.mapJSONProducts(req.body.products);
		const cart = Cart.build({ products });
		await cart.save();
		res.sendStatus(201);
	}
);
export { router as createCartRouter };
