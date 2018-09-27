webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: addVideoUrl, addClipToClipList, deleteClipFromClipList, updateFullVideoDuration, toggleSelectClipCard, updateDefaultRangeValuesWhenVideoFinishLoad, updateRangeValues, resetClipListToDefaultValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVideoUrl", function() { return addVideoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClipToClipList", function() { return addClipToClipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteClipFromClipList", function() { return deleteClipFromClipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFullVideoDuration", function() { return updateFullVideoDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSelectClipCard", function() { return toggleSelectClipCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDefaultRangeValuesWhenVideoFinishLoad", function() { return updateDefaultRangeValuesWhenVideoFinishLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRangeValues", function() { return updateRangeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetClipListToDefaultValues", function() { return resetClipListToDefaultValues; });


var addVideoUrl = function addVideoUrl(url) {
  return {
    type: 'ADD_VIDEO_URL',
    url: url
  };
};
var addClipToClipList = function addClipToClipList(clip) {
  return {
    type: 'ADD_CLIP_TO_CLIP_LIST',
    clip: clip
  };
};
var deleteClipFromClipList = function deleteClipFromClipList(id) {
  return {
    type: 'DELETE_CLIP_FROM_CLIP_LIST',
    id: id
  };
};
var updateFullVideoDuration = function updateFullVideoDuration(duration) {
  return {
    type: 'UPDATE_FULL_VIDEO_DURATION',
    duration: duration
  };
};
var toggleSelectClipCard = function toggleSelectClipCard(id) {
  return {
    type: 'TOGGLE_SELECTED_CLIP_CARD',
    id: id
  };
};
var updateDefaultRangeValuesWhenVideoFinishLoad = function updateDefaultRangeValuesWhenVideoFinishLoad(rangeValues) {
  return {
    type: 'UPDATE_DEFAULT_RANGE_VALUES',
    rangeValues: rangeValues
  };
};
var updateRangeValues = function updateRangeValues(value) {
  return {
    type: 'UPDATE_RANGE_VALUES_WHEN_IS_DRAGGED',
    value: value
  };
};
var resetClipListToDefaultValues = function resetClipListToDefaultValues() {
  return {
    type: 'RESET_CLIP_LIST_TO_DEFAULT_VALUES'
  };
};

/***/ })

})
//# sourceMappingURL=index.js.bd08b66985dd9b1f8c4b.hot-update.js.map