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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
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
      isEditing: false,
      name: '',
      rangeValueWhenEditing: {
        min: 0,
        max: 0
      }
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
      console.log(id); //this.props.editClip()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_resetClipList", function () {
      _this.props.resetClipListToDefaultValues();

      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
    });

    return _this;
  }

  _createClass(cls, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          rangeValueWhenEditing = _this$state.rangeValueWhenEditing,
          isEditing = _this$state.isEditing;
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
          onClick: this._resetClipList,
          className: "jsx-73944576" + " " + "material-icons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "clear"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "section top-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "video-player-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
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
          lineNumber: 110
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "form-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "name-input-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        placeholder: "Write a name for your clip",
        value: name,
        onChange: this._handleOnchangeInputValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "slider-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
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
          lineNumber: 127
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "button-view centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: isEditing ? 'Edit clip' : 'Create clip',
        backgroundColor: "#1abc9c",
        textColor: "white",
        onClick: this._createClip,
        disabled: this._checkIfInputIsFilled(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-73944576" + " " + "clips-list-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
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
            lineNumber: 149
          },
          __self: this
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "73944576",
        css: ".container.jsx-73944576{display:grid;grid-gap:20px;grid-template-rows:350px 300px;}.top-section.jsx-73944576{display:grid;grid-gap:20px;grid-template-columns:800px auto;}.video-player-view.jsx-73944576{background:black;margin-left:10px;}.top-section.jsx-73944576 .form-view.jsx-73944576{display:grid;grid-template-rows:repeat(3,auto);}.slider-view.jsx-73944576{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;}.clips-list-view.jsx-73944576{padding-top:20px;padding-left:10px;padding-right:10px;display:grid;grid-template-columns:repeat(7,1fr);grid-gap:20px;}.centered.jsx-73944576{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvcGFnZXMvY2xpcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0tXLEFBRzRCLEFBVUEsQUFNSSxBQUtKLEFBU0EsQUFVSSxBQVNKLGFBaERDLEFBVUEsQUFXcUIsQUFTaEIsQUFtQkEsSUFqQ0YsQUF3QkMsVUF2Q2EsQUFVRSxPQU1uQyxDQXdCcUIsWUFuQnJCLE9Bb0JlLElBeENmLEVBVUEsT0ErQnVDLG9DQUN2QixHQWJELEFBbUJVLFdBTHpCLEVBYkEsc0ZBbUJBIiwiZmlsZSI6Ii9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvcGFnZXMvY2xpcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi4vY29udGFpbmVycy9WaWRlb1BsYXllcidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5pbXBvcnQgQ2xpcENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DbGlwQ2FyZCdcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gJ3JlYWN0LWlucHV0LXJhbmdlJ1xuaW1wb3J0IHsgc2Vjb25kc1RvRm9ybWF0ZWRUaW1lIH0gZnJvbSAnLi4vbGliJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7XG4gIGVkaXRDbGlwLFxuICBhZGRWaWRlb1VybCxcbiAgdXBkYXRlUmFuZ2VWYWx1ZXMsXG4gIGFkZENsaXBUb0NsaXBMaXN0LFxuICB0b2dnbGVTZWxlY3RDbGlwQ2FyZCxcbiAgZGVsZXRlQ2xpcEZyb21DbGlwTGlzdCxcbiAgdXBkYXRlRnVsbFZpZGVvRHVyYXRpb24sXG4gIHJlc2V0Q2xpcExpc3RUb0RlZmF1bHRWYWx1ZXMsXG4gIHVwZGF0ZURlZmF1bHRSYW5nZVZhbHVlc1doZW5WaWRlb0ZpbmlzaExvYWRcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcblxuY2xhc3MgY2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICBuYW1lOiAnJyxcbiAgICByYW5nZVZhbHVlV2hlbkVkaXRpbmc6IHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMFxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVPbmNoYW5nZUlucHV0VmFsdWUgPSAoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG5cbiAgX2NoZWNrSWZJbnB1dElzRmlsbGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5uYW1lKSByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2hhbmRsZVJhbmdlQ2hhbmdlID0gKHZhbHVlKSA9PiB0aGlzLnByb3BzLnVwZGF0ZVJhbmdlVmFsdWVzKHZhbHVlKVxuXG4gIF9vbkNsaWNrQ2xpcENhcmQgPSAoaWQsIHN0YXJ0QXQsIGVuZEF0KSA9PiB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHRoaXMucHJvcHMuc3RhdGUudmlkc2xpY2UudmlkZW9cbiAgICBjb25zdCBtYXRjaFVybCA9IHVybC5tYXRjaCgvaHR0cHM/Lio/XFwubXA0L2cpXG4gICAgY29uc3QgY2xlYW5VcmwgPSBtYXRjaFVybFswXVxuICAgIGNvbnN0IHVybFdpdGhNZWRpYUZyYWdtZW50cyA9IGAke2NsZWFuVXJsfSN0PSR7c3RhcnRBdH0sJHtlbmRBdH1gXG5cbiAgICB0aGlzLnByb3BzLnRvZ2dsZVNlbGVjdENsaXBDYXJkKGlkKVxuICAgIHRoaXMucHJvcHMuYWRkVmlkZW9VcmwodXJsV2l0aE1lZGlhRnJhZ21lbnRzKVxuXG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tcGxheWVyJylcbiAgICB2aWRlby5sb2FkKClcbiAgICB2aWRlby5wbGF5KClcbiAgfVxuXG4gIF9jcmVhdGVDbGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMucHJvcHMuc3RhdGUudmlkc2xpY2UudmlkZW8udmFsdWVcblxuICAgIGNvbnN0IHN0YXJ0QXQgPSBzZWNvbmRzVG9Gb3JtYXRlZFRpbWUobWluKVxuICAgIGNvbnN0IGVuZEF0ID0gc2Vjb25kc1RvRm9ybWF0ZWRUaW1lKG1heClcblxuICAgIHRoaXMucHJvcHMuYWRkQ2xpcFRvQ2xpcExpc3Qoe1xuICAgICAgbmFtZSxcbiAgICAgIGVuZEF0LFxuICAgICAgc3RhcnRBdFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogJycgfSlcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVJhbmdlVmFsdWVzKHsgbWluOiAwLCBtYXg6IDEwIH0pXG4gIH1cblxuICBfaGFuZGxlRGVsZXRlQ0xpcCA9IChlLCBpZCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB7IHVybCB9ID0gdGhpcy5wcm9wcy5zdGF0ZS52aWRzbGljZS52aWRlb1xuICAgIGNvbnN0IG1hdGNoVXJsID0gdXJsLm1hdGNoKC9odHRwcz8uKj9cXC5tcDQvZylcbiAgICBjb25zdCBjbGVhblVybCA9IG1hdGNoVXJsWzBdXG5cbiAgICB0aGlzLnByb3BzLmFkZFZpZGVvVXJsKGNsZWFuVXJsKVxuICAgIHRoaXMucHJvcHMuZGVsZXRlQ2xpcEZyb21DbGlwTGlzdChpZClcblxuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXBsYXllcicpXG4gICAgdmlkZW8ubG9hZCgpXG5cbiAgfVxuXG4gIF9oYW5kbGVFZGl0Q2xpcCA9IChlLCBpZCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zb2xlLmxvZyhpZClcbiAgICAvL3RoaXMucHJvcHMuZWRpdENsaXAoKVxuXG4gIH1cblxuICBfcmVzZXRDbGlwTGlzdCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnJlc2V0Q2xpcExpc3RUb0RlZmF1bHRWYWx1ZXMoKVxuICAgIFJvdXRlci5wdXNoKCcvJylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBuYW1lLCByYW5nZVZhbHVlV2hlbkVkaXRpbmcsIGlzRWRpdGluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgY2xpcHMsIHZpZGVvOiB7IHVybCwgZGVmYXVsdE1pbiwgZGVmYXVsdE1heCwgdmFsdWUgfX0gPSB0aGlzLnByb3BzLnN0YXRlLnZpZHNsaWNlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXRcbiAgICAgICAgdGl0bGU9XCJDbGlwc1wiXG4gICAgICAgIHJpZ2h0PXs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIG9uQ2xpY2s9e3RoaXMuX3Jlc2V0Q2xpcExpc3R9PmNsZWFyPC9pPn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gdG9wLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLXZpZXdcIj5cbiAgICAgICAgICAgICAgPFZpZGVvUGxheWVyXG4gICAgICAgICAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNTBweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdmlld1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtaW5wdXQtdmlldyBjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgbmFtZSBmb3IgeW91ciBjbGlwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZU9uY2hhbmdlSW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItdmlld1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFJhbmdlXG4gICAgICAgICAgICAgICAgICBtYXhWYWx1ZT17ZGVmYXVsdE1heH1cbiAgICAgICAgICAgICAgICAgIG1pblZhbHVlPXtkZWZhdWx0TWlufVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZVJhbmdlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsbGVkYnk9XCJoZWxsb1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXZpZXcgY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtpc0VkaXRpbmcgPyAnRWRpdCBjbGlwJyA6ICdDcmVhdGUgY2xpcCd9XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMWFiYzljXCJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NyZWF0ZUNsaXB9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5fY2hlY2tJZklucHV0SXNGaWxsZWQoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwcy1saXN0LXZpZXdcIj5cbiAgICAgICAgICAgICAge2NsaXBzLm1hcChjbGlwID0+IChcbiAgICAgICAgICAgICAgICA8Q2xpcENhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17Y2xpcC5pZH1cbiAgICAgICAgICAgICAgICAgIHsuLi5jbGlwfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGlja0NsaXBDYXJkfVxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ2xpcD17dGhpcy5faGFuZGxlRGVsZXRlQ0xpcH1cbiAgICAgICAgICAgICAgICAgIGVkaXRDbGlwPXt0aGlzLl9oYW5kbGVFZGl0Q2xpcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IDMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VjdGlvbiB7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAwcHggYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZpZGVvLXBsYXllci12aWV3IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wLXNlY3Rpb24gLmZvcm0tdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmFtZS1pbnB1dC12aWV3IHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVyLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uLXZpZXcge1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGlwcy1saXN0LXZpZXcge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNlbnRlcmVkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHN0YXRlXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGVkaXRDbGlwLFxuICBhZGRWaWRlb1VybCxcbiAgdXBkYXRlUmFuZ2VWYWx1ZXMsXG4gIGFkZENsaXBUb0NsaXBMaXN0LFxuICB0b2dnbGVTZWxlY3RDbGlwQ2FyZCxcbiAgZGVsZXRlQ2xpcEZyb21DbGlwTGlzdCxcbiAgdXBkYXRlRnVsbFZpZGVvRHVyYXRpb24sXG4gIHJlc2V0Q2xpcExpc3RUb0RlZmF1bHRWYWx1ZXMsXG4gIHVwZGF0ZURlZmF1bHRSYW5nZVZhbHVlc1doZW5WaWRlb0ZpbmlzaExvYWRcbn1cblxuY29uc3QgQ2xpcHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShjbHMpXG5leHBvcnQgZGVmYXVsdCBDbGlwc1xuIl19 */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/pages/clips.js */",
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
  editClip: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["editClip"],
  addVideoUrl: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["addVideoUrl"],
  updateRangeValues: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["updateRangeValues"],
  addClipToClipList: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["addClipToClipList"],
  toggleSelectClipCard: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["toggleSelectClipCard"],
  deleteClipFromClipList: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["deleteClipFromClipList"],
  updateFullVideoDuration: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["updateFullVideoDuration"],
  resetClipListToDefaultValues: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["resetClipListToDefaultValues"],
  updateDefaultRangeValuesWhenVideoFinishLoad: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["updateDefaultRangeValuesWhenVideoFinishLoad"]
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
//# sourceMappingURL=clips.js.89624c0fce710e86dd10.hot-update.js.map