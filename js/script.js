
const userLogin = (username,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                username,
                password,
                email : "amin@gmail.com"
                })
        },4000);
    })
}

const userCourses = (username) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve([
                {id:21 , title:"js export" , price:"free"} ,
                {id:34 , title:"redux" , price:"free"} ,
    
            ])
        },3000)

    })
}

const mainVideoInfo = (courseTitle)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                id:34 ,
                title:"redux expert" ,
                price : "free" ,
                teacher : "saeedi" ,
                student:2091 
            })
        },3000)

    })
}



console.log("سایت برای کاربر لود شد")



// const loginInfos = userLogin("amin_saeedi","0101",(userObject)=>{

//     console.log("کاربر لاگین شد" , userObject )
//     userCourses(userObject.username , (userAllCourses)=>{
//         console.log("user COURSES: " , userAllCourses)
//         mainVideoInfo(userAllCourses[1].title,(mainInfos)=>{
//             console.log("Main course Infos :",mainInfos)
//         })
//     })
// }) 


// userLogin()
//     .then(userObject=>userCourses(userObject.username))
//     .then(userAllCourses => mainVideoInfo(userAllCourses[1].title))
//     .then(mainInfos => console.log(mainInfos))



async function runUserCodes () {

    let userInfos = await userLogin("amin_saeedi",0101)
    let userAllcourses = await userCourses(userInfos.username)
    let mainInfos = await mainVideoInfo(userAllcourses[1].title)
    console.log(mainInfos)

}


runUserCodes()








































