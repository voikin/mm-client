import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.module.css'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage'
import LayoutPage from './pages/LayoutPage/LayoutPage'
import { useMutation } from 'react-query'
import { useEffect } from 'react'
import { useAuthStore } from './stores/authStore'
import AuthService from './services/AuthService'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		children: [
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
				element: <UserProfilePage />,
			},
		],
	},
])

const App = () => {
	const { login } = useAuthStore()

	const loginMutation = useMutation(AuthService.checkAuth, {
		onSuccess: (data) => {
			login(data)
		},
		onError: (error) => {
			console.log(error)
		},
	})

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken')
		if (accessToken) loginMutation.mutate()
	}, [])

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
