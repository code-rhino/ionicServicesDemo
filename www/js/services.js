angular.module('ZipcodeIonic.services', [])

.factory('Locations', function($http) {
  // Might use a resource here that returns a JSON array
  var weather = {};

  $http({
    method:'GET',
    url:'http://api.openweathermap.org/data/2.5/weather?q=Wilmington,DE'
  }).then(function successCallback(response){
    weather = response.data;

  });


  return {
    all: function() {
      return weather;
    },
    remove: function(index) {
      restaurants.splice(restaurants.indexOf(index), 1);
    },
    get: function(id) {
      for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].id === parseInt(id)) {
          return restaurants[i];
        }
      }
      return null;
    }
  };
});
