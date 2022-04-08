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
		<div className="bg-black-600 mt-28 min-h-min" ref={el}>
			<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
				<div className="w-full px-8 md:px-12 lg:px-16 xl:px-32 py-4 mx-auto text-gray-900 rounded-lg shadow-lg">
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
								<h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
									Lets talk about everything!
								</h2>
								<p className="text-white py-4">Call Us On: +254 716 355 644</p>
								<div className="text-white">
									Hate forms? Send us an{' '}
									<strong className=" cursor-pointer uppercase">email</strong>{' '}
									instead.
								</div>
							</div>
							<div className="mt-8 text-center">
								<Image
									src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582843/3969583_cyj7ue.png"
									alt="liquidhack contact us"
									width={521}
									height={388}
								/>
							</div>
						</div>
						<div>
							<div>
								<span className="uppercase text-sm text-white font-bold">
									Name
								</span>
								<input
									className="w-full bg-white text-black-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
									placeholder="Your name"
								/>
							</div>
							<div className="mt-8">
								<span className="uppercase text-sm text-white font-bold">
									Email
								</span>
								<input
									placeholder="Your email address"
									className="w-full bg-white text-black-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
								/>
							</div>
							<div className="mt-8">
								<span className="uppercase text-sm text-white font-bold">
									Message
								</span>
								<textarea
									placeholder="Type your message..."
									className="w-full h-48 bg-white text-black-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								></textarea>
							</div>
							<div className="mt-8">
								<button className="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
									Send Message
								</button>
							</div>
						</div>
					</div>
					{/* <div className="md:w-4/12 md:mr-auto md:ml-auto">
						<Lottie
							options={defaultOptions}
							isStopped={isStopped}
							isPaused={isPaused}
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Section;
