"use strict"

// let userName = 'amin' ;

// console.log(userName.padStart(10,'*'))
// console.log(userName.padEnd(10,"?"))



// let size = '235' ;

// console.log(size.padStart(2,"0"))


let phoneNumber = '09028801466' ;

let last4Digits = phoneNumber.slice(-4) ;

let final4Number = last4Digits.padStart(phoneNumber.length,"*")

console.log(final4Number)

