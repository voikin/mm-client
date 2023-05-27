import { IRecipe } from '../../../../models/IRation'
import Recipe from './Recipe/Recipe'
import styles from './Recipes.module.scss'

interface RecipesProps {
	day: string
	recipes: IRecipe[]
}

export default function Recipes(props: RecipesProps) {
	return (
		<div className={styles.recipes}>
			<h1>{props.day}</h1>
			<div className={styles.row}>
				{props.recipes.map((recipe) => (
					<Recipe recipe={recipe} />
				))}
			</div>
		</div>
	)
}
