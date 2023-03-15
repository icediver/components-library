import Image from 'next/image';
import React, {FC} from 'react';
import {EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss'; // core Swiper
import 'swiper/scss/navigation'; // Navigation module
import 'swiper/scss/pagination'; // Pagination module
import image1 from './1.jpg';
import styles from './Testimonials.module.scss';
// import './testimonials.scss';

const arr = Array(10).fill('_');

const Testimonials: FC = () => {
	return (
		<div className={styles.testimonials}>
			<Swiper
				
				slideClass={styles['swiper-slide']}
				
				effect={'coverflow'}
				grabCursor={true}
				autoHeight={false}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 0,
					modifier: 1,
					slideShadows: true
				}}
				loop={true}
				pagination={true}
				modules={[EffectCoverflow]}
				className='mySwiper'
			>
				{
					arr.map((items, index) => <SwiperSlide className={styles['swiper-slide']} key={index}>
						<div className={styles.slide}>
							<div className={styles.card}>
								<div className={styles.layer}></div>
								<div className={styles.content}>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
										eum optio odio nostrum ea atque voluptatum tempore labore,
										mollitia, nesciunt sint quam quasi repudiandae reprehenderit
										alias ex vitae deserunt natus.
									</p>
									<div className={styles.imgBx}>
										<Image src={image1} alt='img' className={styles.image} />
									</div>
									<div className='details'>
										<h2>
											Someone Famous
											<br />
											<span>Website Designer</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>)
				}
			</Swiper>
		</div>
	);
};

export default Testimonials