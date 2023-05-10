import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isAuth: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload
		},
	},
})

export const { actions: authActions, reducer: authReducer } = authSlice
