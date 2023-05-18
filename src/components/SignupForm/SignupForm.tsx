import {
	FieldErrors,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import styles from './SignupForm.module.css'
import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { ISignupForm } from './SignupForm.interface'
import { useMutation } from 'react-query'
import AuthService from '../../services/AuthService'
import { useAuthStore } from '../../stores/authStore'

export default function SignupForm() {
	const { isAuth, isMailSended, sendMail } = useAuthStore()

	const signupMutation = useMutation(AuthService.signup, {
		onError: (error) => console.log(error),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		watch,
	} = useForm<ISignupForm>({ mode: 'onChange' })

	const password = useRef({})
	password.current = watch('password', '')

	const submitHandler: SubmitHandler<ISignupForm> = async (
		data: ISignupForm
	) => {
		signupMutation.mutate(data)
		sendMail()
	}

	const errorHandler: SubmitErrorHandler<ISignupForm> = (
		errors: FieldErrors<ISignupForm>
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

	if (isMailSended)
		return (
			<>
				<div className={styles['login-card']}>
					<div className={styles['login-card__message']}>
						Пожалуйста, подтвердите аккаунт в электронном письме. После этого
						авторизуйтесь на сервисе
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
						{...register('email', {
							required: 'Это обязательное поле',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Некорректный email',
							},
						})}
					/>
					{errors.email && (
						<span className={styles['login-card__error_message']}>
							{errors.email?.message}
						</span>
					)}
				</div>
				<div className={styles['login-card__item']}>
					<p>Password</p>
					<input
						type='password'
						className={
							styles['login-card__input'] +
							' ' +
							(errors.password && styles['login-card__input__invalid'])
						}
						placeholder='Введите пароль'
						{...register('password', {
							required: 'Это обязательное поле',
							minLength: {
								value: 6,
								message: 'Пароль должен состоять минимум из 6 символов',
							},
						})}
					/>
					{errors.password && (
						<span className={styles['login-card__error_message']}>
							{errors.password?.message}
						</span>
					)}
				</div>
				<div className={styles['login-card__item']}>
					<p>Confirm password</p>
					<input
						type='password'
						className={
							styles['login-card__input'] +
							' ' +
							(errors.confirmPassword && styles['login-card__input__invalid'])
						}
						placeholder='Подтвердите пароль'
						{...register('confirmPassword', {
							required: 'Это обязательное поле',
							validate: (value) =>
								value === password.current || 'Пароли не совпадают',
						})}
					/>
					{errors?.confirmPassword && (
						<span className={styles['login-card__error_message']}>
							{errors.confirmPassword?.message}
						</span>
					)}
				</div>
				<button
					className={
						styles['login-card__item'] + ' ' + styles['login-card__button']
					}
				>
					{signupMutation.isLoading ? (
						<FontAwesomeIcon icon={faSpinner} spin />
					) : (
						'Войти'
					)}
				</button>
			</form>
		</div>
	)
}
