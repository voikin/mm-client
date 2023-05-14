import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.module.css'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage'
import UserCabinetPage from './pages/UserCabinetPage/UserCabinetPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'login',
		element: <LoginPage />,
	},
	{
		path: 'signup',
		element: <SignupPage />,
	},
	{
		path: 'user',
		element: <UserCabinetPage />,
	},
])

const App = () => {
	return (
		<>
			{/* <NavBar /> */}
			<RouterProvider router={router} />
		</>
	)
}

export default App
