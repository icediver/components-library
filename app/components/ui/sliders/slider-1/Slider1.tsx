import cn from 'classnames';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { SliderData as slides } from './data/SliderData';
import styles from './Slider1.module.scss';

const Slider1: FC = () => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	return (
		<div className={styles.slider}>
			<FaArrowAltCircleRight
				onClick={prevSlide}
				className={styles.arrowRight}
			/>
			<FaArrowAltCircleLeft onClick={nextSlide} className={styles.arrowLeft} />
			{slides.map((slide, index) => {
				index === current && console.log(index);
				return (
					<div
						className={cn(styles.slide, { [styles.active]: index === current })}
						key={index}
					>
						{index === current && (
							<Image
								src={slide.image}
								alt='travel'
								height={750}
								width={500}
								className='image'
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Slider1