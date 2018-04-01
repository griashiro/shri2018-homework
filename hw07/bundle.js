/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/actionTypes.ts":
/*!*******************************!*\
  !*** ./src/ts/actionTypes.ts ***!
  \*******************************/
/*! exports provided: SENDING, SEND, MESSAGE, VALID, INVALID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENDING", function() { return SENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND", function() { return SEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID", function() { return VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID", function() { return INVALID; });
var SENDING = 'SENDING';
var SEND = 'SEND';
var MESSAGE = 'MESSAGE';
var VALID = 'VALID';
var INVALID = 'INVALID';



/***/ }),

/***/ "./src/ts/actions.ts":
/*!***************************!*\
  !*** ./src/ts/actions.ts ***!
  \***************************/
/*! exports provided: setSendingStatus, setSendStatus, setMessage, setValid, setInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSendingStatus", function() { return setSendingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSendStatus", function() { return setSendStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessage", function() { return setMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValid", function() { return setValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInvalid", function() { return setInvalid; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/ts/actionTypes.ts");

var setSendingStatus = function () { return ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SENDING"]
}); };
var setSendStatus = function () { return ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SEND"]
}); };
var setMessage = function (message) { return ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["MESSAGE"], payload: message
}); };
var setValid = function () { return ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["VALID"]
}); };
var setInvalid = function () { return ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INVALID"]
}); };



/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shridux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shridux */ "./src/ts/shridux.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/ts/reducers.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/ts/actions.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/ts/logger.ts");




var store = new _shridux__WEBPACK_IMPORTED_MODULE_0__["default"](_reducers__WEBPACK_IMPORTED_MODULE_1__["status"], _reducers__WEBPACK_IMPORTED_MODULE_1__["message"], _reducers__WEBPACK_IMPORTED_MODULE_1__["valid"]);
var getState = function () {
    var state = store.getState();
    Object(_logger__WEBPACK_IMPORTED_MODULE_3__["writeToLog"])('Состояние ' + JSON.stringify(state, null, 1));
    return state;
};
var dispatch = function (action) {
    Object(_logger__WEBPACK_IMPORTED_MODULE_3__["writeToLog"])('Произошло событие ' + action.type);
    store.dispatch(action);
};
var subscribe = function (listener) {
    store.subscribe(function () {
        Object(_logger__WEBPACK_IMPORTED_MODULE_3__["writeToLog"])('Вызван обработчик ' + listener.name);
        listener();
    });
};
var input = document.querySelector('.view-stub__input');
var button = document.querySelector('.view-stub__apply');
var label = document.querySelector('.view-stub__label');
var sendListener = function () {
    var state = getState();
    if (state.isSending) {
        button.classList.add('view-stub_animate-progress');
    }
    else {
        button.classList.remove('view-stub_animate-progress');
    }
};
var messageListener = function () {
    var state = getState();
    label.textContent = state.message;
};
var validListener = function () {
    var state = getState();
    if (state.isValid) {
        label.classList.add('view-stub_valid');
    }
    else {
        label.classList.remove('view-stub_valid');
    }
};
subscribe(sendListener);
subscribe(messageListener);
subscribe(validListener);
var sendToServer = function () {
    Object(_logger__WEBPACK_IMPORTED_MODULE_3__["clearLog"])();
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setSendingStatus"])());
    var fetch = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var message = input.value;
            var withoutDigits = /^([^0-9]*)$/;
            var isValid = withoutDigits.test(message);
            resolve({ message: message, isValid: isValid });
        }, 1000);
    });
    fetch.then(function (_a) {
        var message = _a.message, isValid = _a.isValid;
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setSendStatus"])());
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setMessage"])(message.toUpperCase()));
        isValid ? dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setValid"])()) : dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setInvalid"])());
    });
};
button.addEventListener('click', function () {
    sendToServer();
});


/***/ }),

/***/ "./src/ts/logger.ts":
/*!**************************!*\
  !*** ./src/ts/logger.ts ***!
  \**************************/
