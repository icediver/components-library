import { IconType } from 'react-icons';
import {
	IoCameraOutline,
	IoChatbubbleOutline,
	IoHomeOutline,
	IoPersonOutline,
	IoSettingsOutline
} from 'react-icons/io5';

export const magicMenuData: { Icon: IconType; title: string }[] = [
	{
		Icon: IoHomeOutline,
		title: 'Home'
	},
	{
		Icon: IoPersonOutline,
		title: 'Profile'
	},
	{
		Icon: IoChatbubbleOutline,
		title: 'Message'
	},
	{
		Icon: IoCameraOutline,
		title: 'Photos'
	},
	{
		Icon: IoSettingsOutline,
		title: 'Settings'
	}
];