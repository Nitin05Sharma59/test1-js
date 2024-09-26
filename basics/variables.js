const Id = 12345 //value is locked and it can't be changed and it is constant throught the code 
/*
we can use both let and var to declare a variable 
'let' is used mainly in the js because the block scope and functional scope problem which used to occur in 'var' is solved in 'let'
*/
let email = "Nitinsharma@gmail.com"
var password = "56789"//prefer not to use var because of block scope and functional scope problem

let state //if variable is not declared then the variable will be used as undefined
city = "indore"

//Id = 2 // this is not allowed as Id is declared as a const 
console.log(Id);
console.table([Id,email,password,city]);
email = "nitin05sharma02@gmail.com" //we can change the email because it was declared as a variable
password = "123456789"
city = "Patna"
console.table([Id,email,password,city,state]);
