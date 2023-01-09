
const divElems = document.querySelectorAll("div")

console.table(divElems)

divElems.forEach((div , index)=>{
    div.addEventListener("click",(event)=>{
        console.log("Div"+(index+1))
        // div.style.backgroundColor="red" => This coding method causes bubbling
        event.target.style.backgroundColor = "red" // => This coding method prevents bubbling
    })
})











