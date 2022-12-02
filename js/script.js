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
    if(userNameInput.value.length < 12){
        usernameMessage.innerHTML = "must contain 12 character (min)"
        usernameMessage.style.color = "red"
        usernameMessage.style.display = "block"
    }else{
        usernameMessage.innerHTML = "Correct username value"
        usernameMessage.style.color = "green"
        usernameMessage.style.display = "block"
    }
}

function passwordValidation () {
    if(passwordInput.value.length < 8){
        passwordMessage.innerHTML = "must contain 8 character (min)"
        passwordMessage.style.color = "red"
        passwordMessage.style.display = "block"
    }else{
        passwordMessage.innerHTML = "Correct password value"
        passwordMessage.style.color = "green"
        passwordMessage.style.display = "block"
    }
    
}



