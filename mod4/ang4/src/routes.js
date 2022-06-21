(function() {
    'use strict';

    //accessing index page
    angular.module('MenuApp')
    .config(RoutesConfig);

    //Configures the Routing for the pathways to each state
    RoutesConfig.$inject= ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/'); //will route to homepage if no other route is found

        $stateProvider
        //takes you to homepage
        .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })
        //take you to the category list and get listings
        .state('categoryList', {
            url:'/category-list',
            templateUrl: 'src/menuapp/templates/category-list.template.html',
            controller: 'CategoryListController as catListCtrl',
            resolve: {
                items: ['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories();//returns all categories found
                }]
            }
        })//end state cat list

        //takes in all the items from the categories filters them by category
        .state('items', {
            url: '/items/{category}',
            templateUrl: 'src/menuapp/templates/item.template.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
              items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.category);
              }]
            }
          });//ends item state


    }

})();