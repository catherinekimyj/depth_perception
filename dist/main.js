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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);

    this.submitInput();
    this.greeting();
    this.animateGreeting();
  }

  _createClass(Form, [{
    key: "greeting",
    value: function greeting() {
      var date = new Date();
      var hour = date.getHours();
      var greetingEle = document.getElementById('user-greeting');

      if (hour > 4 && hour < 12) {
        return greetingEle.innerHTML = "Good morning";
      } else if (hour > 11 && hour < 18) {
        return greetingEle.innerHTML = "Good afternoon";
      } else {
        return greetingEle.innerHTML = "Good evening";
      }
    }
  }, {
    key: "submitInput",
    value: function submitInput() {
      var nameBtn = document.getElementById('user-button');
      var nameInput = document.getElementById('name-input');
      var thoughtInput = document.getElementById('thought-input');
      var modal = document.getElementById('myModal');
      var span = document.getElementsByClassName("close")[0];
      var obj = {};

      nameBtn.onclick = function (e) {
        e.preventDefault();
        var userGreet = document.getElementById('user-output-greet');
        var userText = document.getElementById('user-output-words');
        userGreet.style.display === "none";
        userText.style.display === "none"; // variables for name and thought inputs //

        var name = nameInput.value;
        var thought = thoughtInput.value;
        obj["name"] = name;
        obj["thought"] = thought;
        var nameSplit = obj["name"].split(" ");
        var capitalizedArr = nameSplit.map(function (namePart) {
          return namePart.charAt(0).toUpperCase() + namePart.slice(1);
        });
        var capitalized = capitalizedArr.join(" ");

        function animateInputIn() {
          var userGreet = document.getElementById('user-output-greet');
          var userText = document.getElementById('user-output-words');
          userGreet.style.display === "inline-block";
          userText.style.display === "inline-block";
          debugger;
          userGreet.innerHTML = userGreet.innerText.replace(/\S/g, "<span class='letters'>$&</span>");
          userText.innerHTML = userText.innerText.replace(/\S/g, "<span class='letters'>$&</span>");
          anime.timeline({
            loop: false
          }).add({
            targets: '.letters',
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 20000,
            delay: function delay(el, i) {
              return 30;
            }
          });
        }

        ;
        var e1 = '"Your goal is not to battle with the mind, but to witness the mind." - Swami Muktananda';
        var encouragements = ['"Your goal is not to battle with the mind, but to witness the mind." - Swami Muktananda', '"To understand the immeasurable, the mind must be extraordinarily quiet, still. - Jiddu Krishnamurti"', '"We\'re all just walking each other home" - Ram Dass', '"The quieter you become, the more you can hear." - Ram Dass', '"Your problem is that you\'re too busy holding onto your unworthiness." - Ram Dass', '"Mindfulness practice means that we commit fully in each moment to be present; inviting ourselves to interface with this moment in full awareness, with the intention to embody as best we can an orientation of calmness, mindfulness, and equanimity right here and right now." - Jon Kabat-Zinn', '"Brilliant things happen in calm minds. Be calm. You\'re brilliant." - Headspace', '"Remember the blue sky. It may at times be obscured by clouds, but it is always there." - Andy Puddicombe', '"Distractions are everywhere. Notice what takes your attention, acknowledge it, then let it go." - Headspace', '"In the midst of movement and chaos, keep stillness inside of you." - Anonymous', '"Life is short. We can live it lost in thought or we can choose to be present as life unfolds around us." - Headspace', '"Peace cannot be kept by force it can be achieved by understanding" - Albert Einstein', '"The mind can go in a thousand directions, but on this beautiful path, I walk in peace. With each step, the wind blows. With each step, a flower blooms." - Thich Nhat Hanh', '"Your vision will become clear only when you look into your own heart. Who looks outside, dreams, who looks insides, awakes." - Carl Jung Carl Gustav', '"You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level." - Eckhard Tolle', '"Rule your mind or it will rule you." - Buddha'];
        var encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

        if (obj["name"] !== "") {
          document.getElementById("user-output-greet").innerHTML = "Welcome, " + capitalized;
          animateInputIn();
        } else {
          document.getElementById("user-output-greet").innerHTML = "Hi, there.";
          animateInputIn();
        }

        if (obj["thought"] !== "") {
          document.getElementById("user-output-words").innerHTML = obj["thought"];
          animateInputIn();
        } else {
          document.getElementById("user-output-words").innerHTML = encouragement;
          animateInputIn();
        }

        modal.style.display = "none"; // modal.classList.add("hideModal");
        // console.log(obj);
      };
    }
  }, {
    key: "animateGreeting",
    value: function animateGreeting() {
      var textWrapper = document.querySelector('.ml16');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      anime.timeline({
        loop: false
      }).add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function delay(el, i) {
          return 250 * i;
        }
      }).add({
        targets: '.ml16',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    }
  }]);

  return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/modal.scss */ "./src/styles/modal.scss");
