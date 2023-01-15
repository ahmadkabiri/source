let users = [
    {id:10 , name:"ali"   ,age:22} ,
    {id:11 , name:"amin"  ,age:23} ,
    {id:20 , name:"amir"  ,age:19} ,
    {id:22 , name:"sasan" ,age:28} ,
    {id:30 , name:"qadir" ,age:20} ,
    {id:33 , name:"ahmad" ,age:34} ,
    {id:40 , name:"reza"  ,age:29} ,
    {id:44 , name:"shima" ,age:39} ,
    {id:50 , name:"sahar" ,age:16} ,
    {id:55 , name:"samira",age:24} ,
    {id:60 , name:"sadra" ,age:25} ,
    {id:66 , name:"arman" ,age:19} ,
    {id:70 , name:"amjad" ,age:16} ,
    {id:77 , name:"atefe" ,age:37} ,
    {id:80 , name:"ehsan" ,age:34} ,
    {id:88 , name:"sina"  ,age:26} ,
    {id:90 , name:"pouria",age:21} ,
    {id:99 , name:"kamran",age:33} ,
]

let userCount = users.length

function isLogin (userID){
    let existResult = users.some(user => user.id == userID)
    return existResult

}

let ides = []

function usersIDs () {
    users.forEach(user=> ides.push(user.id))

}

function userRegister (name="user",age=0){
    
    let newID = getNewID()

    let newUser = {
        id:newID ,
        name,
        age ,
    }

    users.push(newUser);

    return users 
}


function getNewID () {
    
    usersIDs()
    
    let existIDInUsersOrNot = 1 ;
    let newID = 0 ;
    while(existIDInUsersOrNot !== -1 && existIDInUsersOrNot){
        newID = Math.floor(Math.random()*100) ;
        existIDInUsersOrNot = ides.findIndex(el=>el===newID)
    }
    return newID
}




userRegister("aaaa",111)
userRegister("bbbb",222)
userRegister("cccc",333)
userRegister()
console.log(users)



export { isLogin, userRegister}