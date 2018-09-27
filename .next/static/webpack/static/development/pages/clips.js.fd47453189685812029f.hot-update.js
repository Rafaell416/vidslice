webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: secondsToFormatedTime, formatedTimeToSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondsToFormatedTime", function() { return secondsToFormatedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatedTimeToSeconds", function() { return formatedTimeToSeconds; });


var secondsToFormatedTime = function secondsToFormatedTime(seconds) {
  var date = new Date(null);
  date.setSeconds(seconds);
  var timeString = date.toISOString().substr(11, 8);
  return timeString;
};
var formatedTimeToSeconds = function formatedTimeToSeconds(formatedTime) {
  var splited = formatedTime.split(':');
  var seconds = +splited[0] * 60 * 60 + +splited[1] * 60 + +splited[2];
  return seconds;
};

/***/ })

})
//# sourceMappingURL=clips.js.fd47453189685812029f.hot-update.js.map