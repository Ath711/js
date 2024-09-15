/* 
datatypes -> primitive and non primitive
difference only in 
primitive -> call by value
non primitive -> call by reference
*/

/* 
Primitve : 7 types
String
Number
Boolean
null
undefined
Symbol
BigInt
*/

/* 
Reference type (non primitive): 
Array
Objects
Functions
*/

// symbol declaration

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //false as Symbol is unique


const bigNumber = 4293422342387492387n
console.log(bigNumber)

const heros = ["a","b","c"]

let obj = {
    name:"abc",
    age:22,
}

console.log(heros);
console.log(obj);

// function variable way

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);


//------------------------------------memory-----------------------------

/*
there are 2 types of memory
Stack, Heap

Primitive -> Stack  (we get copy of whatever goes in stack)
Non Primitive -> Heap  (we get reference of whatever goes in heap)

*/

let myName = "abc" //String -> stack
let anotherName = myName

console.log(myName+" "+anotherName);

anotherName = "pqr"

console.log(myName+" "+anotherName);

let user1 ={
    email:"abc@google.com",
    upi:"user1@ybl",
    toString: function() {
        return `${this.email}, ${this.upi}`;
    }
}

let user2 = user1;

console.log(user1+" "+user2);

user2.email = "pqr@google.com"

console.log(user1+" "+user2);



