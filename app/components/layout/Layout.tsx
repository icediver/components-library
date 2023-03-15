'use client';
import NavBar from '@/app/components/layout/navbar/NavBar';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
};

export default Layout