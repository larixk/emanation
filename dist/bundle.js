/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _update = __webpack_require__(1);

	var _update2 = _interopRequireDefault(_update);

	var _init = __webpack_require__(2);

	var _init2 = _interopRequireDefault(_init);

	var _draw = __webpack_require__(3);

	var _draw2 = _interopRequireDefault(_draw);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = void 0;

	var tick = function tick() {
	  requestAnimationFrame(tick);
	  state = (0, _update2.default)(state);
	  (0, _draw2.default)(state);
	};

	(0, _init2.default)().then(function (initializedState) {
	  state = initializedState;
	  tick();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (state) {
	  var newState = state;
	  newState.rotation = Math.sin((new Date().getTime() - state.start) / 13000) * 0.5;
	  newState.scale = 1 + Math.sin((new Date().getTime() - state.start) / 10000) * 0.5;
	  return newState;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initialState = {
	  rotation: 0,
	  translate: 0,
	  scale: 1,
	  start: new Date().getTime() - 5000
	};

	var cover = document.createElement('div');
	cover.style.display = 'block';
	cover.style.width = '16px';
	cover.style.height = '16px';
	cover.style.background = 'white';
	cover.style.zIndex = 10;
	cover.style.position = 'absolute';
	cover.style.top = '50%';
	cover.style.left = '50%';
	cover.style.marginLeft = '-8px';
	cover.style.marginTop = '-8px';
	cover.style.borderRadius = '50%';

	document.body.appendChild(cover);

	exports.default = function () {
	  return Promise.resolve(initialState);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _autoScalingCanvas = __webpack_require__(4);

	var _autoScalingCanvas2 = _interopRequireDefault(_autoScalingCanvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canvas = (0, _autoScalingCanvas2.default)();
	var ctx = canvas.getContext('2d');

	var hue = 180;
	var pat = void 0;

	var createPattern = function createPattern() {
	  var tile = document.createElement('canvas');
	  tile.width = 2;
	  tile.height = 2;
	  var tileCtx = tile.getContext('2d');
	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'transparent';
	  tileCtx.rect(0, 0, 2, 3);
	  tileCtx.fill();

	  var baseHue = Math.floor(Math.random() * 360);
	  var otherHue = (baseHue + 180) % 360;

	  // const baseHue = hue;
	  // const otherHue = hue + 50;

	  hue += (Math.random() - 0.5) * 80;
	  hue += 360;
	  hue %= 360;

	  // hue = Math.floor(Math.random() * 360);

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + (hue + 0) + ', 50%, 75%, 1)';
	  tileCtx.rect(0, 0, 1, 1);
	  tileCtx.fill();

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + (hue + 30) + ', 100%, 50%, 1)';
	  tileCtx.rect(0, 1, 1, 1);
	  tileCtx.fill();

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + (hue + 60) + ', 50%, 60%, 1)';
	  tileCtx.rect(1, 1, 1, 1);
	  tileCtx.fill();

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + (hue + 90) + ', 50%, 75%, 1)';
	  tileCtx.rect(1, 0, 1, 1);
	  tileCtx.fill();

	  pat = ctx.createPattern(tile, 'repeat');
	};

	createPattern();
	setInterval(createPattern, 5000);

	ctx.imageSmoothingEnabled = false;
	ctx.globalAlpha = 0.75;

	exports.default = function (state) {
	  ctx.beginPath();
	  var centerSize = 8;
	  ctx.rect(canvas.width / 2 - centerSize / 2, canvas.height / 2 - centerSize / 2, centerSize, centerSize);
	  ctx.fillStyle = pat;
	  ctx.fill();

	  ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
	  var scale = state.scale;
	  ctx.scale(scale, scale);
	  ctx.rotate(state.rotation);
	  ctx.translate(-canvas.width * 0.5, -canvas.height * 0.5);

	  ctx.drawImage(canvas, 0, 0);

	  ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
	  ctx.rotate(-state.rotation);
	  ctx.scale(1 / scale, 1 / scale);
	  ctx.translate(-canvas.width * 0.5, -canvas.height * 0.5);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var canvas = document.createElement('canvas');
	  document.body.appendChild(canvas);

	  canvas.style.display = 'block';
	  canvas.style.margin = '0 auto';
	  canvas.style.borderRadius = '50%';
	  canvas.style.position = 'absolute';
	  canvas.style.top = '50%';
	  canvas.style.left = '50%';

	  document.body.style.overflow = 'hidden';
	  document.body.style.margin = 0;

	  var resize = function resize() {
	    var size = Math.min(window.innerWidth, window.innerHeight);
	    canvas.width = size;
	    canvas.height = size;
	    canvas.style.marginLeft = '-' + size / 2 + 'px';
	    canvas.style.marginTop = '-' + size / 2 + 'px';
	  };

	  window.addEventListener('resize', resize);
	  resize();

	  return canvas;
	};

/***/ }
/******/ ]);