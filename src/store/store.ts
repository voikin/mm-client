import { api } from './api/api'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.slice'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: authReducer,
	},
	middleware: (getDefault) => getDefault().concat(api.middleware),
})
