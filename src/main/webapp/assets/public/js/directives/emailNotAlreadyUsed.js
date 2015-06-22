angular.module("smiled.application").directive('emailnotalreadyused', ['$http', '$q', function($http, $q) {
		
	//validator asincrono
	
	
		var processResponseSuccess = function(response){
				return $q.reject(false);
			
		};
		
		var processResonseError = function(reason){
			console.log(reason);
			return $q.when(true);
		}
	
		var validateUsername = function(value){
			return $http.get("api/v1/users/email?email=" + encodeURI(value))
				.then(processResponseSuccess, processResonseError);
			
		};
	
	
	
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel){
            	ngModel.$asyncValidators.username = validateUsername;
            }
            
        };

}]);