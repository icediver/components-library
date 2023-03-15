import Image from 'next/image';
import React, {
	Dispatch,
	FC,
	MouseEvent,
	SetStateAction,
	useCallback,
	useEffect,
	useRef
} from 'react';
import { MdClose } from 'react-icons/md';
import { animated, useSpring } from 'react-spring';
import camera from './modal.jpg';
import styles from './Modal1.module.scss';

const Modal1: FC<{
	showModal: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const animation = useSpring({
		config: {
			duration: 250
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`
	});

	const closeModal = (e: MouseEvent) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape' && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);
	return (
		<>
			{showModal ? (
				<div className={styles.modal} ref={modalRef} onClick={closeModal}>
					<animated.div style={animation}>
						<div className={styles.wrapper}>
							<Image src={camera} alt='camera' />
							<div className={styles.content}>
								<h1>Are you ready? </h1>
								<p>Get exclusive acces to our next launch</p>
								<button>Join Now</button>
							</div>
							<MdClose
								className={styles.closeBtn}
								aria-label='Close modal'
								onClick={() => setShowModal(prev => !prev)}
							/>
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default Modal1