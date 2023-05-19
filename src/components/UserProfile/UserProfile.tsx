import { useQuery } from 'react-query'
import UserService from '../../services/UserService'
import { Alert, Box, CircularProgress } from '@mui/material'
import { useAuthStore } from '../../stores/authStore'

export default function UserProfile() {
	const { isAuth } = useAuthStore()
	const fetchUserDataQuery = useQuery('userData', UserService.fetchUserData, {
		onSuccess: (data) => {
			console.log(data)
		},
		onError: (e) => {
			console.log(e)
		},
		staleTime: Infinity,
	})

	if (!isAuth)
		return (
			<Alert severity='error' sx={{ marginTop: '16px' }}>
				Вы не авторизированны
			</Alert>
		)

	return (
		<pre>
			{fetchUserDataQuery.isLoading ? (
				<Box width='100vw' display='flex' justifyContent='center' mt='16px'>
					<CircularProgress size={48} />
				</Box>
			) : (
				JSON.stringify(fetchUserDataQuery.data, null, 4)
			)}
		</pre>
	)
}
