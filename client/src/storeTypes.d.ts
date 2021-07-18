import {RootState} from './reducers'
export type AsyncStatus = 'idle' | 'fulfilled' | 'pending' | 'rejected'
export type ReducerPayload<T> = { payload: T };
export type ThunkAPIReturnValue = { state: RootState };
export type ThunkReturnValue<T = null> = {
	error: string | null;
	success: boolean;
	data?: T | null;
};

// PRODUCTS
export type Stock = {[x:string]:number};
export interface Product {
	id:string;
	description: string;
	name: string;
	price: number;
	stock: Stock;
	imageSrc: string;
	created: Date;
	stripeId: string;
}