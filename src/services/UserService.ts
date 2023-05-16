import { UserInfoResponse } from './../models/response/UserInfoResponse'
import { AxiosResponse } from 'axios'
import $api from '../http'

export default class UserService {
	static async fetchUserData(
		fields?: string[]
	): Promise<AxiosResponse<UserInfoResponse>> {
		return $api.post<UserInfoResponse>('/api/user', fields)
	}
}
