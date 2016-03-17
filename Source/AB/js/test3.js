describe('myController', function () {
  beforeEach(module('ArrayExample'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('VegCheck', function() {
    it('Tests the Vegetarian or not for attendee ', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      var veg = 'YES';
      
	  expect($scope.VegCheck(veg)).toEqual('YES');   // succeeds
	  expect($scope.VegCheck('NO')).toEqual('YES'); //Fails     
      
    });
  });
  
});