import React from 'react';
import './ContainerPayment.css';

function ContainerPayment(props) {
	return (
		<div className="container-payment">
			{props.children}
		</div>
	);
}

export default ContainerPayment;