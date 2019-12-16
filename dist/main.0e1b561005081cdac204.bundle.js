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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/app/utils/parse-inputs.js
const parseInputs = (...input) => {
    return input.map(str => parseInt(str));
};

// CONCATENATED MODULE: ./src/app/utils/inputs-are-valid.js
const inputsAreValid = (...input) => {
    return input.every(num => typeof num === "number" && !isNaN(num));
};

// CONCATENATED MODULE: ./src/app/app.js



const run = (alertService, componentService) => {
    alertService.hideErrors();
    componentService.onClick(() => {
        alertService.hideErrors();
        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);
        if (inputsAreValid(...parsedInputs)) {
            const [numA, numB] = parsedInputs;
            componentService.setResult(numA + numB);
        } else {
            componentService.setResult("");
            alertService.handleAdditionError(inputs, parsedInputs);
        }
    });
};



// EXTERNAL MODULE: ./src/main.scss
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app/alert.service.js


class alert_service_AlertService {
    constructor() {
        this.errorBox = document.getElementById("error");
    }

    handleAdditionError(inputs, numbers) {
        const fullMessage = inputs.reduce((message, str, index) => {
            if (inputsAreValid(numbers[index])) {
                return message + "";
            } else {
                return message + `${str} is not a number. `;
            }
        }, "Please enter two valid numbers! ");

        this.errorBox.classList.remove("invisible");
        this.errorBox.innerText = fullMessage;
    };

    hideErrors() {
        this.errorBox.classList.add("invisible");
    };
}

// CONCATENATED MODULE: ./src/app/component.service.js
class ComponentService {
    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
        this.addValuesButton = document.getElementById("addValues");
        this.resultDiv = document.getElementById("result");
    }

    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    setResult(str) {
        this.resultDiv.innerText = str;
    }

    onClick(cb) {
        this.addValuesButton.addEventListener("click", cb);
    }
}

// CONCATENATED MODULE: ./src/index.js





const src_alertService = new alert_service_AlertService();
const src_componentService = new ComponentService();

run(src_alertService, src_componentService);


/***/ })

/******/ });