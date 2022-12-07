
const liItems = document.getElementsByClassName("list-item");

let liItemsArray = [...liItems]
liItemsArray.forEach((li)=>{
    li.addEventListener("click",(event)=>{
        console.log(event.target.parentElement.remove())
    })
})




