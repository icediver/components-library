import React from 'react';
// Core modules imports are same as usual
import { EffectCoverflow, Navigation } from 'swiper';
/* Direct React component imports
variant 1
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react/swiper-react.js';
Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module */
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import './styles.scss';
import 'swiper/scss'; // core Swiper
import 'swiper/scss/navigation'; // Navigation module
import 'swiper/scss/pagination'; // Pagination module
import styled from 'styled-components';
import image1 from './1.jpg';

const TestimonialsSwiper = () => {
  return (
    <Testimonials>
      <Swiper
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
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper">
        <SwiperSlide>
          <Slide>
            <div className="card">
              <div className="layer"></div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Hic eum optio odio
                  nostrum ea atque voluptatum tempore
                  labore, mollitia, nesciunt sint quam quasi
                  repudiandae reprehenderit alias ex vitae
                  deserunt natus.
                </p>
                <div className="imgBx">
                  <img src={image1} alt="img" />
                </div>
                <div className="details">
                  <h2>
                    Someone Famous
                    <br />
                    <span>Website Designer</span>
                  </h2>
                </div>
              </div>
            </div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div className="card">
              <div className="layer"></div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Hic eum optio odio
                  nostrum ea atque voluptatum tempore
                  labore, mollitia, nesciunt sint quam quasi
                  repudiandae reprehenderit alias ex vitae
                  deserunt natus.
                </p>
                <div className="imgBx">
                  <img src={image1} alt="img" />
                </div>
                <div className="details">
                  <h2>
                    Someone Famous
                    <br />
                    <span>Website Designer</span>
                  </h2>
                </div>
              </div>
            </div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div className="card">
              <div className="layer"></div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Hic eum optio odio
                  nostrum ea atque voluptatum tempore
                  labore, mollitia, nesciunt sint quam quasi
                  repudiandae reprehenderit alias ex vitae
                  deserunt natus.
                </p>
                <div className="imgBx">
                  <img src={image1} alt="img" />
                </div>
                <div className="details">
                  <h2>
                    Someone Famous
                    <br />
                    <span>Website Designer</span>
                  </h2>
                </div>
              </div>
            </div>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </Testimonials>
  );
};

export default TestimonialsSwiper;

const Testimonials = styled.div`
  position: relative;
  max-width: 100%;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent 70%, #0009);
`;

const Slide = styled.div`
  .card {
    position: relative;
    width: 100%;
    margin: 0 auto;
    background: #333;
    padding: 60px 40px;
    text-align: center;
    overflow: hidden;
    .layer {
      position: absolute;
      top: calc(100% - 2px);
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#03a9f4, #e91e63);
      z-index: 1;
      transition: 0.5s;
    }
    &:hover .layer {
      top: 0;
    }
    .content {
      position: relative;
      z-index: 2;
      p {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 20px;
        color: #fff;
      }
      .imgBx {
        width: 100px;
        height: 100px;
        margin: 0 auto 10px;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        position: relative;
      }
      img {
        position: absolute;

        height: 100px;
        /* margin-right: 50px; */
        left: -50px;
        /* object-fit: fill; */
      }
      h2 {
        font-size: 18px;
        color: #fff;
      }
      span {
        color: #03a9f4;
        font-size: 14px;
        transition: 0.5s;
      }
      &:hover {
        span {
          color: #fff;
        }
      }
    }
  }
`;
