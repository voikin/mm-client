import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query'
import UserService from '../../services/UserService'
import { useEffect, useState } from 'react'
import { UserInfoResponse } from '../../models/response/UserInfoResponse'

export default function UserProfile() {
	const fetchUserDataQuery = useQuery('userData', UserService.fetchUserData, {
		onSuccess: (data) => {
			console.log(data)
		},
		onError: (e) => {
			console.log(e)
		},
		staleTime: Infinity,
	})

	useEffect(() => {
		fetchUserDataQuery.refetch()
	}, [])

	return (
		<pre style={{ color: 'white' }}>
			{fetchUserDataQuery.isLoading ? (
				<FontAwesomeIcon icon={faSpinner} spin />
			) : (
				JSON.stringify(fetchUserDataQuery.data, null, 4)
			)}
		</pre>
	)
}
