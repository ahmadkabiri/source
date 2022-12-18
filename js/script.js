const switchElement = document.querySelector('.switch')




function changeTheme () {
  document.body.classList.toggle("dark")

  if(document.body.className.includes("dark")){
    localStorage.setItem("theme","dark")
    
  }else{
    localStorage.setItem("theme","light")
    
  }
}

function setFirstTheme () {
  let loadedTheme = localStorage.getItem("theme");

  if(loadedTheme === "dark"){
    document.body.classList.add("dark")
  }
}







window.addEventListener("load",setFirstTheme)


switchElement.addEventListener("click",changeTheme)



