const fruits = ["mango","Apple","Banana"]
const animal = ["Cat","Dog","Lion"]

// fruits.push(animal)
// console.log(fruits);//this will make array of array

// let arr3 =fruits.concat(animal)
// console.log(arr3);//awill return a new array with the values of both the arrays

//we can spread the values of arrays by using  ...
const newarr = [...fruits,...animal]
console.log(newarr);

const anotherarr = [0,1,2,3,[4,5,6],7,8,[5,6,[1,2,3]]]
const anothernewarr = anotherarr.flat(Infinity)//will concate all the array inside an array and we have to give the depth 
console.log(anothernewarr);

