

let books = [
    {id: 1, name: "Bi Shouri" , price : 95000},
    {id: 2, name: "Shanameh" , price : 400000},
    {id: 4, name: "Pedar Madar" , price : 70000},
    {id: 5, name: "Khorde Adatha" , price : 71000},
    {id: 6, name: "Chegoone kamalgera nabashim" , price : 72000},
    {id: 7, name: "koori" , price : 73000},
    {id: 8, name: "bidari" , price : 74000},
    {id: 9, name: "asb tariki" , price : 75000},
    {id: 10, name: "bartarie khafif" , price : 76000},
    {id: 11, name: "qooye siah" , price : 77000},
    {id: 12, name: "post dar bazi" , price : 78000},
    {id: 13, name: "padshekan" , price : 79000},
    {id: 14, name: "dobare biandish" , price : 80000},
    {id: 15, name: "sakhtan" , price : 81000},
    {id: 16, name: "namahdood" , price : 82000},
    {id: 17, name: "asb robah moosh" , price : 83000},
    {id: 18, name: "khoob be awli" , price : 84000},
    {id: 19, name: "sib" , price : 85000},
    {id: 20, name: "honare shafaf andishidan" , price : 86000},
    {id: 21, name: "honare khoob zendegi kardan" , price : 87000},
]

// function addBook (name, price) {
//     let newBook = {
//         id : books.length + 1 ,
//         name,
//         price,
//     }
    
//     return new Promise((resolve,reject) => {
//             setTimeout(()=>{
//             books.push(newBook)
//             if(books.push(newBook)){
//                 resolve()
//             }else{
//                 reject()
//             }
//         },2000)
//         })

// }

// addBook('golestan',90_000).then(()=>{
//     console.log(books)
// })


// console.log(addBook())


// Promise = 'قول دادن ' ES6 :)) ()



// let myPromise = new Promise((Resolved,Rejected) => {  // Reso.. and Reje.. both are callback functions
//     const loginFlag = !true ;

//     setTimeout(()=>{
//         console.log("Login Check !")
//         if(loginFlag){
//             Resolved()
//         }else{
//             Rejected()
//         }
//     },3000)
// })

// // function success () {
// //     console.log("Success :)")
// // }

// // function error () {
// //     console.log("Error :(")

// // }

// // myPromise.then(success,error)

// myPromise
// .then(()=>{
//     console.log("Success :))")
// }) // then is a handler
// .catch(()=>{
//     console.log("Error :((")
// })  // catch is a handler


export{books}


