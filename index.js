
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

    const archiveButton = document.createElement("button");
    archiveButton.textContent = "Archiver";
    archiveButton.className = "archive-button"; 
    archiveButton.addEventListener("click", () => {
        const archiveList = document.getElementById("archive-list");
        archiveList.appendChild(listItem); 
        archiveButton.remove(); 
    });

    const toggleArchiveButton = document.getElementById("button-toggle-archives");

    toggleArchiveButton.addEventListener("click", () => {
        const archiveList = document.getElementById("archive-list");
        const isHidden = archiveList.classList.toggle("hidden"); 
        document.getElementById("supprimer-archives").classList.toggle("hidden", isHidden); 
});

    const deleteArchivesButton = document.getElementById("supprimer-archives");

    deleteArchivesButton.addEventListener("click", () => {
        const archiveList = document.getElementById("archive-list");
        archiveList.innerHTML = "";
});

    taskContainer.append(checkbox, taskText, deleteButton,archiveButton);
    listItem.appendChild(taskContainer);
    todoList.appendChild(listItem);

    todoInput.value = "";
});

clearButton.addEventListener("click", () => {
    todoList.innerHTML = "";
});