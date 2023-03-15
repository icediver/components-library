import cn from 'classnames';
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styles from './BurgerButton.module.scss';

interface IBurgerButton {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerButton: FC<IBurgerButton> = ({isOpen, setIsOpen}) => {
	useEffect(() => {console.log(isOpen)}, [isOpen])
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