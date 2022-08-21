import React from 'react';
import Container from '../components/Container/Container';
import PhoneContainer from '../components/PhoneContainer/PhoneContainer';
import InputText from '../components/InputText/InputText';
import Flex from '../components/Flex/Flex';
import { codeNumbers } from '../utils/constants.js'

function Contacts() {

	return (
		<Container title={`Данные для отправки анализов`}>
			<p className="description-text">Поступят вам на почту, указанную в договоре. Вам придет смс-уведомление о готовности</p>
			<Flex>
				<PhoneContainer codeNumbers={codeNumbers} />
				<InputText type={`email`} title={`Email`} />
			</Flex>
		</Container>
	);
}

export default Contacts;