
const listItems = document.querySelectorAll('li') ;

const inputElem = document.querySelector("input")

const languageContainer = document.querySelector("ul")



languageContainer.addEventListener("click",(event)=>{
    console.log(event.target)
    if(event.target.tagName ==="LI"){
        event.target.remove()
    }
})


inputElem.addEventListener("keypress",(event)=>{
    if(event.keyCode==13){
        console.log("enter pressed")
        let newLanguageLi = document.createElement("li")
        newLanguageLi.innerHTML = event.target.value ;
        languageContainer.append(newLanguageLi)
        inputElem.value='';
    }
})







