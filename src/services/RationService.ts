import $api from '../http'

export default class RationService {
	static async fetchFeed() {
		const response = await $api.get('api/rations/feed')
		return response.data
	}
}
