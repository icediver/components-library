import React, { FC } from 'react';
import styles from './NeonCards.module.scss';

const NeonCards: FC = () => {
	return (
		<div className={styles.neonCards}>
			<div className={styles.box}>
				<span> </span>
				<div className={styles.content}>
					<h2>Card One</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eum
						aspernatur, aperiam cum quo cumque vero a assumenda impedit
						voluptate, similique accusamus dignissimos nisi sapiente at expedita
						quisquam architecto totam.
					</p>
					<a href='#'>Read More</a>
				</div>
			</div>
			<div className={styles.box}>
				<span> </span>
				<div className={styles.content}>
					<h2>Card Two</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eum
						aspernatur, aperiam cum quo cumque vero a assumenda impedit
						voluptate, similique accusamus dignissimos nisi sapiente at expedita
						quisquam architecto totam.
					</p>
					<a href='#'>Read More</a>
				</div>
			</div>
			<div className={styles.box}>
				<span> </span>
				<div className={styles.content}>
					<h2>Card Three</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eum
						aspernatur, aperiam cum quo cumque vero a assumenda impedit
						voluptate, similique accusamus dignissimos nisi sapiente at expedita
						quisquam architecto totam.
					</p>
					<a href='#'>Read More</a>
				</div>
			</div>
		</div>
	);
};

export default NeonCards