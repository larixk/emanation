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

	var _init = __webpack_require__(3);

	var _init2 = _interopRequireDefault(_init);

	var _draw = __webpack_require__(6);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createPattern = __webpack_require__(2);

	var _createPattern2 = _interopRequireDefault(_createPattern);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (state) {
	  var newState = state;
	  var timeSinceStart = new Date().getTime() - state.start;

	  newState.rotation = Math.sin(timeSinceStart / 48123) * Math.PI;
	  newState.scale = 1 + Math.sin(timeSinceStart / 32345) * 0.5;

	  if (newState.frame % 30 === 0) {
	    newState.hue += 1;
	    newState.pattern = (0, _createPattern2.default)(newState);
	  }

	  newState.frame += 1;

	  return newState;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var patternSize = 2;

	var tile = document.createElement('canvas');
	var tileCtx = tile.getContext('2d');

	exports.default = function (_ref) {
	  var hue = _ref.hue,
	      ctx = _ref.ctx;

	  tile.width = patternSize;
	  tile.height = patternSize;

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + hue + ', 90%, 50%, 1)';
	  tileCtx.rect(0, 0, 1, 1);
	  tileCtx.fill();

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + hue + ', 0%, 100%, 1)';
	  tileCtx.rect(0, 1, 1, 1);
	  tileCtx.fill();

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + hue + ', 80%, 80%, 1)';
	  tileCtx.rect(1, 1, 1, 1);
	  tileCtx.fill();

	  tileCtx.beginPath();
	  tileCtx.fillStyle = 'hsla(' + (hue + 60) + ', 10%, 30%, 1)';
	  tileCtx.rect(1, 0, 1, 1);
	  tileCtx.fill();

	  return ctx.createPattern(tile, 'repeat');
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createAutoScalingCanvas = __webpack_require__(4);

	var _createAutoScalingCanvas2 = _interopRequireDefault(_createAutoScalingCanvas);

	var _createCenterDot = __webpack_require__(5);

	var _createCenterDot2 = _interopRequireDefault(_createCenterDot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canvas = (0, _createAutoScalingCanvas2.default)();
	(0, _createCenterDot2.default)();

	exports.default = function () {
	  return Promise.resolve({
	    canvas: canvas,
	    ctx: canvas.getContext('2d'),
	    start: new Date().getTime() - 6000,
	    frame: 0,
	    rotation: 0,
	    scale: 1,
	    hue: Math.floor(Math.random() * 360)
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var margin = 20;
	var bodyStyle = {
	  overflow: 'hidden',
	  margin: 0
	};
	var canvasStyle = {
	  display: 'block',
	  margin: '0 auto',
	  borderRadius: '50%',
	  position: 'absolute',
	  top: '50%',
	  left: '50%'
	};

	exports.default = function () {
	  var canvas = document.createElement('canvas');
	  document.body.appendChild(canvas);

	  Object.assign(document.body.style, bodyStyle);
	  Object.assign(canvas.style, canvasStyle);

	  var resize = function resize() {
	    var size = Math.min(window.innerWidth, window.innerHeight) - margin;
	    canvas.width = size;
	    canvas.height = size;
	    canvas.style.marginLeft = '-' + size / 2 + 'px';
	    canvas.style.marginTop = '-' + size / 2 + 'px';

	    var ctx = canvas.getContext('2d');
	    ctx.imageSmoothingEnabled = false;
	    ctx.globalAlpha = 0.8;
	  };

	  window.addEventListener('resize', resize);
	  resize();

	  return canvas;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var centerDotSize = 8;
	var centerDotStyle = {
	  display: 'block',
	  background: 'white',
	  zIndex: 1,
	  position: 'absolute',
	  top: '50%',
	  left: '50%',
	  width: centerDotSize + 'px',
	  height: centerDotSize + 'px',
	  marginLeft: -centerDotSize * 0.5 + 'px',
	  marginTop: -centerDotSize * 0.5 + 'px',
	  borderRadius: '50%'
	};

	exports.default = function () {
	  var centerDot = document.createElement('div');
	  Object.assign(centerDot.style, centerDotStyle);
	  document.body.appendChild(centerDot);
	  return centerDot;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var centerSize = 6;
	var halfCenterSize = centerSize / 2;

	exports.default = function (_ref) {
	  var ctx = _ref.ctx,
	      canvas = _ref.canvas,
	      scale = _ref.scale,
	      rotation = _ref.rotation,
	      pattern = _ref.pattern;

	  var halfCanvasWidth = canvas.width * 0.5;
	  var halfCanvasHeight = canvas.height * 0.5;
	  var oneOverScale = 1 / scale;

	  ctx.beginPath();
	  ctx.rect(halfCanvasWidth - halfCenterSize, halfCanvasHeight - halfCenterSize, centerSize, centerSize);
	  ctx.fillStyle = pattern; // eslint-disable-line no-param-reassign
	  ctx.fill();

	  ctx.translate(halfCanvasWidth, halfCanvasHeight);
	  ctx.scale(scale, scale);
	  ctx.rotate(rotation);
	  ctx.translate(-halfCanvasWidth, -halfCanvasHeight);

	  ctx.drawImage(canvas, 0, 0);

	  ctx.translate(halfCanvasWidth, halfCanvasHeight);
	  ctx.rotate(-rotation);
	  ctx.scale(oneOverScale, oneOverScale);
	  ctx.translate(-halfCanvasWidth, -halfCanvasHeight);
	};

/***/ }
/******/ ]);