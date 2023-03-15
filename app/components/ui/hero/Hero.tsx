import BlackButton from '@/app/components/ui/buttons/black-button/BlackButton';
import { IHeroSliderData } from '@/app/components/ui/hero/hero-slider-data.interface';
import cn from 'classnames';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import styles from './Hero.module.scss';

const Hero: FC<{ slides: IHeroSliderData[] }> = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const timeout = useRef(null);

	const nextSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				{slides.map((slide, index) => {
					return (
						<div className={styles.slide} key={index}>
							{index === current && (
								<div className={styles.slider}>
									<Image
										className={cn(styles.image, 'w-full h-auto')}
										src={'http://localhost:3000/' + slide.image}
										alt={slide.alt}
										width='0'
										height='0'
										sizes='100vw'
									/>
									<div className={styles.content}>
										<h1>{slide.title}</h1>
										<p>{slide.price}</p>
										<BlackButton
										// className={styles.arrow}
										// to={slide.path}
										// primary='true'
										// css={`
										// 	max-width: 160px;
										// `}
										>
											{slide.label}
											<IoMdArrowRoundForward />
										</BlackButton>
									</div>
								</div>
							)}
						</div>
					);
				})}
				<div className={styles.sliderButtons}>
					<IoArrowBack className={styles.arrowButtons} onClick={prevSlide} />
					<IoArrowForward className={styles.arrowButtons} onClick={nextSlide} />
				</div>
			</div>
		</section>
	);
};

export default Hero