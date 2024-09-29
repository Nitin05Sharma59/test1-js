//  There are two types of memoories 
// Stack memory and heap memory

//stack memory is used in primitive datatype 
// Heap memory is used in non primitive datatype  

//when stack memory is used then we get a copy of variable declared  
//when heap memory is used then we get a reference of the variable declared

let name = "Nitin"  // this will go in stack memory 
let anothername = name 

anothername = "abc"//the another name is changed because we get copy of memory for anothername datatype 

console.log(name);
console.log(anothername)

//heap memory 
let user ={
    email:"nitinsharma5938@gmail.com",
    age:21
}
/*
let anotheruser ={
    email:"abc@gmail.com",
    age:20
}
*/
let anotheruser = user
anotheruser.email = "abc@gmail.com"  // this will change the orignal value stored because memory is stored in heap memory
//heap memory provides a reference of orignal variable 
console.log(user.email);
console.log(anotheruser.email);

