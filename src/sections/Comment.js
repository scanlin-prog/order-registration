import React from 'react';
import Container from '../components/Container/Container';

function Comment(props) {

	return (
		<Container title={`Комментарий к заказу`}>
			<textarea className="textarea" placeholder="Напишите коментарий лаборатории..."
				{...props.register(props.name)}
			></textarea>
		</Container>
	);
}

export default Comment;