/*! exports provided: writeToLog, clearLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeToLog", function() { return writeToLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLog", function() { return clearLog; });
var clearLog = function () {
    var log = document.querySelector('.log');
    log.innerHTML = '';
};
var writeToLog = function (message) {
    var log = document.querySelector('.log');
    var elem = document.createElement('p');
    elem.textContent = message;
    log.appendChild(elem);
};



/***/ }),

/***/ "./src/ts/reducers.ts":
/*!****************************!*\
  !*** ./src/ts/reducers.ts ***!
  \****************************/
/*! exports provided: status, message, valid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message", function() { return message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valid", function() { return valid; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/ts/actionTypes.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var status = function (action, state) {
    if (state === void 0) { state = { isSending: false }; }
    switch (action.type) {
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SENDING"]: {
            return __assign({}, state, { isSending: true });
        }
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SEND"]: {
            return __assign({}, state, { isSending: false });
        }
        default: {
            return state;
        }
    }
};
var message = function (action, state) {
    if (state === void 0) { state = { message: '' }; }
    switch (action.type) {
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["MESSAGE"]: {
            return __assign({}, state, { message: action.payload });
        }
        default: {
            return state;
        }
    }
};
var valid = function (action, state) {
    if (state === void 0) { state = { isValid: false }; }
    switch (action.type) {
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["VALID"]: {
            return __assign({}, state, { isValid: true });
        }
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INVALID"]: {
            return __assign({}, state, { isValid: false });
        }
        default: {
            return state;
        }
    }
};



/***/ }),

