webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./components/VideoPlayer.js":
/*!***********************************!*\
  !*** ./components/VideoPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/Rafaell416/Documents/CODE/WEBS/vidslice/components/VideoPlayer.js";



var VideoPlayer = function VideoPlayer(_ref) {
  var url = _ref.url,
      muted = _ref.muted,
      height = _ref.height,
      width = _ref.width;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
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
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: url,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "link to the video"), " instead.")));
};

var video = document.getElementById('video-player');
console.log('video duration: ', video.duration);
VideoPlayer.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (VideoPlayer);

/***/ })

})
//# sourceMappingURL=clips.js.217f3fc24811220a22ff.hot-update.js.map