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
var INTRO_IS_ACTIVE = exports.INTRO_IS_ACTIVE = 'intro--is-active';

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
      }, 5000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbnN0YW50cy5qcyIsInNyYy9qcy9mZXRjaC1naXRodWItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLGVBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLFlBQU0sYUFEZ0I7QUFFdEIsa0JBQVksSUFGVTtBQUd0QiwwQkFBb0IsQ0FBQyxpQkFBRCxFQUFvQiw0QkFBcEIsQ0FIRTtBQUl0QixZQUFNLElBSmdCOztBQU10QjtBQUNBLGtCQUFZLDBDQVBVO0FBUXRCLG9CQUFjLElBUlE7O0FBVXRCO0FBQ0E7QUFDQSxpQkFBVyxtQkFBQyxVQUFELEVBQWEsS0FBYixFQUF1QjtBQUNoQyxZQUFNLFFBQVEsZUFBSSxhQUFKLENBQWtCLFFBQWxCLENBQWQ7QUFDQSxZQUFJLGVBQWUsT0FBbkIsRUFBNEI7QUFDMUIsZ0JBQU0sU0FBTixDQUFnQixHQUFoQjtBQUNEO0FBQ0Y7QUFqQnFCLEtBQXhCOztBQW9CQSxnQkFBWSxnQkFBWjs7QUFFQSxRQUFNLFdBQVcsOEJBQWpCO0FBQ0EsYUFBUyxLQUFUO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFJRCxDQS9DZSxDQStDZCxNQS9DYyxDQUFoQjs7QUFrREEsa0JBQU8sS0FBUCxDQUFhLFlBQU07QUFDakIsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7QUNyRE8sSUFBTSxvQkFBTSxRQUFaO0FBQ0EsSUFBTSxzQkFBTyxTQUFTLElBQXRCO0FBQ0EsSUFBTSw4Q0FBbUIsbUJBQXpCO0FBQ0EsSUFBTSw0Q0FBa0Isa0JBQXhCOzs7Ozs7Ozs7OztBQ0hQOzs7O0lBRXFCLGM7Ozs7Ozs7bUNBRUosUyxFQUFXO0FBQ3hCLGlCQUFXLFlBQU07QUFDZix3QkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixTQUFuQjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OztpQ0FFWSxHLEVBQUs7QUFDaEIscUJBQUksYUFBSixDQUFrQixjQUFsQixFQUNHLFlBREgsQ0FDZ0IsS0FEaEIsRUFDdUIsR0FEdkI7QUFFRDs7OzRCQUVPO0FBQUE7O0FBQ04sUUFBRSxHQUFGLENBQU0sdUNBQU4sRUFBK0MsVUFBQyxNQUFELEVBQVk7QUFDekQsWUFBSSxNQUFKLEVBQVk7QUFDVixnQkFBSyxZQUFMLENBQWtCLE9BQU8sVUFBekI7QUFDRDtBQUNGLE9BSkQ7QUFLQSxXQUFLLGNBQUwsOEJBTk0sQ0FNaUM7QUFDeEM7Ozs7OztrQkFwQmtCLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRE9DLCBJTlRST19JU19BQ1RJVkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgRmV0Y2hHaXRIdWJBcGkgZnJvbSAnLi9mZXRjaC1naXRodWItYXBpJztcblxuY29uc3QgSk9TSFVBID0gKGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIG1vdmVUb0ludHJvKGVsKSB7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgZWwubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IERPQy5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICAgIFxuICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAkLmZuLmZ1bGxwYWdlLm1vdmVUbygnaW50cm8nKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnI2Z1bGxwYWdlJykuZnVsbHBhZ2Uoe1xuICAgICAgbWVudTogJyNuYXZpZ2F0aW9uJyxcbiAgICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgICBuYXZpZ2F0aW9uVG9vbHRpcHM6IFsnSG9tZSBzd2VldCBob21lJywgJ1llcCwgQSBsbGxsbGl0dGxlIEFib3V0IE1lJ10sXG4gICAgICBjc3MzOiB0cnVlLFxuXG4gICAgICAvLyBlYXNpbmcgdG9vbCAtIGh0dHBzOi8vbWF0dGhld2xlaW4uY29tL2NlYXNlci9cbiAgICAgIGVhc2luZ2NzczM6ICdjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMwLCAwLjY4NSwgMC4yMjApJywgXG4gICAgICBmaXRUb1NlY3Rpb246IHRydWUsXG5cbiAgICAgIC8vIFRlbXAsIFdJUDogQWRkIHRyYW5zaXRpb24gZm9yIHRoZSBzZWNvbmQgcGFnZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzIFxuICAgICAgYWZ0ZXJMb2FkOiAoYW5jaG9yTGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW50cm8gPSBET0MucXVlcnlTZWxlY3RvcignLmludHJvJyk7XG4gICAgICAgIGlmIChhbmNob3JMaW5rID09PSAnaW50cm8nKSB7XG4gICAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZChJTlRST19JU19BQ1RJVkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb3ZlVG9JbnRybygnLmF2YXRhcl9fbW91c2UnKTtcblxuICAgIGNvbnN0IGZldGNoQXBpID0gbmV3IEZldGNoR2l0SHViQXBpKCk7XG4gICAgZmV0Y2hBcGkuZmV0Y2goKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBBUElzXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xuXG59KGpRdWVyeSkpO1xuXG5cbiQoRE9DKS5yZWFkeSgoKSA9PiB7XG4gIEpPU0hVQS5pbml0KCk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBET0MgPSBkb2N1bWVudDtcbmV4cG9ydCBjb25zdCBCT0RZID0gZG9jdW1lbnQuYm9keTtcbmV4cG9ydCBjb25zdCBXSU5ET1dfSVNfTE9BREVEID0gJ3dpbmRvdy0taXMtbG9hZGVkJztcbmV4cG9ydCBjb25zdCBJTlRST19JU19BQ1RJVkUgPSAnaW50cm8tLWlzLWFjdGl2ZSc7XG4iLCJpbXBvcnQgeyBET0MsIEJPRFksIFdJTkRPV19JU19MT0FERUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoR2l0SHViQXBpIHtcblxuICBhZGRMb2FkZWRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIEJPRFkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0sIDUwMDApO1xuICB9XG5cbiAgc2V0QXZhdGFyVVJMKFVSTCkge1xuICAgIERPQy5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyX19pbWcnKVxuICAgICAgLnNldEF0dHJpYnV0ZSgnc3JjJywgVVJMKTtcbiAgfVxuXG4gIGZldGNoKCkge1xuICAgICQuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2tvbmVrb3lhJywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldEF2YXRhclVSTChyZXN1bHQuYXZhdGFyX3VybCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hZGRMb2FkZWRDbGFzcyhXSU5ET1dfSVNfTE9BREVEKTsgLy8gdGVtcCwgZm9yIGRldmVsb3BtZW50IHB1cnBvc2VcbiAgfVxufVxuXG4iXX0=
