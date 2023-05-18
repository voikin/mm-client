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
    Monday: IRecipe[]
    Tuesday: IRecipe[]
    Wednesday: IRecipe[]
    Thursday: IRecipe[]
    Friday: IRecipe[]
    Saturday: IRecipe[]
    Sunday: IRecipe[]
}