let myDate = new Date();
console.log(myDate);

console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("12-02-2023");
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now(); //value in ms
console.log(myTimeStamp);

console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now() / 1000)); //converting in sec
//comparison usually done in ms

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getYear());

console.log(
  `${newDate.getDate()} and time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
);

console.log(newDate.toLocaleString("default",{
  weekday: "short",
  timeZone: "Asia/Kolkata"
}));
