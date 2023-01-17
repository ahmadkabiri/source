// Built - in Cons Funcs


let user = {
    id : 1 ,
    username : "amin" ,
    age : 22 ,

    address : {
        country:"Iran" 
    }
}



// let userStreet = user.address.city ? user.address.city.address : undefined;

let userStreet = user.address.city?.street

console.log(userStreet)





