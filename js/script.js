
const mainNav = document.getElementById("mainNav")

const logoImg = document.querySelector("img")

const btnElem = document.querySelector(".btn")



document.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop > 0){
        mainNav.classList.add("bg-black") ;
        mainNav.classList.add("txt-white") ;
        logoImg.style.height = "64px"
    }else{
        mainNav.classList.remove("bg-black") ;
        mainNav.classList.remove("txt-white") ;
        logoImg.style.height = "84px"
    }
})


btnElem.addEventListener("click",()=>{
    window.scrollTo(0,0)
})


// btnElem.addEventListener("click",()=>{
//     window.scrollBy(0,100)
// })