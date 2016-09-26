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
'use strict';

var JOSHUA = function ($) {
  'use strict';

  var doc = document;

  function moveToIntro(el) {
    if (typeof el === 'string' && el.length > 0) {
      var trigger = doc.querySelector(el);

      if (trigger) {
        trigger.addEventListener('click', function () {
          $.fn.fullpage.moveTo('intro');
        }, false);
      }
    }
  }

  function init() {
    $('#fullpage').fullpage({
      menu: '#navigation',
      navigation: true,
      navigationTooltips: ['Home sweet home', 'Yep, A lllllittle About Me'],
      css3: true,

      // easing tool - https://matthewlein.com/ceaser/
      easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
      fitToSection: true
    });

    moveToIntro('.avatar__mouse');
  }

  // public APIs
  return {
    init: init
  };
}(jQuery);

$(document).ready(function () {
  JOSHUA.init();
});