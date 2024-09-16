// simply to understand we can say that code is closed in a pack and we can use that wherever we want

function sayName() {
  console.log("hello");
  console.log("world");
}

// sayMyName is reference and sayMyName() is function execution
sayName();
sayName();
sayName();

function addNumbers(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  else console.log("NAN");
}

console.log(addNumbers(11, 10));
console.log(addNumbers(11, "b"));

// passing default value here
function loginUserMessage(username = "default") {
  if (username && username.trim() !== "") return `${username} just logged in`;
  else return "enter username";
}

console.log(loginUserMessage("user"));
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1) {
  return num1;
}
console.log(calculateCartPrice(200,400,500,2000,5000,100))

const user = {
    username : "user",
    price : 199
}

function handleUser(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
function handleArray(anyArray){
    console.log(`2nd value is is ${anyArray[2]}`)
}

handleUser(user)

handleUser({
    username: "new",
    price : 299
})

handleArray([1,2,3])