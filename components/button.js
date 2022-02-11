import React from 'react';

const Button = (props) => {
	return (
		<button className="bg-red-600 text-white py-2 px-4 rounded-3xl md:ml-8 hover:bg-white  hover:text-black-600 duration-500">
			{props.children}
		</button>
	);
};

export default Button;
