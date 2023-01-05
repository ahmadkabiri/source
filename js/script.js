
let users = [
    { id : 1 , name : "amin" , age : 25 },
    { id : 2 , name : "ali" , age : 51 },
    { id : 3 , name : "amir" , age : 24 },
    { id : 4 , name : "abbas" , age : 19 },
    { id : 5 , name : "ahmad" , age : 32 },

]




let locationSearch = location.search


let locationSearchParams = new URLSearchParams(locationSearch)

let userIDParam = locationSearchParams.get("name")

console.log(userIDParam)


let mainUser = users.find(user=>{
    return user.name === userIDParam
})


console.log(mainUser)