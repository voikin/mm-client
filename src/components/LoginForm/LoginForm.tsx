import {
	FieldErrors,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import styles from './LoginForm.module.css'
import { useEffect } from 'react'
import { ILoginForm } from './LoginForm.interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from 'react-query'
import AuthService from '../../services/AuthService'
import { AuthResponse } from '../../models/response/AuthResponse'
import { useAuthStore } from '../../stores/authStore'

export default function LoginForm() {
	const { login, isAuth } = useAuthStore()

	const loginMutation = useMutation(AuthService.login, {
		onSuccess: (data: AuthResponse) => login(data),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
	} = useForm<ILoginForm>()

	const submitHandler: SubmitHandler<ILoginForm> = async (data: ILoginForm) => {
		loginMutation.mutate(data)
	}

	const errorHandler: SubmitErrorHandler<ILoginForm> = (
		errors: FieldErrors<ILoginForm>
	) => console.log(errors)

	useEffect(() => clearErrors(), [])

	if (isAuth)
		return (
			<>
				<div className={styles['login-card']}>
					<div className={styles['login-card__message']}>
						Вход выполнен успешно!
					</div>
				</div>
			</>
		)

	return (
		<div className={styles['login-card']}>
			<form
				onSubmit={handleSubmit(submitHandler, errorHandler)}
				className={styles['login-card__form']}
			>
				<div className={styles['login-card__item']}>
					<p>Email</p>
					<input
						type='text'
						className={
							styles['login-card__input'] +
							' ' +
							(errors.email && styles['login-card__input__invalid'])
						}
						placeholder='Введите email'
						{...register('email', { required: true })}
					/>
				</div>
				<div className={styles['login-card__item']}>
					<p>Password</p>
					<input
						type='text'
						className={
							styles['login-card__input'] +
							' ' +
							(errors.password && styles['login-card__input__invalid'])
						}
						placeholder='Введите пароль'
						{...register('password', { required: true })}
					/>
				</div>
				<button
					className={
						styles['login-card__item'] + ' ' + styles['login-card__button']
					}
					disabled={loginMutation.isLoading}
				>
					{loginMutation.isLoading ? (
						<FontAwesomeIcon icon={faSpinner} spin />
					) : (
						'Войти'
					)}
				</button>
			</form>
		</div>
	)
}
