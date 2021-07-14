import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError, ForbiddenError } from 'custom/errors';

export const privateRoute = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	if (!req.currentUser) {
		throw new NotAuthorizedError();
	}
	if (req.currentUser.id !== req.params.id) {
		throw new ForbiddenError();
	}
	next();
};
