
const mainNav = document.getElementById("mainNav")

const logoImg = document.querySelector("img")


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