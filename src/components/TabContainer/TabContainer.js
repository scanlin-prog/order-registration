import React from 'react';
import './TabContainer.css';

function TabContainer(props) {
	return (
		<div id={`${props.idContainer}`} className="tab-container">
			{props.children}
			<span className="message-error message-error_hidden">Пропущенное поле</span>
		</div>
	);
}

export default TabContainer;