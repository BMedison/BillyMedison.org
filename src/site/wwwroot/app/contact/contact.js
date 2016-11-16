(function () {
    'use strict';

    angular
        .module('contact', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactCtrl'
            })
        }])
        .controller('ContactCtrl', contact_controller);

    function contact_controller() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Contact';
        vm.description = 'Contat info';

        activate();

        function activate() { }
    }
})();
