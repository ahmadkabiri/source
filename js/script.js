

let input = document.querySelector(".input");


input.addEventListener("keyup",()=>{
    console.log("Up")
})

input.addEventListener("keypress",()=>{
    console.log("press")
})

input.addEventListener("keydown",()=>{
    console.log("down")
})
