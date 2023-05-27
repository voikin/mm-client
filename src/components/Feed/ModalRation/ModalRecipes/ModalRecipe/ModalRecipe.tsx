import { IRecipe } from '../../../../../models/IRation'
import styles from './ModalRecipe.module.scss'

interface ModalRecipeProps {
	recipe: IRecipe
}

export default function ModalRecipe(props: ModalRecipeProps) {
	return (
		<div className={styles.recipe}>
			<div className={styles.head}>
				<h2>{props.recipe.name}</h2>
				<img src={props.recipe.photo} />
			</div>
			<div className={styles.item}>
				<h3>Калории: {props.recipe.calories} кл</h3>
				<h3>Вес: {props.recipe.weight} гр</h3>
			</div>
			<div className={styles.item}>
				<ul>
					{props.recipe.products.map((product) => (
						<li>
							<h4>
								{product[0]}: {product[1]} гр
							</h4>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
