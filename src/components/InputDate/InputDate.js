import React from 'react';
import './InputDate.css';

function InputDate(props) {
	return (
		<div className="input">
			<input id="date" type="date" className="input__placeholder" placeholder="Hello" />
			<label htmlFor="date" className="input__label">{props.title}</label>
			<span className="input__message-error">Пропущенное поле</span>
		</div>
	);
}

export default InputDate;