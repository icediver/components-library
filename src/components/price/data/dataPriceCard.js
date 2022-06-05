import {
  FaPaperPlane,
  FaPlane,
  FaRocket,
} from 'react-icons/fa';

const dataPriceCard = [
  {
    icon: FaPaperPlane,
    title: "Basic",
    price: 25,
    space: "10 Gb Spase",
    domains: "3 Domain Names",
    LiveSupport: false
  },
  {
    icon: FaPlane,
    title: "Standart",
    price: 50,
    space: "50 Gb Spase",
    domains: "5 Domain Names",
    LiveSupport: false
  },
  {
    icon: FaRocket,
    title: "Premium",
    price: 100,
    space: "Unlimited Spase",
    domains: "30 Domain Names",
    LiveSupport: true
  },
];

export default dataPriceCard;