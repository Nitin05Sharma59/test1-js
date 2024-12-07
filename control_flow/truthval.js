const email = "Nitinsharma5948@gmail.com"
//falsy values 
/*
false,0,-0,BigInt,0n,"",null,undefined,NaN
*/
//rather than these above all numbers are truthy values 
/*
"0",'false'," ",[],object,function(){},
*/
const emptyobj ={}

if(Object.keys(emptyobj).length===0){
    console.log("Empty array");
}
//nullish coalescing operator (??): Null Operator

let val1;
//val1=7;
val1=null??7

console.log(val1);

