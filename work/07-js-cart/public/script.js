/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGES: () => (/* binding */ PAGES),
/* harmony export */   cats: () => (/* binding */ cats),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var cats = [{
  name: 'Fluffball',
  url: 'http://placekitten.com/150/150?image=1',
  price: 0.99
}, {
  name: 'General Mayhem',
  url: 'http://placekitten.com/150/150?image=2',
  price: 3.14
}, {
  name: 'Whisker',
  url: 'http://placekitten.com/150/150?image=3',
  price: 2.73
}];
var PAGES = {
  PRODUCT: 'products'
};
var state = {
  cart: [],
  page: PAGES.PRODUCT,
  cartShow: false,
  hideCartShow: false,
  viewCartShow: true,
  showCheckoutCart: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");


function render(state, rootEl, cats) {
  if (state.page == _data__WEBPACK_IMPORTED_MODULE_1__.PAGES.PRODUCT) {
    renderCats(state, rootEl, cats);
  }
}
function renderCats(state, rootEl, cats) {
  console.log(cats);
  var productItems = cats.map(function (item, index) {
    return "<li class=\"cat-item\">\n            <div class=\"cat-card\">\n                <img src=".concat(item.url, ">\n                <form action=\"\" class=\"add-product\">\n                    <div class=\"cat-info\">        \n                        <span class=\"cat-name\" data-index=").concat(index, ">").concat(item.name, "</span>\n                        <span class=\"cat-price\" data-price=").concat(index, ">$").concat(item.price, "</span>\n                    </div>\n                    <button class=\"add-cart\" data-index=").concat(index, " type=\"submit\">Add To Cart</button>\n                </form>\n                </div>\n            </li>");
  }).join('');
  var checkoutItems = Object.entries(state.cart).map(function (item, index) {
    return "<li class=\"cart-item\">\n                <img src=".concat(item[1].url, ">\n                <span class=\"item-name\">").concat(item[0], "</span>\n                <input type=\"number\" min=\"0\" class=\"add-count\" data-index=").concat(index, " data-target=\"").concat(item[0], "\" value=\"").concat(item[1].count, "\">\n                <button type=\"button\" class=\"delete\" data-index=\"").concat(index, "\">X</button>\n        </li>");
  }).join('');
  var totalPrice = (0,_script__WEBPACK_IMPORTED_MODULE_0__.getTotalPrice)();
  var totalItems = (0,_script__WEBPACK_IMPORTED_MODULE_0__.getTotalItems)();
  var buttonType = "";
  var message = "";
  if (totalItems > 0) {
    message = "Total price : ".concat(totalPrice);
  } else {
    message = "Please add your items";
    buttonType = "hidden";
  }
  var type = state.showCart === true ? "" : "hidden";
  var cartMessage = "";
  if (totalItems === 0) {
    cartMessage = state.showCart === true ? "Hide Cart" : "View Cart";
  } else {
    cartMessage = state.showCart === true ? "Hide Cart" : "View Cart (".concat(totalItems, ")");
  }
  rootEl.innerHTML = "\n        <h1>Kitten Shop</h1>\n        <nav class=\"menu\">\n            <button class=\"toggle-cart\">".concat(cartMessage, "</button>\n        </nav>\n        <main class=\"shopping\">\n            <div class=\"products-area\">\n                <ul class=\"products\">\n                    ").concat(productItems, "\n                </ul>\n            </div>\n            <div class=\"checkout-area ").concat(type, "\">\n                <ul class=\"checkout-items\">\n                    ").concat(checkoutItems, "\n                </ul>\n                <div class=\"checkout-info\">\n                    <span class=\"message\">").concat(message, "</span>\n                    <button class=\"checkout-btn ").concat(buttonType, "\" data-target=\"checkout\">Checkout</buttton>\n                </div>\n            </div>    \n        </main>\n");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTotalItems: () => (/* binding */ getTotalItems),
/* harmony export */   getTotalPrice: () => (/* binding */ getTotalPrice)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var rootEl = document.querySelector('#app');
function getTotalPrice() {
  var totalPrice = 0;
  Object.entries(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cart).map(function (item) {
    totalPrice += item[1].count * item[1].price;
  });
  totalPrice = totalPrice.toFixed(2);
  return totalPrice;
}
function getTotalItems() {
  var sum = 0;
  Object.entries(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cart).map(function (item) {
    sum += item[1].count;
  });
  return sum;
}
function addItems(cats, rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-cart')) {
      var index = e.target.dataset.index;
      var product = cats[index];
      if (_data__WEBPACK_IMPORTED_MODULE_0__["default"].cart[product.name] === undefined) {
        _data__WEBPACK_IMPORTED_MODULE_0__["default"].cart[product.name] = {
          count: 1,
          price: product.price,
          url: product.url
        };
      } else {
        _data__WEBPACK_IMPORTED_MODULE_0__["default"].cart[product.name].count++;
      }
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_data__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl, cats);
      return;
    }
  });
  // cartItem: [0 : cat-name, 1: count, price, url]
}

function addCount(state, rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-count')) {
      var target = e.target.dataset.target;
      var inputCount = rootEl.querySelector("[data-target=\"".concat(target, "\"]")).value;
      state.cart[target].count = parseInt(inputCount);

      // delete this item
      if (state.cart[target].count === 0) {
        var updatedCart = _objectSpread({}, state.cart);
        delete updatedCart[target];
        state.cart = updatedCart;
      }
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(state, rootEl, _data__WEBPACK_IMPORTED_MODULE_0__.cats);
      return;
    }
  });
}
function deleteItems(state, rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      var index = e.target.dataset.index;
      var deleteItem = Object.keys(state.cart)[index];
      // update the cart
      var updatedCart = _objectSpread({}, state.cart);
      delete updatedCart[deleteItem];
      state.cart = updatedCart;
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(state, rootEl, _data__WEBPACK_IMPORTED_MODULE_0__.cats);
      return;
    }
  });
}
function checkoutItems(rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('checkout-btn')) {
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].cart = [];
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].showCart = !_data__WEBPACK_IMPORTED_MODULE_0__["default"].showCart;
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_data__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl, _data__WEBPACK_IMPORTED_MODULE_0__.cats);
      return;
    }
  });
}
function showCart(state, rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('toggle-cart')) {
      state.showCart = !state.showCart;
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(state, rootEl, _data__WEBPACK_IMPORTED_MODULE_0__.cats);
      return;
    }
  });
}
showCart(_data__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
addCount(_data__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
checkoutItems(rootEl);
deleteItems(_data__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
addItems(_data__WEBPACK_IMPORTED_MODULE_0__.cats, rootEl);
(0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_data__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl, _data__WEBPACK_IMPORTED_MODULE_0__.cats);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map