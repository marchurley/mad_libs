angular.module('myApp', [])
    .constant('VERSION', 1.1)
    .constant('VERSION2', 2.1)
    .run(function(VERSION, $rootScope) { // With run I inject the scope into the rootScope = everywhere
    $rootScope.version = VERSION;
	})
    .controller('MyCtrl', function(VERSION2, $scope) { // With controller I use for logical blocks of code to inject on certain tags
        $scope.version2 = VERSION2;
    }); // ; only after the chaining is finished. No ; before that