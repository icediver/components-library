import { animatedTabBarData } from '@/app/components/ui/menus/amimated-tab-bar/animated-tab-bar.data';
import cn from 'classnames';
import { FC, MouseEvent, useState } from 'react';
import styles from './AnimatedTabBar.module.scss';

const AnimatedTabBar: FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [borderOffset, setBorderOffset] = useState(0);

	function clickItem(e: MouseEvent<HTMLButtonElement>, index: number) {
		setActiveIndex(index);
		setBorderOffset(index * 115);
	}

	return (
		<div
			className={styles.animatedTabBar}
			style={{
				['--bubble-color' as string]: animatedTabBarData[activeIndex].color
			}}
		>
			<menu className={styles.menu}>
				{animatedTabBarData.map((item, index) => (
					<button
						className={cn(styles.menu__item, {
							[styles.active]: activeIndex === index
						})}
						onClick={e => clickItem(e, index)}
						key={index + item.color}
					>
						<item.Icon className={styles.icon} />
					</button>
				))}

				<div
					className={styles.menu__border}
					style={{ left: borderOffset }}
				></div>
			</menu>

			<div className={styles.svgContainer}>
				<svg viewBox='0 0 202.9 45.5'>
					<clipPath
						id='menu'
						clipPathUnits='objectBoundingBox'
						transform='scale(0.0049285362247413 0.021978021978022)'
					>
						<path
							d='M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z'
						/>
					</clipPath>
				</svg>
			</div>
		</div>
	);
};

export default AnimatedTabBar