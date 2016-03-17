 var app = angular.module('ArrayExample', []);

app.controller('myController', function($scope) {
    $scope.names = [
        {firstname:'Santhosh',   lastname:'Murari' , country:'India', vegetarian:'YES'},
        {firstname:'Vilas',      lastname:'Mamidyala' ,           country:'India', vegetarian:'NO'},
        {firstname:'Dinesh', lastname:'Bandam',        country:'India', vegetarian:'NO'},
        {firstname:'Ranjitha',      lastname:'Bhumi',           country:'India', vegetarian:'NO'},
        {firstname:'Prasanna',   lastname:'Muppidi' , country:'India', vegetarian:'NO'},
        {firstname:'Nitesh',      lastname:'Goyal' ,      country:'USA', vegetarian:'YES'}
    ];
        
        $scope.fullName= function(first, last) {
            return first + " " + last;
        }
        $scope.CName= function(cname) {
            return cname;
        }
		$scope.VegCheck= function(veg) {
            return veg;
        }
    });
        