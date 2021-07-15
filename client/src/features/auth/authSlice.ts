//  ======================================== IMPORTS
import { createSlice } from '@reduxjs/toolkit';
//import { RootState } from 'reducers';

//  ======================================== UTILS

//  ======================================== ENTITIES

//  ======================================== THUNKS

//  ======================================== INITIAL STATE

export interface AuthState {
	email: string;
}
const initialState = {
	email: ''
} as AuthState;

//  ======================================== SLICES
const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {},

	// extraReducers: (builder) => {}
});

//  ======================================== EXPORTS

//  ======================================== EXPORT DEFAULT
export default auth.reducer;
//  ========================================
