import { IRation } from './IRation';
export interface IUser {
	email?: string
	isActivated?: boolean
	id?: string
}
export interface UserInfo {
	age: number
	height: number
	weight: number
	sex: boolean
	preferences: string[]
	triedRations: IRation[]
}