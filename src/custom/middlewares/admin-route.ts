import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from 'custom/errors';
import {User} from 'models/user'
export const adminRoute = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	if (!req.currentUser) {
		throw new NotAuthorizedError();
	}
    const user = await User.findById(req.currentUser.id)
    if(!user || !user.isAdmin){
        throw new NotAuthorizedError();
    }
	next();
};
