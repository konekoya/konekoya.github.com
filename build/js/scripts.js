(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FetchGitHubApi = function () {
  function FetchGitHubApi() {
    _classCallCheck(this, FetchGitHubApi);
  }

  _createClass(FetchGitHubApi, [{
    key: 'log',
    value: function log() {
      console.log('Fetching the data');
    }
  }]);

  return FetchGitHubApi;
}();

exports.default = FetchGitHubApi;

},{}],2:[function(require,module,exports){
'use strict';

var _fetchGithubApi = require('./fetch-github-api.js');

var _fetchGithubApi2 = _interopRequireDefault(_fetchGithubApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchApi = new _fetchGithubApi2.default();

fetchApi.log();

// FetchGitHubApi.log();
// console.log(FetchGitHubApi);

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

},{"./fetch-github-api.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZmV0Y2gtZ2l0aHViLWFwaS5qcyIsInNyYy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FxQixjOzs7Ozs7OzBCQUNiO0FBQ0osY0FBUSxHQUFSLENBQVksbUJBQVo7QUFDRDs7Ozs7O2tCQUhrQixjOzs7OztBQ0FyQjs7Ozs7O0FBRUEsSUFBTSxXQUFXLDhCQUFqQjs7QUFFQSxTQUFTLEdBQVQ7O0FBRUE7QUFDQTs7QUFFQSxJQUFNLFNBQVUsVUFBUyxDQUFULEVBQVk7QUFDMUI7O0FBRUEsTUFBTSxNQUFNLFFBQVo7O0FBRUEsV0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCO0FBQ3ZCLFFBQUksT0FBTyxFQUFQLEtBQWMsUUFBZCxJQUEwQixHQUFHLE1BQUgsR0FBWSxDQUExQyxFQUE2QztBQUMzQyxVQUFNLFVBQVUsSUFBSSxhQUFKLENBQWtCLEVBQWxCLENBQWhCOztBQUVBLFVBQUksT0FBSixFQUFhO0FBQ1gsZ0JBQVEsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUN0QyxZQUFFLEVBQUYsQ0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixPQUFyQjtBQUNELFNBRkQsRUFFRyxLQUZIO0FBR0Q7QUFDRjtBQUNGOztBQUVELFdBQVMsSUFBVCxHQUFnQjtBQUNkLE1BQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0I7QUFDdEIsWUFBTSxhQURnQjtBQUV0QixrQkFBWSxJQUZVO0FBR3RCLDBCQUFvQixDQUFDLGlCQUFELEVBQW9CLDRCQUFwQixDQUhFO0FBSXRCLFlBQU0sSUFKZ0I7O0FBTXRCO0FBQ0Esa0JBQVksMENBUFU7QUFRdEIsb0JBQWM7QUFSUSxLQUF4Qjs7QUFXQSxnQkFBWSxnQkFBWjtBQUNEOztBQUVEO0FBQ0EsU0FBTztBQUNMLFVBQU07QUFERCxHQUFQO0FBSUQsQ0FyQ2UsQ0FxQ2QsTUFyQ2MsQ0FBaEI7O0FBd0NBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBTTtBQUN0QixTQUFPLElBQVA7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoR2l0SHViQXBpIHtcbiAgbG9nKCkge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyB0aGUgZGF0YScpO1xuICB9XG59XG5cbiIsImltcG9ydCBGZXRjaEdpdEh1YkFwaSBmcm9tICcuL2ZldGNoLWdpdGh1Yi1hcGkuanMnO1xuXG5jb25zdCBmZXRjaEFwaSA9IG5ldyBGZXRjaEdpdEh1YkFwaSgpO1xuXG5mZXRjaEFwaS5sb2coKTtcblxuLy8gRmV0Y2hHaXRIdWJBcGkubG9nKCk7XG4vLyBjb25zb2xlLmxvZyhGZXRjaEdpdEh1YkFwaSk7XG5cbmNvbnN0IEpPU0hVQSA9IChmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjb25zdCBkb2MgPSBkb2N1bWVudDtcblxuICBmdW5jdGlvbiBtb3ZlVG9JbnRybyhlbCkge1xuICAgIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnICYmIGVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBkb2MucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICBcbiAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgJC5mbi5mdWxscGFnZS5tb3ZlVG8oJ2ludHJvJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcbiAgICAgIG1lbnU6ICcjbmF2aWdhdGlvbicsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbJ0hvbWUgc3dlZXQgaG9tZScsICdZZXAsIEEgbGxsbGxpdHRsZSBBYm91dCBNZSddLFxuICAgICAgY3NzMzogdHJ1ZSxcblxuICAgICAgLy8gZWFzaW5nIHRvb2wgLSBodHRwczovL21hdHRoZXdsZWluLmNvbS9jZWFzZXIvXG4gICAgICBlYXNpbmdjc3MzOiAnY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwKScsIFxuICAgICAgZml0VG9TZWN0aW9uOiB0cnVlXG4gICAgfSk7XG5cbiAgICBtb3ZlVG9JbnRybygnLmF2YXRhcl9fbW91c2UnKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBBUElzXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xuXG59KGpRdWVyeSkpO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgSk9TSFVBLmluaXQoKTtcbn0pO1xuIl19
