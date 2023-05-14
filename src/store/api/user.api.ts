import { field } from '../../models/requests/GetUserInfoRequest'
import { UserInfoResponse } from '../../models/response/UserInfoResponse'
import { api } from './api'

export const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUserInfo: builder.query<UserInfoResponse, field[] | void>({
			query: (userFields) => ({
				url: 'api/user',
				method: 'POST',
				body: userFields,
			}),
		}),
	}),
})

export const { useGetUserInfoQuery } = userApi
