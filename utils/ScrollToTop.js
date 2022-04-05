import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
	const { pathname } = useRouter();

	useEffect(() => {
		// window.scrollTo(0, 0);

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [pathname]);
	return null;
}
