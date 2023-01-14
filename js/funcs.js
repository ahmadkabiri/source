let users = [
    {id:18 , name:"ali" ,age:22} ,
    {id:19 , name:"amin" ,age:23} ,
    {id:29 , name:"amir" ,age:19} ,
    {id:36 , name:"sasan" ,age:28} ,
    {id:41 , name:"qadir" ,age:20} ,
]

export let userCount = users.length

export function isLogin (userID) {
    let isUserInUsers = users.some(user => user.id===userID)
    return isUserInUsers
}

export function userRegister (name,age) {
    let newUserObject ={
        id:Math.floor(Math.random()*100) ,
        name,
        age,
    }
    users.push(newUserObject) ;
    return users
}


// export { isLogin ,userRegister , userCount } 