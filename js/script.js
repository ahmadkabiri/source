let customScroll = document.querySelector("#scroll")



window.addEventListener("scroll",()=>{

    let scrollTop = window.scrollY

    let documentHeight = document.body.clientHeight

    let windowHeight = window.innerHeight


    let scrollPercent = scrollTop/(documentHeight-windowHeight)


    let scrollRounded = Math.round(scrollPercent*100)

console.log(`scrollY : ${scrollTop} 
web page height : ${documentHeight}
window height : ${windowHeight}`)

    customScroll.style.width = scrollRounded+"%" ;
})




















