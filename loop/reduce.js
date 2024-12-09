const num = [1,2,3,4,5,6,7,8,9]

const mytotal = num.reduce( function (accumlator,currentvalue) {
    console.log(accumlator);
    console.log(currentvalue);   
    return  accumlator+currentvalue
},0)