import cn from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import styles from './Button2.module.scss';

interface INeonButton {
	variant?: 'primary' | 'second';
}


const Button2: FC<PropsWithChildren<INeonButton>> = ({variant='primary', children}) => {
	return (
		<button className={cn(styles.button, { [styles.second]: variant==='second' })}>
			<span>{children}</span>
		</button>
	);
};

export default Button2