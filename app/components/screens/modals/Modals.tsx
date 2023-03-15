import Modal1 from '@/app/components/ui/modals/modals1/Modal1';
import React, { FC, useState } from 'react';

const Modals: FC = () => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(prev => !prev);
	};
	return (
		<>
			<div className={'flex justify-center items-center h-screen'}>
				<button
					className={
						'min-h-24 rounded-md py-4 px-8 border-none bg-[#141414] text-white text-xl cursor-pointer hover:text-main-text hover:scale-105 active:translate-y-1'
					}
					onClick={openModal}
				>
					I'm modal
				</button>
				<Modal1 showModal={showModal} setShowModal={setShowModal} />
			</div>
		</>
	);
};

export default Modals