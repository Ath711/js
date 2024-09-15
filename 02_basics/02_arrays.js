const heros1 = ["1","2","3"]
const heros2 = ["a","b","c"]

// heros1.push(heros2)
// console.log(heros1)

const newArr = heros1.concat(heros2)
console.log(newArr)

//spread operator
const allNewHeros = [...heros1, ...heros2]
console.log(allNewHeros)

const newArr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr = newArr2.flat(Infinity) //depth value to be given, should not use Infinity
console.log(realArr)



console.log(Array.isArray("abc"))
console.log(Array.from("abc"))
console.log(Array.from({name: "abc"})) //cannot convert directly so returns empty array



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

