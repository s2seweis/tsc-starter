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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!react-icons/fa */ \"__barrel_optimize__?names=FaAngleDown,FaAngleRight,FaRegWindowClose!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SidebarContext */ \"./context/SidebarContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_layout_sidebar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/layout/sidebar.scss */ \"./styles/layout/sidebar.scss\");\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuItems */ \"./src/components/Layout/menuItems.ts\");\n// components/layout/sidebar.tsx\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import your SCSS file\n // Import the updated menuItems\nvar Sidebar = function() {\n    _s();\n    var _useSidebarContext = (0,_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext)(), isSidebarOpen = _useSidebarContext.isSidebarOpen, toggleSidebar = _useSidebarContext.toggleSidebar;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeMenu = _useState[0], setActiveMenu = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), activeSubMenu = _useState1[0], setActiveSubMenu = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var storedActiveMenu = localStorage.getItem(\"activeMenu\");\n        var storedActiveSubMenu = localStorage.getItem(\"activeSubMenu\");\n        if (isSidebarOpen) {\n            // Only update state if the sidebar is open\n            setActiveMenu(storedActiveMenu || getActiveMenu(window.location.pathname));\n            setActiveSubMenu(storedActiveSubMenu || null);\n        }\n    }, [\n        isSidebarOpen\n    ]);\n    var handleMenuClick = function(menu) {\n        setActiveSubMenu(function(prevSubMenu) {\n            return prevSubMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeSubMenu\", menu);\n        setActiveMenu(function(prevMenu) {\n            return prevMenu === menu ? null : menu;\n        });\n        localStorage.setItem(\"activeMenu\", menu);\n    };\n    var isSubMenuActive = function(menu) {\n        return activeSubMenu === menu;\n    };\n    var isLinkActive = function(href) {\n        if (true) {\n            return window.location.pathname === href;\n        }\n        return false;\n    };\n    var getActiveMenu = function(path) {\n        var _menuItems_find;\n        return path === \"/\" ? \"Home\" : ((_menuItems_find = _menuItems__WEBPACK_IMPORTED_MODULE_5__.menuItems.find(function(item) {\n            return item.path === path;\n        })) === null || _menuItems_find === void 0 ? void 0 : _menuItems_find.title) || null;\n    };\n    var renderSubMenu = function(submenus) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"submenu\",\n            children: submenus.map(function(submenu) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: submenu.path,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"submenuLink \".concat(isSubMenuActive(submenu.title) ? \"active\" : \"\"),\n                        children: submenu.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this)\n                }, submenu.path, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sidebar \".concat(isSidebarOpen ? \"open\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebarToggle\",\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaRegWindowClose, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navLinks\",\n                    children: _menuItems__WEBPACK_IMPORTED_MODULE_5__.menuItems.map(function(menuItem) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navLink \".concat(isSubMenuActive(menuItem.title) || isLinkActive(menuItem.path) ? \"active\" : \"\"),\n                            onClick: function() {\n                                return handleMenuClick(menuItem.title);\n                            },\n                            children: [\n                                menuItem.title,\n                                \" \",\n                                menuItem.submenus && isSubMenuActive(menuItem.title) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 88\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleDown_FaAngleRight_FaRegWindowClose_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 106\n                                }, _this),\n                                menuItem.submenus && isSubMenuActive(menuItem.title) && renderSubMenu(menuItem.submenus)\n                            ]\n                        }, menuItem.path || menuItem.title, true, {\n                            fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IT-User.KO00-VITA101-02\\\\Desktop\\\\Github\\\\tsc-starter\\\\src\\\\components\\\\Layout\\\\Sidebar.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"cvJEBphTWqGkyrjhqQl0rAy3ogk=\", false, function() {\n    return [\n        _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.useSidebarContext\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdBOzs7OzBEQUFNLDhEQUFDQyx5SEFBWUE7Ozs7O2dDQUN2R3dDLFNBQVNSLFFBQVEsSUFBSVIsZ0JBQWdCZ0IsU0FBU1YsS0FBSyxLQUFLQyxjQUFjUyxTQUFTUixRQUFROzsyQkFMbkZRLFNBQVNiLElBQUksSUFBSWEsU0FBU1YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlsRDtHQXBFTTFCOztRQUNxQ0gsc0VBQWlCQTs7O0tBRHRERztBQXNFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZWJhci50c3g/MGFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2xheW91dC9zaWRlYmFyLnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhUmVnV2luZG93Q2xvc2UsIEZhQW5nbGVEb3duLCBGYUFuZ2xlUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IHVzZVNpZGViYXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TaWRlYmFyQ29udGV4dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2xheW91dC9zaWRlYmFyLnNjc3MnOyAvLyBJbXBvcnQgeW91ciBTQ1NTIGZpbGVcclxuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi9tZW51SXRlbXMnOyAvLyBJbXBvcnQgdGhlIHVwZGF0ZWQgbWVudUl0ZW1zXHJcblxyXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzU2lkZWJhck9wZW4sIHRvZ2dsZVNpZGViYXIgfSA9IHVzZVNpZGViYXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2FjdGl2ZVN1Yk1lbnUsIHNldEFjdGl2ZVN1Yk1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRBY3RpdmVNZW51ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZU1lbnUnKTtcclxuICAgIGNvbnN0IHN0b3JlZEFjdGl2ZVN1Yk1lbnUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlU3ViTWVudScpO1xyXG5cclxuICAgIGlmIChpc1NpZGViYXJPcGVuKSB7XHJcbiAgICAgIC8vIE9ubHkgdXBkYXRlIHN0YXRlIGlmIHRoZSBzaWRlYmFyIGlzIG9wZW5cclxuICAgICAgc2V0QWN0aXZlTWVudShzdG9yZWRBY3RpdmVNZW51IHx8IGdldEFjdGl2ZU1lbnUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSk7XHJcbiAgICAgIHNldEFjdGl2ZVN1Yk1lbnUoc3RvcmVkQWN0aXZlU3ViTWVudSB8fCBudWxsKTtcclxuICAgIH1cclxuICB9LCBbaXNTaWRlYmFyT3Blbl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAobWVudTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdWJNZW51KChwcmV2U3ViTWVudSkgPT4gKHByZXZTdWJNZW51ID09PSBtZW51ID8gbnVsbCA6IG1lbnUpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVTdWJNZW51JywgbWVudSk7XHJcblxyXG4gICAgc2V0QWN0aXZlTWVudSgocHJldk1lbnUpID0+IChwcmV2TWVudSA9PT0gbWVudSA/IG51bGwgOiBtZW51KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlTWVudScsIG1lbnUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzU3ViTWVudUFjdGl2ZSA9IChtZW51OiBzdHJpbmcpID0+IGFjdGl2ZVN1Yk1lbnUgPT09IG1lbnU7XHJcbiAgXHJcbiAgY29uc3QgaXNMaW5rQWN0aXZlID0gKGhyZWY6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IGhyZWY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QWN0aXZlTWVudSA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBwYXRoID09PSAnLycgPyAnSG9tZScgOiBtZW51SXRlbXMuZmluZChpdGVtID0+IGl0ZW0ucGF0aCA9PT0gcGF0aCk/LnRpdGxlIHx8IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU3ViTWVudSA9IChzdWJtZW51czogeyB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcgfVtdKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnVcIj5cclxuICAgICAge3N1Ym1lbnVzLm1hcCgoc3VibWVudSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGtleT17c3VibWVudS5wYXRofSBocmVmPXtzdWJtZW51LnBhdGh9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc3VibWVudUxpbmsgJHtpc1N1Yk1lbnVBY3RpdmUoc3VibWVudS50aXRsZSkgPyAnYWN0aXZlJyA6ICcnfWB9PntzdWJtZW51LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZWJhciAke2lzU2lkZWJhck9wZW4gPyAnb3BlbicgOiAnJ31gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyVG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgPEZhUmVnV2luZG93Q2xvc2UgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rc1wiPlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAga2V5PXttZW51SXRlbS5wYXRoIHx8IG1lbnVJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdkxpbmsgJHtpc1N1Yk1lbnVBY3RpdmUobWVudUl0ZW0udGl0bGUpIHx8IGlzTGlua0FjdGl2ZShtZW51SXRlbS5wYXRoKSA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51Q2xpY2sobWVudUl0ZW0udGl0bGUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge21lbnVJdGVtLnRpdGxlfSB7bWVudUl0ZW0uc3VibWVudXMgJiYgaXNTdWJNZW51QWN0aXZlKG1lbnVJdGVtLnRpdGxlKSA/IDxGYUFuZ2xlRG93biAvPiA6IDxGYUFuZ2xlUmlnaHQgLz59XHJcbiAgICAgICAgICAgICAge21lbnVJdGVtLnN1Ym1lbnVzICYmIGlzU3ViTWVudUFjdGl2ZShtZW51SXRlbS50aXRsZSkgJiYgcmVuZGVyU3ViTWVudShtZW51SXRlbS5zdWJtZW51cyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZhUmVnV2luZG93Q2xvc2UiLCJGYUFuZ2xlRG93biIsIkZhQW5nbGVSaWdodCIsInVzZVNpZGViYXJDb250ZXh0IiwiTGluayIsIm1lbnVJdGVtcyIsIlNpZGViYXIiLCJpc1NpZGViYXJPcGVuIiwidG9nZ2xlU2lkZWJhciIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVNZW51IiwiYWN0aXZlU3ViTWVudSIsInNldEFjdGl2ZVN1Yk1lbnUiLCJzdG9yZWRBY3RpdmVNZW51IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZEFjdGl2ZVN1Yk1lbnUiLCJnZXRBY3RpdmVNZW51Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImhhbmRsZU1lbnVDbGljayIsIm1lbnUiLCJwcmV2U3ViTWVudSIsInNldEl0ZW0iLCJwcmV2TWVudSIsImlzU3ViTWVudUFjdGl2ZSIsImlzTGlua0FjdGl2ZSIsImhyZWYiLCJwYXRoIiwiZmluZCIsIml0ZW0iLCJ0aXRsZSIsInJlbmRlclN1Yk1lbnUiLCJzdWJtZW51cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInN1Ym1lbnUiLCJzcGFuIiwib25DbGljayIsIm5hdiIsIm1lbnVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/Sidebar.tsx\n"));

/***/ })

});