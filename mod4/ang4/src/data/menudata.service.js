(function() {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject=['$http','ApiBasePath'];
    function MenuDataService($http, ApiBasePath){

        var service = this;

        //getting all the categories information
        service.getAllCategories= function(){
            return $http({
                method: "GET",
                url:(ApiBasePath + "/categories.json")
            })
            .then(function(response){
                return response.data;
            });
        };

        //getting all the information on the items in each category and filtering them by their short names
        service.getItemsForCategory = function(categoryShortName){
            return $http({
                method: "GET",
                url:(ApiBasePath + "/menu_items.json"),
                params:{
                    category: categoryShortName
                }
            })
            .then(function(response){
                return response.data;
            });
        }
    }

})();