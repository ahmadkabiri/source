"use strict"


const sum = (...args) => {
    // console.log("a",a) ;
    // console.log("b",b) ;
    // console.log("c",c) ;
    console.log("args",args) ;

    let sumAllArgs = 0 ;

    args.forEach(item => sumAllArgs += item)

    return sumAllArgs
}

                       


 const sumNumbers = sum(1,2,3,4,5)

 console.log(sumNumbers)


