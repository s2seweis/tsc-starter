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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!react-icons/fa */ \"__barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SidebarContext */ \"./context/SidebarContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_layout_sidebar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/layout/sidebar.scss */ \"./styles/layout/sidebar.scss\");\n// components/layout/sidebar.tsx\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import your SCSS file\nvar Sidebar = function() {\n    _s();\n    var _useSidebarContext = (0,_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext)(), isSidebarOpen = _useSidebarContext.isSidebarOpen, toggleSidebar = _useSidebarContext.toggleSidebar;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeMenu = _useState[0], setActiveMenu = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeSubMenu = _useState1[0], setActiveSubMenu = _useState1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var storedActiveMenu = localStorage.getItem(\"activeMenu\");\n        var storedActiveSubMenu = localStorage.getItem(\"activeSubMenu\");\n        if (isSidebarOpen) {\n            // Only update state if the sidebar is open\n            setActiveMenu(storedActiveMenu || getActiveMenu(router.pathname));\n            setActiveSubMenu(storedActiveSubMenu || null);\n        }\n    }, [\n        isSidebarOpen,\n        router.pathname\n    ]);\n    var handleMenuClick = function(menu) {\n        setActiveSubMenu(function(prevSubMenu) {\n            return prevSubMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeSubMenu\", menu);\n        setActiveMenu(function(prevMenu) {\n            return prevMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeMenu\", menu);\n    };\n    var isSubMenuActive = function(menu) {\n        return activeSubMenu === menu;\n    };\n    var isLinkActive = function(href) {\n        return router.asPath === href;\n    };\n    var getActiveMenu = function(path) {\n        var routeToMenuMap = {\n            \"/\": \"\",\n            \"/contact\": \"home\",\n            \"/calender\": \"home\",\n            \"/posts\": \"posts\",\n            \"/dashboard\": \"dashboard\",\n            \"/404\": \"dashboard\",\n            \"/login\": \"login\"\n        };\n        return routeToMenuMap[path] || null;\n    };\n    var renderSubMenu = function(submenus) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"submenu\",\n            children: submenus.map(function(submenu) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\".concat(submenu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"submenuLink \".concat(isSubMenuActive(submenu) ? \"active\" : \"\"),\n                        children: submenu\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this)\n                }, submenu, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sidebar \".concat(isSidebarOpen ? \"open\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebarToggle\",\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaRegWindowClose, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navLinks\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"home\") || isLinkActive(\"/\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"home\");\n                            },\n                            children: [\n                                \"Home \",\n                                isSubMenuActive(\"home\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 45\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 63\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"home\") && renderSubMenu([\n                            \"home\",\n                            \"contact\",\n                            \"calender\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"posts\") || isLinkActive(\"/posts\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"posts\");\n                            },\n                            children: [\n                                \"Posts \",\n                                isSubMenuActive(\"posts\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 47\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 65\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"posts\") && renderSubMenu([\n                            \"posts\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"dashboard\") || isLinkActive(\"/dashboard\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"dashboard\");\n                            },\n                            children: [\n                                \"Dashboard \",\n                                isSubMenuActive(\"dashboard\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 55\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 73\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"dashboard\") && renderSubMenu([\n                            \"dashboard\",\n                            \"404\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"login-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"submenuLink \".concat(isLinkActive(\"/login\") ? \"active\" : \"\"),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"jXc3E79m7iqqZE76GKXqYAGB8Cw=\", false, function() {\n    return [\n        _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUN4Qix3SEFBV0E7Ozs7MERBQU0sOERBQUNDLHlIQUFZQTs7Ozs7Ozs7Ozs7d0JBRWxFdUIsZ0JBQWdCLFlBQVlNLGNBQWM7NEJBQUM7eUJBQVE7c0NBRXBELDhEQUFDTTs0QkFBS0gsV0FBVyxXQUFzRixPQUEzRVQsZ0JBQWdCLGdCQUFnQkMsYUFBYSxnQkFBZ0IsV0FBVzs0QkFBTVksU0FBUzt1Q0FBTWxCLGdCQUFnQjs7O2dDQUFjO2dDQUMxSUssZ0JBQWdCLDZCQUFlLDhEQUFDeEIsd0hBQVdBOzs7OzBEQUFNLDhEQUFDQyx5SEFBWUE7Ozs7Ozs7Ozs7O3dCQUUxRXVCLGdCQUFnQixnQkFBZ0JNLGNBQWM7NEJBQUM7NEJBQWE7eUJBQU07c0NBRW5FLDhEQUFDRTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQzlCLGtEQUFJQTtnQ0FBQ3VCLE1BQUs7MENBQ1QsNEVBQUNVO29DQUFLSCxXQUFXLGVBQXNELE9BQXZDUixhQUFhLFlBQVksV0FBVzs4Q0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hGO0dBbkZNcEI7O1FBQ3FDSCxzRUFBaUJBO1FBRzNDRSxrREFBU0E7OztLQUpwQkM7QUFxRk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NpZGViYXIudHN4PzBhYjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9sYXlvdXQvc2lkZWJhci50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVJlZ1dpbmRvd0Nsb3NlLCBGYUFuZ2xlRG93biwgRmFBbmdsZVJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyB1c2VTaWRlYmFyQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvU2lkZWJhckNvbnRleHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2xheW91dC9zaWRlYmFyLnNjc3MnOyAvLyBJbXBvcnQgeW91ciBTQ1NTIGZpbGVcclxuXHJcbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNTaWRlYmFyT3BlbiwgdG9nZ2xlU2lkZWJhciB9ID0gdXNlU2lkZWJhckNvbnRleHQoKTtcclxuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbYWN0aXZlU3ViTWVudSwgc2V0QWN0aXZlU3ViTWVudV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZEFjdGl2ZU1lbnUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlTWVudScpO1xyXG4gICAgY29uc3Qgc3RvcmVkQWN0aXZlU3ViTWVudSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVTdWJNZW51Jyk7XHJcblxyXG4gICAgaWYgKGlzU2lkZWJhck9wZW4pIHtcclxuICAgICAgLy8gT25seSB1cGRhdGUgc3RhdGUgaWYgdGhlIHNpZGViYXIgaXMgb3BlblxyXG4gICAgICBzZXRBY3RpdmVNZW51KHN0b3JlZEFjdGl2ZU1lbnUgfHwgZ2V0QWN0aXZlTWVudShyb3V0ZXIucGF0aG5hbWUpKTtcclxuICAgICAgc2V0QWN0aXZlU3ViTWVudShzdG9yZWRBY3RpdmVTdWJNZW51IHx8IG51bGwpO1xyXG4gICAgfVxyXG4gIH0sIFtpc1NpZGViYXJPcGVuLCByb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKG1lbnU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3ViTWVudSgocHJldlN1Yk1lbnUpID0+IChwcmV2U3ViTWVudSA9PT0gbWVudSA/IG51bGwgOiBtZW51KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlU3ViTWVudScsIG1lbnUpO1xyXG5cclxuICAgIHNldEFjdGl2ZU1lbnUoKHByZXZNZW51KSA9PiAocHJldk1lbnUgPT09IG1lbnUgPyBudWxsIDogbWVudSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZU1lbnUnLCBtZW51KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1Yk1lbnVBY3RpdmUgPSAobWVudTogc3RyaW5nKSA9PiBhY3RpdmVTdWJNZW51ID09PSBtZW51O1xyXG4gIGNvbnN0IGlzTGlua0FjdGl2ZSA9IChocmVmOiBzdHJpbmcpID0+IHJvdXRlci5hc1BhdGggPT09IGhyZWY7XHJcblxyXG4gIGNvbnN0IGdldEFjdGl2ZU1lbnUgPSAocGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVRvTWVudU1hcCA9IHtcclxuICAgICAgJy8nOiAnJyxcclxuICAgICAgJy9jb250YWN0JzogJ2hvbWUnLFxyXG4gICAgICAnL2NhbGVuZGVyJzogJ2hvbWUnLFxyXG4gICAgICAnL3Bvc3RzJzogJ3Bvc3RzJyxcclxuICAgICAgJy9kYXNoYm9hcmQnOiAnZGFzaGJvYXJkJyxcclxuICAgICAgJy80MDQnOiAnZGFzaGJvYXJkJyxcclxuICAgICAgJy9sb2dpbic6ICdsb2dpbicsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiByb3V0ZVRvTWVudU1hcFtwYXRoXSB8fCBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclN1Yk1lbnUgPSAoc3VibWVudXM6IHN0cmluZ1tdKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnVcIj5cclxuICAgICAge3N1Ym1lbnVzLm1hcCgoc3VibWVudSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGtleT17c3VibWVudX0gaHJlZj17YC8ke3N1Ym1lbnV9YH0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BzdWJtZW51TGluayAke2lzU3ViTWVudUFjdGl2ZShzdWJtZW51KSA/ICdhY3RpdmUnIDogJyd9YH0+e3N1Ym1lbnV9PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7aXNTaWRlYmFyT3BlbiA/ICdvcGVuJyA6ICcnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJUb2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cclxuICAgICAgICA8RmFSZWdXaW5kb3dDbG9zZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmtzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BuYXZMaW5rICR7aXNTdWJNZW51QWN0aXZlKCdob21lJykgfHwgaXNMaW5rQWN0aXZlKCcvJykgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVDbGljaygnaG9tZScpfT5cclxuICAgICAgICAgICAgSG9tZSB7aXNTdWJNZW51QWN0aXZlKCdob21lJykgPyA8RmFBbmdsZURvd24gLz4gOiA8RmFBbmdsZVJpZ2h0IC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge2lzU3ViTWVudUFjdGl2ZSgnaG9tZScpICYmIHJlbmRlclN1Yk1lbnUoWydob21lJywgJ2NvbnRhY3QnLCAnY2FsZW5kZXInXSl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG5hdkxpbmsgJHtpc1N1Yk1lbnVBY3RpdmUoJ3Bvc3RzJykgfHwgaXNMaW5rQWN0aXZlKCcvcG9zdHMnKSA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlTWVudUNsaWNrKCdwb3N0cycpfT5cclxuICAgICAgICAgICAgUG9zdHMge2lzU3ViTWVudUFjdGl2ZSgncG9zdHMnKSA/IDxGYUFuZ2xlRG93biAvPiA6IDxGYUFuZ2xlUmlnaHQgLz59XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB7aXNTdWJNZW51QWN0aXZlKCdwb3N0cycpICYmIHJlbmRlclN1Yk1lbnUoWydwb3N0cyddKX1cclxuXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BuYXZMaW5rICR7aXNTdWJNZW51QWN0aXZlKCdkYXNoYm9hcmQnKSB8fCBpc0xpbmtBY3RpdmUoJy9kYXNoYm9hcmQnKSA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlTWVudUNsaWNrKCdkYXNoYm9hcmQnKX0+XHJcbiAgICAgICAgICAgIERhc2hib2FyZCB7aXNTdWJNZW51QWN0aXZlKCdkYXNoYm9hcmQnKSA/IDxGYUFuZ2xlRG93biAvPiA6IDxGYUFuZ2xlUmlnaHQgLz59XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB7aXNTdWJNZW51QWN0aXZlKCdkYXNoYm9hcmQnKSAmJiByZW5kZXJTdWJNZW51KFsnZGFzaGJvYXJkJywgJzQwNCddKX1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc3VibWVudUxpbmsgJHtpc0xpbmtBY3RpdmUoJy9sb2dpbicpID8gJ2FjdGl2ZScgOiAnJ31gfT5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmFSZWdXaW5kb3dDbG9zZSIsIkZhQW5nbGVEb3duIiwiRmFBbmdsZVJpZ2h0IiwidXNlU2lkZWJhckNvbnRleHQiLCJMaW5rIiwidXNlUm91dGVyIiwiU2lkZWJhciIsImlzU2lkZWJhck9wZW4iLCJ0b2dnbGVTaWRlYmFyIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJhY3RpdmVTdWJNZW51Iiwic2V0QWN0aXZlU3ViTWVudSIsInJvdXRlciIsInN0b3JlZEFjdGl2ZU1lbnUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkQWN0aXZlU3ViTWVudSIsImdldEFjdGl2ZU1lbnUiLCJwYXRobmFtZSIsImhhbmRsZU1lbnVDbGljayIsIm1lbnUiLCJwcmV2U3ViTWVudSIsInNldEl0ZW0iLCJwcmV2TWVudSIsImlzU3ViTWVudUFjdGl2ZSIsImlzTGlua0FjdGl2ZSIsImhyZWYiLCJhc1BhdGgiLCJwYXRoIiwicm91dGVUb01lbnVNYXAiLCJyZW5kZXJTdWJNZW51Iiwic3VibWVudXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzdWJtZW51Iiwic3BhbiIsIm9uQ2xpY2siLCJuYXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/Sidebar.tsx\n"));

/***/ })

});