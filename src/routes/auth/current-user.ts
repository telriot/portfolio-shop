import {Router} from 'express';
import { currentUser } from 'custom/middlewares';

const router = Router();
router.get('/api/auth/currentuser', currentUser, (req, res) => {
	res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
