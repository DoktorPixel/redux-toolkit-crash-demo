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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store/cart/cart.slice.ts":
/*!**************************************!*\
  !*** ./app/store/cart/cart.slice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartActions\": () => (/* binding */ cartActions),\n/* harmony export */   \"cartReducer\": () => (/* binding */ cartReducer),\n/* harmony export */   \"cartSlice\": () => (/* binding */ cartSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = [];\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addItem: (state, action)=>{\n            state.push(action.payload);\n        },\n        removeItem: (state, action)=>{\n            return state.filter((item)=>item.id !== action.payload.id);\n        }\n    }\n});\nconst cartReducer = cartSlice.reducer;\nconst cartActions = cartSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvY2FydC9jYXJ0LnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBRzdELE1BQU1DLFlBQVksR0FBZSxFQUFFO0FBRTVCLE1BQU1DLFNBQVMsR0FBR0YsNkRBQVcsQ0FBQztJQUNwQ0csSUFBSSxFQUFFLE1BQU07SUFDWkYsWUFBWTtJQUNaRyxRQUFRLEVBQUU7UUFDVEMsT0FBTyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBK0IsR0FBSztZQUNwREQsS0FBSyxDQUFDRSxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFFREMsVUFBVSxFQUFFLENBQUNKLEtBQUssRUFBRUMsTUFBcUMsR0FBSztZQUM3RCxPQUFPRCxLQUFLLENBQUNLLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJQSxJQUFJLENBQUNDLEVBQUUsS0FBS04sTUFBTSxDQUFDRSxPQUFPLENBQUNJLEVBQUUsQ0FBQztRQUMzRCxDQUFDO0tBQ0Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsV0FBVyxHQUFHWixTQUFTLENBQUNhLE9BQU87QUFDckMsTUFBTUMsV0FBVyxHQUFHZCxTQUFTLENBQUNlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9jYXJ0L2NhcnQuc2xpY2UudHM/NDdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3QvcHJvZHVjdC50eXBlcydcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJUHJvZHVjdFtdID0gW11cblxuZXhwb3J0IGNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ2NhcnQnLFxuXHRpbml0aWFsU3RhdGUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0YWRkSXRlbTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVByb2R1Y3Q+KSA9PiB7XG5cdFx0XHRzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuXHRcdH0sXG5cblx0XHRyZW1vdmVJdGVtOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGlkOiBudW1iZXIgfT4pID0+IHtcblx0XHRcdHJldHVybiBzdGF0ZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcblx0XHR9LFxuXHR9LFxufSlcblxuZXhwb3J0IGNvbnN0IGNhcnRSZWR1Y2VyID0gY2FydFNsaWNlLnJlZHVjZXJcbmV4cG9ydCBjb25zdCBjYXJ0QWN0aW9ucyA9IGNhcnRTbGljZS5hY3Rpb25zXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjYXJ0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRJdGVtIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsInJlbW92ZUl0ZW0iLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCJjYXJ0UmVkdWNlciIsInJlZHVjZXIiLCJjYXJ0QWN0aW9ucyIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store/cart/cart.slice.ts\n");

/***/ }),

/***/ "./app/store/product/product.api.ts":
/*!******************************************!*\
  !*** ./app/store/product/product.api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": () => (/* binding */ productApi),\n/* harmony export */   \"useGetProductsQuery\": () => (/* binding */ useGetProductsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"api/products\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://fakestoreapi.com/\"\n    }),\n    endpoints: (build)=>({\n            getProducts: build.query({\n                query: (limit = 5)=>`products?limit=${limit}`\n            })\n        })\n});\nconst { useGetProductsQuery  } = productApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlFO0FBSWxFLE1BQU1FLFVBQVUsR0FBR0YsdUVBQVMsQ0FBQztJQUNsQ0csV0FBVyxFQUFFLGNBQWM7SUFDM0JDLFNBQVMsRUFBRUgsNEVBQWMsQ0FBQztRQUFFSSxPQUFPLEVBQUUsMkJBQTJCO0tBQUUsQ0FBQztJQUNuRUMsU0FBUyxFQUFFLENBQUNDLEtBQUssR0FBTTtZQUNyQkMsV0FBVyxFQUFFRCxLQUFLLENBQUNFLEtBQUssQ0FBcUI7Z0JBQzNDQSxLQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsR0FBSyxDQUFDLGVBQWUsRUFBRUEsS0FBSyxDQUFDLENBQUM7YUFDaEQsQ0FBQztTQUNIO0NBQ0YsQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUFFQyxtQkFBbUIsR0FBRSxHQUFHVCxVQUFVLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9wcm9kdWN0L3Byb2R1Y3QuYXBpLnRzPzJiMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xuXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0QXBpID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6ICdhcGkvcHJvZHVjdHMnLFxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS8nIH0pLFxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcbiAgICBnZXRQcm9kdWN0czogYnVpbGQucXVlcnk8SVByb2R1Y3RbXSwgbnVtYmVyPih7XG4gICAgICBxdWVyeTogKGxpbWl0ID0gNSkgPT4gYHByb2R1Y3RzP2xpbWl0PSR7bGltaXR9YFxuICAgIH0pXG4gIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0UHJvZHVjdHNRdWVyeSB9ID0gcHJvZHVjdEFwaTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsInByb2R1Y3RBcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZCIsImdldFByb2R1Y3RzIiwicXVlcnkiLCJsaW1pdCIsInVzZUdldFByb2R1Y3RzUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store/product/product.api.ts\n");

