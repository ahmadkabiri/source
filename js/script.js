
const $ = document ;

let prevBtn = $.querySelector(".prev") ; 

let nextBtn = $.querySelector(".next") ; 

let imageElem = $.querySelector(".image")



let imagesSrc = [
    {src: "/images/34.jpg"},
    {src: "/images/35.jpg"},
    {src: "/images/37.jpg"}
]

let index = 0 ;

function prevoiusImageHandler () {

    index-- ;
    // console.log(imagesSrc[index].src)
    if(index<0){
        index=imagesSrc.length-1
    }
    imageElem.style.backgroundImage = `url(${imagesSrc[index].src})`


}

function nextImageHandler () {
    index++ ;
    if(index>imagesSrc.length-1){
        index = 0 ;
    }
    imageElem.style.backgroundImage = `url(${imagesSrc[index].src})`

}


setInterval(nextImageHandler,4000)

prevBtn.addEventListener('click',prevoiusImageHandler) ;

nextBtn.addEventListener('click',nextImageHandler) ;