
let prices = [1,5,8,8,7,9,5,2]

let total = prices.reduce((obj,currentItem) => {
    console.log({...obj})

    return {...obj, [currentItem] : (obj[currentItem] || 0) + 1}
},{})







// console.log(total)


let users = ["ali","mmd","amin","qadir","sasan","sasan","ali","qadir"] ;

users.reduce((prevValue,currentValue)=>{
    console.log(prevValue,currentValue) ;
    
    return currentValue
},"Sabzlearn")








