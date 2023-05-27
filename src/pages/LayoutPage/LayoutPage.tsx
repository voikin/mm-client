import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import styles from './LayoutPage.module.scss'

const LayoutPage = () => {
	return (
		<>
			<NavBar />
			<div className={styles.outlet}></div>
			<Outlet />
		</>
	)
}

export default LayoutPage
