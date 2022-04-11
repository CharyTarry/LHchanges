import React, { useEffect, Fragment } from 'react';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { gsap } from 'gsap';
import Title from '../title/index';
import Button from './button';
import 'animate.css/animate.min.css';

const Letter = ({ space, letter }) => {
	return space == true ? (
		<div className="text">&nbsp;&nbsp;</div>
	) : (
		<h1 className="text text-white md:pb-5 text-2xl md:text-5xl font-bold">
			{letter}
		</h1>
	);
};

const style = {
	words: {
		display: 'flex',
		flexWrap: 'wrap',
		// flexDirection: 'row',
		overflow: 'hidden',
	},
};

const Section = () => {
	useEffect(() => {
		let textAnimation = gsap.timeline();
		textAnimation.from('.text', {
			y: 400,
			stagger: {
				each: 0.07,
			},
		});
	}, []);

	return (
		<>
			<div className="bg-black-600 mt-14 min-h-screen">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-6/12 w-full">
							<div className="md:w-9/12 w-full">
								<Title title="U.I & U.X" text="Services" />

								<h4 className="mt-5 text-white text-base md:text-2xl">
									Our focus is mainly on design, usability, creativity, and
									content site management appearance and functionality.
								</h4>
								<p className="mt-8 text-white">
									Integrating these elements will maximize the Web and App’s
									overall usability and performance. These elements include an
									easy-to-navigate interface, appropriate use of graphics and
									images, well-written and well-placed text, and a color scheme.
								</p>
								<ul className="mt-8 mb-8 list-disc  text-white  w-full px-14 md:px-32">
									<li>Strategy</li>
									<li>UI + UX Design</li>
									<li>Usability Testing</li>
									<li>Technical Planning</li>
									<li>Development</li>
									<li>Quality Assuarance</li>
									<li>Ongoing Iteration</li>
								</ul>
							</div>
						</div>
						<div className="md:w-5/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582871/Responsive_ig2m01.png"
								width={3544}
								height={3551}
								alt="liquidhack web and application design"
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				className="relative bg-black-600 sm:mt-16 bg-local bg-cover bg-no-repeat min-h-min web-design"
				style={{
					backgroundImage: `url(
						'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/90631_ex8fml.png'
					)`,
				}}
			>
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="flex flex-col-reverse md:flex-row items-center w-full">
						<div className="md:flex justify-start md:w-6/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/Website2_yr66gy.png"
								width={422}
								height={348}
								alt="liquidhack web and application development"
							/>
						</div>
						<div className="flex justify-center mb-8 sm:mb-0 md:w-7/12 w-full px-3">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInRightBig"
							>
								<div className="md:w-10/12 w-full">
									{/* <h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
										Website & Mobile App Design
									</h1> */}
									<div style={style.words}>
										{'Website & Mobile'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>
									<div style={style.words}>
										{'App Design'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>
									<p className="mt-3 text-white text-base md:text-lg">
										A well-designed Web and Mobile App plays a significant role
										in brand identity and overall business growth.
									</p>

									<p className="mt-3 text-white text-base md:text-lg">
										At Liquid Hack Group, our main focus is on developing
										software applications focused on business intelligence and
										the real-time analysis of data as it streams into the
										organization.
									</p>
									<p className="mt-3 text-white text-base md:text-lg">
										Just like we do with custom software development tailored
										for your business, we develop business intelligence software
										to help your company gain more insights based on its daily
										generated data.
									</p>
									{/* <Button>Discover More</Button> */}
								</div>
							</AnimationOnScroll>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-min">
				<div className="md:flex sm:pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInLeftBig"
							>
								<div className="md:w-8/12 mb-8 sm:mb-0 w-full">
									<div style={style.words}>
										{'Website & Mobile'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>
									<div style={style.words}>
										{'App Development'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>
									<p className="mt-3 text-white text-base md:text-lg">
										Customized Web and Mobile App solutions are more efficient,
										flexible, and scalable for your needs and growth.
									</p>
									<p className="mt-3 text-white text-base md:text-lg">
										Despite high initial costs, customized software development
										is a long-term investment that almost always pays off in the
										long run.
									</p>
									<p className="mt-3 text-white text-base md:text-lg">
										Unlike commercial off-the-shelf (C.O.T.S) software and
										website templates, custom options are usually targeting
										specific problems.
									</p>
								</div>
							</AnimationOnScroll>
						</div>
						<div className="md:w-6/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/webDesign1_bdqkik.png"
								width={710}
								height={450}
								alt="liquidhack web and application design"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-black-600 md:mt-16 min-h-min">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="flex flex-col-reverse md:flex-row items-center w-full">
						<div className="md:flex justify-start md:w-6/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/Website2_yr66gy.png"
								width={422}
								height={348}
								alt="liquidhack web and application development"
							/>
						</div>
						<div className="flex justify-center md:w-7/12 w-full px-3">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInRightBig"
							>
								<div className="md:w-10/12 w-full mb-8 sm:mb-0">
									<div style={style.words}>
										{'Machine Learning'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>
									<p className="mt-3 text-white text-base md:text-lg">
										Machine learning is a sub-field of AI that provides systems
										with the ability to learn from data and improve over time
										without being explicitly programmed.
									</p>
									<p className="mt-3 text-white text-base md:text-lg">
										Machine learning algorithms use data to generate and refine
										rules. The computer then decides how to respond based on
										what it has learned from the data.
									</p>
									<p className="mt-3 text-white text-base md:text-lg">
										The objective here is that you’re letting the data guide the
										development of rules.
									</p>
								</div>
							</AnimationOnScroll>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-black-600 md:mt-14 min-h-min">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-6/12 w-full">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInLeftBig"
							>
								<div className="md:w-9/12 w-full">
									<div style={style.words}>
										{'System Engineering'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>

									<p className="mt-3 text-white text-base md:text-lg">
										Configuration, support and maintenance of server software
										based on UNIX & LINUX systems for dedicated servers and
										clusters. Security assurance and integration of monitoring
										systems
									</p>
								</div>
							</AnimationOnScroll>
						</div>
						<div className="md:w-5/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582865/Net2_mqfp01.png"
								width={4422}
								height={3888}
								alt="liquidhack web and application design"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-black-600 md:mt-16 min-h-min">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="flex flex-col-reverse md:flex-row items-center w-full">
						<div className="md:flex justify-start md:w-6/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/webDesign1_bdqkik.png"
								width={422}
								height={348}
								alt="liquidhack web and application development"
							/>
						</div>
						<div className="flex justify-center md:w-7/12 w-full px-3">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInRightBig"
							>
								<div className="md:w-10/12 w-full mb-8 sm:mb-0">
									<div style={style.words}>
										{'Data Analytics'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>

									<p className="mt-3 text-white text-base md:text-lg">
										In today’s world, all enterprises generate massive amounts
										of data from diverse sources.
									</p>
									<p className="mt-3 text-white text-base md:text-lg">
										Whether it’s from enterprise systems themselves, from social
										media or other online sources, from smartphones and other
										client/edge computing devices, or from sensors and
										instruments comprising the Internet of Things.
									</p>

									<p className="mt-3 text-white text-base md:text-lg">
										This data is extremely valuable to organizations that have
										the tools in place to capitalize on it.
									</p>
								</div>
							</AnimationOnScroll>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-black-600 md:mt-16 bg-local bg-cover bg-no-repeat min-h-min">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInLeftBig"
							>
								<div className="md:w-8/12 w-full">
									<div style={style.words}>
										{'Deep Learning'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>

									<p className="mt-3 text-white text-base md:text-lg">
										Deep learning is a type of machine learning built on a deep
										hierarchy of interconnected “neural network” layers, with
										the ability to learn key “features” from the data provided
										to the system.
									</p>
								</div>
							</AnimationOnScroll>
						</div>
						<div className="md:w-6/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/webDesign1_bdqkik.png"
								width={710}
								height={450}
								alt="liquidhack web and application design"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
