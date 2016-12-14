angular.module('myApp', [])
    .constant('VERSION', '2.0')
    .run(function(VERSION, $rootScope) { // With run I inject the scope into the rootScope = everywhere
	    $rootScope.version = VERSION;
	})
    .controller('MyCtrl', function($scope) { // With controller I use for logical blocks of code to inject on certain tags
    	// One solution to this is to have the array for each gender mapped to a singular key, and put the key in the radio
    	// radio button HTML
    	$scope.genderHash = {
    		male: [],
    		female: []
    	}
        $scope.gender = ['he', 'him', 'his', 'He'];
    }); // ; only after the chaining is finished. No ; before that