import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
// import { Cart } from 'models/Cart';
const router = Router();

router.put(
	'/api/carts/:id',
	validateRequest,
	async (req: Request, res: Response) => {
        
		res.status(204);
	}
);
export { router as updateCartRouter };
