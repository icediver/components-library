import { magicMenuData } from '@/app/components/ui/menus/magic-menu/magic-menu.data';
import cn from 'classnames';
import Link from 'next/link';
import { FC, MouseEvent, useState } from 'react';
import styles from './MagicMenu.module.scss';

const MagicMenu: FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [borderOffset, setBorderOffset] = useState(0);

	function clickItem(e: MouseEvent<HTMLLIElement>, index: number) {
		setActiveIndex(index);
	}
	return (
		<nav className={styles.navigation}>
			<ul>
				{magicMenuData.map((item, index) => (
					<li
						onClick={e => clickItem(e, index)}
						className={cn(styles.list, {
							[styles.active]: activeIndex === index
						})}
					>
						<Link href='#' className={styles.link}>
							<span className={styles.icon}>
								<item.Icon />
							</span>
							<span className={styles.text}>{item.title}</span>
						</Link>
					</li>
				))}

				<div className={styles.indicator}></div>
			</ul>
		</nav>
	);
};

export default MagicMenu