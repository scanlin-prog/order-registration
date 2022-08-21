import React from 'react';
import Day from '../Day/Day';
import './DateContainer.css';

function DateContainer(props) {
	const [boolean, setBoolean] = React.useState(false)

	function resetActiveDay() {
		setBoolean(false)
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

	function checkDecade() {
		console.log()
	}

	return (
		<div className="date">
			<div className="date__header">
				<div className="arrow date__button-left" onClick={handleButtonLeftClick}></div>
				<p className="date__title" onClick={checkDecade}>
					{props.dateTitle}
				</p>
				<div className="arrow date__button-right" onClick={handleButtonRightClick}></div>
			</div>
			<div className="date__days">
				{
					props.decade.map((day, index) => {
						return (
							<Day key={index} boolean={boolean} number={day.day} weekday={day.weekDay} resetActiveDay={resetActiveDay} />
						)
					})
				}
			</div>
		</div>
	);
}

export default DateContainer;