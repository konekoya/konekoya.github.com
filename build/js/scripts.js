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
      _constants.BODY.classList.add(className);
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
          _this.addLoadedClass(_constants.WINDOW_IS_LOADED);
        }
      });
    }
  }]);

  return FetchGitHubApi;
}();

exports.default = FetchGitHubApi;

},{"./constants":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbnN0YW50cy5qcyIsInNyYy9qcy9mZXRjaC1naXRodWItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLGVBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLFlBQU0sYUFEZ0I7QUFFdEIsa0JBQVksSUFGVTtBQUd0QiwwQkFBb0IsQ0FBQyxpQkFBRCxFQUFvQiw0QkFBcEIsQ0FIRTtBQUl0QixZQUFNLElBSmdCOztBQU10QjtBQUNBLGtCQUFZLDBDQVBVO0FBUXRCLG9CQUFjO0FBUlEsS0FBeEI7O0FBV0EsZ0JBQVksZ0JBQVo7O0FBRUEsUUFBTSxXQUFXLDhCQUFqQjtBQUNBLGFBQVMsS0FBVDtBQUNEOztBQUVEO0FBQ0EsU0FBTztBQUNMLFVBQU07QUFERCxHQUFQO0FBSUQsQ0F0Q2UsQ0FzQ2QsTUF0Q2MsQ0FBaEI7O0FBeUNBLGtCQUFPLEtBQVAsQ0FBYSxZQUFNO0FBQ2pCLFNBQU8sSUFBUDtBQUNELENBRkQ7Ozs7Ozs7O0FDNUNPLElBQU0sb0JBQU0sUUFBWjtBQUNBLElBQU0sc0JBQU8sU0FBUyxJQUF0QjtBQUNBLElBQU0sOENBQW1CLG1CQUF6Qjs7Ozs7Ozs7Ozs7QUNGUDs7OztJQUVxQixjOzs7Ozs7O21DQUVKLFMsRUFBVztBQUN4QixzQkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixTQUFuQjtBQUNEOzs7aUNBRVksRyxFQUFLO0FBQ2hCLHFCQUFJLGFBQUosQ0FBa0IsY0FBbEIsRUFDRyxZQURILENBQ2dCLEtBRGhCLEVBQ3VCLEdBRHZCO0FBRUQ7Ozs0QkFFTztBQUFBOztBQUNOLFFBQUUsR0FBRixDQUFNLHVDQUFOLEVBQStDLFVBQUMsTUFBRCxFQUFZO0FBQ3pELFlBQUksTUFBSixFQUFZO0FBQ1YsZ0JBQUssWUFBTCxDQUFrQixPQUFPLFVBQXpCO0FBQ0EsZ0JBQUssY0FBTDtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7Ozs7a0JBbEJrQixjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IERPQyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBGZXRjaEdpdEh1YkFwaSBmcm9tICcuL2ZldGNoLWdpdGh1Yi1hcGknO1xuXG5jb25zdCBKT1NIVUEgPSAoZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gbW92ZVRvSW50cm8oZWwpIHtcbiAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyAmJiBlbC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gRE9DLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgXG4gICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICQuZm4uZnVsbHBhZ2UubW92ZVRvKCdpbnRybycpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKCcjZnVsbHBhZ2UnKS5mdWxscGFnZSh7XG4gICAgICBtZW51OiAnI25hdmlnYXRpb24nLFxuICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb25Ub29sdGlwczogWydIb21lIHN3ZWV0IGhvbWUnLCAnWWVwLCBBIGxsbGxsaXR0bGUgQWJvdXQgTWUnXSxcbiAgICAgIGNzczM6IHRydWUsXG5cbiAgICAgIC8vIGVhc2luZyB0b29sIC0gaHR0cHM6Ly9tYXR0aGV3bGVpbi5jb20vY2Vhc2VyL1xuICAgICAgZWFzaW5nY3NzMzogJ2N1YmljLWJlemllcigwLjg5NSwgMC4wMzAsIDAuNjg1LCAwLjIyMCknLCBcbiAgICAgIGZpdFRvU2VjdGlvbjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgbW92ZVRvSW50cm8oJy5hdmF0YXJfX21vdXNlJyk7XG5cbiAgICBjb25zdCBmZXRjaEFwaSA9IG5ldyBGZXRjaEdpdEh1YkFwaSgpO1xuICAgIGZldGNoQXBpLmZldGNoKCk7XG4gIH1cblxuICAvLyBwdWJsaWMgQVBJc1xuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXRcbiAgfTtcblxufShqUXVlcnkpKTtcblxuXG4kKERPQykucmVhZHkoKCkgPT4ge1xuICBKT1NIVUEuaW5pdCgpO1xufSk7XG4iLCJleHBvcnQgY29uc3QgRE9DID0gZG9jdW1lbnQ7XG5leHBvcnQgY29uc3QgQk9EWSA9IGRvY3VtZW50LmJvZHk7XG5leHBvcnQgY29uc3QgV0lORE9XX0lTX0xPQURFRCA9ICd3aW5kb3ctLWlzLWxvYWRlZCc7XG4iLCJpbXBvcnQgeyBET0MsIEJPRFksIFdJTkRPV19JU19MT0FERUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoR2l0SHViQXBpIHtcblxuICBhZGRMb2FkZWRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBCT0RZLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHNldEF2YXRhclVSTChVUkwpIHtcbiAgICBET0MucXVlcnlTZWxlY3RvcignLmF2YXRhcl9faW1nJylcbiAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NyYycsIFVSTCk7XG4gIH1cblxuICBmZXRjaCgpIHtcbiAgICAkLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9rb25la295YScsIChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRBdmF0YXJVUkwocmVzdWx0LmF2YXRhcl91cmwpO1xuICAgICAgICB0aGlzLmFkZExvYWRlZENsYXNzKFdJTkRPV19JU19MT0FERUQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbiJdfQ==
