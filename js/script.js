"use strict"


let user = [1,"Ali",12]

// let userID = user[0] 
// let userName = user[1] 
// let userAge = user[2] 

let [userID,userName,userAge] = user ;

// console.log('userID' , userID) 
// console.log('userID' , userName) 
// console.log('userID' , userAge) 

const showNumbers =  () => [1,3,4,2,7,8] 

let [firstNum , , , secondNum , thirdNum ] = showNumbers()

console.log(firstNum) ;
console.log(secondNum) ;
console.log(thirdNum) ;













