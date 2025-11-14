const accountId = 234556;
let emailaddress = "qasim@gmail.com";
var  userName = "Muhammad Qasim"

let user_city;

// accountId = 3455; //not allowed
emailaddress = "qasim123@gmail.com";
userName = "Ali"

/* 
prefer not to use var
Because  of issue in block scope and functional scope  
*/

console.table([accountId ,emailaddress,userName,user_city]);
