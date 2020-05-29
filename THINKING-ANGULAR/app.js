var module = angular.module("myapp", ["demoapp"]);
module.controller("MainCtrl", Main);
module.controller("NewCtrl", NewCtrl);
module.controller("NewInnerCtrl", NewInnerCtrl);

function Main($scope){

        console.log("Main Called");
        $scope.onButtonChange = function(){
            $scope.hourOfDay = new Date().getHours().toString();
            $scope.CurrentDate = new Date();
        }
        $scope.onInputChange = function(){
            $scope.inputText = $scope.inputText + 'Added';
        }
}

function NewCtrl(){
    this.tempVal = "NewCtrl";
    }

    function NewInnerCtrl(){
        this.tempVal = "NewInnerCtrl";

}