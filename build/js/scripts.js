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
    key: 'setAvatarURL',
    value: function setAvatarURL(url) {
      console.log('Fetching the data');
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      $.get('https://api.github.com/users/konekoya', function (result) {
        document.querySelector('.avatar__img').setAttribute('src', result.avatar_url);
      });
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

var JOSHUA = function ($) {
  'use strict';

  var doc = document;
  var fetchApi = new _fetchGithubApi2.default();
  var fetchedData = fetchApi.fetch();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZmV0Y2gtZ2l0aHViLWFwaS5qcyIsInNyYy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FxQixjOzs7Ozs7O2lDQUdOLEcsRUFBSztBQUNoQixjQUFRLEdBQVIsQ0FBWSxtQkFBWjtBQUNEOzs7NEJBRU87QUFDTixRQUFFLEdBQUYsQ0FBTSx1Q0FBTixFQUErQyxVQUFDLE1BQUQsRUFBWTtBQUN6RCxpQkFBUyxhQUFULENBQXVCLGNBQXZCLEVBQ0csWUFESCxDQUNnQixLQURoQixFQUN1QixPQUFPLFVBRDlCO0FBRUQsT0FIRDtBQUlEOzs7Ozs7a0JBWmtCLGM7Ozs7O0FDQXJCOzs7Ozs7QUFJQSxJQUFNLFNBQVUsVUFBUyxDQUFULEVBQVk7QUFDMUI7O0FBRUEsTUFBTSxNQUFNLFFBQVo7QUFDQSxNQUFNLFdBQVcsOEJBQWpCO0FBQ0EsTUFBTSxjQUFjLFNBQVMsS0FBVCxFQUFwQjs7QUFFQSxXQUFTLFdBQVQsQ0FBcUIsRUFBckIsRUFBeUI7QUFDdkIsUUFBSSxPQUFPLEVBQVAsS0FBYyxRQUFkLElBQTBCLEdBQUcsTUFBSCxHQUFZLENBQTFDLEVBQTZDO0FBQzNDLFVBQU0sVUFBVSxJQUFJLGFBQUosQ0FBa0IsRUFBbEIsQ0FBaEI7O0FBRUEsVUFBSSxPQUFKLEVBQWE7QUFDWCxnQkFBUSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDLFlBQUUsRUFBRixDQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLE9BQXJCO0FBQ0QsU0FGRCxFQUVHLEtBRkg7QUFHRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBUyxJQUFULEdBQWdCO0FBQ2QsTUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QjtBQUN0QixZQUFNLGFBRGdCO0FBRXRCLGtCQUFZLElBRlU7QUFHdEIsMEJBQW9CLENBQUMsaUJBQUQsRUFBb0IsNEJBQXBCLENBSEU7QUFJdEIsWUFBTSxJQUpnQjs7QUFNdEI7QUFDQSxrQkFBWSwwQ0FQVTtBQVF0QixvQkFBYztBQVJRLEtBQXhCOztBQVdBLGdCQUFZLGdCQUFaO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFJRCxDQXZDZSxDQXVDZCxNQXZDYyxDQUFoQjs7QUEwQ0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFNO0FBQ3RCLFNBQU8sSUFBUDtBQUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hHaXRIdWJBcGkge1xuXG5cbiAgc2V0QXZhdGFyVVJMKHVybCkge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyB0aGUgZGF0YScpO1xuICB9XG5cbiAgZmV0Y2goKSB7XG4gICAgJC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMva29uZWtveWEnLCAocmVzdWx0KSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyX19pbWcnKVxuICAgICAgICAuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN1bHQuYXZhdGFyX3VybCk7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IEZldGNoR2l0SHViQXBpIGZyb20gJy4vZmV0Y2gtZ2l0aHViLWFwaS5qcyc7XG5cblxuXG5jb25zdCBKT1NIVUEgPSAoZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gIGNvbnN0IGZldGNoQXBpID0gbmV3IEZldGNoR2l0SHViQXBpKCk7XG4gIGNvbnN0IGZldGNoZWREYXRhID0gZmV0Y2hBcGkuZmV0Y2goKTtcblxuICBmdW5jdGlvbiBtb3ZlVG9JbnRybyhlbCkge1xuICAgIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnICYmIGVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBkb2MucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICBcbiAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgJC5mbi5mdWxscGFnZS5tb3ZlVG8oJ2ludHJvJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcbiAgICAgIG1lbnU6ICcjbmF2aWdhdGlvbicsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbJ0hvbWUgc3dlZXQgaG9tZScsICdZZXAsIEEgbGxsbGxpdHRsZSBBYm91dCBNZSddLFxuICAgICAgY3NzMzogdHJ1ZSxcblxuICAgICAgLy8gZWFzaW5nIHRvb2wgLSBodHRwczovL21hdHRoZXdsZWluLmNvbS9jZWFzZXIvXG4gICAgICBlYXNpbmdjc3MzOiAnY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwKScsIFxuICAgICAgZml0VG9TZWN0aW9uOiB0cnVlXG4gICAgfSk7XG5cbiAgICBtb3ZlVG9JbnRybygnLmF2YXRhcl9fbW91c2UnKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBBUElzXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xuXG59KGpRdWVyeSkpO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgSk9TSFVBLmluaXQoKTtcbn0pO1xuIl19
