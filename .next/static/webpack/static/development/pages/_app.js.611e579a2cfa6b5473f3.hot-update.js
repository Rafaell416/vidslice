webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/clip.js":
/*!********************************!*\
  !*** ./redux/reducers/clip.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var clip = function clip() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ACTION_TYPE':
      return;
      break;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (clip);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _clip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clip */ "./redux/reducers/clip.js");




var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  clip: _clip__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.611e579a2cfa6b5473f3.hot-update.js.map