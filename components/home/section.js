import React from 'react';
import Image from 'next/image';
import Button from './button';

const Section = () => {
	return (
		<>
			<div className="bg-black-600 mt-28 min-h-screen">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="md:w-5/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_716,w_705/v1644582842/Landing2_hqfqax.png"
								alt="liquidhack software development"
								width={705}
								height={716}
							/>
						</div>
						<div className="flex justify-center md:w-8/12 w-full px-3">
							<div className="md:w-8/12 w-full">
								<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Build Your Custom Software
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									With the fast-changing world, the needs of the people are
									changing. Businesses need to upgrade themselves with the
									changing needs and requirements of the people to stay relevant
									in this dynamic market.
								</p>
								<p className="mt-3 text-white text-base md:text-lg">
									Customized software solutions can be more efficient and
									flexible for your needs. This will affect your business
									positively in the long run. In spite of the high initial
									costs, custom software development is a long-term investment
									that almost always pays off in the end.
								</p>

								<Button>Get Started</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-screen"
				style={{
					backgroundImage: `url(
						'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/90631_ex8fml.png'
					)`,
				}}
			>
				<div className="md:flex pt-32 items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-7/12 w-full ">
							<div className="md:w-8/12 w-full">
								<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Web Design and Brand Identity
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									Our focus is mainly on design, usability, creativity and
									content site management. Site’s appearance and functionality.
									Integrating these elements will maximize the site’s overall
									usability and performance.
								</p>

								<p className="mt-3 text-white text-base md:text-lg">
									Our web design service includes web apps, mobile apps, desktop
									apps and user interface design. We also conduct adaptive web
									design which uses two or more versions of a website that are
									customized for specific screen sizes.
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
			</div>
			<div className="bg-black-600 mt-16 min-h-screen">
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
									Website, App and Desktop Development
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									At Liquid Hack Group, our main focus is on developing software
									applications focused on business intelligence and the
									real-time analysis of data as it streams into the
									organization. Just like we do with custom software development
									tailored for your business, we develop business intelligence
									software to help your company gain more insights based on its
									daily generated data.
								</p>
								<Button>Learn More</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black-600 mt-16 md:min-h-screen">
				<div className="relative flex items-center justify-center py-4 px-7 mb-12 md:h-screen">
					{/* <div className="relative z-30 p-5 text-2xl text-white bg-white bg-opacity-50 rounded-xl">
						Play
					</div> */}
					<video
						autoPlay
						loop
						controls
						muted
						className=" z-10 w-auto min-w-full min-h-full max-w-none rounded-xl"
					>
						<source
							src="https://res.cloudinary.com/dgisuffs0/video/upload/q_auto/v1646976061/LiquidHackGroupVideo_jsdi2b.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<div className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-screen">
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
			</div>
			<div className="bg-black-600 mt-16 min-h-screen">
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
									without being explicitly programmed. Machine learning
									algorithms use data to generate and refine rules. The computer
									then decides how to respond based on what it has learned from
									the data. The objective here is that you’re letting the data
									guide the development of rules.
								</p>
								<Button>Learn More</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black-600 bg-local bg-cover bg-no-repeat min-h-screen">
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
									system. The deep learning technique takes massive amounts of
									data and determines the common rules and features associated
									with the data. As with classical machine learning, data guides
									the training of the deep learning model.
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
			</div>
		</>
	);
};

export default Section;
