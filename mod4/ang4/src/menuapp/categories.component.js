(function() {
    'use strict';
//filters the category from the JSON 
    angular.module('MenuApp')
    .component('categories',{
        templateUrl: 'src/menuapp/templates/categories.component.template.html',
        bindings:{
            items: '<'
        }
    });

})();