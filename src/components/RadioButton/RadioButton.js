import React from 'react';
import './RadioButton.css';

function RadioButton(props) {

	function handleRadioButtonClick(evt) {
		props.handleRadioButtonClick(evt)
		props.addCheckBoxValue(props.variantKey, props.title)
	}

	return (
		<div className={`input radio-button-wrapper ${props.class}`}>
			<div className="radio-button" onClick={handleRadioButtonClick}>
				<div className={`radio-button__icon`}></div>
				<p className="radio-button__text">{props.title}</p>
			</div>
		</div>
	);
}

export default RadioButton;