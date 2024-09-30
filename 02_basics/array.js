//array

const myArr = [0,1,2,3,4]

console.log(myArr[2])
//declaration of array
const fruits = ["Apple","Mango"]
const arr = new Array(1,2,3,4,5)

//methods of array

myArr.push(5)
console.log(myArr);
myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

//myArr.unshift(9)//will push a value at index 0
myArr.shift()// will remove the value of index position 0 

console.log(myArr.includes(8));// return false
console.log(myArr.indexOf(4));//index pos 4


const newarr = myArr.join()//will bind the array and change it in string 
console.log(myArr);
console.log(newarr);

//slice , splice 
console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);
const myn2 = myArr.splice(1,3) //splice manuplates the orignal array and takes out the position which is in splice 
console.log(myn2);
console.log("C",myArr);//splice has modified the orignal arrray only index pos avail in this are which was not in splice 

