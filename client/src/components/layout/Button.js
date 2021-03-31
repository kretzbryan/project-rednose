import React from 'react';

const Button = ({ classNames, buttonText, icon }) => {
	return (
		<div>
			<button type='button' className={`btn ${classNames}`}>
				{icon} {'  '}
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
