const user = {
  username: "abc",
  loginCount: 0,
  signedIn: true,

  getUserDetails: function () {
    // console.log("user details...");
    // console.log(`username ${this.username}`);
    console.log(this);
  },
};

// console.log(user["username"]);
// user.getUserDetails();
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = () =>{
    console.log(`Welcome ${this.username}`);
    
  }

  //   return this; no need to return explicitly
}

const userOne = new User("a", 1, true); // will give new instance using new keyword, otherwise at the time of usertwo it overwrite values
const userTwo = new User("b", 2, true);
console.log(userOne.constructor);
console.log(userTwo);

/*
1. new object is created
2. constructor function is called because of new keyword, it packs all arguments
3. this keyword all arguments are injected
4. you get in function
 */
