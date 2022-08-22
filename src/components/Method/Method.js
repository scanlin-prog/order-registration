import React from 'react';
import './Method.css';

function Method(props) {

	function buttonClick(evt) { 
		evt.preventDefault()
	 }

	return (
		<div className="method">
			<p className="method__text">{props.text}</p>
			<button className="method__button" onClick={buttonClick}>Выбрать</button>
		</div>
	);
}

export default Method;