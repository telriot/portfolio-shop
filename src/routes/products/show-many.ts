import { Router, Response, Request } from 'express';
import {Product} from 'models/product'
const router = Router()

router.get('/api/products', async(req:Request, res:Response)=> {

    const products = await Product.find({})
    res.status(200).send(products)
})
export {router as showManyProductsRouter}