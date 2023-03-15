import React, { FC } from 'react';
import styles from './SvgStrokeAnimation.module.scss';

const SvgStrokeAnimation: FC = () => {
	return (
		<div className={styles.svgStrokeAnimation}>
			<div className={styles.container}>
				<svg>
					<rect strokeWidth={4} strokeDasharray={400} stroke='#0093ff'></rect>
					<animate
						attributeName={'stroke-dashoffset'}
						values='800;0'
						dur='3s'
						repeatCount='indefinite'
					/>
				</svg>
				<div className={styles.content}>
					<h1>Svg Stroke Animation Effects</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quas tempora minima sequi? Earum possimus nulla minus odit ratione
						culpa voluptatibus! Cumque quos, aperiam nemo fugit similique velit
						officiis fugiat!
					</p>
				</div>
			</div>
		</div>
	);
};

export default SvgStrokeAnimation