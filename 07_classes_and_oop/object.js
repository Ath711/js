function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); //by default some context is set, so {} is of that method

/*
function is also an object and a function
in function whatever its properties or working or functionality is there it behaves as function
but if we want we can also make it behave like an object
because everything in js is refered from object and js has prototypal inheritance and at last object prototype is null but it also has getter and setter
 */

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`name is ${this.username} and price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.increment();
chai.printMe();

tea.printMe();


