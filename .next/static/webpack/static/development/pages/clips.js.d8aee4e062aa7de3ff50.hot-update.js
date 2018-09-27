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
      isFullVideo = _ref.isFullVideo,
      deleteClip = _ref.deleteClip,
      editClip = _ref.editClip;
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
    onClick: function onClick(e) {
      return deleteClip(e, id);
    },
    className: "jsx-3613202798" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "delete"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    onClick: function onClick(e) {
      return editClip(e, {
        id: id,
        name: name,
        startAt: startAt,
        endAt: endAt
      });
    },
    className: "jsx-3613202798" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "edit"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3613202798",
    css: ".container.jsx-3613202798{border-radius:8px;box-shadow:0 19px 38px rgba(0,0,0,0.30),0 15px 12px rgba(0,0,0,0.22);height:200px;width:150px;display:grid;grid-template-rows:130px 70px;overflow:hidden;cursor:pointer;}.container-hover.jsx-3613202798{box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);-webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);transition:all 0.3s cubic-bezier(.25,.8,.25,1);}.thumbnail-view.jsx-3613202798{background:black;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.info-view.jsx-3613202798{padding:5px;display:grid;grid-template-columns:120px 20px;}.name-view.jsx-3613202798{display:grid;}.options-icon-view.jsx-3613202798{display:grid;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon.jsx-3613202798{color:white;}.container.jsx-3613202798 .title.jsx-3613202798{font-weight:bold;}.container.jsx-3613202798 .duration-span.jsx-3613202798{font-size:12px;color:#7f8c8d;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29tcG9uZW50cy9DbGlwQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qk8sQUFHNkIsQUFXZ0QsQUFLakQsQUFPTCxBQU1DLEFBSUEsQUFLRCxBQUlLLEFBSUYsWUF0QkYsQUFlZixDQVRBLEFBSXlCLEVBYVQsRUE5QkQsQUEwQmYsQ0ExQ3dFLE9Bd0JyQyxJQXVCbkMsQ0E5QnFCLDRCQVFyQixPQWRpRCxzQkFWbEMsYUFDRCxZQUNDLEFBK0JmLFdBaEJ5QixFQWRPLDhCQUNkLFlBT2xCLElBTmlCLGVBQ2pCLG9DQVlBIiwiZmlsZSI6Ii9Vc2Vycy9SYWZhZWxsNDE2L0RvY3VtZW50cy9DT0RFL1dFQlMvdmlkc2xpY2UvY29tcG9uZW50cy9DbGlwQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBDbGlwQ2FyZCA9ICh7IGlkLCBuYW1lLCBzdGFydEF0LCBlbmRBdCwgb25DbGljaywgc2VsZWN0ZWQsIGlzRnVsbFZpZGVvLCBkZWxldGVDbGlwLCBlZGl0Q2xpcCB9KSA9PiAoXG4gIDxkaXZcbiAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGlkLCBzdGFydEF0LCBlbmRBdCl9XG4gICAgY2xhc3NOYW1lPXtgY29udGFpbmVyICR7c2VsZWN0ZWQgPyBcImNvbnRhaW5lci1ob3ZlclwiIDogJycgfWB9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbC12aWV3XCI+XG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+cGxheV9hcnJvdzwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tdmlld1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLXZpZXdcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj57bmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cmF0aW9uLXNwYW5cIj5zdGFydDoge3N0YXJ0QXR9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXJhdGlvbi1zcGFuXCI+ZW5kOiB7ZW5kQXR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNGdWxsVmlkZW8gPyBudWxsIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLWljb24tdmlld1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgb25DbGljaz17KGUpID0+IGRlbGV0ZUNsaXAoZSwgaWQpfT5kZWxldGU8L2k+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBvbkNsaWNrPXsoZSkgPT4gZWRpdENsaXAoZSwge2lkLCBuYW1lLCBzdGFydEF0LCBlbmRBdH0pfT5lZGl0PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwwLDAsMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwwLDAsMC4yMik7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IDcwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gICAgICAgIH1cblxuICAgICAgICAudGh1bWJuYWlsLXZpZXcge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvLXZpZXcge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lLXZpZXcge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAub3B0aW9ucy1pY29uLXZpZXcge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciAudGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciAuZHVyYXRpb24tc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDbGlwQ2FyZFxuIl19 */\n/*@ sourceURL=/Users/Rafaell416/Documents/CODE/WEBS/vidslice/components/ClipCard.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClipCard);

/***/ })

})
//# sourceMappingURL=clips.js.d8aee4e062aa7de3ff50.hot-update.js.map