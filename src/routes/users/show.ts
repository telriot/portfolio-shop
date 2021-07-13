import { privateRoute } from 'custom/middlewares';
import { Router, Response, Request } from 'express';
import {User} from 'models/user'
const router = Router()

router.get('/api/users/:id', privateRoute, async(req:Request, res:Response)=> {

    const user = await User.findById(req.params.id)
    res.status(200).send(user)
})
export {router as showUserRouter}