
const btn = document.querySelectorAll("button")



function showDataId (event) {
    console.log(event.target.dataset.name + " is " + event.target.dataset.id )
}




btn.forEach(el=>{
    el.addEventListener("click",showDataId) ;
})