import React from 'react';
import './InputText.css';

function InputText(props) {

	return (
		<div className={`input ${props.class} ${props.errors?.[props.name] && 'input_invalid'}`}>
			<input id="text" type={props.type} className="input__placeholder" placeholder=" "
				{...props.register(props.name, props.registerOptions)} />
			{props.errors?.[props.name] && <span className="message-error">{props.errors?.[props.name].message || `Поле обязательно к заполнению`}</span>}
			<label htmlFor="text" className="input__label">{props.title}</label>
		</div>
	);
}

export default InputText;