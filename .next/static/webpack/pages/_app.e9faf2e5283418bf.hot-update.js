"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/AuthController/AuthController.tsx":
/*!**********************************************************!*\
  !*** ./src/components/AuthController/AuthController.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/AuthContext */ \"./context/AuthContext.tsx\");\n// components/AuthController.tsx\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar AuthController = function() {\n    _s();\n    var _useAuth = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)(), isAuthenticated = _useAuth.isAuthenticated, login = _useAuth.login, logout = _useAuth.logout;\n    console.log(\"line:1\", isAuthenticated);\n    var handleToggleAuth = function() {\n        if (isAuthenticated) {\n            logout();\n        } else {\n            login();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                padding: \"10px\",\n                marginLeft: \"0px\",\n                fontSize: \"larger\",\n                background: \"aliceblue\"\n            },\n            onClick: handleToggleAuth,\n            children: isAuthenticated ? \"Logout\" : \"Login\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\AuthController\\\\AuthController.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\AuthController\\\\AuthController.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(AuthController, \"iU3kWicRtR1Zpx7oxnAjAa6bugI=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = AuthController;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthController);\nvar _c;\n$RefreshReg$(_c, \"AuthController\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoQ29udHJvbGxlci9BdXRoQ29udHJvbGxlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQWdDOzs7O0FBQ047QUFDNkI7QUFFdkQsSUFBTUUsaUJBQTJCOztJQUMvQixJQUEyQ0QsV0FBQUEsNkRBQU9BLElBQTFDRSxrQkFBbUNGLFNBQW5DRSxpQkFBaUJDLFFBQWtCSCxTQUFsQkcsT0FBT0MsU0FBV0osU0FBWEk7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVSjtJQUV0QixJQUFNSyxtQkFBbUI7UUFDdkIsSUFBSUwsaUJBQWlCO1lBQ25CRTtRQUNGLE9BQU87WUFDTEQ7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLE9BQU87WUFBQ0MsU0FBUTtZQUFRQyxnQkFBZTtRQUFRO2tCQUVsRCw0RUFBQ0g7WUFBSUMsT0FBTztnQkFBQ0csU0FBUTtnQkFBUUMsWUFBVztnQkFBT0MsVUFBUztnQkFBVUMsWUFBVztZQUFXO1lBQUdDLFNBQVNUO3NCQUNqR0wsa0JBQWtCLFdBQVc7Ozs7Ozs7Ozs7O0FBSXRDO0dBcEJNRDs7UUFDdUNELHlEQUFPQTs7O0tBRDlDQztBQXNCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BdXRoQ29udHJvbGxlci9BdXRoQ29udHJvbGxlci50c3g/Yzg3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0F1dGhDb250cm9sbGVyLnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBBdXRoQ29udHJvbGxlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGxvZ2luLCBsb2dvdXQgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zb2xlLmxvZyhcImxpbmU6MVwiLCBpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUF1dGggPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIGxvZ291dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9naW4oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgey8qIDxwPkF1dGhlbnRpY2F0aW9uIHN0YXR1czoge2lzQXV0aGVudGljYXRlZCA/ICdBdXRoZW50aWNhdGVkJyA6ICdOb3QgQXV0aGVudGljYXRlZCd9PC9wPiAqL31cclxuICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6XCIxMHB4XCIsIG1hcmdpbkxlZnQ6XCIwcHhcIiwgZm9udFNpemU6XCJsYXJnZXJcIiwgYmFja2dyb3VuZDpcImFsaWNlYmx1ZVwifX0gb25DbGljaz17aGFuZGxlVG9nZ2xlQXV0aH0+XHJcbiAgICAgICAge2lzQXV0aGVudGljYXRlZCA/ICdMb2dvdXQnIDogJ0xvZ2luJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRyb2xsZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUF1dGgiLCJBdXRoQ29udHJvbGxlciIsImlzQXV0aGVudGljYXRlZCIsImxvZ2luIiwibG9nb3V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRvZ2dsZUF1dGgiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AuthController/AuthController.tsx\n"));

/***/ })

});