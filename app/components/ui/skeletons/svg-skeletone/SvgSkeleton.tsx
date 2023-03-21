import SvgSkeletonTemplate from '@/app/components/ui/skeletons/svg-skeletone/SvgSkeletonTemplate';
import { randomBytes } from 'crypto';

import { FC } from 'react';
import styles from './SvgSkeleton.module.scss';

const SvgSkeleton: FC = () => {
	const random = randomBytes(16).toString('hex');
	return (
		<div className={styles.svgSkeleton}>
			<div className={'text-main-text text-3xl mb-10'}>
				As svg background image base-64 encode
			</div>
			<div className={styles.skeleton} />
			<div className={'text-main-text text-3xl mb-10'}>
				As svg react component {window.crypto.randomUUID()}
			</div>
			<SvgSkeletonTemplate height={180}>
				<rect x={630} y={20} rx={5} width={130} height={140} />
				<rect x={50} y={20} rx={5} width={400} height={20} />
				<rect x={480} y={20} rx={5} width={120} height={20} />
				<rect x={50} y={50} rx={5} width={550} height={20} />
				<rect x={50} y={80} rx={5} width={550} height={20} />
				<rect x={50} y={140} rx={5} width={550} height={20} />
				<circle cx={60} cy={120} r={15} />
				<rect x={90} y={110} rx={5} width={510} height={20} />
			</SvgSkeletonTemplate>
		</div>
	);
};

export default SvgSkeleton
