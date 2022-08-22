import React from 'react';
import InputText from '../InputText/InputText';
import './PhoneContainer.css';

function PhoneContainer(props) {

	return (
		<div className="phone-container">
			<div className="input phone-code">
				<select id="citizenship" className="input__placeholder input__select"
					{...props.register(props.name)}
				>
					{
						props.codeNumbers.map((codeNumber, index) => {
							return <option key={index} value={codeNumber.value}>{codeNumber.code}</option>
						})
					}
				</select>
				<label htmlFor="text" className="input__label">Код</label>
				<div className="input__select-icon"></div>
			</div>
			<InputText type={`number`} class={`phone-number`} title={`Номер телефона`} name={`phoneNumber`} register={props.register} errors={props.errors} registerOptions={props.registerOptions} />
		</div>
	);
}

export default PhoneContainer;