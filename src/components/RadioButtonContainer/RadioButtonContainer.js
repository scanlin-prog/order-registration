import React from 'react';
import './RadioButtonContainer.css';

function RadioButtonContainer(props) {

	return (
		<div id={`${props.idContainer}`} className={`radio-button-container ${props.class}`}>
			{props.children}
			<span className="message-error message-error_hidden">Пропущенное поле</span>
		</div>
	);
}

export default RadioButtonContainer;