import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from 'custom/errors';

export const privateRoute = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	if (!req.currentUser || req.currentUser.id !== req.params.id) {
		throw new NotAuthorizedError();
	}
	next();
};
