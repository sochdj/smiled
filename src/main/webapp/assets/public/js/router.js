angular.module('smiled.application')
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'RestangularProvider', 
	         function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider){
	
		var notFoundPath;
		$stateProvider
		.state('login',{
			url: "/login",
			templateUrl: 'assets/public/partials/login.html',
			controller: "loginCtrl",
			controllerAs:"login",
			data: {
				permissions:{
					only: ['anonymous'],
					redirectTo: 'logged.dashboard'
				}
			}
		})
		.state('logged',{
			templateUrl: 'assets/private/partials/template-logged.html',
			abstract: true,
			data: {
				permissions: {
					except: ['anonymous'],
					redirectTo: 'login' 
				}
			}
		})
		.state('logged.dashboard',{
			url: '/',
			views: {
				'content': {
					controller: "loggedCtrl",
					controllerAs: "logged"
				}				
			}
		})
		.state('logged.dashboard.teacher',{
			url: "dashboard",
			views: {
				'content@logged': {
					templateUrl: 'assets/private/partials/dashboardTeacher.html',
					controller: "dashboardCtrl",
					controllerAs: "dashboard"
				}
			}
		})
		.state('logged.dashboard.student',{
			url: "dashboard",
			views: {
				'content@logged': {
					templateUrl: 'assets/private/partials/dashboardStudent.html',
					controller: "dashboardCtrl",
					controllerAs: "dashboard"
				}
			}
		})
		.state('logged.dashboard.admin',{
			url: "dashboard",
			views: {
				'content@logged': {
					templateUrl: 'assets/private/partials/dashboardAdmin.html',
					controller: "dashboardCtrl",
					controllerAs: "dashboard"
				}
			}
		})
		.state('logged.scenario',{
			url: "/scenario/{id}",
			params : {
				id : null
			},
			views: {
				'content' : {
					templateUrl: "assets/private/partials/scenario.html",
					controller: "scenarioCtrl"
				}
			}
			
		})
//		.state('logout',{
//			url: "/login",
//			templateUrl: 'assets/public/partials/login.html',
//			controller: "loginCtrl",			
//			data: {
//				permissions:{
//					except: ['anonymous'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('logged',{
//			url: "/",
//			template: "",
//			controller: "dashboardCtrl",
//			controllerAs: "dashboard",
//			data: {
//				permissions:{
//					except: ['anonymous'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('student',{
//			url: "/",
//			templateUrl: "assets/private/partials/dashboardStudent.html",
//			controller: "dashboardCtrl",
//			controllerAs: "dashboard",
//			data: {
//				permissions:{
//					only: ['user'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('teacher',{
//			url: "/",
//			templateUrl: "assets/private/partials/dashboardTeacher.html",
//			controller: "dashboardCtrl",
//			controllerAs: "dashboard",
//			data: {
//				permissions:{
//					only: ['teacher'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('admin',{
//			url: "/",
//			templateUrl: "assets/private/partials/dashboardAdmin.html",
//			controller: "dashboardCtrl",
//			controllerAs: "dashboard",
//			data: {
//				permissions:{
//					only: ['admin'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('scenario',{
//			url: "/scenario",
//			params : {
//				id : null
//			},
//			templateUrl: "assets/private/partials/scenario.html",
//			controller: "scenarioCtrl",			
//			data: {
//				permissions: {
//					only: ['teacher'],
//					redirectTo: 'logged'
//				}
//			}
//		})
//		.state('personalProfile',{
//			url: "/profile",
//			params : {
//				id : null
//			},
//			templateUrl: "assets/private/partials/personalProfile.html",
//			controller: "personalProfileCtrl",
//			data: {
//				permissions: {
//					except: ['anonymous'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('updateScenario',{
//			url: "/updateScenario",
//			templateUrl: "assets/private/partials/updateScenario.html",
//			controller: "updateScenarioCtrl",
//			controllerAs:"updateScenario",
//			data: {
//				permissions: {
//					except: ['anonymous'],
//					redirectTo: 'logged'
//				}
//			}
//		})
////		.state('createScenario.createScenarioSon',{
////			parent: "createScenario",
////			url: "/createScenarioSon",
////			templateUrl: "assets/private/partials/createScenario.createScenarioSon.html",
////			
////		})
//		.state('expandScenarios',{
//			url: "/expandScenarios",
//			templateUrl: "assets/private/partials/scenariosList.html",
//			controller: "expandCtrl",
//			controllerAs: "expand",
//			data: {
//				permissions: {
//					except: ['anonymous'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('viewStudents',{
//			url: "/viewStudents",
//			templateUrl: "assets/private/partials/studentsList.html",
////			controller: "dashboardCtrl",
////			controllerAs: "scenariosList",
//			data: {
//				permissions: {
//					except: ['anonymous'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('viewColleagues',{
//			url: "/viewColleagues",
//			templateUrl: "assets/private/partials/colleaguesList.html",
////			controller: "dashboardCtrl",
////			controllerAs: "scenariosList",
//			data: {
//				permissions: {
//					except: ['anonymous'],
//					redirectTo: 'login'
//				}
//			}
//		})
//		.state('viewFiles',{
//			url: "/viewFiles",
//			templateUrl: "assets/private/partials/filesList.html",
////			controller: "dashboardCtrl",
////			controllerAs: "scenariosList",
//			data: {
//				permissions: {
//					except: ['anonymous'],
//					redirectTo: 'login'
//				}
//			}
//		})
		.state('notFound',{
			url: '/404',
			templateUrl: "assets/public/partials/404.html"
		});
		
		$urlRouterProvider.otherwise(function($injector,$location){
			var state = $injector.get('$state');
			 state.go('login');
		});
	

		$locationProvider.html5Mode(true);
	
	
		RestangularProvider.setBaseUrl('/ThesisProject/api/v1');
		RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
	}])
	.run(function (Permission,userService, $q) {
    	  console.log("Run application");
    	  Permission.defineRole('anonymous',function(stateParams){
    		  console.log("check anonymous");
    		  var deferred = $q.defer();
    		  userService.getUser().then(
    				  function(data){
    					  deferred.reject();
    				  },
    				  function(reason){
    					  deferred.resolve();
    				  }
    		  );
    		  return deferred.promise;

    	  });
    	  Permission.defineRole('user',function(stateParams){
    		  console.log("check user");
    		  var deferred = $q.defer();
    		  userService.getUser().then(
    				  function(data){
    					  if(data.role.authority=="ROLE_USER")
    						  deferred.resolve();
    					  else
    						  deferred.reject();
    				  },
    				  function(reason){
    					  deferred.reject();
    				  }
    		  );
    		  return deferred.promise;    			
    	  });
    	  Permission.defineRole('teacher',function(stateParams){
    		  console.log("check teacher");
    		  var deferred = $q.defer();
    		  userService.getUser().then(
    				  function(data){
    					  if(data.role.authority=="ROLE_TEACHER")
    						  deferred.resolve();
    					  else
    						  deferred.reject();
    				  },
    				  function(reason){
    					  deferred.reject();
    				  }
    		  );
    		  return deferred.promise; 
    	  });
    	  Permission.defineRole('admin',function(stateParams){
    		  console.log("check admin");
    		  var deferred = $q.defer();
    		  userService.getUser().then(
    				  function(data){
    					  if(data.role.authority=="ROLE_ADMIN")
    						  deferred.resolve();
    					  else
    						  deferred.reject();
    				  },
    				  function(reason){
    					  deferred.reject();
    				  }
    		  );
    		  return deferred.promise; 
    	  });		
    	 
      });                                

	
