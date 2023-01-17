

// // for (let userProb of user) {
    // //     // Codes ...
    // // }
    
    // // console.log(user)
    
    
    // let  mapUser = new Map() 
    
    // mapUser.set("id",1)
    // mapUser.set("firstName","Qadir")
    // mapUser.set("lastName","Yolme")
    // mapUser.set("age",20)
    
    // mapUser.delete("age")
    
    // console.log(mapUser.get("id"))
    
    // console.log(mapUser)
    // console.log(mapUser.size)
    // console.log(mapUser.has('firstName'))
    
    
    // mapUser.forEach((value ,key)=>{
        //     console.log(key+ "=>" + value )
        // })
        
        
        
        
        
        let user = {
            id : 1 ,
            firstName : "Qadir" ,
            lastName : "Yolme" ,
            age : 20 
        }


let userMap = new Map (Object.entries(user))


let userObj = Object.fromEntries(userMap)






console.log(user)

console.log(userMap)





