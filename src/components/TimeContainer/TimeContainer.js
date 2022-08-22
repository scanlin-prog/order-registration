import React from 'react';
import Time from '../Time/Time';
import './TimeContainer.css';

function TimeContainer(props) {

	function handleTimeClick(evt) {
		props.handleTimeClick(evt, 'time-container', 'time')
	}

	return (
		<div id={`${props.idContainer}`} className="time-container">
			<Time time={`08:00`} handleTimeClick={handleTimeClick} variantKey={`selectedTime`} addCheckBoxValue={props.addCheckBoxValue} />
			<Time time={`09:00`} handleTimeClick={handleTimeClick} variantKey={`selectedTime`} addCheckBoxValue={props.addCheckBoxValue} />
			<Time time={`09:30`} handleTimeClick={handleTimeClick} variantKey={`selectedTime`} addCheckBoxValue={props.addCheckBoxValue} />
			<Time time={`11:30`} handleTimeClick={handleTimeClick} variantKey={`selectedTime`} addCheckBoxValue={props.addCheckBoxValue} />
			<Time time={`12:00`} handleTimeClick={handleTimeClick} variantKey={`selectedTime`} addCheckBoxValue={props.addCheckBoxValue} />
			<span className="message-error message-error_hidden">Пропущенное поле</span>
		</div>
	);
}

export default TimeContainer;