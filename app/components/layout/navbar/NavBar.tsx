import Sidebar from '@/app/components/layout/sidebar/Sidebar';
import Logo from '@/public/logo/logoipsum.svg';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { menuData } from './data/MenuData';
import styles from './NavBar.module.scss';

const Navbar: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<nav className={styles.nav}>
			<Sidebar />

			<div className={styles.container}>
				{/* <MenuBars /> */}
				{/*<GlobalStyles hidden={isOpen} />*/}
				<div className={styles.navMenu}>
					<Link href='/'>
						<Logo className={styles.logo} />
					</Link>
					{menuData.map((item, index) => (
						<Link href={item.link} key={index}>
							{item.title}
						</Link>
					))}
					{/* <CheckBox1 toggleTheme={toggleTheme} checked={checked}/> */}
					{/*<CheckBox2 toggleTheme={toggleTheme} checked={checked} />*/}
					{/* <NavBtn>
            <Button onClick={toggleTheme} primary="true">
              Toggle theme
            </Button>
          </NavBtn> */}
				</div>

				{/*<Dropdown isOpen={isOpen} toggle={toggle} />*/}
			</div>
			{/* <Sidebar /> */}
		</nav>
	);
};
export default Navbar;