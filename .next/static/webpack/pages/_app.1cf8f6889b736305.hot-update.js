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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!react-icons/fa */ \"__barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SidebarContext */ \"./context/SidebarContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_layout_sidebar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/layout/sidebar.scss */ \"./styles/layout/sidebar.scss\");\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuItems */ \"./src/components/Layout/menuItems.ts\");\n/* harmony import */ var _AuthController_AuthController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AuthController/AuthController */ \"./src/components/AuthController/AuthController.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import your SCSS file\n // Import the updated menuItems\n\nvar Sidebar = function() {\n    _s();\n    var _useSidebarContext = (0,_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext)(), isSidebarOpen = _useSidebarContext.isSidebarOpen, toggleSidebar = _useSidebarContext.toggleSidebar;\n    console.log(\"line:100\", toggleSidebar);\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeMenu = _useState[0], setActiveMenu = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeSubMenu = _useState1[0], setActiveSubMenu = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var storedActiveMenu = localStorage.getItem(\"activeMenu\");\n        var storedActiveSubMenu = localStorage.getItem(\"activeSubMenu\");\n        if (isSidebarOpen) {\n            // Only update state if the sidebar is open\n            setActiveMenu(storedActiveMenu || getActiveMenu(window.location.pathname));\n            setActiveSubMenu(storedActiveSubMenu || null);\n        }\n    }, [\n        isSidebarOpen\n    ]);\n    var handleMenuClick = function(menu) {\n        setActiveSubMenu(function(prevSubMenu) {\n            return prevSubMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeSubMenu\", menu);\n        setActiveMenu(function(prevMenu) {\n            return prevMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeMenu\", menu);\n    };\n    var isSubMenuActive = function(menu) {\n        return activeSubMenu === menu;\n    };\n    var isLinkActive = function(href) {\n        if (true) {\n            return window.location.pathname === href;\n        }\n        return false;\n    };\n    var getActiveMenu = function(path) {\n        var _menuItems_find;\n        return path === \"/\" ? \"Home\" : ((_menuItems_find = _menuItems__WEBPACK_IMPORTED_MODULE_5__.menuItems.find(function(item) {\n            return item.path === path;\n        })) === null || _menuItems_find === void 0 ? void 0 : _menuItems_find.title) || null;\n    };\n    var renderSubMenu = function(submenus) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"submenu\",\n            children: submenus.map(function(submenu) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: submenu.path,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"submenuLink \".concat(isLinkActive(submenu.path) ? \"active\" : \"\"),\n                        children: submenu.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                }, submenu.path, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n            lineNumber: 49,\n            columnNumber: 5\n        }, _this);\n    };\n    var overlayRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var handleOverlayClick = function(event) {\n        if (overlayRef.current && event.target === overlayRef.current) {\n            toggleSidebar();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sidebar \".concat(isSidebarOpen ? \"open\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overlay\",\n                ref: overlayRef,\n                onClick: handleOverlayClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebarToggle\",\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegWindowClose, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\",\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            style: {\n                                width: \"80px\",\n                                marginTop: \"20px\"\n                            },\n                            src: \"https://upload.wikimedia.org/wikipedia/commons/e/e9/Deutsche_Angestellten-Akademie_Logo.svg\",\n                            alt: \"Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navLinks\",\n                        children: _menuItems__WEBPACK_IMPORTED_MODULE_5__.menuItems.map(function(menuItem) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"navLink \".concat(isSubMenuActive(menuItem.title) ? \"active\" : \"\"),\n                                onClick: function() {\n                                    return handleMenuClick(menuItem.title);\n                                },\n                                children: [\n                                    menuItem.title,\n                                    \" \",\n                                    menuItem.submenus && isSubMenuActive(menuItem.title) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaAngleDown, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 88\n                                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaAngleRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 106\n                                    }, _this),\n                                    menuItem.submenus && isSubMenuActive(menuItem.title) && renderSubMenu(menuItem.submenus)\n                                ]\n                            }, menuItem.path || menuItem.title, true, {\n                                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"controllerContainer\",\n                        style: {\n                            marginTop: \"0px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthController_AuthController__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"Ac0g2qfFjEDTBzxtN4UZtiuISD8=\", false, function() {\n    return [\n        _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlO3dCQUFRO2tDQUNuRSw0RUFBQ0M7NEJBQUlILE9BQU87Z0NBQUVJLE9BQU87Z0NBQVFDLFdBQVU7NEJBQU87NEJBQUdDLEtBQUk7NEJBQThGQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFekosOERBQUNwQjt3QkFBSUMsV0FBVTtrQ0FDWmxDLGlEQUFTQSxDQUFDbUMsR0FBRyxDQUFDLFNBQUNtQjtpREFDZCw4REFBQ2pCO2dDQUVDSCxXQUFXLFdBQTJELE9BQWhEVixnQkFBZ0I4QixTQUFTeEIsS0FBSyxJQUFJLFdBQVc7Z0NBQ25FYyxTQUFTOzJDQUFNekIsZ0JBQWdCbUMsU0FBU3hCLEtBQUs7OztvQ0FFNUN3QixTQUFTeEIsS0FBSztvQ0FBQztvQ0FBRXdCLFNBQVN0QixRQUFRLElBQUlSLGdCQUFnQjhCLFNBQVN4QixLQUFLLGtCQUFJLDhEQUFDbEMsd0hBQVdBOzs7OzhEQUFNLDhEQUFDQyx5SEFBWUE7Ozs7O29DQUN2R3lELFNBQVN0QixRQUFRLElBQUlSLGdCQUFnQjhCLFNBQVN4QixLQUFLLEtBQUtDLGNBQWN1QixTQUFTdEIsUUFBUTs7K0JBTG5Gc0IsU0FBUzNCLElBQUksSUFBSTJCLFNBQVN4QixLQUFLOzs7Ozs7Ozs7OztrQ0FTMUMsOERBQUNHO3dCQUFJQyxXQUFVO3dCQUFzQlksT0FBTzs0QkFBQ0ssV0FBVTt3QkFBSztrQ0FDMUQsNEVBQUNsRCxzRUFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0F2Rk1DOztRQUNxQ0osc0VBQWlCQTs7O0tBRHRESTtBQXlGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZWJhci50c3g/MGFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVJlZ1dpbmRvd0Nsb3NlLCBGYUFuZ2xlRG93biwgRmFBbmdsZVJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyB1c2VTaWRlYmFyQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvU2lkZWJhckNvbnRleHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9sYXlvdXQvc2lkZWJhci5zY3NzJzsgLy8gSW1wb3J0IHlvdXIgU0NTUyBmaWxlXHJcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vbWVudUl0ZW1zJzsgLy8gSW1wb3J0IHRoZSB1cGRhdGVkIG1lbnVJdGVtc1xyXG5pbXBvcnQgQXV0aENvbnRyb2xsZXIgZnJvbSAnLi4vQXV0aENvbnRyb2xsZXIvQXV0aENvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc1NpZGViYXJPcGVuLCB0b2dnbGVTaWRlYmFyIH0gPSB1c2VTaWRlYmFyQ29udGV4dCgpO1xyXG4gIGNvbnNvbGUubG9nKFwibGluZToxMDBcIiwgdG9nZ2xlU2lkZWJhcik7XHJcbiAgXHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2FjdGl2ZVN1Yk1lbnUsIHNldEFjdGl2ZVN1Yk1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRBY3RpdmVNZW51ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZU1lbnUnKTtcclxuICAgIGNvbnN0IHN0b3JlZEFjdGl2ZVN1Yk1lbnUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlU3ViTWVudScpO1xyXG5cclxuICAgIGlmIChpc1NpZGViYXJPcGVuKSB7XHJcbiAgICAgIC8vIE9ubHkgdXBkYXRlIHN0YXRlIGlmIHRoZSBzaWRlYmFyIGlzIG9wZW5cclxuICAgICAgc2V0QWN0aXZlTWVudShzdG9yZWRBY3RpdmVNZW51IHx8IGdldEFjdGl2ZU1lbnUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSk7XHJcbiAgICAgIHNldEFjdGl2ZVN1Yk1lbnUoc3RvcmVkQWN0aXZlU3ViTWVudSB8fCBudWxsKTtcclxuICAgIH1cclxuICB9LCBbaXNTaWRlYmFyT3Blbl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAobWVudTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdWJNZW51KChwcmV2U3ViTWVudSkgPT4gKHByZXZTdWJNZW51ID09PSBtZW51ID8gbnVsbCA6IG1lbnUpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVTdWJNZW51JywgbWVudSk7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudSgocHJldk1lbnUpID0+IChwcmV2TWVudSA9PT0gbWVudSA/IG51bGwgOiBtZW51KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlTWVudScsIG1lbnUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzU3ViTWVudUFjdGl2ZSA9IChtZW51OiBzdHJpbmcpID0+IGFjdGl2ZVN1Yk1lbnUgPT09IG1lbnU7XHJcblxyXG4gIGNvbnN0IGlzTGlua0FjdGl2ZSA9IChocmVmOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBocmVmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFjdGl2ZU1lbnUgPSAocGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gcGF0aCA9PT0gJy8nID8gJ0hvbWUnIDogbWVudUl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLnBhdGggPT09IHBhdGgpPy50aXRsZSB8fCBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclN1Yk1lbnUgPSAoc3VibWVudXM6IHsgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nIH1bXSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgIHtzdWJtZW51cy5tYXAoKHN1Ym1lbnUpID0+IChcclxuICAgICAgICA8TGluayBrZXk9e3N1Ym1lbnUucGF0aH0gaHJlZj17c3VibWVudS5wYXRofT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHN1Ym1lbnVMaW5rICR7aXNMaW5rQWN0aXZlKHN1Ym1lbnUucGF0aCkgPyAnYWN0aXZlJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICB7c3VibWVudS50aXRsZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb3ZlcmxheVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU92ZXJsYXlDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChvdmVybGF5UmVmLmN1cnJlbnQgJiYgZXZlbnQudGFyZ2V0ID09PSBvdmVybGF5UmVmLmN1cnJlbnQpIHtcclxuICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGViYXIgJHtpc1NpZGViYXJPcGVuID8gJ29wZW4nIDogJyd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIHJlZj17b3ZlcmxheVJlZn0gb25DbGljaz17aGFuZGxlT3ZlcmxheUNsaWNrfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyVG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgPEZhUmVnV2luZG93Q2xvc2UgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogXCI4MHB4XCIsIG1hcmdpblRvcDpcIjIwcHhcIiB9fSBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2UvZTkvRGV1dHNjaGVfQW5nZXN0ZWxsdGVuLUFrYWRlbWllX0xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rc1wiPlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAga2V5PXttZW51SXRlbS5wYXRoIHx8IG1lbnVJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdkxpbmsgJHtpc1N1Yk1lbnVBY3RpdmUobWVudUl0ZW0udGl0bGUpID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVDbGljayhtZW51SXRlbS50aXRsZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0udGl0bGV9IHttZW51SXRlbS5zdWJtZW51cyAmJiBpc1N1Yk1lbnVBY3RpdmUobWVudUl0ZW0udGl0bGUpID8gPEZhQW5nbGVEb3duIC8+IDogPEZhQW5nbGVSaWdodCAvPn1cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0uc3VibWVudXMgJiYgaXNTdWJNZW51QWN0aXZlKG1lbnVJdGVtLnRpdGxlKSAmJiByZW5kZXJTdWJNZW51KG1lbnVJdGVtLnN1Ym1lbnVzKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2xsZXJDb250YWluZXInIHN0eWxlPXt7bWFyZ2luVG9wOlwiMHB4XCJ9fT5cclxuICAgICAgICAgIDxBdXRoQ29udHJvbGxlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiRmFSZWdXaW5kb3dDbG9zZSIsIkZhQW5nbGVEb3duIiwiRmFBbmdsZVJpZ2h0IiwidXNlU2lkZWJhckNvbnRleHQiLCJMaW5rIiwibWVudUl0ZW1zIiwiQXV0aENvbnRyb2xsZXIiLCJTaWRlYmFyIiwiaXNTaWRlYmFyT3BlbiIsInRvZ2dsZVNpZGViYXIiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJhY3RpdmVTdWJNZW51Iiwic2V0QWN0aXZlU3ViTWVudSIsInN0b3JlZEFjdGl2ZU1lbnUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkQWN0aXZlU3ViTWVudSIsImdldEFjdGl2ZU1lbnUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaGFuZGxlTWVudUNsaWNrIiwibWVudSIsInByZXZTdWJNZW51Iiwic2V0SXRlbSIsInByZXZNZW51IiwiaXNTdWJNZW51QWN0aXZlIiwiaXNMaW5rQWN0aXZlIiwiaHJlZiIsInBhdGgiLCJmaW5kIiwiaXRlbSIsInRpdGxlIiwicmVuZGVyU3ViTWVudSIsInN1Ym1lbnVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3VibWVudSIsInNwYW4iLCJvdmVybGF5UmVmIiwiaGFuZGxlT3ZlcmxheUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwidGFyZ2V0IiwicmVmIiwib25DbGljayIsIm5hdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaW1nIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJzcmMiLCJhbHQiLCJtZW51SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/Sidebar.tsx\n"));

/***/ })

});