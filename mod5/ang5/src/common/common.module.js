(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://rocky-waters-09077.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
