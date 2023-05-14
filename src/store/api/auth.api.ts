import { ILoginForm } from '../../components/LoginForm/LoginForm.interface'
import { ISignupForm } from '../../components/SignupForm/SignupForm.interface'
import { AuthResponse } from '../../models/response/AuthResponse'
import { api } from './api'

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<AuthResponse, ILoginForm>({
			query: (credentials) => ({
				url: 'auth/login',
				method: 'POST',
				body: credentials,
			}),
		}),
		signup: builder.mutation<null, ISignupForm>({
			query: (credentials) => ({
				url: 'auth/signup',
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
})

export const { useLoginMutation } = authApi
