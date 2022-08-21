import React from 'react';
import './RadioButton.css';

function RadioButton(props) {

	const [isActive, setActive] = React.useState(false);

	function handleRadioButtonClick() {
		setActive(!isActive)
	}

	return (
		<div className={`input ${isActive ? `input_active` : ''} radio-button-wrapper ${props.class}`}>
			<div className="radio-button" onClick={handleRadioButtonClick}>
				<div className={`radio-button__icon ${isActive ? 'radio-button__icon_active' : ''}`}></div>
				<p className="radio-button__text">{props.title}</p>
			</div>
			{/* <span className="input__message-error">Пропущенное поле</span> */}
		</div>
	);
}

export default RadioButton;