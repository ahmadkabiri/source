
const userLogin = (username,password,callback)=>{
    setTimeout(() => {
        callback({
            username,
            password,
            email : "amin@gmail.com"
            })
    },4000);
}

const userCourses = (username,callback) => {
    setTimeout(() => {
        callback([
            {id:21 , title:"js export" , price:"free"} ,
            {id:34 , title:"redux" , price:"free"} ,

        ])
    },3000)
}

const mainVideoInfo = (courseTitle,callback)=>{
    setTimeout(()=>{
        callback({
            id:34 ,
            title:"redux expert" ,
            price : "free" ,
            teacher : "saeedi" ,
            student:2091 
        })
    },3000)
}



console.log("سایت برای کاربر لود شد")



const loginInfos = userLogin("amin_saeedi","0101",(userObject)=>{

    console.log("کاربر لاگین شد" , userObject )
    userCourses(userObject.username , (userAllCourses)=>{
        console.log("user COURSES: " , userAllCourses)
        mainVideoInfo(userAllCourses[1].title,(mainInfos)=>{
            console.log("Main course Infos :",mainInfos)
        })
    })
}) 



console.log("کاربر با موفقیت لاگین شد")































