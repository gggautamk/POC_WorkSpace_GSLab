var module = angular.module("demoapp", []);

module.controller("DemoCtrl", DemoCtrl);

function DemoCtrl(){

    this.myList = [
            {name: "Gautam", age: 29},
            {name: "Khushi", age: 28},
            {name: "Dummy", age: 10}
    ]
}