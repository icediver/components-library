import AnimatedTabBar from '@/app/components/ui/menus/amimated-tab-bar/AnimatedTabBar';
import GlassmorphismMenu from '@/app/components/ui/menus/glassmorphism-menu/GlassmorphismMenu';
import LavaLampCssMenu from '@/app/components/ui/menus/lava-lamp-css-menu/LavaLampCssMenu';
import MagicMenu from '@/app/components/ui/menus/magic-menu/MagicMenu';
import { FC } from 'react';

const Menus: FC = () => {
	return (
		<div className={'h-screen bg-[#2c3e50]'}>
			<LavaLampCssMenu />
			<AnimatedTabBar />
			<GlassmorphismMenu />
			<MagicMenu />
		</div>
	);
};
export default Menus