//for of loop

const arr =[1,2,3,4,5,6,7,8]

for (const i of arr) {
    console.log(i);    
}

//maps
const map = new Map()
map.set('In',"India")
map.set('UK',"United Kingdom")
map.set("Aus","Australia")
console.log(map);

for (const key of map) {
    console.log(key );
}
for (const [key,value] of map) {
    console.log(key ,':-', value);
}
