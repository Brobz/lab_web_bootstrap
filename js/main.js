
// Create a new list item when clicking on the "Add" button
function postTodo() {
    var todoTextBox = document.getElementById("TODOtext");
    var todoContainer = document.getElementById("TODOcontainer");

    var li = document.createElement("li");
    var inputValue = todoTextBox.value + "\t";
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '\t') {
        alert("You must write something!");
        return;
    } else {
        todoContainer.appendChild(li);
    }
    todoTextBox.value = "";

    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox);
}

function markAllTodo(status){
    var todoContainer = document.getElementById("TODOcontainer");

    var children = todoContainer.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        child.children[0].checked = status;
    }
}

function deleteAllTodo(){
    var todoContainer = document.getElementById("TODOcontainer");

    var children = todoContainer.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        child.remove();
        i--;
    }
}