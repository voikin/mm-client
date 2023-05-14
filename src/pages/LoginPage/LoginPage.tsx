import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './LoginPage.module.css'
import NavBar from '../../components/NavBar/NavBar'

export default function LoginPage() {
	return (
		<>
			<NavBar />
			<section className={styles.wrapper}>
				<LoginForm />
			</section>
		</>
	)
}
