"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/add_intentions";
exports.ids = ["pages/api/add_intentions"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// mongodb.js\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Add Mongo URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxhQUFhO0FBRXdCO0FBRXJDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxVQUFVO0lBQ2RDLG9CQUFvQjtJQUNwQkMsaUJBQWlCO0FBQ25CO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ1AsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJTSxNQUFNO0FBQ2xCO0FBRUEsSUFBSVIsSUFBeUIsRUFBZTtJQUMxQyxJQUFJLENBQUNTLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSixTQUFTLElBQUlSLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5Qk0sT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDN0M7SUFDQUosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUdOO0FBRUQsaUVBQWVILGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGlvbmFibGUvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1vbmdvZGIuanNcblxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG59XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdBZGQgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXG59IGVsc2Uge1xuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/add_intentions.js":
/*!*************************************!*\
  !*** ./pages/api/add_intentions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"entend\");\n        const { intentions, date } = req.body; // might want to verify that reflection is not too long?\n        const post = await db.collection(\"intentions\").updateOne({\n            date: date,\n            userID: \"\"\n        }, {\n            $set: {\n                intentions: intentions\n            }\n        }, {\n            upsert: true\n        });\n        res.json(post);\n    } catch (e) {\n        console.error(e);\n        throw new Error(e).message;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkX2ludGVudGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQUNYO0FBRW5DLGlFQUFlLE9BQU9FLEtBQUtDO0lBQ3pCLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1KLG9EQUFhQTtRQUNsQyxNQUFNSyxLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFDckIsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRSxHQUFHTCxJQUFJTSxJQUFJLEVBQUUsd0RBQXdEO1FBRS9GLE1BQU1DLE9BQU8sTUFBTUosR0FBR0ssVUFBVSxDQUFDLGNBQWNDLFNBQVMsQ0FBQztZQUNyREosTUFBTUE7WUFDTkssUUFBUTtRQUNWLEdBQUc7WUFDREMsTUFBTTtnQkFBRVAsWUFBWUE7WUFBVztRQUNqQyxHQUFHO1lBQ0RRLFFBQVE7UUFDVjtRQUdGWCxJQUFJWSxJQUFJLENBQUNOO0lBQ1gsRUFBRSxPQUFPTyxHQUFHO1FBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZCxNQUFNLElBQUlHLE1BQU1ILEdBQUdJLE9BQU87SUFDNUI7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rpb25hYmxlLy4vcGFnZXMvYXBpL2FkZF9pbnRlbnRpb25zLmpzP2RhMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJlbnRlbmRcIik7XG4gICAgY29uc3QgeyBpbnRlbnRpb25zLCBkYXRlIH0gPSByZXEuYm9keTsgLy8gbWlnaHQgd2FudCB0byB2ZXJpZnkgdGhhdCByZWZsZWN0aW9uIGlzIG5vdCB0b28gbG9uZz9cblxuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaW50ZW50aW9uc1wiKS51cGRhdGVPbmUoe1xuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICB1c2VySUQ6IFwiXCJcbiAgICAgIH0sIHtcbiAgICAgICAgJHNldDogeyBpbnRlbnRpb25zOiBpbnRlbnRpb25zIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdXBzZXJ0OiB0cnVlXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJlcy5qc29uKHBvc3QpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSkubWVzc2FnZTtcbiAgfVxufTsiXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsIk9iamVjdElkIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJpbnRlbnRpb25zIiwiZGF0ZSIsImJvZHkiLCJwb3N0IiwiY29sbGVjdGlvbiIsInVwZGF0ZU9uZSIsInVzZXJJRCIsIiRzZXQiLCJ1cHNlcnQiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/add_intentions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/add_intentions.js"));
module.exports = __webpack_exports__;

})();