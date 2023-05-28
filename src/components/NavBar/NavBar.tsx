import { Link } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'
import { useQuery } from 'react-query'
import AuthService from '../../services/AuthService'
import logo from './../../assets/logo.svg'
import styles from './NavBar.module.scss'
import RationService from '../../services/RationService'
import { HiBolt } from 'react-icons/hi2'
import { useState } from 'react'
import { IRation } from '../../models/IRation'
import ModalRation from '../Feed/ModalRation/ModalRation'

const NavBar = () => {
	const { isAuth, logout, user } = useAuthStore()
	const logoutQuery = useQuery('logout', AuthService.logout, {
		onSuccess: () => logout(),
		enabled: false,
	})
	const [generatedRation, setGeneratedRation] = useState<IRation | null>(null)

	const fetchGenerateQuery = useQuery('', RationService.fetchGenerate, {
		onSuccess: (data) => {
			setGeneratedRation(data)
			console.log(data)
		},
		enabled: false,
	})


	const closeModal = () => {
		setGeneratedRation(null)
	}
	return (
		<header className={styles.header}>
			<div className={styles.header__logo_block}>
				<img src={logo} alt='logo' className={styles.header__logo_img} />
				<p>mealmapper</p>
			</div>
			<div className={styles.header__nav}>
				{isAuth && <p>{user.email}</p>}
				{isAuth ? (
					<>
						<button onClick={() => fetchGenerateQuery.refetch()} className={styles.header__item}><HiBolt/></button>
						<Link to='/feed' className={styles.header__item}>
							Лента
						</Link>
						<Link to='/user' className={styles.header__item}>
							Личный кабинет
						</Link>
						<Link
							to='/'
							className={styles.header__item}
							onClick={() => logoutQuery.refetch()}
						>
							Выйти
						</Link>
						
					</>
				) : (
					<>
						<Link to='/login' className={styles.header__item}>
							Войти
						</Link>
						<Link to='/signup' className={styles.header__item}>
							Зарегистрироваться
						</Link>
					</>
				)}
			</div>
			{generatedRation && (
				<ModalRation ration={generatedRation} onClose={closeModal} />
			)}
		</header>
	)
}

export default NavBar
