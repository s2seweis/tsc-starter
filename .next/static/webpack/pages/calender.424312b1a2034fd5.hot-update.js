"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/calender",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/calender.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/calender.scss ***!
  \***********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".calendar-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin: 20px;\\n}\\n\\n.filter-section {\\n  margin-bottom: 10px;\\n}\\n\\n.event-list {\\n  list-style: none;\\n  padding: 0;\\n  text-align: center;\\n  width: 100%;\\n}\\n.event-list .event-card {\\n  display: flex;\\n  border: 1px solid #ccc;\\n  padding: 10px;\\n  margin: 10px;\\n  background-color: #f9f9f9;\\n  border-radius: 8px;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n  width: 100%;\\n  height: 130px; /* Set the height to 250px */\\n  align-items: center;\\n}\\n.event-list .event-card .event-image {\\n  width: 45%;\\n  height: auto;\\n  border-radius: 4px;\\n  margin-right: 10px;\\n}\\n.event-list .event-card .event-details {\\n  color: #333;\\n  width: 50%;\\n}\\n@media (min-width: 360px) {\\n  .event-list .event-card .event-image {\\n    height: 90%;\\n  }\\n}\\n@media (min-width: 600px) {\\n  .event-list .event-card .event-image {\\n    height: 80%;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .event-list .event-card .event-image {\\n    height: 90%;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .event-list .event-card .event-image {\\n    height: 100%;\\n  }\\n}\\n@media (min-width: 360px) {\\n  .event-list .event-card {\\n    width: 100%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./styles/calender.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;AACJ;;AAEE;EACE,mBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;AACJ;AACI;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,wCAAA;EACA,WAAA;EACA,aAAA,EAAA,4BAAA;EACA,mBAAA;AACN;AACM;EACE,UAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AACR;AAEM;EACE,WAAA;EACA,UAAA;AAAR;AAGM;EACE;IACE,WAAA;EADR;AACF;AAIM;EACE;IACE,WAAA;EAFR;AACF;AAKM;EACE;IACE,WAAA;EAHR;AACF;AAMM;EACE;IACE,YAAA;EAJR;AACF;AAQI;EACI;IACA,WAAA;EANN;AACF\",\"sourcesContent\":[\".calendar-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    margin: 20px;\\r\\n  }\\r\\n  \\r\\n  .filter-section {\\r\\n    margin-bottom: 10px;\\r\\n  }\\r\\n  \\r\\n  .event-list {\\r\\n    list-style: none;\\r\\n    padding: 0;\\r\\n    text-align: center;\\r\\n    width: 100%;\\r\\n  \\r\\n    .event-card {\\r\\n      display: flex;\\r\\n      border: 1px solid #ccc;\\r\\n      padding: 10px;\\r\\n      margin: 10px;\\r\\n      background-color: #f9f9f9;\\r\\n      border-radius: 8px;\\r\\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\r\\n      width: 100%;\\r\\n      height: 130px; /* Set the height to 250px */\\r\\n      align-items: center;\\r\\n\\r\\n      .event-image {\\r\\n        width: 45%;\\r\\n        height: auto;\\r\\n        border-radius: 4px;\\r\\n        margin-right: 10px;\\r\\n      }\\r\\n  \\r\\n      .event-details {\\r\\n        color: #333;\\r\\n        width: 50%;\\r\\n      }\\r\\n  \\r\\n      @media (min-width: 360px) {\\r\\n        .event-image {\\r\\n          height: 90%;\\r\\n        }\\r\\n      }\\r\\n\\r\\n      @media (min-width: 600px) {\\r\\n        .event-image {\\r\\n          height: 80%;\\r\\n        }\\r\\n      }\\r\\n  \\r\\n      @media (min-width: 768px) {\\r\\n        .event-image {\\r\\n          height: 90%;\\r\\n        }\\r\\n      }\\r\\n  \\r\\n      @media (min-width: 1200px) {\\r\\n        .event-image {\\r\\n          height: 100%;\\r\\n        }\\r\\n      }\\r\\n    }\\r\\n\\r\\n    @media (min-width: 360px) {\\r\\n        .event-card {\\r\\n        width: 100%;\\r\\n        }\\r\\n      }\\r\\n    \\r\\n  }\\r\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy9jYWxlbmRlci5zY3NzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLCtEQUErRCxrQkFBa0IsMkJBQTJCLHdCQUF3QixpQkFBaUIsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsaUJBQWlCLHFCQUFxQixlQUFlLHVCQUF1QixnQkFBZ0IsR0FBRywyQkFBMkIsa0JBQWtCLDJCQUEyQixrQkFBa0IsaUJBQWlCLDhCQUE4Qix1QkFBdUIsNkNBQTZDLGdCQUFnQixtQkFBbUIscURBQXFELEdBQUcsd0NBQXdDLGVBQWUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRywwQ0FBMEMsZ0JBQWdCLGVBQWUsR0FBRyw2QkFBNkIsMENBQTBDLGtCQUFrQixLQUFLLEdBQUcsNkJBQTZCLDBDQUEwQyxrQkFBa0IsS0FBSyxHQUFHLDZCQUE2QiwwQ0FBMEMsa0JBQWtCLEtBQUssR0FBRyw4QkFBOEIsMENBQTBDLG1CQUFtQixLQUFLLEdBQUcsNkJBQTZCLDZCQUE2QixrQkFBa0IsS0FBSyxHQUFHLE9BQU8sdUZBQXVGLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxxQkFBcUIsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssOENBQThDLHNCQUFzQiwrQkFBK0IsNEJBQTRCLHFCQUFxQixPQUFPLDZCQUE2Qiw0QkFBNEIsT0FBTyx5QkFBeUIseUJBQXlCLG1CQUFtQiwyQkFBMkIsb0JBQW9CLDJCQUEyQix3QkFBd0IsaUNBQWlDLHdCQUF3Qix1QkFBdUIsb0NBQW9DLDZCQUE2QixtREFBbUQsc0JBQXNCLHlCQUF5QiwyREFBMkQsNEJBQTRCLHVCQUF1Qix5QkFBeUIsK0JBQStCLCtCQUErQixXQUFXLGdDQUFnQyx3QkFBd0IsdUJBQXVCLFdBQVcsMkNBQTJDLDBCQUEwQiwwQkFBMEIsYUFBYSxXQUFXLHlDQUF5QywwQkFBMEIsMEJBQTBCLGFBQWEsV0FBVywyQ0FBMkMsMEJBQTBCLDBCQUEwQixhQUFhLFdBQVcsNENBQTRDLDBCQUEwQiwyQkFBMkIsYUFBYSxXQUFXLFNBQVMsdUNBQXVDLHlCQUF5Qix3QkFBd0IsYUFBYSxXQUFXLGVBQWUseUJBQXlCO0FBQ24wRztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jYWxlbmRlci5zY3NzP2NiZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FsZW5kYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmZpbHRlci1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5ldmVudC1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ldmVudC1saXN0IC5ldmVudC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEzMHB4OyAvKiBTZXQgdGhlIGhlaWdodCB0byAyNTBweCAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmV2ZW50LWxpc3QgLmV2ZW50LWNhcmQgLmV2ZW50LWltYWdlIHtcXG4gIHdpZHRoOiA0NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5ldmVudC1saXN0IC5ldmVudC1jYXJkIC5ldmVudC1kZXRhaWxzIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSB7XFxuICAuZXZlbnQtbGlzdCAuZXZlbnQtY2FyZCAuZXZlbnQtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAuZXZlbnQtbGlzdCAuZXZlbnQtY2FyZCAuZXZlbnQtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZXZlbnQtbGlzdCAuZXZlbnQtY2FyZCAuZXZlbnQtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmV2ZW50LWxpc3QgLmV2ZW50LWNhcmQgLmV2ZW50LWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIHtcXG4gIC5ldmVudC1saXN0IC5ldmVudC1jYXJkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9jYWxlbmRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUEsRUFBQSw0QkFBQTtFQUNBLG1CQUFBO0FBQ047QUFDTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNSO0FBRU07RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUFSO0FBR007RUFDRTtJQUNFLFdBQUE7RUFEUjtBQUNGO0FBSU07RUFDRTtJQUNFLFdBQUE7RUFGUjtBQUNGO0FBS007RUFDRTtJQUNFLFdBQUE7RUFIUjtBQUNGO0FBTU07RUFDRTtJQUNFLFlBQUE7RUFKUjtBQUNGO0FBUUk7RUFDSTtJQUNBLFdBQUE7RUFOTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYWxlbmRhci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5maWx0ZXItc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ldmVudC1saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIFxcclxcbiAgICAuZXZlbnQtY2FyZCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMzBweDsgLyogU2V0IHRoZSBoZWlnaHQgdG8gMjUwcHggKi9cXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgIC5ldmVudC1pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogNDUlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgIC5ldmVudC1kZXRhaWxzIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIHtcXHJcXG4gICAgICAgIC5ldmVudC1pbWFnZSB7XFxyXFxuICAgICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICAgIC5ldmVudC1pbWFnZSB7XFxyXFxuICAgICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgICAgLmV2ZW50LWltYWdlIHtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgXFxyXFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAgICAgLmV2ZW50LWltYWdlIHtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIHtcXHJcXG4gICAgICAgIC5ldmVudC1jYXJkIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/calender.scss\n"));

/***/ })

});