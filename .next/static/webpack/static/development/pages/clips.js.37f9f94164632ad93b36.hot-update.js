webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./pages/clips.js":
/*!************************!*\
  !*** ./pages/clips.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/Rafaell416/Documents/CODE/WEBS/vidslice/pages/clips.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Clips",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "section top-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "video-player-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        id: "video-player",
        controls: true,
        muted: true,
        preload: "metadata",
        className: "jsx-2387353069",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
        src: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
        type: "video/mp4",
        className: "jsx-2387353069",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2387353069",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Your browser doesn't support HTML5 video. Here is a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
        className: "jsx-2387353069",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "link to the video"), " instead."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "form-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "name-input-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "NAME INPUT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "slider-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "SLIDER"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "button-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "BUTTON"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2387353069" + " " + "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "BOTTOM SECTION")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2387353069",
        css: ".container.jsx-2387353069{display:grid;grid-gap:20px;grid-template-rows:350px 300px;}.section.jsx-2387353069{background:red;}.top-section.jsx-2387353069{display:grid;grid-gap:20px;grid-template-columns:800px auto;}.video-player-view.jsx-2387353069{padding:10px;}.top-section.jsx-2387353069 .form-view.jsx-2387353069{display:grid;grid-template-rows:repeat(3,auto);}.name-input-view.jsx-2387353069{background:#e74c3c;}.slider-view.jsx-2387353069{background:#8e44ad;}.button-view.jsx-2387353069{background:#e67e22;}.centered.jsx-2387353069{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#video-player.jsx-2387353069{height:340px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvcGFnZXMvY2xpcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NXLEFBRzRCLEFBTUUsQUFJRixBQU1BLEFBSUEsQUFNaEIsQUFHc0IsQUFJQSxBQUlOLEFBTUEsYUExQ0MsQUFVQSxBQU1oQixBQUlxQyxBQWlCaEIsQUFNUixFQXJDYixJQW1CQSxBQUlBLEFBSUEsS0FXQSxHQTNDaUMsQUFVRSxvQkFVbkMsV0FuQkEsRUFVQSw4Q0EwQnlCLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvUmFmYWVsbDQxNi9Eb2N1bWVudHMvQ09ERS9XRUJTL3ZpZHNsaWNlL3BhZ2VzL2NsaXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJDbGlwc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiB0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXItdmlld1wiPlxuICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJ2aWRlby1wbGF5ZXJcIiBjb250cm9scyBtdXRlZCBwcmVsb2FkPVwibWV0YWRhdGFcIj5cbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG93bmxvYWQuYmxlbmRlci5vcmcvZHVyaWFuL3RyYWlsZXIvc2ludGVsX3RyYWlsZXItNDgwcC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIvPlxuICAgICAgICAgICAgICAgIDxwPllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgSFRNTDUgdmlkZW8uIEhlcmUgaXMgYSA8YSBocmVmPVwiaHR0cHM6Ly9kb3dubG9hZC5ibGVuZGVyLm9yZy9kdXJpYW4vdHJhaWxlci9zaW50ZWxfdHJhaWxlci00ODBwLm1wNFwiPmxpbmsgdG8gdGhlIHZpZGVvPC9hPiBpbnN0ZWFkLjwvcD5cbiAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXZpZXdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWlucHV0LXZpZXcgY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICBOQU1FIElOUFVUXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci12aWV3IGNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgU0xJREVSXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi12aWV3IGNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgQlVUVE9OXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICBCT1RUT00gU0VDVElPTlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IDMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAwcHggYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZpZGVvLXBsYXllci12aWV3IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uIC5mb3JtLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hbWUtaW5wdXQtdmlldyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNzRjM2NcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsaWRlci12aWV3IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzhlNDRhZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbi12aWV3IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2N2UyMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNlbnRlcmVkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICN2aWRlby1wbGF5ZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/pages/clips.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/clips")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=clips.js.37f9f94164632ad93b36.hot-update.js.map