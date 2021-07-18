//  ======================================== IMPORTS
import { combineReducers } from '@reduxjs/toolkit';
import auth from 'features/auth/authSlice';
import index from 'features/index/indexSlice'
import product from 'features/product/productSlice'
//  ========================================

const Reducers = combineReducers({
	auth, index, product
});

//  ======================================== EXPORTS
export type RootState = ReturnType<typeof Reducers>;
export default Reducers;
//  ========================================
