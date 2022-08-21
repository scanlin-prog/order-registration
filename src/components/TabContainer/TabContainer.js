import React from 'react';
import './TabContainer.css';

function TabContainer(props) {
	return (
		<div className="tab-container">
			{props.children}
		</div>
	);
}

export default TabContainer;