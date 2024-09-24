class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, password, email) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course added: ${this.username}`);
  }
}

const teacher = new Teacher("chai", "pass", "chai@chai.com");
teacher.addCourse();

const tea = new User("tea");
// chai.addCourse();
tea.logMe();

const costlyTea = new User("costlyTea")

console.log(tea === teacher);
console.log(tea === costlyTea);

console.log(tea instanceof User);
console.log(teacher instanceof User);




