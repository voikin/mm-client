import {
	FieldErrors,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import { useEffect, useState } from 'react'
import { ILoginForm } from './LoginForm.interface'
import { useMutation } from 'react-query'
import AuthService from '../../services/AuthService'
import { AuthResponse } from '../../models/response/AuthResponse'
import { useAuthStore } from '../../stores/authStore'
import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.scss'
import { HiArrowPath } from 'react-icons/hi2'

export default function LoginForm() {
	const { login, isAuth } = useAuthStore()
	const [errorMessage, setErrorMessage] = useState('')
	const navigate = useNavigate()

	const loginMutation = useMutation(AuthService.login, {
		onSuccess: (data: AuthResponse) => {
			login(data)
			navigate('/feed')
		},
		onError: (e: Error) => setErrorMessage('Ошибка входа: ' + e.message),
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
			<div className={styles.form_card__alert__success}>
				Вход выполнен успешно!
			</div>
		)

	return (
		<form
			className={styles.form_card}
			onSubmit={handleSubmit(submitHandler, errorHandler)}
		>
			{errorMessage && (
				<div className={styles.form_card__alert__error}>{errorMessage}</div>
			)}
			<div className={styles.form_card__inputs}>
				<div className={styles.form_card__heading}>Вход</div>
				<div className={styles.form_card__input_block}>
					<label htmlFor='email'>Электронный адрес</label>
					<input
						id='email'
						type='text'
						className={errors?.email && styles.form_card__input__error}
						{...register('email', {
							required: 'Это поле обязательное',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Некорректно указана почта',
							},
						})}
					></input>
					{errors.email && (
						<div className={styles.form_card__input__alert}>
							{errors?.email?.message}
						</div>
					)}
				</div>
				<div className={styles.form_card__input_block}>
					<label htmlFor='password'>Пароль</label>
					<input
						id='password'
						type='password'
						className={errors?.password && styles.form_card__input__error}
						{...register('password', {
							required: 'Это обязательное поле',
						})}
					></input>
					{errors.password && (
						<div className={styles.form_card__input__alert}>
							{errors.password?.message}
						</div>
					)}
				</div>
				<button
					type='submit'
					disabled={loginMutation.isLoading}
					className={styles.form_card__button}
				>
					{loginMutation.isLoading ? (
						<HiArrowPath className='animate-spin' />
					) : (
						<p>Отправить</p>
					)}
				</button>
			</div>
		</form>
	)
}
