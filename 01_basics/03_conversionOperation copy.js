let score = 33
let stringScore = "33"
let stringScore2 = "33abc"
let nullScore = null
let undefinedScore = undefined

console.log(typeof(score))
console.log(typeof score)

console.log(typeof(stringScore))
console.log(typeof stringScore)

console.log(typeof nullScore)

console.log(typeof undefinedScore)

let valueInNumber = Number(stringScore)
let valueInNumber2 = Number(stringScore2)
let valueInNull = Number(nullScore)
let valueInundefined = Number(undefinedScore)

console.log(typeof(valueInNumber))
console.log(typeof(valueInNumber2))
console.log(valueInNumber)
console.log(valueInNumber2)
console.log(valueInNull)
console.log(valueInundefined)


/* 
"33" -> 33
"33abc" -> NaN
true -> 1 
false-> 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


/* 
1 -> true
0 -> false
"" -> false
"name" -> true
*/


let someNumber = 11
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//------------------operations------------------
console.log("---------------------")

let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%3)

let str1 = "hello"
let str2 = " name"

let finalString = str1 + str2
console.log(finalString)

console.log("1"+"2")

console.log("1"+2)
console.log(1+"2")

console.log("1"+2+2)
console.log(1+2+"2")


console.log(true)
console.log(+true)
// console.log(true+) error

console.log(+"")

let num1, num2, num3 
num1 = num2 = num3 = 2+2

let counter = 100
console.log(counter++)
console.log(counter)