angular.module('myApp', [])
    .constant('VERSION', '2.0')
    .run(function(VERSION, $rootScope) { // With run I inject the scope into the rootScope = everywhere
	    $rootScope.version = VERSION;
	})
    .controller('MyCtrl', function($scope) { // With controller I use for logical blocks of code to inject on certain tags
    	// if statement that changes the array value used based upon the 
    	// value of the model.  The chosenPronouns array will be updated 
        this.check = function (gender){
            if (gender == "male") {
            this.chosenPronouns = ['he', 'him', 'his', 'He'];
            } else {
            this.chosenPronouns = ['she', 'her', 'her', 'She'];
            }  
        }
    });


