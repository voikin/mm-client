import $api from '../http'
import { IIngredient, IRation } from '../models/IRation'

export default class RationService {
	static async fetchFeed(): Promise<IRation[]>{
		const response = await $api.get<IRation[]>('rations/feed')
		return response.data
	}

	static async fetchGenerate() {
		const response = await $api.get('rations/generate')
		return response.data
	}

	static async fetchProducts(): Promise<string[]> {
		const response = await $api.get<string[]>('rations/products')
		return response.data
	}

	static async addPreference(preference: string) {
		const response = await $api.put('users/preference/' + preference)
		return response.data
	}
}
