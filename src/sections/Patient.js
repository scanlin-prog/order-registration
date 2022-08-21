import React from 'react';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Flex from '../components/Flex/Flex';
import InputDate from '../components/InputDate/InputDate';
import InputText from '../components/InputText/InputText';
import RadioButton from '../components/RadioButton/RadioButton';
import RadioButtonContainer from '../components/RadioButtonContainer/RadioButtonContainer';
import Tab from '../components/Tab/Tab';
import TabContainer from '../components/TabContainer/TabContainer';


function Patient() {
	const [isActive, setActive] = React.useState(false)

	function hanldeCheckboxClick() {
		setActive(!isActive)
	}

	return (
		<Container title={`Кто будет сдавать анализы?`}>
			<TabContainer>
				<Tab text={'Пациент из моей семьи'}></Tab>
				<Tab text={'Новый пациент'}></Tab>
			</TabContainer>
			<Grid>
				<InputText type={`text`} title={`Фамилия пациента`} />
				<InputText type={`text`} title={`Имя пациента`} />
				<InputText type={`text`} title={`Отчество пациента`} />
				<InputDate title={`Дата рождения пациента`} />
				<RadioButtonContainer>
					<RadioButton title={`Женщина`} class={`radio-button_size`} />
					<RadioButton title={`Мужчина`} class={`radio-button_size`} />
				</RadioButtonContainer>
			</Grid>
			<div className="parameters">
				<div className="parameters-container">
					<div className={`parameters__checkbox ${isActive ? 'parameters__checkbox_active' : ''}`} onClick={hanldeCheckboxClick}></div>
					<p className="parameters__text">Пациент придёт с представителем</p>
					<div className="parameters__help-icon"></div>
				</div>
			</div>
		</Container>
	);
}

export default Patient;