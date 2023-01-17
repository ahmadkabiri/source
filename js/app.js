

let user = {
    id:1 ,
    username : "ali" ,
    age:22 
}

// two new datatype

// Set , Map


///////////////////////

let numbers = new Set()


numbers.add(20)
numbers.add(12)
numbers.add(13)
numbers.add(15)
numbers.add(18)
numbers.add(22)
numbers.add(55)








// numbers.add(20)
// numbers.add(12)

// numbers.delete(20)
// numbers.delete(12)

// numbers.clear()

// console.log(numbers.size)

// console.log(numbers.has(12))

// numbers.forEach(num=>{
    //     console.log(num)
    // })
    
    // just forEach works on set and filter , map , find , find index doesnt work on it
    
    
    
    
    
    ///////////////////////////////////////////
    
    
    console.log(user)
    
    
    
    
    let scores = [
        12,
        17,
        89,
        90,
        43,
        21,
        17,
        12,
        21
    ]

// let setScores = new Set([12,17,89,90,43,21,17,12,21])



let setScores = new Set(scores)


let arrayNumbers = [...setScores]



console.log(setScores)

console.log(arrayNumbers)



for(let number of setScores){
    console.log(number)
}



