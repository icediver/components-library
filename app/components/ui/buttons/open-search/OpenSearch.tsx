import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './OpenSearch.module.scss';

const OpenSearch: FC = () => {
	return (
		<div className={styles.openSearch}>
			<div className={styles.container}>
				<div className={styles.searchContainer}>
					<input
						type={'text'}
						placeholder={'search'}
						className={styles.input}
					/>
					<button className={styles.button}>
						<FaSearch />
					</button>
				</div>
			</div>
		</div>
	);
};

export default OpenSearch