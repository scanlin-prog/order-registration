import React from 'react';
import './Container.css';

function Container(props) {
	return (
		<div className="container">
			<h2 className="container__title">{props.title}</h2>
			{props.children}
		</div>
	);
}

export default Container;