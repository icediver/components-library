import React from 'react';
import Hero from '../components/hero/Hero';
import { SliderDataTwo } from '../data/SliderData';

const Home = () => {
  return (
    <div>
      <Hero slides={SliderDataTwo}/>
    </div>
  )
}

export default Home;