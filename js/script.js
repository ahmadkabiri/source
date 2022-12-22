

let btnElem = document.querySelector("button")


function changeCssVariable () {

    document.documentElement.style.setProperty("--test-color","green")

    console.log(document.documentElement.style.getPropertyValue("--test-color"))



}



btnElem.addEventListener("click",changeCssVariable)






