/* 
1. singleton -> from constructor unique instance
2. object literals -> when we create from literals its not singleton
*/

// Object.create // constructort methods

//literal method
const mySymbol = Symbol("key");
const JsUser = {
  name: "abc", // by default system process name as "name"
  "full name": "abcd pqr",
  age: 18,
  email: "abcd@google.com",
  isLoggedIn: false,
  lastLoggedIn: ["Mon", "Wed"],
  [mySymbol]: "key1",
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);
// console.log(JsUser.full name) // wont work

JsUser["email"] = "new@gmail.com";
console.log(JsUser["email"]);

// Object.freeze(JsUser);
JsUser["email"] = "hello@gmail.com"; //will not update value
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`)
}

JsUser.greeting()
JsUser.greetingTwo()

