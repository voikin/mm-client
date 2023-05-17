import { AuthResponse } from './../models/response/AuthResponse'
import axios from 'axios'
import $api, { API_URL } from '../http'
import { LoginRequest, SignupRequest } from '../models/requests/AuthRequests'

export default class AuthService {
	static async login(credentials: LoginRequest): Promise<AuthResponse> {
		const response = await $api.post<AuthResponse>('/auth/login', credentials)
		return response.data
	}

	static async signup(credentials: SignupRequest): Promise<void> {
		return $api.post('/auth/signup', credentials)
	}

	static async logout(): Promise<void> {
		return $api.get('/auth/logout')
	}

	static async checkAuth() {
		const response = await axios.get<AuthResponse>(`${API_URL}auth/refresh`, {
			withCredentials: true,
		})
        return response.data
	}
}
