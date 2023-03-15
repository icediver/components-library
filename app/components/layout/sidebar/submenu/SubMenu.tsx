import { ISidebarData } from '@/app/components/layout/sidebar/SidebarData';
import Link from 'next/link';
import React, {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState
} from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import styles from './SubMenu.module.scss';

const SubMenu: FC<{
	item: ISidebarData;
	isShowSideBar: boolean;
	index: number;
	activeCategory: number | undefined;
	setActiveCategory: Dispatch<SetStateAction<number | undefined>>;
}> = ({ item, isShowSideBar, index, activeCategory, setActiveCategory }) => {
	const [isShowSub, setIsShowSub] = useState(false);

	useEffect(() => {
		if (!isShowSideBar) setIsShowSub(false);
	}, [isShowSideBar]);

	const handlerClick = () => {
		if (activeCategory === index) {
			setActiveCategory(undefined);
			setIsShowSub(false);
		} else {
			setActiveCategory(index);
			setIsShowSub(true);
		}
	};

	return (
		<>
			<div className={styles.submenu} onClick={handlerClick}>
				{item.subNav?.length ? (
					<div className={styles.item}>
						<item.Icon size={20} color={'#00ffb9'} />
						<span>{item.title}</span>
					</div>
				) : (
					<Link href={item.path} className={styles.item}>
						<item.Icon size={20} />
						<span>{item.title}</span>
					</Link>
				)}
				<button>
					{item.subNav?.length &&
						(isShowSub ? <RiArrowUpSFill /> : <RiArrowDownSFill />)}
				</button>
			</div>
			<div>
				{isShowSub &&
					item.subNav?.map((subItem, index) => (
						<Link
							href={subItem.path}
							className={styles.dropDownItem}
							key={index}
						>
							<subItem.Icon size={20} color={'#00ffb9'} />

							<span>{subItem.title}</span>
						</Link>
					))}
			</div>
		</>
	);
};

export default SubMenu