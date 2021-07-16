import { Router, Response, Request } from 'express';
import { validateRequest } from 'custom/middlewares';
// import { Cart } from 'models/Cart';
const router = Router();
router.get(
	'/api/carts/:id',
	validateRequest,
	async (req: Request, res: Response) => {
        
		res.status(200);
	}
);
export { router as showCartRouter };
