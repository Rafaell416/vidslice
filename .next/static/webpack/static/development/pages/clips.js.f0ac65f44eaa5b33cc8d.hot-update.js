webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./containers/VideoPlayer.js":
/*!***********************************!*\
  !*** ./containers/VideoPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib */ "./lib/index.js");


var _jsxFileName = "/Users/Rafaell416/Documents/CODE/WEBS/vidslice/containers/VideoPlayer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var VideoPlayer =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoPlayer, _Component);

  function VideoPlayer() {
    _classCallCheck(this, VideoPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoPlayer).apply(this, arguments));
  }

  _createClass(VideoPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var video = document.getElementById('video-player');
      video.addEventListener('loadedmetadata', function () {
        var secondsRounded = Math.round(video.duration);
        var formatedStartAt = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["secondsToFormatedTime"])('0');
        var formatedEndAt = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["secondsToFormatedTime"])(secondsRounded);

        _this.props.updateFullVideoDuration({
          startAt: formatedStartAt,
          endAt: formatedEndAt
        });

        _this.props.updateDefaultRangeValues({
          defaultMin: 0,
          defaultMax: secondsRounded,
          value: {
            min: 0,
            max: 10
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          muted = _this$props.muted,
          height = _this$props.height,
          width = _this$props.width;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        id: "video-player",
        height: height,
        width: width,
        controls: true,
        muted: muted || false,
        preload: "metadata",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: url,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Your browser doesn't support HTML5 video. Here is a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "link to the video"), " instead.")));
    }
  }]);

  return VideoPlayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


VideoPlayer.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ })

})
//# sourceMappingURL=clips.js.f0ac65f44eaa5b33cc8d.hot-update.js.map