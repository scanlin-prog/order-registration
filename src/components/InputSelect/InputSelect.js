import React from 'react';
import './InputSelect.css';

function InputSelect(props) {
	return (
		<div className={`input ${props.class} ${props.errors?.[props.name] && 'input_invalid'}`}>
			<select id="citizenship" className="input__placeholder input__select"
				{...props.register(props.name)}
			>
				{
					props.data.map((unitData, index) => {
						return <option key={index} value={unitData.value}>{unitData.text}</option>
					})
				}
			</select>
			<label htmlFor="citizenship" className="input__label">{props.title}</label>
			<div className="input__select-icon"></div>
		</div>
	);
}

export default InputSelect;