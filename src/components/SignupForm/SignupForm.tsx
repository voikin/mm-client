import {
	FieldErrors,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import styles from './SignupForm.module.css'
import { useEffect, useRef } from 'react'
import { useLoginMutation, useSignupMutation } from '../../store/api/auth.api'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/auth/auth.slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPassport, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { ISignupForm } from './SignupForm.interface'

export default function SignupForm() {
	const dispatch = useDispatch()

	const [mutate, { isLoading }] = useSignupMutation()

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
		try {
			const res = await mutate(data).unwrap()
			console.log(res)
		} catch (e) {
			console.error(e)
		}
	}

	const errorHandler: SubmitErrorHandler<ISignupForm> = (
		errors: FieldErrors<ISignupForm>
	) => console.log(errors)

	useEffect(() => clearErrors(), [])

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
					{isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Войти'}
				</button>
			</form>
		</div>
	)
}
