import $api from '../http'

export default class RationService {
	static async fetchFeed() {
		const response = await $api.get('api/rations/feed')
		await new Promise((resolve) => setTimeout(resolve, 2000))
		return response.data
	}
}
