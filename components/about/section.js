import React from 'react';
import Image from 'next/image';
import Button from './button';

const Section = () => {
	return (
		<>
			<div className="bg-black-600 mt-28 min-h-screen">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-6/12 w-full">
							<div className="md:w-9/12 w-full">
								<h5 className="mt-3 text-white">About Us</h5>
								<h1 className="mt-0.5 text-white pt-8 text-3xl md:text-4xl font-bold">
									Who We Are
								</h1>
								<h4 className="mt-2 text-white text-base md:text-2xl">
									We take pride in doing things well and achieving the best
									results we can.
								</h4>
								<p className="mt-8 text-white">
									Liquid Hack Group with its curated team of technical experts
									is able to deliver high-end software solutions to its
									dedicated customers. We are engrossed in offering effective
									software solutions to clients to help them to grow in their
									respective business domains.
								</p>
								<p className="mt-5 mb-4 text-white">
									Right from web design to web & application development &
									business process outsourcing, we do everything as per clients’
									requirements to ensure that their goals are being met.
								</p>
								<p className="mt-5 mb-4 text-white">
									We thrive on driving success for your business and we are
									experts in research and strategy development in order to
									provide the most updated solutions. We aim for flexibility for
									effective and efficient execution.
								</p>
								<Button>View Our Capabilities</Button>
							</div>
						</div>
						<div className="md:w-6/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/About1_fj5ind.png"
								width={2500}
								height={1667}
								alt="liquidhack web and application design"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className="bg-black-600 mt-8 bg-blend-luminosity bg-local bg-cover bg-no-repeat bg-center min-h-screen"
				style={{
					backgroundImage: `url(
						'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/75891_Converted_tbny5o.png'
					)`,
				}}
			>
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex items-center justify-start md:w-6/12 w-full">
							<div className="md:w-9/12 w-full">
								<h1 className="mt-0.5 text-white pt-8 text-3xl md:text-4xl font-bold">
									Our Values
								</h1>
								<h4 className="mt-2 text-white text-base md:text-2xl">
									Rules to live by
								</h4>
							</div>
						</div>
						<div className="md:w-6/12 w-full">
							<div>
								<h1 className="text-red-600 text-6xl font-semibold">01</h1>
								<h1 className="mt-8 text-white text-4xl">Love your craft</h1>
								<p className="mt-8 text-white">
									We are a curated team of international experts united by a
									single goal; to create category-defining brands and digital
									experiences that make an impact, shape culture and connect
									people.
								</p>
							</div>
							<div className="mt-28">
								<h1 className="text-red-600 text-6xl font-semibold">02</h1>
								<h1 className="mt-8 text-white text-4xl">Be a Professional</h1>
								<p className="mt-8 text-white">
									We are a curated team of international experts united by a
									single goal; to create category-defining brands and digital
									experiences that make an impact, shape culture and connect
									people.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
