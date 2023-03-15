import image1 from '@/public/images/sliderImages/photo-01.jpg';
import image2 from '@/public/images/sliderImages/photo-02.jpg';
import image3 from '@/public/images/sliderImages/photo-03.jpg';

export interface ISliderData {
	image: typeof image1;
}

export const SliderData: ISliderData[] = [
	{
		image: image1
	},
	{
		image: image2
	},
	{
		image: image3
	},

];