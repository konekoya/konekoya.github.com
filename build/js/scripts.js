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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxjb25zdGFudHMuanMiLCJzcmNcXGpzXFxmZXRjaC1naXRodWItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFNQTs7Ozs7O0FBRUEsSUFBTSxTQUFVLFVBQVMsQ0FBVCxFQUFZO0FBQzFCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixFQUFyQixFQUF5QjtBQUN2QixRQUFJLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxNQUFILEdBQVksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBTSxVQUFVLGVBQUksYUFBSixDQUFrQixFQUFsQixDQUFoQjs7QUFFQSxVQUFJLE9BQUosRUFBYTtBQUNYLGdCQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsWUFBRSxFQUFGLENBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckI7QUFDRCxTQUZELEVBRUcsS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTLElBQVQsR0FBZ0I7QUFDZCxRQUFNLFdBQVcsOEJBQWpCO0FBQ0EsYUFBUyxLQUFUOztBQUVBLE1BQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0I7QUFDdEIsWUFBTSxhQURnQjtBQUV0QixrQkFBWSxJQUZVO0FBR3RCLDBCQUFvQixDQUFDLGlCQUFELEVBQW9CLDRCQUFwQixDQUhFO0FBSXRCLFlBQU0sSUFKZ0I7O0FBTXRCO0FBQ0Esa0JBQVksMENBUFU7QUFRdEIsb0JBQWMsSUFSUTs7QUFVdEI7QUFDQTtBQUNBLGlCQUFXLG1CQUFDLFVBQUQsRUFBYSxLQUFiLEVBQXVCO0FBQ2hDLFlBQU0sUUFBUSxlQUFJLGFBQUosQ0FBa0IsUUFBbEIsQ0FBZDtBQUNBLFlBQUksZUFBZSxPQUFuQixFQUE0QjtBQUMxQixnQkFBTSxTQUFOLENBQWdCLEdBQWhCO0FBQ0Q7QUFDRjtBQWpCcUIsS0FBeEI7O0FBb0JBLGdCQUFZLGdCQUFaO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPO0FBQ0wsVUFBTTtBQURELEdBQVA7QUFJRCxDQS9DZSxDQStDZCxNQS9DYyxDQUFoQjs7QUFpREEsa0JBQU8sS0FBUCxDQUFhLFlBQU07QUFDakIsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7QUN6RE8sSUFBTSxvQkFBTSxRQUFaO0FBQ0EsSUFBTSxzQkFBTyxTQUFTLElBQXRCO0FBQ0EsSUFBTSw4Q0FBbUIsbUJBQXpCO0FBQ0EsSUFBTSw0Q0FBa0Isa0JBQXhCO0FBQ0EsSUFBTSxvREFBc0IsOEJBQTVCO0FBQ0EsSUFBTSwwQ0FBaUIsdUNBQXZCOzs7Ozs7Ozs7OztBQ0xQOzs7O0lBT3FCLGM7Ozs7Ozs7bUNBRUosUyxFQUFXO0FBQ3hCLGlCQUFXLFlBQU07QUFDZix3QkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixTQUFuQjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OzttQ0FFdUM7QUFBQSxVQUEzQixHQUEyQjs7QUFDdEMscUJBQUksYUFBSixDQUFrQixjQUFsQixFQUNHLFlBREgsQ0FDZ0IsS0FEaEIsRUFDdUIsR0FEdkI7QUFFRDs7O3VDQUVrQixRLEVBQVU7QUFBQSxVQUNyQixZQURxQixHQUNKLFFBREksQ0FDckIsWUFEcUI7O0FBRTNCLHFCQUFlLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBZjtBQUNBO0FBQ0EsY0FBUSxLQUFSLHFCQUFnQyxhQUFhLE9BQTdDO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7OzswQkFFSyxHLEVBQUs7QUFBQTs7QUFDVDtBQUNBLFFBQUUsR0FBRixDQUFNLEdBQU4sRUFDRyxJQURILENBQ1EsVUFBQyxNQUFELEVBQVk7QUFDaEIsY0FBSyxZQUFMLENBQWtCLE9BQU8sVUFBekI7QUFDQSxjQUFLLGNBQUw7QUFDRCxPQUpILEVBS0csSUFMSCxDQUtRLFVBQUMsS0FBRCxFQUFXO0FBQ2YsY0FBSyxrQkFBTCxDQUF3QixLQUF4QjtBQUNBLGNBQUssWUFBTDtBQUNBLGNBQUssY0FBTDtBQUNELE9BVEg7QUFVRDs7Ozs7O2tCQWpDa0IsYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge1xyXG4gIERPQyxcclxuICBJTlRST19JU19BQ1RJVkUsXHJcbiAgR0lUSFVCX0FQSV9VUkxcclxufSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgRmV0Y2hHaXRIdWJBcGkgZnJvbSAnLi9mZXRjaC1naXRodWItYXBpJztcclxuXHJcbmNvbnN0IEpPU0hVQSA9IChmdW5jdGlvbigkKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlVG9JbnRybyhlbCkge1xyXG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB0cmlnZ2VyID0gRE9DLnF1ZXJ5U2VsZWN0b3IoZWwpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHRyaWdnZXIpIHtcclxuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgJC5mbi5mdWxscGFnZS5tb3ZlVG8oJ2ludHJvJyk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgZmV0Y2hBcGkgPSBuZXcgRmV0Y2hHaXRIdWJBcGkoKTtcclxuICAgIGZldGNoQXBpLmZldGNoKEdJVEhVQl9BUElfVVJMKTtcclxuICAgIFxyXG4gICAgJCgnI2Z1bGxwYWdlJykuZnVsbHBhZ2Uoe1xyXG4gICAgICBtZW51OiAnI25hdmlnYXRpb24nLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uVG9vbHRpcHM6IFsnSG9tZSBzd2VldCBob21lJywgJ1llcCwgQSBsbGxsbGl0dGxlIEFib3V0IE1lJ10sXHJcbiAgICAgIGNzczM6IHRydWUsXHJcblxyXG4gICAgICAvLyBlYXNpbmcgdG9vbCAtIGh0dHBzOi8vbWF0dGhld2xlaW4uY29tL2NlYXNlci9cclxuICAgICAgZWFzaW5nY3NzMzogJ2N1YmljLWJlemllcigwLjg5NSwgMC4wMzAsIDAuNjg1LCAwLjIyMCknLCBcclxuICAgICAgZml0VG9TZWN0aW9uOiB0cnVlLFxyXG5cclxuICAgICAgLy8gVGVtcCwgV0lQOiBBZGQgdHJhbnNpdGlvbiBmb3IgdGhlIHNlY29uZCBwYWdlXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcyBcclxuICAgICAgYWZ0ZXJMb2FkOiAoYW5jaG9yTGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRybyA9IERPQy5xdWVyeVNlbGVjdG9yKCcuaW50cm8nKTtcclxuICAgICAgICBpZiAoYW5jaG9yTGluayA9PT0gJ2ludHJvJykge1xyXG4gICAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZChJTlRST19JU19BQ1RJVkUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbW92ZVRvSW50cm8oJy5hdmF0YXJfX21vdXNlJyk7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgQVBJc1xyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfTtcclxuXHJcbn0oalF1ZXJ5KSk7XHJcblxyXG4kKERPQykucmVhZHkoKCkgPT4ge1xyXG4gIEpPU0hVQS5pbml0KCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgRE9DID0gZG9jdW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBCT0RZID0gZG9jdW1lbnQuYm9keTtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19JU19MT0FERUQgPSAnd2luZG93LS1pcy1sb2FkZWQnO1xyXG5leHBvcnQgY29uc3QgSU5UUk9fSVNfQUNUSVZFID0gJ2ludHJvLS1pcy1hY3RpdmUnO1xyXG5leHBvcnQgY29uc3QgRkFMTEJBQ0tfQVZBVEFSX1VSTCA9ICdidWlsZC9pbWFnZXMvam9zaHVhLXBpYy5qcGVnJztcclxuZXhwb3J0IGNvbnN0IEdJVEhVQl9BUElfVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMva29uZWtveWEnOyIsImltcG9ydCB7IFxyXG4gIERPQywgXHJcbiAgQk9EWSwgXHJcbiAgV0lORE9XX0lTX0xPQURFRCxcclxuICBGQUxMQkFDS19BVkFUQVJfVVJMXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hHaXRIdWJBcGkge1xyXG5cclxuICBhZGRMb2FkZWRDbGFzcyhjbGFzc05hbWUpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBCT0RZLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgc2V0QXZhdGFyVVJMKFVSTCA9IEZBTExCQUNLX0FWQVRBUl9VUkwpIHtcclxuICAgIERPQy5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyX19pbWcnKVxyXG4gICAgICAuc2V0QXR0cmlidXRlKCdzcmMnLCBVUkwpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JNZXNzYWdlKGVycm9yT2JqKSB7XHJcbiAgICBsZXQgeyByZXNwb25zZVRleHQgfSA9IGVycm9yT2JqO1xyXG4gICAgcmVzcG9uc2VUZXh0ID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbiAgICBjb25zb2xlLmVycm9yKGBFUlJPUiBNRVNTQUdFOiAke3Jlc3BvbnNlVGV4dC5tZXNzYWdlfWApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2goVVJMKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICQuZ2V0KFVSTClcclxuICAgICAgLmRvbmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0QXZhdGFyVVJMKHJlc3VsdC5hdmF0YXJfdXJsKTtcclxuICAgICAgICB0aGlzLmFkZExvYWRlZENsYXNzKFdJTkRPV19JU19MT0FERUQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9yTWVzc2FnZShlcnJvcik7XHJcbiAgICAgICAgdGhpcy5zZXRBdmF0YXJVUkwoKTtcclxuICAgICAgICB0aGlzLmFkZExvYWRlZENsYXNzKFdJTkRPV19JU19MT0FERUQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
