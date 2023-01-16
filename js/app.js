
let user1 = {
    id: 1, 
    username : 'amin' ,
    age:22 ,
    city: 'shiraz' ,
    degree:'BSC'
}


let user2 = {
    id: 2, 
    username : 'ali' ,
    age:19 ,
    city: "Qazvin" ,
    degree:"MSC"
}





function showUser (score, lastName) {
    console.log(`Your id is ${this.id} and your name is ${this.username},your age is ${this.age}, You live in ${this.city} . Your degree is ${user1.degree} , you gained ${score}, your last name is ${lastName}`)
}

// showUser.call(user1,20,"Tabriz")
// showUser.call(user2,14,"Tehran")

showUser.call(user1,95,"samak")    // khod be khod tabe ejra shod !!
showUser.call(user2,98,"kabiri") // khod be khod tabe ejra shod !!

showUser.apply(user1,[87,"Tabriz"]) // khod be khod tabe ejra shod !!
showUser.apply(user2,[56,"Tehran"]) // khod be khod tabe ejra shod !!


let bindingFunc1 =  showUser.bind(user1,22,"tabriz") // ma bayad farakhanish konim!
let bindingFunc2 =  showUser.bind(user2,14,"tehran") // ma bayad farakhanish konim!

bindingFunc1()
bindingFunc2()














