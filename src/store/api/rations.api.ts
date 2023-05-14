import { RationResponse, RationsListResponse } from '../../models/response/RationResponse'

import { api } from './api'

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		ration: builder.query<RationResponse, null>({
			query: () => 'api/rations/generate'
		}),
		rationsList: builder.query<RationsListResponse, null>({
			query: () => 'api/rations/feed'
		}),
	}),
})

export const { useRationQuery, useRationsListQuery } = authApi
