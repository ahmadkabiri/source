"use strict"

import { isLogin , userRegister ,userCount as usersLength} from "./funcs.js"

console.log(isLogin(19))
;
let newUserName = prompt("Enter User Name") ;
let newUserAge = prompt("Enter User Age") ;

console.log(userRegister(newUserName,newUserAge))


console.log(usersLength)










