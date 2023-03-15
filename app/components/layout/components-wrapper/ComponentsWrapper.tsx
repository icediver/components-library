import { FC, RefObject, useRef } from 'react';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

const ComponentsWrapper: FC<{ screens: FC[] }> = ({ screens }) => {
	const refs = screens.map(x => useRef(null));

	const gotoServices = (ref: RefObject<HTMLDivElement>) => {
		window.scrollTo({
			top: ref.current?.offsetTop,
			behavior: 'smooth'
		});
	};
	return (
		<div>
			{screens.map((Screen, index) => (
				<div className={'relative'} ref={refs[index]}>
					<Screen />)
					{index < refs.length - 1 && (
						<button
							className={
								'bottom-[15%] right-32 fill-main-text/20 hover:fill-main-text absolute hover:text-main-text'
							}
							onClick={() =>
								index < refs.length - 1 && gotoServices(refs[index + 1])
							}
						>
							<BsChevronDoubleDown size={50} />
						</button>
					)}
					{index > 0 && (
						<button
							className={
								'top-[15%] right-32 fill-main-text/20 hover:fill-main-text absolute hover:text-main-text'
							}
							onClick={() => index > 0 && gotoServices(refs[index - 1])}
						>
							<BsChevronDoubleUp size={50} />
						</button>
					)}
				</div>
			))}
		</div>
	);
};

export default ComponentsWrapper