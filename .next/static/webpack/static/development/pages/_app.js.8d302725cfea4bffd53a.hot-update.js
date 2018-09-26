webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/vidslice.js":
/*!************************************!*\
  !*** ./redux/reducers/vidslice.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var vidslice = function vidslice() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    video: {
      url: ''
    },
    clips: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_VIDEO_URL':
      return _objectSpread({}, state, {
        video: {
          url: action.url
        }
      });
      break;

    case 'ADD_CLIP_TO_CLIP_LIST':
      var name = action.name,
          duration = action.duration,
          startAt = action.startAt,
          endAt = action.endAt;
      return _objectSpread({}, state, {
        clips: _toConsumableArray(clips).concat([{
          name: name,
          duration: duration,
          startAt: startAt,
          endAt: endAt
        }])
      });
      break;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (vidslice);

/***/ })

})
//# sourceMappingURL=_app.js.8d302725cfea4bffd53a.hot-update.js.map