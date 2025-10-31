'use strict'
const bigNum = 350_500_000
const bigNum2 = 350500000

const payment = 20_10
const payment2 = 20.1

console.log(Number('350_500_500'))
console.log(Number.parseInt('350_500_000'))
const max = 2 ** 53 - 1
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(max + 1)
console.log(max + 2)
console.log(max + 3)
console.log(13414134114134432523245245245245n)
console.log(BigInt('13414134114134432523245245245245'))
console.log(10n + 10n)
console.log(10n * 10n)
console.log(
	13414134114134432523245245245245n * 13414134114134432523245245245245n
)
console.log(10n < 20)
console.log(10n == 10)
console.log(10n === 10)
console.log(10n / 3n)
