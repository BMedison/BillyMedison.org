(function () {
    'use strict';

    angular
        .module('app')
        .controller('home_controller', home_controller);

    home_controller.$inject = ['$location']; 

    function home_controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'home_controller';

        activate();

        function activate() { }
    }
})();
