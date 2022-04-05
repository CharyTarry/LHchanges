import { useState, useEffect } from 'react';
import { Layout, BlogSection } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import { Expo, Power3 } from 'gsap';
import ScrollToTop from '../utils/ScrollToTop';

const Blog = () => {
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
				<BlogSection />
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
		</Layout>
	);
};

export default Blog;
