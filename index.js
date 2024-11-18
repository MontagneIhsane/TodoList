document
    .getElementById("button-add-todo")
    .addEventListener("click", function() {
        let todoInput = document.getElementById("todo-text-input");
        todoList.innerHTML += `<li>${todoInput.value}</li>`;


        //console.log("click");
    });

    let todoList =document.getElementById("todo-list");

    

    //todoList.innerHTML += "<li>Une Todo !</li>";
    //todoList.innerHTML += "<li>Une  autre Todo youpi.... !</li>";
    //todoList.innerHTML += "<li>Une  autre Todo side eyes ... !</li>";


    const clearbutton = document.getElementById("clear-button");
    clearbutton.addEventListener("click", function() {
        todoList.innerHTML = "";
    });