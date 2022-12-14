
const $ = document ;

let inputElem = $.querySelector("input") ;

let btnElem = [...$.querySelectorAll(".btn")] ;

console.log(btnElem)

let btnsElem = [...$.querySelectorAll(".btns")] ;

let container = $.querySelector(".container")


// function makeNote (event) {
// console.log(event) ;

// if(event.keyCode === 13 && inputElem.value!==""){

//     let taskWords = inputElem.value ;

//     let div = $.createElement("div") ;
//     console.log(div)

//     div.className = "task" ;
//     let p = $.createElement("p") ;

//     // div.style.backgroundColor= inputColor ;

//     p.innerHTML = taskWords ;

//     div.append(p) ;
//     container.append(div) ;

//     inputElem.value = ""; 
//     inputElem.style.backgroundColor = "#f2f3f5" ;
// }else{
// //     inputElem.style.backgroundColor = "#f2f3f5" ;

// }
// }




// inputElem.addEventListener("keydown", makeNote) ;


let inputColor ;

btnElem.forEach(el=>{
    el.addEventListener("click",(event)=>{
        inputColor = event.target.classList[1]
        console.log(inputColor) ;
        inputElem.style.backgroundColor = inputColor ;
        inputElem.addEventListener("keydown", (event)=>{
            console.log(event) ;

if(event.keyCode === 13 && inputElem.value!==""){

    let taskWords = inputElem.value ;

    let div = $.createElement("div") ;
    console.log(div)

    div.className = "task" ;
    let p = $.createElement("p") ;

    div.style.backgroundColor = inputColor ;
    // div.style.backgroundColor= inputColor ;

    p.innerHTML = taskWords ;

    div.append(p) ;
    container.append(div) ;

    inputElem.value = ""; 
    inputElem.style.backgroundColor = "#f2f3f5" ;

    p.addEventListener("click",event=>{
        event.target.parentElement.remove()
    })
}else{
//     inputElem.style.backgroundColor = "#f2f3f5" ;

}
        }) ;
        btnsElem[1].addEventListener("click",event=>{
            if(inputElem.value!==""){
                let taskWords = inputElem.value ;

                let div = $.createElement("div") ;
                console.log(div)
            
                div.className = "task" ;
                let p = $.createElement("p") ;
            
                div.style.backgroundColor = inputColor ;
                // div.style.backgroundColor= inputColor ;
            
                p.innerHTML = taskWords ;
            
                div.append(p) ;
                container.append(div) ;
            
                inputElem.value = ""; 
                inputElem.style.backgroundColor = "#f2f3f5" ;
            }
        })
    })
})


console.log(btnsElem)

btnsElem[0].addEventListener("click",event=>{
    inputElem.value = "" ;
    inputElem.style.backgroundColor = "#fff"
})