import React from 'react';
import Container from '../components/Container/Container';
import PhoneContainer from '../components/PhoneContainer/PhoneContainer';
import InputText from '../components/InputText/InputText';
import Flex from '../components/Flex/Flex';
import { codeNumbers } from '../utils/constants.js';
import { email, numberPhone } from '../utils/validRules.js';

function Contacts(props) {

	return (
		<Container title={`Данные для отправки анализов`}>
			<p className="description-text">Поступят вам на почту, указанную в договоре. Вам придет смс-уведомление о готовности</p>
			<Flex>
				<PhoneContainer codeNumbers={codeNumbers} name={`codeNumber`} register={props.register} errors={props.errors} registerOptions={numberPhone} />
				<InputText type={`email`} title={`Email`} name={`email`} register={props.register} errors={props.errors} registerOptions={email} />
			</Flex>
		</Container>
	);
}

export default Contacts;