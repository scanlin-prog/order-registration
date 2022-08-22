import React from 'react';
import './Tab.css';


function Tab(props) {

	function handleTabClick(evt) {
		props.handleTabClick(evt)
		props.addCheckBoxValue(props.variantKey, props.text)
	}

	return (
		<div className={`tab`} onClick={handleTabClick}>
			<p className={`tab__text`}>{props.text}</p>
		</div>
	);
}

export default Tab;