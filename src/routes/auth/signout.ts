import {Router} from 'express'

const router = Router()
router.post('/api/auth/signout', (req,res) => {
    req.session = null;
    res.send({})
})

export {router as signOutRouter}