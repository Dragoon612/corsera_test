(function () {
    'use strict';
    
    angular.module('LunchChecker', [])//defines the module


.controller('LunchCheckerController', LunchCheckerController);
   
LunchCheckerController.$inject = ['$scope', '$filter']
 function LunchCheckerController ($scope, $filter){
    $scope.checkAmount = function(){// checks to see if there are 0 or more than 3 items

      //if there are no items entered
      if (typeof $scope.lunchList === 'undefined' || $scope.lunchList.length === 0){
        $scope.message = "Please enter selection!";
      }
      else{
        //Execute only if there is something in lunchList
        var list = $scope.lunchList.split(',').length;

        //less than or equal to 3
        if (list <= 3){
          $scope.message = "Enjoy!";
        }
        else{//more than 3
          $scope.message = "Too much!";
        }
      }

    };

 };
  
})();
