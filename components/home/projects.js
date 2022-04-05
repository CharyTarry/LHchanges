import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3, gsap } from 'gsap';
import { FaGithub } from 'react-icons/fa';

import styles from '../../styles/projects.module.css';
// import TreasureHunt from '../../assets/images/treasureHunt.png';
// import ShoppingCart from '../../assets/images/iMac-Screen-1.png';
// import MealSharing from '../../assets/images/mealshering.png';

import { motion } from 'framer-motion';

// import { ScrollTrigger } from 'gsap';
// gsap.registerPlugin(ScrollTrigger);

const transition = {
	duration: 0.6,
	ease: [0.43, 0.13, 0.23, 0.96],
	opacity: 0,
};
const data = [
	{
		id: 1,
		src: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1649136961/treasureHunt_p72mti.png',
		name: 'logos',
		title: 'Treasure Hunt ',
		// The game are meant for kids parties, where an adult (host) can create a game for the kids, with a theme. The host can create posts and questions.The kids have to find the posts and answer the questions.
		description:
			'Final project in HackYourFuture. A Treasure Hunt game for kids, developed with an idea from CodeArt during an 8-week period, where we planned, designed, developed and deployed the game using Reactjs.',
		language: ['Tailwind', 'Nodejs/Express', 'React Native'],
		web: 'https://liquidhack.co.ke',
	},
	{
		id: 2,
		src: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1649140514/MealSharing_ch5dvd.png',
		codeSource: 'https://github.com/ghofranebenhmaid/mealinfo',
		title: 'Food Delivery',
		description:
			'In today’s world, people have grown accustomed to food being delivered right to their front door. Food delivery drivers make this possible, keeping the public well-fed on days they don’t have the time, energy, or ability to cook or pick up food themselves.',
		language: ['Material Design', 'React', 'React Native', 'Nodejs/Express'],
		web: 'https://liquidhack.co.ke',
	},
	{
		id: 3,
		src: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1649140535/ShoppingCart_ukjavr.png',
		codeSource:
			'https://github.com/ghofranebenhmaid/Projects/tree/master/ShoppingCart',
		title: 'Ecommerce',
		description: `What I love about Lufumart and the way they approach describing this heel (and other products) is that they speak in the language of their customers. Using phrases like “All. Damn. Day.” and “take your usual size” makes shoppers feel as if they were talking to their friends, not a business.`,
		language: ['HTML', 'SCSS', 'JavaScript'],
		web: 'https://liquidhack.co.ke',
	},
];

const ProjectSection = () => {
	const revealRefs = useRef([]);
	revealRefs.current = [];

	// useEffect(() => {
	// 	revealRefs.current.forEach((el, index) => {
	// 		gsap.fromTo(
	// 			el,
	// 			{
	// 				autoAlpha: 0,
	// 			},
	// 			{
	// 				duration: 1,
	// 				autoAlpha: 1,
	// 				ease: Power3.easeOut,
	// 				y: -30,
	// 				scrollTrigger: {
	// 					id: `section-${index + 1}`,
	// 					trigger: el,
	// 					start: 'top center+=300',
	// 					toggleActions: 'play none none reverse',
	// 				},
	// 			}
	// 		);
	// 	});
	// }, []);

	const addToRefs = (el) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};
	return (
		<div className={styles.card} id="project">
			{data.map((data, id) => (
				<div key={id} className={styles.container}>
					<div className={styles.project_info} ref={addToRefs}>
						<h1 className={styles.title}>{data.title}</h1>
						<p className={styles.description}>{data.description}</p>

						<ul className={styles.description}>
							{data.language && data.language.length > 0
								? data.language.map((item, index) => {
										return (
											<li key={index}>
												<span>&#8250;</span>
												&nbsp;{item}
											</li>
										);
								  })
								: 'Loading...'}
						</ul>

						<div className={styles.work_links}>
							<a className={styles.project_link} href={data.web} target="blank">
								Visit Site <span>&rarr;</span>
							</a>
							<a
								className={styles.work_code}
								href={data.codeSource}
								title="View Source Code"
								target="blank"
							>
								<FaGithub />
							</a>
						</div>
					</div>
					<div className={styles.project_image} ref={addToRefs}>
						<motion.img
							transition={transition}
							whileHover={{ scale: 1.03 }}
							src={data.src}
							width="100%"
							height="100%"
							alt={data.name}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectSection;
