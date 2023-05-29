import { useQuery } from 'react-query'
import UserService from '../../services/UserService'
import styles from './UserProfile.module.scss'
import { useAuthStore } from '../../stores/authStore'
import {
	HiArrowPath,
	HiCog,
	HiCog6Tooth,
	HiGlobeEuropeAfrica,
	HiUser,
	HiXMark,
} from 'react-icons/hi2'
import { IRation, rationsMock } from '../../models/IRation'
import { UserInfo } from '../../models/IUser'
import { useState } from 'react'
import ModalRation from '../Feed/ModalRation/ModalRation'
import { PreferencesEdit } from './PreferencesEdit/PreferencesEdit'

export default function UserProfile() {
	const { isAuth } = useAuthStore()
	const fetchUserInfoQuery = useQuery('userData', UserService.fetchUserData, {
		onSuccess: (data) => {
			setPreferences(data.preferences)
			console.log(preferences)
			console.log(data.preferences)
		},
		onError: (e) => {
			console.log(e)
		},
		staleTime: Infinity,
	})

	const [selectedRation, setSelectedRation] = useState<IRation | null>(null)

	const [preferences, setPreferences] = useState<string[] | null>(null)

	const openModal = (ration: IRation) => {
		setSelectedRation(ration)
	}

	const closeModal = () => {
		setSelectedRation(null)
	}

	const [isEditOpen, setIsEditOpen] = useState(false)

	const toggleIsEditOpen = () => setIsEditOpen((state) => !state)

	if (!isAuth)
		return <div className={styles.auth_error}>Вы не авторизированны</div>

	return (
		<>
			{fetchUserInfoQuery.isLoading ? (
				<div className='w-full h-full grid place-content-center'>
					<HiArrowPath className='animate-spin w-20 h-20 text-primary' />
				</div>
			) : (
				<div className={styles.layout}>
					<div className={styles.userInfo}>
						<HiUser className={styles.avatar} />
						<div className={styles.parameters}>
							<p>Возраст: {fetchUserInfoQuery.data.age}</p>
							<p>Вес: {fetchUserInfoQuery.data.weight}</p>
							<p>Рост: {fetchUserInfoQuery.data.height}</p>
						</div>
					</div>
					<div className={styles.preferences_layout}>
						<h2>
							Избранные предпочтения
							<HiCog6Tooth className={styles.x} onClick={toggleIsEditOpen} />
						</h2>
						{isEditOpen ? (
							<PreferencesEdit
								preferences={preferences}
								setPreferences={setPreferences}
							/>
						) : preferences ? (
							<div className={styles.preferences}>
								{preferences.map((preference) => (
									<p className={styles.preference}>{preference}</p>
								))}
							</div>
						) : (
							<h1>lox</h1>
						)}
					</div>
					<div className={styles.preferences_layout}>
						<h2>Попробованные рационы</h2>
						<div className={styles.preferences}>
							{fetchUserInfoQuery.data.triedRations.map((ration) => (
								<p
									className={styles.preference}
									onClick={() => openModal(ration)}
								>
									{ration.date}
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
