import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavBar.module.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'
import { useMutation } from 'react-query'
import AuthService from '../../services/AuthService'
import logo from './../../assets/logo.svg'

const NavBar = () => {
	const { isAuth, logout, user } = useAuthStore()
	const { mutate: logoutMutate } = useMutation(AuthService.logout, {
		onSuccess: () => logout(),
	})
	return (
		<div className={styles.layout}>
			<nav className={styles.navbar}>
				<div className={styles.logo_block}>
					<img src={logo} alt='logo' className={styles.logo_img} />
					<p className={styles.logo_text}>mealmapper</p>
					{isAuth && <p className={styles.logo_text}>{user.email}</p>}
				</div>
				<div className={styles.navbar_navigation}>
					<Link className={styles.navbar__home} to={isAuth ? '/feed' : '/'}>
						<FontAwesomeIcon icon={faHouse} />
					</Link>
					{!isAuth ? (
						<>
							<Link
								to={'/login'}
								className={
									styles.navbar__item + ' ' + styles.navbar__item__login
								}
							>
								Войти
							</Link>
							<Link
								to={'/signup'}
								className={
									styles.navbar__item + ' ' + styles.navbar__item__login
								}
							>
								Зарегистрироваться
							</Link>
						</>
					) : (
						<>
							<Link
								to={'/user'}
								className={
									styles.navbar__item + ' ' + styles.navbar__item__login
								}
							>
								Личный кабинет
							</Link>
							<Link
								to={'/'}
								className={
									styles.navbar__item + ' ' + styles.navbar__item__login
								}
								onClick={() => logoutMutate()}
							>
								Выйти
							</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	)
}

export default NavBar
