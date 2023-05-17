import { UserInfoResponse } from './../models/response/UserInfoResponse'
import $api from '../http'

export default class UserService {
	static async fetchUserData(
		fields?: string[] | void
	): Promise<UserInfoResponse> {
		const response = await $api.post<UserInfoResponse>('/api/user', fields)
		await new Promise((resolve) => setTimeout(resolve, 2000))
		return response.data
	}
}
