import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

import styles from '../../styles/title.module.scss';

// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const Title = ({ title, text, paragraf, email }) => {
	const revealRefs = useRef([]);
	revealRefs.current = [];

	useEffect(() => {
		revealRefs.current.forEach((el, index) => {
			gsap.fromTo(
				el,
				{
					autoAlpha: 0,
				},
				{
					duration: 1,
					autoAlpha: 1,
					ease: 'none',
					scrollTrigger: {
						id: `section-${index + 1}`,
						trigger: el,
						start: 'top center+=400',
						toggleActions: 'play none none reverse',
					},
				}
			);
		});
	}, []);
	const addToRefs = (el) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};
	return (
		<AnimationOnScroll
			initiallyVisible={false}
			animateIn="animate__fadeInLeftBig"
		>
			<div className={styles.sectionTitle} ref={addToRefs}>
				<div className={styles.section__title}>
					<p>{text}</p>
					<h1>{title}</h1>
					<a href="mailto:ghofranebh90@gmail.com">{email}</a>
				</div>
				<div className="section-paragraf">
					<p>{paragraf}</p>
				</div>
			</div>
		</AnimationOnScroll>
	);
};

export default Title;
