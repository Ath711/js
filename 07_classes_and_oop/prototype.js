/*
function setString(string) {
  this.string = string;
}

setString.prototype.trueLength = function () {
  let count = 0;
  for (let i = 0; i < this.string.length; i++) {
    if (this.string.charAt(i) == " ") continue;
    else count++;
  }
  return count;
};

let str = new setString(" ab c");
console.log(str.trueLength());

*/

String.prototype.trueLength = function () {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (this.charAt(i) == " ") continue;
    else count++;
  }
  console.log(count);
};

const str = "aa b";
str.trueLength();
"i   c e te a".trueLength();

// inheritance

const User = {
  login: "name",
  email: "name@google.com",
};

const Teacher = {
  recordLecture: true,
};
const TeachingAssitant = {
  isAvailable: false,
};
const TASupoport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: TeachingAssitant,
};

Teacher.__proto__ = User;

console.log(Teacher.email);
console.log(TASupoport.isAvailable);

// new approach -> modern syntax

Object.setPrototypeOf(TeachingAssitant, User);
console.log(TeachingAssitant.login);
