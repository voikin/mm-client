import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:8080'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = localStorage.getItem('accessToken')
			if (token) headers.set('Authorization', `Bearer ${token}`)
			return headers
		},
	}),
	endpoints: (builder) => ({
		ping: builder.query<any, void>({
			query: () => ({ url: 'ping' }),
		}),
	}),
})

export const { usePingQuery } = api
