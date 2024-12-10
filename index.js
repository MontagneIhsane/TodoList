const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-text-input");
const addButton = document.getElementById("button-add-todo");
const clearButton = document.getElementById("clear-button");

// Ajout d'une tâche
addButton.addEventListener("click", () => {
    if (!todoInput.value.trim()) return;

    const listItem = document.createElement("li");
    listItem.className = "todo-card";

    const taskContainer = document.createElement("div");
    taskContainer.className = "flex-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        listItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const taskText = document.createElement("span");
    taskText.textContent = todoInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
    });

    taskContainer.append(checkbox, taskText, deleteButton);
    listItem.appendChild(taskContainer);
    todoList.appendChild(listItem);

    todoInput.value = "";
});

clearButton.addEventListener("click", () => {
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

    update(newDescription) {
        this.description = newDescription;
    }

    showTask() {
        alert(this.description);
    }
}


