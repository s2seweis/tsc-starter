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

/***/ "./src/components/Layout/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaBars_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaBars!=!react-icons/fa */ \"__barrel_optimize__?names=FaBars!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/navbar.module.scss */ \"./styles/navbar.module.scss\");\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/SidebarContext */ \"./context/SidebarContext.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n // Import Select from react-select\n\n // Import useSidebarContext hook\nvar options = [\n    {\n        value: \"home\",\n        label: \"Home\"\n    },\n    {\n        value: \"posts\",\n        label: \"Posts\"\n    },\n    {\n        value: \"contact\",\n        label: \"Contact\"\n    },\n    {\n        value: \"dashboard\",\n        label: \"Dashboard\"\n    },\n    {\n        value: \"login\",\n        label: \"Login\"\n    }\n];\nvar Navbar = function() {\n    _s();\n    var toggleSidebar = (0,_context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__.useSidebarContext)().toggleSidebar; // Use useSidebarContext hook to access context values\n    var handleOptionChange = function(selectedOption) {\n        window.location.href = \"/\".concat(selectedOption.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            display: \"flex\"\n        },\n        className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navbar,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navList,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItem,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sidebarToggle,\n                        onClick: toggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBars, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].menu1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItem,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLink,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItem,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/posts\",\n                            className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLink,\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItem,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/contact\",\n                            className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLink,\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItem,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/dashboard\",\n                            className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLink,\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItem,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/login\",\n                            className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLink,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].select,\n                options: options,\n                defaultValue: options[0],\n                onChange: handleOptionChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Downloads\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Navbar.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"afvfKrgwj+JAViTV5L9cEygadi8=\", false, function() {\n    return [\n        _context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__.useSidebarContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNOLENBQUMsa0NBQWtDO0FBQ2I7QUFDWSxDQUFDLGdDQUFnQztBQUVyRyxJQUFNSyxVQUFVO0lBQ2Q7UUFBRUMsT0FBTztRQUFRQyxPQUFPO0lBQU87SUFDL0I7UUFBRUQsT0FBTztRQUFTQyxPQUFPO0lBQVE7SUFDakM7UUFBRUQsT0FBTztRQUFXQyxPQUFPO0lBQVU7SUFDckM7UUFBRUQsT0FBTztRQUFhQyxPQUFPO0lBQVk7SUFDekM7UUFBRUQsT0FBTztRQUFTQyxPQUFPO0lBQVE7Q0FDbEM7QUFFRCxJQUFNQyxTQUFtQjs7SUFDdkIsSUFBTSxnQkFBb0JKLDBFQUFpQkEsR0FBbkNLLGVBQXVDLHNEQUFzRDtJQUVyRyxJQUFNQyxxQkFBcUIsU0FBQ0M7UUFDMUJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLElBQXlCLE9BQXJCSCxlQUFlTCxLQUFLO0lBQ2pEO0lBRUEscUJBQ0UsOERBQUNTO1FBQUlDLE9BQU87WUFBRUMsU0FBUztRQUFPO1FBQUdDLFdBQVdmLHlFQUFhOzswQkFDdkQsOERBQUNpQjtnQkFBSUYsV0FBV2YsMEVBQWM7MEJBQzVCLDRFQUFDaUI7b0JBQUlGLFdBQVdmLDBFQUFjOzhCQUM1Qiw0RUFBQ29CO3dCQUFPTCxXQUFXZixnRkFBb0I7d0JBQUVzQixTQUFTaEI7a0NBQ2hELDRFQUFDUixnRkFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtiLDhEQUFDbUI7Z0JBQUlGLFdBQVdmLHdFQUFZOztrQ0FDMUIsOERBQUNpQjt3QkFBSUYsV0FBV2YsMEVBQWM7a0NBQzVCLDRFQUFDd0I7NEJBQUViLE1BQUs7NEJBQUlJLFdBQVdmLDBFQUFjO3NDQUFFOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNpQjt3QkFBSUYsV0FBV2YsMEVBQWM7a0NBQzVCLDRFQUFDd0I7NEJBQUViLE1BQUs7NEJBQVNJLFdBQVdmLDBFQUFjO3NDQUFFOzs7Ozs7Ozs7OztrQ0FFOUMsOERBQUNpQjt3QkFBSUYsV0FBV2YsMEVBQWM7a0NBQzVCLDRFQUFDd0I7NEJBQUViLE1BQUs7NEJBQVdJLFdBQVdmLDBFQUFjO3NDQUFFOzs7Ozs7Ozs7OztrQ0FFaEQsOERBQUNpQjt3QkFBSUYsV0FBV2YsMEVBQWM7a0NBQzVCLDRFQUFDd0I7NEJBQUViLE1BQUs7NEJBQWFJLFdBQVdmLDBFQUFjO3NDQUFFOzs7Ozs7Ozs7OztrQ0FFbEQsOERBQUNpQjt3QkFBSUYsV0FBV2YsMEVBQWM7a0NBQzVCLDRFQUFDd0I7NEJBQUViLE1BQUs7NEJBQVNJLFdBQVdmLDBFQUFjO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHaEQsOERBQUNELG9EQUFNQTtnQkFDTGdCLFdBQVdmLHlFQUFhO2dCQUN4QkUsU0FBU0E7Z0JBQ1R5QixjQUFjekIsT0FBTyxDQUFDLEVBQUU7Z0JBQ3hCMEIsVUFBVXJCOzs7Ozs7Ozs7Ozs7QUFJbEI7R0ExQ01GOztRQUNzQkosc0VBQWlCQTs7O0tBRHZDSTtBQTRDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeD84OTkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnOyAvLyBJbXBvcnQgU2VsZWN0IGZyb20gcmVhY3Qtc2VsZWN0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVNpZGViYXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TaWRlYmFyQ29udGV4dCc7IC8vIEltcG9ydCB1c2VTaWRlYmFyQ29udGV4dCBob29rXHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gIHsgdmFsdWU6ICdob21lJywgbGFiZWw6ICdIb21lJyB9LFxyXG4gIHsgdmFsdWU6ICdwb3N0cycsIGxhYmVsOiAnUG9zdHMnIH0sXHJcbiAgeyB2YWx1ZTogJ2NvbnRhY3QnLCBsYWJlbDogJ0NvbnRhY3QnIH0sXHJcbiAgeyB2YWx1ZTogJ2Rhc2hib2FyZCcsIGxhYmVsOiAnRGFzaGJvYXJkJyB9LFxyXG4gIHsgdmFsdWU6ICdsb2dpbicsIGxhYmVsOiAnTG9naW4nIH0sXHJcbl07XHJcblxyXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdG9nZ2xlU2lkZWJhciB9ID0gdXNlU2lkZWJhckNvbnRleHQoKTsgLy8gVXNlIHVzZVNpZGViYXJDb250ZXh0IGhvb2sgdG8gYWNjZXNzIGNvbnRleHQgdmFsdWVzXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wdGlvbkNoYW5nZSA9IChzZWxlY3RlZE9wdGlvbikgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgLyR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fSBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpc3R9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJUb2dnbGV9IG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgICAgICA8RmFCYXJzIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnUxfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rfT5Ib21lPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL3Bvc3RzXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua30+UG9zdHM8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvY29udGFjdFwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmt9PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua30+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua30+TG9naW48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fSAvLyBBcHBseSBDU1MgY2xhc3MgZm9yIHN0eWxpbmdcclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfSAvLyBQYXNzIG9wdGlvbnMgYXJyYXlcclxuICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnNbMF19IC8vIFNldCBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9wdGlvbkNoYW5nZX0gLy8gUmVkaXJlY3QgdG8gc2VsZWN0ZWQgb3B0aW9uIHZhbHVlXHJcbiAgICAgIC8+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGYUJhcnMiLCJTZWxlY3QiLCJzdHlsZXMiLCJ1c2VTaWRlYmFyQ29udGV4dCIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiTmF2YmFyIiwidG9nZ2xlU2lkZWJhciIsImhhbmRsZU9wdGlvbkNoYW5nZSIsInNlbGVjdGVkT3B0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibmF2Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwibmF2YmFyIiwiZGl2IiwibmF2TGlzdCIsIm5hdkl0ZW0iLCJidXR0b24iLCJzaWRlYmFyVG9nZ2xlIiwib25DbGljayIsIm1lbnUxIiwiYSIsIm5hdkxpbmsiLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/Navbar.tsx\n"));

/***/ })

});