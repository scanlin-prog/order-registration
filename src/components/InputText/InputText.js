import React from 'react';
import './InputText.css';

function InputText(props) {
	return (
		<div className={`input ${props.class}`}>
			<input id="text" type={props.type} className="input__placeholder" placeholder=" " />
			<label htmlFor="text" className="input__label">{props.title}</label>
			<span className="input__message-error">Пропущенное поле</span>
		</div>
	);
}

export default InputText;