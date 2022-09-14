(() => {
  var __webpack_modules__ = {
    "./src/This/who-pirority.js": function () {
      const that = this
      var a = 123;
      const foo2 = () => {
        return a => {
          console.log(this.a, this=== that);
        };
      };
      const obj3 = {
        a: 2
      };
      const obj4 = {
        a: 3
      };
      var bar = foo2.call(obj3);
      bar.call(obj4);
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    __webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module['default'] : () => module;
      __webpack_require__.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = exports => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    };
  })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _This_who_pirority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/This/who-pirority.js");
    var _This_who_pirority__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_This_who_pirority__WEBPACK_IMPORTED_MODULE_0__);
  })();
})();