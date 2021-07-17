import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
import { validateMongooseIdParam } from 'validation/validators';
import { Cart } from 'models/cart';
import { NotFoundError } from 'custom/errors';

const router = Router();
router.get(
	'/api/carts/:id',
	validateMongooseIdParam,
	validateRequest,
	async (req: Request, res: Response) => {
        const cart = await Cart.findById(req.params.id)
		if(!cart){
			throw new NotFoundError()
		}
		res.status(200).send(cart);
	}
);
export { router as showCartRouter };
