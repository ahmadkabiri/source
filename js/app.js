


// // // CRUD - PROXY (Get Trap) || (in)




let user = {
    id:1 ,
    firstName : "ali" ,
    lastName : "Kabiri" ,
    age: 55 ,
    phone : 09028801466 ,
    email : "Ahmadkabiriw@gmail.com"
}


let userProxy = new Proxy(user,{
    get (target,property) {
        if(property === "age" && target[property] >= "100"){
            console.log(property)
            return 100
        }

        return property in target ? target[property] : null
    }
})


console.log(userProxy.age)



//  user = new Proxy(user,{
//     get : function (target,property) {
//         console.log("Target:" , target)
//         console.log("Property:" , property)

//         // return target[property] ? target[property] : null
//         return property in target ? target[property] :"ali"
//     }
// })


// console.log("User", user.phone)

// // console.log("Proxy User", proxyUser.email)



