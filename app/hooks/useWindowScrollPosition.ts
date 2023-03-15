import { useEffect, useState } from 'react';

export const useWindowScrollPositions = () => {
	const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });
	const [documentHeight, setDocumentHeight] = useState(0);
	const [innerHeight, setInnerHeight] = useState(0);
	const [outerHeight, setOuterHeight] = useState(0);

	useEffect(() => {
		function updatePosition() {
			setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
			setDocumentHeight(document.body.scrollHeight);
			setInnerHeight(window.innerHeight);
			setOuterHeight(window.outerHeight);
		}

		window.addEventListener('scroll', updatePosition);
		updatePosition();

		return () => window.removeEventListener('scroll', updatePosition);
	}, []);

	return { scrollPosition, documentHeight, innerHeight, outerHeight };
};