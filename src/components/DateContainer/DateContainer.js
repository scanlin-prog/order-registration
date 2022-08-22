import React from 'react';
import Day from '../Day/Day';
import './DateContainer.css';

function DateContainer(props) {

	function handleDayClick(evt) {
		props.handleDateClick(evt, 'date-container', 'day');
	}

	function handleButtonRightClick() {
		if (window.innerWidth >= 768) {
			props.handleButtonRightClick(10)
		} else if (window.innerWidth < 768 && window.innerWidth > 575) {
			props.handleButtonRightClick(7)
		} else if (window.innerWidth < 576) {
			props.handleButtonRightClick(4)
		}
	}

	function handleButtonLeftClick() {
		if (window.innerWidth >= 768) {
			props.handleButtonLeftClick(10)
		} else if (window.innerWidth < 768 && window.innerWidth > 575) {
			props.handleButtonLeftClick(7)
		} else if (window.innerWidth < 576) {
			props.handleButtonLeftClick(4)
		}
	}

	return (
		<div className="date">
			<div className="date__header">
				<div className="arrow date__button-left" onClick={handleButtonLeftClick}></div>
				<p className="date__title">
					{props.dateTitle}
				</p>
				<div className="arrow date__button-right" onClick={handleButtonRightClick}></div>
			</div>
			<div id={`${props.idContainer}`} className="date__days">
				{
					props.decade.map((day, index) => {
						return (
							<Day key={index} number={day.day} weekday={day.weekDay} month={day.month} handleDayClick={handleDayClick} variantKey={`selectedDay`} addCheckBoxValue={props.addCheckBoxValue} />
						)
					})
				}
				<span className="message-error message-error_hidden">Пропущенное поле</span>
			</div>
			
		</div>
	);
}

export default DateContainer;