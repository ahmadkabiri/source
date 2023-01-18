


// // // CRUD - PROXY (Get Trap) || (in)




let user = {
    id:1 ,
    firstName : "ali" ,
    lastName : "Kabiri" ,
    age: 55 ,
    phone : 09028801466 ,
    email : "Ahmadkabiriw@gmail.com" ,
    type : "user" ,

}


let userProxy = new Proxy(user,{
    get (target,property) {
        if(property === "age" && target[property] >= "100"){
            console.log(property)
            return 100
        }

        return property in target ? target[property] : null
    },

    set (target,property,value) {
        // console.log(target)
        // console.log(property)
        // console.log(value)

        if(value <18 && property === "age"){
            value = 18
        }
        if (property === "type" && ['user', 'admin' , 'author' , 'teacher'].includes(value.toLowerCase())) {
            target[property] = value ;
        } else {
            throw new Error("this value is not valid :(") // حواسمون باشه به این موارد
        }

        target[property] = value
    }
})




userProxy.type = "admin"

console.log(userProxy.age)

