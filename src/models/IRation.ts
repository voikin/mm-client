interface IIngredient {
	name: string
	weight: number
}

export interface IRecipe {
	name: string
	weight: number
	calories: number
	photo: string
	products: IIngredient[]
}

export interface IRation {
	monday: IRecipe[]
	tuesday: IRecipe[]
	wednesday: IRecipe[]
	thursday: IRecipe[]
	friday: IRecipe[]
	saturday: IRecipe[]
	sunday: IRecipe[]
}
