import { Data } from '@/app/components/ui/accordions/accordion1/data/Data';
import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { FiMinus, FiPlus } from 'react-icons/fi';
import styles from './Accordion1.module.scss';

const Accordion1: FC = () => {
	const [clicked, setClicked] = useState<number | null>(null);

	const toggle = (index: number) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};
	return (
		<IconContext.Provider value={{ color: '#00ffb9', size: '25' }}>
			<div className={styles.accordion}>
				<div className={styles.container}>
					{Data.map((item, index) => {
						return (
							<div key={index}>
								<div className={styles.wrapper} onClick={() => toggle(index)}>
									<h1>{item.question}</h1>
									<span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
								</div>
								{clicked === index ? (
									<div className={styles.dropdown}>
										<p>{item.answer}</p>
									</div>
								) : null}
							</div>
						);
					})}
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Accordion1