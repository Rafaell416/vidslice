webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: addVideoUrl, addClipToClipList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVideoUrl", function() { return addVideoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClipToClipList", function() { return addClipToClipList; });


var addVideoUrl = function addVideoUrl(url) {
  return {
    type: 'ADD_VIDEO_URL',
    url: url
  };
};
var addClipToClipList = function addClipToClipList(name, duration, startAt, endAt) {
  return {
    type: 'ADD_CLIP_TO_CLIP_LIST',
    name: name,
    duration: duration,
    startAt: startAt,
    endAt: endAt
  };
};

/***/ })

})
//# sourceMappingURL=index.js.597837d82f66cafe94c2.hot-update.js.map