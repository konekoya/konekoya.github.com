(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _constants = require('./constants');

var _fetchGithubApi = require('./fetch-github-api');

var _fetchGithubApi2 = _interopRequireDefault(_fetchGithubApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JOSHUA = function ($) {
  'use strict';

  function moveToIntro(el) {
    if (typeof el === 'string' && el.length > 0) {
      var trigger = _constants.DOC.querySelector(el);

      if (trigger) {
        trigger.addEventListener('click', function () {
          $.fn.fullpage.moveTo('intro');
        }, false);
      }
    }
  }

  function init() {
    var fetchApi = new _fetchGithubApi2.default();
    fetchApi.fetch(_constants.GITHUB_API_URL);

    $('#fullpage').fullpage({
      menu: '#navigation',
      navigation: true,
      navigationTooltips: ['Home sweet home', 'Yep, A lllllittle About Me'],
      css3: true,

      // easing tool - https://matthewlein.com/ceaser/
      easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
      fitToSection: true,

      // Temp, WIP: Add transition for the second page
      // https://github.com/alvarotrigo/fullPage.js 
      afterLoad: function afterLoad(anchorLink, index) {
        var intro = _constants.DOC.querySelector('.intro');
        if (anchorLink === 'intro') {
          intro.classList.add(_constants.INTRO_IS_ACTIVE);
        }
      }
    });

    moveToIntro('.avatar__mouse');
  }

  // public APIs
  return {
    init: init
  };
}(jQuery);

$(_constants.DOC).ready(function () {
  JOSHUA.init();
});

},{"./constants":2,"./fetch-github-api":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOC = exports.DOC = document;
var BODY = exports.BODY = document.body;
var WINDOW_IS_LOADED = exports.WINDOW_IS_LOADED = 'window--is-loaded';
var INTRO_IS_ACTIVE = exports.INTRO_IS_ACTIVE = 'intro--is-active';
var FALLBACK_AVATAR_URL = exports.FALLBACK_AVATAR_URL = 'build/images/joshua-pic.jpeg';
var GITHUB_API_URL = exports.GITHUB_API_URL = 'https://api.github.com/users/konekoya';

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FetchGitHubApi = function () {
  function FetchGitHubApi() {
    _classCallCheck(this, FetchGitHubApi);
  }

  _createClass(FetchGitHubApi, [{
    key: 'addLoadedClass',
    value: function addLoadedClass(className) {
      setTimeout(function () {
        _constants.BODY.classList.add(className);
      }, 1000);
    }
  }, {
    key: 'setAvatarURL',
    value: function setAvatarURL() {
      var URL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.FALLBACK_AVATAR_URL;

      _constants.DOC.querySelector('.avatar__img').setAttribute('src', URL);
    }
  }, {
    key: 'handleErrorMessage',
    value: function handleErrorMessage(errorObj) {
      var responseText = errorObj.responseText;

      responseText = JSON.parse(responseText);
      /* eslint-disable no-console */
      console.error('ERROR MESSAGE: ' + responseText.message);

      return false;
    }
  }, {
    key: 'fetch',
    value: function fetch(URL) {
      var _this = this;

      // eslint-disable-next-line
      $.get(URL).done(function (result) {
        _this.setAvatarURL(result.avatar_url);
        _this.addLoadedClass(_constants.WINDOW_IS_LOADED);
      }).fail(function (error) {
        _this.handleErrorMessage(error);
        _this.setAvatarURL();
        _this.addLoadedClass(_constants.WINDOW_IS_LOADED);
      });
    }
  }]);

  return FetchGitHubApi;
}();

exports.default = FetchGitHubApi;

},{"./constants":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbnN0YW50cy5qcyIsInNyYy9qcy9mZXRjaC1naXRodWItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFNQTs7Ozs7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLGVBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxRQUFNLFdBQVcsOEJBQWpCO0FBQ0EsYUFBUyxLQUFUOztBQUVBLE1BQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0I7QUFDdEIsWUFBTSxhQURnQjtBQUV0QixrQkFBWSxJQUZVO0FBR3RCLDBCQUFvQixDQUFDLGlCQUFELEVBQW9CLDRCQUFwQixDQUhFO0FBSXRCLFlBQU0sSUFKZ0I7O0FBTXRCO0FBQ0Esa0JBQVksMENBUFU7QUFRdEIsb0JBQWMsSUFSUTs7QUFVdEI7QUFDQTtBQUNBLGlCQUFXLG1CQUFDLFVBQUQsRUFBYSxLQUFiLEVBQXVCO0FBQ2hDLFlBQU0sUUFBUSxlQUFJLGFBQUosQ0FBa0IsUUFBbEIsQ0FBZDtBQUNBLFlBQUksZUFBZSxPQUFuQixFQUE0QjtBQUMxQixnQkFBTSxTQUFOLENBQWdCLEdBQWhCO0FBQ0Q7QUFDRjtBQWpCcUIsS0FBeEI7O0FBb0JBLGdCQUFZLGdCQUFaO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFJRCxDQS9DZSxDQStDZCxNQS9DYyxDQUFoQjs7QUFpREEsa0JBQU8sS0FBUCxDQUFhLFlBQU07QUFDakIsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7QUN6RE8sSUFBTSxvQkFBTSxRQUFaO0FBQ0EsSUFBTSxzQkFBTyxTQUFTLElBQXRCO0FBQ0EsSUFBTSw4Q0FBbUIsbUJBQXpCO0FBQ0EsSUFBTSw0Q0FBa0Isa0JBQXhCO0FBQ0EsSUFBTSxvREFBc0IsOEJBQTVCO0FBQ0EsSUFBTSwwQ0FBaUIsdUNBQXZCOzs7Ozs7Ozs7OztBQ0xQOzs7O0lBT3FCLGM7Ozs7Ozs7bUNBRUosUyxFQUFXO0FBQ3hCLGlCQUFXLFlBQU07QUFDZix3QkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixTQUFuQjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OzttQ0FFdUM7QUFBQSxVQUEzQixHQUEyQjs7QUFDdEMscUJBQUksYUFBSixDQUFrQixjQUFsQixFQUNHLFlBREgsQ0FDZ0IsS0FEaEIsRUFDdUIsR0FEdkI7QUFFRDs7O3VDQUVrQixRLEVBQVU7QUFBQSxVQUNyQixZQURxQixHQUNKLFFBREksQ0FDckIsWUFEcUI7O0FBRTNCLHFCQUFlLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBZjtBQUNBO0FBQ0EsY0FBUSxLQUFSLHFCQUFnQyxhQUFhLE9BQTdDOztBQUVBLGFBQU8sS0FBUDtBQUNEOzs7MEJBRUssRyxFQUFLO0FBQUE7O0FBQ1Q7QUFDQSxRQUFFLEdBQUYsQ0FBTSxHQUFOLEVBQ0csSUFESCxDQUNRLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGNBQUssWUFBTCxDQUFrQixPQUFPLFVBQXpCO0FBQ0EsY0FBSyxjQUFMO0FBQ0QsT0FKSCxFQUtHLElBTEgsQ0FLUSxVQUFDLEtBQUQsRUFBVztBQUNmLGNBQUssa0JBQUwsQ0FBd0IsS0FBeEI7QUFDQSxjQUFLLFlBQUw7QUFDQSxjQUFLLGNBQUw7QUFDRCxPQVRIO0FBVUQ7Ozs7OztrQkFsQ2tCLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtcbiAgRE9DLFxuICBJTlRST19JU19BQ1RJVkUsXG4gIEdJVEhVQl9BUElfVVJMXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IEZldGNoR2l0SHViQXBpIGZyb20gJy4vZmV0Y2gtZ2l0aHViLWFwaSc7XG5cbmNvbnN0IEpPU0hVQSA9IChmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBtb3ZlVG9JbnRybyhlbCkge1xuICAgIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnICYmIGVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBET0MucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICBcbiAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgJC5mbi5mdWxscGFnZS5tb3ZlVG8oJ2ludHJvJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IGZldGNoQXBpID0gbmV3IEZldGNoR2l0SHViQXBpKCk7XG4gICAgZmV0Y2hBcGkuZmV0Y2goR0lUSFVCX0FQSV9VUkwpO1xuICAgIFxuICAgICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcbiAgICAgIG1lbnU6ICcjbmF2aWdhdGlvbicsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbJ0hvbWUgc3dlZXQgaG9tZScsICdZZXAsIEEgbGxsbGxpdHRsZSBBYm91dCBNZSddLFxuICAgICAgY3NzMzogdHJ1ZSxcblxuICAgICAgLy8gZWFzaW5nIHRvb2wgLSBodHRwczovL21hdHRoZXdsZWluLmNvbS9jZWFzZXIvXG4gICAgICBlYXNpbmdjc3MzOiAnY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwKScsIFxuICAgICAgZml0VG9TZWN0aW9uOiB0cnVlLFxuXG4gICAgICAvLyBUZW1wLCBXSVA6IEFkZCB0cmFuc2l0aW9uIGZvciB0aGUgc2Vjb25kIHBhZ2VcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcyBcbiAgICAgIGFmdGVyTG9hZDogKGFuY2hvckxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGludHJvID0gRE9DLnF1ZXJ5U2VsZWN0b3IoJy5pbnRybycpO1xuICAgICAgICBpZiAoYW5jaG9yTGluayA9PT0gJ2ludHJvJykge1xuICAgICAgICAgIGludHJvLmNsYXNzTGlzdC5hZGQoSU5UUk9fSVNfQUNUSVZFKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW92ZVRvSW50cm8oJy5hdmF0YXJfX21vdXNlJyk7XG4gIH1cblxuICAvLyBwdWJsaWMgQVBJc1xuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXRcbiAgfTtcblxufShqUXVlcnkpKTtcblxuJChET0MpLnJlYWR5KCgpID0+IHtcbiAgSk9TSFVBLmluaXQoKTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IERPQyA9IGRvY3VtZW50O1xuZXhwb3J0IGNvbnN0IEJPRFkgPSBkb2N1bWVudC5ib2R5O1xuZXhwb3J0IGNvbnN0IFdJTkRPV19JU19MT0FERUQgPSAnd2luZG93LS1pcy1sb2FkZWQnO1xuZXhwb3J0IGNvbnN0IElOVFJPX0lTX0FDVElWRSA9ICdpbnRyby0taXMtYWN0aXZlJztcbmV4cG9ydCBjb25zdCBGQUxMQkFDS19BVkFUQVJfVVJMID0gJ2J1aWxkL2ltYWdlcy9qb3NodWEtcGljLmpwZWcnO1xuZXhwb3J0IGNvbnN0IEdJVEhVQl9BUElfVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMva29uZWtveWEnOyIsImltcG9ydCB7IFxuICBET0MsIFxuICBCT0RZLCBcbiAgV0lORE9XX0lTX0xPQURFRCxcbiAgRkFMTEJBQ0tfQVZBVEFSX1VSTFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoR2l0SHViQXBpIHtcblxuICBhZGRMb2FkZWRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIEJPRFkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgc2V0QXZhdGFyVVJMKFVSTCA9IEZBTExCQUNLX0FWQVRBUl9VUkwpIHtcbiAgICBET0MucXVlcnlTZWxlY3RvcignLmF2YXRhcl9faW1nJylcbiAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NyYycsIFVSTCk7XG4gIH1cblxuICBoYW5kbGVFcnJvck1lc3NhZ2UoZXJyb3JPYmopIHtcbiAgICBsZXQgeyByZXNwb25zZVRleHQgfSA9IGVycm9yT2JqO1xuICAgIHJlc3BvbnNlVGV4dCA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KVxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBjb25zb2xlLmVycm9yKGBFUlJPUiBNRVNTQUdFOiAke3Jlc3BvbnNlVGV4dC5tZXNzYWdlfWApO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZmV0Y2goVVJMKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgJC5nZXQoVVJMKVxuICAgICAgLmRvbmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNldEF2YXRhclVSTChyZXN1bHQuYXZhdGFyX3VybCk7XG4gICAgICAgIHRoaXMuYWRkTG9hZGVkQ2xhc3MoV0lORE9XX0lTX0xPQURFRCk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgdGhpcy5zZXRBdmF0YXJVUkwoKTtcbiAgICAgICAgdGhpcy5hZGRMb2FkZWRDbGFzcyhXSU5ET1dfSVNfTE9BREVEKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbiJdfQ==
