
const $ = document ;

let inputElem = $.querySelector("input") ;

let addBtn = $.querySelector(".add") ;

let clearBtn = $.querySelector(".clear") ; 

let todos = $.querySelector(".todos") ; 




let todoList = [
    {content:"going to gym" , isCompleted : "false" , id : 0}
]


let i = 1 ;

function makeTodo (event) {
    // console.log(event)
    if(event.keyCode === 13 || event.type === "click" ){
        if(inputElem.value){
            makeTodo2()
        }
    }
}




function makeTodo1 (todo) {
    // console.log(todo.content)
    let newTodoValue = todo.content ;
    let newTodoDiv = $.createElement("div");
    newTodoDiv.classList += "todo" ;
    let newTodoContentContainer = $.createElement("div");
    newTodoContentContainer.classList.add("todo-content-container") ;
    let newPElem = $.createElement("p");
    newPElem.classList.add("todo-content") ;
    newPElem.innerHTML = `${newTodoValue}`
    newTodoContentContainer.append(newPElem) ;
    newTodoDiv.append(newTodoContentContainer)
  let todoBtnsDiv = document.createElement("div");
  todoBtnsDiv.classList.add("todo-btns")

  let completeButton =$.createElement("button") ;
  completeButton.classList += "btns complete" ;
  completeButton.innerHTML = "Complete";


  let isComplete  ;
  
  let ourTodos = JSON.parse(localStorage.getItem("todolist"))
  if(todo.isCompleted){
    
    newPElem.style.textDecorationLine = "line-through";
    newPElem.style.color = "gray";
    completeButton.innerHTML = "Completed"
    isComplete = true ;
    ourTodos.forEach(el=>{
        if(el.content===newTodoValue){
            el.isCompleted = true ;
            localStorage.setItem("todolist",JSON.stringify(ourTodos))
        }
    })
  }

  completeButton.addEventListener("click",()=>{

    if(isComplete){
        newPElem.style.textDecorationLine = "none";
        newPElem.style.color = "black";
        completeButton.innerHTML = "Complete"
        isComplete = false ;
        ourTodos.forEach(el=>{
            if(el.content===newTodoValue){
                el.isCompleted = false ;
                localStorage.setItem("todolist",JSON.stringify(ourTodos))
            }
        })
    }else{
        newPElem.style.textDecorationLine = "line-through";
        newPElem.style.color = "gray";
        completeButton.innerHTML = "Completed"
        isComplete = true ;
        ourTodos.forEach(el=>{
            if(el.content===newTodoValue){
                el.isCompleted = true ;
                localStorage.setItem("todolist",JSON.stringify(ourTodos))
            }
        })
    }
  });
// completeButton.addEventListener("click",completeTodo(newPElem))
  let deleteButton =$.createElement("button") ;
  deleteButton.classList += "btns delete" ;
  deleteButton.innerHTML = "Delete" ;
  deleteButton.addEventListener("click",()=>{
    let ourTodos = JSON.parse(localStorage.getItem("todolist"));
    let todoIndex = ourTodos.findIndex(el=>{
        return el.content===newTodoValue ;
    })
    console.log(todoIndex)
    ourTodos.splice(todoIndex,1)
    localStorage.setItem("todolist",JSON.stringify(ourTodos));
    console.log(ourTodos)
    newTodoContentContainer.parentElement.remove();
  })
  todoBtnsDiv.append(completeButton,deleteButton);
  newTodoDiv.append(todoBtnsDiv);
  todos.append(newTodoDiv);
  todos.setAttribute("id",i);
  i++ ;
  inputElem.value = "" ;
}


function makeTodo2 () {
    
            // send todos to local storage

            let todo = {content:`${inputElem.value}` , isCompleted : false , id : i};
            todoList.push(todo) ;
            localStorage.setItem("todolist",JSON.stringify(todoList));

            // make todo 
            makeTodo1(todo);
}






function toggleComplete () {
    
}



function clearTodos () {
    todos.innerHTML="" ;
    localStorage.clear()
}



function makeFirstTodos () {
    let startingTodoList = JSON.parse(localStorage.getItem("todolist"));
    startingTodoList.forEach(el=>{
        makeTodo1(el)
    })

}



window.addEventListener("load",makeFirstTodos)


inputElem.addEventListener("keydown",makeTodo)

addBtn.addEventListener("click",makeTodo)

clearBtn.addEventListener("click",clearTodos)