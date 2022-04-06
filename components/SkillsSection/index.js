import React, { useRef, useEffect } from 'react';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Link from 'next/link';

import styles from '../../styles/skills.module.scss';

import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const transition = {
	duration: 0.6,
	ease: [0.43, 0.13, 0.23, 0.96],
	opacity: 0,
};
const data = [
	{
		id: 1,
		src: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1649144299/logo-design_whqeaj.jpg',
		name: 'logos',
		title: '#Logos ',
	},
	{
		id: 2,
		src: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1649144212/coding_ii8lhf.jpg',
		name: 'Coding',
		title: '#Coding',
	},
	{
		id: 3,
		src: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1649144215/photography_eouxep.jpg',
		name: 'img3',
		title: '#Photography',
	},
	{
		id: 4,
		src: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1649144333/typographie_pqbaeo.jpg',
		name: 'img3',
		title: '#Typography',
	},
];

function SkillsSection() {
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
					ease: Power3.easeOut,
					y: -40,
					scrollTrigger: {
						// id: `section-${index + 1}`,
						trigger: el,
						start: 'top center+=300',
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
		<div className={styles.sectionSkills}>
			<div className={styles.sectionGrid}>
				<div className={styles.container}>
					{data.map((data, id) => (
						<div key={id} className={styles.wrapper} ref={addToRefs}>
							<Link href={data.name} passHref>
								<motion.div
									transition={transition}
									whileHover={{
										scale: 1.1,
									}}
								>
									<motion.img
										src={data.src}
										width="100%"
										height="100%"
										alt={data.name}
									/>

									<motion.div
										whileHover={{ opacity: 1 }}
										className={styles.projectInfo}
									>
										<h4>{data.title}</h4>
										<a className={styles.projectLink} href="#about">
											See more
										</a>
									</motion.div>

									<motion.div className={styles.projectTitle}>
										<h4>{data.title}</h4>
									</motion.div>
								</motion.div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SkillsSection;
