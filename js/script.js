(function() {

  var app = angular.module('githubViewer', []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(error) {
      $scope.error = 'Could not fetch user data';
    };

    $scope.message = 'Hey Joshua!';

    $http.get('https://api.github.com/users/konekoya')
      .then(onUserComplete, onError);

  };

  app.controller('MainController', ['$scope', '$http', MainController]);

}());

