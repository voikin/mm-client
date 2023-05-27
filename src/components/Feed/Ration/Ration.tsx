import Recipes from './Recipes/Recipes'
import styles from './Ration.module.scss'
import { IRation } from '../../../models/IRation'

interface RationComponentProps {
	ration: IRation
    onClick?: () => void
}

export default function Ration(props: RationComponentProps) {
	return (
		<div className={styles.ration} onClick={props.onClick}>
			<Recipes recipes={props.ration.monday} day='Понедельник' />
			<Recipes recipes={props.ration.tuesday} day='Вторник' />
			<Recipes recipes={props.ration.wednesday} day='Среда' />
			<Recipes recipes={props.ration.thursday} day='Четверг' />
			<Recipes recipes={props.ration.friday} day='Пятница' />
			<Recipes recipes={props.ration.saturday} day='Суббота' />
			<Recipes recipes={props.ration.sunday} day='Воскресенье' />
		</div>
	)
}
