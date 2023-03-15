import cn from 'classnames';
import React, { FC } from 'react';
import styles from './BurgerToggleBtn.module.scss';

const BurgerToggleBtn: FC = () => {
	const [active, setActive] = React.useState(false);
	return (
		<button
			onClick={() => setActive(!active)}
			className={cn(styles.button, { [styles.active]: active })}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default BurgerToggleBtn