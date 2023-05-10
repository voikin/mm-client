import LoginForm from './components/LoginForm/LoginForm'
import styles from './App.module.css'
import { api, usePingQuery } from './store/api/api'

function App() {
	return (
		<div className={styles.wrapper}>
			<LoginForm />
		</div>
	)
}

export default App
