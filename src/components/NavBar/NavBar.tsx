import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavBar.module.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className={styles.layout}>
			<nav className={styles.navbar}>
				<Link className={styles.navbar__home} to={'/'}>
					<FontAwesomeIcon icon={faHouse} />
				</Link>
				<Link to={'/login'} className={styles.navbar__item}>
					<p className={styles.navbar__item__login}>Log in</p>
				</Link>
				<Link to={'/signup'} className={styles.navbar__item}>
					<p className={styles.navbar__item__login}>Sign up</p>
				</Link>
				<Link to={'/user'} className={styles.navbar__item}>
					<p className={styles.navbar__item__login}>Личный кабинет</p>
				</Link>
			</nav>
		</div>
	)
}

export default NavBar
