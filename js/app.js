

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
    fetch('https://backend-project-7e570-default-rtdb.firebaseio.com/users.json',{
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


//////////
///////// marboot be GET
//////////

let userData = null ;







window.addEventListener("load",()=>{
    fetch("https://backend-project-7e570-default-rtdb.firebaseio.com/users.json")
    .then(res=>res.json())
    .then(data => {
        userData = Object.entries(data) 
        userData.forEach(el=>{
            console.log(el)

        })
    }) // ba object.entries mitunim rooye object loop bezanim
    
})


///////////
/////////// MRBOOT BE DELETE
///////////
 



// setTimeout(() => {
    
//     fetch(`https://backend-project-7e570-default-rtdb.firebaseio.com/users/${userData[0][0]}.json`,{
//         method : 'DELETE'
//     }).then(res => console.log(res))

// }, 3000);



const userNewData = {
    firstname : "Ahmad",
    lastname : "Kabiri",
    password : "1a2b3c4d"
}

setTimeout(() => {

fetch(`https://backend-project-7e570-default-rtdb.firebaseio.com/users/${userData[0][0]}.json`,{
    method : "PUT" ,
    headers : {
        "Content-type" : "application/json"
    },
    body : JSON.stringify(userNewData)
})

}, 3000);
















