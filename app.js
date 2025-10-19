'use strict'
//фвавффва

const arr = [
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
]
let a
// 1) Функция стабильного ключа (фиксируем порядок полей)
const stableKey = o => JSON.stringify({ id: o.id, name: o.name })

function uniqueByAllFields(arr) {
	// шаг A: получаем подписи
	const signatures = arr.map(stableKey)

	// шаг B: делаем Set -> только уникальные подписи
	const uniqueSignatures = new Set(signatures)

	// шаг C: по каждой подписи находим первый исходный объект
	return Array.from(uniqueSignatures).map(sig =>
		arr.find(obj => stableKey(obj) === sig)
	)
}

console.log(uniqueByAllFields(arr))
// => [ { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]
