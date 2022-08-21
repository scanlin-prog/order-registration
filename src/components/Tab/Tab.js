import React from 'react';
import './Tab.css';


function Tab(props) {
	const [isActive, setActive] = React.useState(false)

	function handleClick() {
		setActive(!isActive)
	}

	return (
		<div className={`tab ${isActive ? 'tab_active' : ''}`} onClick={handleClick}>
			<p className={`tab__text ${isActive ? 'tab__text_active' : ''}`}>{props.text}</p>
		</div>
	);
}

export default Tab;