import React from 'react';
import './SubmitButton.css'


function SubmitButton(props) {

	return (
		<button type="submit" className={`submit-button ${!props.isValid ? `submit-button_disabled` : ``}`} onClick={props.onClick} disabled={!props.isValid}>Оформить</button>
	);
}

export default SubmitButton;