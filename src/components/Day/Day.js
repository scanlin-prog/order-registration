import React from 'react';
import './Day.css';
import { weekDays, months } from '../../utils/constants.js';

function Day(props) {

	function buildSelectedDate() {
		return `${weekDays[props.weekday]} ${props.number} ${months[props.month].slice(0, 3)}`;
	}

	function handleDayClick(evt) {
		const selectedDate = buildSelectedDate();
		props.handleDayClick(evt)
		props.addCheckBoxValue(props.variantKey, selectedDate)
	}

	return (
		<div className={`day`} onClick={handleDayClick}>
			<p className="day__number">{props.number}</p>
			<p className="day__weekday">{weekDays[props.weekday]}</p>
		</div>
	);
}

export default Day;