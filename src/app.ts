import express, { json } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { NotFoundError } from 'custom/errors';
import { currentUser, errorHandler } from 'custom/middlewares';
import cors from 'cors';
import path from 'path';
import { signUpRouter, signInRouter, signOutRouter, currentUserRouter } from 'routes/auth';
import { showUserRouter, updateUserRouter } from 'routes/users';
import { createOneProductRouter, showOneProductRouter, showManyProductsRouter } from 'routes/products';
import { showCartRouter, createCartRouter, updateCartRouter } from 'routes/carts';
export const app = express();
app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true, // allow session cookie from browser to pass through
		exposedHeaders: ['x-auth-token']
	})
);
app.set('trust proxy', true);
app.use(json());
app.use(
	cookieSession({
		signed: false,
		secure: process.env.NODE_ENV !== 'test'
	})
);
app.use(currentUser)

//AUTH ROUTES
app.use(currentUserRouter)
app.use(signInRouter)
app.use(signUpRouter)
app.use(signOutRouter)

//USER ROUTES
app.use(showUserRouter)
app.use(updateUserRouter)

//PRODUCT ROUTES
app.use(createOneProductRouter)
app.use(showOneProductRouter)
app.use(showManyProductsRouter)

//CART ROUTES
app.use(createCartRouter)
app.use(showCartRouter)
app.use(updateCartRouter)

app.all('*', async () => {
	throw new NotFoundError();
});

app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
