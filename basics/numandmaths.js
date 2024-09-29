const score = 50 // basic pattern to declare number 
console.log(score);

const balance = new Number(100)//declaring through object 
console.log(balance);

console.log(balance.toString());//convert the number in string
console.log(balance.toFixed(2))//upto decimal point

const anothernumber = 25.55487
console.log(anothernumber.toPrecision(3));//how many value ot be considered to precise 



const hundreds = 1000000000
console.log(hundreds.toLocaleString()) //commas using international count
console.log(hundreds.toLocaleString('en-IN'));//using indian count


//========================================================================
//Maths

console.log(Math)
console.log(Math.abs(-4));//change negative value in positive value 
console.log(Math.round(5.8)) // round of
console.log(Math.ceil(4.5));// takes uppervalue for round off
console.log(Math.floor(4.8)) //takes lowe value to round off

console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,9,8));

console.log(Math.random());//will be range bound in 0 to 1
console.log((Math.random()*10)+1); //will give value between 0 to 10
console.log(Math.floor(Math.random()*10)+1);//will round off the number wrt to lower value and gives a integer 
const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1)+min)));// will give a random number between the max and min defined 
