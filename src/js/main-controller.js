(function() {
  'use strict';
  var app = angular.module('githubViewer', []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };

    var onRepos = function(response) {
      $scope.repos = response.data;
    };

    var onError = function(error) {
      $scope.error = 'Could not fetch the data.';
    };

    $http.get('https://api.github.com/users/konekoya')
      .then(onUserComplete, onError);

    $scope.message = 'Hey Joshua!';
    $scope.repoSortOrder = '-stargazers_count';

  };

  app.controller('MainController', ['$scope', '$http', MainController]);

}());
