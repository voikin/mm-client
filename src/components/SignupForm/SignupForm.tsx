import {
	FieldErrors,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import { HiArrowPath } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react'
import { ISignupForm } from './SignupForm.interface'
import { useMutation } from 'react-query'
import AuthService from '../../services/AuthService'
import { useAuthStore } from '../../stores/authStore'
import styles from './SignupForm.module.scss'
import { useNavigate } from 'react-router-dom'

export default function SignupForm() {
	const { isAuth } = useAuthStore()

	const [isMailSended, setIsMailSended] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const signupMutation = useMutation(AuthService.signup, {
		onSuccess: (data) => {
			console.log(data)
			setErrorMessage('')
			setIsMailSended(true)
		},
		onError: (error: Error) =>
			setErrorMessage('Ошибка регистрации: ' + error.message),
	})

	const navigate = useNavigate()

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
		console.log(data);
		setErrorMessage('')
		signupMutation.mutate(data)
	}

	const errorHandler: SubmitErrorHandler<ISignupForm> = (
		errors: FieldErrors<ISignupForm>
	) => {
		const keys = Object.keys(errors) as Array<keyof FieldErrors<ISignupForm>>
		for (const key of keys) {
			if (errors[key]?.message) {
				setErrorMessage('Ошибка валидации: ' + errors[key]?.message)
				return
			}
		}
	}

	useEffect(() => clearErrors(), [])

	useEffect(() => {
		if (isMailSended) {
			const redirectTimer = setTimeout(() => {
				navigate('/login')
				setIsMailSended(true)
			}, 5000)
			return () => clearTimeout(redirectTimer)
		}
	}, [isMailSended])

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
			{isMailSended && (
				<div className={styles.form_card__alert__success}>
					Пожалуйста, подтвердите аккаунт в электронном письме. После этого
					авторизуйтесь на сервисе
				</div>
			)}
			{errorMessage && (
				<div className={styles.form_card__alert__error}>{errorMessage}</div>
			)}
			<div className={styles.form_card__inputs}>
				<h1 className={styles.form_card__heading}>Регистрация</h1>
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
					<label htmlFor='age'>Возраст</label>
					<input
						id='age'
						type='number'
						className={errors?.age && styles.form_card__input__error}
						{...register('age', {
							required: 'Это обязательное поле',
							max: {
								value: 150,
								message: 'Нам кажется кто-то врет',
							},
						})}
					></input>
					{errors.age && (
						<div className={styles.form_card__input__alert}>
							{errors.age?.message}
						</div>
					)}
				</div>
				<div className={styles.form_card__input_block}>
					<label htmlFor='weight'>Вес</label>
					<input
						id='weight'
						type='number'
						className={errors?.weight && styles.form_card__input__error}
						{...register('weight', {
							required: 'Это обязательное поле',
						})}
					></input>
					{errors.weight && (
						<div className={styles.form_card__input__alert}>
							{errors.weight?.message}
						</div>
					)}
				</div>
				<div className={styles.form_card__input_block}>
					<label htmlFor='height'>Рост</label>
					<input
						id='height'
						type='number'
						className={errors?.height && styles.form_card__input__error}
						{...register('height', {
							required: 'Это обязательное поле',
						})}
					></input>
					{errors.height && (
						<div className={styles.form_card__input__alert}>
							{errors.height?.message}
						</div>
					)}
				</div>
				<div className={styles.form_card__input_block}>
					<div className={styles.form_card__gender_block}>
						<label>Пол:</label>
						<div>
							<input
								type='radio'
								id='gender-male'
								value='male'
								{...register('sex')}
							/>
							<label htmlFor='gender-male'>Мужской</label>
						</div>
						<div>
							<input
								type='radio'
								id='gender-female'
								value='female'
								{...register('sex')}
							/>
							<label htmlFor='gender-female'>Женский</label>
						</div>
					</div>
					{errors.sex && (
						<div className={styles.form_card__input__alert}>
							{errors.sex?.message}
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
							minLength: {
								value: 6,
								message: 'Пароль должен состоять минимум из 6 символов',
							},
						})}
					></input>
					{errors.password && (
						<div className={styles.form_card__input__alert}>
							{errors.password?.message}
						</div>
					)}
				</div>
				<div className={styles.form_card__input_block}>
					<label htmlFor='confirmPassword'>Подтвердите пароль</label>
					<input
						id='confirmPassword'
						type='password'
						className={
							errors?.confirmPassword && styles.form_card__input__error
						}
						{...register('confirmPassword', {
							required: 'Это обязательное поле',
							validate: (value) =>
								value === password.current || 'Пароли не совпадают',
						})}
					></input>
					{errors.confirmPassword && (
						<div className={styles.form_card__input__alert}>
							{errors.confirmPassword?.message}
						</div>
					)}
				</div>
				<button
					type='submit'
					disabled={signupMutation.isLoading}
					className={styles.form_card__button}
				>
					{signupMutation.isLoading ? (
						<HiArrowPath className='animate-spin' />
					) : (
						<p>Отправить</p>
					)}
				</button>
			</div>
		</form>
	)
}
