(function (){
'use strict'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

//THe controller 
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowCtrl = this;
  narrowCtrl.found = MenuSearchService.getItems();
  narrowCtrl.searchMenuItems = function () {
    if (narrowCtrl.searchTerm === "") {
      MenuSearchService.clear();
    } else {
      MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
      .then(function(result) {
        narrowCtrl.found = result;
      });
    }
  }
//remove the item
  narrowCtrl.removeItem = function(itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}

// the search function
function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundCtrl',
      bindToController: true,
      transclude: true
    };
  
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var foundCtrl = this;
  
    foundCtrl.isNothingFound = function() {
      if (foundCtrl.items.length === 0) {
        return true;
      }
      return false;
    };
  }//seraches david's bistro
  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];

  //serch for the term needed to find
  service.getMatchedMenuItems = function(searchTerm) {
    foundItems.splice(0, foundItems.length);
    if (searchTerm === "") {
      return foundItems;
    }
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")//going to the bistros websites json file for menus
    }).then(function(result) {
      var allItems = result.data.menu_items;
      foundItems.splice(0, foundItems.length);
      for (var index = 0; index < allItems.length; index++) {
        if (allItems[index].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          foundItems.push(allItems[index]);
        }
      }
      return foundItems;
    });
  };

  service.clear = function() {
    foundItems.splice(0, foundItems.length);
  }

  service.removeItem = function(itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

  service.getItems = function() {
    return foundItems;
  };
}

})();