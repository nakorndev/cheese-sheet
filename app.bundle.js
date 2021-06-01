/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license Minigrid v3.1.1 – minimal cascading grid layout http://alves.im/minigrid */
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (exports) {
  'use strict';

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }

    return a;
  }

  var Minigrid = function (props) {
    var containerEle = props.container instanceof Node ? props.container : document.querySelector(props.container);
    var itemsNodeList = props.item instanceof NodeList ? props.item : containerEle.querySelectorAll(props.item);
    this.props = extend(props, {
      container: containerEle,
      nodeList: itemsNodeList
    });
  };

  Minigrid.prototype.mount = function () {
    if (!this.props.container) {
      return false;
    }

    if (!this.props.nodeList || this.props.nodeList.length === 0) {
      return false;
    }

    var gutter = typeof this.props.gutter === 'number' && isFinite(this.props.gutter) && Math.floor(this.props.gutter) === this.props.gutter ? this.props.gutter : 0;
    var done = this.props.done;
    var containerEle = this.props.container;
    var itemsNodeList = this.props.nodeList;
    containerEle.style.width = '';
    var forEach = Array.prototype.forEach;
    var containerWidth = containerEle.getBoundingClientRect().width;
    var firstChildWidth = itemsNodeList[0].getBoundingClientRect().width + gutter;
    var cols = Math.max(Math.floor((containerWidth - gutter) / firstChildWidth), 1);
    var count = 0;
    containerWidth = firstChildWidth * cols + gutter + 'px';
    containerEle.style.width = containerWidth;
    containerEle.style.position = 'relative';
    var itemsGutter = [];
    var itemsPosX = [];

    for (var g = 0; g < cols; ++g) {
      itemsPosX.push(g * firstChildWidth + gutter);
      itemsGutter.push(gutter);
    } // RTL support


    if (this.props.rtl) {
      itemsPosX.reverse();
    }

    forEach.call(itemsNodeList, function (item) {
      var itemIndex = itemsGutter.slice(0).sort(function (a, b) {
        return a - b;
      }).shift();
      itemIndex = itemsGutter.indexOf(itemIndex);
      var posX = parseInt(itemsPosX[itemIndex]);
      var posY = parseInt(itemsGutter[itemIndex]);
      item.style.position = 'absolute';
      item.style.webkitBackfaceVisibility = item.style.backfaceVisibility = 'hidden';
      item.style.transformStyle = 'preserve-3d';
      item.style.transform = 'translate3D(' + posX + 'px,' + posY + 'px, 0)';
      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;
      count = count + 1;
    });
    containerEle.style.display = '';
    var containerHeight = itemsGutter.slice(0).sort(function (a, b) {
      return a - b;
    }).pop();
    containerEle.style.height = containerHeight + 'px';

    if (typeof done === 'function') {
      done(itemsNodeList);
    }
  };

  return Minigrid;
});

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var minigrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var minigrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(minigrid__WEBPACK_IMPORTED_MODULE_0__);


const grid = new (minigrid__WEBPACK_IMPORTED_MODULE_0___default())({
  container: '.grid',
  item: '.grid-item',
  gutter: 12
});

const update = () => grid.mount();

window.addEventListener('load', update);
window.addEventListener('resize', update);
window.addEventListener('beforeprint', () => {
  document.body.style.width = '21cm';

  for (const dom of document.querySelectorAll('.grid-item')) {
    dom.style.width = '8.5cm';
  }

  grid.mount();
});
window.addEventListener('afterprint', () => {
  document.body.style.removeProperty('width');

  for (const dom of document.querySelectorAll('.grid-item')) {
    dom.style.removeProperty('width');
  }

  grid.mount();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(console.log).catch(console.error);
}
})();

/******/ })()
;