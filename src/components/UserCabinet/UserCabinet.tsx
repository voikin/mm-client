import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetUserInfoQuery } from '../../store/api/user.api'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const UserCabinet = () => {
	const { data, isLoading } = useGetUserInfoQuery()
	return (
		<pre style={{ color: 'white' }}>
			{isLoading ? (
				<FontAwesomeIcon icon={faSpinner} spin />
			) : (
				JSON.stringify(data, null, 4)
			)}
		</pre>
	)
}

export default UserCabinet
