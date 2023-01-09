

let inputElem = document.querySelector(".input");
let alarmElem = document.querySelector(".alarm");
let todosUl = document.querySelector(".list");


function addTodo (event) {
    if(!inputElem.value){
        alarmElem.style.opacity= "1"
    }else{
        alarmElem.style.opacity= "0"
        // console.log(event)
        if(event.key==="Enter"){
            // console.log("ok")
            
            let newTodo = inputElem.value ;
            let newLiTag = document.createElement('li') ;
            // console.log(newLiTag);
            newLiTag.className = "list-item";
            let newSpanTag = document.createElement("span") ;
            newSpanTag.innerHTML =  newTodo.trim() ;
            let newITag = document.createElement("i");
            // newITag.addEventListener("click",(event)=>{
            //     event.target.parentElement.remove()
            // })
            // یک نکته که شدیدا باید بهش توجه کنم این هست که وقتی یک آیتم جدید درست میشه و اگر میدونیم قراره یه ایونت بگیره بایستی بعد از ساخته شدنش در خط بعدی این ایونت رو بدیم بهش این مساله خیلی خیلی مهمه
            newITag.className = 'fa fa-trash' ;
            newLiTag.append(newSpanTag,newITag) ;
            console.log(newLiTag) ;
            todosUl.append(newLiTag)
            
            inputElem.value = "" ;

        }
    }
}
// REFACTOR CODES :)))))))
todosUl.addEventListener("click",event=>{
    if(event.target.tagName==="LI")
    event.target.remove()
})

inputElem.addEventListener("keydown",addTodo)

