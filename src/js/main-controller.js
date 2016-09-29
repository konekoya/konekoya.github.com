// (function() {
//   'use strict';
//   const app = angular.module('githubViewer', []);

//   const MainController = ($scope, $http) => {

//     const onUserComplete = (response) => {
//       $scope.user = response.data;
//       $http.get($scope.user.repos_url)
//         .then(onRepos, onError);
//     };

//     const onRepos = (response) => {
//       $scope.repos = response.data;
//     };

//     const onError = (error) => {
//       $scope.error = 'Could not fetch the data.';
//     };

//     $http.get('https://api.github.com/users/konekoya')
//       .then(onUserComplete, onError);

//     $scope.message = 'Hey Joshua!';
//     $scope.repoSortOrder = '-stargazers_count';

//   };

//   app.controller('MainController', ['$scope', '$http', MainController]);

// }());
