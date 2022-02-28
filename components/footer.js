import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className=" bg-black-600 w-screen mt-[-5px] pt-16">
			<div className="md:flex items-center justify-around max-auto md:max-w-7xl mr-auto ml-auto py-4 px-7 md:px-10">
				<div className="cursor-pointer flex items-start w-64">
					<Image
						src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_52,w_140/v1641167608/LiquidHack_1_aoh2xd.png"
						alt="liquidhack-logo"
						width={140}
						height={52}
					/>
				</div>
				<div className="w-64">
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
					<h1 className="text-white py-2">Solutions</h1>
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
				</div>
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
		link: '/',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644063042/Facebook2_l142hl.png',
	},
	{
		name: 'twitter',
		link: '/',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644062630/twitter2_dlzmxw.png',
	},
	{
		name: 'instagram',
		link: '/',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644062630/Instagram2_re6zla.png',
	},
	{
		name: 'youtube',
		link: '/',
		img: 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_24,w_24/v1644062631/Youtube_twgpm2.png',
	},
];
