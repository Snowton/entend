"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[identity]",{

/***/ "./components/Reflect.jsx":
/*!********************************!*\
  !*** ./components/Reflect.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _necessities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./necessities.js */ \"./components/necessities.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Reflect = (props)=>{\n    _s();\n    const relevant = props.post.intentions.filter((c)=>c.intention[0] == \"1\");\n    const [done, setDone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(relevant.map((c)=>c.done));\n    const [refl, setRefl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(relevant.map((c)=>c.reflection));\n    const handleSubmit = async (event)=>{\n        // event.preventDefault();\n        let intentions = [];\n        console.log(value, objects);\n        (0,_necessities_js__WEBPACK_IMPORTED_MODULE_2__.modifyIntentions)(intentions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: props.post.date === (0,_necessities_js__WEBPACK_IMPORTED_MODULE_2__.getDate)() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: relevant.map((c, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    value: i\n                                }, void 0, false, {\n                                    fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 27\n                                }, undefined),\n                                c.intention[1]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 22\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"reflect\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: i\n                                }, void 0, false, {\n                                    fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n            lineNumber: 19,\n            columnNumber: 45\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"set today's !!! \"\n        }, void 0, false, {\n            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n            lineNumber: 27,\n            columnNumber: 15\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n        lineNumber: 18,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Reflect, \"me1dySKFqMzdgrC5wPtrvGQPXo0=\");\n_c = Reflect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reflect);\nvar _c;\n$RefreshReg$(_c, \"Reflect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZmxlY3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDeUI7QUFFMUQsTUFBTUksVUFBVSxDQUFDQzs7SUFDYixNQUFNQyxXQUFXRCxNQUFNRSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxTQUFTLENBQUMsRUFBRSxJQUFJO0lBQ3JFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQ0ssU0FBU1EsR0FBRyxDQUFDSixDQUFBQSxJQUFLQSxFQUFFRSxJQUFJO0lBQ3pELE1BQU0sQ0FBQ0csTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQ0ssU0FBU1EsR0FBRyxDQUFDSixDQUFBQSxJQUFLQSxFQUFFTyxVQUFVO0lBRS9ELE1BQU1DLGVBQWUsT0FBT0M7UUFDeEIsMEJBQTBCO1FBQzFCLElBQUlYLGFBQWEsRUFBRTtRQUNuQlksUUFBUUMsR0FBRyxDQUFDQyxPQUFPQztRQUVuQnJCLGlFQUFnQkEsQ0FBQ007SUFDckI7SUFFQSxxQkFBUSw4REFBQ2dCO2tCQUNEbkIsTUFBTUUsSUFBSSxDQUFDa0IsSUFBSSxLQUFLdEIsd0RBQU9BLG1CQUFLLDhEQUFDcUI7c0JBQzVCbEIsU0FBU1EsR0FBRyxDQUFDLENBQUNKLEdBQUdnQixrQkFDbEIsOERBQUNGOztzQ0FBSSw4REFBQ0E7OzhDQUFJLDhEQUFDRztvQ0FBTUMsTUFBSztvQ0FBV04sT0FBT0k7Ozs7OztnQ0FBWWhCLEVBQUVDLFNBQVMsQ0FBQyxFQUFFOzs7Ozs7O3NDQUNsRSw4REFBQ2E7O2dDQUFJOzhDQUNMLDhEQUFDSztvQ0FBU0MsTUFBTUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSWxCLDhEQUFDRjtzQkFBSTs7Ozs7Ozs7Ozs7QUFFbkI7R0F4Qk1wQjtLQUFBQTtBQTBCTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlZmxlY3QuanN4PzRjNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7bW9kaWZ5SW50ZW50aW9ucywgZ2V0RGF0ZX0gZnJvbSBcIi4vbmVjZXNzaXRpZXMuanNcIlxuXG5jb25zdCBSZWZsZWN0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcmVsZXZhbnQgPSBwcm9wcy5wb3N0LmludGVudGlvbnMuZmlsdGVyKGMgPT4gYy5pbnRlbnRpb25bMF0gPT0gXCIxXCIpXG4gICAgY29uc3QgW2RvbmUsIHNldERvbmVdID0gdXNlU3RhdGUocmVsZXZhbnQubWFwKGMgPT4gYy5kb25lKSlcbiAgICBjb25zdCBbcmVmbCwgc2V0UmVmbF0gPSB1c2VTdGF0ZShyZWxldmFudC5tYXAoYyA9PiBjLnJlZmxlY3Rpb24pKVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBpbnRlbnRpb25zID0gW11cbiAgICAgICAgY29uc29sZS5sb2codmFsdWUsIG9iamVjdHMpO1xuICAgICAgICBcbiAgICAgICAgbW9kaWZ5SW50ZW50aW9ucyhpbnRlbnRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiAoPGRpdj57XG4gICAgICAgICAgICBwcm9wcy5wb3N0LmRhdGUgPT09IGdldERhdGUoKSA/IDxkaXY+XG4gICAgICAgICAgICAgICAge3JlbGV2YW50Lm1hcCgoYywgaSkgPT4gXG4gICAgICAgICAgICAgICAgPGRpdj48ZGl2PjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17aX0+PC9pbnB1dD57Yy5pbnRlbnRpb25bMV19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5yZWZsZWN0IFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPXtpfT48L3RleHRhcmVhPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogPGRpdj5zZXQgdG9kYXkncyAhISEgPC9kaXY+XG4gICAgICAgIH08L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmxlY3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGlmeUludGVudGlvbnMiLCJnZXREYXRlIiwiUmVmbGVjdCIsInByb3BzIiwicmVsZXZhbnQiLCJwb3N0IiwiaW50ZW50aW9ucyIsImZpbHRlciIsImMiLCJpbnRlbnRpb24iLCJkb25lIiwic2V0RG9uZSIsIm1hcCIsInJlZmwiLCJzZXRSZWZsIiwicmVmbGVjdGlvbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwib2JqZWN0cyIsImRpdiIsImRhdGUiLCJpIiwiaW5wdXQiLCJ0eXBlIiwidGV4dGFyZWEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Reflect.jsx\n"));

/***/ })

});