
function addNewBook (callbackFunc) {
    // Codes callbackFunc
}



// Higer Order Function توابع بالامرتبه

function hofExp () {

    return function () {
        console.log("I am an inner Function :)")
    }
}


// hofExp()()

let hofInner = hofExp() ;

hofInner()




