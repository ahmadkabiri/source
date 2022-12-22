let changeThemeBtns = [...document.querySelectorAll(".theme")]

function changeThemeHandler (event) {
    let themeColor = event.target.dataset.color ;
    document.documentElement.style.setProperty("--test-color",themeColor)
    localStorage.setItem("color",themeColor);
}

function setFirstColor () {
    let firstTheme = localStorage.getItem("color")
    document.documentElement.style.setProperty("--test-color",firstTheme)

}

changeThemeBtns.forEach(el=>{
    el.addEventListener("click",changeThemeHandler)
})

window.addEventListener("load",setFirstColor)