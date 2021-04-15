let todoInput = document.querySelector(".form-input");
const todoButton = document.querySelector(".form-submit");
const todoList = document.querySelector(".list")


// adding event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



function addTodo(event) {
    //prevent page from reloading
    event.preventDefault();
    //making a new div
    
    //Checking the input field
    
    
    
    // making a new list 
    const newTodo = document.createElement("li");
    if (todoInput.value === ""){
      alert("You cannot add the empty TASK");
      
    }else{
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      
      newTodo.innerText = todoInput.value;
      newTodo.classList.add('todo-item');
      // append the child into the div 
      todoDiv.appendChild(newTodo);
      
      const completedButton = document.createElement("button");
      completedButton.innerHTML = '<i class="fas fa-check"></i>';
      completedButton.classList.add("completed-btn");
      todoDiv.appendChild(completedButton);
      
      
      const trashButton = document.createElement("button");
      trashButton.innerHTML = "<i class='fas fa-trash'></i>";
      trashButton.classList.add("trashed-btn");
      todoDiv.appendChild(trashButton);
      todoList.appendChild(todoDiv);
      }
      //clear TodoInput value
      todoInput.value = ""
      
    
      

}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trashed-btn') {

        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
        // todo.remove();
    }


    if (item.classList[0] === 'completed-btn' ) {
        const todo = item.parentElement;
        todo.classList.add("completed");
    }else{
      false
    }

}