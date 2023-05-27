import { useQuery } from 'react-query'
import UserService from '../../services/UserService'
import styles from './UserProfile.module.scss'
import { useAuthStore } from '../../stores/authStore'
import { HiArrowPath } from 'react-icons/hi2'

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
		return <div className={styles.auth_error}>Вы не авторизированны</div>

	return (
		<pre>
			{fetchUserDataQuery.isLoading ? (
				<div className='w-full h-full grid place-content-center'>
					<HiArrowPath className='animate-spin w-20 h-20 text-primary' />
				</div>
			) : (
				JSON.stringify(fetchUserDataQuery.data, null, 4)
			)}
		</pre>
	)
}
