import React from 'react';
import './RadioButtonContainer.css';

function RadioButtonContainer(props) {

	return (
		<div className={`radio-button-container ${props.class}`}>
			{props.children}
		</div>
	);
}

export default RadioButtonContainer;