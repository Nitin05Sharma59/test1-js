//Declaring object with help of constructor 
const app = new Object()
app.id = "ID123"
app.name= "Nitin"
app.isLoggedIn = false
//console.log(app);

const regularuser = {
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nitin",
            lastname:"Sharma"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);//accessinng objects in objects 
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
// const obj3 = Object.assign({},obj1,obj2)//to concate one or more objects in single object 
// console.log(obj3);
const obj3 = {...obj1,...obj2}//object spread 
console.log(obj3);

//fetching values from database 
//value comes in form of array of objects 
const users = [
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"def@gmail.com"
    },
    {
        id:3,
        email:"dghi@gmail.com"
    }
]
console.log(app);
console.log(Object.keys(app));
console.log(Object.values(app));
console.log(Object.entries(app));
//accessing value from the value stored in arary 
console.log(users[0].email);
console.log(users[1].email);
