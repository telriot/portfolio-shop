import { Router, Response, Request } from 'express';
//import {Product} from 'models/product'
const router = Router()

router.post('/api/products/', async(req:Request, res:Response)=> {

    // const product = await Product.build({})
    res.status(200)
})
export {router as showOneProductRouter}