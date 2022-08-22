export const emailRegex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;

export const text = {
	required: true
}

export const onlyText = {
	required: true,
	pattern: {
		value: /^([^0-9]*)$/,
		message: "Пожалуйста, вводите только буквы"
	},
}

export const number = {
	required: true,
	pattern: {
		value: /^\d+$/,
		message: "Пожалуйста, вводите только цифры"
	},
}

export const numberPhone = {
	required: true,
	pattern: {
		value: /^\d+$/,
		message: "Пожалуйста, вводите только цифры"
	},
	minLength: {
		value: 10,
		message: "Минимальное количество цифр: 10"
	},
	maxLength: {
		value: 10,
		message: "Максимальное количество цифр: 10"
	},
}

export const passportNumber = {
	required: true,
	pattern: {
		value: /^\d+$/,
		message: "Пожалуйста, вводите только цифры"
	},
	minLength: {
		value: 10,
		message: "Минимальное количество цифр: 10"
	},
	maxLength: {
		value: 10,
		message: "Максимальное количество цифр: 10"
	},
}

export const email = {
	required: true,
	pattern: {
		value: emailRegex,
		message: "Пожалуйста, введите Email"
	},
}