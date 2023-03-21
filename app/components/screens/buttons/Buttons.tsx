import BlackButton from '@/app/components/ui/buttons/black-button/BlackButton';
import BurgerToggleBtn from '@/app/components/ui/buttons/burger-toggle-btn/BurgerToggleBtn';
import Button2 from '@/app/components/ui/buttons/button-2/Button2';
import Button3 from '@/app/components/ui/buttons/button-3/Button3';
import OpenSearch from '@/app/components/ui/buttons/open-search/OpenSearch';
import StarRating from '@/app/components/ui/buttons/star-rating/StarRating';
import ToggleButton from '@/app/components/ui/buttons/toggle-button/ToggleButton';
import { FC } from 'react';

const Buttons: FC = () => {
	const arr = Array(11).fill('_');
	return (
		<div className={'h-screen flex flex-col justify-center bg-[#1F2833] pt-16'}>
			<div
				className={
					'w-2/3 py-16 mx-auto  grid grid-cols-4  grid-rows-5 gap-16 border-2 border-main-text place-items-center '
				}
			>
				<BlackButton children={'Button 1'} />
				<Button2>Button-2</Button2>
				<Button2 variant={'second'}>Button-2</Button2>
				<Button3>Submit</Button3>
				<BurgerToggleBtn />
				<ToggleButton />
				<OpenSearch />
				<StarRating />
				{arr.map((item, index) => (
					<div
						className={'h-10 w-36 border-r border-b hover:border-main-text'}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Buttons