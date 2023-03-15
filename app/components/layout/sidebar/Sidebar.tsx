import { SidebarData } from '@/app/components/layout/sidebar/SidebarData';
import SubMenu from '@/app/components/layout/sidebar/submenu/SubMenu';
import BurgerButton from '@/app/components/ui/buttons/burger-button/BurgerButton';
import { useOutside } from '@/app/hooks/useOutside';
import cn from 'classnames';
import React, { FC, useState } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false);
	const [activeCategory, setActiveCategory] = useState<number | undefined>(
		undefined
	);

	return (
		<div ref={ref}>
			<div className={styles.burgerButton}>
				<BurgerButton isOpen={isShow} setIsOpen={setIsShow} />
			</div>
			<div className={cn(styles.menu, { [styles.active]: isShow })}>
				{SidebarData.map((item, index) => (
					<SubMenu
						item={item}
						key={index}
						isShowSideBar={isShow}
						index={index}
						setActiveCategory={setActiveCategory}
						activeCategory={activeCategory}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar