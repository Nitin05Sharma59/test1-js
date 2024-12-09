const num = [1,2,3,4,5,6,7,8,9]

// const newNum = num.filter( (i)=>i>4)
// console.log(newNum);

const newnum = []
num.forEach( (i)=>{
    if (i>4) {
        newnum.push(i)
    }
})
console.log(newnum)