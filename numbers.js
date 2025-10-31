'use strict'
console.log(Math.sqrt(36))
console.log(Math.cbrt(27))
console.log(16 ** (1 / 4))
console.log(Math.sign(-100))
console.log(Math.sign(35))
console.log(Math.abs(-100))
console.log(Math.abs(100))
console.log(Math.exp(3))
console.log(Math.max(1, -2, 0, 19))
console.log(Math.min(1, -2, 0, 19))
const arr = [3, 5, 1, 8, 2]
console.log(Math.max(...arr))
console.log(Math.min(...arr))
console.log(Math.round(1.5))
console.log(Math.ceil(0.1))
console.log(Math.floor(1.5))
console.log(Math.trunc(1.5))
console.log(Math.trunc(5.5))
console.log((1.49999).toFixed(1))
console.log(Math.random(0))

function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomInt(1, 6))
console.log(0.2 + 0.2 === 0.4)
