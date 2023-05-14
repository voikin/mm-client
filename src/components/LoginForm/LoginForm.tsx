import {
	FieldErrors,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import styles from './LoginForm.module.css'
import { FC, useEffect } from 'react'
import { ILoginForm } from './LoginForm.interface'
import { useLoginMutation } from '../../store/api/auth.api'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/auth/auth.slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function LoginForm() {
	const dispatch = useDispatch()

	const [mutate, { isLoading }] = useLoginMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
	} = useForm<ILoginForm>()

	const submitHandler: SubmitHandler<ILoginForm> = async (data: ILoginForm) => {
		try {
			const res = await mutate(data).unwrap()
			console.log(res)
			dispatch(authActions.setAuth(true))
		} catch (e) {
			console.error(e)
			dispatch(authActions.setAuth(false))
		}
	}

	const errorHandler: SubmitErrorHandler<ILoginForm> = (
		errors: FieldErrors<ILoginForm>
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
				>
					{isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Войти'}
				</button>
			</form>
		</div>
	)
}
