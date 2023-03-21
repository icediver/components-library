import StarSvg from '@/app/components/ui/buttons/star-rating/star-svg/StarSvg';
import { FC } from 'react';

const StarRating: FC = () => {
	return (
		<div>
			<StarSvg />
			<StarSvg />
			<StarSvg />
			<StarSvg />
			<StarSvg />
		</div>
	);
};

export default StarRating