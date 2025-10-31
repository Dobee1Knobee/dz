'use strict'

function convertCurrency(amount, fromCurrency, toCurrency) {
	const rates = {
		RUB: 1,
		USD: 80.23,
		EUR: 92.75,
	}
	const options = {
		style: 'currency',
		currency: toCurrency,
	}
	const currency = (amount * rates[fromCurrency]) / rates[toCurrency]
	return new Intl.NumberFormat('ru-RU', options).format(currency)
}

console.log(convertCurrency(100, 'USD', 'RUB'))
console.log(Math.sqrt(49))
