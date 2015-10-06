var app = angular.module('ZipcodeIonic.controllers', []);


app.controller('LocationCtrl', function($scope, Locations) {
	$scope.weather = Locations.all();

	$scope.$watch(function(){return Locations.all();}, function(newVal, oldVal) {
		if (typeof newVal !== 'undefined') {
        $scope.weather = newVal;
        console.log(newVal);
    }});
	
});

app.controller('LocationDetailCtrl', function($scope, $stateParams, Locations) {
  $scope.locationH = Locations.get($stateParams.locationId);
  $scope.Stars = [];
  for (var x =0; x < $scope.locationH.starRating;x++){
  	$scope.Stars.push(x);
  }
});