(function () {
    'use strict';

    angular.module('app', [
        // Angular modules 
        'ngRoute',
        'home',
        //'about',
        'contact'

        // Custom modules 

        // 3rd Party Modules

    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/home' });
    }]);
})();
