import dataPriceCard from '@/app/components/ui/cards/price-card/dataPriceCard';
import React, { FC } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import styles from './PriceCard.module.scss';

const PriceCard: FC = () => {
	return (
		<section className={styles.priceCard}>
			<div>
				<div className={styles.row}>
					{dataPriceCard.map(item => {
						return (
							<div className={styles.column} key={item.title}>
								<div className={styles.box}>
									<div className={styles.title}>
										<item.Icon className={styles.myReactIcons} size={60} />
										<h2>{item.title}</h2>
									</div>
									<div className={styles.price}>
										<h4>
											<sup>$</sup>
											{item.price}
										</h4>
									</div>
									<div className={styles.option}>
										<ul>
											<li>
												<FaCheck />
												{item.space}
											</li>
											<li>
												<FaCheck />
												{item.domains}
											</li>
											<li>
												<FaCheck />
												20 Email Address
											</li>
											<li>
												{item.LiveSupport ? <FaCheck /> : <FaTimes />}
												LiveSupport
											</li>
										</ul>
									</div>
									<button className={styles.btn}>Order Now</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default PriceCard