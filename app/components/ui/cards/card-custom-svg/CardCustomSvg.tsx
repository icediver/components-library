import { FC, PropsWithChildren } from 'react';
import styles from './CardCustomSvg.module.scss';

const CardCustomSvg: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.CardCustomSvg}>
			<div className={styles.wrapper}>
				<svg
					viewBox='-40 -40 850 700'
					enableBackground='new 0 0 16 16'
					xmlSpace='preserve'
				>
					<defs>
						<linearGradient id='gradient' x1='0%' y1='50%' x2='0%' y2='100%'>
							<stop offset='0%' stopColor='#00bc9b' />
							<stop offset='50%' stopColor='blue' />
							<stop offset='100%' stopColor='darkgoldenrod' />
						</linearGradient>
						<filter id='myFilter'>
							<feGaussianBlur stdDeviation='1'></feGaussianBlur>
						</filter>
					</defs>

					<g>
						<path
							id='path-card'
							stroke='url(#gradient)'
							strokeWidth={0}
							strokeOpacity='0.5'
							paintOrder='stroke'
							d='M0.3333,567.3958v-535.5C0.3333,14.2803,14.6136,0,32.2292,0l160.8522,0
	c12.5366,0,24.5597,5.349,33.4244,14.8704l1.9191,2.0612c7.8457,8.4268,18.4867,13.161,29.5821,13.161H491.993
	c11.0955,0,21.7365-4.7341,29.5821-13.161l1.9191-2.0612C532.3589,5.349,544.3821,0,556.9186,0h160.8522
	c17.6156,0,31.8959,14.2803,31.8959,31.8958v535.5c0,17.6156-14.2803,31.8959-31.8959,31.8959H32.2292
	C14.6136,599.2917,0.3333,585.0114,0.3333,567.3958z'
						/>
						<path
							id='path-card'
							// stroke='#0093ff'
							stroke='url(#gradient)'
							strokeWidth={20}
							strokeDasharray={'166.25 166.25'}
							// strokeDashoffset={'2660'}
							strokeLinecap={'round'}
							strokeOpacity='0.5'
							paintOrder='stroke'
							filter='url(#myFilter)'
							d='M0.3333,567.3958v-535.5C0.3333,14.2803,14.6136,0,32.2292,0l160.8522,0
	c12.5366,0,24.5597,5.349,33.4244,14.8704l1.9191,2.0612c7.8457,8.4268,18.4867,13.161,29.5821,13.161H491.993
	c11.0955,0,21.7365-4.7341,29.5821-13.161l1.9191-2.0612C532.3589,5.349,544.3821,0,556.9186,0h160.8522
	c17.6156,0,31.8959,14.2803,31.8959,31.8958v535.5c0,17.6156-14.2803,31.8959-31.8959,31.8959H32.2292
	C14.6136,599.2917,0.3333,585.0114,0.3333,567.3958z'
						/>
					</g>
					<animate
						id={'animate'}
						attributeName='stroke-dashoffset'
						// keyPoints='0;1;0'
						// keyTimes='0;0.5;1'
						dur='15s'
						values='0; 665; 0'
						fill='freeze'
						repeatCount='indefinite'
					/>

					<foreignObject width={750} height={600}>
						<div className={styles.clip}>{children}</div>
					</foreignObject>
				</svg>
			</div>
		</div>
	);
};

export default CardCustomSvg;
