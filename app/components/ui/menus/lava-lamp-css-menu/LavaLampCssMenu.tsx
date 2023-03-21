import cn from 'classnames';
import { Cherry_Swash } from 'next/font/google';
import { FC } from 'react';
import styles from './LavaLampCssMenu.module.scss';

const cherry = Cherry_Swash({
	weight: ['700'],
	subsets: ['latin'],
	variable: '--cherry'
});

const LavaLampCssMenu: FC = () => {
	return (
		<div className={cn(styles.container, cherry.variable)}>
			<h1>Lava lamp CSS Menu</h1>
			<nav className={styles.navbar}>
				<a href='/'>Home</a>
				<a href='#'>About</a>
				<a href='#'>Blog</a>
				<a href='#'>Portefolio</a>
				<a href='#'>Contact</a>
				<div className={cn(styles.animation, styles.startHome)}></div>
			</nav>
		</div>
	);
};

export default LavaLampCssMenu