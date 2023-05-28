import { useQuery } from 'react-query'
import UserService from '../../services/UserService'
import styles from './UserProfile.module.scss'
import { useAuthStore } from '../../stores/authStore'
import { HiArrowPath, HiUser } from 'react-icons/hi2'
import { IRation, rationsMock } from '../../models/IRation'
import { UserInfo } from '../../models/IUser'
import { useState } from 'react'
import ModalRation from '../Feed/ModalRation/ModalRation'

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

	const [selectedRation, setSelectedRation] = useState<IRation | null>(null)

	const openModal = (ration: IRation) => {
		setSelectedRation(ration)
	}

	const closeModal = () => {
		setSelectedRation(null)
	}

	const triedRations = rationsMock
	triedRations[0].id = 1
	triedRations[1].id = 1
	triedRations[0].date = new Date()
	triedRations[1].date = new Date()

	const userInfo = {} as UserInfo
	userInfo.age = 20
	userInfo.height = 186
	userInfo.weight = 75
	userInfo.triedRations = triedRations
	userInfo.preferences = [
		'помидоры',
		'молоко',
		'курица',
		'помидоры',
		'молоко',
		'курица',
		'помидоры',
		'молоко',
		'курица',
		'помидоры',
		'молоко',
		'курица',
	]

	if (!isAuth)
		return <div className={styles.auth_error}>Вы не авторизированны</div>

	return (
		<>
			{fetchUserDataQuery.isLoading ? (
				<div className='w-full h-full grid place-content-center'>
					<HiArrowPath className='animate-spin w-20 h-20 text-primary' />
				</div>
			) : (
				<div className={styles.layout}>
					<div className={styles.userInfo}>
						<HiUser className={styles.avatar} />
						<div className={styles.parameters}>
							<p>Возраст: {userInfo.age}</p>
							<p>Вес: {userInfo.weight}</p>
							<p>Рост: {userInfo.height}</p>
						</div>
					</div>
					<div className={styles.preferences_layout}>
						<h2>Избранные предпочтения</h2>
						<div className={styles.preferences}>
							{userInfo.preferences.map((preference) => (
								<p className={styles.preference}>{preference}</p>
							))}
						</div>
					</div>
					<div className={styles.preferences_layout}>
						<h2>Попробованные рационы</h2>
						<div className={styles.preferences}>
							{userInfo.triedRations.map((ration) => (
								<p
									className={styles.preference}
									onClick={() => openModal(ration)}
								>
									{ration.date?.toDateString()}
								</p>
							))}
						</div>
					</div>
				</div>
			)}
			{selectedRation && (
				<ModalRation ration={selectedRation} onClose={closeModal} />
			)}
		</>
	)
}
