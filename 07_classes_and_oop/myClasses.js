class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "123", "chai@gmail.com");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// how its working

function User2(username, password, email) {
  this.username = username;
  this.password = password;
  this.email = email;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User2.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User2("tea", "123", "tea@gmail.com");

console.log(tea.encryptPassword());
// console.log(tea.changeUsername());
