

// let btnElem = document.querySelector("button")


// function changeCssVariable () {

//     document.documentElement.style.setProperty("--test-color","green")

//     console.log(document.documentElement.style.getPropertyValue("--test-color"))



// }



// btnElem.addEventListener("click",changeCssVariable)


let changeThemeBtns = [...document.querySelectorAll(".theme")]

let btnColor ;

function changeThemeHandler (event) {
     btnColor = event.target.classList[0];
     colorPicer(btnColor)
}

function colorPicer (btnColor) {
    if(btnColor==="blue"){
        document.documentElement.style.setProperty("--test-color","#278dcf")
        localStorage.setItem("color","#278dcf")
     }else if (btnColor==="red"){
        document.documentElement.style.setProperty("--test-color","#f00645")
        localStorage.setItem("color","#f00645")

     }else if (btnColor==="green"){
        document.documentElement.style.setProperty("--test-color","#099f48")
        localStorage.setItem("color","#099f48")
        
     }else if (btnColor==="blueviolet"){
        document.documentElement.style.setProperty("--test-color","#7f329c")
        localStorage.setItem("color","#7f329c")
        
     }else if (btnColor==="yellow"){
        document.documentElement.style.setProperty("--test-color","#e1a521")
        localStorage.setItem("color","#e1a521")
     }
}


function setFirstColor () {
    let firstTheme = localStorage.getItem("color")
    document.documentElement.style.setProperty("--test-color",firstTheme)
}



changeThemeBtns.forEach(el=>{
    el.addEventListener("click",changeThemeHandler)
})


window.addEventListener("load",setFirstColor)