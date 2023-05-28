import { useQuery } from 'react-query'
import RationService from '../../services/RationService'
import styles from './Feed.module.scss'
import { useAuthStore } from '../../stores/authStore'
import { HiArrowPath } from 'react-icons/hi2'
import Ration from './Ration/Ration'
import { IRation, rationsMock } from '../../models/IRation'
import { useState } from 'react'
import ModalRation from './ModalRation/ModalRation'

export default function Feed() {
	const { isAuth } = useAuthStore()
	const fetchFeedQuery = useQuery('feed', RationService.fetchFeed, {
		onSuccess: (data) => {
			console.log(data)
		},
	})

	const rations = rationsMock

	const [selectedRation, setSelectedRation] = useState<IRation | null>(null)

	const openModal = (ration: IRation) => {
		setSelectedRation(ration)
	}

	const closeModal = () => {
		setSelectedRation(null)
	}

	if (!isAuth)
		return <div className={styles.auth_error}>Вы не авторизированны</div>
	return (
		<>
			{fetchFeedQuery.isLoading ? (
				<div className='w-full h-full grid place-content-center'>
					<HiArrowPath className='animate-spin w-20 h-20 text-primary' />
				</div>
			) : (
				<div className={styles.feed}>
					{rations.map((ration) => (
						<Ration ration={ration} onClick={() => openModal(ration)} />
					))}
				</div>
			)}
			{selectedRation && (
				<ModalRation ration={selectedRation} onClose={closeModal} />
			)}
		</>
	)
}
