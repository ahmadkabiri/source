


let hourBox = document.querySelector(".hour") ; 

let minuteBox = document.querySelector(".minute") ; 

let secondBox = document.querySelector(".second") ; 




function setTime () {
    let myTime = new Date()

    let hour = myTime.getHours() ;
    let minutes = myTime.getMinutes() ;
    let seconds = myTime.getSeconds() ;

    if(hour<10){
        hour = "0" + hour
    }
    if(minutes<10){
        minutes = "0" + minutes
    }
    if(seconds<10){
        seconds = "0" + seconds
    }



    hourBox.innerHTML= hour ;

    minuteBox.innerHTML = minutes ; 

    secondBox.innerText = seconds ;
}




setInterval(setTime,1000)








