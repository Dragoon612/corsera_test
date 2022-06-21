(function() {
    'use strict';

    //filters the items from each category found
    angular.module('MenuApp')
    .component('items', {
    templateUrl: 'src/menuapp/templates/item.component.template.html',
        bindings: {
            items: '<'
  }
});

})();