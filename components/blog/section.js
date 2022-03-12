import React from 'react';
import Image from 'next/image';

const Section = () => {
	return (
		<>
			<div className="bg-black-600 mt-28 min-h-screen">
				<p className="text-white pt-8  py-4 px-7 md:px-10">Blog</p>
				<h1 className="text-white py-4 px-7 md:px-10 text-3xl md:text-5xl font-bold">
					Our Blog
				</h1>
				<h4 className="text-white py-4 px-7 md:px-10 md:w-5/12 w-full">
					What is happening? News, team stories and industry insights from
					Digital Storm. Keep updated today!
				</h4>
				<div className="md:flex items-center md:max-w-7xl md:mr-auto md:ml-auto py-4 px-7 md:px-10">
					<div className="md:flex w-full">
						<div className="md:w-8/12 w-full min-h-screen mb-8 md:mb-0">
							<h4 className="text-white text-2xl md:text-4xl w-full">
								Top Business & Technology Trends To Impact Growth Through 2022
							</h4>
							<div className="pt-8 w-full">
								<Image
									src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1647077455/laptop-blog_v7ecjw.jpg"
									alt="liquidhack blog image"
									width={1000}
									height={512}
								/>
							</div>
							<h4 className="text-white text-1xl md:text-2xl w-full py-6">
								NOVEMBER 1, 2021
							</h4>
							<p className=" text-white">
								In this digital age, technology is not the only aspect of
								business that is rapidly changing. While we’re surrounded by new
								gadgets, discoveries, and inventions, every company is also
								subject to an insatiable hunger that is the customer’s
								expectation. Every time a new product or service is released,
								the customer’s expectation goes to the next level, raising the
								bar for the entire industry. This puts a significant amount of
								press.
							</p>
						</div>
						<div className="md:w-4/12 w-full md:h-[32rem] min-h-[32rem] py-8 md:ml-7 px-7 bg-glass-300">
							<div className="pb-4">
								<h4 className="text-white font-bold">
									Top Business & Technology Trends
								</h4>
								<p className="text-white pt-6">
									10 Smart Home Apps That’ll Make Your Life Easier In 2021 –
									UPDATED ...
								</p>
								<p className="text-white py-3">77 Views</p>
								<hr className="bg-black-600" />
							</div>
							<div className="pb-4">
								<h4 className="text-white font-bold">
									Web Design & Development 2022
								</h4>
								<p className="text-white pt-6">
									Stunning, high-performing websites should be the rule, not the
									exception ...
								</p>
								<p className="text-white py-3">32 Views</p>
								<hr className="bg-black-600" />
							</div>
							<div className="pb-4">
								<h4 className="text-white font-bold">System Engineering</h4>
								<p className="text-white pt-6">
									Configuration, support and maintenance of server software
									based ...
								</p>
								<p className="text-white py-3">67 Views</p>
								<hr className="bg-black-600" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
