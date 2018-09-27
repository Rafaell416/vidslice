webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./components/ClipCard.js":
/*!********************************!*\
  !*** ./components/ClipCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/Rafaell416/Documents/CODE/WEBS/vidslice/components/ClipCard.js";



var ClipCard = function ClipCard(_ref) {
  var id = _ref.id,
      name = _ref.name,
      startAt = _ref.startAt,
      endAt = _ref.endAt,
      _onClick = _ref.onClick,
      selected = _ref.selected,
      isFullVideo = _ref.isFullVideo;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return _onClick(id, startAt, endAt);
    },
    className: "jsx-3613202798" + " " + "container ".concat(selected ? "container-hover" : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3613202798" + " " + "thumbnail-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3613202798" + " " + "material-icons icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "play_arrow")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3613202798" + " " + "info-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3613202798" + " " + "name-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3613202798" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3613202798" + " " + "duration-span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "start: ", startAt), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3613202798" + " " + "duration-span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "end: ", endAt)), isFullVideo ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3613202798" + " " + "options-icon-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3613202798" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "more_vert"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3613202798",
    css: ".container.jsx-3613202798{border-radius:8px;box-shadow:0 19px 38px rgba(0,0,0,0.30),0 15px 12px rgba(0,0,0,0.22);height:200px;width:150px;display:grid;grid-template-rows:130px 70px;overflow:hidden;cursor:pointer;}.container-hover.jsx-3613202798{box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);-webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);transition:all 0.3s cubic-bezier(.25,.8,.25,1);}.thumbnail-view.jsx-3613202798{background:black;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.info-view.jsx-3613202798{padding:5px;display:grid;grid-template-columns:120px 20px;}.name-view.jsx-3613202798{display:grid;}.options-icon-view.jsx-3613202798{display:grid;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon.jsx-3613202798{color:white;}.container.jsx-3613202798 .title.jsx-3613202798{font-weight:bold;}.container.jsx-3613202798 .duration-span.jsx-3613202798{font-size:12px;color:#7f8c8d;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29tcG9uZW50cy9DbGlwQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qk8sQUFHNkIsQUFXZ0QsQUFLakQsQUFPTCxBQU1DLEFBSUEsQUFLRCxBQUlLLEFBSUYsWUF0QkYsQUFlZixDQVRBLEFBSXlCLEVBYVQsRUE5QkQsQUEwQmYsQ0ExQ3dFLE9Bd0JyQyxJQXVCbkMsQ0E5QnFCLDRCQVFyQixPQWRpRCxzQkFWbEMsYUFDRCxZQUNDLEFBK0JmLFdBaEJ5QixFQWRPLDhCQUNkLFlBT2xCLElBTmlCLGVBQ2pCLG9DQVlBIiwiZmlsZSI6Ii9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29tcG9uZW50cy9DbGlwQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBDbGlwQ2FyZCA9ICh7IGlkLCBuYW1lLCBzdGFydEF0LCBlbmRBdCwgb25DbGljaywgc2VsZWN0ZWQsIGlzRnVsbFZpZGVvIH0pID0+IChcbiAgPGRpdlxuICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaWQsIHN0YXJ0QXQsIGVuZEF0KX1cbiAgICBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtzZWxlY3RlZCA/IFwiY29udGFpbmVyLWhvdmVyXCIgOiAnJyB9YH1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsLXZpZXdcIj5cbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGljb25cIj5wbGF5X2Fycm93PC9pPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby12aWV3XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtdmlld1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVyYXRpb24tc3BhblwiPnN0YXJ0OiB7c3RhcnRBdH08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cmF0aW9uLXNwYW5cIj5lbmQ6IHtlbmRBdH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc0Z1bGxWaWRlbyA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtaWNvbi12aWV3XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tb3JlX3ZlcnQ8L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLDAsMCwwLjIyKTtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTMwcHggNzBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItaG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aHVtYm5haWwtdmlldyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8tdmlldyB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUtdmlldyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcHRpb25zLWljb24tdmlldyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIC50aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIC5kdXJhdGlvbi1zcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENsaXBDYXJkXG4iXX0= */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/components/ClipCard.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClipCard);

/***/ })

})
//# sourceMappingURL=clips.js.c3c7091939799e84b04c.hot-update.js.map