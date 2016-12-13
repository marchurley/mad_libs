angular.module('myApp', [])
    .constant('VERSION', '2.0')
    .run(function(VERSION, $rootScope) { // With run I inject the scope into the rootScope = everywhere
    $rootScope.version = VERSION;
	})
    .controller('MyCtrl', function($scope) { // With controller I use for logical blocks of code to inject on certain tags
        this.gender = ['he', 'him', 'his', 'He'];
    }); // ; only after the chaining is finished. No ; before that