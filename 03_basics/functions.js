//declaring a function
// function myName(){
//     console.log("N");
//     console.log("I");
//     console.log("T");
//     console.log("I");
//     console.log("N");
// }
// myName()

function add(num1,num2){
    console.log(num1+num2);   
}
add(5,6)//giving argument 
add(6,"4")
add(4,"a")
add(3,null)

// arguments => values which are passed as when function is called is known as arguments 
//parameter => at the time of defining function the values which are passed in it is called parameter

//we can store the value of function 

function addTwoNumber(number1,number2){
    result = number1+number2
    return result
    //return number1+number2 //we can also do that 
}

console.log(addTwoNumber(5,44));

function login(username){
    return `${username} just logged in`
}
console.log(login("Nitin"));// is no argument is passed then it will be undefined 
