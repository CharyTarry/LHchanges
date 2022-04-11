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
import styles from '../../styles/home.module.css';
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
			{/* <div className={styles.cursor}>
				<div className={styles.cursor_small}></div>
				<div className={styles.cursor_large}></div>
				<div className={styles.cursor_text}>
					<div className={styles.text}>GO HERE! GO HERE! GO HERE! GO HERE!</div>
				</div>
			</div> */}
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
						{toggle && (
							<div className="block sm:hidden bg-transparent mt-16 md:min-h-min">
								<AnimationOnScroll animateIn="animate__tada">
									<div className="flex items-center justify-center py-4 px-7 mb-12 md:h-min">
										<video
											autoPlay
											loop
											controls
											muted
											className="z-10 max-h-96 sm:max-w-fit rounded-xl"
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
						<div className="flex justify-center mb-10 md:mb-0 md:w-8/12 w-full px-3">
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
				<div className="hidden sm:block bg-transparent sm:mt-4 md:min-h-min">
					<AnimationOnScroll animateIn="animate__tada">
						<div className="flex items-center justify-center py-4 px-7 mb-12 md:h-min">
							<video
								autoPlay
								loop
								controls
								muted
								className="z-10 max-h-96 sm:max-w-fit rounded-xl"
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
				<div className="md:flex sm:pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInLeftBig"
							>
								<div className="md:w-8/12 mb-8 sm:mb-0 w-full">
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
			<div
				className="relative bg-black-600 sm:mt-16 bg-local bg-cover bg-no-repeat min-h-min web-design"
				// style={{
				// 	backgroundImage: `url(
				// 		'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/90631_ex8fml.png'
				// 	)`,
				// }}
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

			<div className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-min">
				<div className="md:flex sm:pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<AnimationOnScroll
								initiallyVisible={false}
								animateIn="animate__fadeInLeftBig"
							>
								<div className="md:w-8/12 mb-8 sm:mb-0 w-full">
									{/* <h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
										Web & Mobile App Development
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

			{/* <div className=" items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<Title title="Projects Section" text="SELECTED PROJECTS" />
				<ProjectSection />
			</div> */}
			<div className="flex flex-col md:flex-row items-center justify-between md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<div className="mb-8 sm:mb-0">
					<h1 className="text-white text-2xl md:text-5xl w-64 font-bold">
						Our Latest Projects
					</h1>
					<Button>Get Quote</Button>
				</div>
				<div className="bg-transparent min-h-[450px] md:w-[724px] rounded-md">
					<SkillsSection />
				</div>
			</div>
			{/* <div className="items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<Title title="Projects Section" text="PHOTOGRAPHY & LOGOs" />
				<SkillsSection />
			</div> */}
			{/* <div className=" items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<Title title="Open Source Exercices" text="github Repositories" />
				<GithubRepo />
			</div> */}
			{/* <Slider /> */}
			<div className="flex flex-col md:flex-row items-center justify-between md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<div className="flex flex-col-reverse md:flex-row items-center w-full">
					<div className="md:w-5/12 flex justify-center w-full">
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/Review1_vam1ax.png"
							alt="liquidhack what our client's say"
							width={255}
							height={458}
						/>
					</div>
					<div className="md:w-8/12 w-full flex justify-center">
						<div className="w-full">
							<h1 className="text-white text-2xl mb-8 md:mb-10 md:text-5xl font-bold md:w-5/12">
								What Our Client Say
							</h1>
							<div className=" w-full">
								<Image
									src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_88,w_74/v1649417595/TalkUp_fzgwqp.png"
									width={88}
									height={74}
								/>
								<div className="md:px-24">
									<p className="my-3 text-white text-base md:text-lg">
										Loved my experience working with the Liquid Hack Team, the
										guys have excellent services. Definitely coming back in
										future.
									</p>
								</div>
								<div className=" flex justify-end text-mint fill-current">
									<Image
										className="rotate-180 "
										src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_88,w_74/v1649417595/TalkUp_fzgwqp.png"
										width={88}
										height={74}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
