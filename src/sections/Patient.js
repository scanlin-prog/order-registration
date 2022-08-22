import React from 'react';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import InputDate from '../components/InputDate/InputDate';
import InputText from '../components/InputText/InputText';
import RadioButton from '../components/RadioButton/RadioButton';
import RadioButtonContainer from '../components/RadioButtonContainer/RadioButtonContainer';
import Tab from '../components/Tab/Tab';
import TabContainer from '../components/TabContainer/TabContainer';
import { onlyText } from '../utils/validRules.js';


function Patient(props) {
	const [isActive, setActive] = React.useState(false)

	function hanldeCheckboxClick() {
		setActive(!isActive)

		if (!isActive) {
			props.addCheckBoxValue('parameter', true)
		} else {
			props.addCheckBoxValue('parameter', false)
		}
	}

	function handleTabClick(evt) {
		props.handleRadioButtonClick(evt, 'tab-container', 'tab', 'tab__text')
	}

	function handleRadioButtonClick(evt) {
		props.handleRadioButtonClick(evt, 'patient-radio-container', 'radio-button-wrapper', 'radio-button__icon')
	}

	return (
		<Container title={`Кто будет сдавать анализы?`}>
			<TabContainer idContainer={`tab-container`}>
				<Tab text={'Пациент из моей семьи'} handleTabClick={handleTabClick} variantKey={`patientVar`} addCheckBoxValue={props.addCheckBoxValue} />
				<Tab text={'Новый пациент'} handleTabClick={handleTabClick} variantKey={`patientVar`} addCheckBoxValue={props.addCheckBoxValue} />
			</TabContainer>
			<Grid>
				<InputText type={`text`} title={`Фамилия пациента`} name={`secondName`} register={props.register} errors={props.errors} registerOptions={onlyText} />
				<InputText type={`text`} title={`Имя пациента`} name={`firstName`} register={props.register} errors={props.errors} registerOptions={onlyText} />
				<InputText type={`text`} title={`Отчество пациента`} name={`fathersName`} register={props.register} errors={props.errors} registerOptions={onlyText} />
				<InputDate title={`Дата рождения пациента`} name={`dateBirthday`} register={props.register} errors={props.errors} />
				<RadioButtonContainer idContainer={`patient-radio-container`}>
					<RadioButton title={`Женщина`} class={`radio-button_size`} handleRadioButtonClick={handleRadioButtonClick} variantKey={`gender`} addCheckBoxValue={props.addCheckBoxValue} />
					<RadioButton title={`Мужчина`} class={`radio-button_size`} handleRadioButtonClick={handleRadioButtonClick} variantKey={`gender`} addCheckBoxValue={props.addCheckBoxValue} />
				</RadioButtonContainer>
			</Grid>
			<div className="parameters">
				<div id="parameters-container" className="parameters-container">
					<div className={`parameters__checkbox ${isActive ? 'parameters__checkbox_active' : ''}`} onClick={hanldeCheckboxClick}></div>
					<p className="parameters__text">Пациент придёт с представителем</p>
					<div className="parameters__help-icon"></div>
				</div>
			</div>
		</Container>
	);
}

export default Patient;