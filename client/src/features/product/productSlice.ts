//  ======================================== IMPORTS
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	ThunkReturnValue,
	ThunkAPIReturnValue,
	AsyncStatus,
	Product
} from 'storeTypes';
import { RootState } from 'reducers';
import { stdErrorHandler, stdSuccessHandler } from 'utils/redux';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
//  ======================================== UTILS

//  ======================================== ENTITIES

//  ======================================== THUNKS
export const fetchProduct = createAsyncThunk<
	ThunkReturnValue<Product>,
	string,
	ThunkAPIReturnValue
>('product/fetchProduct', async (id) => {
	try {
		const {
			data
		} = await axios.get(`${API_URL}/products/${id}`);
		return stdSuccessHandler(data);
	} catch (error) {
		return stdErrorHandler(error);
	}
});

//  ======================================== INITIAL STATE

export interface ProductState {
	product: {
		data: Product | null;
		status: AsyncStatus;
		error: string | null;
	};
}
const initialState = {
	product: {
		data: null,
		status: 'idle',
		error: null
	}
} as ProductState;

//  ======================================== SLICES
const product = createSlice({
	name: 'product',
	initialState,
	reducers: {
		someActionDone: () => {
			console.log('done');
		}
	},

	extraReducers: (builder) => {
		builder.addCase(fetchProduct.pending, (state) => {
			state.product.status = 'pending';
		});
		builder.addCase(
			fetchProduct.fulfilled,
			(state, { payload: { data, error, success } }) => {
				if (success && data) {
					state.product.status = 'fulfilled';
					state.product.data = data;
				} else if (error) {
					state.product.status = 'rejected';
					state.product.error = error;
				}
			}
		);
		builder.addCase(fetchProduct.rejected, (state) => {
			state.product.status = 'rejected';
		});
	}
});
export const { someActionDone } = product.actions;
//  ======================================== EXPORTS
export const selectProduct = ({ product }: RootState): ProductState['product'] =>
	product.product;
//  ======================================== EXPORT DEFAULT
export default product.reducer;
//  ========================================
