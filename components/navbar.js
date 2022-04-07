import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../components';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-screen fixed z-40 top-0 left-0 bg-black-600">
			<div className="md:flex items-center max-w-7xl mr-auto ml-auto justify-between py-4 px-7 md:px-10">
				<Link href="/" className="cursor-pointer flex items-center" passHref>
					<div>
						<Image
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_scale,h_52,w_140/v1641167608/LiquidHack_1_aoh2xd.png"
							alt="liquidhack-logo"
							className="cursor-pointer"
							width={140}
							height={52}
						/>
					</div>
				</Link>
				<div
					onClick={() => setOpen(!open)}
					className="text-white absolute right-6 top-6 cursor-pointer md:hidden"
				>
					{open ? (
						<ion-icon name="close-outline" size="large"></ion-icon>
					) : (
						<ion-icon name="menu-outline" size="large"></ion-icon>
					)}
				</div>
				<ul
					className={`flex items-center flex-col md:flex-row absolute shadow-md md:static md:rounded-b-none rounded-b-xl md:pb-0 pb-6 left-0 w-full md:w-auto md:bg-black-600 bg-glass-300 md:z-auto z-[-1] transition-all duration-500 ease-in ${
						open ? 'top-20' : 'top-[-490px]'
					}`}
				>
					{links.map((link, index) => (
						<li
							key={index}
							className="md:ml-8 md:my-0 my-2 first:pt-2 md:first:pt-0"
						>
							<Link href={link.link}>
								<a className="text-white hover:text-red-600 duration-500">
									{link.name}
								</a>
							</Link>
						</li>
					))}
					{/* <Button>Get Started</Button> */}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

const links = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'About Us',
		link: '/about',
	},
	{
		name: 'Services',
		link: '/services',
	},
	// {
	// 	name: 'Portfolio',
	// 	link: '/',
	// },
	{
		name: 'Blog',
		link: '/blog',
	},
	{
		name: 'Contact',
		link: '/contact',
	},
];
