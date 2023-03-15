'use client';
import Hero from '@/app/components/ui/hero/Hero';
import { SliderDataTwo } from '@/app/data/SliderData';
import { FC } from 'react';

const Home: FC = () => {
	return <Hero slides={SliderDataTwo} />;
};

export default Home