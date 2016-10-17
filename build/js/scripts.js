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
    fetchApi.fetch(_constants.GITHUB_API_URL);
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
    value: function fetch(URL) {
      var _this = this;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbnN0YW50cy5qcyIsInNyYy9qcy9mZXRjaC1naXRodWItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLGVBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLFlBQU0sYUFEZ0I7QUFFdEIsa0JBQVksSUFGVTtBQUd0QiwwQkFBb0IsQ0FBQyxpQkFBRCxFQUFvQiw0QkFBcEIsQ0FIRTtBQUl0QixZQUFNLElBSmdCOztBQU10QjtBQUNBLGtCQUFZLDBDQVBVO0FBUXRCLG9CQUFjLElBUlE7O0FBVXRCO0FBQ0E7QUFDQSxpQkFBVyxtQkFBQyxVQUFELEVBQWEsS0FBYixFQUF1QjtBQUNoQyxZQUFNLFFBQVEsZUFBSSxhQUFKLENBQWtCLFFBQWxCLENBQWQ7QUFDQSxZQUFJLGVBQWUsT0FBbkIsRUFBNEI7QUFDMUIsZ0JBQU0sU0FBTixDQUFnQixHQUFoQjtBQUNEO0FBQ0Y7QUFqQnFCLEtBQXhCOztBQW9CQSxnQkFBWSxnQkFBWjs7QUFFQSxRQUFNLFdBQVcsOEJBQWpCO0FBQ0EsYUFBUyxLQUFUO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFJRCxDQS9DZSxDQStDZCxNQS9DYyxDQUFoQjs7QUFrREEsa0JBQU8sS0FBUCxDQUFhLFlBQU07QUFDakIsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7QUNyRE8sSUFBTSxvQkFBTSxRQUFaO0FBQ0EsSUFBTSxzQkFBTyxTQUFTLElBQXRCO0FBQ0EsSUFBTSw4Q0FBbUIsbUJBQXpCO0FBQ0EsSUFBTSw0Q0FBa0Isa0JBQXhCO0FBQ0EsSUFBTSxvREFBc0IsOEJBQTVCO0FBQ0EsSUFBTSwwQ0FBaUIsdUNBQXZCOzs7Ozs7Ozs7OztBQ0xQOzs7O0lBT3FCLGM7Ozs7Ozs7bUNBRUosUyxFQUFXO0FBQ3hCLGlCQUFXLFlBQU07QUFDZix3QkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixTQUFuQjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OzttQ0FFdUM7QUFBQSxVQUEzQixHQUEyQjs7QUFDdEMscUJBQUksYUFBSixDQUFrQixjQUFsQixFQUNHLFlBREgsQ0FDZ0IsS0FEaEIsRUFDdUIsR0FEdkI7QUFFRDs7O3VDQUVrQixRLEVBQVU7QUFBQSxVQUNyQixZQURxQixHQUNKLFFBREksQ0FDckIsWUFEcUI7O0FBRTNCLHFCQUFlLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBZjtBQUNBLGNBQVEsS0FBUixxQkFBZ0MsYUFBYSxPQUE3QztBQUNBLGFBQU8sS0FBUDtBQUNEOzs7MEJBRUssRyxFQUFLO0FBQUE7O0FBQ1QsUUFBRSxHQUFGLENBQU0sR0FBTixFQUNHLElBREgsQ0FDUSxVQUFDLE1BQUQsRUFBWTtBQUNoQixjQUFLLFlBQUwsQ0FBa0IsT0FBTyxVQUF6QjtBQUNBLGNBQUssY0FBTDtBQUNELE9BSkgsRUFLRyxJQUxILENBS1EsVUFBQyxLQUFELEVBQVc7QUFDZixjQUFLLGtCQUFMLENBQXdCLEtBQXhCO0FBQ0EsY0FBSyxZQUFMO0FBQ0EsY0FBSyxjQUFMO0FBQ0QsT0FUSDtBQVVEOzs7Ozs7a0JBL0JrQixjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IERPQywgSU5UUk9fSVNfQUNUSVZFLCBHSVRIVUJfQVBJX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBGZXRjaEdpdEh1YkFwaSBmcm9tICcuL2ZldGNoLWdpdGh1Yi1hcGknO1xuXG5jb25zdCBKT1NIVUEgPSAoZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gbW92ZVRvSW50cm8oZWwpIHtcbiAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyAmJiBlbC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gRE9DLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgXG4gICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICQuZm4uZnVsbHBhZ2UubW92ZVRvKCdpbnRybycpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKCcjZnVsbHBhZ2UnKS5mdWxscGFnZSh7XG4gICAgICBtZW51OiAnI25hdmlnYXRpb24nLFxuICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb25Ub29sdGlwczogWydIb21lIHN3ZWV0IGhvbWUnLCAnWWVwLCBBIGxsbGxsaXR0bGUgQWJvdXQgTWUnXSxcbiAgICAgIGNzczM6IHRydWUsXG5cbiAgICAgIC8vIGVhc2luZyB0b29sIC0gaHR0cHM6Ly9tYXR0aGV3bGVpbi5jb20vY2Vhc2VyL1xuICAgICAgZWFzaW5nY3NzMzogJ2N1YmljLWJlemllcigwLjg5NSwgMC4wMzAsIDAuNjg1LCAwLjIyMCknLCBcbiAgICAgIGZpdFRvU2VjdGlvbjogdHJ1ZSxcblxuICAgICAgLy8gVGVtcCwgV0lQOiBBZGQgdHJhbnNpdGlvbiBmb3IgdGhlIHNlY29uZCBwYWdlXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMgXG4gICAgICBhZnRlckxvYWQ6IChhbmNob3JMaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRybyA9IERPQy5xdWVyeVNlbGVjdG9yKCcuaW50cm8nKTtcbiAgICAgICAgaWYgKGFuY2hvckxpbmsgPT09ICdpbnRybycpIHtcbiAgICAgICAgICBpbnRyby5jbGFzc0xpc3QuYWRkKElOVFJPX0lTX0FDVElWRSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vdmVUb0ludHJvKCcuYXZhdGFyX19tb3VzZScpO1xuXG4gICAgY29uc3QgZmV0Y2hBcGkgPSBuZXcgRmV0Y2hHaXRIdWJBcGkoKTtcbiAgICBmZXRjaEFwaS5mZXRjaChHSVRIVUJfQVBJX1VSTCk7XG4gIH1cblxuICAvLyBwdWJsaWMgQVBJc1xuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXRcbiAgfTtcblxufShqUXVlcnkpKTtcblxuXG4kKERPQykucmVhZHkoKCkgPT4ge1xuICBKT1NIVUEuaW5pdCgpO1xufSk7XG4iLCJleHBvcnQgY29uc3QgRE9DID0gZG9jdW1lbnQ7XG5leHBvcnQgY29uc3QgQk9EWSA9IGRvY3VtZW50LmJvZHk7XG5leHBvcnQgY29uc3QgV0lORE9XX0lTX0xPQURFRCA9ICd3aW5kb3ctLWlzLWxvYWRlZCc7XG5leHBvcnQgY29uc3QgSU5UUk9fSVNfQUNUSVZFID0gJ2ludHJvLS1pcy1hY3RpdmUnO1xuZXhwb3J0IGNvbnN0IEZBTExCQUNLX0FWQVRBUl9VUkwgPSAnYnVpbGQvaW1hZ2VzL2pvc2h1YS1waWMuanBlZyc7XG5leHBvcnQgY29uc3QgR0lUSFVCX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9rb25la295YSc7IiwiaW1wb3J0IHsgXG4gIERPQywgXG4gIEJPRFksIFxuICBXSU5ET1dfSVNfTE9BREVELFxuICBGQUxMQkFDS19BVkFUQVJfVVJMXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hHaXRIdWJBcGkge1xuXG4gIGFkZExvYWRlZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgQk9EWS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBzZXRBdmF0YXJVUkwoVVJMID0gRkFMTEJBQ0tfQVZBVEFSX1VSTCkge1xuICAgIERPQy5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyX19pbWcnKVxuICAgICAgLnNldEF0dHJpYnV0ZSgnc3JjJywgVVJMKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yTWVzc2FnZShlcnJvck9iaikge1xuICAgIGxldCB7IHJlc3BvbnNlVGV4dCB9ID0gZXJyb3JPYmo7XG4gICAgcmVzcG9uc2VUZXh0ID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpXG4gICAgY29uc29sZS5lcnJvcihgRVJST1IgTUVTU0FHRTogJHtyZXNwb25zZVRleHQubWVzc2FnZX1gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmZXRjaChVUkwpIHtcbiAgICAkLmdldChVUkwpXG4gICAgICAuZG9uZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0QXZhdGFyVVJMKHJlc3VsdC5hdmF0YXJfdXJsKTtcbiAgICAgICAgdGhpcy5hZGRMb2FkZWRDbGFzcyhXSU5ET1dfSVNfTE9BREVEKTtcbiAgICAgIH0pXG4gICAgICAuZmFpbCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICB0aGlzLnNldEF2YXRhclVSTCgpO1xuICAgICAgICB0aGlzLmFkZExvYWRlZENsYXNzKFdJTkRPV19JU19MT0FERUQpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuIl19
