const num = 747
let sum = 0
// your code goes here
const numThirdDigit = (num % 10)
const numSecondDigit = Math.floor((num % 100) / 10)
const numFirstDigit = Math.floor((num / 100))

console.log(numThirdDigit)
console.log(numSecondDigit)
console.log(numFirstDigit)

sum = numFirstDigit + numSecondDigit + numThirdDigit

console.log(sum)