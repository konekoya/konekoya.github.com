'use strict';

(function () {
  'use strict';

  var app = angular.module('githubViewer', []);

  var MainController = function MainController($scope, $http) {

    var onUserComplete = function onUserComplete(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(onRepos, onError);
    };

    var onRepos = function onRepos(response) {
      $scope.repos = response.data;
    };

    var onError = function onError(error) {
      $scope.error = 'Could not fetch the data.';
    };

    $http.get('https://api.github.com/users/konekoya').then(onUserComplete, onError);

    $scope.message = 'Hey Joshua!';
    $scope.repoSortOrder = '-stargazers_count';
  };

  app.controller('MainController', ['$scope', '$http', MainController]);
})();