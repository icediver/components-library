import React, {useState} from 'react'
import { SliderData } from './data/SliderData';
import '../../images/sliderImages/photo-01.jpg'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styled, {css} from 'styled-components';

export const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0  ? length - 1 : current - 1);
  }
  
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <LeftArrow  onClick={prevSlide}/>
      <RightArrow onClick={nextSlide}/>
      { 
        SliderData.map((slide, index) => {
          return (
            <Slide active={index === current} key={index}>
              { index === current && 
                ( <Image src={slide.image} alt='travel' className='image'/> )
              }      
            
            </Slide>
          );
        })
      }
    </Slider>
  )
}
//-------- styled-components
const Slider = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
  height: 750px;
  /* border-radius: 10px; */
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
  /* box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, .3); */
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const Slide = styled.div` 
  //Появление/ичезновение
  ${ props => props.active 
    ? css`
    // Вариант через css
    opacity: 1;
    transition-duration: .5s;
    `
    : ({
      // Вариант через объект
    opacity: 0,
    transform: 'scale(1.08)',
    transitionDuration: '0.5s'
    })
  }

`;