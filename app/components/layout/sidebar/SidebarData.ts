import { IconType } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';
import { BsWindowX } from 'react-icons/bs';
import { CgTemplate } from 'react-icons/cg';
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { FiPower } from 'react-icons/fi';
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from 'react-icons/io';
import { IoIdCardOutline, IoShapesOutline } from 'react-icons/io5';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import {
	TfiGallery,
	TfiLayoutAccordionList,
	TfiLayoutTab
} from 'react-icons/tfi';

export interface ISidebarData {
	title: string;
	path: string;
	Icon: IconType;
	IconClosed?: IconType;
	IconOpened?: IconType;
	subNav?: ISubNav[];
}
interface ISubNav {
	title: string
	path: string
	Icon: IconType
}

export const SidebarData: ISidebarData[] = [
	{
		title: 'Home',
		path: '/',
		Icon: AiFillHome,
		IconClosed: RiArrowDownSFill,
		IconOpened: RiArrowUpSFill,

		subNav: [
			{
				title: 'Sliders',
				path: '/ui1/sliders',
				Icon: TfiGallery
			},
			{
				title: 'Accordions',
				path: '/ui1/accordions',
				Icon: TfiLayoutAccordionList
			},
			{
				title: 'Modals',
				path: '/ui1/modals',
				Icon: BsWindowX
			},
			{
				title: 'Tabs',
				path: '/ui1/tabs',
				Icon: TfiLayoutTab
			},
			{
				title: 'Accordion',
				path: '/accordion',
				Icon: IoIosPaper
			},
			{
				title: 'Modal',
				path: '/modal',
				Icon: IoIosPaper
			}
		]
	},
	{
		title: 'User interface',
		path: '/ui',
		Icon: CgTemplate,
		IconClosed: RiArrowDownSFill,
		IconOpened: RiArrowUpSFill,

		subNav: [
			{
				title: 'Buttons',
				path: '/ui/buttons',
				Icon: FiPower,
				// cName: 'sub-nav'
			},
			{
				title: 'Cards',
				path: '/ui/cards',
				Icon: IoIdCardOutline,
				// cName: 'sub-nav'
			},
			{
				title: 'Shapes',
				path: '/ui/shapes',
				Icon: IoShapesOutline
			}
		]
	},
	{
		title: 'Products',
		path: '/products',
		Icon: FaCartPlus
	},
	{
		title: 'Team',
		path: '/team',
		Icon: IoMdPeople
	},
	{
		title: 'Messages',
		path: '/messages',
		Icon: FaEnvelopeOpenText,

		IconClosed: RiArrowDownSFill,
		IconOpened: RiArrowUpSFill,

		subNav: [
			{
				title: 'Message 1',
				path: '/messages/message1',
				Icon: IoIosPaper
			},
			{
				title: 'Message 2',
				path: '/messages/message2',
				Icon: IoIosPaper
			}
		]
	},
	{
		title: 'Support',
		path: '/support',
		Icon: IoMdHelpCircle
	}
];