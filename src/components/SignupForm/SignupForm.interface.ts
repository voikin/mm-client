export interface ISignupForm {
	email: string
	age: number
	weight: number
	height: number
	sex: 'Мужской' | 'Женский'
	password: string
    confirmPassword: string
}
