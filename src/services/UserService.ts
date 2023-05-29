import { UserInfoResponse } from './../models/response/UserInfoResponse'
import $api from '../http'
import { UserInfo } from '../models/IUser'

export default class UserService {
	static async fetchUserData(): Promise<UserInfo> {
		const response = await $api.get<UserInfo>('/rations/user')
		return response.data
	}
}
