import React, { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { gsap } from 'gsap';
import Button from './button';
import ProjectSection from './projects';
import SkillsSection from '../SkillsSection/index';
import GithubRepo from '../GithubRepo/index';
import Title from '../title/index';
import Slider from '../logoSlider';
import 'animate.css/animate.min.css';

const Letter = ({ space, letter }) => {
	return space == true ? (
		<div className="text">&nbsp;&nbsp;</div>
	) : (
		<h1 className="text text-white md:pb-5 text-3xl md:text-5xl font-bold">
			{letter}
		</h1>
	);
};

const style = {
	words: {
		display: 'flex',
		// flexDirection: 'row',
		overflow: 'hidden',
	},
};

const Section = () => {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		let textAnimation = gsap.timeline();
		textAnimation.from('.text', {
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
			<div className="bg-black-600 mt-28 min-h-min">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="flex flex-col-reverse md:flex-row items-center w-full">
						<div className="md:w-5/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_716,w_705/v1644582842/Landing2_hqfqax.png"
								alt="liquidhack software development"
								width={705}
								height={716}
							/>
						</div>
						<div className="flex justify-center mb-8 md:mb-0 md:w-8/12 w-full px-3">
							<div className="md:w-8/12 w-full">
								<AnimationOnScroll
									initiallyVisible={false}
									animateIn="animate__fadeInRightBig"
								>
									{/* <h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Build Your Custom Software
								</h1> */}
									<div style={style.words}>
										{`Let's Build Your`.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter key={index} space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>
									<div style={style.words}>
										{'Custom Software'.split('').map((i, index) =>
											i == ' ' ? (
												<Fragment key={index}>
													<Letter space={true} letter={i} />
												</Fragment>
											) : (
												<Fragment key={index}>
													<Letter key={index} space={false} letter={i} />
												</Fragment>
											)
										)}
									</div>
									<div className="mt-3 text-white text-base md:text-lg">
										<Typewriter
											options={{
												strings: [
													`The business world is fast and rapidly evolving in
												technology applications. `,
												],
												autoStart: true,
												loop: true,
											}}
										/>
										{/* Every day businesses find the need to upgrade with the
									changing customer needs to remain relevant in this dynamic
									market. */}
									</div>
									<Button onClick={handleToggle}>Code with Us</Button>
								</AnimationOnScroll>
							</div>
						</div>
					</div>
				</div>
			</div>
			{toggle && (
				<div className="bg-black-600 mt-16 md:min-h-min">
					<AnimationOnScroll animateIn="animate__tada">
						<div className="relative flex items-center justify-center py-4 px-7 mb-12 md:h-min">
							<video
								autoPlay
								loop
								controls
								muted
								className="z-10 md:min-w-fit w-60 max-h-96 sm:max-w-fit rounded-xl"
							>
								<source
									src="https://cloudinary-res.cloudinary.com/video/upload/f_auto:video,q_auto/v1601900814/website/refresh/dx/Developer_Experience_hero_v2.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</AnimationOnScroll>
				</div>
			)}
			<div
				className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-min"
				style={{
					backgroundImage: `url(
						'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/90631_ex8fml.png'
					)`,
				}}
			>
				<div className="md:flex pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInLeftBig"
							>
								<div className="md:w-8/12 w-full">
									{/* <h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
										Web Design and Brand Identity
									</h1> */}

									<div style={style.words}>
										{'Web Design and'.split('').map((i, index) =>
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
										{'Brand Identity'.split('').map((i, index) =>
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
										Our focus is mainly on design, usability, creativity and
										content site management.
									</p>
									{/* <p>Site’s appearance and
										functionality. Integrating these elements will maximize the
										site’s overall usability and performance.</p> */}
									<Button>Learn More</Button>
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
			<div className="bg-black-600 mt-16 min-h-min">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
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
								<div className="md:w-10/12 w-full">
									<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
										Website & Mobile App Design
									</h1>
									<p className="mt-3 text-white text-base md:text-lg">
										A well-designed Web and Mobile App plays a significant role
										in brand identity and overall business growth.
									</p>

									{/* <p className="mt-3 text-white text-base md:text-lg">
										At Liquid Hack Group, our main focus is on developing
										software applications focused on business intelligence and
										the real-time analysis of data as it streams into the
										organization. Just like we do with custom software
										development tailored for your business, we develop business
										intelligence software to help your company gain more
										insights based on its daily generated data.
									</p> */}
									<Button>Discover More</Button>
								</div>
							</AnimationOnScroll>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="bg-black-600 mt-16 md:min-h-min">
				<div className="relative flex items-center justify-center py-4 px-7 mb-12 md:h-min">
					<div className="relative z-30 p-5 text-2xl text-white bg-white bg-opacity-50 rounded-xl">
						Play
					</div>
					<video
						autoPlay
						loop
						controls
						muted
						className="z-10 w-auto md:min-w-fit max-h-96 max-w-fit rounded-xl"
					>
						<source
							src="https://res.cloudinary.com/dgisuffs0/video/upload/q_auto/v1646976061/LiquidHackGroupVideo_jsdi2b.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div> */}
			<div className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-min">
				<div className="md:flex pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInLeftBig"
							>
								<div className="md:w-8/12 w-full">
									<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
										Web & Mobile App Development
									</h1>
									<p className="mt-3 text-white text-base md:text-lg">
										Customized Web and Mobile App solutions are more efficient,
										flexible, and scalable for your needs and growth.
									</p>
									<Button>Learn More</Button>
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
			{/* <div className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-min">
				<div className="md:flex pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<div className="md:w-8/12 w-full">
								<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Data Analytics
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									In today’s world, all enterprises generate massive amounts of
									data from diverse sources. Whether it’s from enterprise
									systems themselves, from social media or other online sources,
									from smartphones and another client/edge computing devices, or
									from sensors and instruments comprising the Internet of
									Things, this data is extremely valuable to organizations that
									have the tools in place to capitalize on it.
								</p>
								<Button>Learn More</Button>
							</div>
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
			</div> */}
			{/* <div className="bg-black-600 mt-16 min-h-min">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="md:flex justify-start md:w-6/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/Website2_yr66gy.png"
								width={422}
								height={348}
								alt="liquidhack web and application development"
							/>
						</div>
						<div className="flex justify-center md:w-7/12 w-full px-3">
							<div className="md:w-10/12 w-full">
								<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Machine Learning
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									Machine learning is a sub-field of AI that provides systems
									with the ability to learn from data and improve over time
									without being explicitly programmed.
								</p>
								<Button>Learn More</Button>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* <div className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-min">
				<div className="md:flex pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<div className="md:w-8/12 w-full">
								<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Deep Learning
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									Deep learning is a type of machine learning built on a deep
									hierarchy of interconnected “neural network” layers, with the
									ability to learn key “features” from the data provided to the
									system.
								</p>
								<Button>Learn More</Button>
							</div>
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
			</div> */}
			{/* <div className=" items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<Title title="Projects Section" text="SELECTED PROJECTS" />
				<ProjectSection />
			</div> */}
			<div className=" items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<Title title="Projects Section" text="PHOTOGRAPHY & LOGOs" />
				<SkillsSection />
			</div>
			<div className=" items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<Title title="Open Source Exercices" text="github Repositories" />
				<GithubRepo />
			</div>
			<Slider />
		</>
	);
};

export default Section;
