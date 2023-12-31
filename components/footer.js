import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'react-lottie';
import * as animationData from '../assets/lotties/contact.json';
import TextSlider from './textSlider';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const Footer = () => {
	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	return (
		<div
			className=" bg-black-600 w-screen bg-local bg-cover bg-no-repeat mt-[-2px] sm:mt-[-5px] pt-2 sm:pt-16"
			style={{
				backgroundImage: `url(
				'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582842/90631_ex8fml.png'
			)`,
			}}
		>
			<div className="md:flex items-center justify-around max-auto md:max-w-7xl mr-auto ml-auto py-4 px-7 md:px-10">
				<div className="cursor-pointer flex items-start w-64">
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_52,w_140/v1641167608/LiquidHack_1_aoh2xd.png"
						alt="liquidhack-logo"
						width={140}
						height={52}
					/>
				</div>
				{/* <div className="md:w-4/12 md:mr-auto md:ml-auto">
					<Lottie
						options={defaultOptions}
						isStopped={isStopped}
						isPaused={isPaused}
					/>
				</div> */}
				<div className="md:w-6/12 mt-8 md:mt-0 md:mr-auto md:ml-auto">
					{/* <TextSlider values={values} opacity={opacity} /> */}
					<marquee className="flex w-auto mt-2 text-white text-base md:text-2xl">
						<div className="flex space-x-6">
							<p>MongoDB</p>
							<p>PostgreSQL</p>
							<p>NGINX</p>
							<p>AWS</p>
							<p>NodeJS</p>
							<p>Javascript</p>
							<p>Tailwind</p>
							<p>React</p>
							<p>React Native</p>
							<p>Flutter</p>
						</div>
					</marquee>
				</div>
				{/* <div className="w-64">
					<h1 className="text-white py-2">Company</h1>
					<ul className="mt-3">
						{company_links.map((link, index) => (
							<li key={index} className="my-1">
								<Link href={link.link}>
									<a className="text-white opacity-80 text-sm hover:text-red-600 duration-500">
										{link.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="w-64">
					<h1 className="text-white py-2">Services</h1>
					<ul className="mt-3">
						{solutions_links.map((link, index) => (
							<li key={index} className="my-1">
								<Link href={link.link}>
									<a className="text-white opacity-80 text-sm hover:text-red-600 duration-500">
										{link.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="w-64">
					<h1 className="text-white py-2">Get In Touch</h1>
					<ul className="mt-3">
						{contact_links.map((link, index) => (
							<li key={index} className="my-1">
								<Link href={link.link}>
									<a className="text-white opacity-80 text-sm hover:text-red-600 duration-500">
										{link.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div> */}
				<div className="w-64">
					<h1 className="text-white py-2">Follow us on social media</h1>
					<ul className="flex items-center mt-1 ml-7">
						{social_links.map((link, index) => (
							<Fragment key={index}>
								<li
									key={index}
									className="my-1 ml-2 cursor-pointer"
									// data-tooltip-target="tooltip-bottom"
									// data-tooltip-placement="bottom"
								>
									<a href={link.link}>
										<Image
											alt="social media icons"
											src={link.img}
											width={24}
											height={24}
										/>
									</a>
								</li>

								{/* <div
									id="tooltip-bottom"
									role="tooltip"
									className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-black-600 bg-white rounded-lg shadow-sm opacity-0 tooltip"
								>
									{link.name}
									<div className="tooltip-arrow" data-popper-arrow></div>
								</div> */}
							</Fragment>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;

const opacity = 'opacity-50';

const values = [
	'AWS',
	'Tailwind',
	'React',
	'Flutter',
	'NodeJs',
	'MongoDB',
	'PostgreSQL',
];

const company_links = [
	{
		name: 'Blog',
		link: '/',
	},
	{
		name: 'About Us',
		link: '/',
	},
	{
		name: 'Careers',
		link: '/',
	},
	{
		name: 'Press',
		link: '/',
	},
];

const solutions_links = [
	{
		name: 'Web & Mobile Design',
		link: '/',
	},
	{
		name: 'Web & Mobile Applications',
		link: '/',
	},
	{
		name: 'Desktop Applications',
		link: '/',
	},
	{
		name: 'Large Sites',
		link: '/',
	},
];

const contact_links = [
	{
		name: 'Sales',
		link: '/',
	},
	{
		name: 'Support',
		link: '/',
	},
	{
		name: 'Status',
		link: '/',
	},
	{
		name: 'Forums',
		link: '/',
	},
];

const social_links = [
	{
		name: 'facebook',
		link: 'https://ke.linkedin.com/in/liquid-hack-group-056396213',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644063042/Facebook2_l142hl.png',
	},
	{
		name: 'twitter',
		link: 'https://ke.linkedin.com/in/liquid-hack-group-056396213',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644062630/twitter2_dlzmxw.png',
	},
	{
		name: 'instagram',
		link: 'https://ke.linkedin.com/in/liquid-hack-group-056396213',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644062630/Instagram2_re6zla.png',
	},
	{
		name: 'youtube',
		link: 'https://ke.linkedin.com/in/liquid-hack-group-056396213',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644062631/Youtube_twgpm2.png',
	},
];
