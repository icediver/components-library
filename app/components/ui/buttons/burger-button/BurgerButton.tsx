import cn from 'classnames';
import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './BurgerButton.module.scss';

interface IBurgerButton {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerButton: FC<IBurgerButton> = ({isOpen, setIsOpen}) => {
	
	return (
		<div
			className={cn(styles.burger, { [styles.active]: isOpen })}
			onClick={() => {
				setIsOpen(!isOpen);
				
			}}
		>
			<span></span>
		</div>
	);
}

export default BurgerButton