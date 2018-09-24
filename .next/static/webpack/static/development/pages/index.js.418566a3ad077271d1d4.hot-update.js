webpackHotUpdate("static/development/pages/index.js",{

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
    className: "jsx-2388082179" + " " + "container",
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
      color: '#5E616F',
      'button:hover': 'none'
    },
    className: "jsx-2388082179",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2388082179",
    css: ".container.jsx-2388082179{width:300px;height:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button.jsx-2388082179{height:45px;width:220px;font-size:15px;font-weight:bold;border-radius:20px;outline:0;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);}.hover-item.jsx-2388082179:hover{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.19);-webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);transition:all 0.3s cubic-bezier(.25,.8,.25,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29tcG9uZW50cy9BY3Rpb25CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJPLEFBR3VCLEFBUUEsQUFVd0QsWUFqQnhELEFBUUEsWUFQQyxBQVFFLGVBQ0UsaUJBQ0UsV0FPNEIsUUFOckMsVUFDd0QsYUFYL0Msb0RBWXJCLG1CQUtBLHNCQWhCeUIsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29tcG9uZW50cy9BY3Rpb25CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSAoeyBiYWNrZ3JvdW5kQ29sb3IsIHRleHQsIHRleHRDb2xvciwgb25DbGljaywgZGlzYWJsZWQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxidXR0b25cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBmYWxzZX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzdHlsZT17IWRpc2FibGVkID8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IgfHwgJyMxYWJjOWMnLFxuICAgICAgICBjb2xvcjogdGV4dENvbG9yIHx8ICd3aGl0ZScsXG4gICAgICB9IDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2JkYzNjNycsXG4gICAgICAgIGNvbG9yOiAnIzVFNjE2RicsXG4gICAgICAgICdidXR0b246aG92ZXInOiAnbm9uZSdcbiAgICAgIH19XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9idXR0b24+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvdmVyLWl0ZW06aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMTkpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICAgICAgICB9XG5cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblxuIl19 */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/components/ActionButton.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ })

})
//# sourceMappingURL=index.js.418566a3ad077271d1d4.hot-update.js.map