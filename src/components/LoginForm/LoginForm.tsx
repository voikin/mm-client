import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import styles from './LoginForm.module.css'
import { useEffect } from 'react'
import { ILoginForm } from './LoginForm.interface'

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
	} = useForm<ILoginForm>()
	const submit: SubmitHandler<ILoginForm> = (data: ILoginForm) =>
		console.log(data)
	const error: SubmitErrorHandler<ILoginForm> = (errors: any) =>
		console.log(errors)

	useEffect(() => clearErrors(), [])

	return (
		<div className={styles['login-card']}>
			<form
				onSubmit={handleSubmit(submit, error)}
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
					Войти
				</button>
			</form>
		</div>
	)
}
