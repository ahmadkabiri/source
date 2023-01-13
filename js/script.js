
const btn = document.querySelector("button")


// function clickHandler () {
//     console.log("clicked")
// }

// btn.addEventListener("click",clickHandler)

function logger (func) {
    func()
}


function logger2 () {
    console.log("Logged 2")
}



logger(logger2)

let numbers = [1,2,3,4,5]

numbers.map(item=>{
    console.log(item)
})





