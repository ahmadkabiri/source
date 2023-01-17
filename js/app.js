// Built - in Cons Funcs


let person = {
    id : 1 ,
    username : "amin" ,
    age : 22 ,
    job:'web developer'
}

let entriesPerson = Object.entries(person)

// for (let userProp of person){
//     // Codes...
// }

for ( let userProp of entriesPerson) {
    console.log(userProp)
}



