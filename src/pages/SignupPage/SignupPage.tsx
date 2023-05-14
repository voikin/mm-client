import NavBar from '../../components/NavBar/NavBar'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './SignupPage.module.css'

export default function SignupPage() {
	return (
		<>
			<NavBar />
			<section className={styles.wrapper}>
				<SignupForm />
			</section>
		</>
	)
}
