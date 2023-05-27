import { UserInfoResponse } from './../models/response/UserInfoResponse'
import $api from '../http'

export default class UserService {
	static async fetchUserData(): Promise<UserInfoResponse> {
		const response = await $api.post<UserInfoResponse>('/api/user')
		return response.data
	}
}
