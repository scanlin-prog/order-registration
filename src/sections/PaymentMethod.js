import React from 'react';
import Container from '../components/Container/Container';
import ContainerPayment from '../components/ContainerPayment/ContainerPayment';
import InputSelect from '../components/InputSelect/InputSelect';
import Method from '../components/Method/Method';
import Methods from '../components/Methods/Methods';
import { paymentMethod } from '../utils/constants.js';

function PaymentMethod(props) {

	return (
		<Container title={`Способ оплаты`}>
			<ContainerPayment>
				<InputSelect title={`Выберите способ оплаты`} name={`paymentMethod`} data={paymentMethod} register={props.register} />
				<Methods>
					<Method text={`Картой медработнику после оказания услуг`} />
					<Method text={`Онлайн банковской картой`} />
				</Methods>
			</ContainerPayment>
		</Container>
	);
}

export default PaymentMethod;