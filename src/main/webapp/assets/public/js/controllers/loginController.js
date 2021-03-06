angular.module('smiled.application').controller('loginCtrl', ['userService', 'apiService','alertingLogin', '$state',
                                                              function loginCtrl(userService, apiService, alertingLogin, $state){
	
	var self = this;
	self.user = {
		
	};
	
	
	self.register = {};
	/*Opzioni per datepicker*/
	self.dateOptions = {
			dateFormat: 'dd/mm/yy'
			//autosize: true
	};
	
		
	self.login = function(){
		
		if(self.user.email==null || self.user.email==""){
			alertingLogin.addWarning("Inserire email");
			self.user.password ="";
		
		}
		else if(self.user.password==null || self.user.password==""){
			alertingLogin.addWarning("Inserire password");
			
		}
		else if(!validateEmail(self.user.email)){
			alertingLogin.addWarning("Email non valida!");
			self.user.password ="";
		}
		else if(self.user.password.length<8){
			alertingLogin.addWarning("Password troppo corta!");
			self.user.password ="";
		}
		else{
			userService.login(self.user.email, self.user.password).then(
					function(data){
						$state.go('logged.dashboard');
					},
					function(reason){
						alertingLogin.addDanger("Attenzione credenziali errate!");
						self.user.password ="";
						self.user.email ="";
					});
			
			
		}
	}
	var validateEmail = function (email) {
	    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{1,6}(?:\.[a-z]{1})?)$/i;
	    return re.test(email);
	}



	
}]);