(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoryListController', CategoryListController);
    
    //creating the category list
    CategoryListController.$inject = ['items'];
    function CategoryListController(items) {
      var catListCtrl = this;
      catListCtrl.items = items;
    }
    
    })();