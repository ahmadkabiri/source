
const todoInputElem = document.querySelector(".todo-input")


const todoList = document.querySelector(".todolist")


function trim (val) {
    return val.trim()
}

function toLowerCase (val) {
    return val.toLowerCase()
}

function insertToLi (val) {
    return `<li>${val}</li>`
}

function addTodo (event) {
    if(event.charCode === 13){
        todoList.insertAdjacentHTML("beforeend",insertToLi(toLowerCase(trim(todoInputElem.value))))

        todoInputElem.value = '' ;

    }
}



todoInputElem.addEventListener("keypress",addTodo)