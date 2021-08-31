const a = 1;
const b = 5;
const c = 6;  // stands for x**2 - 6*x + 9 = 0
let solutionA
let solutionB
// your code goes here
let minusB = -b

let twoTimesA = a * 2

let squareRoot = Math.sqrt((b ** 2) - (4 * (a * c)))

console.log(minusB)
console.log(twoTimesA)
console.log(squareRoot)


solutionA = ((minusB + (squareRoot)) / twoTimesA)
solutionB = ((minusB - (squareRoot)) / twoTimesA)

console.log(solutionA, solutionB)

