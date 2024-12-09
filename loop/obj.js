//forin loop
const myObject = {
    js:"Javascript",
    Cpp:"C++",
    py:"Python"
}

for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} for ${myObject[key]}`);
    
}