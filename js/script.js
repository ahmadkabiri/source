
let container = document.querySelector(".container")


function contextMenuHandler (event) {
    event.preventDefault() 
    
    console.log(event)
    
    let pageX = event.pageX ;
    let pageY = event.pageY ;
    
    container.style.display = 'block' ;
    container.style.left = `${pageX}px` ;
    container.style.top = `${pageY}px` ;

}


function clickHandler (event) {
    container.style.display = 'none' ;
    
}

function keydownHandler (event) {
    console.log(event)
     if(event.code==="Escape"){
    container.style.display = 'none' ;
     }
}



