/*
let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)
*/

//global scope 
var c = 300;
d = 10;
let a = 300;
if (true) {
    //block scope
  let a = 10;
  const b = 20;
  var c = 30; // scope error
  d = 20; // scope error
  console.log(a)
}

// console.log(a) -> will give error has its from if block scope
// console.log(b) -> will give error has its from if block scope

console.log(a); 
console.log(c); // -> it will return 30 (scope error) thats why we dont generally user var
console.log(d); // -> it will return 20 (scope error) thats why we dont assign values directly to variable


