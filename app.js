var app = angular.module('routingApp', ['ngRoute'])


app.config(function($routeProvider){
  console.log($routeProvider)
  $routeProvider.
  when('/', {
    templateUrl: 'partials/hearthstone.html',
    controller: 'GamesController'
  })
})

app.controller('GamesController', function($scope){
  $scope.favoriteGame = "Hearthstone"
})
