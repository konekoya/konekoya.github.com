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

    var fetchApi = new _fetchGithubApi2.default();
    fetchApi.fetch();
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
    value: function setAvatarURL(URL) {
      _constants.DOC.querySelector('.avatar__img').setAttribute('src', URL);
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      var _this = this;

      $.get('https://api.github.com/users/konekoya', function (result) {
        if (result) {
          _this.setAvatarURL(result.avatar_url);
        }
      });
      this.addLoadedClass(_constants.WINDOW_IS_LOADED); // temp, for development purpose
    }
  }]);

  return FetchGitHubApi;
}();

exports.default = FetchGitHubApi;

},{"./constants":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbnN0YW50cy5qcyIsInNyYy9qcy9mZXRjaC1naXRodWItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLGVBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLFlBQU0sYUFEZ0I7QUFFdEIsa0JBQVksSUFGVTtBQUd0QiwwQkFBb0IsQ0FBQyxpQkFBRCxFQUFvQiw0QkFBcEIsQ0FIRTtBQUl0QixZQUFNLElBSmdCOztBQU10QjtBQUNBLGtCQUFZLDBDQVBVO0FBUXRCLG9CQUFjOztBQVJRLEtBQXhCOztBQW9CQSxnQkFBWSxnQkFBWjs7QUFFQSxRQUFNLFdBQVcsOEJBQWpCO0FBQ0EsYUFBUyxLQUFUO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFJRCxDQS9DZSxDQStDZCxNQS9DYyxDQUFoQjs7QUFrREEsa0JBQU8sS0FBUCxDQUFhLFlBQU07QUFDakIsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7QUNyRE8sSUFBTSxvQkFBTSxRQUFaO0FBQ0EsSUFBTSxzQkFBTyxTQUFTLElBQXRCO0FBQ0EsSUFBTSw4Q0FBbUIsbUJBQXpCOzs7Ozs7Ozs7OztBQ0ZQOzs7O0lBRXFCLGM7Ozs7Ozs7bUNBRUosUyxFQUFXO0FBQ3hCLGlCQUFXLFlBQU07QUFDZix3QkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixTQUFuQjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OztpQ0FFWSxHLEVBQUs7QUFDaEIscUJBQUksYUFBSixDQUFrQixjQUFsQixFQUNHLFlBREgsQ0FDZ0IsS0FEaEIsRUFDdUIsR0FEdkI7QUFFRDs7OzRCQUVPO0FBQUE7O0FBQ04sUUFBRSxHQUFGLENBQU0sdUNBQU4sRUFBK0MsVUFBQyxNQUFELEVBQVk7QUFDekQsWUFBSSxNQUFKLEVBQVk7QUFDVixnQkFBSyxZQUFMLENBQWtCLE9BQU8sVUFBekI7QUFDRDtBQUNGLE9BSkQ7QUFLQSxXQUFLLGNBQUwsOEJBTk0sQ0FNaUM7QUFDeEM7Ozs7OztrQkFwQmtCLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRE9DIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEZldGNoR2l0SHViQXBpIGZyb20gJy4vZmV0Y2gtZ2l0aHViLWFwaSc7XG5cbmNvbnN0IEpPU0hVQSA9IChmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBtb3ZlVG9JbnRybyhlbCkge1xuICAgIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnICYmIGVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBET0MucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICBcbiAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgJC5mbi5mdWxscGFnZS5tb3ZlVG8oJ2ludHJvJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcbiAgICAgIG1lbnU6ICcjbmF2aWdhdGlvbicsXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbJ0hvbWUgc3dlZXQgaG9tZScsICdZZXAsIEEgbGxsbGxpdHRsZSBBYm91dCBNZSddLFxuICAgICAgY3NzMzogdHJ1ZSxcblxuICAgICAgLy8gZWFzaW5nIHRvb2wgLSBodHRwczovL21hdHRoZXdsZWluLmNvbS9jZWFzZXIvXG4gICAgICBlYXNpbmdjc3MzOiAnY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwKScsIFxuICAgICAgZml0VG9TZWN0aW9uOiB0cnVlLFxuXG4gICAgICAvLyBUZW1wLCBXSVA6IEFkZCB0cmFuc2l0aW9uIGZvciB0aGUgc2Vjb25kIHBhZ2VcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcyBcbiAgICAgIC8vIGFmdGVyTG9hZDogKGFuY2hvckxpbmssIGluZGV4KSA9PiB7XG4gICAgICAvLyAgIHN3aXRjaChpbmRleCkge1xuICAgICAgLy8gICAgIGNhc2UgMDpcblxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfSk7XG5cbiAgICBtb3ZlVG9JbnRybygnLmF2YXRhcl9fbW91c2UnKTtcblxuICAgIGNvbnN0IGZldGNoQXBpID0gbmV3IEZldGNoR2l0SHViQXBpKCk7XG4gICAgZmV0Y2hBcGkuZmV0Y2goKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBBUElzXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xuXG59KGpRdWVyeSkpO1xuXG5cbiQoRE9DKS5yZWFkeSgoKSA9PiB7XG4gIEpPU0hVQS5pbml0KCk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBET0MgPSBkb2N1bWVudDtcbmV4cG9ydCBjb25zdCBCT0RZID0gZG9jdW1lbnQuYm9keTtcbmV4cG9ydCBjb25zdCBXSU5ET1dfSVNfTE9BREVEID0gJ3dpbmRvdy0taXMtbG9hZGVkJztcbiIsImltcG9ydCB7IERPQywgQk9EWSwgV0lORE9XX0lTX0xPQURFRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hHaXRIdWJBcGkge1xuXG4gIGFkZExvYWRlZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgQk9EWS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBzZXRBdmF0YXJVUkwoVVJMKSB7XG4gICAgRE9DLnF1ZXJ5U2VsZWN0b3IoJy5hdmF0YXJfX2ltZycpXG4gICAgICAuc2V0QXR0cmlidXRlKCdzcmMnLCBVUkwpO1xuICB9XG5cbiAgZmV0Y2goKSB7XG4gICAgJC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMva29uZWtveWEnLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0QXZhdGFyVVJMKHJlc3VsdC5hdmF0YXJfdXJsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFkZExvYWRlZENsYXNzKFdJTkRPV19JU19MT0FERUQpOyAvLyB0ZW1wLCBmb3IgZGV2ZWxvcG1lbnQgcHVycG9zZVxuICB9XG59XG5cbiJdfQ==
