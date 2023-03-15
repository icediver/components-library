import React, { FC, PropsWithChildren } from 'react';
import styles from './Button3.module.scss';

const Button3: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<button className={styles.button}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			{children}
		</button>
	);
};

export default Button3