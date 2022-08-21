export const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
export const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
export const currentDate = new Date()
export const today = {
	month: currentDate.getMonth(),
	weekDay: currentDate.getDay(),
	day: currentDate.getDate(),
	boolean: false
}
export const codeNumbers = [
	{
		code: '+7 Россия',
		value: '+7'
	},
	{
		code: '+373 Молдова',
		value: '+373'
	},
	{
		code: '+49 Германия',
		value: '+49'
	},
]

export const citizenship = [
	{
		text: 'Россия',
		value: 'Россия'
	},
	{
		text: 'Китай',
		value: 'Китай'
	},
	{
		text: 'Германия',
		value: 'Германия'
	},
	{
		text: 'Англия',
		value: 'Англия'
	},
	{
		text: 'Индия',
		value: 'Индия'
	},
]

export const paymentMethod = [
	{
		text: 'MasterCard',
		value: 'MasterCard'
	},
	{
		text: 'Visa',
		value: 'Visa'
	},
	{
		text: 'Мир',
		value: 'Мир'
	},
]