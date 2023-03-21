import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicSvgSkeleton = dynamic(
	() => import('@/app/components/ui/skeletons/svg-skeletone/SvgSkeleton'),
	{ ssr: false }
);

const SkeletonsPage: NextPage = () => {
	return <DynamicSvgSkeleton />;
};

export default SkeletonsPage