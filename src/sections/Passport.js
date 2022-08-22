import React from 'react';
import Container from '../components/Container/Container';
import InputDate from '../components/InputDate/InputDate';
import InputText from '../components/InputText/InputText';
import Grid from '../components/Grid/Grid';
import RadioButton from '../components/RadioButton/RadioButton';
import RadioButtonContainer from '../components/RadioButtonContainer/RadioButtonContainer';
import InputSelect from '../components/InputSelect/InputSelect';
import { citizenship } from '../utils/constants.js';
import { text, number, passportNumber } from '../utils/validRules.js';

function Passport(props) {

	function handleRadioButtonClick(evt) {
		props.handleRadioButtonClick(evt, 'passport-radio-container', 'radio-button-wrapper', 'radio-button__icon')
	}


	return (
		<Container title={`Для оформления договора понадобится паспорт `}>
			<p className="description-text">Выберите как вам удобнее предоставить данные</p>
			<RadioButtonContainer idContainer={`passport-radio-container`} class={`radio-button-container_margin`}>
				<RadioButton title={`Заполню сейчас`} handleRadioButtonClick={handleRadioButtonClick} variantKey={`actionOption`} addCheckBoxValue={props.addCheckBoxValue} />
				<RadioButton title={`Предоставлю на месте`} handleRadioButtonClick={handleRadioButtonClick} variantKey={`actionOption`} addCheckBoxValue={props.addCheckBoxValue} />
				<RadioButton title={`Свяжитесь со мной сами`} handleRadioButtonClick={handleRadioButtonClick} variantKey={`actionOption`} addCheckBoxValue={props.addCheckBoxValue} />
			</RadioButtonContainer>
			<h3 className="container__subtitle">Паспорт пациента</h3>
			<Grid>
				<InputSelect title={`Гражданство`} data={citizenship} name={`citizenship`} register={props.register} />
				<InputText type={`number`} title={`Номер и серия паспорта`} name={`passportNumber`} register={props.register} errors={props.errors} registerOptions={passportNumber} />
				<InputText title={`Адрес регистрации`} name={`addressRegistration`} register={props.register} errors={props.errors} class={`input-grid-address`} registerOptions={text} />
				<InputText title={`Кем выдан паспорт`} name={`whomReceiving`} register={props.register} errors={props.errors} registerOptions={text} />
				<InputDate title={`Дата выдачи`} name={`dateReceiving`} register={props.register} errors={props.errors} />
			</Grid>
			<h3 className="container__subtitle">Добавьте СНИЛС, для синхронизации с Госуслугами</h3>
			<InputText type={`number`} title={`СНИЛС`} name={`snils`} register={props.register} errors={props.errors} registerOptions={number} />
		</Container>
	);
}

export default Passport;