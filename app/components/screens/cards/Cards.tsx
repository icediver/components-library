import ComponentsWrapper from '@/app/components/layout/components-wrapper/ComponentsWrapper';
import CardCustomSvg from '@/app/components/ui/cards/card-custom-svg/CardCustomSvg';
import NeonCards from '@/app/components/ui/cards/neon-cards/NeonCards';
import priceCard from '@/app/components/ui/cards/price-card/PriceCard';
import SvgStrokeAnimation from '@/app/components/ui/cards/svg-stroke-animation/SvgStrokeAnimation';
import Testimonials from '@/app/components/ui/cards/testimonials/Testimonials';
import { FC } from 'react';

const screens: FC[] = [
	CardCustomSvg,
	NeonCards,
	priceCard,
	Testimonials,
	SvgStrokeAnimation
];

const Cards: FC = () => {
	
	

	return <ComponentsWrapper screens={screens} />;

};

export default Cards