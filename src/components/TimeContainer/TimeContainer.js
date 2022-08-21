import React from 'react';
import Time from '../Time/Time';
import './TimeContainer.css';

function TimeContainer() {

	return (
		<div className="time-container">
			<Time />
			<Time />
			<Time />
			<Time />
			<Time />
		</div>
	);
}

export default TimeContainer;