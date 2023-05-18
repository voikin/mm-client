import styles from './FeedPage.module.css'
import Feed from '../../components/Feed/Feed'

export default function FeedPage() {
	return (
		<section className={styles.wrapper}>
			<Feed />
		</section>
	)
}
