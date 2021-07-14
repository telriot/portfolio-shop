import { Router, Response, Request } from 'express';
import { adminRoute, validateRequest } from 'custom/middlewares';
import { validateProduct } from 'validation/validators';
import { Product } from 'models/product';
const router = Router();

router.post(
	'/api/products',
	adminRoute,
	validateProduct,
	validateRequest,
	async (req: Request, res: Response) => {
		const { name, description, price, stock, imageSrc, stripeId } = req.body;
		const product = Product.build({
			name,
			description,
			price,
			stock,
			imageSrc,
			stripeId
		});
        await product.save()
		res.status(201).send(product);
	}
);
export { router as createOneProductRouter };
