import React from 'react';
import Container from '../components/Container/Container';
import DateContainer from '../components/DateContainer/DateContainer';
import TimeContainer from '../components/TimeContainer/TimeContainer';

function DateTime(props) {

	return (
		<Container title={`Выберите удобные дату и время`}>
			<DateContainer decade={props.decade} dateTitle={props.dateTitle} handleButtonRightClick={props.handleButtonRightClick} handleButtonLeftClick={props.handleButtonLeftClick} />
			<TimeContainer />
		</Container>
	);
}

export default DateTime;