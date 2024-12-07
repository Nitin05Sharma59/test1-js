// // // for loop

// // for (let i = 0; i < 10; i++) {
// //     const element = i;
// //     console.log(i);       
// // }

// // for (let i = 0; i < 10; i++) { 
// //     console.log(`outer loop ${i}`);    
// //     for (let j = 0; j < 10; j++) {
// //         console.log(`inner loop ${j}`);       
// //     }   
// // }
// //printing table 
// for (let i = 0; i < 10; i++) { 
//     console.log(`Table of ${i}`);    
//     for (let j = 0; j <=10; j++) {
//         console.log(i +"*" + j +"=" + i*j);       
//     }   
// }


//break and continue 
for (let i = 0; i < 21; i++) {
    if(i == 5){
        break
    }
    console.log("Val of "+i);
}
for (let i = 0; i < 21; i++) {
    if(i == 5){
        continue
    }
    console.log("Val of "+i);
}