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
      console.error('ERROR MESSAGE: ' + responseText.message);
      return false;
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      var _this = this;

      $.get(_constants.GITHUB_API_URL).done(function (result) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbnN0YW50cy5qcyIsInNyYy9qcy9mZXRjaC1naXRodWItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLGVBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLFlBQU0sYUFEZ0I7QUFFdEIsa0JBQVksSUFGVTtBQUd0QiwwQkFBb0IsQ0FBQyxpQkFBRCxFQUFvQiw0QkFBcEIsQ0FIRTtBQUl0QixZQUFNLElBSmdCOztBQU10QjtBQUNBLGtCQUFZLDBDQVBVO0FBUXRCLG9CQUFjLElBUlE7O0FBVXRCO0FBQ0E7QUFDQSxpQkFBVyxtQkFBQyxVQUFELEVBQWEsS0FBYixFQUF1QjtBQUNoQyxZQUFNLFFBQVEsZUFBSSxhQUFKLENBQWtCLFFBQWxCLENBQWQ7QUFDQSxZQUFJLGVBQWUsT0FBbkIsRUFBNEI7QUFDMUIsZ0JBQU0sU0FBTixDQUFnQixHQUFoQjtBQUNEO0FBQ0Y7QUFqQnFCLEtBQXhCOztBQW9CQSxnQkFBWSxnQkFBWjs7QUFFQSxRQUFNLFdBQVcsOEJBQWpCO0FBQ0EsYUFBUyxLQUFUO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFJRCxDQS9DZSxDQStDZCxNQS9DYyxDQUFoQjs7QUFrREEsa0JBQU8sS0FBUCxDQUFhLFlBQU07QUFDakIsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7QUNyRE8sSUFBTSxvQkFBTSxRQUFaO0FBQ0EsSUFBTSxzQkFBTyxTQUFTLElBQXRCO0FBQ0EsSUFBTSw4Q0FBbUIsbUJBQXpCO0FBQ0EsSUFBTSw0Q0FBa0Isa0JBQXhCO0FBQ0EsSUFBTSxvREFBc0IsOEJBQTVCO0FBQ0EsSUFBTSwwQ0FBaUIsdUNBQXZCOzs7Ozs7Ozs7OztBQ0xQOzs7O0lBUXFCLGM7Ozs7Ozs7bUNBRUosUyxFQUFXO0FBQ3hCLGlCQUFXLFlBQU07QUFDZix3QkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixTQUFuQjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OzttQ0FFdUM7QUFBQSxVQUEzQixHQUEyQjs7QUFDdEMscUJBQUksYUFBSixDQUFrQixjQUFsQixFQUNHLFlBREgsQ0FDZ0IsS0FEaEIsRUFDdUIsR0FEdkI7QUFFRDs7O3VDQUVrQixRLEVBQVU7QUFBQSxVQUNyQixZQURxQixHQUNKLFFBREksQ0FDckIsWUFEcUI7O0FBRTNCLHFCQUFlLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBZjtBQUNBLGNBQVEsS0FBUixxQkFBZ0MsYUFBYSxPQUE3QztBQUNBLGFBQU8sS0FBUDtBQUNEOzs7NEJBRU87QUFBQTs7QUFDTixRQUFFLEdBQUYsNEJBQ0csSUFESCxDQUNRLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGNBQUssWUFBTCxDQUFrQixPQUFPLFVBQXpCO0FBQ0EsY0FBSyxjQUFMO0FBQ0QsT0FKSCxFQUtHLElBTEgsQ0FLUSxVQUFDLEtBQUQsRUFBVztBQUNmLGNBQUssa0JBQUwsQ0FBd0IsS0FBeEI7QUFDQSxjQUFLLFlBQUw7QUFDQSxjQUFLLGNBQUw7QUFDRCxPQVRIO0FBVUQ7Ozs7OztrQkEvQmtCLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRE9DLCBJTlRST19JU19BQ1RJVkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgRmV0Y2hHaXRIdWJBcGkgZnJvbSAnLi9mZXRjaC1naXRodWItYXBpJztcblxuY29uc3QgSk9TSFVBID0gKGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIG1vdmVUb0ludHJvKGVsKSB7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgZWwubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IERPQy5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICAgIFxuICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAkLmZuLmZ1bGxwYWdlLm1vdmVUbygnaW50cm8nKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnI2Z1bGxwYWdlJykuZnVsbHBhZ2Uoe1xuICAgICAgbWVudTogJyNuYXZpZ2F0aW9uJyxcbiAgICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgICBuYXZpZ2F0aW9uVG9vbHRpcHM6IFsnSG9tZSBzd2VldCBob21lJywgJ1llcCwgQSBsbGxsbGl0dGxlIEFib3V0IE1lJ10sXG4gICAgICBjc3MzOiB0cnVlLFxuXG4gICAgICAvLyBlYXNpbmcgdG9vbCAtIGh0dHBzOi8vbWF0dGhld2xlaW4uY29tL2NlYXNlci9cbiAgICAgIGVhc2luZ2NzczM6ICdjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMwLCAwLjY4NSwgMC4yMjApJywgXG4gICAgICBmaXRUb1NlY3Rpb246IHRydWUsXG5cbiAgICAgIC8vIFRlbXAsIFdJUDogQWRkIHRyYW5zaXRpb24gZm9yIHRoZSBzZWNvbmQgcGFnZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzIFxuICAgICAgYWZ0ZXJMb2FkOiAoYW5jaG9yTGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW50cm8gPSBET0MucXVlcnlTZWxlY3RvcignLmludHJvJyk7XG4gICAgICAgIGlmIChhbmNob3JMaW5rID09PSAnaW50cm8nKSB7XG4gICAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZChJTlRST19JU19BQ1RJVkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb3ZlVG9JbnRybygnLmF2YXRhcl9fbW91c2UnKTtcblxuICAgIGNvbnN0IGZldGNoQXBpID0gbmV3IEZldGNoR2l0SHViQXBpKCk7XG4gICAgZmV0Y2hBcGkuZmV0Y2goKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBBUElzXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xuXG59KGpRdWVyeSkpO1xuXG5cbiQoRE9DKS5yZWFkeSgoKSA9PiB7XG4gIEpPU0hVQS5pbml0KCk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBET0MgPSBkb2N1bWVudDtcbmV4cG9ydCBjb25zdCBCT0RZID0gZG9jdW1lbnQuYm9keTtcbmV4cG9ydCBjb25zdCBXSU5ET1dfSVNfTE9BREVEID0gJ3dpbmRvdy0taXMtbG9hZGVkJztcbmV4cG9ydCBjb25zdCBJTlRST19JU19BQ1RJVkUgPSAnaW50cm8tLWlzLWFjdGl2ZSc7XG5leHBvcnQgY29uc3QgRkFMTEJBQ0tfQVZBVEFSX1VSTCA9ICdidWlsZC9pbWFnZXMvam9zaHVhLXBpYy5qcGVnJztcbmV4cG9ydCBjb25zdCBHSVRIVUJfQVBJX1VSTCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2tvbmVrb3lhJzsiLCJpbXBvcnQgeyBcbiAgRE9DLCBcbiAgQk9EWSwgXG4gIFdJTkRPV19JU19MT0FERUQsXG4gIEdJVEhVQl9BUElfVVJMLFxuICBGQUxMQkFDS19BVkFUQVJfVVJMXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hHaXRIdWJBcGkge1xuXG4gIGFkZExvYWRlZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgQk9EWS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBzZXRBdmF0YXJVUkwoVVJMID0gRkFMTEJBQ0tfQVZBVEFSX1VSTCkge1xuICAgIERPQy5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyX19pbWcnKVxuICAgICAgLnNldEF0dHJpYnV0ZSgnc3JjJywgVVJMKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yTWVzc2FnZShlcnJvck9iaikge1xuICAgIGxldCB7IHJlc3BvbnNlVGV4dCB9ID0gZXJyb3JPYmo7XG4gICAgcmVzcG9uc2VUZXh0ID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpXG4gICAgY29uc29sZS5lcnJvcihgRVJST1IgTUVTU0FHRTogJHtyZXNwb25zZVRleHQubWVzc2FnZX1gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmZXRjaCgpIHtcbiAgICAkLmdldChHSVRIVUJfQVBJX1VSTClcbiAgICAgIC5kb25lKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRBdmF0YXJVUkwocmVzdWx0LmF2YXRhcl91cmwpO1xuICAgICAgICB0aGlzLmFkZExvYWRlZENsYXNzKFdJTkRPV19JU19MT0FERUQpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgIHRoaXMuc2V0QXZhdGFyVVJMKCk7XG4gICAgICAgIHRoaXMuYWRkTG9hZGVkQ2xhc3MoV0lORE9XX0lTX0xPQURFRCk7XG4gICAgICB9KTtcbiAgfVxufVxuXG4iXX0=
