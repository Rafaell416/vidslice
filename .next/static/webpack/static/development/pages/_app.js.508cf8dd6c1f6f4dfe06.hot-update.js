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
      url: '',
      defaultMin: 0,
      defaultMax: 0,
      value: {
        min: 0,
        max: 0
      }
    },
    clips: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_VIDEO_URL':
      return _objectSpread({}, state, {
        video: _objectSpread({}, state.video, {
          url: action.url
        })
      });
      break;

    case 'ADD_CLIP_TO_CLIP_LIST':
      var _action$clip = action.clip,
          name = _action$clip.name,
          startAt = _action$clip.startAt,
          endAt = _action$clip.endAt,
          isFullVideo = _action$clip.isFullVideo,
          selected = _action$clip.selected;
      return _objectSpread({}, state, {
        clips: _toConsumableArray(state.clips).concat([{
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
          name: name,
          startAt: startAt,
          endAt: endAt,
          isFullVideo: isFullVideo || false,
          selected: selected || false
        }])
      });
      break;

    case 'DELETE_CLIP_FROM_CLIP_LIST':
      var clipId = action.id;
      return _objectSpread({}, state, {
        clips: state.clips.filter(function (clip) {
          return clip.id !== clipId;
        })
      });

    case 'UPDATE_FULL_VIDEO_DURATION':
      return _objectSpread({}, state, {
        clips: state.clips.map(function (clip) {
          return clip.isFullVideo === true ? _objectSpread({}, clip, {
            startAt: action.duration.startAt,
            endAt: action.duration.endAt
          }) : clip;
        })
      });
      break;

    case 'TOGGLE_SELECTED_CLIP_CARD':
      return _objectSpread({}, state, {
        clips: state.clips.map(function (clip) {
          return clip.selected === true ? _objectSpread({}, clip, {
            selected: false
          }) : clip.selected === false && clip.id === action.id ? _objectSpread({}, clip, {
            selected: true
          }) : clip;
        })
      });
      break;

    case 'UPDATE_DEFAULT_RANGE_VALUES':
      var _action$rangeValues = action.rangeValues,
          defaultMin = _action$rangeValues.defaultMin,
          defaultMax = _action$rangeValues.defaultMax,
          value = _action$rangeValues.value;
      return _objectSpread({}, state, {
        video: _objectSpread({}, state.video, {
          defaultMax: defaultMax,
          defaultMin: defaultMin,
          value: value
        })
      });
      break;

    case 'UPDATE_RANGE_VALUES_WHEN_IS_DRAGGED':
      return _objectSpread({}, state, {
        video: _objectSpread({}, state.video, {
          value: action.value
        })
      });
      break;

    case 'RESET_CLIP_LIST_TO_DEFAULT_VALUES':
      return {
        video: {
          url: '',
          defaultMin: 0,
          defaultMax: 0,
          value: {
            min: 0,
            max: 0
          }
        },
        clips: []
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (vidslice);

/***/ })

})
//# sourceMappingURL=_app.js.508cf8dd6c1f6f4dfe06.hot-update.js.map