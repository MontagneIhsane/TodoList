let todoList =document.getElementById("todo-list");

document
.getElementById("button-add-todo")
.addEventListener("click", function() {
    const uniqueId = Math.random().toString(36).slice(2, 12);
    let todoInput = document.getElementById("todo-text-input");

        todoList.innerHTML += 
        `<li class="todo-card">
            <div class="flex-row">
                <input type="checkbox" id="checkbox">
                <span>${todoInput.value}</span>
                <button>Delete</button>
            </div>
        </li>`;
    });

    const checkbox = document.querySelectorAll('[id^="checkbox-"]');
    checkbox.forEach(function(checkbox) {
        checkbox.addEventListener("checked", function() {
            checkbox.parentElement.style.textDecoration = checkbox.checkVisibility
        });
    });

    const clearbutton = document.getElementById("clear-button");
    clearbutton.addEventListener("click", function() {
        todoList.innerHTML = "";
    });

    
class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    showTask(task) {
        alert(task.description)
    }

    update (newDescription){
        this.description = newDescription;
    }
}
    
let taskHakunamatata = new Task ("Hakunamatata to the life");
console.log(taskHakunamatata);
task.complete (); 
console.log(taskHakunamatata);
taskHakunamatata.update (NouvelleTask);
console.log(taskHakunamatata);