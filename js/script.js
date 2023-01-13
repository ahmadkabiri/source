
function firstLogs () {
    console.log("1") ;
    console.log("2") ;
}

function middleLog (callBack) {

    setTimeout(()=>{
        console.log("3");
        callBack()
    })
}

function lastLogs () {
    console.log("4") ;
    console.log("5") ;
}

firstLogs()
middleLog(lastLogs)














