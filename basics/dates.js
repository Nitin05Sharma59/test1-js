// //dates is being taken As a UTC time, it is midnight at the beginning of January 1, 1970, UTC

// let date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(typeof date);


//declaring date 
let myCreatedDate = new Date(2020,0,23)//date can be declared by that way 
//let myCreateDate = new Date("2023-01-14")
//let myCreateDate = new Date("01-14-2023")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());



// //timestamp
let mytimestamp = Date.now()
// console.log(mytimestamp);

// console.log(myCreatedDate.getTime());

console.log(Math.floor(mytimestamp/1000));//converted in second

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth())
console.log(newdate.getDay());

//to make a new format of date

newdate.toLocaleString(`default`,{
    weekday:"long",
    timeZone:""
})