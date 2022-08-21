import React from 'react';
import Container from '../components/Container/Container';
import InputDate from '../components/InputDate/InputDate';
import InputText from '../components/InputText/InputText';
import Grid from '../components/Grid/Grid';
import RadioButton from '../components/RadioButton/RadioButton';
import RadioButtonContainer from '../components/RadioButtonContainer/RadioButtonContainer';
import InputSelect from '../components/InputSelect/InputSelect';
import { citizenship } from '../utils/constants.js';

function Passport() {

	return (
		<Container title={`Для оформления договора понадобится паспорт `}>
			<p className="description-text">Выберите как вам удобнее предоставить данные</p>
			<RadioButtonContainer class={`radio-button-container_margin`}>
				<RadioButton title={`Заполню сейчас`} />
				<RadioButton title={`Предоставлю на месте`} />
				<RadioButton title={`Свяжитесь со мной сами`} />
			</RadioButtonContainer>
			<h3 className="container__subtitle">Паспорт пациента</h3>
			<Grid>
				<InputSelect title={`Гражданство`} data={citizenship} />
				<InputText title={`Номер и серия паспорта`} />
				<InputText title={`Адрес регистрации`} class={`input-grid-address`} />
				<InputText title={`Кем выдан паспорт`} />
				<InputDate title={`Дата выдачи`} />
			</Grid>
			<h3 className="container__subtitle">Добавьте СНИЛС, для синхронизации с Госуслугами</h3>
			<InputText title={`СНИЛС`} />
		</Container>
	);
}

export default Passport;