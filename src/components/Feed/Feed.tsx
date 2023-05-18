import { useQuery } from 'react-query'
import RationService from '../../services/RationService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Feed() {
	const fetchFeedQuery = useQuery('feed', RationService.fetchFeed, {
		onSuccess: (data) => {
			console.log(data)
		},
	})
	return (
		<>
			{fetchFeedQuery.isLoading ? (
				<FontAwesomeIcon style={{ color: '#fff' }} icon={faSpinner} spin />
			) : (
				<pre style={{ color: '#fff' }}>
					{JSON.stringify(fetchFeedQuery.data, null, 4)}
				</pre>
			)}
		</>
	)
}
