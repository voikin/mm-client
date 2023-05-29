import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import RationService from '../../../services/RationService'
import styles from './PreferencesEdit.module.scss'

interface preferencesEditProps {
	preferences: string[]
	setPreferences: React.Dispatch<React.SetStateAction<string[]>>
}

export const PreferencesEdit = (props: preferencesEditProps) => {
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState([] as string[])
	const fetchProductsQuery = useQuery('products', RationService.fetchProducts, {
		// onSuccess: (data) => setProducts(data),
		onError: (e) => console.log(e),
	})

	const addPreferenceMutation = useMutation(RationService.addPreference, {
		onSuccess: (data) => console.log(data),
		onError: (e) => console.log(e),
	})

	useEffect(() => {
		console.log(props)
		if (query && fetchProductsQuery.data && !fetchProductsQuery.isLoading) {
			setProducts(
				fetchProductsQuery.data
					?.filter(
						(product) =>
							product.toLowerCase().includes(query.toLowerCase()) &&
							!props.preferences.includes(product)
					)
					.slice(0, 5)
			)
		} else {
			setProducts([])
		}
	}, [query])

	const addPreference = (preference: string) => {
		addPreferenceMutation.mutate(preference)
		props.setPreferences((state) => [...state, preference])
		setQuery('')
	}

	return (
		<div className={styles.preferences}>
			<input value={query} onChange={(e) => setQuery(e.target.value)} />
			{fetchProductsQuery.isLoading ? (
				<p>loading...</p>
			) : (
				products && (
					<div className={styles.scroll}>
						{products.map((product) => (
							<p
								className={styles.preference}
								onClick={() => addPreference(product)}
							>
								{product}
							</p>
						))}
					</div>
				)
			)}
		</div>
	)
}
