import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { gsap } from 'gsap';
import * as animationData from '../../assets/lotties/contact.json';
import * as animationDataSuccess from '../../assets/lotties/success.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const defaultOptionsSuccess = {
	loop: true,
	autoplay: true,
	animationData: animationDataSuccess,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const Section = () => {
	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const el = useRef();
	const q = gsap.utils.selector(el);
	const tl = useRef();

	return (
		<div className="bg-black-600 mt-28 min-h-screen" ref={el}>
			<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<div className="w-full px-8 md:px-12 lg:px-16 xl:px-32 py-4 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
					<div className="md:w-4/12 md:mr-auto md:ml-auto">
						<Lottie
							options={defaultOptions}
							isStopped={isStopped}
							isPaused={isPaused}
						/>
					</div>
					{/* <Lottie
						options={defaultOptionsSuccess}
						height={300}
						width={300}
						isStopped={isStopped}
						isPaused={isPaused}
					/> */}
					<div className="grid gap-8 grid-cols-1 md:grid-cols-2">
						<div className="flex flex-col justify-between">
							<div>
								<h2 className="text-4xl lg:text-5xl font-bold leading-tight">
									Lets talk about everything!
								</h2>
								<div className="text-gray-700 mt-8">
									Hate forms? Send us an{' '}
									<span className="underline cursor-pointer">email</span>{' '}
									instead.
								</div>
							</div>
							<div className="mt-8 text-center">
								<Image
									src="https://res.cloudinary.com/dgisuffs0/image/upload/v1647850052/contact-removebg-preview_jojkww.png"
									alt="liquidhack contact us"
									width={682}
									height={366}
								/>
							</div>
						</div>
						<div>
							<div>
								<span className="uppercase text-sm text-gray-600 font-bold">
									Your Name
								</span>
								<input
									className="w-full bg-gray-300 text-black-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
									placeholder=""
								/>
							</div>
							<div className="mt-8">
								<span className="uppercase text-sm text-gray-600 font-bold">
									Email
								</span>
								<input
									className="w-full bg-gray-300 text-black-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
								/>
							</div>
							<div className="mt-8">
								<span className="uppercase text-sm text-gray-600 font-bold">
									Message
								</span>
								<textarea className="w-full h-32 bg-gray-300 text-black-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
							</div>
							<div className="mt-8">
								<button className="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
									Send Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
