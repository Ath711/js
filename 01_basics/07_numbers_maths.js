const score = 400;

console.log(score);

const balance = new Number(100);

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1123.6032;
console.log(otherNumber.toPrecision(4));

const hundred = 1000000;
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString("en-US"));
console.log(hundred.toLocaleString("en-IN"));

//---------------------------Maths----------------------
console.log("------------------------");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(3, 2, 1, 4, 0));
console.log(Math.max(3, 2, 1, 4, 0));

console.log(Math.random()); // values between 0-1
console.log(Math.random() * 10);

let flag = true;

while (flag) {
  num = Math.floor(Math.random() * 10 + 1); //avoiding 0 value by adding +1
  if (num < 7) {
    console.log(num);
    flag = false;
  }
}

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
