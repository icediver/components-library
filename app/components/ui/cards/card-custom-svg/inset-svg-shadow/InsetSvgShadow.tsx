import { CSSProperties, FC, LegacyRef, PropsWithChildren, useRef } from 'react';
import styles from './InsetSvgShadow.module.scss';

interface IInsetShadow {
	offset?: { x: number; y: number };
	blur?: number;
	color?: string;
	opacity?: number;
}

const InsetSvgShadow: FC<PropsWithChildren<IInsetShadow>> = ({
	offset = { x: 0, y: 0 },
	blur = 10,
	color = 'black',
	opacity = 1,
	children
}) => {
	const ref = useRef<SVGFilterElement | null>();
	const style = {
		filter: 'url(#inset-shadow)'
	} as CSSProperties;
	return (
		<div className={styles.shadow}>
			{children}
			<svg width='1px' height='1px' viewBox='0 0 1 1'>
				<defs>
					<filter ref={ref as LegacyRef<SVGFilterElement>} id={'inset-shadow'}>
						{/*// <!-- Shadow Offset -->*/}
						<feOffset dx={offset.x} dy={offset.y} />

						{/*<!-- Shadow Blur -->*/}
						<feGaussianBlur stdDeviation={blur} result='offset-blur' />

						{/*<!-- Invert the drop shadow to create an inner shadow -->*/}
						<feComposite
							operator='out'
							in='SourceGraphic'
							in2='offset-blur'
							result='inverse'
						/>

						{/*<!-- Color & Opacity -->*/}
						<feFlood floodColor={color} floodOpacity={opacity} result='color' />

						{/*<!-- Clip color inside shadow -->*/}
						<feComposite
							operator='in'
							in='color'
							in2='inverse'
							result='shadow'
						/>

						{/*<!-- Put shadow over original object -->*/}
						<feComposite operator='over' in='shadow' in2='SourceGraphic' />
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default InsetSvgShadow;
