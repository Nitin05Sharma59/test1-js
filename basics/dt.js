// PRIMITIVE DATATYPE 
// 7 types => String, Number ,boolean , null, undefined, Symbol, Bigint

const a =10
const isLoggedIn = true
const temp = null
let email

const id = Symbol('123')
const isId = Symbol('123')
console.log(id === isId);

//NON-PRIMITIVE DATATYPE or REFERENCE TYPE
//arrays ,objects, functions

const array = ["apple","banana","mango"]

//object
let myobj = {
    name:"Nitin",
    age:20,
}

//function

const myfunction = function(){
    console.log("hello World");
}