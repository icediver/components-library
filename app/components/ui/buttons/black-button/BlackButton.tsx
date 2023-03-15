import { FC, PropsWithChildren } from 'react';
import styles from './BlackButton.module.scss';

const BlackButton: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};

export default BlackButton