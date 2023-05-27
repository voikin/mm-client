import { IRecipe } from '../../../../models/IRation'
import ModalRecipe from './ModalRecipe/ModalRecipe'
import styles from './ModalRecipes.module.scss'

interface ModalRecipesProps {
	day: string
	recipes: IRecipe[]
}

export default function ModalRecipes(props: ModalRecipesProps) {
	return (
		<div className={styles.recipes}>
			<h1>{props.day}</h1>
			<div className={styles.row}>
				{props.recipes.map((recipe) => (
					<ModalRecipe recipe={recipe} />
				))}
			</div>
		</div>
	)
}
