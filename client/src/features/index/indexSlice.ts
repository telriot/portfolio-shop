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
export const fetchFeaturedProducts = createAsyncThunk<
	ThunkReturnValue<Product[]>,
	void,
	ThunkAPIReturnValue
>('index/fetchFeaturedProducts', async () => {
	try {
		const {
			data: { docs }
		} = await axios.get(`${API_URL}/products`);
		return stdSuccessHandler(docs);
	} catch (error) {
		return stdErrorHandler(error);
	}
});

//  ======================================== INITIAL STATE

export interface IndexState {
	products: {
		data: Product[];
		status: AsyncStatus;
		error: string | null;
	};
}
const initialState = {
	products: {
		data: [],
		status: 'idle',
		error: null
	}
} as IndexState;

//  ======================================== SLICES
const index = createSlice({
	name: 'index',
	initialState,
	reducers: {
		someActionDone: () => {
			console.log('done');
		}
	},

	extraReducers: (builder) => {
		builder.addCase(fetchFeaturedProducts.pending, (state) => {
			state.products.status = 'pending';
		});
		builder.addCase(
			fetchFeaturedProducts.fulfilled,
			(state, { payload: { data, error, success } }) => {
				if (success && data) {
					state.products.status = 'fulfilled';
					state.products.data = data;
				} else if (error) {
					state.products.status = 'rejected';
					state.products.error = error;
				}
			}
		);
		builder.addCase(fetchFeaturedProducts.rejected, (state) => {
			state.products.status = 'rejected';
		});
	}
});
export const { someActionDone } = index.actions;
//  ======================================== EXPORTS
export const selectProducts = ({ index }: RootState): IndexState['products'] =>
	index.products;
//  ======================================== EXPORT DEFAULT
export default index.reducer;
//  ========================================
