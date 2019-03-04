var todos = ["Code"];
window.setTimeout(function () {
    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            newTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }

    console.log("You quit the app.")
}, 500);

function listTodos() {
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
};

function newTodo() {
    var newTodo = prompt("Enter a new todo: ");
    todos.push(newTodo)
    console.log("Added todo");
};

function deleteTodo() {
    var index = prompt("Enter index of to do to delete:");
    todos.splice(index, 1)
    console.log("Deleted todo");;
};