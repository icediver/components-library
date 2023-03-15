import cn from 'classnames';
import React, { FC, useState } from 'react';
import styles from './ToggleButton.module.scss';

const ToggleButton: FC = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div
			onClick={() => setIsActive(!isActive)}
			className={cn(styles.toggleButton, { [styles.active]: isActive })}
		>
			<div className={styles.toggler}></div>
		</div>
	);
};

export default ToggleButton