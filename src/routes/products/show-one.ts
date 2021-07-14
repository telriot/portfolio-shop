import { NotFoundError } from 'custom/errors';
import { Router, Response, Request } from 'express';
import {Product} from 'models/product'
const router = Router()

router.get('/api/products/:id', async(req:Request, res:Response)=> {

    const product = await Product.findById(req.params.id)
    if (!product){
        throw new NotFoundError()
    }
    res.status(200).send(product)
})
export {router as showOneProductRouter}