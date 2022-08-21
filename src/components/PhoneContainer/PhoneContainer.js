import React from 'react';
import './PhoneContainer.css';

function PhoneContainer(props) {

	return (
		<div className="phone-container">
			<div className="input phone-code">
				<select id="citizenship" className="input__placeholder input__select">
					{
						props.codeNumbers.map((codeNumber) => {
							return <option value={codeNumber.value}>{codeNumber.code}</option>
						})
					}
				</select>
				<label htmlFor="text" className="input__label">Код</label>
				<div className="input__select-icon"></div>
			</div>
			<div className="input phone-number">
				<input id="text" type="number" className="input__placeholder" placeholder=" " />
				<label htmlFor="text" className="input__label">Номер телефона</label>
				<span className="input__message-error">Пропущенное поле</span>
			</div>
		</div>
	);
}

export default PhoneContainer;