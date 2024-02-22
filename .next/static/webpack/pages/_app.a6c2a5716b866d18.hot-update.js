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

/***/ "./src/components/Layout/Sidebar.tsx":
/*!*******************************************!*\
  !*** ./src/components/Layout/Sidebar.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!react-icons/fa */ \"__barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SidebarContext */ \"./context/SidebarContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_layout_sidebar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/layout/sidebar.scss */ \"./styles/layout/sidebar.scss\");\n// components/layout/sidebar.tsx\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import your SCSS file\nvar Sidebar = function() {\n    _s();\n    var _useSidebarContext = (0,_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext)(), isSidebarOpen = _useSidebarContext.isSidebarOpen, toggleSidebar = _useSidebarContext.toggleSidebar;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeMenu = _useState[0], setActiveMenu = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeSubMenu = _useState1[0], setActiveSubMenu = _useState1[1];\n    var router = useRouter();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var storedActiveMenu = localStorage.getItem(\"activeMenu\");\n        var storedActiveSubMenu = localStorage.getItem(\"activeSubMenu\");\n        setActiveMenu(storedActiveMenu || getActiveMenu(router.pathname));\n        setActiveSubMenu(storedActiveSubMenu || null);\n    }, [\n        router.pathname\n    ]);\n    var handleMenuClick = function(menu) {\n        setActiveSubMenu(function(prevSubMenu) {\n            return prevSubMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeSubMenu\", menu);\n        setActiveMenu(function(prevMenu) {\n            return prevMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeMenu\", menu);\n    };\n    var isSubMenuActive = function(menu) {\n        return activeSubMenu === menu;\n    };\n    var isLinkActive = function(href) {\n        return router.asPath === href;\n    };\n    var getActiveMenu = function(path) {\n        var routeToMenuMap = {\n            \"/\": \"home\",\n            \"/contact\": \"home\",\n            \"/calender\": \"home\",\n            \"/posts\": \"posts\",\n            \"/dashboard\": \"dashboard\",\n            \"/404\": \"dashboard\",\n            \"/login\": \"login\"\n        };\n        return routeToMenuMap[path] || null;\n    };\n    var renderSubMenu = function(submenus) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"submenu\",\n            children: submenus.map(function(submenu) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\".concat(submenu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"submenuLink \".concat(isSubMenuActive(submenu) ? \"active\" : \"\"),\n                        children: submenu\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this)\n                }, submenu, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sidebar \".concat(isSidebarOpen ? \"open\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebarToggle\",\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegWindowClose, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navLinks\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"home\") || isLinkActive(\"/\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"home\");\n                            },\n                            children: [\n                                \"Home \",\n                                isSubMenuActive(\"home\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 45\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 63\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"home\") && renderSubMenu([\n                            \"\",\n                            \"contact\",\n                            \"calender\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"posts\") || isLinkActive(\"/posts\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"posts\");\n                            },\n                            children: [\n                                \"Posts \",\n                                isSubMenuActive(\"posts\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 47\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 65\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"posts\") && renderSubMenu([\n                            \"posts\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"dashboard\") || isLinkActive(\"/dashboard\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"dashboard\");\n                            },\n                            children: [\n                                \"Dashboard \",\n                                isSubMenuActive(\"dashboard\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 55\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 73\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"dashboard\") && renderSubMenu([\n                            \"dashboard\",\n                            \"404\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"login-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"submenuLink \".concat(isLinkActive(\"/login\") ? \"active\" : \"\"),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"jXc3E79m7iqqZE76GKXqYAGB8Cw=\", true, function() {\n    return [\n        _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7d0JBRWxFdUIsZ0JBQWdCLFlBQVlNLGNBQWM7NEJBQUM7eUJBQVE7c0NBRXBELDhEQUFDTTs0QkFBS0gsV0FBVyxXQUFzRixPQUEzRVQsZ0JBQWdCLGdCQUFnQkMsYUFBYSxnQkFBZ0IsV0FBVzs0QkFBTVksU0FBUzt1Q0FBTWxCLGdCQUFnQjs7O2dDQUFjO2dDQUMxSUssZ0JBQWdCLDZCQUFlLDhEQUFDeEIsd0hBQVdBOzs7OzBEQUFNLDhEQUFDQyx5SEFBWUE7Ozs7Ozs7Ozs7O3dCQUUxRXVCLGdCQUFnQixnQkFBZ0JNLGNBQWM7NEJBQUM7NEJBQWE7eUJBQU07c0NBRW5FLDhEQUFDRTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQzlCLGtEQUFJQTtnQ0FBQ3VCLE1BQUs7MENBQ1QsNEVBQUNVO29DQUFLSCxXQUFXLGVBQXNELE9BQXZDUixhQUFhLFlBQVksV0FBVzs4Q0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hGO0dBbEZNckI7O1FBQ3FDRixzRUFBaUJBOzs7S0FEdERFO0FBb0ZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TaWRlYmFyLnRzeD8wYWI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbGF5b3V0L3NpZGViYXIudHN4XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFSZWdXaW5kb3dDbG9zZSwgRmFBbmdsZURvd24sIEZhQW5nbGVSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgdXNlU2lkZWJhckNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L1NpZGViYXJDb250ZXh0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbGF5b3V0L3NpZGViYXIuc2Nzcyc7IC8vIEltcG9ydCB5b3VyIFNDU1MgZmlsZVxyXG5cclxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc1NpZGViYXJPcGVuLCB0b2dnbGVTaWRlYmFyIH0gPSB1c2VTaWRlYmFyQ29udGV4dCgpO1xyXG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFthY3RpdmVTdWJNZW51LCBzZXRBY3RpdmVTdWJNZW51XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkQWN0aXZlTWVudSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVNZW51Jyk7XHJcbiAgICBjb25zdCBzdG9yZWRBY3RpdmVTdWJNZW51ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZVN1Yk1lbnUnKTtcclxuXHJcbiAgICBzZXRBY3RpdmVNZW51KHN0b3JlZEFjdGl2ZU1lbnUgfHwgZ2V0QWN0aXZlTWVudShyb3V0ZXIucGF0aG5hbWUpKTtcclxuICAgIHNldEFjdGl2ZVN1Yk1lbnUoc3RvcmVkQWN0aXZlU3ViTWVudSB8fCBudWxsKTtcclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9IChtZW51OiBzdHJpbmcpID0+IHtcclxuICAgIHNldEFjdGl2ZVN1Yk1lbnUoKHByZXZTdWJNZW51KSA9PiAocHJldlN1Yk1lbnUgPT09IG1lbnUgPyBudWxsIDogbWVudSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZVN1Yk1lbnUnLCBtZW51KTtcclxuXHJcbiAgICBzZXRBY3RpdmVNZW51KChwcmV2TWVudSkgPT4gKHByZXZNZW51ID09PSBtZW51ID8gbnVsbCA6IG1lbnUpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVNZW51JywgbWVudSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNTdWJNZW51QWN0aXZlID0gKG1lbnU6IHN0cmluZykgPT4gYWN0aXZlU3ViTWVudSA9PT0gbWVudTtcclxuICBjb25zdCBpc0xpbmtBY3RpdmUgPSAoaHJlZjogc3RyaW5nKSA9PiByb3V0ZXIuYXNQYXRoID09PSBocmVmO1xyXG5cclxuICBjb25zdCBnZXRBY3RpdmVNZW51ID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVUb01lbnVNYXAgPSB7XHJcbiAgICAgICcvJzogJ2hvbWUnLFxyXG4gICAgICAnL2NvbnRhY3QnOiAnaG9tZScsXHJcbiAgICAgICcvY2FsZW5kZXInOiAnaG9tZScsXHJcbiAgICAgICcvcG9zdHMnOiAncG9zdHMnLFxyXG4gICAgICAnL2Rhc2hib2FyZCc6ICdkYXNoYm9hcmQnLFxyXG4gICAgICAnLzQwNCc6ICdkYXNoYm9hcmQnLFxyXG4gICAgICAnL2xvZ2luJzogJ2xvZ2luJyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlVG9NZW51TWFwW3BhdGhdIHx8IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU3ViTWVudSA9IChzdWJtZW51czogc3RyaW5nW10pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudVwiPlxyXG4gICAgICAgIHtzdWJtZW51cy5tYXAoKHN1Ym1lbnUpID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17c3VibWVudX0gaHJlZj17YC8ke3N1Ym1lbnV9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHN1Ym1lbnVMaW5rICR7aXNTdWJNZW51QWN0aXZlKHN1Ym1lbnUpID8gJ2FjdGl2ZScgOiAnJ31gfT57c3VibWVudX08L3NwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7aXNTaWRlYmFyT3BlbiA/ICdvcGVuJyA6ICcnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJUb2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cclxuICAgICAgICA8RmFSZWdXaW5kb3dDbG9zZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmtzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BuYXZMaW5rICR7aXNTdWJNZW51QWN0aXZlKCdob21lJykgfHwgaXNMaW5rQWN0aXZlKCcvJykgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVDbGljaygnaG9tZScpfT5cclxuICAgICAgICAgICAgSG9tZSB7aXNTdWJNZW51QWN0aXZlKCdob21lJykgPyA8RmFBbmdsZURvd24gLz4gOiA8RmFBbmdsZVJpZ2h0IC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge2lzU3ViTWVudUFjdGl2ZSgnaG9tZScpICYmIHJlbmRlclN1Yk1lbnUoWycnLCAnY29udGFjdCcsICdjYWxlbmRlciddKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbmF2TGluayAke2lzU3ViTWVudUFjdGl2ZSgncG9zdHMnKSB8fCBpc0xpbmtBY3RpdmUoJy9wb3N0cycpID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51Q2xpY2soJ3Bvc3RzJyl9PlxyXG4gICAgICAgICAgICBQb3N0cyB7aXNTdWJNZW51QWN0aXZlKCdwb3N0cycpID8gPEZhQW5nbGVEb3duIC8+IDogPEZhQW5nbGVSaWdodCAvPn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHtpc1N1Yk1lbnVBY3RpdmUoJ3Bvc3RzJykgJiYgcmVuZGVyU3ViTWVudShbJ3Bvc3RzJ10pfVxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG5hdkxpbmsgJHtpc1N1Yk1lbnVBY3RpdmUoJ2Rhc2hib2FyZCcpIHx8IGlzTGlua0FjdGl2ZSgnL2Rhc2hib2FyZCcpID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51Q2xpY2soJ2Rhc2hib2FyZCcpfT5cclxuICAgICAgICAgICAgRGFzaGJvYXJkIHtpc1N1Yk1lbnVBY3RpdmUoJ2Rhc2hib2FyZCcpID8gPEZhQW5nbGVEb3duIC8+IDogPEZhQW5nbGVSaWdodCAvPn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHtpc1N1Yk1lbnVBY3RpdmUoJ2Rhc2hib2FyZCcpICYmIHJlbmRlclN1Yk1lbnUoWydkYXNoYm9hcmQnLCAnNDA0J10pfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BzdWJtZW51TGluayAke2lzTGlua0FjdGl2ZSgnL2xvZ2luJykgPyAnYWN0aXZlJyA6ICcnfWB9PkxvZ2luPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGYVJlZ1dpbmRvd0Nsb3NlIiwiRmFBbmdsZURvd24iLCJGYUFuZ2xlUmlnaHQiLCJ1c2VTaWRlYmFyQ29udGV4dCIsIkxpbmsiLCJTaWRlYmFyIiwiaXNTaWRlYmFyT3BlbiIsInRvZ2dsZVNpZGViYXIiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsImFjdGl2ZVN1Yk1lbnUiLCJzZXRBY3RpdmVTdWJNZW51Iiwicm91dGVyIiwidXNlUm91dGVyIiwic3RvcmVkQWN0aXZlTWVudSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRBY3RpdmVTdWJNZW51IiwiZ2V0QWN0aXZlTWVudSIsInBhdGhuYW1lIiwiaGFuZGxlTWVudUNsaWNrIiwibWVudSIsInByZXZTdWJNZW51Iiwic2V0SXRlbSIsInByZXZNZW51IiwiaXNTdWJNZW51QWN0aXZlIiwiaXNMaW5rQWN0aXZlIiwiaHJlZiIsImFzUGF0aCIsInBhdGgiLCJyb3V0ZVRvTWVudU1hcCIsInJlbmRlclN1Yk1lbnUiLCJzdWJtZW51cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInN1Ym1lbnUiLCJzcGFuIiwib25DbGljayIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/Sidebar.tsx\n"));

/***/ })

});