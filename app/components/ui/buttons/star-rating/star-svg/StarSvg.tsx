import cn from 'classnames';
import { FC } from 'react';

const StarSvg: FC<{ className?: string; size?: number }> = ({
	className,
	size = 26
}) => {
	const defaultStyle = 'inline-block p-0.5';
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
			width={size}
			height={size}
			id='star'
			className={cn(defaultStyle, className)}
		>
			<defs>
				<linearGradient id='gradient2' x1='0' x2='1' y1='0' y2='0'>
					<stop offset='0%' stopColor='goldenrod' />
					<stop offset='49%' stopColor='darkgoldenrod' />
					<stop offset='50%' stopColor='gold' />
					<stop offset='100%' stopColor='gold' />
				</linearGradient>

				<linearGradient id='linear-gradient'>
					<stop offset='0%' stopColor='darkgoldenrod' stopOpacity='0.2' />
					<stop offset='33%' stopColor='gold' stopOpacity='0.1' />
					<stop offset='50%' stopColor='white' />
					<stop offset='67%' stopColor='gold' stopOpacity='0.1' />
					<stop offset='100%' stopColor='darkgoldenrod' stopOpacity='0.2' />
					<animateTransform
						attributeName='gradientTransform'
						type='translate'
						from='-1 0'
						to='1 0'
						// begin='svg1.click'
						dur='3s'
						repeatCount='indefinite'
						fill='freeze'
					/>
				</linearGradient>
			</defs>
			<g>
				<mask id='mask'>
					<polygon
						points='50 6.5,61.8 30.5,88.3 34.4,69.1 53.1,73.7 79.5,50 67.09,26.28 79.56,30.81 53.1,11.618 34.4,38.1 30.58'
						fill='white'
						strokeWidth='4'
						stroke='goldenrod'
					/>
				</mask>
				<rect
					x='0'
					y='0'
					width='100'
					height='100'
					fill='url(#gradient2)'
					mask='url(#mask)'
				>
					{/*<animate*/}
					{/*	id={'animate'}*/}
					{/*	attributeName='x'*/}
					{/*	dur='4s'*/}
					{/*	values='-100; 0; -100'*/}
					{/*	fill='freeze'*/}
					{/*	repeatCount='indefinite'*/}
					{/*/>*/}
				</rect>
				<rect
					x='0'
					y='0'
					width='100'
					height='100'
					fill='url(#linear-gradient)'
					mask='url(#mask)'
					opacity={'0.6'}
				/>
			</g>
		</svg>
	);
};

export default StarSvg