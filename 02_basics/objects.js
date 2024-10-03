// Singleton  => if we create like a literal it is not a singleton 
//if declared through constructor it is also singleton


//creating symbol and and using it as a key 
const Sym = Symbol("Key1")//declaring a symbol


//pbjext literals
//object declaration 
const User = {
    name : "nitin",
    age: 21,
    //Sym: "Key1",bY usng this way of printing symbol when we see the typeof key it will be string 
    [Sym]: "Key1",//oringnal way for printing a symbol
    location:"Indore",
    email: "nitin05sharma02@gmail.com",
    isLoggedIn: false
}
//to access
console.log(User.name);
console.log(User["location"])//we have to put the key in double quotes because keys are stored in the form of String 

// printing symbol
console.log(User[Sym]);
console.log(typeof Sym)// we are getting type symbol

// to overwrite the value in array
User.email = "Nitinsharma5948@gmail.com"
console.log(User["email"]);

//object freeze 
//Object.freeze(User)//to lock the value  so no one is allowed to change the object content
User.email = "Nitinsharma.05@gmail.com"//the email will not be updated because the boject is locked 
console.log(User);

User.greeting = function(){
    console.log("Hello! Nitin ");   
}
console.log(User.greeting());

User.greeting2 = function(){
    console.log(`Hello User${this.name}`); 
}
console.log(User.greeting2());
