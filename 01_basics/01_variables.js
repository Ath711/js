const accountId = 13243
let accountEmail = "name@google.com"    
var accontPassword = "1321"
accountCity = "Pune"

// accountId = 2 // cannot re assign 


console.log(accountId)
console.log(accountEmail)
console.log(accontPassword)
console.log(accountCity)


accountEmail = "sfds@gmail.com"
accontPassword = "23423"
accountCity = "Banglore"


console.table([accountId,accontPassword,accountEmail,accountCity])

/* 
const -> that cannot get change

variables can be declared using let and var, though we dont use var

let -> does not have block scope and functional scope issue
var -> has block scope and functional scope issue
*/