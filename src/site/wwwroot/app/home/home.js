﻿//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .controller('home_controller', home_controller);

//    home_controller.$inject = ['$location']; 

//    function home_controller($location) {
//        /* jshint validthis:true */
//        var vm = this;
//        vm.title = 'home_controller';

//        activate();

//        function activate() { }
//    }
//})();

(function () {
    'use strict';

    angular
        .module('home', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl'
            })
        }])
        .controller('HomeCtrl', home_controller);

    function home_controller() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Home Controller';

        activate();

        function activate() { }
    }
})();
