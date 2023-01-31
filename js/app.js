

const $ = document 

const firstName = $.querySelector(".firstname") 
const lastName = $.querySelector(".lastname") 
const password = $.querySelector(".password") 

const form = $.querySelector("#form") 


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let userData = {
        firstname : firstName.value ,
        lastname : lastName.value ,
        password : password.value
    }

    // POST REQUEST 
    fetch('https://backend-project-7e570-default-rtdb.firebaseio.com/false.json',{
        method : 'POST' ,
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(userData)
    })
    .then(res=>{
        console.log(res)
        console.log(res.type)

        clearData()
    })
    .catch(err=>console.log(err))


})

function clearData () {
    firstName.value = '' 
    lastName.value = '' 
    password.value = '' 

}





 