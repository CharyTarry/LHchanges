import React from 'react';
import Image from 'next/image';
import Button from './button';

const Section = () => {
	return (
		<>
			<div className="bg-black-600 mt-16">
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
									Our talented team adapt at using sophisticated tools and
									techniques to offer you world class web development services.
								</p>
								<Button>Get Started</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black-600">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start md:w-7/12 w-full ">
							<div className="md:w-8/12 w-full">
								<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Web Design and Brand Identity
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									We are a curated team of international experts united by a
									single goal; to create category-defining brands and digital
									experiences that make an impact, shape culture and connect
									people.
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
			<div className="bg-black-600 mt-16">
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
							<div className="md:w-8/12 w-full">
								<h1 className="text-white pt-8 text-3xl md:text-5xl font-bold">
									Website and App Development
								</h1>
								<p className="mt-3 text-white text-base md:text-lg">
									We are a curated team of international experts united by a
									single goal; to create category-defining brands and digital
									experiences that make an impact, shape culture and connect
									people.
								</p>
								<Button>Discover More</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
