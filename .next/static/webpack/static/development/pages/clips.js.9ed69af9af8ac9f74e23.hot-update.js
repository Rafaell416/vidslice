webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./pages/clips.js":
/*!************************!*\
  !*** ./pages/clips.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _containers_VideoPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/VideoPlayer */ "./containers/VideoPlayer.js");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputField */ "./components/InputField.js");
/* harmony import */ var _components_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ActionButton */ "./components/ActionButton.js");
/* harmony import */ var _components_ClipCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ClipCard */ "./components/ClipCard.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-input-range */ "./node_modules/react-input-range/lib/js/index.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib */ "./lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "/Users/Rafaell416/Documents/CODE/WEBS/vidslice/pages/clips.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var cls =
/*#__PURE__*/
function (_Component) {
  _inherits(cls, _Component);

  function cls() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, cls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(cls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleOnchangeInputValue", function (e) {
      return _this.setState({
        name: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_checkIfInputIsFilled", function () {
      if (!_this.state.name) return true;
      return false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleRangeChange", function (value) {
      return _this.props.updateRangeValues(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClickClipCard", function (id, startAt, endAt) {
      var url = _this.props.state.vidslice.video.url;
      var matchUrl = url.match(/https?.*?\.mp4/g);
      var cleanUrl = matchUrl[0];
      var urlWithMediaFragments = "".concat(cleanUrl, "#t=").concat(startAt, ",").concat(endAt);

      _this.props.toggleSelectClipCard(id);

      _this.props.addVideoUrl(urlWithMediaFragments);

      var video = document.getElementById('video-player');
      video.load();
      video.play();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createClip", function () {
      var name = _this.state.name;
      var _this$props$state$vid = _this.props.state.vidslice.video.value,
          min = _this$props$state$vid.min,
          max = _this$props$state$vid.max;
      var startAt = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["secondsToFormatedTime"])(min);
      var endAt = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["secondsToFormatedTime"])(max);

      _this.props.addClipToClipList({
        name: name,
        endAt: endAt,
        startAt: startAt
      });

      _this.setState({
        name: ''
      });

      _this.props.updateRangeValues({
        min: 0,
        max: 10
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleDeleteCLip", function (e, id) {
      e.stopPropagation();
      var url = _this.props.state.vidslice.video.url;
      var matchUrl = url.match(/https?.*?\.mp4/g);
      var cleanUrl = matchUrl[0];

      _this.props.addVideoUrl(cleanUrl);

      _this.props.deleteClipFromClipList(id);

      var video = document.getElementById('video-player');
      video.load();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleEditClip", function (e, id) {
      e.stopPropagation();
    });

    return _this;
  }

  _createClass(cls, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var name = this.state.name;
      var _this$props$state$vid2 = this.props.state.vidslice,
          clips = _this$props$state$vid2.clips,
          _this$props$state$vid3 = _this$props$state$vid2.video,
          url = _this$props$state$vid3.url,
          defaultMin = _this$props$state$vid3.defaultMin,
          defaultMax = _this$props$state$vid3.defaultMax,
          value = _this$props$state$vid3.value;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Clips",
        right: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          onClick: function onClick() {
            return console.log('edit');
          },
          className: "jsx-73944576" + " " + "material-icons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "cancel"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "section top-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "video-player-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_VideoPlayer__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        url: url,
        muted: true,
        height: "350px",
        width: "100%"
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "form-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "name-input-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        placeholder: "Write a name for your clip",
        value: name,
        onChange: this._handleOnchangeInputValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "slider-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_input_range__WEBPACK_IMPORTED_MODULE_7___default.a, {
        maxValue: defaultMax,
        minValue: defaultMin,
        value: value,
        onChange: this._handleRangeChange,
        ariaLabelledby: "hello",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "button-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Create clip",
        backgroundColor: "#1abc9c",
        textColor: "white",
        onClick: this._createClip,
        disabled: this._checkIfInputIsFilled(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "clips-list-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, clips.map(function (clip) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ClipCard__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
          key: clip.id
        }, clip, {
          onClick: _this2._onClickClipCard,
          deleteClip: _this2._handleDeleteCLip,
          editClip: _this2._handleEditClip,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "73944576",
        css: ".container.jsx-73944576{display:grid;grid-gap:20px;grid-template-rows:350px 300px;}.top-section.jsx-73944576{display:grid;grid-gap:20px;grid-template-columns:800px auto;}.video-player-view.jsx-73944576{background:black;margin-left:10px;}.top-section.jsx-73944576 .form-view.jsx-73944576{display:grid;grid-template-rows:repeat(3,auto);}.slider-view.jsx-73944576{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;}.clips-list-view.jsx-73944576{padding-top:20px;padding-left:10px;padding-right:10px;display:grid;grid-template-columns:repeat(7,1fr);grid-gap:20px;}.centered.jsx-73944576{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvcGFnZXMvY2xpcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0pXLEFBRzRCLEFBVUEsQUFNSSxBQUtKLEFBU0EsQUFVSSxBQVNKLGFBaERDLEFBVUEsQUFXcUIsQUFTaEIsQUFtQkEsSUFqQ0YsQUF3QkMsVUF2Q2EsQUFVRSxPQU1uQyxDQXdCcUIsWUFuQnJCLE9Bb0JlLElBeENmLEVBVUEsT0ErQnVDLG9DQUN2QixHQWJELEFBbUJVLFdBTHpCLEVBYkEsc0ZBbUJBIiwiZmlsZSI6Ii9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvcGFnZXMvY2xpcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi4vY29udGFpbmVycy9WaWRlb1BsYXllcidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5pbXBvcnQgQ2xpcENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DbGlwQ2FyZCdcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gJ3JlYWN0LWlucHV0LXJhbmdlJ1xuaW1wb3J0IHsgc2Vjb25kc1RvRm9ybWF0ZWRUaW1lIH0gZnJvbSAnLi4vbGliJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtcbiAgYWRkVmlkZW9VcmwsXG4gIHVwZGF0ZVJhbmdlVmFsdWVzLFxuICBhZGRDbGlwVG9DbGlwTGlzdCxcbiAgdG9nZ2xlU2VsZWN0Q2xpcENhcmQsXG4gIGRlbGV0ZUNsaXBGcm9tQ2xpcExpc3QsXG4gIHVwZGF0ZUZ1bGxWaWRlb0R1cmF0aW9uLFxuICB1cGRhdGVEZWZhdWx0UmFuZ2VWYWx1ZXNXaGVuVmlkZW9GaW5pc2hMb2FkXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5cbmNsYXNzIGNscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG5hbWU6ICcnXG4gIH1cblxuICBfaGFuZGxlT25jaGFuZ2VJbnB1dFZhbHVlID0gKGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gIF9jaGVja0lmSW5wdXRJc0ZpbGxlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubmFtZSkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9oYW5kbGVSYW5nZUNoYW5nZSA9ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy51cGRhdGVSYW5nZVZhbHVlcyh2YWx1ZSlcblxuICBfb25DbGlja0NsaXBDYXJkID0gKGlkLCBzdGFydEF0LCBlbmRBdCkgPT4ge1xuICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLnByb3BzLnN0YXRlLnZpZHNsaWNlLnZpZGVvXG4gICAgY29uc3QgbWF0Y2hVcmwgPSB1cmwubWF0Y2goL2h0dHBzPy4qP1xcLm1wNC9nKVxuICAgIGNvbnN0IGNsZWFuVXJsID0gbWF0Y2hVcmxbMF1cbiAgICBjb25zdCB1cmxXaXRoTWVkaWFGcmFnbWVudHMgPSBgJHtjbGVhblVybH0jdD0ke3N0YXJ0QXR9LCR7ZW5kQXR9YFxuXG4gICAgdGhpcy5wcm9wcy50b2dnbGVTZWxlY3RDbGlwQ2FyZChpZClcbiAgICB0aGlzLnByb3BzLmFkZFZpZGVvVXJsKHVybFdpdGhNZWRpYUZyYWdtZW50cylcblxuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXBsYXllcicpXG4gICAgdmlkZW8ubG9hZCgpXG4gICAgdmlkZW8ucGxheSgpXG4gIH1cblxuICBfY3JlYXRlQ2xpcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSB0aGlzLnByb3BzLnN0YXRlLnZpZHNsaWNlLnZpZGVvLnZhbHVlXG5cbiAgICBjb25zdCBzdGFydEF0ID0gc2Vjb25kc1RvRm9ybWF0ZWRUaW1lKG1pbilcbiAgICBjb25zdCBlbmRBdCA9IHNlY29uZHNUb0Zvcm1hdGVkVGltZShtYXgpXG5cbiAgICB0aGlzLnByb3BzLmFkZENsaXBUb0NsaXBMaXN0KHtcbiAgICAgIG5hbWUsXG4gICAgICBlbmRBdCxcbiAgICAgIHN0YXJ0QXRcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6ICcnIH0pXG4gICAgdGhpcy5wcm9wcy51cGRhdGVSYW5nZVZhbHVlcyh7IG1pbjogMCwgbWF4OiAxMCB9KVxuICB9XG5cbiAgX2hhbmRsZURlbGV0ZUNMaXAgPSAoZSwgaWQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgeyB1cmwgfSA9IHRoaXMucHJvcHMuc3RhdGUudmlkc2xpY2UudmlkZW9cbiAgICBjb25zdCBtYXRjaFVybCA9IHVybC5tYXRjaCgvaHR0cHM/Lio/XFwubXA0L2cpXG4gICAgY29uc3QgY2xlYW5VcmwgPSBtYXRjaFVybFswXVxuXG4gICAgdGhpcy5wcm9wcy5hZGRWaWRlb1VybChjbGVhblVybClcbiAgICB0aGlzLnByb3BzLmRlbGV0ZUNsaXBGcm9tQ2xpcExpc3QoaWQpXG5cbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby1wbGF5ZXInKVxuICAgIHZpZGVvLmxvYWQoKVxuXG4gIH1cblxuICBfaGFuZGxlRWRpdENsaXAgPSAoZSwgaWQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGNsaXBzLCB2aWRlbzogeyB1cmwsIGRlZmF1bHRNaW4sIGRlZmF1bHRNYXgsIHZhbHVlIH19ID0gdGhpcy5wcm9wcy5zdGF0ZS52aWRzbGljZVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0XG4gICAgICAgIHRpdGxlPVwiQ2xpcHNcIlxuICAgICAgICByaWdodD17PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnZWRpdCcpfT5jYW5jZWw8L2k+fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiB0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXItdmlld1wiPlxuICAgICAgICAgICAgICA8VmlkZW9QbGF5ZXJcbiAgICAgICAgICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1MHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS12aWV3XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1pbnB1dC12aWV3IGNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBuYW1lIGZvciB5b3VyIGNsaXBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlT25jaGFuZ2VJbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci12aWV3XCI+XG4gICAgICAgICAgICAgICAgPElucHV0UmFuZ2VcbiAgICAgICAgICAgICAgICAgIG1heFZhbHVlPXtkZWZhdWx0TWF4fVxuICAgICAgICAgICAgICAgICAgbWluVmFsdWU9e2RlZmF1bHRNaW59XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlUmFuZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBhcmlhTGFiZWxsZWRieT1cImhlbGxvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tdmlldyBjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJDcmVhdGUgY2xpcFwiXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMWFiYzljXCJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NyZWF0ZUNsaXB9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5fY2hlY2tJZklucHV0SXNGaWxsZWQoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwcy1saXN0LXZpZXdcIj5cbiAgICAgICAgICAgICAge2NsaXBzLm1hcChjbGlwID0+IChcbiAgICAgICAgICAgICAgICA8Q2xpcENhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17Y2xpcC5pZH1cbiAgICAgICAgICAgICAgICAgIHsuLi5jbGlwfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGlja0NsaXBDYXJkfVxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ2xpcD17dGhpcy5faGFuZGxlRGVsZXRlQ0xpcH1cbiAgICAgICAgICAgICAgICAgIGVkaXRDbGlwPXt0aGlzLl9oYW5kbGVFZGl0Q2xpcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IDMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VjdGlvbiB7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAwcHggYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZpZGVvLXBsYXllci12aWV3IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wLXNlY3Rpb24gLmZvcm0tdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmFtZS1pbnB1dC12aWV3IHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVyLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uLXZpZXcge1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGlwcy1saXN0LXZpZXcge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNlbnRlcmVkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHN0YXRlXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZFZpZGVvVXJsLFxuICBhZGRDbGlwVG9DbGlwTGlzdCxcbiAgdG9nZ2xlU2VsZWN0Q2xpcENhcmQsXG4gIGRlbGV0ZUNsaXBGcm9tQ2xpcExpc3QsXG4gIHVwZGF0ZUZ1bGxWaWRlb0R1cmF0aW9uLFxuICB1cGRhdGVSYW5nZVZhbHVlcyxcbiAgdXBkYXRlRGVmYXVsdFJhbmdlVmFsdWVzV2hlblZpZGVvRmluaXNoTG9hZFxufVxuXG5jb25zdCBDbGlwcyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGNscylcbmV4cG9ydCBkZWZhdWx0IENsaXBzXG4iXX0= */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/pages/clips.js */",
        __self: this
      }));
    }
  }]);

  return cls;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = {
  addVideoUrl: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["addVideoUrl"],
  addClipToClipList: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["addClipToClipList"],
  toggleSelectClipCard: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["toggleSelectClipCard"],
  deleteClipFromClipList: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["deleteClipFromClipList"],
  updateFullVideoDuration: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["updateFullVideoDuration"],
  updateRangeValues: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["updateRangeValues"],
  updateDefaultRangeValuesWhenVideoFinishLoad: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["updateDefaultRangeValuesWhenVideoFinishLoad"]
};
var Clips = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(cls);
/* harmony default export */ __webpack_exports__["default"] = (Clips);
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
//# sourceMappingURL=clips.js.9ed69af9af8ac9f74e23.hot-update.js.map