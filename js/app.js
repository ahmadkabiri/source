

let wordPromise = new Promise((resolve, reject) => {
    let text = "SabzLearn"

    if (text) {
        resolve(text)
    }else{
        reject(new Error("Text is empty"))
    }

})


wordPromise
.then( response => response.split(""))
.then( response2 => response2.reverse())
.then( response3 => response3.join(""))
.then( response4 => console.log(response4))
.catch( err => console.log(err))

// wordPromise
// .then((response)=>{
//     console.log(response)
//     return response.split("")
// })
// .then((response2)=>{
//     console.log(response2)
//     return response2.reverse()
// })
// .then((response3)=>{
//     console.log(response3)
//     return response3.join("")
// })
// .then((response4)=>{
//     console.log(response4)
// })
// .catch((err)=>{
//     console.log(err)
// })























