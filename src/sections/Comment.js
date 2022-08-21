import React from 'react';
import Container from '../components/Container/Container';

function Comment() {

	return (
		<Container title={`Комментарий к заказу`}>
			<textarea className="textarea" placeholder="Напишите коментарий лаборатории..."></textarea>
		</Container>
	);
}

export default Comment;