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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _necessities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./necessities.js */ \"./components/necessities.js\");\n\n\n\nconst getDate = ()=>{\n    return new Date().toJSON().slice(0, 10);\n};\nconst Reflect = (props)=>{\n    const handleSubmit = async (event)=>{\n        // event.preventDefault();\n        let intentions = [];\n        console.log(value, objects);\n        for(let i = 0; i < value.length; i++)intentions.push({\n            intention: value[i],\n            done: objects[i].done,\n            reflection: objects[i].reflection\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: props.post.date === getDate() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: props.post.intentions.filter((c)=>c.intention[0] == \"1\").map((c, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    value: i\n                                }, void 0, false, {\n                                    fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 27\n                                }, undefined),\n                                c.intention[1]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 22\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"reflect\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {}, void 0, false, {\n                                    fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n            lineNumber: 18,\n            columnNumber: 45\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"set today's !!! \"\n        }, void 0, false, {\n            fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n            lineNumber: 26,\n            columnNumber: 15\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/smog/programfiles/entend/components/Reflect.jsx\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, undefined);\n};\n_c = Reflect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reflect);\nvar _c;\n$RefreshReg$(_c, \"Reflect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZmxlY3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFFakQsTUFBTUUsVUFBVTtJQUNaLE9BQU8sSUFBSUMsT0FBT0MsTUFBTSxHQUFHQyxLQUFLLENBQUMsR0FBRztBQUN4QztBQUVBLE1BQU1DLFVBQVUsQ0FBQ0M7SUFDYixNQUFNQyxlQUFlLE9BQU9DO1FBQ3hCLDBCQUEwQjtRQUMxQixJQUFJQyxhQUFhLEVBQUU7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0M7UUFDbkIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLE1BQU1HLE1BQU0sRUFBRUQsSUFBTUwsV0FBV08sSUFBSSxDQUFDO1lBQUNDLFdBQVdMLEtBQUssQ0FBQ0UsRUFBRTtZQUFFSSxNQUFNTCxPQUFPLENBQUNDLEVBQUUsQ0FBQ0ksSUFBSTtZQUFFQyxZQUFZTixPQUFPLENBQUNDLEVBQUUsQ0FBQ0ssVUFBVTtRQUFBO0lBRTFJO0lBRUEscUJBQVEsOERBQUNDO2tCQUNEZCxNQUFNZSxJQUFJLENBQUNDLElBQUksS0FBS3JCLDBCQUFZLDhEQUFDbUI7c0JBQzVCZCxNQUFNZSxJQUFJLENBQUNaLFVBQVUsQ0FBQ2MsTUFBTSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFUCxTQUFTLENBQUMsRUFBRSxJQUFJLEtBQUtRLEdBQUcsQ0FBQyxDQUFDRCxHQUFHVixrQkFDbEUsOERBQUNNOztzQ0FBSSw4REFBQ0E7OzhDQUFJLDhEQUFDTTtvQ0FBTUMsTUFBSztvQ0FBV2YsT0FBT0U7Ozs7OztnQ0FBWVUsRUFBRVAsU0FBUyxDQUFDLEVBQUU7Ozs7Ozs7c0NBQ2xFLDhEQUFDRzs7Z0NBQUk7OENBQ0wsOERBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUNSO3NCQUFJOzs7Ozs7Ozs7OztBQUVuQjtLQXBCTWY7QUFzQk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWZsZWN0LmpzeD80YzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7bW9kaWZ5SW50ZW50aW9uc30gZnJvbSBcIi4vbmVjZXNzaXRpZXMuanNcIlxuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKVxufVxuXG5jb25zdCBSZWZsZWN0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBpbnRlbnRpb25zID0gW11cbiAgICAgICAgY29uc29sZS5sb2codmFsdWUsIG9iamVjdHMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSArKykgaW50ZW50aW9ucy5wdXNoKHtpbnRlbnRpb246IHZhbHVlW2ldLCBkb25lOiBvYmplY3RzW2ldLmRvbmUsIHJlZmxlY3Rpb246IG9iamVjdHNbaV0ucmVmbGVjdGlvbn0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiAoPGRpdj57XG4gICAgICAgICAgICBwcm9wcy5wb3N0LmRhdGUgPT09IGdldERhdGUoKSA/IDxkaXY+XG4gICAgICAgICAgICAgICAge3Byb3BzLnBvc3QuaW50ZW50aW9ucy5maWx0ZXIoYyA9PiBjLmludGVudGlvblswXSA9PSBcIjFcIikubWFwKChjLCBpKSA9PiBcbiAgICAgICAgICAgICAgICA8ZGl2PjxkaXY+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXtpfT48L2lucHV0PntjLmludGVudGlvblsxXX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PnJlZmxlY3QgXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhPjwvdGV4dGFyZWE+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiA8ZGl2PnNldCB0b2RheSdzICEhISA8L2Rpdj5cbiAgICAgICAgfTwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmbGVjdCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vZGlmeUludGVudGlvbnMiLCJnZXREYXRlIiwiRGF0ZSIsInRvSlNPTiIsInNsaWNlIiwiUmVmbGVjdCIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJpbnRlbnRpb25zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwib2JqZWN0cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiaW50ZW50aW9uIiwiZG9uZSIsInJlZmxlY3Rpb24iLCJkaXYiLCJwb3N0IiwiZGF0ZSIsImZpbHRlciIsImMiLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Reflect.jsx\n"));

/***/ }),

/***/ "./components/necessities.js":
/*!***********************************!*\
  !*** ./components/necessities.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modifyIntentions: function() { return /* binding */ modifyIntentions; }\n/* harmony export */ });\nconst modifyIntentions = async (intentions)=>{\n    try {\n        let response = await fetch(\"http://localhost:3000/api/add_intentions\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                intentions: intentions,\n                date: getDate()\n            }),\n            headers: {\n                Accept: \"application/json, text/plain, */*\",\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        response = await response.json();\n        console.log(response);\n    } catch (errorMessage) {\n        alert(errorMessage);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25lY2Vzc2l0aWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxtQkFBbUIsT0FBT0M7SUFDbkMsSUFBSTtRQUNBLElBQUlDLFdBQVcsTUFBTUMsTUFBTSw0Q0FBNEM7WUFDbkVDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQk4sWUFBWUE7Z0JBQ1pPLE1BQU1DO1lBQ1Y7WUFDQUMsU0FBUztnQkFDTEMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDcEI7UUFDSjtRQUNBVCxXQUFXLE1BQU1BLFNBQVNVLElBQUk7UUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ1o7SUFDaEIsRUFBRSxPQUFPYSxjQUFjO1FBQ25CQyxNQUFNRDtJQUNWO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25lY2Vzc2l0aWVzLmpzPzhiMGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1vZGlmeUludGVudGlvbnMgPSBhc3luYyAoaW50ZW50aW9ucykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hZGRfaW50ZW50aW9uc1wiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGludGVudGlvbnM6IGludGVudGlvbnMsXG4gICAgICAgICAgICAgICAgZGF0ZTogZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIm1vZGlmeUludGVudGlvbnMiLCJpbnRlbnRpb25zIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0ZSIsImdldERhdGUiLCJoZWFkZXJzIiwiQWNjZXB0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvck1lc3NhZ2UiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/necessities.js\n"));

/***/ })

});