/***/ }),

/***/ "./app/store/store.ts":
/*!****************************!*\
  !*** ./app/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart_cart_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.slice */ \"./app/store/cart/cart.slice.ts\");\n/* harmony import */ var _product_product_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.api */ \"./app/store/product/product.api.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        cart: _cart_cart_slice__WEBPACK_IMPORTED_MODULE_1__.cartReducer,\n        [_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducerPath]: _product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFFRjtBQUNHO0FBRTNDLE1BQU1HLEtBQUssR0FBR0gsZ0VBQWMsQ0FBQztJQUNuQ0ksT0FBTyxFQUFFO1FBQUVDLElBQUksRUFBRUoseURBQVc7UUFBRSxDQUFDQyx3RUFBc0IsQ0FBQyxFQUFFQSxvRUFBa0I7S0FBRTtJQUM1RUssVUFBVSxFQUFFQyxDQUFBQSxvQkFBb0IsR0FDL0JBLG9CQUFvQixFQUFFLENBQUNDLE1BQU0sQ0FBQ1AsdUVBQXFCLENBQUM7Q0FDckQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vYXBwL3N0b3JlL3N0b3JlLnRzPzZjY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGNhcnRSZWR1Y2VyIH0gZnJvbSAnLi9jYXJ0L2NhcnQuc2xpY2UnXG5pbXBvcnQgeyBwcm9kdWN0QXBpIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QuYXBpJ1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG5cdHJlZHVjZXI6IHsgY2FydDogY2FydFJlZHVjZXIsIFtwcm9kdWN0QXBpLnJlZHVjZXJQYXRoXTogcHJvZHVjdEFwaS5yZWR1Y2VyIH0sXG5cdG1pZGRsZXdhcmU6IGdldERlZmF1bHRNaWRkbGV3YXJlID0+XG5cdFx0Z2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQocHJvZHVjdEFwaS5taWRkbGV3YXJlKSxcbn0pXG5cbi8vIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgZm9yIHJlZmV0Y2hPbkZvY3VzL3JlZmV0Y2hPblJlY29ubmVjdCBiZWhhdmlvcnNcbi8vIHNlZSBgc2V0dXBMaXN0ZW5lcnNgIGRvY3MgLSB0YWtlcyBhbiBvcHRpb25hbCBjYWxsYmFjayBhcyB0aGUgMm5kIGFyZyBmb3IgY3VzdG9taXphdGlvblxuLy8gc2V0dXBMaXN0ZW5lcnMoc3RvcmUuZGlzcGF0Y2gpXG5cbmV4cG9ydCB0eXBlIFR5cGVSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT5cbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdEFwaSIsInN0b3JlIiwicmVkdWNlciIsImNhcnQiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store/store */ \"./app/store/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-7 px-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\ALL FILES\\\\study_new\\\\redux-toolkit-crash-demo\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ALL FILES\\\\study_new\\\\redux-toolkit-crash-demo\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ALL FILES\\\\study_new\\\\redux-toolkit-crash-demo\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRVE7QUFDSTtBQUUxQyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNsRCxxQkFDQyw4REFBQ0osaURBQVE7UUFBQ0MsS0FBSyxFQUFFQSxtREFBSztrQkFDckIsNEVBQUNJLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFdBQVc7c0JBQ3pCLDRFQUFDSCxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDdkI7Ozs7O1lBQ0ksQ0FDWDtBQUNGLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZS9zdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3B5LTcgcHgtNSc+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUHJvdmlkZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();