
const $ = document ;

const titleElem = $.querySelector(".title")

$.addEventListener("keyup",(event)=>{
    // console.log(event.key) ;

    appendValueToDOM(event)

    let userEventKey = event.key.toUpperCase() ;

    let mainKeyElem = document.getElementById(userEventKey)

    mainKeyElem.classList.add("hit");

    mainKeyElem.addEventListener("animationend",()=>{
        mainKeyElem.classList.remove("hit") ;
    })


    console.log(mainKeyElem)


})



function appendValueToDOM (event) {

    
    if(event.code === "Backspace"){
        titleElem.innerHTML = titleElem.innerHTML.substring(0,titleElem.innerHTML.length - 1)
        return
    }
    
    titleElem.innerHTML += event.key
}




