/***/ "./src/ts/shridux.ts":
/*!***************************!*\
  !*** ./src/ts/shridux.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Store = /** @class */ (function () {
    function Store() {
        var reducers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            reducers[_i] = arguments[_i];
        }
        var _this = this;
        this.state = {};
        this.liteners = [];
        this.reducers = [];
        this.getState = function () {
            return _this.state;
        };
        this.subscribe = function (listener) {
            var id = _this.liteners.push(listener) - 1;
            return function () {
                _this.unsubsribe(id);
            };
        };
        this.dispatch = function (action) {
            _this.updateState(action);
            _this.notifyListeners();
        };
        (_a = this.reducers).push.apply(_a, reducers);
        this.initializeState();
        var _a;
    }
    Store.prototype.unsubsribe = function (listenerId) {
        delete this.liteners[listenerId];
        this.liteners = this.liteners.filter(function (item) {
            return item;
        });
    };
    Store.prototype.initializeState = function () {
        for (var _i = 0, _a = this.reducers; _i < _a.length; _i++) {
            var reducer = _a[_i];
            this.state = __assign({}, this.state, reducer({}));
        }
    };
    Store.prototype.updateState = function (action) {
        for (var _i = 0, _a = this.reducers; _i < _a.length; _i++) {
            var reducer = _a[_i];
            this.state = reducer(action, this.state);
        }
    };
    Store.prototype.notifyListeners = function () {
        for (var _i = 0, _a = this.liteners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Store;
}());
/* harmony default export */ __webpack_exports__["default"] = (Store);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9yZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2hyaWR1eC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xSO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsQ0FBQyxFQUFFO0FBQ0gsaUNBQWlDO0FBQ2pDO0FBQ0EsQ0FBQyxFQUFFO0FBQ0gscUNBQXFDO0FBQ3JDO0FBQ0EsQ0FBQyxFQUFFO0FBQ0gsNEJBQTRCO0FBQzVCO0FBQ0EsQ0FBQyxFQUFFO0FBQ0gsOEJBQThCO0FBQzlCO0FBQ0EsQ0FBQyxFQUFFO0FBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUjtBQUNpQztBQUMyQztBQUM3QztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRCxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEVEO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUjtBQUFBO0FBQ0EsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVLG9CQUFvQjtBQUN6RDtBQUNBO0FBQ0EsOEJBQThCLFVBQVUsa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVSxtQkFBbUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxlQUFlO0FBQ3BEO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVSwwQkFBMEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBLDhCQUE4QixVQUFVLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0EsOEJBQThCLFVBQVUsaUJBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNROzs7Ozs7Ozs7Ozs7O0FDaERSO0FBQUE7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBLG9DQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9pbmRleC50c1wiKTtcbiIsInZhciBTRU5ESU5HID0gJ1NFTkRJTkcnO1xudmFyIFNFTkQgPSAnU0VORCc7XG52YXIgTUVTU0FHRSA9ICdNRVNTQUdFJztcbnZhciBWQUxJRCA9ICdWQUxJRCc7XG52YXIgSU5WQUxJRCA9ICdJTlZBTElEJztcbmV4cG9ydCB7IFNFTkRJTkcsIFNFTkQsIE1FU1NBR0UsIFZBTElELCBJTlZBTElEIH07XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcbnZhciBzZXRTZW5kaW5nU3RhdHVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICB0eXBlOiB0eXBlcy5TRU5ESU5HXG59KTsgfTtcbnZhciBzZXRTZW5kU3RhdHVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICB0eXBlOiB0eXBlcy5TRU5EXG59KTsgfTtcbnZhciBzZXRNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuICh7XG4gICAgdHlwZTogdHlwZXMuTUVTU0FHRSwgcGF5bG9hZDogbWVzc2FnZVxufSk7IH07XG52YXIgc2V0VmFsaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgIHR5cGU6IHR5cGVzLlZBTElEXG59KTsgfTtcbnZhciBzZXRJbnZhbGlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICB0eXBlOiB0eXBlcy5JTlZBTElEXG59KTsgfTtcbmV4cG9ydCB7IHNldFNlbmRpbmdTdGF0dXMsIHNldFNlbmRTdGF0dXMsIHNldE1lc3NhZ2UsIHNldFZhbGlkLCBzZXRJbnZhbGlkIH07XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi9zaHJpZHV4JztcbmltcG9ydCB7IHN0YXR1cywgbWVzc2FnZSwgdmFsaWQgfSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IHNldFNlbmRpbmdTdGF0dXMsIHNldFNlbmRTdGF0dXMsIHNldE1lc3NhZ2UsIHNldFZhbGlkLCBzZXRJbnZhbGlkIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IHdyaXRlVG9Mb2csIGNsZWFyTG9nIH0gZnJvbSAnLi9sb2dnZXInO1xudmFyIHN0b3JlID0gbmV3IFN0b3JlKHN0YXR1cywgbWVzc2FnZSwgdmFsaWQpO1xudmFyIGdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgd3JpdGVUb0xvZygn0KHQvtGB0YLQvtGP0L3QuNC1ICcgKyBKU09OLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgMSkpO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG52YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgd3JpdGVUb0xvZygn0J/RgNC+0LjQt9C+0YjQu9C+INGB0L7QsdGL0YLQuNC1ICcgKyBhY3Rpb24udHlwZSk7XG4gICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbn07XG52YXIgc3Vic2NyaWJlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd3JpdGVUb0xvZygn0JLRi9C30LLQsNC9INC+0LHRgNCw0LHQvtGC0YfQuNC6ICcgKyBsaXN0ZW5lci5uYW1lKTtcbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbn07XG52YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1zdHViX19pbnB1dCcpO1xudmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2FwcGx5Jyk7XG52YXIgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1zdHViX19sYWJlbCcpO1xudmFyIHNlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGlmIChzdGF0ZS5pc1NlbmRpbmcpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpZXctc3R1Yl9hbmltYXRlLXByb2dyZXNzJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndmlldy1zdHViX2FuaW1hdGUtcHJvZ3Jlc3MnKTtcbiAgICB9XG59O1xudmFyIG1lc3NhZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gc3RhdGUubWVzc2FnZTtcbn07XG52YXIgdmFsaWRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGlmIChzdGF0ZS5pc1ZhbGlkKSB7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ZpZXctc3R1Yl92YWxpZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgndmlldy1zdHViX3ZhbGlkJyk7XG4gICAgfVxufTtcbnN1YnNjcmliZShzZW5kTGlzdGVuZXIpO1xuc3Vic2NyaWJlKG1lc3NhZ2VMaXN0ZW5lcik7XG5zdWJzY3JpYmUodmFsaWRMaXN0ZW5lcik7XG52YXIgc2VuZFRvU2VydmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyTG9nKCk7XG4gICAgZGlzcGF0Y2goc2V0U2VuZGluZ1N0YXR1cygpKTtcbiAgICB2YXIgZmV0Y2ggPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHZhciB3aXRob3V0RGlnaXRzID0gL14oW14wLTldKikkLztcbiAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gd2l0aG91dERpZ2l0cy50ZXN0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6IG1lc3NhZ2UsIGlzVmFsaWQ6IGlzVmFsaWQgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICAgIGZldGNoLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gX2EubWVzc2FnZSwgaXNWYWxpZCA9IF9hLmlzVmFsaWQ7XG4gICAgICAgIGRpc3BhdGNoKHNldFNlbmRTdGF0dXMoKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldE1lc3NhZ2UobWVzc2FnZS50b1VwcGVyQ2FzZSgpKSk7XG4gICAgICAgIGlzVmFsaWQgPyBkaXNwYXRjaChzZXRWYWxpZCgpKSA6IGRpc3BhdGNoKHNldEludmFsaWQoKSk7XG4gICAgfSk7XG59O1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbmRUb1NlcnZlcigpO1xufSk7XG4iLCJ2YXIgY2xlYXJMb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2cnKTtcbiAgICBsb2cuaW5uZXJIVE1MID0gJyc7XG59O1xudmFyIHdyaXRlVG9Mb2cgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHZhciBsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJyk7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgbG9nLmFwcGVuZENoaWxkKGVsZW0pO1xufTtcbmV4cG9ydCB7IHdyaXRlVG9Mb2csIGNsZWFyTG9nIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uVHlwZXMnO1xudmFyIHN0YXR1cyA9IGZ1bmN0aW9uIChhY3Rpb24sIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSB7IGlzU2VuZGluZzogZmFsc2UgfTsgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5TRU5ESU5HOiB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHN0YXRlLCB7IGlzU2VuZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHR5cGVzLlNFTkQ6IHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgaXNTZW5kaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59O1xudmFyIG1lc3NhZ2UgPSBmdW5jdGlvbiAoYWN0aW9uLCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0geyBtZXNzYWdlOiAnJyB9OyB9XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLk1FU1NBR0U6IHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufTtcbnZhciB2YWxpZCA9IGZ1bmN0aW9uIChhY3Rpb24sIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSB7IGlzVmFsaWQ6IGZhbHNlIH07IH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVkFMSUQ6IHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgaXNWYWxpZDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHR5cGVzLklOVkFMSUQ6IHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgaXNWYWxpZDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IHN0YXR1cywgbWVzc2FnZSwgdmFsaWQgfTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIFN0b3JlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0b3JlKCkge1xuICAgICAgICB2YXIgcmVkdWNlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHJlZHVjZXJzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmxpdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMucmVkdWNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IF90aGlzLmxpdGVuZXJzLnB1c2gobGlzdGVuZXIpIC0gMTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudW5zdWJzcmliZShpZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlU3RhdGUoYWN0aW9uKTtcbiAgICAgICAgICAgIF90aGlzLm5vdGlmeUxpc3RlbmVycygpO1xuICAgICAgICB9O1xuICAgICAgICAoX2EgPSB0aGlzLnJlZHVjZXJzKS5wdXNoLmFwcGx5KF9hLCByZWR1Y2Vycyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0YXRlKCk7XG4gICAgICAgIHZhciBfYTtcbiAgICB9XG4gICAgU3RvcmUucHJvdG90eXBlLnVuc3Vic3JpYmUgPSBmdW5jdGlvbiAobGlzdGVuZXJJZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5saXRlbmVyc1tsaXN0ZW5lcklkXTtcbiAgICAgICAgdGhpcy5saXRlbmVycyA9IHRoaXMubGl0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdG9yZS5wcm90b3R5cGUuaW5pdGlhbGl6ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5yZWR1Y2VyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciByZWR1Y2VyID0gX2FbX2ldO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IF9fYXNzaWduKHt9LCB0aGlzLnN0YXRlLCByZWR1Y2VyKHt9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucmVkdWNlcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVkdWNlciA9IF9hW19pXTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKGFjdGlvbiwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0b3JlLnByb3RvdHlwZS5ub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmxpdGVuZXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gX2FbX2ldO1xuICAgICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==