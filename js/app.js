
let user = {
    id: 1, 
    username : 'amin' ,
    age:22 ,
}


let user2 = {
    id: 2, 
    username : 'ali' ,
    age:19 ,
}





function showUser (score, city) {
    console.log(this.username + " Is " + this.age + " Years Old :) => Score: ", score, "City " + city )
}

// showUser.call(user,20,"Tabriz")
// showUser.call(user2,14,"Tehran")


// showUser.apply(user,[20,"Tabriz"])
// showUser.apply(user2,[14,"Tehran"])


showUser.bind(user,22,"tabriz")()
showUser.bind(user2,14,"tehran")()

let bindingFunc = showUser.bind(user2,14,"tehran")

bindingFunc()














