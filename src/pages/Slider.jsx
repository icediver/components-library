import React from 'react';
import { ImageSlider } from '../components/sliders';
import { SliderData } from '../components/sliders/data/SliderData.js';

const Slider = () => {
  return (
    <div>
      <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default Slider;  