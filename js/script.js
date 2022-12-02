let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

let usernameMessage = document.querySelector(".username-validation") 
let passwordMessage = document.querySelector(".password-validation")


function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 12 || passwordValue.length < 8) {
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    } else {
        modal.style.background = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline'
    }

    setTimeout(function () {
        modal.style.display = 'none'
    }, 3000)
}


function usernameValidation () {
    console.log(userNameInput.value.input)
    if(userNameInput.value.length < 12){
        usernameMessage.style.display = "block"
        usernameMessage.style.color = "red" ;
        usernameMessage.innerHTML = "از 12 کاراکتر کمتر است"
    }else{
        usernameMessage.style.display = "block"
        usernameMessage.style.color = "green" ;
        usernameMessage.innerHTML = "حالا اوکی شد"
    }
}

function passwordValidation () {
    if(passwordInput.value.length < 8){
        passwordMessage.style.display = "block"
        passwordMessage.style.color = "red" ;
        passwordMessage.innerHTML = "از 8 کاراکتر کمتر است"
    }else{
        passwordMessage.style.display = "block"
        passwordMessage.style.color = "green" ;
        passwordMessage.innerHTML = "حالا اوکی شد"
    }
}
;

