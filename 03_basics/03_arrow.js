const user = {
  username: "a",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "b"
// user.welcomeMessage()

console.log(this);

function one() {
  let username = "aa";
  console.log(this);
  console.log(this.username); // works in objects
}

one();

const two = function () {
  let username = "aa";
  console.log(this);
  console.log(this.username); // works in objects
};

two();

//------------arrow function-----------------

const three = () => {
    let username = "aa"
    console.log(this); // here it will give empty {}
    console.log(this.username); // works in objects
};

three();

//explicit return
const addTwo = (n1,n2) => {
    return n1+n2;
}

// implicit return
const addTwoImplicit = (n1,n2) => n1+n2; //can also write as (n1+n2)


const objectImplicit = (n1,n2) => ({username:"aa"}) // objects wont be returned without ()


console.log(addTwo(3,4))
console.log(addTwoImplicit(3,4))
console.log(objectImplicit(3,4))


const myArr = [2,4,32,5,4]

myArr.forEach(function (){})
myArr.forEach(() => {})
// myArr.forEach(() => ())
