import { IRecipe } from '../../../../../models/IRation'
import styles from './Recipe.module.scss'

interface RecipeProps {
	recipe: IRecipe
}

export default function Recipe(props: RecipeProps) {
	return (
		<div className={styles.recipe}>
			<img src={props.recipe.img} />
		</div>
	)
}
