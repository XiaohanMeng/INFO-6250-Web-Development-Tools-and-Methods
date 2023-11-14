/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function render(username, storedWord, app) {
  if (!username && !storedWord) {
    app.innerHTML = loginPage();
  } else {
    app.innerHTML = wordPage(username, storedWord);
  }
  return;
}
function loginPage() {
  // login page
  return "\n            <div class=\"page login\">\n                <h1 class=\"title\">Login</h1>\n                    <div class=\"login\">\n                        <input class=\"input\" type=\"text\" placeholder=\"Please enter your username\"/>\n                        <button class=\"login-btn\">Login</button>\n                    </div>\n            </div>\n        ";
}
function wordPage(username, storedWord) {
  // word page
  return "\n        <div class=\"page word\">\n            <div class=\"menu\">\n                <span>User: ".concat(username, "</span>\n                <button class=\"logout\">Logout</button>\n            </div>\n\n            <p>Your Stored Word is: ").concat(storedWord, "</p>\n\n            <input class=\"input\" type=\"text\" placeholder=\"Set your word\"/>\n            <button class=\"set-word\">Set Word</button>\n\n        </div>\n    \n    ");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchSetWord: () => (/* binding */ fetchSetWord),
/* harmony export */   fetchWord: () => (/* binding */ fetchWord)
/* harmony export */ });
// This is a sample file that demonstrates
// how you can write an abstraction around
// a fetch() call
// This exported function returns a promise
// that resolves with data
// or rejects with an error object
//
// The caller of this function can decide
// what to do with the data
// or what to do with the error
//
// You can add to this file and use this function
// or write your own files/functions

function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // set this header when sending JSON in the body of request
    },

    body: JSON.stringify({
      username: username
    })
  })
  // fetch() rejects on network error
  // So we convert that to a formatted error object
  // so our caller can handle all "errors" in a similar way
  ["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      // This service returns JSON on errors,
      // so we use that as the error object and reject
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
  });
}

function fetchSession() {
  return fetch('/api/session/', {
    method: 'GET'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchLogout() {
  return fetch('/api/session/', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchWord() {
  return fetch('/api/word/', {
    method: 'GET'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchSetWord(word) {
  return fetch('/api/word/', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   errorMessage: () => (/* binding */ errorMessage)
/* harmony export */ });
var state = {
  username: '',
  word: ''
};
var errorMessage = {
  'auth-missing': "Session is invalid.",
  'required-username': "Username invalid",
  'auth-insufficient': "Dog is invalid.",
  'required-word': "Word is required.",
  'invalid-word': "Word is invalid.",
  'network-error': "The connection is down."
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");



var appEl = document.querySelector("#app");
var errorEl = document.querySelector(".error-box");
function login(appEl) {
  appEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('login-btn')) {
      var username = appEl.querySelector('.input').value;
      errorEl.innerHTML = "";
      (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchLogin)(username).then(function () {
        (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchWord)().then(function (response) {
          var username = response.username;
          var storedWord = response.storedWord;
          _state__WEBPACK_IMPORTED_MODULE_1__["default"].username = username;
          _state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord = storedWord;
          (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(username, storedWord, appEl);
        })["catch"](function (err) {
          console.warn("Error: ", err);
          errorEl.innerHTML = "<p> ".concat(_state__WEBPACK_IMPORTED_MODULE_1__.errorMessage["".concat(err.error)], "</p>");
          return;
        });
      })["catch"](function (err) {
        console.warn("Error: ", err);
        if (err.error === 'auth-insufficient') {
          errorEl.innerHTML = "<p> ".concat(_state__WEBPACK_IMPORTED_MODULE_1__.errorMessage["".concat(err.error)], "</p>");
        } else if (err.error === 'required-username') {
          errorEl.innerHTML = "<p> ".concat(_state__WEBPACK_IMPORTED_MODULE_1__.errorMessage["".concat(err.error)], "</p>");
        }
        return;
      });
      return;
    }
  });
}
function addWord(appEl) {
  appEl.addEventListener('click', function (e) {
    if (e.target.classList.contains("set-word")) {
      var inputEl = appEl.querySelector('input');
      var newWord = inputEl.value;
      (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSetWord)(newWord).then(function (response) {
        var username = response.username,
          storedWord = response.storedWord;
        _state__WEBPACK_IMPORTED_MODULE_1__["default"].username = username;
        _state__WEBPACK_IMPORTED_MODULE_1__["default"].word = storedWord;
        (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(username, storedWord, appEl);
      })["catch"](function (err) {
        console.warn("Error: ", err);
        errorEl.innerHTML = "<p> ".concat(_state__WEBPACK_IMPORTED_MODULE_1__.errorMessage["".concat(err.error)], "</p>");

        // console.log(err.error);
        return;
      });
      return;
    }
  });
}
function logout(appEl) {
  appEl.addEventListener('click', function (e) {
    if (e.target.classList.contains("logout")) {
      (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchLogout)().then(function () {
        (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])('', '', appEl);
        return;
      })["catch"](function (err) {
        console.warn("Error: ", err);
        errorEl.innerHTML = "<p> ".concat(_state__WEBPACK_IMPORTED_MODULE_1__.errorMessage["".concat(err.error)], "</p>");
        return;
      });
    }
  });
}
login(appEl);
addWord(appEl);
logout(appEl);
(0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function (response) {
  if (!response.error && response.username) {
    // check if username exists
    var username = response.username;
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchWord)(username)["catch"](function (err) {
      console.warn("Error: ", err);
      errorEl.innerHTML = "<p> ".concat(_state__WEBPACK_IMPORTED_MODULE_1__.errorMessage["".concat(err.error)], "</p>");
      return;
    }).then(function (response) {
      var username = response.username,
        storedWord = response.storedWord;
      _state__WEBPACK_IMPORTED_MODULE_1__["default"].username = username;
      _state__WEBPACK_IMPORTED_MODULE_1__["default"].word = storedWord;
      errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
      (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(_state__WEBPACK_IMPORTED_MODULE_1__["default"].username, _state__WEBPACK_IMPORTED_MODULE_1__["default"].word, appEl);
      return;
    });
  }
  // if username not exist, login page
  (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])('', '', appEl);
})["catch"](function (err) {
  console.warn("Error: ", err);
  (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])('', '', appEl);
  return;
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map