import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import {
	IoAddCircleOutline,
	IoChatbubbleOutline,
	IoHomeOutline,
	IoPersonOutline,
	IoSettingsOutline
} from 'react-icons/io5';
import styles from './GlassmorphismMenu.module.scss';

const GlassmorphismMenu: FC = () => {
	const twclass = '';
	return (
		<div className={cn(styles.menu, `${twclass}`)}>
			<ul>
				<li>
					<Link href='#' className={styles.link}>
						<IoHomeOutline className={styles.icon} />
					</Link>
				</li>
				<li>
					<Link href='#' className={styles.link}>
						<IoPersonOutline className={styles.icon} />
					</Link>
				</li>
				<li>
					<Link href='#' className={styles.link}>
						<IoAddCircleOutline className={styles.icon} />
					</Link>
				</li>
				<li>
					<Link href='#' className={styles.link}>
						<IoSettingsOutline className={styles.icon} />
					</Link>
				</li>
				<li>
					<Link href='#' className={styles.link}>
						<IoChatbubbleOutline className={styles.icon} />
					</Link>
				</li>
				<div className={styles.marker}></div>
			</ul>
		</div>
	);
};

export default GlassmorphismMenu
