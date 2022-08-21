import React from 'react';
import './InputSelect.css';

function InputSelect(props) {
	return (
		<div className={`input ${props.class}`}>
			<select id="citizenship" className="input__placeholder input__select">
				{
					props.data.map((unitData) => {
						return <option value={unitData.value}>{unitData.text}</option>
					})
				}
			</select>
			<label htmlFor="citizenship" className="input__label">{props.title}</label>
			<div className="input__select-icon"></div>
		</div>
	);
}

export default InputSelect;