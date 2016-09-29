(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('fetching github api...');

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

// FetchGitHubApi.log();
console.log(_fetchGithubApi2.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZmV0Y2gtZ2l0aHViLWFwaS5qcyIsInNyYy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBLFFBQVEsR0FBUixDQUFZLHdCQUFaOztJQUVxQixjOzs7Ozs7OzBCQUNiO0FBQ0osY0FBUSxHQUFSLENBQVksbUJBQVo7QUFDRDs7Ozs7O2tCQUhrQixjOzs7OztBQ0ZyQjs7Ozs7O0FBR0E7QUFDQSxRQUFRLEdBQVI7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLE1BQU0sTUFBTSxRQUFaOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLElBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLFlBQU0sYUFEZ0I7QUFFdEIsa0JBQVksSUFGVTtBQUd0QiwwQkFBb0IsQ0FBQyxpQkFBRCxFQUFvQiw0QkFBcEIsQ0FIRTtBQUl0QixZQUFNLElBSmdCOztBQU10QjtBQUNBLGtCQUFZLDBDQVBVO0FBUXRCLG9CQUFjO0FBUlEsS0FBeEI7O0FBV0EsZ0JBQVksZ0JBQVo7QUFDRDs7QUFFRDtBQUNBLFNBQU87QUFDTCxVQUFNO0FBREQsR0FBUDtBQUlELENBckNlLENBcUNkLE1BckNjLENBQWhCOztBQXdDQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQU07QUFDdEIsU0FBTyxJQUFQO0FBQ0QsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zb2xlLmxvZygnZmV0Y2hpbmcgZ2l0aHViIGFwaS4uLicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaEdpdEh1YkFwaSB7XG4gIGxvZygpIHtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgdGhlIGRhdGEnKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgRmV0Y2hHaXRIdWJBcGkgZnJvbSAnLi9mZXRjaC1naXRodWItYXBpLmpzJztcblxuXG4vLyBGZXRjaEdpdEh1YkFwaS5sb2coKTtcbmNvbnNvbGUubG9nKEZldGNoR2l0SHViQXBpKTtcblxuY29uc3QgSk9TSFVBID0gKGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG4gIGZ1bmN0aW9uIG1vdmVUb0ludHJvKGVsKSB7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgZWwubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGRvYy5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICAgIFxuICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAkLmZuLmZ1bGxwYWdlLm1vdmVUbygnaW50cm8nKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnI2Z1bGxwYWdlJykuZnVsbHBhZ2Uoe1xuICAgICAgbWVudTogJyNuYXZpZ2F0aW9uJyxcbiAgICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgICBuYXZpZ2F0aW9uVG9vbHRpcHM6IFsnSG9tZSBzd2VldCBob21lJywgJ1llcCwgQSBsbGxsbGl0dGxlIEFib3V0IE1lJ10sXG4gICAgICBjc3MzOiB0cnVlLFxuXG4gICAgICAvLyBlYXNpbmcgdG9vbCAtIGh0dHBzOi8vbWF0dGhld2xlaW4uY29tL2NlYXNlci9cbiAgICAgIGVhc2luZ2NzczM6ICdjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMwLCAwLjY4NSwgMC4yMjApJywgXG4gICAgICBmaXRUb1NlY3Rpb246IHRydWVcbiAgICB9KTtcblxuICAgIG1vdmVUb0ludHJvKCcuYXZhdGFyX19tb3VzZScpO1xuICB9XG5cbiAgLy8gcHVibGljIEFQSXNcbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG5cbn0oalF1ZXJ5KSk7XG5cblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICBKT1NIVUEuaW5pdCgpO1xufSk7XG4iXX0=
