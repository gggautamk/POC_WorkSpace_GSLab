var module = angular.module("todoapp", []);
module.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {

this.editMode = false;
this.todos = [
    "Leran Angular",
    "Try Exercise",
    "Learn Advance"
]

this.addNewTodo = function() {
    this.todos.push(this.newTodo);
    this.newTodo = "";
}

this.triggerEditMode = function() {
    this.editMode = !this.editMode;
}

this.deleteTodo = function(index) {
    this.todos.splice(index, 1);
}

}