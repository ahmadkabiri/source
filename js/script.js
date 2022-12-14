

let audioElem = document.querySelector("audio") ;




let musicsSrc = [
    "music/Dadashi.mp3" ,
    "music/Ey Sareban.mp3" ,
    "music/mo.mp3" ,
    "music/Sharare.mp3" ,
]

let audioIndex = 0 ;


function previousMusicHandler () {
    audioIndex-- ;
    
    if( audioIndex < 0 ){
        audioIndex = 3 ;
    }

    
    audioElem.setAttribute("src", musicsSrc[audioIndex])
    playMusicHandler()
    console.log(musicsSrc[audioIndex])

}

function playMusicHandler () {
    audioElem.play() ;
    console.log("Music played")

    setInterval(()=>{
        console.log(Math.floor(audioElem.currentTime))
    },1000)

}

function pauseMusicHandler () {
    audioElem.pause()
    console.log("Music paused")

}

function nextMusicHandler () {
    audioIndex++ ;
    
    if( audioIndex > musicsSrc.length-1 ){
        audioIndex = 0 ;
    }

    
    audioElem.setAttribute("src", musicsSrc[audioIndex])
    playMusicHandler()
    console.log(musicsSrc[audioIndex])


}



function musicSpeedHandler () {
    audioElem.playbackRate = 2 ;
    console.log("Speed 2X") ;
}

function timePlusMusicHandler () {
    audioElem.currentTime += 5 ;
}


function timeMinusMusicHandler () {
    audioElem.currentTime -= 5 ;

}








