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
								<h5 className="mt-3 text-white">
									Services/Web & Mobile Development
								</h5>
								<h1 className="mt-0.5 text-white pt-8 text-3xl md:text-4xl font-bold">
									Website Design and Development
								</h1>
								<h4 className="mt-5 text-white text-base md:text-2xl">
									Stunning, high-performing websites should be the rule, not the
									exception. Luckily, we make the rules here, so…they are.
								</h4>
								<p className="mt-8 text-white">
									Our talented team adapt at using sophisticated tools and
									techniques to offer you world class web development services.
									Our talented team adapt at using sophisticated tools and
									techniques to offer you world class web development services.
								</p>
								<ul className="mt-8 mb-8 list-disc  text-white  w-full px-14 md:px-32">
									<li>Strategy</li>
									<li>UI + UX Design</li>
									<li>Usability Testing</li>
									<li>Technical Planning</li>
									<li>Development</li>
									<li>Quality Assuarance</li>
									<li>Ongoing Iteration</li>
								</ul>
							</div>
						</div>
						<div className="md:w-5/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582871/Responsive_ig2m01.png"
								width={3544}
								height={3551}
								alt="liquidhack web and application design"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black-600 mt-14 min-h-screen">
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
									App Design and Development
								</h1>
								<h4 className="mt-5 text-white text-base md:text-2xl">
									Stunning, high-performing websites should be the rule, not the
									exception. Luckily, we make the rules here, so…they are.
								</h4>
								<p className="mt-8 mb-8 text-white text-base md:text-lg">
									Our talented team is adept at using sophisticated tools and
									techniques to offer you world class web development services.
									Our talented team is adept at using sophisticated tools and
									techniques to offer you world class web development services.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black-600 mt-14 min-h-screen">
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex items-center w-full">
						<div className="flex justify-start mb-8 md:mb-0 md:w-6/12 w-full">
							<div className="md:w-9/12 w-full">
								<h5 className="mt-3 text-white">Services/System Engineering</h5>
								<h1 className="mt-0.5 text-white pt-8 text-3xl md:text-4xl font-bold">
									System Engineering
								</h1>
								<h4 className="mt-5 text-white text-base md:text-2xl">
									Stunning, high-performing websites should be the rule, not the
									exception. Luckily, we make the rules here, so…they are.
								</h4>
								<p className="mt-8 text-white">
									Configuration, support and maintenance of server software
									based on UNIX systems for dedicated servers and clusters.
									Security assurance and integration of monitoring systems
								</p>
							</div>
						</div>
						<div className="md:w-5/12 w-full">
							<Image
								src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1644582865/Net2_mqfp01.png"
								width={4422}
								height={3888}
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
