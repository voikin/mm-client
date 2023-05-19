import { useQuery } from 'react-query'
import RationService from '../../services/RationService'
import { Alert, Box, CircularProgress } from '@mui/material'
import { useAuthStore } from '../../stores/authStore'

export default function Feed() {
	const { isAuth } = useAuthStore()
	const fetchFeedQuery = useQuery('feed', RationService.fetchFeed, {
		onSuccess: (data) => {
			console.log(data)
		},
	})
	if (!isAuth)
		return (
			<Alert severity='error' sx={{ marginTop: '16px' }}>
				Вы не авторизированны
			</Alert>
		)
	return (
		<>
			{fetchFeedQuery.isLoading ? (
				<Box width='100vw' display='flex' justifyContent='center' mt='16px'>
					<CircularProgress size={48} />
				</Box>
			) : (
				<pre>{JSON.stringify(fetchFeedQuery.data, null, 4)}</pre>
			)}
		</>
	)
}
