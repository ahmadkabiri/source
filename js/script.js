const $ = document ;

const players = [...$.querySelectorAll(".fa-play")] ;
const audios = [...$.querySelectorAll("audio")] ;

let musicName ;

players.forEach((player)=>{
    console.log(player) ;
    player.addEventListener("click",(event)=>{
        musicName = event.target.dataset.name ;
        audios.forEach((audio)=>{
            if(audio.dataset.name===musicName){
                audio.currentTime=0
                audio.play()
            }else{
                audio.pause()
            }
        })

    })
})

























