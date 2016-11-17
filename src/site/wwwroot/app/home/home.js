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
        vm.title = 'About DI';
        vm.description = 'Last article is about dependency injection in C#.';

        $('.blue.item').removeClass('active')
        $('a#home_mnu.blue.item').addClass('active');

        activate();

        function activate() { }
    }
})();
