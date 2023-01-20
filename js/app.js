import * as datas from "./script.js"

const inputElem = document.querySelector(".input")

let bookContainerElem = document.querySelector(".book-container")

let promisedList ='' ;
let list = '' ;
inputElem.addEventListener("keyup",(event)=>{
    list = '' ;
    bookContainerElem.innerHTML = '' ;
    let existBooks = []

    if(inputElem.value){
        let searchedWords = event.target.value
         existBooks = datas.books.filter(book=>{
            return book.name.includes(searchedWords)
        })
    }


    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            existBooks.forEach(item=>{
                list += `<div class="book">
                <p>${item.name}</p>
              </div>`
            })
            if(list){
                resolve()
            }else{
                reject()
            }
        },3000)

    }).then(()=>{
        bookContainerElem.insertAdjacentHTML("beforeend",list)
    })
    .catch(()=>{
        console.log("chizi nist")
    })

    bookContainerElem.insertAdjacentHTML("beforeend",list)


})


// console.log(datas.books)




