
let userInfo = document.querySelector("h1")

let users = [
    { id : 1 , name : "amin" , age : 25 },
    { id : 2 , name : "ali" , age : 51 },
    { id : 3 , name : "amir" , age : 24 },
    { id : 4 , name : "abbas" , age : 19 },
    { id : 5 , name : "ahmad" , age : 32 },

]




let locationSearch = location.search

// Bad Way 
// location.search.slice(1).split("=")[1]

// Good Way 

let locationSearchParams = new URLSearchParams(locationSearch)

let userIDParam = locationSearchParams.get("id")



let mainUser = users.find(user=>{
    return user.id === Number(userIDParam)
})

if(mainUser){
    userInfo.innerHTML = `Name : ${mainUser.name} | Age : ${mainUser.age}`
}else{
    userInfo.innerHTML = "User Is Not Defined :("
}

console.log(mainUser) ;

