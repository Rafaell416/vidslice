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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
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
      return _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClickClipCard", function (id, startAt, endAt) {
      var url = _this.props.state.vidslice.video.url;
      var urlWithMediaFragments = "".concat(url, "#t=").concat(startAt, ", ").concat(endAt);

      _this.props.toggleSelectClipCard(id);

      _this.props.addVideoUrl(urlWithMediaFragments);

      var video = document.getElementById('video-player');
      video.load();
      video.play();
    });

    return _this;
  }

  _createClass(cls, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var name = this.state.name;
      var _this$props$state$vid = this.props.state.vidslice,
          clips = _this$props$state$vid.clips,
          _this$props$state$vid2 = _this$props$state$vid.video,
          url = _this$props$state$vid2.url,
          defaultMin = _this$props$state$vid2.defaultMin,
          defaultMax = _this$props$state$vid2.defaultMax,
          value = _this$props$state$vid2.value;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Clips",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "section top-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "video-player-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
          lineNumber: 51
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "form-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "name-input-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        placeholder: "Write a name for your clip",
        value: name,
        onChange: this._handleOnchangeInputValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "slider-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "button-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Create clip",
        backgroundColor: "#1abc9c",
        textColor: "white",
        onClick: function onClick() {
          return console.log('pressed button');
        },
        disabled: this._checkIfInputIsFilled(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "clips-list-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, clips.map(function (clip) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ClipCard__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
          key: clip.id
        }, clip, {
          onClick: _this2._onClickClipCard,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "73944576",
        css: ".container.jsx-73944576{display:grid;grid-gap:20px;grid-template-rows:350px 300px;}.top-section.jsx-73944576{display:grid;grid-gap:20px;grid-template-columns:800px auto;}.video-player-view.jsx-73944576{background:black;margin-left:10px;}.top-section.jsx-73944576 .form-view.jsx-73944576{display:grid;grid-template-rows:repeat(3,auto);}.slider-view.jsx-73944576{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;}.clips-list-view.jsx-73944576{padding-top:20px;padding-left:10px;padding-right:10px;display:grid;grid-template-columns:repeat(7,1fr);grid-gap:20px;}.centered.jsx-73944576{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvcGFnZXMvY2xpcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdXLEFBRzRCLEFBVUEsQUFNSSxBQUtKLEFBU0EsQUFVSSxBQVNKLGFBaERDLEFBVUEsQUFXcUIsQUFTaEIsQUFtQkEsSUFqQ0YsQUF3QkMsVUF2Q2EsQUFVRSxPQU1uQyxDQXdCcUIsWUFuQnJCLE9Bb0JlLElBeENmLEVBVUEsT0ErQnVDLG9DQUN2QixHQWJELEFBbUJVLFdBTHpCLEVBYkEsc0ZBbUJBIiwiZmlsZSI6Ii9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvcGFnZXMvY2xpcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi4vY29udGFpbmVycy9WaWRlb1BsYXllcidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5pbXBvcnQgQ2xpcENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DbGlwQ2FyZCdcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gJ3JlYWN0LWlucHV0LXJhbmdlJ1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1xuICBhZGRWaWRlb1VybCxcbiAgdG9nZ2xlU2VsZWN0Q2xpcENhcmQsXG4gIHVwZGF0ZUZ1bGxWaWRlb0R1cmF0aW9uLFxuICB1cGRhdGVEZWZhdWx0UmFuZ2VWYWx1ZXNcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcblxuY2xhc3MgY2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbmFtZTogJydcbiAgfVxuXG4gIF9oYW5kbGVPbmNoYW5nZUlucHV0VmFsdWUgPSAoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG5cbiAgX2NoZWNrSWZJbnB1dElzRmlsbGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5uYW1lKSByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2hhbmRsZVJhbmdlQ2hhbmdlID0gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcblxuICBfb25DbGlja0NsaXBDYXJkID0gKGlkLCBzdGFydEF0LCBlbmRBdCkgPT4ge1xuICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLnByb3BzLnN0YXRlLnZpZHNsaWNlLnZpZGVvXG4gICAgY29uc3QgdXJsV2l0aE1lZGlhRnJhZ21lbnRzID0gYCR7dXJsfSN0PSR7c3RhcnRBdH0sICR7ZW5kQXR9YFxuXG4gICAgdGhpcy5wcm9wcy50b2dnbGVTZWxlY3RDbGlwQ2FyZChpZClcbiAgICB0aGlzLnByb3BzLmFkZFZpZGVvVXJsKHVybFdpdGhNZWRpYUZyYWdtZW50cylcblxuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXBsYXllcicpXG4gICAgdmlkZW8ubG9hZCgpXG4gICAgdmlkZW8ucGxheSgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgY2xpcHMsIHZpZGVvOiB7IHVybCwgZGVmYXVsdE1pbiwgZGVmYXVsdE1heCwgdmFsdWUgfX0gPSB0aGlzLnByb3BzLnN0YXRlLnZpZHNsaWNlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJDbGlwc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiB0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXItdmlld1wiPlxuICAgICAgICAgICAgICA8VmlkZW9QbGF5ZXJcbiAgICAgICAgICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1MHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS12aWV3XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1pbnB1dC12aWV3IGNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBuYW1lIGZvciB5b3VyIGNsaXBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlT25jaGFuZ2VJbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci12aWV3XCI+XG4gICAgICAgICAgICAgICAgPElucHV0UmFuZ2VcbiAgICAgICAgICAgICAgICAgIG1heFZhbHVlPXtkZWZhdWx0TWF4fVxuICAgICAgICAgICAgICAgICAgbWluVmFsdWU9e2RlZmF1bHRNaW59XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlUmFuZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBhcmlhTGFiZWxsZWRieT1cImhlbGxvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tdmlldyBjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJDcmVhdGUgY2xpcFwiXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMWFiYzljXCJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdwcmVzc2VkIGJ1dHRvbicpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuX2NoZWNrSWZJbnB1dElzRmlsbGVkKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpcHMtbGlzdC12aWV3XCI+XG4gICAgICAgICAgICAgIHtjbGlwcy5tYXAoY2xpcCA9PiAoXG4gICAgICAgICAgICAgICAgPENsaXBDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e2NsaXAuaWR9XG4gICAgICAgICAgICAgICAgICB7Li4uY2xpcH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tDbGlwQ2FyZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IDMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VjdGlvbiB7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAwcHggYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZpZGVvLXBsYXllci12aWV3IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wLXNlY3Rpb24gLmZvcm0tdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmFtZS1pbnB1dC12aWV3IHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVyLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uLXZpZXcge1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGlwcy1saXN0LXZpZXcge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNlbnRlcmVkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHN0YXRlXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZFZpZGVvVXJsLFxuICB0b2dnbGVTZWxlY3RDbGlwQ2FyZCxcbiAgdXBkYXRlRnVsbFZpZGVvRHVyYXRpb24sXG4gIHVwZGF0ZURlZmF1bHRSYW5nZVZhbHVlc1xufVxuXG5jb25zdCBDbGlwcyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGNscylcbmV4cG9ydCBkZWZhdWx0IENsaXBzXG4iXX0= */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/pages/clips.js */",
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
  addVideoUrl: _redux_actions__WEBPACK_IMPORTED_MODULE_9__["addVideoUrl"],
  toggleSelectClipCard: _redux_actions__WEBPACK_IMPORTED_MODULE_9__["toggleSelectClipCard"],
  updateFullVideoDuration: _redux_actions__WEBPACK_IMPORTED_MODULE_9__["updateFullVideoDuration"],
  updateDefaultRangeValues: _redux_actions__WEBPACK_IMPORTED_MODULE_9__["updateDefaultRangeValues"]
};
var Clips = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(cls);
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
//# sourceMappingURL=clips.js.8a5277e75154bbe6cd9c.hot-update.js.map