const accountId = 144553
let accountEmail = "sneha@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed because const is used


//console.log(accountId, accountEmail, accountPassword, accountCity, accountState);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 

accountEmail = "sp@sp.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


