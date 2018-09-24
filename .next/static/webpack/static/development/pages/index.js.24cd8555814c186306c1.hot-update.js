webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/UploadVideoCard.js":
/*!***************************************!*\
  !*** ./containers/UploadVideoCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadVideoCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InputField */ "./components/InputField.js");
/* harmony import */ var _components_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActionButton */ "./components/ActionButton.js");
var _jsxFileName = "/Users/Rafaell416/Documents/CODE/WEBS/vidslice/containers/UploadVideoCard.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var UploadVideoCard =
/*#__PURE__*/
function (_Component) {
  _inherits(UploadVideoCard, _Component);

  function UploadVideoCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UploadVideoCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UploadVideoCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      url: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleOnchangeInputValue", function (e) {
      return _this.setState({
        url: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_checkIfInputIsFilled", function () {
      var url = _this.state.url;
      if (!url) return false;
      return true;
    });

    return _this;
  }

  _createClass(UploadVideoCard, [{
    key: "render",
    value: function render() {
      var url = this.state.url;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3653644139" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3653644139" + " " + "form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        placeholder: "Enter your video url",
        value: url,
        onChange: this._handleOnchangeInputValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Next",
        backgroundColor: "#1abc9c",
        textColor: "white",
        onClick: function onClick() {
          return console.log('preesed');
        },
        disabled: this._checkIfInputIsFilled(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3653644139",
        css: ".container.jsx-3653644139{height:280px;width:560px;background-color:white;margin-top:50px;border-radius:8px;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.19);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form.jsx-3653644139{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29udGFpbmVycy9VcGxvYWRWaWRlb0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NXLEFBRzRCLEFBWUEsYUFYRCxZQUNXLHVCQUNQLGdCQUNFLFVBU0ksUUFSOEMsbUVBQ3ZELEdBUU0sdUVBUEEsc0JBUUksdUVBUEEsNEJBUXpCLHVFQVBBIiwiZmlsZSI6Ii9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29udGFpbmVycy9VcGxvYWRWaWRlb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZFZpZGVvQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHVybDogJydcbiAgfVxuXG4gIF9oYW5kbGVPbmNoYW5nZUlucHV0VmFsdWUgPSAoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVybDogZS50YXJnZXQudmFsdWUgfSlcblxuICBfY2hlY2tJZklucHV0SXNGaWxsZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIXVybCkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB2aWRlbyB1cmxcIlxuICAgICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVPbmNoYW5nZUlucHV0VmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgICAgICB0ZXh0PVwiTmV4dFwiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMWFiYzljXCJcbiAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdwcmVlc2VkJyl9XG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5fY2hlY2tJZklucHV0SXNGaWxsZWQoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1NjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/containers/UploadVideoCard.js */",
        __self: this
      }));
    }
  }]);

  return UploadVideoCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.24cd8555814c186306c1.hot-update.js.map