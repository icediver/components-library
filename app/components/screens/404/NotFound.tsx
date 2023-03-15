import Astronaut from '@/public/images/vector/Astronaut.svg';
import Fog from '@/public/images/vector/Fog1.svg';
import Earth from '@/public/images/vector/Group.svg';
import Moon from '@/public/images/vector/moon.svg';
import Shadow from '@/public/images/vector/Shadow.svg';
import Fog2 from '@/public/images/vector/Vector191.svg';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import styles from './NotFound.module.scss';

const stars = [
	['30%', '10%'],
	['40%', '18%'],
	['23%', '70%'],
	['90%', '80%'],
	['40%', '60%'],
	['45%', '30%'],
	['55%', '55%'],
	['80%', '70%'],
	['90%', '10%'],
	['60%', '40%'],
	['65%', '30%'],
	['55%', '12%'],
	['55%', '55%'],
	['50%', '90%'],
	['60%', '87%'],
	['10%', '85%'],
	['80%', '5%']
];
const NotFound: FC = () => {
	
	return (
		<div className={styles.error404}>
			<div className={styles.textBlock}>
				<div className={styles.text404}>404</div>
				<div className={styles.notFound}>Page not found!</div>
				<Link href={'/'}>
					<HiOutlineArrowNarrowLeft className={styles.arrow} size={40} />
					<div className={styles.home}> Go to home page</div>
				</Link>
			</div>
			<Moon  className={styles.moon} />
			<Astronaut className={styles.astronaut} />
			<Earth className={styles.earth} />
			<Fog className={styles.fog} />
			<Shadow className={styles.shadow} />
			<Fog2 className={styles.fog2} />
			{stars.map(star => (
				<div
					className={cn(styles.star)}
					key={star[0] + star[1]}
					style={{ left: star[0], top: star[1] }}
				></div>
			))}
		</div>
	);
};

export default NotFound