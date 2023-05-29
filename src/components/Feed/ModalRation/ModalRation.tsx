import { HiArrowPath, HiCheck, HiOutlineXMark } from 'react-icons/hi2'
import { IRation } from '../../../models/IRation'
import styles from './ModalRation.module.scss'
import ModalRecipes from './ModalRecipes/ModalRecipes'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import RationService from '../../../services/RationService'

interface ModalRationProps {
	onClose: () => void
	ration: IRation
	needConfirm?: boolean
	refetch?: any
	refetchLoading?: boolean
}

export default function ModalRation(props: ModalRationProps) {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [])

	const confirmRationMutation = useMutation(RationService.confirmRation, {
		onSuccess: (data) => {
			console.log(data)
			props.onClose()
		},
		onError: (e) => {
			console.log(e)
		},
	})

	return (
		<div className={styles.overlay} onClick={props.onClose}>
			<div
				className={styles.modal_layout}
				onClick={(event) => event.stopPropagation()}
			>
				{props.needConfirm && (
					<div className={styles.nav}>
						<button
							onClick={() => confirmRationMutation.mutate(props.ration)}
							className={styles.accept}
							disabled={confirmRationMutation.isLoading}
						>
							<HiCheck />
						</button>
						<button
							onClick={props.refetch}
							className={
								styles.decline + ' ' + (props.refetchLoading && 'animate-spin')
							}
							disabled={props.refetchLoading}
						>
							<HiArrowPath />
						</button>
					</div>
				)}
				<div className={styles.modal}>
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
