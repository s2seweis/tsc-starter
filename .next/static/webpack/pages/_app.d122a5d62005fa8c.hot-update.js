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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!react-icons/fa */ \"__barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SidebarContext */ \"./context/SidebarContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_layout_sidebar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/layout/sidebar.scss */ \"./styles/layout/sidebar.scss\");\n// components/layout/sidebar.tsx\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the useRouter hook\n // Import your SCSS file\nvar Sidebar = function() {\n    _s();\n    var _useSidebarContext = (0,_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext)(), isSidebarOpen = _useSidebarContext.isSidebarOpen, toggleSidebar = _useSidebarContext.toggleSidebar;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeMenu = _useState[0], setActiveMenu = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeSubMenu = _useState1[0], setActiveSubMenu = _useState1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var storedActiveMenu = localStorage.getItem(\"activeMenu\");\n        var storedActiveSubMenu = localStorage.getItem(\"activeSubMenu\");\n        setActiveMenu(storedActiveMenu || getActiveMenu(router.pathname));\n        setActiveSubMenu(storedActiveSubMenu || null);\n    }, [\n        router.pathname\n    ]);\n    var handleMenuClick = function(menu) {\n        setActiveSubMenu(function(prevSubMenu) {\n            return prevSubMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeSubMenu\", menu);\n        setActiveMenu(function(prevMenu) {\n            return prevMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeMenu\", menu);\n    };\n    var isSubMenuActive = function(menu) {\n        return activeSubMenu === menu;\n    };\n    var isLinkActive = function(href) {\n        return router.asPath === href;\n    };\n    var getActiveMenu = function(path) {\n        var routeToMenuMap = {\n            \"/\": \"home\",\n            \"/contact\": \"home\",\n            \"/calender\": \"home\",\n            \"/posts\": \"posts\",\n            \"/dashboard\": \"dashboard\",\n            \"/404\": \"dashboard\",\n            \"/login\": \"login\"\n        };\n        return routeToMenuMap[path] || null;\n    };\n    var renderSubMenu = function(submenus) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"submenu\",\n            children: submenus.map(function(submenu) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\".concat(submenu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"submenuLink \".concat(isSubMenuActive(submenu) ? \"active\" : \"\"),\n                        children: submenu\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, _this)\n                }, submenu, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sidebar \".concat(isSidebarOpen ? \"open\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebarToggle\",\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaRegWindowClose, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navLinks\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"home\") || isLinkActive(\"/\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"home\");\n                            },\n                            children: [\n                                \"Home \",\n                                isSubMenuActive(\"home\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 45\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 63\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"home\") && renderSubMenu([\n                            \"\",\n                            \"contact\",\n                            \"calender\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"posts\") || isLinkActive(\"/posts\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"posts\");\n                            },\n                            children: [\n                                \"Posts \",\n                                isSubMenuActive(\"posts\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 47\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 65\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"posts\") && renderSubMenu([\n                            \"posts\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(\"dashboard\") || isLinkActive(\"/dashboard\") ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(\"dashboard\");\n                            },\n                            children: [\n                                \"Dashboard \",\n                                isSubMenuActive(\"dashboard\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 55\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 73\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this),\n                        isSubMenuActive(\"dashboard\") && renderSubMenu([\n                            \"dashboard\",\n                            \"404\"\n                        ]),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"login-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"submenuLink \".concat(isLinkActive(\"/login\") ? \"active\" : \"\"),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"jXc3E79m7iqqZE76GKXqYAGB8Cw=\", false, function() {\n    return [\n        _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBTSw4REFBQ0MseUhBQVlBOzs7Ozs7Ozs7Ozt3QkFFbEV1QixnQkFBZ0IsWUFBWU0sY0FBYzs0QkFBQzt5QkFBUTtzQ0FFcEQsOERBQUNNOzRCQUFLSCxXQUFXLFdBQXNGLE9BQTNFVCxnQkFBZ0IsZ0JBQWdCQyxhQUFhLGdCQUFnQixXQUFXOzRCQUFNWSxTQUFTO3VDQUFNbEIsZ0JBQWdCOzs7Z0NBQWM7Z0NBQzFJSyxnQkFBZ0IsNkJBQWUsOERBQUN4Qix3SEFBV0E7Ozs7MERBQU0sOERBQUNDLHlIQUFZQTs7Ozs7Ozs7Ozs7d0JBRTFFdUIsZ0JBQWdCLGdCQUFnQk0sY0FBYzs0QkFBQzs0QkFBYTt5QkFBTTtzQ0FFbkUsOERBQUNFOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDOUIsa0RBQUlBO2dDQUFDdUIsTUFBSzswQ0FDVCw0RUFBQ1U7b0NBQUtILFdBQVcsZUFBc0QsT0FBdkNSLGFBQWEsWUFBWSxXQUFXOzhDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEY7R0FsRk1wQjs7UUFDcUNILHNFQUFpQkE7UUFHM0NFLGtEQUFTQTs7O0tBSnBCQztBQW9GTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZWJhci50c3g/MGFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2xheW91dC9zaWRlYmFyLnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhUmVnV2luZG93Q2xvc2UsIEZhQW5nbGVEb3duLCBGYUFuZ2xlUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IHVzZVNpZGViYXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TaWRlYmFyQ29udGV4dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJzsgLy8gSW1wb3J0IHRoZSB1c2VSb3V0ZXIgaG9va1xyXG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9sYXlvdXQvc2lkZWJhci5zY3NzJzsgLy8gSW1wb3J0IHlvdXIgU0NTUyBmaWxlXHJcblxyXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzU2lkZWJhck9wZW4sIHRvZ2dsZVNpZGViYXIgfSA9IHVzZVNpZGViYXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2FjdGl2ZVN1Yk1lbnUsIHNldEFjdGl2ZVN1Yk1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRBY3RpdmVNZW51ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZU1lbnUnKTtcclxuICAgIGNvbnN0IHN0b3JlZEFjdGl2ZVN1Yk1lbnUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlU3ViTWVudScpO1xyXG5cclxuICAgIHNldEFjdGl2ZU1lbnUoc3RvcmVkQWN0aXZlTWVudSB8fCBnZXRBY3RpdmVNZW51KHJvdXRlci5wYXRobmFtZSkpO1xyXG4gICAgc2V0QWN0aXZlU3ViTWVudShzdG9yZWRBY3RpdmVTdWJNZW51IHx8IG51bGwpO1xyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKG1lbnU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3ViTWVudSgocHJldlN1Yk1lbnUpID0+IChwcmV2U3ViTWVudSA9PT0gbWVudSA/IG51bGwgOiBtZW51KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlU3ViTWVudScsIG1lbnUpO1xyXG5cclxuICAgIHNldEFjdGl2ZU1lbnUoKHByZXZNZW51KSA9PiAocHJldk1lbnUgPT09IG1lbnUgPyBudWxsIDogbWVudSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZU1lbnUnLCBtZW51KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1Yk1lbnVBY3RpdmUgPSAobWVudTogc3RyaW5nKSA9PiBhY3RpdmVTdWJNZW51ID09PSBtZW51O1xyXG4gIGNvbnN0IGlzTGlua0FjdGl2ZSA9IChocmVmOiBzdHJpbmcpID0+IHJvdXRlci5hc1BhdGggPT09IGhyZWY7XHJcblxyXG4gIGNvbnN0IGdldEFjdGl2ZU1lbnUgPSAocGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVRvTWVudU1hcCA9IHtcclxuICAgICAgJy8nOiAnaG9tZScsXHJcbiAgICAgICcvY29udGFjdCc6ICdob21lJyxcclxuICAgICAgJy9jYWxlbmRlcic6ICdob21lJyxcclxuICAgICAgJy9wb3N0cyc6ICdwb3N0cycsXHJcbiAgICAgICcvZGFzaGJvYXJkJzogJ2Rhc2hib2FyZCcsXHJcbiAgICAgICcvNDA0JzogJ2Rhc2hib2FyZCcsXHJcbiAgICAgICcvbG9naW4nOiAnbG9naW4nLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gcm91dGVUb01lbnVNYXBbcGF0aF0gfHwgbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJTdWJNZW51ID0gKHN1Ym1lbnVzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAge3N1Ym1lbnVzLm1hcCgoc3VibWVudSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtzdWJtZW51fSBocmVmPXtgLyR7c3VibWVudX1gfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc3VibWVudUxpbmsgJHtpc1N1Yk1lbnVBY3RpdmUoc3VibWVudSkgPyAnYWN0aXZlJyA6ICcnfWB9PntzdWJtZW51fTwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGViYXIgJHtpc1NpZGViYXJPcGVuID8gJ29wZW4nIDogJyd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgIDxGYVJlZ1dpbmRvd0Nsb3NlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TGlua3NcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG5hdkxpbmsgJHtpc1N1Yk1lbnVBY3RpdmUoJ2hvbWUnKSB8fCBpc0xpbmtBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlTWVudUNsaWNrKCdob21lJyl9PlxyXG4gICAgICAgICAgICBIb21lIHtpc1N1Yk1lbnVBY3RpdmUoJ2hvbWUnKSA/IDxGYUFuZ2xlRG93biAvPiA6IDxGYUFuZ2xlUmlnaHQgLz59XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB7aXNTdWJNZW51QWN0aXZlKCdob21lJykgJiYgcmVuZGVyU3ViTWVudShbJycsICdjb250YWN0JywgJ2NhbGVuZGVyJ10pfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BuYXZMaW5rICR7aXNTdWJNZW51QWN0aXZlKCdwb3N0cycpIHx8IGlzTGlua0FjdGl2ZSgnL3Bvc3RzJykgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVDbGljaygncG9zdHMnKX0+XHJcbiAgICAgICAgICAgIFBvc3RzIHtpc1N1Yk1lbnVBY3RpdmUoJ3Bvc3RzJykgPyA8RmFBbmdsZURvd24gLz4gOiA8RmFBbmdsZVJpZ2h0IC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge2lzU3ViTWVudUFjdGl2ZSgncG9zdHMnKSAmJiByZW5kZXJTdWJNZW51KFsncG9zdHMnXSl9XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbmF2TGluayAke2lzU3ViTWVudUFjdGl2ZSgnZGFzaGJvYXJkJykgfHwgaXNMaW5rQWN0aXZlKCcvZGFzaGJvYXJkJykgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVDbGljaygnZGFzaGJvYXJkJyl9PlxyXG4gICAgICAgICAgICBEYXNoYm9hcmQge2lzU3ViTWVudUFjdGl2ZSgnZGFzaGJvYXJkJykgPyA8RmFBbmdsZURvd24gLz4gOiA8RmFBbmdsZVJpZ2h0IC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge2lzU3ViTWVudUFjdGl2ZSgnZGFzaGJvYXJkJykgJiYgcmVuZGVyU3ViTWVudShbJ2Rhc2hib2FyZCcsICc0MDQnXSl9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHN1Ym1lbnVMaW5rICR7aXNMaW5rQWN0aXZlKCcvbG9naW4nKSA/ICdhY3RpdmUnIDogJyd9YH0+TG9naW48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZhUmVnV2luZG93Q2xvc2UiLCJGYUFuZ2xlRG93biIsIkZhQW5nbGVSaWdodCIsInVzZVNpZGViYXJDb250ZXh0IiwiTGluayIsInVzZVJvdXRlciIsIlNpZGViYXIiLCJpc1NpZGViYXJPcGVuIiwidG9nZ2xlU2lkZWJhciIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVNZW51IiwiYWN0aXZlU3ViTWVudSIsInNldEFjdGl2ZVN1Yk1lbnUiLCJyb3V0ZXIiLCJzdG9yZWRBY3RpdmVNZW51IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZEFjdGl2ZVN1Yk1lbnUiLCJnZXRBY3RpdmVNZW51IiwicGF0aG5hbWUiLCJoYW5kbGVNZW51Q2xpY2siLCJtZW51IiwicHJldlN1Yk1lbnUiLCJzZXRJdGVtIiwicHJldk1lbnUiLCJpc1N1Yk1lbnVBY3RpdmUiLCJpc0xpbmtBY3RpdmUiLCJocmVmIiwiYXNQYXRoIiwicGF0aCIsInJvdXRlVG9NZW51TWFwIiwicmVuZGVyU3ViTWVudSIsInN1Ym1lbnVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3VibWVudSIsInNwYW4iLCJvbkNsaWNrIiwibmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/Sidebar.tsx\n"));

/***/ })

});