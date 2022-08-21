import React from 'react';
import './Day.css';
import { weekDays } from '../../utils/constants.js';

function Day(props) {
	const [isActiveDay, setActiveDay] = React.useState(props.boolean);

	function handleDayClick() { 
		props.resetActiveDay()
		setActiveDay(!isActiveDay)
	}

	return (
		<div className={`day ${isActiveDay ? `day_active` : ``}`} onClick={handleDayClick}>
			<p className="day__number">{props.number}</p>
			<p className="day__weekday">{weekDays[props.weekday]}</p>
		</div>
	);
}

export default Day;