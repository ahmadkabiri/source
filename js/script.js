

let addAnimationBtn = document.querySelector("button")
let divElem = document.querySelector("div")
let pElem = document.querySelector("p")






function setAnimation () {
    // console.log(divElem)
divElem.style.animation = "move 1s 3"
}

function animationStartHandler () {
    console.log("Aniamtion Start")
    pElem.innerHTML = "Aniamtion Start" ;
    
}

function animationrepeatHandler () {
    console.log("Aniamtion repeat")
    pElem.innerHTML = "Aniamtion repeat" ;
    
}

function animationEndHandler () {
    console.log("Aniamtion End")
    pElem.innerHTML = "Aniamtion End" ;
    
}



addAnimationBtn.addEventListener("click",setAnimation)


divElem.addEventListener("animationstart",animationStartHandler)
divElem.addEventListener("animationiteration",animationrepeatHandler)
divElem.addEventListener("animationend",animationEndHandler)













