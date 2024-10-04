//immediately invoked function expression(IIFE)
// we write iife because we don't want to pollute our functions with global variables 

//declaration of iife 
(function fun1(){
    //named iife 
    console.log("HEY THERE ");
})();//we declare iife to remove the pollution of global variable in function

//iife arrow function
((name)=>{
    //unnamed iife 
    console.log(`HELLO!,World! ${name}`);
    
})("Nitin");//we have to end the immideately invoked function through semicolon