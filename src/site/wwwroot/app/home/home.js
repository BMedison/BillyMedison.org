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

        vm.topics = [
            { url: "https://go.microsoft.com/fwlink/?LinkID=398600", name: "Add a Controller and View" },
            { url: "https://go.microsoft.com/fwlink/?LinkID=699314", name: "Add an appsetting in config and access it in app." },
            { url: "https://go.microsoft.com/fwlink/?LinkId=699315", name: "Manage User Secrets using Secret Manager." },
            { url: "https://go.microsoft.com/fwlink/?LinkId=699316", name: "Use logging to log a message." },
            { url: "https://go.microsoft.com/fwlink/?LinkId=699317", name: "Add packages using NuGet." },
            { url: "https://go.microsoft.com/fwlink/?LinkId=699318", name: "Add client packages using Bower." },
            { url: "https://go.microsoft.com/fwlink/?LinkId=699319", name: "Target development, staging or production environment." }
        ];        

        activate();

        function activate() { }
    }
})();
