"use strict"


// let user = [1,"Ali",12]


// let [userID,userName,userAge, userCity = 'Tabriz'] = user ;

// console.log('userID' , userID) 
// console.log('userName' , userName) 
// console.log('userAge' , userAge) 
// console.log('userCity' , userCity) 


///////////////////////////////////////////////////////////

let user = {
    id:1 ,
    // name:"Ali" ,
    age:22 ,
}

let {age,name = "amin",id:userID} = user

// console.log(userID)
// console.log(name)
// console.log(age)


let users = [
    {id:1 , name:"ali" , age:18 , email : "ali@gmail.com"},
    {id:2 , name:"amin" , age:22 , email : "amin@gmail.com"},
    {id:3 , name:"qadir" , age:20 , email : "qadir@gmail.com"},
    {id:4 , name:"sasan" , age:32 , email : "sasan@gmail.com"},

]


const getUser = userID => {

    let mainUser = users.find(user => user.id == userID)

    return mainUser
}


// console.log(getUser(3))

// let {name:userName , email : userEmail} = getUser(3)


////////////////////////////////////////////////////////


const userIDInput = document.querySelector("#user-id")




userIDInput.addEventListener("keypress", event =>{

    let { keyCode , target:input} = event ;

    if(keyCode === 13){
        let {name,email} = getUser(input.value) ;
        console.log("UserName",name)
        console.log("UserEmail",email)


    }



})













