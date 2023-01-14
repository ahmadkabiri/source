"use strict"


function sum() {
    let toArray = Array.from(arguments)
    let total = toArray.reduce((acc,curr)=>{
        return acc+curr
    },0)
    return total
}

                       


 const sumNumbers = sum(1,2,3,4,5)

 console.log(sumNumbers)


