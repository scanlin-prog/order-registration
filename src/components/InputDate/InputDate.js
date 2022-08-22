import React from 'react';
import './InputDate.css';

function InputDate(props) {
	return (
		<div className={`input ${props.errors?.[props.name] && 'input_invalid'}`}>
			<input id="date" type="date" className="input__placeholder" placeholder="Hello"
				{...props.register(props.name, {
					required: true
				})} />
			{props.errors?.[props.name] && <span className="message-error">{props.errors?.[props.name].message || `Поле обязательно к заполнению`}</span>}
			<label htmlFor="date" className="input__label">{props.title}</label>
		</div>
	);
}

export default InputDate;