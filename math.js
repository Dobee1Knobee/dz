'use strict'
function randomDyson(dyce) {
	const num = parseInt(dyce.slice(1))
	return Math.floor(Math.random() * num) + 1
}

console.log(randomDyson(4))
