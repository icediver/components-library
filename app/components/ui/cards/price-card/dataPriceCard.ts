import { IconType } from 'react-icons';
import { FaPaperPlane, FaPlane, FaRocket } from 'react-icons/fa';

export interface IPriceCard {
	Icon: IconType;
	title: string;
	price: number;
	space: string;
	domains: string;
	LiveSupport: boolean;
}

const dataPriceCard = [
  {
    Icon: FaPaperPlane,
    title: "Basic",
    price: 25,
    space: "10 Gb Spase",
    domains: "3 Domain Names",
    LiveSupport: false
  },
  {
    Icon: FaPlane,
    title: "Standart",
    price: 50,
    space: "50 Gb Spase",
    domains: "5 Domain Names",
    LiveSupport: false
  },
  {
    Icon: FaRocket,
    title: "Premium",
    price: 100,
    space: "Unlimited Spase",
    domains: "30 Domain Names",
    LiveSupport: true
  },
];

export default dataPriceCard;