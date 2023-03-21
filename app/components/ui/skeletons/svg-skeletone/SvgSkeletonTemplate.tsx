import { ISvgSkeleton } from '@/app/components/ui/skeletons/svg-skeletone/svg-skeleton.interface';

import { FC, PropsWithChildren } from 'react';

const SvgSkeletonTemplate: FC<PropsWithChildren<ISvgSkeleton>> = ({
	width = 800,
	height = 400,
	backgroundColor = '#EBEBEB',
	foregroundColor = '#F7F7F7',
	duration = 3,
	children
}) => {
	const viewBox = `0 0 ${width} ${height}`;
	const dur = `${duration}s`;
	return (
		// <div className={'h-screen w-screen flex items-center justify-center'}>
		<div className={'w-2/3'}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox}>
				<defs />
				<defs>
					<linearGradient
						id='gradient'
						x1='100%'
						x2='-1.427%'
						y1='50%'
						y2='50%'
					>
						<stop offset='0%' stopColor={backgroundColor} />
						<stop offset='53.077%' stopColor={foregroundColor} />
						<stop offset='100%' stopColor={backgroundColor} />
					</linearGradient>
				</defs>
				<g fill='none' fillRule='evenodd'>
					<rect
						fill={backgroundColor}
						ry={'2.5%'}
						width={'100%'}
						height={'100%'}
					/>
					<rect
						fill='url(#gradient)'
						fillRule='nonzero'
						y={'2.5%'}
						width={'20%'}
						height={'95%'}
					>
						<animate
							id={'animate'}
							attributeName='x'
							dur={dur}
							values='-100%; 100%'
							fill='freeze'
							repeatCount='indefinite'
						/>
					</rect>
					<rect
						mask={'url(#mask)'}
						fill={'white'}
						ry={'2.5%'}
						width={'100%'}
						height={'100%'}
					/>
					<mask id={'mask'}>
						<rect fill={'white'} width={'100%'} height={'100%'} />
						<g fill={'black'}>{children}</g>
					</mask>
				</g>
			</svg>
		</div>
		// </div>
	);
};

export default SvgSkeletonTemplate