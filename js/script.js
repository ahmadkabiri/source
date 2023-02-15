

// ************** Functional Programing ****************

// some of element are constant we call them

// const $ = document ;

// let inputElem = $.querySelector("input") ;

// let addBtn = $.querySelector("#addButton") ;
// let clearBtn = $.querySelector("#clearButton") ;

// let todoContainer = $.querySelector("#todoList") ;

// function saveToLocalStorage (todos) {
//     localStorage.setItem("todos",JSON.stringify(todos)) ;
// }

// let i = 0 ;

// function loadTodos () {
//     todos = JSON.parse(localStorage.getItem("todos")) || [] ;
//     i = todos.length + 1
//     makeTodosLi(todos)
    
// }

// function makeTodosLi(todos) {
//     todoContainer.innerHTML = "" ;
//     todos.forEach(todo=>{
//         let liElem = document.createElement("li") ;
//         liElem.className =  "completed well" ;
        
        
//         let labelElem = document.createElement("label") ;
//         labelElem.classList += todo.isComplete ? "todo-completed" : "" ;
//         labelElem.innerHTML = todo.item ;
        
//         let completeBtn = document.createElement("button") ;
//         completeBtn.className = "btn btn-success"
//         completeBtn.innerHTML = todo.isComplete ? "Completed" : "Complete"
        

        
//         completeBtn.addEventListener("click",(event)=>{
//             let result = labelElem.classList.toggle("todo-completed")
//             if(result){
//                 completeBtn.innerHTML = "Completed"
//                 todo.isComplete = true ;
//             }else{
//                 completeBtn.innerHTML = "Complete"
//                 todo.isComplete = false ;
//             }
//             saveToLocalStorage(todos)
            
            
//         })
        
        
//         let removeBtn = document.createElement("button") ;
//         removeBtn.className = "btn btn-danger"
//         removeBtn.innerHTML = "Remove"
        
//         removeBtn.addEventListener("click",(event) => {
//             event.target.parentElement.remove()
//             removeFromStorage(labelElem.innerHTML)
//         })
        
//         liElem.append(labelElem,completeBtn,removeBtn) ;
        
//         todoContainer.append(liElem)
        
//     })
    
// }


// function addTodo (event) {
//     console.log(event)
//     if((inputElem.value.trim() && event.keyCode == 13) || (inputElem.value.trim() && event.type === "click" )  ){
//         let item = {
//             item: inputElem.value ,
//             isComplete : false ,
//             id : i , 
//         }
//         i++ ;
//         todos.push(item)
//         inputElem.value = '' ;
//     }
//     makeTodosLi(todos) ;
//     saveToLocalStorage(todos) ;
    
// }

// function clearTodoContainer () {
//     todoContainer.innerHTML = '' 
//     todos = [];
//     saveToLocalStorage(todos)
// }

// function removeFromStorage (eleman) {
//     let index =  todos.findIndex((todo) => {
//         return todo.item === eleman
//     })
//     todos.splice(index,1)
//     saveToLocalStorage(todos)
// }




// inputElem.addEventListener("keyup",addTodo)

// addBtn.addEventListener("click",addTodo)

// clearBtn.addEventListener("click",clearTodoContainer)


// window.addEventListener("load",loadTodos)



//*************** END OF FUNCTIONAL PROGRAMING ******************/


//*************** OBJECT ORIENTED PROGRAMING */



class Todo {
    constructor(item){
        this.item = item ;
        this.isComplete = false ;
    }
}



class TodoList {

    constructor (todosContainer) {
        this.todosContainer = todosContainer ;
        this.todos = JSON.parse(localStorage.getItem("todos")) || [] ;
        this.todoInput = document.querySelector("input") ;

        this.addBtn = document.querySelector("#addButton") ;
        this.clearBtn = document.querySelector("#clearButton") ;

        this.render()
    }

    render () {
        this.todosContainer.innerHTML = "" ;
        
        this.addBtn.addEventListener("click", ()=>{
            this.addNewTodo(this.todoInput.value)
        })
        


        this.clearBtn.addEventListener("click", ()=>{
            this.clearTodos()
        })
        
        
        this.addTodosToDOM()
        this.saveToLocalStorage()

        
    }
    
    addTodosToDOM () {

        this.todosContainer.innerHTML = "" ;

        this.todos.forEach((todo,todoIndex) => {
            let li = document.createElement("li") ;
            li.className = "completed well" ;

            let todoTitleElem = document.createElement("label") ;
            todoTitleElem.innerHTML = todo.item ;
            todo.isComplete ? todoTitleElem.classList.add("todo-completed") : null ;

            let completeBtn = document.createElement("button")
            completeBtn.className = "btn btn-success"
            completeBtn.innerHTML = "Complete"

            completeBtn.addEventListener("click",(event) => {
                event.target.previousSibling.classList.toggle("todo-completed") 

                todo.isComplete = !todo.isComplete
                this.saveToLocalStorage()
                this.addTodosToDOM()

            })


            let removeBtn = document.createElement("button")
            removeBtn.className = "btn btn-danger"
            removeBtn.innerHTML = "Remove"

            removeBtn.addEventListener("click",event => {
                event.target.parentElement.remove()

                 let mainTodoIndex = this.todos.findIndex((index) => {
                    return index === todoIndex
                 })
                 this.todos.splice(mainTodoIndex,1)
                 this.saveToLocalStorage ;
                 this.addTodosToDOM
            })

            li.append(todoTitleElem,completeBtn,removeBtn) ;

            this.todosContainer.append(li)

        })
    }

    saveToLocalStorage () {
        localStorage.setItem("todos",JSON.stringify(this.todos)) ;
    }

    addNewTodo (newTodoTitle) {
        if(newTodoTitle){
            this.todos.push(new Todo(newTodoTitle))

            this.addTodosToDOM()
            this.saveToLocalStorage()

            this.todoInput.value = ""

        }

    }

    clearTodos () {
        this.todos = [] 
        this.saveToLocalStorage()
        this.render()
    }

}




new TodoList(document.querySelector("#todoList"))







