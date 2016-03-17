describe('myController', function () {
  beforeEach(module('ArrayExample'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('CName', function() {
    it('Tests the Country of the attendee', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      var cname = 'India';
      
	  //expect($scope.CName(cname)).toEqual('India');   // succeeds
	  expect($scope.CName('USA')).toEqual('India');   // fails
      
      
    });
  });
  
});