const user ={
    username:"Nitin",
    price:"500",

    welcomemsg:function(){
        console.log(`${this.username}, welcome to website `); //this refers to the current context  
        console.log(this);
           
    }
    
}

user.welcomemsg()
user.username="Shubham"//value of username is changed 
user.welcomemsg()

//to print the current contaxt 
console.log(this);//will return empty object 

// function one(){
//     let username = "nitin"
//     console.log(this);   
// }
// one()


//declaration of arrow function 
const two = () => {
    let username = "nitin"
    console.log(this);//will return empty paranthesis 
}
two()

const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(1,9));

//implicit return 
const add = (num1,num2) => num1+num2 //if we want to return object we have to wrap it in paranthesis 

console.log(add(5,7));
