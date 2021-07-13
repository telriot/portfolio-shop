import express, { json } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { NotFoundError } from 'custom/errors';
import { errorHandler } from 'custom/middlewares';
import cors from 'cors';
import path from 'path';
import { signUpRoute } from 'routes/auth';

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

app.use(signUpRoute)
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
