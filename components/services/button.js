import React from 'react';

const Button = (props) => {
	return (
		<button className="bg-red-600 text-white py-3 px-8 rounded-3xl mt-3 hover:bg-white  hover:text-black-600 duration-500">
			{props.children}
		</button>
	);
};

export default Button;
