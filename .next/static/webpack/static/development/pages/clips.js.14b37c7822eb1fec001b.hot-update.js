webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./components/ActionButton.js":
/*!************************************!*\
  !*** ./components/ActionButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/Rafaell416/Documents/CODE/WEBS/vidslice/components/ActionButton.js";




var ActionButton = function ActionButton(_ref) {
  var backgroundColor = _ref.backgroundColor,
      text = _ref.text,
      textColor = _ref.textColor,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2601000325" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    disabled: disabled || false,
    onClick: onClick,
    style: !disabled ? {
      background: backgroundColor || '#1abc9c',
      color: textColor || 'white'
    } : {
      background: '#bdc3c7',
      color: '#5E616F'
    },
    className: "jsx-2601000325" + " " + ((disabled ? '' : 'hover-item') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2601000325",
    css: ".container.jsx-2601000325{width:300px;height:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button.jsx-2601000325{height:45px;width:220px;font-size:15px;font-weight:bold;border-radius:20px;outline:0;border:2px solid #bdc3c7;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);}.hover-item.jsx-2601000325:hover{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.19);-webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);transition:all 0.3s cubic-bezier(.25,.8,.25,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29tcG9uZW50cy9BY3Rpb25CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJPLEFBR3VCLEFBUUEsQUFXd0QsWUFsQnhELEFBUUEsWUFQQyxBQVFFLGVBQ0UsaUJBQ0UsV0FRNEIsUUFQckMsVUFDZSxhQVhOLFlBWStDLDJEQU1wRSxNQUxBLGdCQVp5QixtR0FDekIiLCJmaWxlIjoiL1VzZXJzL1JhZmFlbGw0MTYvRG9jdW1lbnRzL0NPREUvV0VCUy92aWRzbGljZS9jb21wb25lbnRzL0FjdGlvbkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9ICh7IGJhY2tncm91bmRDb2xvciwgdGV4dCwgdGV4dENvbG9yLCBvbkNsaWNrLCBkaXNhYmxlZCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGJ1dHRvblxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGZhbHNlfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGNsYXNzTmFtZT17ZGlzYWJsZWQgPyAnJyA6ICdob3Zlci1pdGVtJ31cbiAgICAgIHN0eWxlPXshZGlzYWJsZWQgPyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvciB8fCAnIzFhYmM5YycsXG4gICAgICAgIGNvbG9yOiB0ZXh0Q29sb3IgfHwgJ3doaXRlJyxcbiAgICAgIH0gOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjYmRjM2M3JyxcbiAgICAgICAgY29sb3I6ICcjNUU2MTZGJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9idXR0b24+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2JkYzNjNztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAuaG92ZXItaXRlbTpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gICAgICAgIH1cblxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuQWN0aW9uQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblxuIl19 */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/components/ActionButton.js */",
    __self: this
  }));
};

ActionButton.propTypes = {
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ })

})
//# sourceMappingURL=clips.js.14b37c7822eb1fec001b.hot-update.js.map