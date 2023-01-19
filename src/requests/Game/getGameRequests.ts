import useAxios from '@/requests/useAxios'
import type { axiosState } from '@/requests/useAxios'

const getGameRequests = async (dataState: axiosState) => {
	dataState.loading = true
	const { response, loading, error } = await useAxios(
		'get',
		'/game/game_requests'
	)
	if (error.value) {
		//	handle errors
		dataState.error = error.value
	}
	else if (response.value) {
		dataState.loading = loading.value
		return response.value
	}
}

export default getGameRequests;