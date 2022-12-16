
const $ = document ;

const imgElem = [...$.querySelectorAll("img")] ;

const dropDiv = $.querySelector(".drop") ;
console.log(dropDiv)
// console.log(imgElem)


imgElem.forEach(el=>{
    el.addEventListener("dragstart",(event)=>{
        event.dataTransfer.setData("elemId",event.target.id)

    })

})



dropDiv.addEventListener("drop",(event)=>{
    // console.log("droped")
    let tergetId = event.dataTransfer.getData('elemId') ;
    let targetElem = document.getElementById(tergetId)
    // console.log(targetElem)
    event.target.append(targetElem)
})

dropDiv.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
















