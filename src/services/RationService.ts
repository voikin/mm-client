import $api from '../http'
import { IRation } from '../models/IRation'

export default class RationService {
	static async fetchFeed(): Promise<IRation[]>{
		const response = await $api.get<IRation[]>('rations/feed')
		return response.data
	}

	static async fetchGenerate() {
		const response = await $api.get('rations/generate')
		return response.data
	}
}