/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/navbar.scss */ "./src/styles/navbar.scss");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_canvas_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/canvas.scss */ "./src/styles/canvas.scss");
/* harmony import */ var _styles_canvas_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_canvas_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _modal_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal_info */ "./src/modal_info.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ "./src/form.js");







console.log("Webpack is working!");
window.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('canvas');
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  var modal = new _modal__WEBPACK_IMPORTED_MODULE_4__["default"](canvas);
  var modalInfo = new _modal_info__WEBPACK_IMPORTED_MODULE_5__["default"](canvas);
  var form = new _form__WEBPACK_IMPORTED_MODULE_6__["default"]();

  function animateInput() {
    var userGreet = document.getElementById('user-output-greet');
    var userText = document.getElementById('user-output-words');
    var userGreetTime = userGreet.innerText.length;
    var userTextTime = userText.innerText.length;
    var combinedChars = userTextTime + userGreetTime;
    userGreet.innerHTML = userGreet.innerText.replace(/\S/g, "<span class='letters'>$&</span>");
    userText.innerHTML = userText.innerText.replace(/\S/g, "<span class='letters'>$&</span>");
    var selection = document.getElementById('selection');
    var delayTime = 30;

    if (selection.value === "./src/public/music/brainwaves.mp3") {
      delayTime = 600000 / combinedChars;
    } else if (selection.value === "./src/public/music/ocean_waves.mp3") {
      delayTime = 489000 / combinedChars;
    } else if (selection.value === "./src/public/music/relaxing.mp3") {
      delayTime = 304000 / combinedChars;
    } else if (selection.value === "./src/public/music/30_sec.mp3") {
      delayTime = 30000 / combinedChars;
    }

    ;
    anime.timeline({
      loop: false
    }).add({
      targets: '.letters',
      opacity: [1, 0],
      // translateX: 250,
      easing: "easeInExpo",
      duration: delayTime,
      delay: function delay(el, i) {
        return delayTime * (i * 1.23);
      }
    }); // anime({
    //     targets: '.letters',å
    //     translateX: 270,
    //     direction: 'normal',
    //     loop: true,
    //     autoplay: false,
    //     easing: 'easeInExpo',
    //     duration: delayTime,
    //     delay: (el, i) => delayTime * (i * 1.23)
    // })
  }

  var player = document.getElementById('player');
  player.addEventListener("play", function () {
    animateInput();
  }); // player.addEventListener("pause", animateInput() );
});

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/form.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Modal = /*#__PURE__*/function () {
  function Modal(canvas) {
    _classCallCheck(this, Modal);

    debugger;
    this.closeModal();
    this.openModal();
  }

  _createClass(Modal, [{
    key: "closeModal",
    value: function closeModal() {
      var modal = document.getElementById('myModal');
      var closeBttn = document.getElementById("close");

      closeBttn.onclick = function () {
        debugger;
        modal.classList.remove('showModal');
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        debugger;

        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var modal = document.getElementById('myModal');
      var btn = document.getElementById('myBtn');

      btn.onclick = function () {
        modal.style.display = "block";
      };
    }
  }]);

  return Modal;
}();

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/modal_info.js":
/*!***************************!*\
  !*** ./src/modal_info.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModalInfo = /*#__PURE__*/function () {
  function ModalInfo(canvas) {
    _classCallCheck(this, ModalInfo);

    this.closeModal();
    this.openModal();
  }

  _createClass(ModalInfo, [{
    key: "closeModal",
    value: function closeModal() {
      var infoModal = document.getElementById('myInfoModal');
      var infoCloseBttn = document.getElementById("close-info");

      infoCloseBttn.onclick = function () {
        infoModal.classList.remove('showModal');
        infoModal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == infoModal) {
          infoModal.style.display = "none";
        }
      };
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var infoModal = document.getElementById('myInfoModal');
      var infoBtn = document.getElementById('info-button');
      var infoButton = document.getElementById('myInformation');

      infoButton.onclick = function () {
        infoModal.style.display = "block";
      };

      infoBtn.onclick = function () {
        infoModal.style.display = "block";
      };
    }
  }]);

  return ModalInfo;
}();

