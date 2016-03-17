describe('myController', function () {
  beforeEach(module('ArrayExample'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('fullName', function() {
    it('Tests the Full name feature of the application', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      var firstname = 'Vilas';
      var lastname = 'Mamidyala';
	  expect($scope.fullName(firstname,lastname)).toEqual('Vilas Mamidyala');   // succeeds
      expect($scope.fullName('Anudeep' , 'Pandiri')).toEqual('Anudeep Pandiri');    // fails
      
    });
  });
  
});