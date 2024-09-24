class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }

}

const iphone = new Teacher("iphone","iphone@apple.com")

const abc = new User("abc");
// console.log(abc.createId()); using static will block direct use for instance
// console.log(abc.createId());

iphone.logMe();
// console.log(iphone.createId()); child cannot also also invoke 

console.log(User.createId());

