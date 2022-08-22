import React from 'react';
import Container from '../components/Container/Container';
import DateContainer from '../components/DateContainer/DateContainer';
import TimeContainer from '../components/TimeContainer/TimeContainer';

function DateTime(props) {

	return (
		<Container title={`Выберите удобные дату и время`}>
			<DateContainer decade={props.decade} dateTitle={props.dateTitle} idContainer={`date-container`} handleDateClick={props.handleDateTimeClick} handleButtonRightClick={props.handleButtonRightClick} handleButtonLeftClick={props.handleButtonLeftClick} addCheckBoxValue={props.addCheckBoxValue} />
			<TimeContainer idContainer={`time-container`} handleTimeClick={props.handleDateTimeClick} addCheckBoxValue={props.addCheckBoxValue} />
		</Container>
	);
}

export default DateTime;