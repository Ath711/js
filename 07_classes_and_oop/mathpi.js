// console.log(Math.PI);
// Math.PI = 5; wont update
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const chai = {
  name: "normal chai",
  price: 200,
  isAvailable: true,
  orderchai: function () {
    console.log("ordered");
  },
};

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
//   writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") console.log(`${key}, ${value}`);
}
