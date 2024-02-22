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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!react-icons/fa */ \"__barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/layout/sidebar.module.scss */ \"./styles/layout/sidebar.module.scss\");\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/SidebarContext */ \"./context/SidebarContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n// components/layout/sidebar.tsx\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Define your menu configuration\nvar menuConfig = [\n    {\n        path: \"/\",\n        label: \"Home\",\n        submenus: [\n            \"/contact\",\n            \"/calender\"\n        ]\n    },\n    {\n        path: \"/posts\",\n        label: \"Posts\",\n        submenus: []\n    },\n    {\n        path: \"/dashboard\",\n        label: \"Dashboard\",\n        submenus: [\n            \"/404\"\n        ]\n    },\n    {\n        path: \"/login\",\n        label: \"Login\",\n        submenus: []\n    }\n];\nvar Sidebar = function() {\n    _s();\n    var _useSidebarContext = (0,_context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__.useSidebarContext)(), isSidebarOpen = _useSidebarContext.isSidebarOpen, toggleSidebar = _useSidebarContext.toggleSidebar;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeMenu = _useState[0], setActiveMenu = _useState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var storedActiveMenu = localStorage.getItem(\"activeMenu\");\n        setActiveMenu(storedActiveMenu || getActiveMenu(router.pathname));\n    }, [\n        router.pathname\n    ]);\n    var handleMenuClick = function(menu) {\n        setActiveMenu(function(prevMenu) {\n            return prevMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeMenu\", menu);\n    };\n    var isSubMenuActive = function(menu) {\n        return activeMenu === menu;\n    };\n    var isLinkActive = function(path) {\n        return router.pathname === path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(_styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sidebar, \" \").concat(isSidebarOpen ? _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].open : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sidebarToggle,\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaRegWindowClose, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLinks,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logo,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                style: {\n                                    width: \"80px\"\n                                },\n                                src: \"https://upload.wikimedia.org/wikipedia/commons/e/e9/Deutsche_Angestellten-Akademie_Logo.svg\",\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLinksStyle,\n                            children: menuConfig.map(function(menuItem) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLinksStyle,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"\".concat(_styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navLink, \" \").concat(isSubMenuActive(menuItem.path) || isLinkActive(menuItem.path) ? _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].active : \"\"),\n                                            onClick: function() {\n                                                return handleMenuClick(menuItem.path);\n                                            },\n                                            children: [\n                                                menuItem.label,\n                                                \" \",\n                                                isSubMenuActive(menuItem.path) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 70\n                                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 88\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, _this),\n                                        isSubMenuActive(menuItem.path) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                display: \"grid\"\n                                            },\n                                            className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].submenu,\n                                            children: menuItem.submenus.map(function(submenuPath) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: submenuPath,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: _styles_layout_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].submenuLink,\n                                                        children: submenuPath\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                }, submenuPath, false, {\n                                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 23\n                                                }, _this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, menuItem.path, true, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"9I/qX//UdYy/gG/dGmDpJispL/0=\", false, function() {\n    return [\n        _context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__.useSidebarContext,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQjhDLE1BQU1EOzhEQUM1Qiw0RUFBQ0w7d0RBQUtoQixXQUFXMUIsc0ZBQWtCO2tFQUFHK0M7Ozs7OzttREFEN0JBOzs7Ozs7Ozs7Ozs7bUNBVlROLFNBQVNwQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJyQztHQXJETUc7O1FBQ3FDUCxzRUFBaUJBO1FBRTNDRSxrREFBU0E7OztLQUhwQks7QUF1RE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NpZGViYXIudHN4PzBhYjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9sYXlvdXQvc2lkZWJhci50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVJlZ1dpbmRvd0Nsb3NlLCBGYUFuZ2xlRG93biwgRmFBbmdsZVJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9sYXlvdXQvc2lkZWJhci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVNpZGViYXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TaWRlYmFyQ29udGV4dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIERlZmluZSB5b3VyIG1lbnUgY29uZmlndXJhdGlvblxyXG5jb25zdCBtZW51Q29uZmlnID0gW1xyXG4gIHsgcGF0aDogJy8nLCBsYWJlbDogJ0hvbWUnLCBzdWJtZW51czogWycvY29udGFjdCcsICcvY2FsZW5kZXInXSB9LFxyXG4gIHsgcGF0aDogJy9wb3N0cycsIGxhYmVsOiAnUG9zdHMnLCBzdWJtZW51czogW10gfSxcclxuICB7IHBhdGg6ICcvZGFzaGJvYXJkJywgbGFiZWw6ICdEYXNoYm9hcmQnLCBzdWJtZW51czogWycvNDA0J10gfSxcclxuICB7IHBhdGg6ICcvbG9naW4nLCBsYWJlbDogJ0xvZ2luJywgc3VibWVudXM6IFtdIH0sXHJcbl07XHJcblxyXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzU2lkZWJhck9wZW4sIHRvZ2dsZVNpZGViYXIgfSA9IHVzZVNpZGViYXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRBY3RpdmVNZW51ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZU1lbnUnKTtcclxuICAgIHNldEFjdGl2ZU1lbnUoc3RvcmVkQWN0aXZlTWVudSB8fCBnZXRBY3RpdmVNZW51KHJvdXRlci5wYXRobmFtZSkpO1xyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKG1lbnU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0QWN0aXZlTWVudSgocHJldk1lbnUpID0+IChwcmV2TWVudSA9PT0gbWVudSA/IG51bGwgOiBtZW51KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlTWVudScsIG1lbnUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzU3ViTWVudUFjdGl2ZSA9IChtZW51OiBzdHJpbmcpID0+IGFjdGl2ZU1lbnUgPT09IG1lbnU7XHJcbiAgY29uc3QgaXNMaW5rQWN0aXZlID0gKHBhdGg6IHN0cmluZykgPT4gcm91dGVyLnBhdGhuYW1lID09PSBwYXRoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zaWRlYmFyfSAke2lzU2lkZWJhck9wZW4gPyBzdHlsZXMub3BlbiA6ICcnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJUb2dnbGV9IG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgIDxGYVJlZ1dpbmRvd0Nsb3NlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rc30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnODBweCcgfX0gc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9lL2U5L0RldXRzY2hlX0FuZ2VzdGVsbHRlbi1Ba2FkZW1pZV9Mb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzU3R5bGV9PlxyXG4gICAgICAgICAgICB7bWVudUNvbmZpZy5tYXAoKG1lbnVJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbnVJdGVtLnBhdGh9IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2TGlua30gJHtpc1N1Yk1lbnVBY3RpdmUobWVudUl0ZW0ucGF0aCkgfHwgaXNMaW5rQWN0aXZlKG1lbnVJdGVtLnBhdGgpID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVDbGljayhtZW51SXRlbS5wYXRoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge21lbnVJdGVtLmxhYmVsfSB7aXNTdWJNZW51QWN0aXZlKG1lbnVJdGVtLnBhdGgpID8gPEZhQW5nbGVEb3duIC8+IDogPEZhQW5nbGVSaWdodCAvPn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtpc1N1Yk1lbnVBY3RpdmUobWVudUl0ZW0ucGF0aCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fSBjbGFzc05hbWU9e3N0eWxlcy5zdWJtZW51fT5cclxuICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW0uc3VibWVudXMubWFwKChzdWJtZW51UGF0aCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtzdWJtZW51UGF0aH0gaHJlZj17c3VibWVudVBhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtZW51TGlua30+e3N1Ym1lbnVQYXRofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZhUmVnV2luZG93Q2xvc2UiLCJGYUFuZ2xlRG93biIsIkZhQW5nbGVSaWdodCIsInN0eWxlcyIsInVzZVNpZGViYXJDb250ZXh0IiwiTGluayIsInVzZVJvdXRlciIsIm1lbnVDb25maWciLCJwYXRoIiwibGFiZWwiLCJzdWJtZW51cyIsIlNpZGViYXIiLCJpc1NpZGViYXJPcGVuIiwidG9nZ2xlU2lkZWJhciIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVNZW51Iiwicm91dGVyIiwic3RvcmVkQWN0aXZlTWVudSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRBY3RpdmVNZW51IiwicGF0aG5hbWUiLCJoYW5kbGVNZW51Q2xpY2siLCJtZW51IiwicHJldk1lbnUiLCJzZXRJdGVtIiwiaXNTdWJNZW51QWN0aXZlIiwiaXNMaW5rQWN0aXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2lkZWJhciIsIm9wZW4iLCJzaWRlYmFyVG9nZ2xlIiwib25DbGljayIsIm5hdiIsIm5hdkxpbmtzIiwibG9nbyIsImltZyIsInN0eWxlIiwid2lkdGgiLCJzcmMiLCJhbHQiLCJuYXZMaW5rc1N0eWxlIiwibWFwIiwibWVudUl0ZW0iLCJzcGFuIiwibmF2TGluayIsImFjdGl2ZSIsImRpc3BsYXkiLCJzdWJtZW51Iiwic3VibWVudVBhdGgiLCJocmVmIiwic3VibWVudUxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/Sidebar.tsx\n"));

/***/ })

});