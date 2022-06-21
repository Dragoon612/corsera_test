(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    //defines the items that will be pulled up
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
      var itemsCtrl = this;
      itemsCtrl.items = items;
    }
    
    })();
    