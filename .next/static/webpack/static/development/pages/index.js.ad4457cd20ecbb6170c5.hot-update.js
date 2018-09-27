webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: addVideoUrl, addClipToClipList, updateFullVideoDuration, toggleSelectClipCard, updateDefaultRangeValuesWhenVideoFinishLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVideoUrl", function() { return addVideoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClipToClipList", function() { return addClipToClipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFullVideoDuration", function() { return updateFullVideoDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSelectClipCard", function() { return toggleSelectClipCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDefaultRangeValuesWhenVideoFinishLoad", function() { return updateDefaultRangeValuesWhenVideoFinishLoad; });


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

/***/ })

})
//# sourceMappingURL=index.js.ad4457cd20ecbb6170c5.hot-update.js.map