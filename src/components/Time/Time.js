import React from 'react';
import './Time.css';

function Time() {

	const [isActiveTime, setActiveTime] = React.useState(false);

	function handleTimeClick() {
		setActiveTime(!isActiveTime)
	}

	return (
		<div className={`time ${isActiveTime ? `time_active` : ``}`} onClick={handleTimeClick} >
			<p className="time__number">08:00</p>
		</div>
	);
}

export default Time;