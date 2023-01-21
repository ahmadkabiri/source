import * as datas from "./script.js"

// const inputElem = document.querySelector(".input")

// let bookContainerElem = document.querySelector(".book-container")

// let promisedList ='' ;
// let list = '' ;
// inputElem.addEventListener("keyup",(event)=>{
//     list = '' ;
//     bookContainerElem.innerHTML = '' ;
//     let existBooks = []

//     if(inputElem.value){
//         let searchedWords = event.target.value
//          existBooks = datas.books.filter(book=>{
//             return book.name.includes(searchedWords)
//         })
//     }


//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             existBooks.forEach(item=>{
//                 list += `<div class="book">
//                 <p>${item.name}</p>
//               </div>`
//             })
//             if(list){
//                 resolve()
//             }else{
//                 reject()
//             }
//         },3000)

//     }).then(()=>{
//         bookContainerElem.insertAdjacentHTML("beforeend",list)
//     })
//     .catch(()=>{
//         console.log("chizi nist")
//     })

//     bookContainerElem.insertAdjacentHTML("beforeend",list)


// })


// console.log(datas.books)


/////////////////////////////////////////////////
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



let myPromise = new Promise((Resolved,Rejected) => {  // Reso.. and Reje.. both are callback functions
    const loginFlag = !true ;
    Rejected()
    Resolved()
    setTimeout(()=>{
        console.log("Login Check !")
        // if(loginFlag){
        //     Resolved( "شما می‌توانید وارد پنل کاربری خود شوید")
        // }else{
        //     Rejected(new Error("شما لاگین نکرده‌اید")) // این خیلی مهمه ها که کجا بیای new Error استفاده بکنی
        // }
    },3000)
})

// function success () {
//     console.log("Success :)")
// }

// function error () {
//     console.log("Error :(")

// }

// myPromise.then(success,error)

myPromise
.then((success)=>{
    console.log(success)
}) // then is a handler
.catch((err)=>{
    console.log(err)
})  // catch is a handler
.finally(() => {
    console.log("پرامیس انجام شد")
})
console.log(myPromise)