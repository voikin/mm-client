import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import './App.module.css'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage'
import LayoutPage from './pages/LayoutPage/LayoutPage'
import { useMutation } from 'react-query'
import { useEffect } from 'react'
import { useAuthStore } from './stores/authStore'
import AuthService from './services/AuthService'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'
import FeedPage from './pages/FeedPage/FeedPage'
import { HiArrowPath } from 'react-icons/hi2'

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
			{
				path: 'feed',
				element: <FeedPage />,
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
		console.log(accessToken)
		if (accessToken) loginMutation.mutate()
	}, [])

	return (
		<>
			{loginMutation.isLoading ? (
				<div className='w-screen h-screen grid place-content-center'>
					<HiArrowPath className='animate-spin w-20 h-20 text-primary' />
				</div>
			) : (
				<RouterProvider router={router} />
			)}
		</>
	)
}

export default App
