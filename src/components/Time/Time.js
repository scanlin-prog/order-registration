import React from 'react';
import './Time.css';

function Time(props) {

	function handleTimeClick(evt) {
		props.handleTimeClick(evt)
		props.addCheckBoxValue(props.variantKey, props.time)
	}

	return (
		<div className={`time`} onClick={handleTimeClick} >
			<p className="time__number">{props.time}</p>
		</div>
	);
}

export default Time;