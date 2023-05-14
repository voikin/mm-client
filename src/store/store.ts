import { api } from './api/api'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.slice'

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authReducer,
})


export const setupStore = () => configureStore({
	reducer: rootReducer,
	middleware: (getDefault) => getDefault().concat(api.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']