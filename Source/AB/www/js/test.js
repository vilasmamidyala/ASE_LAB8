 describe('fullName', function() {
    it('Tests the Full name feature of the application', function() {
      var $scope = {};
      var controller = $controller('MainCtrl', { $scope: $scope });
      var firstname = 'vilas';
      var lastname = 'mamidyala';
      expect($scope.fullName(firstname, lastname)).toEqual('vilas mamidyala');   // succeeds
      expect($scope.fullName('vikas' , 'Wis')).toEqual('vilas mamidyala');    // fails
      
    });
  });