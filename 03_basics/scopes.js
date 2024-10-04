// let a = 200
// if(true){
//     let a =1
//     const b = 5
//     var c =4
//     console.log("Inner:",a)
// }
 
// //console.log(a);//will give error as a declared is in local scope 
// //console.log(b);//will give error as a declared is in local scope 
// console.log(c); //will print the value of c and this will occur a problem of scope 

// //if we declare value of a in global scope then it will print both local and global declared value of a
// console.log(a);


//nested scope 
// function abc(){
//     const name="Nitin"

//     function two(){
//         const web = "Yt"
//         console.log(name); 
//     }
//     //console.log(website); cannot be accesed because it is declared in local function two 
//     two() 
// }
// abc()

// if(true){
//     const username = "nitin"
// if(username === "nitin"){
//     const website ="Yt"
//     console.log(username + website);   
//     }
// }

function addone(num){
    return num+1
}//we can access this function before its declaration
console.log(addone(5));

//another way for funtion 
const addTwo = function(num){
    return num + 2
}//here we stored the function in a variable it is also known as hoisting and we cannnot acces this function before its declaration 
console.log(addTwo(6));
