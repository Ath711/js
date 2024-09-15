const myApp = new Object(); //singleton
const oldApp = {}; // not singleton
console.log(myApp);
console.log(oldApp);

myApp.id = "abc";
myApp.name = "pqr";
myApp.isLoggedIn = false;

console.log(myApp);

const anotherUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "a",
      lastName: "b",
    },
  },
};

console.log(anotherUser.fullname.userfullname.firstName);
console.log(anotherUser.fullname?.userfullname.firstName); //optional chaining '?' generally used in apis, like check if fullname exist then go next

const object1 = {
  1: "a",
  2: "b",
};
const object2 = {
  3: "c",
  4: "d",
};

const object3 = { object1, object2 }; // wont work it will give { {object1} , {object2} }
console.log(object3);

const object4 = Object.assign(object1, object2);
console.log(object4);

const object5 = Object.assign({}, object1, object2); //not compulsory but {} considered as target and reamining as source otherwise first object1 will be considered as target 
console.log(object5);

const object6 = {...object1, ...object2}; //spread operator
console.log(object6);


const users = [
  {
    id : 1,
    email : "a@gmail.com"
  },
  {
    id : 2,
    email : "b@gmail.com"
  },
  {
    id : 3,
    email : "c@gmail.com"
  }
]

console.log(users[1]["email"])

console.log(myApp)

console.log(Object.keys(myApp))
console.log(Object.values(myApp))
console.log(Object.entries(myApp))


console.log(myApp.hasOwnProperty("id"))