/* harmony default export */ __webpack_exports__["default"] = (ModalInfo);

/***/ }),

/***/ "./src/styles/canvas.scss":
/*!********************************!*\
  !*** ./src/styles/canvas.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/modal.scss":
/*!*******************************!*\
  !*** ./src/styles/modal.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/navbar.scss":
/*!********************************!*\
  !*** ./src/styles/navbar.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWxfaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NhbnZhcy5zY3NzPzc2NDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tb2RhbC5zY3NzPzA3ZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9uYXZiYXIuc2Nzcz8yNDg0Il0sIm5hbWVzIjpbIkZvcm0iLCJzdWJtaXRJbnB1dCIsImdyZWV0aW5nIiwiYW5pbWF0ZUdyZWV0aW5nIiwiZGF0ZSIsIkRhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJncmVldGluZ0VsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJuYW1lQnRuIiwibmFtZUlucHV0IiwidGhvdWdodElucHV0IiwibW9kYWwiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9iaiIsIm9uY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyR3JlZXQiLCJ1c2VyVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsIm5hbWUiLCJ2YWx1ZSIsInRob3VnaHQiLCJuYW1lU3BsaXQiLCJzcGxpdCIsImNhcGl0YWxpemVkQXJyIiwibWFwIiwibmFtZVBhcnQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2FwaXRhbGl6ZWQiLCJqb2luIiwiYW5pbWF0ZUlucHV0SW4iLCJpbm5lclRleHQiLCJyZXBsYWNlIiwiYW5pbWUiLCJ0aW1lbGluZSIsImxvb3AiLCJhZGQiLCJ0YXJnZXRzIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVoiLCJvcGFjaXR5IiwiZWFzaW5nIiwiZHVyYXRpb24iLCJkZWxheSIsImVsIiwiaSIsImUxIiwiZW5jb3VyYWdlbWVudHMiLCJlbmNvdXJhZ2VtZW50IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwidGV4dFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsIndpZHRoIiwiYm9keSIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiTW9kYWwiLCJtb2RhbEluZm8iLCJNb2RhbEluZm8iLCJmb3JtIiwiYW5pbWF0ZUlucHV0IiwidXNlckdyZWV0VGltZSIsInVzZXJUZXh0VGltZSIsImNvbWJpbmVkQ2hhcnMiLCJzZWxlY3Rpb24iLCJkZWxheVRpbWUiLCJwbGF5ZXIiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwiY2xvc2VCdHRuIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZXZlbnQiLCJ0YXJnZXQiLCJidG4iLCJpbmZvTW9kYWwiLCJpbmZvQ2xvc2VCdHRuIiwiaW5mb0J0biIsImluZm9CdXR0b24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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YUFBeEIsQ0FBbEI7QUFDQSxVQUFNc0YsT0FBTyxHQUFHdkYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWhCO0FBQ0EsVUFBTXVGLFVBQVUsR0FBR3hGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFuQjs7QUFFQXVGLGdCQUFVLENBQUM5RSxPQUFYLEdBQXFCLFlBQVc7QUFDNUIyRSxpQkFBUyxDQUFDdEUsS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsT0FBMUI7QUFDSCxPQUZEOztBQUlBdUUsYUFBTyxDQUFDN0UsT0FBUixHQUFrQixZQUFXO0FBQ3pCMkUsaUJBQVMsQ0FBQ3RFLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQXlCLE9BQXpCO0FBQ1AsT0FGRztBQUdMOzs7Ozs7QUFHWW9ELHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDckNBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN1Ym1pdElucHV0KCk7XG4gICAgICAgIHRoaXMuZ3JlZXRpbmcoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlR3JlZXRpbmcoKTtcbiAgICB9XG5cbiAgICBncmVldGluZygpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbnN0IGdyZWV0aW5nRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZ3JlZXRpbmcnKTtcblxuICAgICAgICBpZihob3VyID4gNCAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIHJldHVybiBncmVldGluZ0VsZS5pbm5lckhUTUwgPSBcIkdvb2QgbW9ybmluZ1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPiAxMSAmJiBob3VyIDwgMTgpIHtcbiAgICAgICAgICAgIHJldHVybiBncmVldGluZ0VsZS5pbm5lckhUTUwgPSBcIkdvb2QgYWZ0ZXJub29uXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JlZXRpbmdFbGUuaW5uZXJIVE1MID0gXCJHb29kIGV2ZW5pbmdcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgc3VibWl0SW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1idXR0b24nKTtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGhvdWdodElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rob3VnaHQtaW5wdXQnKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgXG4gICAgICAgIG5hbWVCdG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgdXNlckdyZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItb3V0cHV0LWdyZWV0Jyk7XG4gICAgICAgICAgICBsZXQgdXNlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1vdXRwdXQtd29yZHMnKTtcbiAgICAgICAgICAgIHVzZXJHcmVldC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHVzZXJUZXh0LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiO1xuXG4gICAgICAgICAgICAvLyB2YXJpYWJsZXMgZm9yIG5hbWUgYW5kIHRob3VnaHQgaW5wdXRzIC8vXG4gICAgICAgICAgICBsZXQgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0aG91Z2h0ID0gdGhvdWdodElucHV0LnZhbHVlO1xuICAgICAgICAgICAgb2JqW1wibmFtZVwiXSA9IG5hbWU7XG4gICAgICAgICAgICBvYmpbXCJ0aG91Z2h0XCJdID0gdGhvdWdodDtcbiAgICAgICAgICAgIGxldCBuYW1lU3BsaXQgPSBvYmpbXCJuYW1lXCJdLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgIGxldCBjYXBpdGFsaXplZEFyciA9IG5hbWVTcGxpdC5tYXAoKG5hbWVQYXJ0KSA9PiBcbiAgICAgICAgICAgICAgICBuYW1lUGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWVQYXJ0LnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjYXBpdGFsaXplZCA9IGNhcGl0YWxpemVkQXJyLmpvaW4oXCIgXCIpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlSW5wdXRJbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlckdyZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItb3V0cHV0LWdyZWV0Jyk7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItb3V0cHV0LXdvcmRzJyk7XG5cbiAgICAgICAgICAgICAgICB1c2VyR3JlZXQuc3R5bGUuZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgICAgICB1c2VyVGV4dC5zdHlsZS5kaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIHVzZXJHcmVldC5pbm5lckhUTUwgPSB1c2VyR3JlZXQuaW5uZXJUZXh0LnJlcGxhY2UoL1xcUy9nLCBcIjxzcGFuIGNsYXNzPSdsZXR0ZXJzJz4kJjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgdXNlclRleHQuaW5uZXJIVE1MID0gdXNlclRleHQuaW5uZXJUZXh0LnJlcGxhY2UoL1xcUy9nLCBcIjxzcGFuIGNsYXNzPSdsZXR0ZXJzJz4kJjwvc3Bhbj5cIik7XG5cbiAgICAgICAgICAgICAgICBhbmltZS50aW1lbGluZSh7IGxvb3A6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLmFkZCh7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLmxldHRlcnMnLFxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogWzEwMCwwXSxcbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVo6IDAsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwxXSxcbiAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAwLFxuICAgICAgICAgICAgICAgICAgZGVsYXk6IChlbCwgaSkgPT4gMzBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGUxID0gJ1wiWW91ciBnb2FsIGlzIG5vdCB0byBiYXR0bGUgd2l0aCB0aGUgbWluZCwgYnV0IHRvIHdpdG5lc3MgdGhlIG1pbmQuXCIgLSBTd2FtaSBNdWt0YW5hbmRhJztcblxuICAgICAgICAgICAgY29uc3QgZW5jb3VyYWdlbWVudHMgPSBbXG4gICAgICAgICAgICAgICAgJ1wiWW91ciBnb2FsIGlzIG5vdCB0byBiYXR0bGUgd2l0aCB0aGUgbWluZCwgYnV0IHRvIHdpdG5lc3MgdGhlIG1pbmQuXCIgLSBTd2FtaSBNdWt0YW5hbmRhJyxcbiAgICAgICAgICAgICAgICAnXCJUbyB1bmRlcnN0YW5kIHRoZSBpbW1lYXN1cmFibGUsIHRoZSBtaW5kIG11c3QgYmUgZXh0cmFvcmRpbmFyaWx5IHF1aWV0LCBzdGlsbC4gLSBKaWRkdSBLcmlzaG5hbXVydGlcIicsXG4gICAgICAgICAgICAgICAgJ1wiV2VcXCdyZSBhbGwganVzdCB3YWxraW5nIGVhY2ggb3RoZXIgaG9tZVwiIC0gUmFtIERhc3MnLFxuICAgICAgICAgICAgICAgICdcIlRoZSBxdWlldGVyIHlvdSBiZWNvbWUsIHRoZSBtb3JlIHlvdSBjYW4gaGVhci5cIiAtIFJhbSBEYXNzJyxcbiAgICAgICAgICAgICAgICAnXCJZb3VyIHByb2JsZW0gaXMgdGhhdCB5b3VcXCdyZSB0b28gYnVzeSBob2xkaW5nIG9udG8geW91ciB1bndvcnRoaW5lc3MuXCIgLSBSYW0gRGFzcycsXG4gICAgICAgICAgICAgICAgJ1wiTWluZGZ1bG5lc3MgcHJhY3RpY2UgbWVhbnMgdGhhdCB3ZSBjb21taXQgZnVsbHkgaW4gZWFjaCBtb21lbnQgdG8gYmUgcHJlc2VudDsgaW52aXRpbmcgb3Vyc2VsdmVzIHRvIGludGVyZmFjZSB3aXRoIHRoaXMgbW9tZW50IGluIGZ1bGwgYXdhcmVuZXNzLCB3aXRoIHRoZSBpbnRlbnRpb24gdG8gZW1ib2R5IGFzIGJlc3Qgd2UgY2FuIGFuIG9yaWVudGF0aW9uIG9mIGNhbG1uZXNzLCBtaW5kZnVsbmVzcywgYW5kIGVxdWFuaW1pdHkgcmlnaHQgaGVyZSBhbmQgcmlnaHQgbm93LlwiIC0gSm9uIEthYmF0LVppbm4nLFxuICAgICAgICAgICAgICAgICdcIkJyaWxsaWFudCB0aGluZ3MgaGFwcGVuIGluIGNhbG0gbWluZHMuIEJlIGNhbG0uIFlvdVxcJ3JlIGJyaWxsaWFudC5cIiAtIEhlYWRzcGFjZScsXG4gICAgICAgICAgICAgICAgJ1wiUmVtZW1iZXIgdGhlIGJsdWUgc2t5LiBJdCBtYXkgYXQgdGltZXMgYmUgb2JzY3VyZWQgYnkgY2xvdWRzLCBidXQgaXQgaXMgYWx3YXlzIHRoZXJlLlwiIC0gQW5keSBQdWRkaWNvbWJlJyxcbiAgICAgICAgICAgICAgICAnXCJEaXN0cmFjdGlvbnMgYXJlIGV2ZXJ5d2hlcmUuIE5vdGljZSB3aGF0IHRha2VzIHlvdXIgYXR0ZW50aW9uLCBhY2tub3dsZWRnZSBpdCwgdGhlbiBsZXQgaXQgZ28uXCIgLSBIZWFkc3BhY2UnLFxuICAgICAgICAgICAgICAgICdcIkluIHRoZSBtaWRzdCBvZiBtb3ZlbWVudCBhbmQgY2hhb3MsIGtlZXAgc3RpbGxuZXNzIGluc2lkZSBvZiB5b3UuXCIgLSBBbm9ueW1vdXMnLFxuICAgICAgICAgICAgICAgICdcIkxpZmUgaXMgc2hvcnQuIFdlIGNhbiBsaXZlIGl0IGxvc3QgaW4gdGhvdWdodCBvciB3ZSBjYW4gY2hvb3NlIHRvIGJlIHByZXNlbnQgYXMgbGlmZSB1bmZvbGRzIGFyb3VuZCB1cy5cIiAtIEhlYWRzcGFjZScsXG4gICAgICAgICAgICAgICAgJ1wiUGVhY2UgY2Fubm90IGJlIGtlcHQgYnkgZm9yY2UgaXQgY2FuIGJlIGFjaGlldmVkIGJ5IHVuZGVyc3RhbmRpbmdcIiAtIEFsYmVydCBFaW5zdGVpbicsXG4gICAgICAgICAgICAgICAgJ1wiVGhlIG1pbmQgY2FuIGdvIGluIGEgdGhvdXNhbmQgZGlyZWN0aW9ucywgYnV0IG9uIHRoaXMgYmVhdXRpZnVsIHBhdGgsIEkgd2FsayBpbiBwZWFjZS4gV2l0aCBlYWNoIHN0ZXAsIHRoZSB3aW5kIGJsb3dzLiBXaXRoIGVhY2ggc3RlcCwgYSBmbG93ZXIgYmxvb21zLlwiIC0gVGhpY2ggTmhhdCBIYW5oJyxcbiAgICAgICAgICAgICAgICAnXCJZb3VyIHZpc2lvbiB3aWxsIGJlY29tZSBjbGVhciBvbmx5IHdoZW4geW91IGxvb2sgaW50byB5b3VyIG93biBoZWFydC4gV2hvIGxvb2tzIG91dHNpZGUsIGRyZWFtcywgd2hvIGxvb2tzIGluc2lkZXMsIGF3YWtlcy5cIiAtIENhcmwgSnVuZyBDYXJsIEd1c3RhdicsXG4gICAgICAgICAgICAgICAgJ1wiWW91IGZpbmQgcGVhY2Ugbm90IGJ5IHJlYXJyYW5naW5nIHRoZSBjaXJjdW1zdGFuY2VzIG9mIHlvdXIgbGlmZSwgYnV0IGJ5IHJlYWxpemluZyB3aG8geW91IGFyZSBhdCB0aGUgZGVlcGVzdCBsZXZlbC5cIiAtIEVja2hhcmQgVG9sbGUnLFxuICAgICAgICAgICAgICAgICdcIlJ1bGUgeW91ciBtaW5kIG9yIGl0IHdpbGwgcnVsZSB5b3UuXCIgLSBCdWRkaGEnXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc3QgZW5jb3VyYWdlbWVudCA9IGVuY291cmFnZW1lbnRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuY291cmFnZW1lbnRzLmxlbmd0aCldO1xuXG4gICAgICAgICAgICBpZiAob2JqW1wibmFtZVwiXSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1vdXRwdXQtZ3JlZXRcIikuaW5uZXJIVE1MID0gXCJXZWxjb21lLCBcIiArIGNhcGl0YWxpemVkO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVJbnB1dEluKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1vdXRwdXQtZ3JlZXRcIikuaW5uZXJIVE1MID0gXCJIaSwgdGhlcmUuXCI7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZUlucHV0SW4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9ialtcInRob3VnaHRcIl0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItb3V0cHV0LXdvcmRzXCIpLmlubmVySFRNTCA9IG9ialtcInRob3VnaHRcIl07XG4gICAgICAgICAgICAgICAgYW5pbWF0ZUlucHV0SW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLW91dHB1dC13b3Jkc1wiKS5pbm5lckhUTUwgPSBlbmNvdXJhZ2VtZW50O1xuICAgICAgICAgICAgICAgIGFuaW1hdGVJbnB1dEluKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIC8vIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRlTW9kYWxcIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGVHcmVldGluZygpIHtcbiAgICAgICAgbGV0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1sMTYnKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuaW5uZXJIVE1MID0gdGV4dFdyYXBwZXIudGV4dENvbnRlbnQucmVwbGFjZSgvXFxTL2csIFwiPHNwYW4gY2xhc3M9J2xldHRlcic+JCY8L3NwYW4+XCIpO1xuXG4gICAgICAgIGFuaW1lLnRpbWVsaW5lKHtsb29wOiBmYWxzZX0pXG4gICAgICAgIC5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogJy5tbDE2IC5sZXR0ZXInLFxuICAgICAgICAgICAgdHJhbnNsYXRlWTogWy0xMDAsMF0sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNDAwLFxuICAgICAgICAgICAgZGVsYXk6IChlbCwgaSkgPT4gMjUwICogaVxuICAgICAgICB9KS5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogJy5tbDE2JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgICAgICAgICAgZGVsYXk6IDEwMDBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21vZGFsLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9uYXZiYXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NhbnZhcy5zY3NzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCBNb2RhbEluZm8gZnJvbSAnLi9tb2RhbF9pbmZvJztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5cbmNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbChjYW52YXMpO1xuICAgIGNvbnN0IG1vZGFsSW5mbyA9IG5ldyBNb2RhbEluZm8oY2FudmFzKTtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm0oKTtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVJbnB1dCgpIHtcbiAgICAgICAgbGV0IHVzZXJHcmVldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW91dHB1dC1ncmVldCcpO1xuICAgICAgICBsZXQgdXNlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1vdXRwdXQtd29yZHMnKTtcbiAgICAgICAgbGV0IHVzZXJHcmVldFRpbWUgPSB1c2VyR3JlZXQuaW5uZXJUZXh0Lmxlbmd0aDtcbiAgICAgICAgbGV0IHVzZXJUZXh0VGltZSA9IHVzZXJUZXh0LmlubmVyVGV4dC5sZW5ndGg7XG4gICAgICAgIGxldCBjb21iaW5lZENoYXJzID0gdXNlclRleHRUaW1lICsgdXNlckdyZWV0VGltZTtcblxuICAgICAgICB1c2VyR3JlZXQuaW5uZXJIVE1MID0gdXNlckdyZWV0LmlubmVyVGV4dC5yZXBsYWNlKC9cXFMvZywgXCI8c3BhbiBjbGFzcz0nbGV0dGVycyc+JCY8L3NwYW4+XCIpO1xuICAgICAgICB1c2VyVGV4dC5pbm5lckhUTUwgPSB1c2VyVGV4dC5pbm5lclRleHQucmVwbGFjZSgvXFxTL2csIFwiPHNwYW4gY2xhc3M9J2xldHRlcnMnPiQmPC9zcGFuPlwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0aW9uJyk7XG4gICAgICAgIGxldCBkZWxheVRpbWUgPSAzMDtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uLnZhbHVlID09PSBcIi4vc3JjL3B1YmxpYy9tdXNpYy9icmFpbndhdmVzLm1wM1wiKSB7XG4gICAgICAgICAgICBkZWxheVRpbWUgID0gKCg2MDAwMDApL2NvbWJpbmVkQ2hhcnMpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbi52YWx1ZSA9PT0gXCIuL3NyYy9wdWJsaWMvbXVzaWMvb2NlYW5fd2F2ZXMubXAzXCIpIHtcbiAgICAgICAgICAgIGRlbGF5VGltZSA9ICgoNDg5MDAwKS9jb21iaW5lZENoYXJzKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24udmFsdWUgPT09IFwiLi9zcmMvcHVibGljL211c2ljL3JlbGF4aW5nLm1wM1wiKSB7XG4gICAgICAgICAgICBkZWxheVRpbWUgPSAoKDMwNDAwMCkvY29tYmluZWRDaGFycyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnZhbHVlID09PSBcIi4vc3JjL3B1YmxpYy9tdXNpYy8zMF9zZWMubXAzXCIpIHtcbiAgICAgICAgICAgIGRlbGF5VGltZSA9ICgoMzAwMDApL2NvbWJpbmVkQ2hhcnMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFuaW1lLnRpbWVsaW5lKHtsb29wOiBmYWxzZX0pXG4gICAgICAgIC5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogJy5sZXR0ZXJzJyxcbiAgICAgICAgICAgIG9wYWNpdHk6IFsxLDBdLFxuICAgICAgICAgICAgLy8gdHJhbnNsYXRlWDogMjUwLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbkV4cG9cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkZWxheVRpbWUsXG4gICAgICAgICAgICBkZWxheTogKGVsLCBpKSA9PiBkZWxheVRpbWUgKiAoaSAqIDEuMjMpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYW5pbWUoe1xuICAgICAgICAvLyAgICAgdGFyZ2V0czogJy5sZXR0ZXJzJyzDpVxuICAgICAgICAvLyAgICAgdHJhbnNsYXRlWDogMjcwLFxuICAgICAgICAvLyAgICAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcbiAgICAgICAgLy8gICAgIGxvb3A6IHRydWUsXG4gICAgICAgIC8vICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIC8vICAgICBlYXNpbmc6ICdlYXNlSW5FeHBvJyxcbiAgICAgICAgLy8gICAgIGR1cmF0aW9uOiBkZWxheVRpbWUsXG4gICAgICAgIC8vICAgICBkZWxheTogKGVsLCBpKSA9PiBkZWxheVRpbWUgKiAoaSAqIDEuMjMpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwicGxheVwiLCAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGVJbnB1dCgpOyBcbiAgICB9KTtcbiAgICAvLyBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBhdXNlXCIsIGFuaW1hdGVJbnB1dCgpICk7XG59KTsiLCJpbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jbGFzcyBNb2RhbCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG5kZWJ1Z2dlclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnR0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VcIik7XG5cbiAgICAgICAgY2xvc2VCdHRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbmRlYnVnZ2VyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93TW9kYWwnKTtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbmRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlCdG4nKTtcbiAgICAgICAgXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImNsYXNzIE1vZGFsSW5mbyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IGluZm9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUluZm9Nb2RhbCcpO1xuICAgICAgICBjb25zdCBpbmZvQ2xvc2VCdHRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1pbmZvXCIpO1xuXG4gICAgICAgIGluZm9DbG9zZUJ0dG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dNb2RhbCcpO1xuICAgICAgICAgICAgaW5mb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gaW5mb01vZGFsKSB7XG4gICAgICAgICAgICAgICAgaW5mb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IGluZm9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUluZm9Nb2RhbCcpO1xuICAgICAgICBjb25zdCBpbmZvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGluZm9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlJbmZvcm1hdGlvbicpO1xuXG4gICAgICAgIGluZm9CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGluZm9CdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb01vZGFsLnN0eWxlLmRpc3BsYXk9IFwiYmxvY2tcIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxJbmZvOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=