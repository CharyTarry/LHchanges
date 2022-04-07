import React, { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CountUp from 'react-countup';
import Title from '../title/index';
import TextSlider from '../textSlider';
import Button from './button';
import styles from '../../styles/about.module.css';
import 'animate.css/animate.min.css';

const capabilities = [
	{
		name: 'Usability',
		icon: 'fa-solid fa-bicycle',
		rating: 8.5,
	},
	{
		name: 'Design',
		icon: 'fa-solid fa-car',
		rating: 8.7,
	},
	{
		name: 'Creativity',
		icon: 'fa-solid fa-helicopter',
		rating: 8.5,
	},
	{
		name: 'Capacity',
		icon: 'fa-solid fa-plane',
		rating: 8.2,
	},
	{
		name: 'Research',
		icon: 'fa-solid fa-rocket',
		rating: 8.4,
	},
];

const Section = () => {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		let textAnimation = gsap.timeline();
		textAnimation.from('.circle', {
			y: 400,
			stagger: {
				each: 0.07,
			},
		});
	}, []);

	const handleToggle = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<div
				className="bg-black-600 mt-12 min-h-screen bg-blend-luminosity bg-local bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url(
						'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/75891_Converted_tbny5o.png'
					)`,
					backgroundPositionY: 100,
				}}
			>
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-2 px-7 md:px-10">
					<div className="md:flex items-end w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-6/12 w-full">
							<div className="md:w-9/12 w-full">
								{/* <h5 className="mt-3 text-white">About Us</h5>
								<h1 className="mt-0.5 text-white pt-8 text-3xl md:text-4xl font-bold">
									Who We Are
								</h1> */}
								<Title title="Who We Are" text="About us" />
								<h4 className=" text-white text-base md:text-2xl">
									Liquid Hack Group is just good vibes when it comes to simple,
									custom-made software solutions.
								</h4>
								<p className="mt-8 text-white">
									We are engrossed in offering effective custom-based software
									solutions to help our customers grow in their respective
									business domains, by walking with you from initial scalable
									concept that you envision achieving for you organization.
								</p>
								<p className="mt-5 mb-4 text-white">
									With our curated team, of technical experts we design, develop
									and deploy customized web and mobile app software solutions.
								</p>
								<p className="mt-5 mb-4 text-white">
									We thrive on driving success for your business and through
									research and strategy development in order to provide the most
									updated solutions. We aim for flexibility for effective and
									efficient execution.
								</p>
								<Button onClick={handleToggle}>Our Capabilities</Button>
							</div>
						</div>
						{toggle && (
							<div className="block sm:hidden bg-transparent sm:mt-8 py-8 min-h-min">
								<ol className={styles.capabilities}>
									{capabilities?.map((item, index) => (
										<Fragment key={index}>
											<li className={styles.li}>
												<div className={styles.icon}>
													<i className={item.icon}></i>
												</div>
												<div className={styles.title}>{item.name}</div>
												<p className={styles.rating}>
													<CountUp
														start={0}
														end={item.rating}
														duration={2.75}
														decimals={1}
														decimal="."
														separator=","
													/>
												</p>
											</li>
										</Fragment>
									))}
								</ol>
							</div>
						)}
						<div className="md:w-6/12 w-full">
							{/* <AnimationOnScroll animateIn="animate__tada"> */}
							<div className="md:h-full sm:pb-28">
								<video
									autoPlay
									loop
									controls
									muted
									className="w-full rounded-xl"
								>
									<source
										src="https://res.cloudinary.com/dgisuffs0/video/upload/q_auto/v1646976061/LiquidHackGroupVideo_jsdi2b.mp4"
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
							</div>
							{/* </AnimationOnScroll> */}
						</div>
					</div>
				</div>
			</div>
			{toggle && (
				<div className="hidden sm:block bg-black-600 sm:mt-8 sm:py-8 min-h-min">
					<ol className={styles.capabilities}>
						{capabilities?.map((item, index) => (
							<Fragment key={index}>
								<li className={styles.li}>
									<div className={styles.icon}>
										<i className={item.icon}></i>
									</div>
									<div className={styles.title}>{item.name}</div>
									<p className={styles.rating}>
										<CountUp
											start={0}
											end={item.rating}
											duration={2.75}
											decimals={1}
											decimal="."
											separator=","
										/>
									</p>
								</li>
							</Fragment>
						))}
					</ol>
				</div>
			)}
			<div
				className="bg-black-600 mt-8 bg-blend-luminosity bg-local bg-cover bg-no-repeat bg-center min-h-screen"
				style={{
					backgroundImage: `url(
						'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/75891_Converted_tbny5o.png'
					)`,
					backgroundPositionY: 10,
				}}
			>
				<div className="md:flex items-center md:max-w-7xl md:mx-auto sm:py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex items-center justify-start md:w-6/12 w-full">
							<div className="md:w-9/12 w-full">
								<h1 className="mt-0.5 text-white pt-8 text-3xl md:text-4xl font-bold">
									Our Competency
								</h1>
								{/* <h4 className="mt-2 text-white text-base md:text-2xl">
									Usability Design Creativity Capacity Research
								</h4> */}
								<TextSlider values={competency} />
							</div>
						</div>
						<div className="md:w-6/12 w-full">
							<div className="sm:mt-16 md:mt-0">
								<h1 className="text-red-600 text-6xl font-semibold">01</h1>
								<h1 className="mt-8 text-white text-4xl">Usability</h1>
								<p className="mt-8 text-white">
									The 5 Es – efficient, effective, engaging, error tolerant and
									easy to learn – describe the multi-faceted characteristics of
									usability. Users are satisfied when an interface is
									user-centered – when their goals, mental models, tasks and
									requirements are all met.
								</p>
							</div>
							<div className="mt-16">
								<h1 className="text-red-600 text-6xl font-semibold">02</h1>
								<h1 className="mt-8 text-white text-4xl">Design</h1>
								<p className="mt-8 text-white">
									To give users what they need is the first goal of user
									experience design. We create category-defining brands and
									digital experiences that make an impact, shape culture and
									connect people.
								</p>
							</div>
							<div className="mt-16">
								<h1 className="text-red-600 text-6xl font-semibold">03</h1>
								<h1 className="mt-8 text-white text-4xl">Creativity</h1>
								<p className="mt-8 text-white">
									Creative thinking is usually most predominant during the
									beginning of the design process. Businesses value creative
									thinking suggests answers, solutions and ideas that can be
									quite unexpected, unique and unorthodox. It fuels innovation,
									progress, and growth.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="bg-black-600 mt-8 bg-blend-luminosity bg-local bg-cover bg-no-repeat bg-center min-h-min"
				style={{
					backgroundImage: `url(
						'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/75891_Converted_tbny5o.png'
					)`,
					backgroundPositionY: -40,
				}}
			>
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto sm:py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="md:w-6/12 w-full">
							<div>
								<h1 className="text-red-600 text-6xl font-semibold">04</h1>
								<h1 className="mt-8 text-white text-4xl">Capacity</h1>
								<p className="mt-8 text-white">
									We aim to create interfaces which users find easy to use and
									pleasurable. To deliver impressive GUIs, we remember—users are
									humans, with needs such as comfort and a limit on their mental
									capacities.
								</p>
							</div>
							<div className="mt-16">
								<h1 className="text-red-600 text-6xl font-semibold">05</h1>
								<h1 className="mt-8 text-white text-4xl">Research</h1>
								<p className="mt-8 text-white">
									Our goal is to help researchers to produce high quality
									research software, from the simplest scripts to complex
									simulations running on state-of-the-art computers, be it
									mobile phones, laptops, desktops and large PCs.
								</p>
							</div>
						</div>
						<div className="flex items-center justify-end md:w-6/12 w-full">
							<div className="md:w-9/12 w-full">
								<h1 className="mt-0.5 text-white pt-8 text-3xl md:text-4xl font-bold">
									Our Core Values
								</h1>
								{/* <h4 className="mt-2 text-white text-base md:text-2xl">
									Customer satisfaction Honesty Innovation Teamwork
								</h4> */}
								<TextSlider values={values} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;

const competency = [
	'Usability',
	'Design',
	'Creativity',
	'Capacity',
	'Research',
];

const values = [
	'Honesty',
	'Innovation',
	'Teamwork',
	'Customer',
	'Satisfaction',
];
