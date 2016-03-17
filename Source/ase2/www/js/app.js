angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })
	  .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
  
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          //templateUrl:'http://localhost:8080/AssignmentLab6/conversion/hconvert',
		  templateUrl: 'templates/home.html',
          controller: 'HomeTabCtrl'
        }
      }
    });
    

   $urlRouterProvider.otherwise('/sign-in');

})

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tabs.home');
  };
  
})
/*
.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
*/

.controller('HomeTabCtrl', function($scope, $http) {
$http.get('http://localhost:8080/AssignmentLab6/conversion/hconvert').then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
});


