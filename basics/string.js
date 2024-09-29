// string concatenate 
const name = "Nitin"
const age = 21

//console.log(name+value);

//another syntax 
//string interpolation

console.log(`Hello my name is ${name} and my age is ${age}`);//this way is called string interpolation

//Another way of nameing a string through object

const anothername = new String("Nitin Sharma")
console.log(anothername);
console.log(anothername[2])

console.log(anothername.__proto__); //to get object

console.log(anothername.length);
console.log(anothername.toUpperCase())
console.log(anothername.charAt(2));
console.log(anothername.indexOf('t'));

const newStr = anothername.substring(0,4)
console.log(newStr);

const anotherString = anothername.slice(-3,5)
console.log(anotherString);

const Stringone = "    Nitin      "
console.log(Stringone)
console.log(Stringone.trim());


// String into array 
const StringSplit = "Hello my name is Nitin Sharma"
console.log(StringSplit.split(' ')); //will split the string on the basis of space and store it in array
