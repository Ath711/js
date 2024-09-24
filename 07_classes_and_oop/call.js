function setUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //   setUsername(username); it will get called but reference wont be hold
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@chai.com", "abc");
console.log(chai);
