import NavBar from '../../components/NavBar/NavBar'
import UserCabinet from '../../components/UserCabinet/UserCabinet'
import styles from './UserCabinetPage.module.css'

export default function UserCabinetPage() {
	return (
		<>
			<NavBar />
			<section className={styles.wrapper}>
				<UserCabinet />
			</section>
		</>
	)
}
