


let symbol1 = Symbol(" Synmble 1")
let symbol2 = Symbol("lkdjflskfjsldkjf")
let symbol3 = Symbol("userID")
let symbol4 = Symbol("userID")

console.log(symbol1)
console.log(symbol2)
console.log(symbol3)
console.log(symbol4)


console.log(symbol3===symbol4)


console.log(typeof symbol1)

let userIDSymbol = Symbol("User ID")

let userObject = {
    id : 1 ,
    userName : "amin" ,
    age : 22 ,
    [userIDSymbol] : "-0ri20r23k;qkd"
}


console.log(userObject[Symbol("User ID")])







for (let item in userObject) {
    console.log(item)
}