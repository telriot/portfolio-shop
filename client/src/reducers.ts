//  ======================================== IMPORTS
import { combineReducers } from '@reduxjs/toolkit';
import auth from 'features/auth/authSlice';
//  ========================================

const Reducers = combineReducers({
	auth
});

//  ======================================== EXPORTS
export type RootState = ReturnType<typeof Reducers>;
export default Reducers;
//  ========================================
