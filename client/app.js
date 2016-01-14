var app = angular.module('app',[]); //First, define angular app as 'app'.

app.controller("IndexController",['$scope','$http',function($scope,$http){ // Hook up controller for how infor will be displayed.
  //define controller as 'IndexController' and include modules needed to communic back & forth wth server.

  $scope.thing = {}; //define one thing object.
  $scope.things = []; //define list (array) of things.

  var fetchThings = function(){ //This function gets thing info from server & db and sets that equal to things.
    return $http.get('/things').then(function(response){
      if(response.status!==200){
        throw new Error("Failed!");
      }
      $scope.thing = {};
      $scope.things = response.data;
      return response.data;
    })
  };

  $scope.add = function(thing){ //Here, info is posted to the server (updates server&db)
    return $http.post('/add',thing).then(fetchThings()); //Chain 'then' on as another fxn to do after posting to server&db.
    //also, this function will run right away (note the parentheses fetchThings()) in case there is any already existing data to grab from db.
  };
  fetchThings();
}]);

//TODO: Still need to write things to db from server. Retrieval of things and getting them to server works at this point.