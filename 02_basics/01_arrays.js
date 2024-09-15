const myArr = [0,1,2,3,4,5] //valid 

const myArr2 = [0,1,2,3,4,5, true, "name"] //valid as its collection of any elements here in js, and is resizable

/* 
js array-copy operation creates shallow copies
shallow copy of an object is a copy whose properties share the same reference
while in deep copy it does not share same references
*/

const myHeroes = ["h1","h2"]
const myHeroes2 = new Array("h1","h2")

//---------array methods-------------

myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9)
myArr.shift() //pops first element
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(0))

const newArr = myArr.join() // join binds and converts it in String
console.log(newArr)
console.log(myArr)

/*
slice and splice 
in splice original array is affected
it removes the ranged element and keeps remaining 
*/

console.log("myArr before slice ", myArr)
const myn1 = myArr.slice(1,3)
console.log("myn1 Slice ", myn1)
console.log("myArr after slice ", myArr)


console.log("myArr before splice ", myArr)
const myn2 = myArr.splice(1,3)
console.log("myn2 Splice ", myn2)
console.log("myArr after slice ", myArr)