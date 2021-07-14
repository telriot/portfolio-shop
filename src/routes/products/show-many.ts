import { Router, Response, Request } from 'express';
import { Product } from 'models/product';
const router = Router();

router.get('/api/products', async (req: Request, res: Response) => {
	const { limit, page } = req.query;
	const sortByName = { name: 'asc' };
	const convertedLimit = limit && !isNaN(Number(limit)) ? Number(limit) : 20;
	const convertedPage = page && !isNaN(Number(page)) ? Number(page) : 1;

	const paginationOptions = {
		limit: convertedLimit,
		page: convertedPage,
		sort: sortByName
	};
	const products = await Product.paginate({}, paginationOptions);
	res.status(200).send(products);
});
export { router as showManyProductsRouter };
