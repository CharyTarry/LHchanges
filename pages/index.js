import { useState, useEffect } from 'react';
// import AnimatedCursor from 'react-animated-cursor';
import { AnimatePresence, motion } from 'framer-motion';
import { Expo, Power3 } from 'gsap';
import { Layout, Section } from '../components';
import ScrollToTop from '../utils/ScrollToTop';

const Home = () => {
	const [isRendered, setIsRendered] = useState(false);
	const toggle = () => {
		if (window.scrollY > 700) {
			setIsRendered(true);
		} else {
			setIsRendered(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', toggle);
		return () => {
			window.removeEventListener('scroll', toggle);
		};
	});

	return (
		<Layout>
			<ScrollToTop />
			<AnimatePresence>
				<Section />
			</AnimatePresence>
			<motion.a
				initial={{ opacity: 0 }}
				animate={{
					opacity: isRendered ? 1 : 0,
				}}
				transition={{
					ease: Expo.easeOut,
					duration: 1,
				}}
				href="#top"
				className="back-to-top"
				title="Back to Top"
			>
				<p className="back-to-top__image">↑</p>
			</motion.a>
			{/* <AnimatedCursor /> */}
		</Layout>
	);
};

export default Home;
