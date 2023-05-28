import { UserInfoResponse } from './../models/response/UserInfoResponse'
import $api from '../http'

export default class UserService {
	static async fetchUserData(): Promise<UserInfoResponse> {
		const response = await $api.get<UserInfoResponse>('/rations/user')
		return response.data
	}
}
