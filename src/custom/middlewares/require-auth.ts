import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from 'custom/errors';

export const requireAuth = (
	req: Request,
	res: Response,
	next: NextFunction
) : void => {
	if (!req.currentUser) {
		throw new NotAuthorizedError();
	}
	next();
};
