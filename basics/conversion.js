let id = 22

console.log(typeof id);

let value = "20" 
console.log(typeof value); // this will print string as value is being declared in double quotes
console.log(value)

let valueInNumber = Number(value) //by using Number we are changing the datatype of value 
console.log(typeof valueInNumber) //will print datatype as number 
console.log(valueInNumber)

/*
"20" => 20
"abc" => NaN
true => 1 false =>0
*/

let isLoggedIn = 1 // will give fale on 0 and true on any integer
// "" => value will be false
// "abc" => value will be true 
let booleanIsLogggedIn = Boolean(isLoggedIn)
console.log(booleanIsLogggedIn)