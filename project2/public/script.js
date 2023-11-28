/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  REQUIRED_MESSAGE: 'required-message'
};
var CLIENT = {
  NETWORK_ERROR: 'network-error',
  NO_SESSION: 'noSession'
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network, please try again later.'), SERVER.AUTH_MISSING, 'Your session is invalid or has expired, logging you out...'), SERVER.REQUIRED_USERNAME, 'Please enter a valid (within 20 letters and/or numbers) username.'), SERVER.AUTH_INSUFFICIENT, 'Sorry, DOG is invalid, please use another username.'), SERVER.REQUIRED_MESSAGE, 'Please enter a valid word!'), "default", 'Something went wrong, please try again later.');

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginListener: () => (/* binding */ loginListener),
/* harmony export */   logoutListener: () => (/* binding */ logoutListener),
/* harmony export */   sendMessageListener: () => (/* binding */ sendMessageListener)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");



function loginListener(appEl) {
  appEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!e.target.classList.contains("login-form")) {
      return;
    }
    var username = appEl.querySelector(".login-text").value;
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnLogin)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function () {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(username);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnUsers)();
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnMessages)();
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
      return Promise.all([(0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)(), (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)()]);
    }).then(function (response) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(response[0]);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(response[1]);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    });
  });
}
function logoutListener(appEl) {
  appEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('logout-btn')) {
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)()["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    });
  });
}
function sendMessageListener(appEl) {
  appEl.addEventListener("submit", function (e) {
    if (!e.target.classList.contains('chat-form')) {
      return;
    }
    var message = appEl.querySelector('.message-text');
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchPostMessage)(message.value).then(function (messages) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderMessages)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
      message.value = '';
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderMessages)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    });
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderMessages: () => (/* binding */ renderMessages),
/* harmony export */   renderUsers: () => (/* binding */ renderUsers)
/* harmony export */ });
function render(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  var html = "\n        ".concat(generateErrorHtml(state), "\n        ").concat(generateLoginHtml(state), "\n        ").concat(generateChatHtml(state), "\n    ");
  appEl.innerHTML = html;
}
function generateErrorHtml(state) {
  if (!state.showError) {
    return "";
  }
  return "\n        <div class=\"error\"><p class=\"error-message\">".concat(state.errorMessage, "</p></div>\n    ");
}
function generateLoginHtml(state) {
  if (state.isLoginPending) {
    return "<div class=\"waiting\">\n            <p>Loading Login...</p>\n        </div>";
  }

  // into the chat page
  if (state.isLoggedIn) {
    return "";
  }
  return "<div class=\"login\">\n\n        <h1>Login</h1>\n        <form class=\"login-form\">\n            <input name=\"username\" class=\"login-text\" type=\"text\" placeholder=\"Enter your username\">\n            <button type=\"submit\" class=\"login-btn\">Login</button>\n        </form>\n    </div>";
}
function generateChatHtml(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  return "<div class=\"chat\">\n        <h1>Chat Room</h1>\n        <div class=\"menu\">\n            <span>User: ".concat(state.username, "</span>\n            <button class=\"logout-btn\">Logout</button>\n        </div>\n\n        <div class=\"chat-content\">\n            <div class=\"chat-users\">").concat(generateUsersHtml(state), "</div>\n            <div class=\"chat-messages\">").concat(generateMessagesHtml(state), "</div>\n        </div>\n\n        <div class=\"send-area\">\n            <form class=\"chat-form\">\n                <input class=\"message-text\" name=\"message\" placeholder=\"Enter your message\"/>\n                <button type=\"submit\" class=\"send-btn\">Send</button>\n            </form>\n        </div>\n    </div>");
}
function generateUsersHtml(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  if (state.isUserPending) {
    return "<div class=\"waiting\">\n            <p>Loading Users...</p>\n        </div>";
  }
  return "\n        <h2>Logged In Users</h2>\n        <ul class=\"user-list\"> " + Object.values(state.users).map(function (user) {
    if (user) {
      // if true: logged in user
      return "\n                        <li>\n                            <div class=\"user\">\n                                <span class=\"username\">".concat(user, "</span>\n                            </div>\n                        </li>\n                    ");
    }
    return '';
  }).join('') + "</ul>";
}
function generateMessagesHtml(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  if (state.isMessagePending) {
    return "<div class=\"waiting\">\n            <p>Loading Messages...</p>\n        </div>";
  }
  return "\n        <ol class=\"message-list\">" + state.messages.slice().map(function (msg) {
    return "\n                    <div class=\"user-message\">\n                        <p class=\"send-message\">".concat(msg.username, " : ").concat(msg.message, "</p>\n                    </div>\n                ");
  }).join('') + "</ol>";
}
function renderUsers(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  var usersEl = appEl.querySelector('.chat-users');
  if (!usersEl) return;
  usersEl.innerHTML = generateUsersHtml(state);
}
function renderMessages(_ref3) {
  var state = _ref3.state,
    appEl = _ref3.appEl;
  var messagesEl = appEl.querySelector('.chat-messages');
  if (!messagesEl) return;
  messagesEl.innerHTML = generateMessagesHtml(state);
}

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
/* harmony export */   fetchMessages: () => (/* binding */ fetchMessages),
/* harmony export */   fetchPostMessage: () => (/* binding */ fetchPostMessage),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
/* harmony export */ });
function fetchSession() {
  return fetch('/api/v1/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogin(username) {
  return fetch('/api/v1/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogout() {
  return fetch('/api/v1/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchUsers() {
  return fetch('/api/v1/users', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchMessages() {
  return fetch('/api/v1/messages', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchPostMessage(message) {
  return fetch('/api/v1/messages', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      message: message
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
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
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setMessages: () => (/* binding */ setMessages),
/* harmony export */   setUsers: () => (/* binding */ setUsers),
/* harmony export */   waitOnLogin: () => (/* binding */ waitOnLogin),
/* harmony export */   waitOnMessages: () => (/* binding */ waitOnMessages),
/* harmony export */   waitOnUsers: () => (/* binding */ waitOnUsers)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var state = {
  isLoggedIn: false,
  isLoginPending: true,
  isUsersPending: false,
  isMessagesPending: false,
  username: '',
  users: {},
  messages: [],
  showError: false,
  errorMessage: ''
};
function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.users = {};
  state.messages = [];
  state.showError = false;
}
function login(username) {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.showError = false;
  state.username = username;
}
function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.users = {};
  state.messages = [];
  state.showError = false;
  state.username = '';
}
function waitOnUsers() {
  state.users = {};
  state.isUsersPending = true;
  state.showError = false;
}
function waitOnMessages() {
  state.messages = [];
  state.isMessagesPending = true;
  state.showError = false;
}
function setUsers(users) {
  state.users = users;
  state.isUsersPending = false;
  state.showError = false;
}
function setMessages(messages) {
  state.messages = messages;
  state.isMessagesPending = false;
  state.showError = false;
}
function setError(error) {
  if (!error) {
    state.showError = false;
    state.errorMessage = '';
    return;
  }
  state.showError = true;
  state.errorMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
}
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");





var appEl = document.querySelector("#app");
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.loginListener)(appEl);
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.logoutListener)(appEl);
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.sendMessageListener)(appEl);
checkSession();
function checkSession() {
  (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnLogin)();
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchSession)().then(function (session) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(session.username);
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnUsers)();
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    return Promise.all([(0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)(), (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)()]);
  }).then(function (resp) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(resp[0]);
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(resp[1]);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_2__.SERVER.AUTH_MISSING) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    } else {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    }
  }).then(function () {
    setInterval(reloadPages, 5000);
  });
}
function reloadPages() {
  if (!_state__WEBPACK_IMPORTED_MODULE_1__["default"].isLoggedIn) {
    // login, go to chat page
    return;
  }
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)().then(function (users) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(users);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderUsers)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    return (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)();
  }).then(function (messages) {
    // check if have new messages
    if (messages.length === _state__WEBPACK_IMPORTED_MODULE_1__["default"].messages.length) {
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_2__.SERVER.AUTH_MISSING) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    } else {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    }
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map