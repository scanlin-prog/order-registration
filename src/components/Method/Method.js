import React from 'react';
import './Method.css';

function Method(props) {

	return (
		<div className="method">
			<p className="method__text">{props.text}</p>
			<button className="method__button">Выбрать</button>
		</div>
	);
}

export default Method;