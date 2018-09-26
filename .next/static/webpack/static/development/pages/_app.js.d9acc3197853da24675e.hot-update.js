webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/clip.js":
false,

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _vidslice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidslice */ "./redux/reducers/vidslice.js");




var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  vidslice: _vidslice__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/reducers/vidslice.js":
/*!************************************!*\
  !*** ./redux/reducers/vidslice.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var vidslice = function vidslice() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_VIDEO_URL':
      return _objectSpread({}, state, {
        video: {
          url: action.url
        }
      });
      break;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (vidslice);

/***/ })

})
//# sourceMappingURL=_app.js.d9acc3197853da24675e.hot-update.js.map