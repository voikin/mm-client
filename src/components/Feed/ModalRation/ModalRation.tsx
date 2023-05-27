import { HiOutlineXMark } from 'react-icons/hi2'
import { IRation } from '../../../models/IRation'
import styles from './ModalRation.module.scss'
import ModalRecipes from './ModalRecipes/ModalRecipes'

interface ModalRationProps {
	onClose: () => void
	ration: IRation
}

export default function ModalRation(props: ModalRationProps) {
	return (
		<div className={styles.overlay} onClick={props.onClose}>
			<div
				className={styles.modal_layout}
				onClick={(event) => event.stopPropagation()}
			>
				<div className={styles.modal}>
					<div className={styles.nav}>
						<span
							onClick={props.onClose}
							className='relative top-2 right-2 cursor-pointer'
						>
							<HiOutlineXMark />
						</span>
					</div>
					<div className={styles.recipes}>
						<ModalRecipes recipes={props.ration.monday} day='Понедельник' />
						<ModalRecipes recipes={props.ration.tuesday} day='Вторник' />
						<ModalRecipes recipes={props.ration.wednesday} day='Среда' />
						<ModalRecipes recipes={props.ration.thursday} day='Четверг' />
						<ModalRecipes recipes={props.ration.friday} day='Пятница' />
						<ModalRecipes recipes={props.ration.saturday} day='Суббота' />
						<ModalRecipes recipes={props.ration.sunday} day='Воскресенье' />
					</div>
				</div>
			</div>
		</div>
	)
}
