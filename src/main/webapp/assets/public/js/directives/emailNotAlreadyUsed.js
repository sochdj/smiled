angular.module("smiled.application").directive('emailnotalreadyused', ['$http', '$q', function($http, $q) {
		
	//validator asincrono
	
	
		var processResponse = function(response){
			if(response.data){
				return $q.when(true);
			}
			else{
				return $q.reject(false);
			}
		};
	
		var validateUsername = function(value){
			return $http.get("api/v1/emailValidation=" + encodeURI(value))
				.then(processResponse);
			
		};
	
	
	
        return {
            restrict: "A",
            templateUrl: "assets/public/partials/alerts.html",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel){
            	ngModel.$asyncValidators.username = validateUsername;
            }
            
        };

}]);