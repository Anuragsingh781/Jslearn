const accountId = 144555
let accountEmail = "anurag@gmail.com"
var accountPassword = "12345"
accountCity = "Amroha"
let accountState;

// accountId = 22 not allowed



accountEmail = "anu@gmail.com"
accountPassword = "98765"
accountCity = "Bijnor" // not a good practise although it is possible

console.log(accountId);

/*
Prefer not to use var because of issues in block scope and functional scope
*/
console .table([accountEmail,accountId,accountPassword,accountCity,accountState])
