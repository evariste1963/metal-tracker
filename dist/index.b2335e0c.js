// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"76jC4":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ac0dcd70b2335e0c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"f47v6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _apexcharts = require("apexcharts");
var _apexchartsDefault = parcelHelpers.interopDefault(_apexcharts);
// https://www.goldapi.io/dashboard
//https://www.goldapi.io/api/"XAU"/"GBP"/'20200101'
const API_KEY = "goldapi-15j9sm18l0w7rfer-io";
const metal = "XAU";
const currency = "GBP";
const historicDate = ""; //"20201112"; // 'yyyy/mm/dd'
const updateBtn = document.querySelector(".btn-update");
const candleChart = document.querySelector("#chart");
//https://apexcharts.com/
var options = {
    series: [
        {
            name: "line",
            type: "line",
            data: [
                {
                    x: new Date(1538778600000),
                    y: 6604
                },
                {
                    x: new Date(1538782200000),
                    y: 6602
                },
                {
                    x: new Date(1538814600000),
                    y: 6607
                },
                {
                    x: new Date(1538884800000),
                    y: 6620
                }, 
            ]
        },
        {
            name: "candle",
            type: "candlestick",
            data: [
                //place this in an external txt file?
                {
                    x: new Date(1538778600000),
                    y: [
                        6629.81,
                        6650.5,
                        6623.04,
                        6633.33
                    ]
                },
                {
                    x: new Date(1538780400000),
                    y: [
                        6632.01,
                        6643.59,
                        6620,
                        6630.11
                    ]
                },
                {
                    x: new Date(1538782200000),
                    y: [
                        6630.71,
                        6648.95,
                        6623.34,
                        6635.65
                    ]
                },
                {
                    x: new Date(1538784000000),
                    y: [
                        6635.65,
                        6651,
                        6629.67,
                        6638.24
                    ]
                },
                {
                    x: new Date(1538785800000),
                    y: [
                        6638.24,
                        6640,
                        6620,
                        6624.47
                    ]
                },
                {
                    x: new Date(1538787600000),
                    y: [
                        6624.53,
                        6636.03,
                        6621.68,
                        6624.31
                    ]
                },
                {
                    x: new Date(1538789400000),
                    y: [
                        6624.61,
                        6632.2,
                        6617,
                        6626.02
                    ]
                },
                {
                    x: new Date(1538791200000),
                    y: [
                        6627,
                        6627.62,
                        6584.22,
                        6603.02
                    ]
                },
                {
                    x: new Date(1538793000000),
                    y: [
                        6605,
                        6608.03,
                        6598.95,
                        6604.01
                    ]
                },
                {
                    x: new Date(1538794800000),
                    y: [
                        6604.5,
                        6614.4,
                        6602.26,
                        6608.02
                    ]
                },
                {
                    x: new Date(1538796600000),
                    y: [
                        6608.02,
                        6610.68,
                        6601.99,
                        6608.91
                    ]
                },
                {
                    x: new Date(1538798400000),
                    y: [
                        6608.91,
                        6618.99,
                        6608.01,
                        6612
                    ]
                },
                {
                    x: new Date(1538800200000),
                    y: [
                        6612,
                        6615.13,
                        6605.09,
                        6612
                    ]
                },
                {
                    x: new Date(1538802000000),
                    y: [
                        6612,
                        6624.12,
                        6608.43,
                        6622.95
                    ]
                },
                {
                    x: new Date(1538803800000),
                    y: [
                        6623.91,
                        6623.91,
                        6615,
                        6615.67
                    ]
                },
                {
                    x: new Date(1538805600000),
                    y: [
                        6618.69,
                        6618.74,
                        6610,
                        6610.4
                    ]
                },
                {
                    x: new Date(1538807400000),
                    y: [
                        6611,
                        6622.78,
                        6610.4,
                        6614.9
                    ]
                },
                {
                    x: new Date(1538809200000),
                    y: [
                        6614.9,
                        6626.2,
                        6613.33,
                        6623.45
                    ]
                },
                {
                    x: new Date(1538811000000),
                    y: [
                        6623.48,
                        6627,
                        6618.38,
                        6620.35
                    ]
                },
                {
                    x: new Date(1538812800000),
                    y: [
                        6619.43,
                        6620.35,
                        6610.05,
                        6615.53
                    ]
                },
                {
                    x: new Date(1538814600000),
                    y: [
                        6615.53,
                        6617.93,
                        6610,
                        6615.19
                    ]
                },
                {
                    x: new Date(1538816400000),
                    y: [
                        6615.19,
                        6621.6,
                        6608.2,
                        6620
                    ]
                },
                {
                    x: new Date(1538818200000),
                    y: [
                        6619.54,
                        6625.17,
                        6614.15,
                        6620
                    ]
                },
                {
                    x: new Date(1538820000000),
                    y: [
                        6620.33,
                        6634.15,
                        6617.24,
                        6624.61
                    ]
                },
                {
                    x: new Date(1538821800000),
                    y: [
                        6625.95,
                        6626,
                        6611.66,
                        6617.58
                    ]
                },
                {
                    x: new Date(1538823600000),
                    y: [
                        6619,
                        6625.97,
                        6595.27,
                        6598.86
                    ]
                },
                {
                    x: new Date(1538825400000),
                    y: [
                        6598.86,
                        6598.88,
                        6570,
                        6587.16
                    ]
                },
                {
                    x: new Date(1538827200000),
                    y: [
                        6588.86,
                        6600,
                        6580,
                        6593.4
                    ]
                },
                {
                    x: new Date(1538829000000),
                    y: [
                        6593.99,
                        6598.89,
                        6585,
                        6587.81
                    ]
                },
                {
                    x: new Date(1538830800000),
                    y: [
                        6587.81,
                        6592.73,
                        6567.14,
                        6578
                    ]
                },
                {
                    x: new Date(1538832600000),
                    y: [
                        6578.35,
                        6581.72,
                        6567.39,
                        6579
                    ]
                },
                {
                    x: new Date(1538834400000),
                    y: [
                        6579.38,
                        6580.92,
                        6566.77,
                        6575.96
                    ]
                },
                {
                    x: new Date(1538836200000),
                    y: [
                        6575.96,
                        6589,
                        6571.77,
                        6588.92
                    ]
                },
                {
                    x: new Date(1538838000000),
                    y: [
                        6588.92,
                        6594,
                        6577.55,
                        6589.22
                    ]
                },
                {
                    x: new Date(1538839800000),
                    y: [
                        6589.3,
                        6598.89,
                        6589.1,
                        6596.08
                    ]
                },
                {
                    x: new Date(1538841600000),
                    y: [
                        6597.5,
                        6600,
                        6588.39,
                        6596.25
                    ]
                },
                {
                    x: new Date(1538843400000),
                    y: [
                        6598.03,
                        6600,
                        6588.73,
                        6595.97
                    ]
                },
                {
                    x: new Date(1538845200000),
                    y: [
                        6595.97,
                        6602.01,
                        6588.17,
                        6602
                    ]
                },
                {
                    x: new Date(1538847000000),
                    y: [
                        6602,
                        6607,
                        6596.51,
                        6599.95
                    ]
                },
                {
                    x: new Date(1538848800000),
                    y: [
                        6600.63,
                        6601.21,
                        6590.39,
                        6591.02
                    ]
                },
                {
                    x: new Date(1538850600000),
                    y: [
                        6591.02,
                        6603.08,
                        6591,
                        6591
                    ]
                },
                {
                    x: new Date(1538852400000),
                    y: [
                        6591,
                        6601.32,
                        6585,
                        6592
                    ]
                },
                {
                    x: new Date(1538854200000),
                    y: [
                        6593.13,
                        6596.01,
                        6590,
                        6593.34
                    ]
                },
                {
                    x: new Date(1538856000000),
                    y: [
                        6593.34,
                        6604.76,
                        6582.63,
                        6593.86
                    ]
                },
                {
                    x: new Date(1538857800000),
                    y: [
                        6593.86,
                        6604.28,
                        6586.57,
                        6600.01
                    ]
                },
                {
                    x: new Date(1538859600000),
                    y: [
                        6601.81,
                        6603.21,
                        6592.78,
                        6596.25
                    ]
                },
                {
                    x: new Date(1538861400000),
                    y: [
                        6596.25,
                        6604.2,
                        6590,
                        6602.99
                    ]
                },
                {
                    x: new Date(1538863200000),
                    y: [
                        6602.99,
                        6606,
                        6584.99,
                        6587.81
                    ]
                },
                {
                    x: new Date(1538865000000),
                    y: [
                        6587.81,
                        6595,
                        6583.27,
                        6591.96
                    ]
                },
                {
                    x: new Date(1538866800000),
                    y: [
                        6591.97,
                        6596.07,
                        6585,
                        6588.39
                    ]
                },
                {
                    x: new Date(1538868600000),
                    y: [
                        6587.6,
                        6598.21,
                        6587.6,
                        6594.27
                    ]
                },
                {
                    x: new Date(1538870400000),
                    y: [
                        6596.44,
                        6601,
                        6590,
                        6596.55
                    ]
                },
                {
                    x: new Date(1538872200000),
                    y: [
                        6598.91,
                        6605,
                        6596.61,
                        6600.02
                    ]
                },
                {
                    x: new Date(1538874000000),
                    y: [
                        6600.55,
                        6605,
                        6589.14,
                        6593.01
                    ]
                },
                {
                    x: new Date(1538875800000),
                    y: [
                        6593.15,
                        6605,
                        6592,
                        6603.06
                    ]
                },
                {
                    x: new Date(1538877600000),
                    y: [
                        6603.07,
                        6604.5,
                        6599.09,
                        6603.89
                    ]
                },
                {
                    x: new Date(1538879400000),
                    y: [
                        6604.44,
                        6604.44,
                        6600,
                        6603.5
                    ]
                },
                {
                    x: new Date(1538881200000),
                    y: [
                        6603.5,
                        6603.99,
                        6597.5,
                        6603.86
                    ]
                },
                {
                    x: new Date(1538883000000),
                    y: [
                        6603.85,
                        6605,
                        6600,
                        6604.07
                    ]
                },
                {
                    x: new Date(1538884800000),
                    y: [
                        6604.98,
                        6606,
                        6604.07,
                        6606
                    ]
                }, 
            ]
        }, 
    ],
    chart: {
        height: 300,
        width: "100%",
        type: "line"
    },
    title: {
        text: "CandleStick Chart",
        align: "left"
    },
    stroke: {
        width: [
            2,
            1
        ]
    },
    tooltip: {
        shared: true,
        custom: [
            function({ seriesIndex , dataPointIndex , w  }) {
                return w.globals.series[seriesIndex][dataPointIndex];
            },
            function({ seriesIndex , dataPointIndex , w  }) {
                var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
                var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
                var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
                var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
                return "";
            }, 
        ]
    },
    xaxis: {
        type: "datetime"
    }
};
var chart = new _apexchartsDefault.default(candleChart, options);
chart.render();
const myHeaders = new Headers();
myHeaders.append("x-access-token", API_KEY);
myHeaders.append("Content-Type", "application/json");
const getTimestamp = (timestamp)=>{
    let date = new Date(timestamp * 1000);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let callDate = `${year}-${month.toString().padStart(2, 0)}-${day.toString().padStart(2, 0)} ${hours.toString().padStart(2, 0)}:${mins.toString().padStart(2, 0)}:${secs.toString().padStart(2, 0)}`;
    return callDate;
};
//create an external function for this bit -- pass in result.values... return outcomes
let dateTime = (result)=>{
    return getTimestamp(result.date ? result.timestamp / 1000 : result.timestamp);
};
//render data -- currently just consolelogging
const renderData = (result, callTime)=>{
    //create an external function for this bit -- pass in result.values... return outcomes
    !result.date ? console.log(`
${callTime}
${result.metal}:-
Day low: ${result.low_price}
Day high: ${result.high_price}
Price: ${result.price}`) : console.log(`
${callTime}
Previous closing price: ${result.prev_close_price}
Price: ${result.price}`);
};
const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};
console.log(`https://www.goldapi.io/api/${metal}/${currency}/${historicDate}`);
//endpoint - https://www.goldapi.io/api/:symbol/:currency/:date?
const getMetalPrice = async ()=>{
    try {
        const response = await fetch(`https://www.goldapi.io/api/${metal}/${currency}/${historicDate}?`, requestOptions);
        const result = await response.json();
        console.log(result);
        renderData(result, dateTime(result));
    } catch (error) {
        console.log("error", error);
    }
};
updateBtn.addEventListener("click", getMetalPrice); //goldAPI response
 /*
{timestamp: 1647631965, metal: 'XAU', currency: 'GBP', exchange: 'FOREXCOM', symbol: 'FOREXCOM:XAUGBP', …}ask: 1457.17bid: 1456.4ch: -20.5chp: -1.39currency: "GBP"exchange: "FOREXCOM"high_price: 1478.16low_price: 1454.94metal: "XAU"open_price: 1477.28open_time: 1647561600prev_close_price: 1477.28price: 1456.78price_gram_18k: 35.1274price_gram_20k: 39.0305price_gram_21k: 40.982price_gram_22k: 42.9335price_gram_24k: 46.8366symbol: "FOREXCOM:XAUGBP"timestamp: 1647631965[[Prototype]]: Object

2022-03-18 19:32:45
XAU:-
Day low: 1454.94
Day high: 1478.16
Price: 1456.78
*/  //result from historic date:
 /*
{date: '2020-11-12T10:30:00.000Z', timestamp: 1605177000000, metal: 'XAU', exchange: 'LBMA', currency: 'GBP', …}
ch: -6.2508
chp: -0.439
currency: "GBP"
date: "2020-11-12T10:30:00.000Z"
exchange: "LBMA"
metal: "XAU"
prev_close_price: 1430.2235
price: 1423.9727
price_gram_18k: 34.3363
price_gram_20k: 38.1515
price_gram_21k: 40.0591
price_gram_22k: 41.9666
price_gram_24k: 45.7818
timestamp: 1605177000000
*/  /*
const API_KEY = "b0ifc1x03it7x9ysdkymb90iea14322975t5ld01t0ap56iad6u1h37vuro3";
const gold = "XAU";
const updateBtn = document.querySelector(".btn-update");
const getMetalPrice = () => {
  fetch(
    `https://www.metals-api.com/api/latest?access_key=${API_KEY}&base=USD&symbols=${gold}`
  )
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
      const date = data.timestamp;
    });
};
updateBtn.addEventListener("click", getMetalPrice);
*/ 

},{"apexcharts":"cty2q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cty2q":[function(require,module,exports) {
/*!
 * ApexCharts v3.33.2
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
 */ "use strict";
function t(t1, e1) {
    var i1 = Object.keys(t1);
    if (Object.getOwnPropertySymbols) {
        var a1 = Object.getOwnPropertySymbols(t1);
        e1 && (a1 = a1.filter(function(e2) {
            return Object.getOwnPropertyDescriptor(t1, e2).enumerable;
        })), i1.push.apply(i1, a1);
    }
    return i1;
}
function e(e3) {
    for(var i2 = 1; i2 < arguments.length; i2++){
        var a2 = null != arguments[i2] ? arguments[i2] : {
        };
        i2 % 2 ? t(Object(a2), !0).forEach(function(t2) {
            o(e3, t2, a2[t2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(a2)) : t(Object(a2)).forEach(function(t3) {
            Object.defineProperty(e3, t3, Object.getOwnPropertyDescriptor(a2, t3));
        });
    }
    return e3;
}
function i(t4) {
    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t5) {
        return typeof t5;
    } : function(t6) {
        return t6 && "function" == typeof Symbol && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
    })(t4);
}
function a(t7, e4) {
    if (!(t7 instanceof e4)) throw new TypeError("Cannot call a class as a function");
}
function s(t8, e5) {
    for(var i3 = 0; i3 < e5.length; i3++){
        var a3 = e5[i3];
        a3.enumerable = a3.enumerable || !1, a3.configurable = !0, "value" in a3 && (a3.writable = !0), Object.defineProperty(t8, a3.key, a3);
    }
}
function r(t9, e6, i4) {
    return e6 && s(t9.prototype, e6), i4 && s(t9, i4), t9;
}
function o(t10, e7, i5) {
    return e7 in t10 ? Object.defineProperty(t10, e7, {
        value: i5,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t10[e7] = i5, t10;
}
function n(t11, e8) {
    if ("function" != typeof e8 && null !== e8) throw new TypeError("Super expression must either be null or a function");
    t11.prototype = Object.create(e8 && e8.prototype, {
        constructor: {
            value: t11,
            writable: !0,
            configurable: !0
        }
    }), e8 && h(t11, e8);
}
function l(t12) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t13) {
        return t13.__proto__ || Object.getPrototypeOf(t13);
    })(t12);
}
function h(t14, e9) {
    return (h = Object.setPrototypeOf || function(t15, e10) {
        return t15.__proto__ = e10, t15;
    })(t14, e9);
}
function c(t16, e11) {
    if (e11 && ("object" == typeof e11 || "function" == typeof e11)) return e11;
    if (void 0 !== e11) throw new TypeError("Derived constructors may only return object or undefined");
    return (function(t17) {
        if (void 0 === t17) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t17;
    })(t16);
}
function d(t18) {
    var e12 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
        } catch (t) {
            return !1;
        }
    }();
    return function() {
        var i6, a4 = l(t18);
        if (e12) {
            var s1 = l(this).constructor;
            i6 = Reflect.construct(a4, arguments, s1);
        } else i6 = a4.apply(this, arguments);
        return c(this, i6);
    };
}
function g(t19, e13) {
    return (function(t20) {
        if (Array.isArray(t20)) return t20;
    })(t19) || (function(t21, e14) {
        var i7 = null == t21 ? null : "undefined" != typeof Symbol && t21[Symbol.iterator] || t21["@@iterator"];
        if (null == i7) return;
        var a5, s2, r1 = [], o1 = !0, n1 = !1;
        try {
            for(i7 = i7.call(t21); !(o1 = (a5 = i7.next()).done) && (r1.push(a5.value), !e14 || r1.length !== e14); o1 = !0);
        } catch (t22) {
            n1 = !0, s2 = t22;
        } finally{
            try {
                o1 || null == i7.return || i7.return();
            } finally{
                if (n1) throw s2;
            }
        }
        return r1;
    })(t19, e13) || f(t19, e13) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
}
function u(t23) {
    return (function(t24) {
        if (Array.isArray(t24)) return p(t24);
    })(t23) || (function(t25) {
        if ("undefined" != typeof Symbol && null != t25[Symbol.iterator] || null != t25["@@iterator"]) return Array.from(t25);
    })(t23) || f(t23) || (function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
}
function f(t26, e15) {
    if (t26) {
        if ("string" == typeof t26) return p(t26, e15);
        var i8 = Object.prototype.toString.call(t26).slice(8, -1);
        return "Object" === i8 && t26.constructor && (i8 = t26.constructor.name), "Map" === i8 || "Set" === i8 ? Array.from(t26) : "Arguments" === i8 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i8) ? p(t26, e15) : void 0;
    }
}
function p(t27, e16) {
    (null == e16 || e16 > t27.length) && (e16 = t27.length);
    for(var i9 = 0, a6 = new Array(e16); i9 < e16; i9++)a6[i9] = t27[i9];
    return a6;
}
var x = function() {
    function t28() {
        a(this, t28);
    }
    return r(t28, [
        {
            key: "shadeRGBColor",
            value: function(t29, e17) {
                var i10 = e17.split(","), a7 = t29 < 0 ? 0 : 255, s3 = t29 < 0 ? -1 * t29 : t29, r2 = parseInt(i10[0].slice(4), 10), o2 = parseInt(i10[1], 10), n2 = parseInt(i10[2], 10);
                return "rgb(" + (Math.round((a7 - r2) * s3) + r2) + "," + (Math.round((a7 - o2) * s3) + o2) + "," + (Math.round((a7 - n2) * s3) + n2) + ")";
            }
        },
        {
            key: "shadeHexColor",
            value: function(t30, e18) {
                var i11 = parseInt(e18.slice(1), 16), a8 = t30 < 0 ? 0 : 255, s4 = t30 < 0 ? -1 * t30 : t30, r3 = i11 >> 16, o3 = i11 >> 8 & 255, n3 = 255 & i11;
                return "#" + (16777216 + 65536 * (Math.round((a8 - r3) * s4) + r3) + 256 * (Math.round((a8 - o3) * s4) + o3) + (Math.round((a8 - n3) * s4) + n3)).toString(16).slice(1);
            }
        },
        {
            key: "shadeColor",
            value: function(e19, i12) {
                return t28.isColorHex(i12) ? this.shadeHexColor(e19, i12) : this.shadeRGBColor(e19, i12);
            }
        }
    ], [
        {
            key: "bind",
            value: function(t31, e20) {
                return function() {
                    return t31.apply(e20, arguments);
                };
            }
        },
        {
            key: "isObject",
            value: function(t32) {
                return t32 && "object" === i(t32) && !Array.isArray(t32) && null != t32;
            }
        },
        {
            key: "is",
            value: function(t33, e21) {
                return Object.prototype.toString.call(e21) === "[object " + t33 + "]";
            }
        },
        {
            key: "listToArray",
            value: function(t34) {
                var e22, i13 = [];
                for(e22 = 0; e22 < t34.length; e22++)i13[e22] = t34[e22];
                return i13;
            }
        },
        {
            key: "extend",
            value: function(t35, e23) {
                var i14 = this;
                "function" != typeof Object.assign && (Object.assign = function(t36) {
                    if (null == t36) throw new TypeError("Cannot convert undefined or null to object");
                    for(var e24 = Object(t36), i15 = 1; i15 < arguments.length; i15++){
                        var a10 = arguments[i15];
                        if (null != a10) for(var s5 in a10)a10.hasOwnProperty(s5) && (e24[s5] = a10[s5]);
                    }
                    return e24;
                });
                var a9 = Object.assign({
                }, t35);
                return this.isObject(t35) && this.isObject(e23) && Object.keys(e23).forEach(function(s6) {
                    i14.isObject(e23[s6]) && s6 in t35 ? a9[s6] = i14.extend(t35[s6], e23[s6]) : Object.assign(a9, o({
                    }, s6, e23[s6]));
                }), a9;
            }
        },
        {
            key: "extendArray",
            value: function(e25, i16) {
                var a11 = [];
                return e25.map(function(e26) {
                    a11.push(t28.extend(i16, e26));
                }), e25 = a11;
            }
        },
        {
            key: "monthMod",
            value: function(t37) {
                return t37 % 12;
            }
        },
        {
            key: "clone",
            value: function(e27) {
                if (t28.is("Array", e27)) {
                    for(var a12 = [], s7 = 0; s7 < e27.length; s7++)a12[s7] = this.clone(e27[s7]);
                    return a12;
                }
                if (t28.is("Null", e27)) return null;
                if (t28.is("Date", e27)) return e27;
                if ("object" === i(e27)) {
                    var r4 = {
                    };
                    for(var o4 in e27)e27.hasOwnProperty(o4) && (r4[o4] = this.clone(e27[o4]));
                    return r4;
                }
                return e27;
            }
        },
        {
            key: "log10",
            value: function(t38) {
                return Math.log(t38) / Math.LN10;
            }
        },
        {
            key: "roundToBase10",
            value: function(t39) {
                return Math.pow(10, Math.floor(Math.log10(t39)));
            }
        },
        {
            key: "roundToBase",
            value: function(t40, e28) {
                return Math.pow(e28, Math.floor(Math.log(t40) / Math.log(e28)));
            }
        },
        {
            key: "parseNumber",
            value: function(t41) {
                return null === t41 ? t41 : parseFloat(t41);
            }
        },
        {
            key: "randomId",
            value: function() {
                return (Math.random() + 1).toString(36).substring(4);
            }
        },
        {
            key: "noExponents",
            value: function(t42) {
                var e29 = String(t42).split(/[eE]/);
                if (1 === e29.length) return e29[0];
                var i17 = "", a13 = t42 < 0 ? "-" : "", s8 = e29[0].replace(".", ""), r5 = Number(e29[1]) + 1;
                if (r5 < 0) {
                    for(i17 = a13 + "0."; r5++;)i17 += "0";
                    return i17 + s8.replace(/^-/, "");
                }
                for(r5 -= s8.length; r5--;)i17 += "0";
                return s8 + i17;
            }
        },
        {
            key: "getDimensions",
            value: function(t43) {
                var e30 = getComputedStyle(t43, null), i18 = t43.clientHeight, a14 = t43.clientWidth;
                return i18 -= parseFloat(e30.paddingTop) + parseFloat(e30.paddingBottom), [
                    a14 -= parseFloat(e30.paddingLeft) + parseFloat(e30.paddingRight),
                    i18
                ];
            }
        },
        {
            key: "getBoundingClientRect",
            value: function(t44) {
                var e31 = t44.getBoundingClientRect();
                return {
                    top: e31.top,
                    right: e31.right,
                    bottom: e31.bottom,
                    left: e31.left,
                    width: t44.clientWidth,
                    height: t44.clientHeight,
                    x: e31.left,
                    y: e31.top
                };
            }
        },
        {
            key: "getLargestStringFromArr",
            value: function(t45) {
                return t45.reduce(function(t46, e32) {
                    return Array.isArray(e32) && (e32 = e32.reduce(function(t47, e33) {
                        return t47.length > e33.length ? t47 : e33;
                    })), t46.length > e32.length ? t46 : e32;
                }, 0);
            }
        },
        {
            key: "hexToRgba",
            value: function() {
                var t48 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999", e34 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6;
                "#" !== t48.substring(0, 1) && (t48 = "#999999");
                var i19 = t48.replace("#", "");
                i19 = i19.match(new RegExp("(.{" + i19.length / 3 + "})", "g"));
                for(var a15 = 0; a15 < i19.length; a15++)i19[a15] = parseInt(1 === i19[a15].length ? i19[a15] + i19[a15] : i19[a15], 16);
                return void 0 !== e34 && i19.push(e34), "rgba(" + i19.join(",") + ")";
            }
        },
        {
            key: "getOpacityFromRGBA",
            value: function(t49) {
                return parseFloat(t49.replace(/^.*,(.+)\)/, "$1"));
            }
        },
        {
            key: "rgb2hex",
            value: function(t50) {
                return (t50 = t50.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t50.length ? "#" + ("0" + parseInt(t50[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t50[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t50[3], 10).toString(16)).slice(-2) : "";
            }
        },
        {
            key: "isColorHex",
            value: function(t51) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t51);
            }
        },
        {
            key: "getPolygonPos",
            value: function(t52, e35) {
                for(var i20 = [], a16 = 2 * Math.PI / e35, s9 = 0; s9 < e35; s9++){
                    var r6 = {
                    };
                    r6.x = t52 * Math.sin(s9 * a16), r6.y = -t52 * Math.cos(s9 * a16), i20.push(r6);
                }
                return i20;
            }
        },
        {
            key: "polarToCartesian",
            value: function(t53, e36, i21, a17) {
                var s10 = (a17 - 90) * Math.PI / 180;
                return {
                    x: t53 + i21 * Math.cos(s10),
                    y: e36 + i21 * Math.sin(s10)
                };
            }
        },
        {
            key: "escapeString",
            value: function(t54) {
                var e37 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", i22 = t54.toString().slice();
                return i22 = i22.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, e37);
            }
        },
        {
            key: "negToZero",
            value: function(t55) {
                return t55 < 0 ? 0 : t55;
            }
        },
        {
            key: "moveIndexInArray",
            value: function(t56, e38, i23) {
                if (i23 >= t56.length) for(var a18 = i23 - t56.length + 1; a18--;)t56.push(void 0);
                return t56.splice(i23, 0, t56.splice(e38, 1)[0]), t56;
            }
        },
        {
            key: "extractNumber",
            value: function(t57) {
                return parseFloat(t57.replace(/[^\d.]*/g, ""));
            }
        },
        {
            key: "findAncestor",
            value: function(t58, e39) {
                for(; (t58 = t58.parentElement) && !t58.classList.contains(e39););
                return t58;
            }
        },
        {
            key: "setELstyles",
            value: function(t59, e40) {
                for(var i24 in e40)e40.hasOwnProperty(i24) && (t59.style.key = e40[i24]);
            }
        },
        {
            key: "isNumber",
            value: function(t60) {
                return !isNaN(t60) && parseFloat(Number(t60)) === t60 && !isNaN(parseInt(t60, 10));
            }
        },
        {
            key: "isFloat",
            value: function(t61) {
                return Number(t61) === t61 && t61 % 1 != 0;
            }
        },
        {
            key: "isSafari",
            value: function() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
        },
        {
            key: "isFirefox",
            value: function() {
                return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
            }
        },
        {
            key: "isIE11",
            value: function() {
                if (-1 !== window.navigator.userAgent.indexOf("MSIE") || window.navigator.appVersion.indexOf("Trident/") > -1) return !0;
            }
        },
        {
            key: "isIE",
            value: function() {
                var t62 = window.navigator.userAgent, e41 = t62.indexOf("MSIE ");
                if (e41 > 0) return parseInt(t62.substring(e41 + 5, t62.indexOf(".", e41)), 10);
                if (t62.indexOf("Trident/") > 0) {
                    var i25 = t62.indexOf("rv:");
                    return parseInt(t62.substring(i25 + 3, t62.indexOf(".", i25)), 10);
                }
                var a19 = t62.indexOf("Edge/");
                return a19 > 0 && parseInt(t62.substring(a19 + 5, t62.indexOf(".", a19)), 10);
            }
        }
    ]), t28;
}(), b = function() {
    function t63(e42) {
        a(this, t63), this.ctx = e42, this.w = e42.w, this.setEasingFunctions();
    }
    return r(t63, [
        {
            key: "setEasingFunctions",
            value: function() {
                var t64;
                if (!this.w.globals.easing) {
                    switch(this.w.config.chart.animations.easing){
                        case "linear":
                            t64 = "-";
                            break;
                        case "easein":
                            t64 = "<";
                            break;
                        case "easeout":
                            t64 = ">";
                            break;
                        case "easeinout":
                            t64 = "<>";
                            break;
                        case "swing":
                            t64 = function(t65) {
                                var e43 = 1.70158;
                                return (t65 -= 1) * t65 * ((e43 + 1) * t65 + e43) + 1;
                            };
                            break;
                        case "bounce":
                            t64 = function(t66) {
                                return t66 < 1 / 2.75 ? 7.5625 * t66 * t66 : t66 < 2 / 2.75 ? 7.5625 * (t66 -= 1.5 / 2.75) * t66 + 0.75 : t66 < 2.5 / 2.75 ? 7.5625 * (t66 -= 2.25 / 2.75) * t66 + 0.9375 : 7.5625 * (t66 -= 2.625 / 2.75) * t66 + 0.984375;
                            };
                            break;
                        case "elastic":
                            t64 = function(t67) {
                                return t67 === !!t67 ? t67 : Math.pow(2, -10 * t67) * Math.sin((t67 - 0.075) * (2 * Math.PI) / 0.3) + 1;
                            };
                            break;
                        default:
                            t64 = "<>";
                    }
                    this.w.globals.easing = t64;
                }
            }
        },
        {
            key: "animateLine",
            value: function(t68, e44, i26, a20) {
                t68.attr(e44).animate(a20).attr(i26);
            }
        },
        {
            key: "animateMarker",
            value: function(t69, e45, i27, a21, s11, r7) {
                e45 || (e45 = 0), t69.attr({
                    r: e45,
                    width: e45,
                    height: e45
                }).animate(a21, s11).attr({
                    r: i27,
                    width: i27.width,
                    height: i27.height
                }).afterAll(function() {
                    r7();
                });
            }
        },
        {
            key: "animateCircle",
            value: function(t70, e46, i28, a22, s12) {
                t70.attr({
                    r: e46.r,
                    cx: e46.cx,
                    cy: e46.cy
                }).animate(a22, s12).attr({
                    r: i28.r,
                    cx: i28.cx,
                    cy: i28.cy
                });
            }
        },
        {
            key: "animateRect",
            value: function(t71, e47, i29, a23, s13) {
                t71.attr(e47).animate(a23).attr(i29).afterAll(function() {
                    return s13();
                });
            }
        },
        {
            key: "animatePathsGradually",
            value: function(t72) {
                var e48 = t72.el, i30 = t72.realIndex, a24 = t72.j, s14 = t72.fill, r8 = t72.pathFrom, o5 = t72.pathTo, n4 = t72.speed, l1 = t72.delay, h1 = this.w, c1 = 0;
                h1.config.chart.animations.animateGradually.enabled && (c1 = h1.config.chart.animations.animateGradually.delay), h1.config.chart.animations.dynamicAnimation.enabled && h1.globals.dataChanged && "bar" !== h1.config.chart.type && (c1 = 0), this.morphSVG(e48, i30, a24, "line" !== h1.config.chart.type || h1.globals.comboCharts ? s14 : "stroke", r8, o5, n4, l1 * c1);
            }
        },
        {
            key: "showDelayedElements",
            value: function() {
                this.w.globals.delayedElements.forEach(function(t73) {
                    t73.el.classList.remove("apexcharts-element-hidden");
                });
            }
        },
        {
            key: "animationCompleted",
            value: function(t74) {
                var e49 = this.w;
                e49.globals.animationEnded || (e49.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e49.config.chart.events.animationEnd && e49.config.chart.events.animationEnd(this.ctx, {
                    el: t74,
                    w: e49
                }));
            }
        },
        {
            key: "morphSVG",
            value: function(t75, e50, i31, a25, s15, r9, o6, n5) {
                var l2 = this, h2 = this.w;
                s15 || (s15 = t75.attr("pathFrom")), r9 || (r9 = t75.attr("pathTo"));
                var c2 = function(t) {
                    return "radar" === h2.config.chart.type && (o6 = 1), "M 0 ".concat(h2.globals.gridHeight);
                };
                (!s15 || s15.indexOf("undefined") > -1 || s15.indexOf("NaN") > -1) && (s15 = c2()), (!r9 || r9.indexOf("undefined") > -1 || r9.indexOf("NaN") > -1) && (r9 = c2()), h2.globals.shouldAnimate || (o6 = 1), t75.plot(s15).animate(1, h2.globals.easing, n5).plot(s15).animate(o6, h2.globals.easing, n5).plot(r9).afterAll(function() {
                    x.isNumber(i31) ? i31 === h2.globals.series[h2.globals.maxValsInArrayIndex].length - 2 && h2.globals.shouldAnimate && l2.animationCompleted(t75) : "none" !== a25 && h2.globals.shouldAnimate && (!h2.globals.comboCharts && e50 === h2.globals.series.length - 1 || h2.globals.comboCharts) && l2.animationCompleted(t75), l2.showDelayedElements();
                });
            }
        }
    ]), t63;
}(), v = function() {
    function t76(e51) {
        a(this, t76), this.ctx = e51, this.w = e51.w;
    }
    return r(t76, [
        {
            key: "getDefaultFilter",
            value: function(t77, e52) {
                var i32 = this.w;
                t77.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i32.config.states.normal.filter ? this.applyFilter(t77, e52, i32.config.states.normal.filter.type, i32.config.states.normal.filter.value) : i32.config.chart.dropShadow.enabled && this.dropShadow(t77, i32.config.chart.dropShadow, e52);
            }
        },
        {
            key: "addNormalFilter",
            value: function(t78, e53) {
                var i33 = this.w;
                i33.config.chart.dropShadow.enabled && !t78.node.classList.contains("apexcharts-marker") && this.dropShadow(t78, i33.config.chart.dropShadow, e53);
            }
        },
        {
            key: "addLightenFilter",
            value: function(t79, e54, i34) {
                var a26 = this, s16 = this.w, r10 = i34.intensity;
                t79.unfilter(!0);
                new window.SVG.Filter;
                t79.filter(function(t80) {
                    var i35 = s16.config.chart.dropShadow;
                    (i35.enabled ? a26.addShadow(t80, e54, i35) : t80).componentTransfer({
                        rgb: {
                            type: "linear",
                            slope: 1.5,
                            intercept: r10
                        }
                    });
                }), t79.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t79.filterer.node);
            }
        },
        {
            key: "addDarkenFilter",
            value: function(t81, e55, i36) {
                var a27 = this, s17 = this.w, r11 = i36.intensity;
                t81.unfilter(!0);
                new window.SVG.Filter;
                t81.filter(function(t82) {
                    var i37 = s17.config.chart.dropShadow;
                    (i37.enabled ? a27.addShadow(t82, e55, i37) : t82).componentTransfer({
                        rgb: {
                            type: "linear",
                            slope: r11
                        }
                    });
                }), t81.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t81.filterer.node);
            }
        },
        {
            key: "applyFilter",
            value: function(t83, e56, i38) {
                var a28 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
                switch(i38){
                    case "none":
                        this.addNormalFilter(t83, e56);
                        break;
                    case "lighten":
                        this.addLightenFilter(t83, e56, {
                            intensity: a28
                        });
                        break;
                    case "darken":
                        this.addDarkenFilter(t83, e56, {
                            intensity: a28
                        });
                }
            }
        },
        {
            key: "addShadow",
            value: function(t84, e, i39) {
                var a29 = i39.blur, s18 = i39.top, r12 = i39.left, o7 = i39.color, n6 = i39.opacity, l3 = t84.flood(Array.isArray(o7) ? o7[e] : o7, n6).composite(t84.sourceAlpha, "in").offset(r12, s18).gaussianBlur(a29).merge(t84.source);
                return t84.blend(t84.source, l3);
            }
        },
        {
            key: "dropShadow",
            value: function(t85, e57) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a30 = e57.top, s19 = e57.left, r13 = e57.blur, o8 = e57.color, n7 = e57.opacity, l4 = e57.noUserSpaceOnUse, h3 = this.w;
                return t85.unfilter(!0), x.isIE() && "radialBar" === h3.config.chart.type || (o8 = Array.isArray(o8) ? o8[i] : o8, t85.filter(function(t86) {
                    var e58 = null;
                    e58 = x.isSafari() || x.isFirefox() || x.isIE() ? t86.flood(o8, n7).composite(t86.sourceAlpha, "in").offset(s19, a30).gaussianBlur(r13) : t86.flood(o8, n7).composite(t86.sourceAlpha, "in").offset(s19, a30).gaussianBlur(r13).merge(t86.source), t86.blend(t86.source, e58);
                }), l4 || t85.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t85.filterer.node)), t85;
            }
        },
        {
            key: "setSelectionFilter",
            value: function(t87, e59, i40) {
                var a31 = this.w;
                if (void 0 !== a31.globals.selectedDataPoints[e59] && a31.globals.selectedDataPoints[e59].indexOf(i40) > -1) {
                    t87.node.setAttribute("selected", !0);
                    var s20 = a31.config.states.active.filter;
                    "none" !== s20 && this.applyFilter(t87, e59, s20.type, s20.value);
                }
            }
        },
        {
            key: "_scaleFilterSize",
            value: function(t88) {
                !function(e60) {
                    for(var i41 in e60)e60.hasOwnProperty(i41) && t88.setAttribute(i41, e60[i41]);
                }({
                    width: "200%",
                    height: "200%",
                    x: "-50%",
                    y: "-50%"
                });
            }
        }
    ]), t76;
}(), m = function() {
    function t89(e61) {
        a(this, t89), this.ctx = e61, this.w = e61.w;
    }
    return r(t89, [
        {
            key: "drawLine",
            value: function(t90, e62, i42, a32) {
                var s21 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8", r14 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o9 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, n8 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "butt", l5 = this.w, h4 = l5.globals.dom.Paper.line().attr({
                    x1: t90,
                    y1: e62,
                    x2: i42,
                    y2: a32,
                    stroke: s21,
                    "stroke-dasharray": r14,
                    "stroke-width": o9,
                    "stroke-linecap": n8
                });
                return h4;
            }
        },
        {
            key: "drawRect",
            value: function() {
                var t91 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e63 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i43 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a33 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s22 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r15 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe", o10 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, n9 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, l6 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, h5 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, c3 = this.w, d1 = c3.globals.dom.Paper.rect();
                return d1.attr({
                    x: t91,
                    y: e63,
                    width: i43 > 0 ? i43 : 0,
                    height: a33 > 0 ? a33 : 0,
                    rx: s22,
                    ry: s22,
                    opacity: o10,
                    "stroke-width": null !== n9 ? n9 : 0,
                    stroke: null !== l6 ? l6 : "none",
                    "stroke-dasharray": h5
                }), d1.node.setAttribute("fill", r15), d1;
            }
        },
        {
            key: "drawPolygon",
            value: function(t92) {
                var e64 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1", i44 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a34 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", s23 = this.w, r16 = s23.globals.dom.Paper.polygon(t92).attr({
                    fill: a34,
                    stroke: e64,
                    "stroke-width": i44
                });
                return r16;
            }
        },
        {
            key: "drawCircle",
            value: function(t93) {
                var e65 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i45 = this.w;
                t93 < 0 && (t93 = 0);
                var a35 = i45.globals.dom.Paper.circle(2 * t93);
                return null !== e65 && a35.attr(e65), a35;
            }
        },
        {
            key: "drawPath",
            value: function(t94) {
                var e66 = t94.d, i46 = void 0 === e66 ? "" : e66, a36 = t94.stroke, s24 = void 0 === a36 ? "#a8a8a8" : a36, r17 = t94.strokeWidth, o11 = void 0 === r17 ? 1 : r17, n10 = t94.fill, l7 = t94.fillOpacity, h6 = void 0 === l7 ? 1 : l7, c4 = t94.strokeOpacity, d2 = void 0 === c4 ? 1 : c4, g1 = t94.classes, u1 = t94.strokeLinecap, f1 = void 0 === u1 ? null : u1, p1 = t94.strokeDashArray, x1 = void 0 === p1 ? 0 : p1, b1 = this.w;
                return null === f1 && (f1 = b1.config.stroke.lineCap), (i46.indexOf("undefined") > -1 || i46.indexOf("NaN") > -1) && (i46 = "M 0 ".concat(b1.globals.gridHeight)), b1.globals.dom.Paper.path(i46).attr({
                    fill: n10,
                    "fill-opacity": h6,
                    stroke: s24,
                    "stroke-opacity": d2,
                    "stroke-linecap": f1,
                    "stroke-width": o11,
                    "stroke-dasharray": x1,
                    class: g1
                });
            }
        },
        {
            key: "group",
            value: function() {
                var t95 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e67 = this.w, i47 = e67.globals.dom.Paper.group();
                return null !== t95 && i47.attr(t95), i47;
            }
        },
        {
            key: "move",
            value: function(t96, e68) {
                var i48 = [
                    "M",
                    t96,
                    e68
                ].join(" ");
                return i48;
            }
        },
        {
            key: "line",
            value: function(t97, e69) {
                var i49 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a37 = null;
                return null === i49 ? a37 = [
                    "L",
                    t97,
                    e69
                ].join(" ") : "H" === i49 ? a37 = [
                    "H",
                    t97
                ].join(" ") : "V" === i49 && (a37 = [
                    "V",
                    e69
                ].join(" ")), a37;
            }
        },
        {
            key: "curve",
            value: function(t98, e70, i50, a38, s25, r18) {
                var o12 = [
                    "C",
                    t98,
                    e70,
                    i50,
                    a38,
                    s25,
                    r18
                ].join(" ");
                return o12;
            }
        },
        {
            key: "quadraticCurve",
            value: function(t99, e71, i51, a39) {
                return [
                    "Q",
                    t99,
                    e71,
                    i51,
                    a39
                ].join(" ");
            }
        },
        {
            key: "arc",
            value: function(t100, e72, i52, a40, s26, r19, o13) {
                var n11 = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], l8 = "A";
                n11 && (l8 = "a");
                var h7 = [
                    l8,
                    t100,
                    e72,
                    i52,
                    a40,
                    s26,
                    r19,
                    o13
                ].join(" ");
                return h7;
            }
        },
        {
            key: "renderPaths",
            value: function(t101) {
                var i53, a41 = t101.j, s27 = t101.realIndex, r20 = t101.pathFrom, o14 = t101.pathTo, n12 = t101.stroke, l9 = t101.strokeWidth, h8 = t101.strokeLinecap, c5 = t101.fill, d3 = t101.animationDelay, g2 = t101.initialSpeed, u2 = t101.dataChangeSpeed, f2 = t101.className, p2 = t101.shouldClipToGrid, x2 = void 0 === p2 || p2, m1 = t101.bindEventsOnPaths, y1 = void 0 === m1 || m1, w1 = t101.drawShadow, k1 = void 0 === w1 || w1, A1 = this.w, S1 = new v(this.ctx), C1 = new b(this.ctx), L1 = this.w.config.chart.animations.enabled, P1 = L1 && this.w.config.chart.animations.dynamicAnimation.enabled, T1 = !!(L1 && !A1.globals.resized || P1 && A1.globals.dataChanged && A1.globals.shouldAnimate);
                T1 ? i53 = r20 : (i53 = o14, A1.globals.animationEnded = !0);
                var M1 = A1.config.stroke.dashArray, I1 = 0;
                I1 = Array.isArray(M1) ? M1[s27] : A1.config.stroke.dashArray;
                var z1 = this.drawPath({
                    d: i53,
                    stroke: n12,
                    strokeWidth: l9,
                    fill: c5,
                    fillOpacity: 1,
                    classes: f2,
                    strokeLinecap: h8,
                    strokeDashArray: I1
                });
                if (z1.attr("index", s27), x2 && z1.attr({
                    "clip-path": "url(#gridRectMask".concat(A1.globals.cuid, ")")
                }), "none" !== A1.config.states.normal.filter.type) S1.getDefaultFilter(z1, s27);
                else if (A1.config.chart.dropShadow.enabled && k1 && (!A1.config.chart.dropShadow.enabledOnSeries || A1.config.chart.dropShadow.enabledOnSeries && -1 !== A1.config.chart.dropShadow.enabledOnSeries.indexOf(s27))) {
                    var E1 = A1.config.chart.dropShadow;
                    S1.dropShadow(z1, E1, s27);
                }
                y1 && (z1.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, z1)), z1.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, z1)), z1.node.addEventListener("mousedown", this.pathMouseDown.bind(this, z1))), z1.attr({
                    pathTo: o14,
                    pathFrom: r20
                });
                var X1 = {
                    el: z1,
                    j: a41,
                    realIndex: s27,
                    pathFrom: r20,
                    pathTo: o14,
                    fill: c5,
                    strokeWidth: l9,
                    delay: d3
                };
                return !L1 || A1.globals.resized || A1.globals.dataChanged ? !A1.globals.resized && A1.globals.dataChanged || C1.showDelayedElements() : C1.animatePathsGradually(e(e({
                }, X1), {
                }, {
                    speed: g2
                })), A1.globals.dataChanged && P1 && T1 && C1.animatePathsGradually(e(e({
                }, X1), {
                }, {
                    speed: u2
                })), z1;
            }
        },
        {
            key: "drawPattern",
            value: function(t102, e73, i54) {
                var a42 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8", s28 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r21 = this.w, o15 = r21.globals.dom.Paper.pattern(e73, i54, function(r22) {
                    "horizontalLines" === t102 ? r22.line(0, 0, i54, 0).stroke({
                        color: a42,
                        width: s28 + 1
                    }) : "verticalLines" === t102 ? r22.line(0, 0, 0, e73).stroke({
                        color: a42,
                        width: s28 + 1
                    }) : "slantedLines" === t102 ? r22.line(0, 0, e73, i54).stroke({
                        color: a42,
                        width: s28
                    }) : "squares" === t102 ? r22.rect(e73, i54).fill("none").stroke({
                        color: a42,
                        width: s28
                    }) : "circles" === t102 && r22.circle(e73).fill("none").stroke({
                        color: a42,
                        width: s28
                    });
                });
                return o15;
            }
        },
        {
            key: "drawGradient",
            value: function(t103, e74, i55, a43, s29) {
                var r23, o16 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, n13 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, l10 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, c6 = this.w;
                e74.length < 9 && 0 === e74.indexOf("#") && (e74 = x.hexToRgba(e74, a43)), i55.length < 9 && 0 === i55.indexOf("#") && (i55 = x.hexToRgba(i55, s29));
                var d4 = 0, g3 = 1, u3 = 1, f3 = null;
                null !== n13 && (d4 = void 0 !== n13[0] ? n13[0] / 100 : 0, g3 = void 0 !== n13[1] ? n13[1] / 100 : 1, u3 = void 0 !== n13[2] ? n13[2] / 100 : 1, f3 = void 0 !== n13[3] ? n13[3] / 100 : null);
                var p3 = !("donut" !== c6.config.chart.type && "pie" !== c6.config.chart.type && "polarArea" !== c6.config.chart.type && "bubble" !== c6.config.chart.type);
                if (r23 = null === l10 || 0 === l10.length ? c6.globals.dom.Paper.gradient(p3 ? "radial" : "linear", function(t104) {
                    t104.at(d4, e74, a43), t104.at(g3, i55, s29), t104.at(u3, i55, s29), null !== f3 && t104.at(f3, e74, a43);
                }) : c6.globals.dom.Paper.gradient(p3 ? "radial" : "linear", function(t105) {
                    (Array.isArray(l10[h]) ? l10[h] : l10).forEach(function(e75) {
                        t105.at(e75.offset / 100, e75.color, e75.opacity);
                    });
                }), p3) {
                    var b2 = c6.globals.gridWidth / 2, v1 = c6.globals.gridHeight / 2;
                    "bubble" !== c6.config.chart.type ? r23.attr({
                        gradientUnits: "userSpaceOnUse",
                        cx: b2,
                        cy: v1,
                        r: o16
                    }) : r23.attr({
                        cx: 0.5,
                        cy: 0.5,
                        r: 0.8,
                        fx: 0.2,
                        fy: 0.2
                    });
                } else "vertical" === t103 ? r23.from(0, 0).to(0, 1) : "diagonal" === t103 ? r23.from(0, 0).to(1, 1) : "horizontal" === t103 ? r23.from(0, 1).to(1, 1) : "diagonal2" === t103 && r23.from(1, 0).to(0, 1);
                return r23;
            }
        },
        {
            key: "drawText",
            value: function(t106) {
                var e76, i56 = t106.x, a44 = t106.y, s30 = t106.text, r24 = t106.textAnchor, o17 = t106.fontSize, n14 = t106.fontFamily, l11 = t106.fontWeight, h9 = t106.foreColor, c7 = t106.opacity, d5 = t106.cssClass, g4 = void 0 === d5 ? "" : d5, u4 = t106.isPlainText, f4 = void 0 === u4 || u4, p4 = this.w;
                return void 0 === s30 && (s30 = ""), r24 || (r24 = "start"), h9 && h9.length || (h9 = p4.config.chart.foreColor), n14 = n14 || p4.config.chart.fontFamily, l11 = l11 || "regular", (e76 = Array.isArray(s30) ? p4.globals.dom.Paper.text(function(t107) {
                    for(var e77 = 0; e77 < s30.length; e77++)0 === e77 ? t107.tspan(s30[e77]) : t107.tspan(s30[e77]).newLine();
                }) : f4 ? p4.globals.dom.Paper.plain(s30) : p4.globals.dom.Paper.text(function(t108) {
                    return t108.tspan(s30);
                })).attr({
                    x: i56,
                    y: a44,
                    "text-anchor": r24,
                    "dominant-baseline": "auto",
                    "font-size": o17,
                    "font-family": n14,
                    "font-weight": l11,
                    fill: h9,
                    class: "apexcharts-text " + g4
                }), e76.node.style.fontFamily = n14, e76.node.style.opacity = c7, e76;
            }
        },
        {
            key: "drawMarker",
            value: function(t109, e78, i57) {
                t109 = t109 || 0;
                var a45 = i57.pSize || 0, s31 = null;
                if ("square" === i57.shape || "rect" === i57.shape) {
                    var r25 = void 0 === i57.pRadius ? a45 / 2 : i57.pRadius;
                    null !== e78 && a45 || (a45 = 0, r25 = 0);
                    var o18 = 1.2 * a45 + r25, n15 = this.drawRect(o18, o18, o18, o18, r25);
                    n15.attr({
                        x: t109 - o18 / 2,
                        y: e78 - o18 / 2,
                        cx: t109,
                        cy: e78,
                        class: i57.class ? i57.class : "",
                        fill: i57.pointFillColor,
                        "fill-opacity": i57.pointFillOpacity ? i57.pointFillOpacity : 1,
                        stroke: i57.pointStrokeColor,
                        "stroke-width": i57.pointStrokeWidth ? i57.pointStrokeWidth : 0,
                        "stroke-opacity": i57.pointStrokeOpacity ? i57.pointStrokeOpacity : 1
                    }), s31 = n15;
                } else "circle" !== i57.shape && i57.shape || (x.isNumber(e78) || (a45 = 0, e78 = 0), s31 = this.drawCircle(a45, {
                    cx: t109,
                    cy: e78,
                    class: i57.class ? i57.class : "",
                    stroke: i57.pointStrokeColor,
                    fill: i57.pointFillColor,
                    "fill-opacity": i57.pointFillOpacity ? i57.pointFillOpacity : 1,
                    "stroke-width": i57.pointStrokeWidth ? i57.pointStrokeWidth : 0,
                    "stroke-opacity": i57.pointStrokeOpacity ? i57.pointStrokeOpacity : 1
                }));
                return s31;
            }
        },
        {
            key: "pathMouseEnter",
            value: function(t110, e79) {
                var i58 = this.w, a46 = new v(this.ctx), s32 = parseInt(t110.node.getAttribute("index"), 10), r26 = parseInt(t110.node.getAttribute("j"), 10);
                if ("function" == typeof i58.config.chart.events.dataPointMouseEnter && i58.config.chart.events.dataPointMouseEnter(e79, this.ctx, {
                    seriesIndex: s32,
                    dataPointIndex: r26,
                    w: i58
                }), this.ctx.events.fireEvent("dataPointMouseEnter", [
                    e79,
                    this.ctx,
                    {
                        seriesIndex: s32,
                        dataPointIndex: r26,
                        w: i58
                    }
                ]), ("none" === i58.config.states.active.filter.type || "true" !== t110.node.getAttribute("selected")) && "none" !== i58.config.states.hover.filter.type && !i58.globals.isTouchDevice) {
                    var o19 = i58.config.states.hover.filter;
                    a46.applyFilter(t110, s32, o19.type, o19.value);
                }
            }
        },
        {
            key: "pathMouseLeave",
            value: function(t111, e80) {
                var i59 = this.w, a47 = new v(this.ctx), s33 = parseInt(t111.node.getAttribute("index"), 10), r27 = parseInt(t111.node.getAttribute("j"), 10);
                "function" == typeof i59.config.chart.events.dataPointMouseLeave && i59.config.chart.events.dataPointMouseLeave(e80, this.ctx, {
                    seriesIndex: s33,
                    dataPointIndex: r27,
                    w: i59
                }), this.ctx.events.fireEvent("dataPointMouseLeave", [
                    e80,
                    this.ctx,
                    {
                        seriesIndex: s33,
                        dataPointIndex: r27,
                        w: i59
                    }
                ]), "none" !== i59.config.states.active.filter.type && "true" === t111.node.getAttribute("selected") || "none" !== i59.config.states.hover.filter.type && a47.getDefaultFilter(t111, s33);
            }
        },
        {
            key: "pathMouseDown",
            value: function(t112, e81) {
                var i60 = this.w, a48 = new v(this.ctx), s34 = parseInt(t112.node.getAttribute("index"), 10), r28 = parseInt(t112.node.getAttribute("j"), 10), o20 = "false";
                if ("true" === t112.node.getAttribute("selected")) {
                    if (t112.node.setAttribute("selected", "false"), i60.globals.selectedDataPoints[s34].indexOf(r28) > -1) {
                        var n16 = i60.globals.selectedDataPoints[s34].indexOf(r28);
                        i60.globals.selectedDataPoints[s34].splice(n16, 1);
                    }
                } else {
                    if (!i60.config.states.active.allowMultipleDataPointsSelection && i60.globals.selectedDataPoints.length > 0) {
                        i60.globals.selectedDataPoints = [];
                        var l12 = i60.globals.dom.Paper.select(".apexcharts-series path").members, h10 = i60.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, c8 = function(t113) {
                            Array.prototype.forEach.call(t113, function(t114) {
                                t114.node.setAttribute("selected", "false"), a48.getDefaultFilter(t114, s34);
                            });
                        };
                        c8(l12), c8(h10);
                    }
                    t112.node.setAttribute("selected", "true"), o20 = "true", void 0 === i60.globals.selectedDataPoints[s34] && (i60.globals.selectedDataPoints[s34] = []), i60.globals.selectedDataPoints[s34].push(r28);
                }
                if ("true" === o20) {
                    var d6 = i60.config.states.active.filter;
                    "none" !== d6 && a48.applyFilter(t112, s34, d6.type, d6.value);
                } else "none" !== i60.config.states.active.filter.type && a48.getDefaultFilter(t112, s34);
                "function" == typeof i60.config.chart.events.dataPointSelection && i60.config.chart.events.dataPointSelection(e81, this.ctx, {
                    selectedDataPoints: i60.globals.selectedDataPoints,
                    seriesIndex: s34,
                    dataPointIndex: r28,
                    w: i60
                }), e81 && this.ctx.events.fireEvent("dataPointSelection", [
                    e81,
                    this.ctx,
                    {
                        selectedDataPoints: i60.globals.selectedDataPoints,
                        seriesIndex: s34,
                        dataPointIndex: r28,
                        w: i60
                    }
                ]);
            }
        },
        {
            key: "rotateAroundCenter",
            value: function(t115) {
                var e82 = {
                };
                return t115 && "function" == typeof t115.getBBox && (e82 = t115.getBBox()), {
                    x: e82.x + e82.width / 2,
                    y: e82.y + e82.height / 2
                };
            }
        },
        {
            key: "getTextRects",
            value: function(t116, e83, i61, a49) {
                var s35 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r29 = this.w, o21 = this.drawText({
                    x: -200,
                    y: -200,
                    text: t116,
                    textAnchor: "start",
                    fontSize: e83,
                    fontFamily: i61,
                    foreColor: "#fff",
                    opacity: 0
                });
                a49 && o21.attr("transform", a49), r29.globals.dom.Paper.add(o21);
                var n17 = o21.bbox();
                return s35 || (n17 = o21.node.getBoundingClientRect()), o21.remove(), {
                    width: n17.width,
                    height: n17.height
                };
            }
        },
        {
            key: "placeTextWithEllipsis",
            value: function(t117, e84, i62) {
                if ("function" == typeof t117.getComputedTextLength && (t117.textContent = e84, e84.length > 0 && t117.getComputedTextLength() >= i62 / 1.1)) {
                    for(var a50 = e84.length - 3; a50 > 0; a50 -= 3)if (t117.getSubStringLength(0, a50) <= i62 / 1.1) return void (t117.textContent = e84.substring(0, a50) + "...");
                    t117.textContent = ".";
                }
            }
        }
    ], [
        {
            key: "setAttrs",
            value: function(t118, e85) {
                for(var i63 in e85)e85.hasOwnProperty(i63) && t118.setAttribute(i63, e85[i63]);
            }
        }
    ]), t89;
}(), y = function() {
    function t119(e86) {
        a(this, t119), this.w = e86.w, this.annoCtx = e86;
    }
    return r(t119, [
        {
            key: "setOrientations",
            value: function(t120) {
                var e87 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i64 = this.w;
                if ("vertical" === t120.label.orientation) {
                    var a51 = null !== e87 ? e87 : 0, s36 = i64.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a51, "']"));
                    if (null !== s36) {
                        var r30 = s36.getBoundingClientRect();
                        s36.setAttribute("x", parseFloat(s36.getAttribute("x")) - r30.height + 4), "top" === t120.label.position ? s36.setAttribute("y", parseFloat(s36.getAttribute("y")) + r30.width) : s36.setAttribute("y", parseFloat(s36.getAttribute("y")) - r30.width);
                        var o22 = this.annoCtx.graphics.rotateAroundCenter(s36), n18 = o22.x, l13 = o22.y;
                        s36.setAttribute("transform", "rotate(-90 ".concat(n18, " ").concat(l13, ")"));
                    }
                }
            }
        },
        {
            key: "addBackgroundToAnno",
            value: function(t121, e88) {
                var i65 = this.w;
                if (!t121 || void 0 === e88.label.text || void 0 !== e88.label.text && !String(e88.label.text).trim()) return null;
                var a52 = i65.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s37 = t121.getBoundingClientRect(), r31 = e88.label.style.padding.left, o23 = e88.label.style.padding.right, n19 = e88.label.style.padding.top, l14 = e88.label.style.padding.bottom;
                "vertical" === e88.label.orientation && (n19 = e88.label.style.padding.left, l14 = e88.label.style.padding.right, r31 = e88.label.style.padding.top, o23 = e88.label.style.padding.bottom);
                var h11 = s37.left - a52.left - r31, c9 = s37.top - a52.top - n19, d7 = this.annoCtx.graphics.drawRect(h11 - i65.globals.barPadForNumericAxis, c9, s37.width + r31 + o23, s37.height + n19 + l14, e88.label.borderRadius, e88.label.style.background, 1, e88.label.borderWidth, e88.label.borderColor, 0);
                return e88.id && d7.node.classList.add(x.escapeString(e88.id)), d7;
            }
        },
        {
            key: "annotationsBackground",
            value: function() {
                var t122 = this, e89 = this.w, i66 = function(i67, a53, s38) {
                    var r32 = e89.globals.dom.baseEl.querySelector(".apexcharts-".concat(s38, "-annotations .apexcharts-").concat(s38, "-annotation-label[rel='").concat(a53, "']"));
                    if (r32) {
                        var o24 = r32.parentNode, n20 = t122.addBackgroundToAnno(r32, i67);
                        n20 && (o24.insertBefore(n20.node, r32), i67.label.mouseEnter && n20.node.addEventListener("mouseenter", i67.label.mouseEnter.bind(t122, i67)), i67.label.mouseLeave && n20.node.addEventListener("mouseleave", i67.label.mouseLeave.bind(t122, i67)));
                    }
                };
                e89.config.annotations.xaxis.map(function(t123, e90) {
                    i66(t123, e90, "xaxis");
                }), e89.config.annotations.yaxis.map(function(t124, e91) {
                    i66(t124, e91, "yaxis");
                }), e89.config.annotations.points.map(function(t125, e92) {
                    i66(t125, e92, "point");
                });
            }
        },
        {
            key: "getStringX",
            value: function(t126) {
                var e93 = this.w, i68 = t126;
                e93.config.xaxis.convertedCatToNumeric && e93.globals.categoryLabels.length && (t126 = e93.globals.categoryLabels.indexOf(t126) + 1);
                var a54 = e93.globals.labels.indexOf(t126), s39 = e93.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (a54 + 1) + ")");
                return s39 && (i68 = parseFloat(s39.getAttribute("x"))), i68;
            }
        }
    ]), t119;
}(), w = function() {
    function t127(e94) {
        a(this, t127), this.w = e94.w, this.annoCtx = e94, this.invertAxis = this.annoCtx.invertAxis;
    }
    return r(t127, [
        {
            key: "addXaxisAnnotation",
            value: function(t128, e95, i69) {
                var a55 = this.w, s40 = this.invertAxis ? a55.globals.minY : a55.globals.minX, r33 = this.invertAxis ? a55.globals.maxY : a55.globals.maxX, o25 = this.invertAxis ? a55.globals.yRange[0] : a55.globals.xRange, n21 = (t128.x - s40) / (o25 / a55.globals.gridWidth);
                this.annoCtx.inversedReversedAxis && (n21 = (r33 - t128.x) / (o25 / a55.globals.gridWidth));
                var l15 = t128.label.text;
                "category" !== a55.config.xaxis.type && !a55.config.xaxis.convertedCatToNumeric || this.invertAxis || a55.globals.dataFormatXNumeric || (n21 = this.annoCtx.helpers.getStringX(t128.x));
                var h12 = t128.strokeDashArray;
                if (x.isNumber(n21)) {
                    if (null === t128.x2 || void 0 === t128.x2) {
                        var c10 = this.annoCtx.graphics.drawLine(n21 + t128.offsetX, 0 + t128.offsetY, n21 + t128.offsetX, a55.globals.gridHeight + t128.offsetY, t128.borderColor, h12, t128.borderWidth);
                        e95.appendChild(c10.node), t128.id && c10.node.classList.add(t128.id);
                    } else {
                        var d8 = (t128.x2 - s40) / (o25 / a55.globals.gridWidth);
                        if (this.annoCtx.inversedReversedAxis && (d8 = (r33 - t128.x2) / (o25 / a55.globals.gridWidth)), "category" !== a55.config.xaxis.type && !a55.config.xaxis.convertedCatToNumeric || this.invertAxis || a55.globals.dataFormatXNumeric || (d8 = this.annoCtx.helpers.getStringX(t128.x2)), d8 < n21) {
                            var g5 = n21;
                            n21 = d8, d8 = g5;
                        }
                        var u5 = this.annoCtx.graphics.drawRect(n21 + t128.offsetX, 0 + t128.offsetY, d8 - n21, a55.globals.gridHeight + t128.offsetY, 0, t128.fillColor, t128.opacity, 1, t128.borderColor, h12);
                        u5.node.classList.add("apexcharts-annotation-rect"), u5.attr("clip-path", "url(#gridRectMask".concat(a55.globals.cuid, ")")), e95.appendChild(u5.node), t128.id && u5.node.classList.add(t128.id);
                    }
                    var f5 = "top" === t128.label.position ? 4 : a55.globals.gridHeight, p5 = this.annoCtx.graphics.getTextRects(l15, parseFloat(t128.label.style.fontSize)), b3 = this.annoCtx.graphics.drawText({
                        x: n21 + t128.label.offsetX,
                        y: f5 + t128.label.offsetY - ("vertical" === t128.label.orientation ? "top" === t128.label.position ? p5.width / 2 - 12 : -p5.width / 2 : 0),
                        text: l15,
                        textAnchor: t128.label.textAnchor,
                        fontSize: t128.label.style.fontSize,
                        fontFamily: t128.label.style.fontFamily,
                        fontWeight: t128.label.style.fontWeight,
                        foreColor: t128.label.style.color,
                        cssClass: "apexcharts-xaxis-annotation-label ".concat(t128.label.style.cssClass, " ").concat(t128.id ? t128.id : "")
                    });
                    b3.attr({
                        rel: i69
                    }), e95.appendChild(b3.node), this.annoCtx.helpers.setOrientations(t128, i69);
                }
            }
        },
        {
            key: "drawXAxisAnnotations",
            value: function() {
                var t129 = this, e96 = this.w, i70 = this.annoCtx.graphics.group({
                    class: "apexcharts-xaxis-annotations"
                });
                return e96.config.annotations.xaxis.map(function(e97, a56) {
                    t129.addXaxisAnnotation(e97, i70.node, a56);
                }), i70;
            }
        }
    ]), t127;
}(), k = function() {
    function t130(e98) {
        a(this, t130), this.ctx = e98, this.w = e98.w;
    }
    return r(t130, [
        {
            key: "getStackedSeriesTotals",
            value: function() {
                var t131 = this.w, e99 = [];
                if (0 === t131.globals.series.length) return e99;
                for(var i71 = 0; i71 < t131.globals.series[t131.globals.maxValsInArrayIndex].length; i71++){
                    for(var a57 = 0, s41 = 0; s41 < t131.globals.series.length; s41++)void 0 !== t131.globals.series[s41][i71] && (a57 += t131.globals.series[s41][i71]);
                    e99.push(a57);
                }
                return t131.globals.stackedSeriesTotals = e99, e99;
            }
        },
        {
            key: "getSeriesTotalByIndex",
            value: function() {
                var t132 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return null === t132 ? this.w.config.series.reduce(function(t133, e100) {
                    return t133 + e100;
                }, 0) : this.w.globals.series[t132].reduce(function(t134, e101) {
                    return t134 + e101;
                }, 0);
            }
        },
        {
            key: "isSeriesNull",
            value: function() {
                var t135 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return 0 === (null === t135 ? this.w.config.series.filter(function(t136) {
                    return null !== t136;
                }) : this.w.config.series[t135].data.filter(function(t137) {
                    return null !== t137;
                })).length;
            }
        },
        {
            key: "seriesHaveSameValues",
            value: function(t138) {
                return this.w.globals.series[t138].every(function(t139, e, i72) {
                    return t139 === i72[0];
                });
            }
        },
        {
            key: "getCategoryLabels",
            value: function(t140) {
                var e102 = this.w, i73 = t140.slice();
                return e102.config.xaxis.convertedCatToNumeric && (i73 = t140.map(function(t141, i) {
                    return e102.config.xaxis.labels.formatter(t141 - e102.globals.minX + 1);
                })), i73;
            }
        },
        {
            key: "getLargestSeries",
            value: function() {
                var t142 = this.w;
                t142.globals.maxValsInArrayIndex = t142.globals.series.map(function(t143) {
                    return t143.length;
                }).indexOf(Math.max.apply(Math, t142.globals.series.map(function(t144) {
                    return t144.length;
                })));
            }
        },
        {
            key: "getLargestMarkerSize",
            value: function() {
                var t145 = this.w, e103 = 0;
                return t145.globals.markers.size.forEach(function(t146) {
                    e103 = Math.max(e103, t146);
                }), t145.config.markers.discrete && t145.config.markers.discrete.length && t145.config.markers.discrete.forEach(function(t147) {
                    e103 = Math.max(e103, t147.size);
                }), e103 > 0 && (e103 += t145.config.markers.hover.sizeOffset + 1), t145.globals.markers.largestSize = e103, e103;
            }
        },
        {
            key: "getSeriesTotals",
            value: function() {
                var t148 = this.w;
                t148.globals.seriesTotals = t148.globals.series.map(function(t149, e) {
                    var i74 = 0;
                    if (Array.isArray(t149)) for(var a58 = 0; a58 < t149.length; a58++)i74 += t149[a58];
                    else i74 += t149;
                    return i74;
                });
            }
        },
        {
            key: "getSeriesTotalsXRange",
            value: function(t150, e104) {
                var i75 = this.w;
                return i75.globals.series.map(function(a59, s) {
                    for(var r34 = 0, o26 = 0; o26 < a59.length; o26++)i75.globals.seriesX[s][o26] > t150 && i75.globals.seriesX[s][o26] < e104 && (r34 += a59[o26]);
                    return r34;
                });
            }
        },
        {
            key: "getPercentSeries",
            value: function() {
                var t151 = this.w;
                t151.globals.seriesPercent = t151.globals.series.map(function(e105, i) {
                    var a60 = [];
                    if (Array.isArray(e105)) for(var s42 = 0; s42 < e105.length; s42++){
                        var r35 = t151.globals.stackedSeriesTotals[s42], o27 = 0;
                        r35 && (o27 = 100 * e105[s42] / r35), a60.push(o27);
                    }
                    else {
                        var n22 = 100 * e105 / t151.globals.seriesTotals.reduce(function(t152, e106) {
                            return t152 + e106;
                        }, 0);
                        a60.push(n22);
                    }
                    return a60;
                });
            }
        },
        {
            key: "getCalculatedRatios",
            value: function() {
                var t153, e107, i76, a61, s43 = this.w.globals, r36 = [], o28 = 0, n23 = [], l16 = 0.1, h13 = 0;
                if (s43.yRange = [], s43.isMultipleYAxis) for(var c11 = 0; c11 < s43.minYArr.length; c11++)s43.yRange.push(Math.abs(s43.minYArr[c11] - s43.maxYArr[c11])), n23.push(0);
                else s43.yRange.push(Math.abs(s43.minY - s43.maxY));
                s43.xRange = Math.abs(s43.maxX - s43.minX), s43.zRange = Math.abs(s43.maxZ - s43.minZ);
                for(var d9 = 0; d9 < s43.yRange.length; d9++)r36.push(s43.yRange[d9] / s43.gridHeight);
                if (e107 = s43.xRange / s43.gridWidth, i76 = Math.abs(s43.initialMaxX - s43.initialMinX) / s43.gridWidth, t153 = s43.yRange / s43.gridWidth, a61 = s43.xRange / s43.gridHeight, (o28 = s43.zRange / s43.gridHeight * 16) || (o28 = 1), s43.minY !== Number.MIN_VALUE && 0 !== Math.abs(s43.minY) && (s43.hasNegs = !0), s43.isMultipleYAxis) {
                    n23 = [];
                    for(var g6 = 0; g6 < r36.length; g6++)n23.push(-s43.minYArr[g6] / r36[g6]);
                } else n23.push(-s43.minY / r36[0]), s43.minY !== Number.MIN_VALUE && 0 !== Math.abs(s43.minY) && (l16 = -s43.minY / t153, h13 = s43.minX / e107);
                return {
                    yRatio: r36,
                    invertedYRatio: t153,
                    zRatio: o28,
                    xRatio: e107,
                    initialXRatio: i76,
                    invertedXRatio: a61,
                    baseLineInvertedY: l16,
                    baseLineY: n23,
                    baseLineX: h13
                };
            }
        },
        {
            key: "getLogSeries",
            value: function(t154) {
                var e108 = this, i77 = this.w;
                return i77.globals.seriesLog = t154.map(function(t155, a62) {
                    return i77.config.yaxis[a62] && i77.config.yaxis[a62].logarithmic ? t155.map(function(t156) {
                        return null === t156 ? null : e108.getLogVal(i77.config.yaxis[a62].logBase, t156, a62);
                    }) : t155;
                }), i77.globals.invalidLogScale ? t154 : i77.globals.seriesLog;
            }
        },
        {
            key: "getBaseLog",
            value: function(t157, e109) {
                return Math.log(e109) / Math.log(t157);
            }
        },
        {
            key: "getLogVal",
            value: function(t158, e110, i) {
                if (0 === e110) return 0;
                var a63 = this.w, s44 = 0 === a63.globals.minYArr[i] ? -1 : this.getBaseLog(t158, a63.globals.minYArr[i]), r37 = (0 === a63.globals.maxYArr[i] ? 0 : this.getBaseLog(t158, a63.globals.maxYArr[i])) - s44;
                return (this.getBaseLog(t158, e110) - s44) / r37;
            }
        },
        {
            key: "getLogYRatios",
            value: function(t159) {
                var e111 = this, i78 = this.w, a64 = this.w.globals;
                return a64.yLogRatio = t159.slice(), a64.logYRange = a64.yRange.map(function(t160, s) {
                    if (i78.config.yaxis[s] && e111.w.config.yaxis[s].logarithmic) {
                        var r38, o29 = -Number.MAX_VALUE, n24 = Number.MIN_VALUE;
                        return a64.seriesLog.forEach(function(t161, e) {
                            t161.forEach(function(t162) {
                                i78.config.yaxis[e] && i78.config.yaxis[e].logarithmic && (o29 = Math.max(t162, o29), n24 = Math.min(t162, n24));
                            });
                        }), r38 = Math.pow(a64.yRange[s], Math.abs(n24 - o29) / a64.yRange[s]), a64.yLogRatio[s] = r38 / a64.gridHeight, r38;
                    }
                }), a64.invalidLogScale ? t159.slice() : a64.yLogRatio;
            }
        }
    ], [
        {
            key: "checkComboSeries",
            value: function(t163) {
                var e112 = !1, i79 = 0, a65 = 0;
                return t163.length && void 0 !== t163[0].type && t163.forEach(function(t164) {
                    "bar" !== t164.type && "column" !== t164.type && "candlestick" !== t164.type && "boxPlot" !== t164.type || i79++, void 0 !== t164.type && a65++;
                }), a65 > 0 && (e112 = !0), {
                    comboBarCount: i79,
                    comboCharts: e112
                };
            }
        },
        {
            key: "extendArrayProps",
            value: function(t165, e113, i80) {
                return e113.yaxis && (e113 = t165.extendYAxis(e113, i80)), e113.annotations && (e113.annotations.yaxis && (e113 = t165.extendYAxisAnnotations(e113)), e113.annotations.xaxis && (e113 = t165.extendXAxisAnnotations(e113)), e113.annotations.points && (e113 = t165.extendPointAnnotations(e113))), e113;
            }
        }
    ]), t130;
}(), A = function() {
    function t166(e114) {
        a(this, t166), this.w = e114.w, this.annoCtx = e114;
    }
    return r(t166, [
        {
            key: "addYaxisAnnotation",
            value: function(t167, e115, i81) {
                var a66, s45 = this.w, r39 = t167.strokeDashArray, o30 = this._getY1Y2("y1", t167), n25 = t167.label.text;
                if (null === t167.y2 || void 0 === t167.y2) {
                    var l17 = this.annoCtx.graphics.drawLine(0 + t167.offsetX, o30 + t167.offsetY, this._getYAxisAnnotationWidth(t167), o30 + t167.offsetY, t167.borderColor, r39, t167.borderWidth);
                    e115.appendChild(l17.node), t167.id && l17.node.classList.add(t167.id);
                } else {
                    if ((a66 = this._getY1Y2("y2", t167)) > o30) {
                        var h14 = o30;
                        o30 = a66, a66 = h14;
                    }
                    var c12 = this.annoCtx.graphics.drawRect(0 + t167.offsetX, a66 + t167.offsetY, this._getYAxisAnnotationWidth(t167), o30 - a66, 0, t167.fillColor, t167.opacity, 1, t167.borderColor, r39);
                    c12.node.classList.add("apexcharts-annotation-rect"), c12.attr("clip-path", "url(#gridRectMask".concat(s45.globals.cuid, ")")), e115.appendChild(c12.node), t167.id && c12.node.classList.add(t167.id);
                }
                var d10 = "right" === t167.label.position ? s45.globals.gridWidth : 0, g7 = this.annoCtx.graphics.drawText({
                    x: d10 + t167.label.offsetX,
                    y: (null != a66 ? a66 : o30) + t167.label.offsetY - 3,
                    text: n25,
                    textAnchor: t167.label.textAnchor,
                    fontSize: t167.label.style.fontSize,
                    fontFamily: t167.label.style.fontFamily,
                    fontWeight: t167.label.style.fontWeight,
                    foreColor: t167.label.style.color,
                    cssClass: "apexcharts-yaxis-annotation-label ".concat(t167.label.style.cssClass, " ").concat(t167.id ? t167.id : "")
                });
                g7.attr({
                    rel: i81
                }), e115.appendChild(g7.node);
            }
        },
        {
            key: "_getY1Y2",
            value: function(t168, e116) {
                var i82, a67 = "y1" === t168 ? e116.y : e116.y2, s46 = this.w;
                if (this.annoCtx.invertAxis) {
                    var r40 = s46.globals.labels.indexOf(a67);
                    s46.config.xaxis.convertedCatToNumeric && (r40 = s46.globals.categoryLabels.indexOf(a67));
                    var o31 = s46.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (r40 + 1) + ")");
                    o31 && (i82 = parseFloat(o31.getAttribute("y")));
                } else {
                    var n26;
                    if (s46.config.yaxis[e116.yAxisIndex].logarithmic) n26 = (a67 = new k(this.annoCtx.ctx).getLogVal(a67, e116.yAxisIndex)) / s46.globals.yLogRatio[e116.yAxisIndex];
                    else n26 = (a67 - s46.globals.minYArr[e116.yAxisIndex]) / (s46.globals.yRange[e116.yAxisIndex] / s46.globals.gridHeight);
                    i82 = s46.globals.gridHeight - n26, s46.config.yaxis[e116.yAxisIndex] && s46.config.yaxis[e116.yAxisIndex].reversed && (i82 = n26);
                }
                return i82;
            }
        },
        {
            key: "_getYAxisAnnotationWidth",
            value: function(t169) {
                var e117 = this.w;
                e117.globals.gridWidth;
                return (t169.width.indexOf("%") > -1 ? e117.globals.gridWidth * parseInt(t169.width, 10) / 100 : parseInt(t169.width, 10)) + t169.offsetX;
            }
        },
        {
            key: "drawYAxisAnnotations",
            value: function() {
                var t170 = this, e118 = this.w, i83 = this.annoCtx.graphics.group({
                    class: "apexcharts-yaxis-annotations"
                });
                return e118.config.annotations.yaxis.map(function(e119, a68) {
                    t170.addYaxisAnnotation(e119, i83.node, a68);
                }), i83;
            }
        }
    ]), t166;
}(), S = function() {
    function t171(e120) {
        a(this, t171), this.w = e120.w, this.annoCtx = e120;
    }
    return r(t171, [
        {
            key: "addPointAnnotation",
            value: function(t172, e121, i84) {
                var a69 = this.w, s47 = 0, r41 = 0, o32 = 0;
                this.annoCtx.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts.");
                var n27 = parseFloat(t172.y);
                if ("string" == typeof t172.x || "category" === a69.config.xaxis.type || a69.config.xaxis.convertedCatToNumeric) {
                    var l18 = a69.globals.labels.indexOf(t172.x);
                    a69.config.xaxis.convertedCatToNumeric && (l18 = a69.globals.categoryLabels.indexOf(t172.x)), s47 = this.annoCtx.helpers.getStringX(t172.x), null === t172.y && (n27 = a69.globals.series[t172.seriesIndex][l18]);
                } else s47 = (t172.x - a69.globals.minX) / (a69.globals.xRange / a69.globals.gridWidth);
                for(var h15, c13 = [], d11 = 0, g8 = 0; g8 <= t172.seriesIndex; g8++){
                    var u6 = a69.config.yaxis[g8].seriesName;
                    if (u6) for(var f6 = g8 + 1; f6 <= t172.seriesIndex; f6++)a69.config.yaxis[f6].seriesName === u6 && -1 === c13.indexOf(u6) && (d11++, c13.push(u6));
                }
                if (a69.config.yaxis[t172.yAxisIndex].logarithmic) h15 = (n27 = new k(this.annoCtx.ctx).getLogVal(n27, t172.yAxisIndex)) / a69.globals.yLogRatio[t172.yAxisIndex];
                else {
                    var p = t172.yAxisIndex + d11;
                    h15 = (n27 - a69.globals.minYArr[p]) / (a69.globals.yRange[p] / a69.globals.gridHeight);
                }
                if (r41 = a69.globals.gridHeight - h15 - parseFloat(t172.label.style.fontSize) - t172.marker.size, o32 = a69.globals.gridHeight - h15, a69.config.yaxis[t172.yAxisIndex] && a69.config.yaxis[t172.yAxisIndex].reversed && (r41 = h15 + parseFloat(t172.label.style.fontSize) + t172.marker.size, o32 = h15), x.isNumber(s47)) {
                    var b4 = {
                        pSize: t172.marker.size,
                        pointStrokeWidth: t172.marker.strokeWidth,
                        pointFillColor: t172.marker.fillColor,
                        pointStrokeColor: t172.marker.strokeColor,
                        shape: t172.marker.shape,
                        pRadius: t172.marker.radius,
                        class: "apexcharts-point-annotation-marker ".concat(t172.marker.cssClass, " ").concat(t172.id ? t172.id : "")
                    }, v2 = this.annoCtx.graphics.drawMarker(s47 + t172.marker.offsetX, o32 + t172.marker.offsetY, b4);
                    e121.appendChild(v2.node);
                    var m2 = t172.label.text ? t172.label.text : "", y2 = this.annoCtx.graphics.drawText({
                        x: s47 + t172.label.offsetX,
                        y: r41 + t172.label.offsetY,
                        text: m2,
                        textAnchor: t172.label.textAnchor,
                        fontSize: t172.label.style.fontSize,
                        fontFamily: t172.label.style.fontFamily,
                        fontWeight: t172.label.style.fontWeight,
                        foreColor: t172.label.style.color,
                        cssClass: "apexcharts-point-annotation-label ".concat(t172.label.style.cssClass, " ").concat(t172.id ? t172.id : "")
                    });
                    if (y2.attr({
                        rel: i84
                    }), e121.appendChild(y2.node), t172.customSVG.SVG) {
                        var w2 = this.annoCtx.graphics.group({
                            class: "apexcharts-point-annotations-custom-svg " + t172.customSVG.cssClass
                        });
                        w2.attr({
                            transform: "translate(".concat(s47 + t172.customSVG.offsetX, ", ").concat(r41 + t172.customSVG.offsetY, ")")
                        }), w2.node.innerHTML = t172.customSVG.SVG, e121.appendChild(w2.node);
                    }
                    if (t172.image.path) {
                        var A2 = t172.image.width ? t172.image.width : 20, S2 = t172.image.height ? t172.image.height : 20;
                        v2 = this.annoCtx.addImage({
                            x: s47 + t172.image.offsetX - A2 / 2,
                            y: r41 + t172.image.offsetY - S2 / 2,
                            width: A2,
                            height: S2,
                            path: t172.image.path,
                            appendTo: ".apexcharts-point-annotations"
                        });
                    }
                    t172.mouseEnter && v2.node.addEventListener("mouseenter", t172.mouseEnter.bind(this, t172)), t172.mouseLeave && v2.node.addEventListener("mouseleave", t172.mouseLeave.bind(this, t172));
                }
            }
        },
        {
            key: "drawPointAnnotations",
            value: function() {
                var t173 = this, e122 = this.w, i85 = this.annoCtx.graphics.group({
                    class: "apexcharts-point-annotations"
                });
                return e122.config.annotations.points.map(function(e123, a70) {
                    t173.addPointAnnotation(e123, i85.node, a70);
                }), i85;
            }
        }
    ]), t171;
}();
var C = {
    name: "en",
    options: {
        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        shortDays: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        toolbar: {
            exportToSVG: "Download SVG",
            exportToPNG: "Download PNG",
            exportToCSV: "Download CSV",
            menu: "Menu",
            selection: "Selection",
            selectionZoom: "Selection Zoom",
            zoomIn: "Zoom In",
            zoomOut: "Zoom Out",
            pan: "Panning",
            reset: "Reset Zoom"
        }
    }
}, L = function() {
    function t174() {
        a(this, t174), this.yAxis = {
            show: !0,
            showAlways: !1,
            showForNullSeries: !0,
            seriesName: void 0,
            opposite: !1,
            reversed: !1,
            logarithmic: !1,
            logBase: 10,
            tickAmount: void 0,
            forceNiceScale: !1,
            max: void 0,
            min: void 0,
            floating: !1,
            decimalsInFloat: void 0,
            labels: {
                show: !0,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                align: void 0,
                rotate: 0,
                padding: 20,
                style: {
                    colors: [],
                    fontSize: "11px",
                    fontWeight: 400,
                    fontFamily: void 0,
                    cssClass: ""
                },
                formatter: void 0
            },
            axisBorder: {
                show: !1,
                color: "#e0e0e0",
                width: 1,
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: !1,
                color: "#e0e0e0",
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            title: {
                text: void 0,
                rotate: -90,
                offsetY: 0,
                offsetX: 0,
                style: {
                    color: void 0,
                    fontSize: "11px",
                    fontWeight: 900,
                    fontFamily: void 0,
                    cssClass: ""
                }
            },
            tooltip: {
                enabled: !1,
                offsetX: 0
            },
            crosshairs: {
                show: !0,
                position: "front",
                stroke: {
                    color: "#b6b6b6",
                    width: 1,
                    dashArray: 0
                }
            }
        }, this.pointAnnotation = {
            id: void 0,
            x: 0,
            y: null,
            yAxisIndex: 0,
            seriesIndex: 0,
            mouseEnter: void 0,
            mouseLeave: void 0,
            marker: {
                size: 4,
                fillColor: "#fff",
                strokeWidth: 2,
                strokeColor: "#333",
                shape: "circle",
                offsetX: 0,
                offsetY: 0,
                radius: 2,
                cssClass: ""
            },
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: void 0,
                textAnchor: "middle",
                offsetX: 0,
                offsetY: 0,
                mouseEnter: void 0,
                mouseLeave: void 0,
                style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: {
                        left: 5,
                        right: 5,
                        top: 2,
                        bottom: 2
                    }
                }
            },
            customSVG: {
                SVG: void 0,
                cssClass: void 0,
                offsetX: 0,
                offsetY: 0
            },
            image: {
                path: void 0,
                width: 20,
                height: 20,
                offsetX: 0,
                offsetY: 0
            }
        }, this.yAxisAnnotation = {
            id: void 0,
            y: 0,
            y2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            width: "100%",
            yAxisIndex: 0,
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: void 0,
                textAnchor: "end",
                position: "right",
                offsetX: 0,
                offsetY: -3,
                mouseEnter: void 0,
                mouseLeave: void 0,
                style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: {
                        left: 5,
                        right: 5,
                        top: 2,
                        bottom: 2
                    }
                }
            }
        }, this.xAxisAnnotation = {
            id: void 0,
            x: 0,
            x2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: void 0,
                textAnchor: "middle",
                orientation: "vertical",
                position: "top",
                offsetX: 0,
                offsetY: 0,
                mouseEnter: void 0,
                mouseLeave: void 0,
                style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: {
                        left: 5,
                        right: 5,
                        top: 2,
                        bottom: 2
                    }
                }
            }
        }, this.text = {
            x: 0,
            y: 0,
            text: "",
            textAnchor: "start",
            foreColor: void 0,
            fontSize: "13px",
            fontFamily: void 0,
            fontWeight: 400,
            appendTo: ".apexcharts-annotations",
            backgroundColor: "transparent",
            borderColor: "#c2c2c2",
            borderRadius: 0,
            borderWidth: 0,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2
        };
    }
    return r(t174, [
        {
            key: "init",
            value: function() {
                return {
                    annotations: {
                        position: "front",
                        yaxis: [
                            this.yAxisAnnotation
                        ],
                        xaxis: [
                            this.xAxisAnnotation
                        ],
                        points: [
                            this.pointAnnotation
                        ],
                        texts: [],
                        images: [],
                        shapes: []
                    },
                    chart: {
                        animations: {
                            enabled: !0,
                            easing: "easeinout",
                            speed: 800,
                            animateGradually: {
                                delay: 150,
                                enabled: !0
                            },
                            dynamicAnimation: {
                                enabled: !0,
                                speed: 350
                            }
                        },
                        background: "transparent",
                        locales: [
                            C
                        ],
                        defaultLocale: "en",
                        dropShadow: {
                            enabled: !1,
                            enabledOnSeries: void 0,
                            top: 2,
                            left: 2,
                            blur: 4,
                            color: "#000",
                            opacity: 0.35
                        },
                        events: {
                            animationEnd: void 0,
                            beforeMount: void 0,
                            mounted: void 0,
                            updated: void 0,
                            click: void 0,
                            mouseMove: void 0,
                            mouseLeave: void 0,
                            legendClick: void 0,
                            markerClick: void 0,
                            selection: void 0,
                            dataPointSelection: void 0,
                            dataPointMouseEnter: void 0,
                            dataPointMouseLeave: void 0,
                            beforeZoom: void 0,
                            beforeResetZoom: void 0,
                            zoomed: void 0,
                            scrolled: void 0,
                            brushScrolled: void 0
                        },
                        foreColor: "#373d3f",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        height: "auto",
                        parentHeightOffset: 15,
                        redrawOnParentResize: !0,
                        redrawOnWindowResize: !0,
                        id: void 0,
                        group: void 0,
                        offsetX: 0,
                        offsetY: 0,
                        selection: {
                            enabled: !1,
                            type: "x",
                            fill: {
                                color: "#24292e",
                                opacity: 0.1
                            },
                            stroke: {
                                width: 1,
                                color: "#24292e",
                                opacity: 0.4,
                                dashArray: 3
                            },
                            xaxis: {
                                min: void 0,
                                max: void 0
                            },
                            yaxis: {
                                min: void 0,
                                max: void 0
                            }
                        },
                        sparkline: {
                            enabled: !1
                        },
                        brush: {
                            enabled: !1,
                            autoScaleYaxis: !0,
                            target: void 0
                        },
                        stacked: !1,
                        stackType: "normal",
                        toolbar: {
                            show: !0,
                            offsetX: 0,
                            offsetY: 0,
                            tools: {
                                download: !0,
                                selection: !0,
                                zoom: !0,
                                zoomin: !0,
                                zoomout: !0,
                                pan: !0,
                                reset: !0,
                                customIcons: []
                            },
                            export: {
                                csv: {
                                    filename: void 0,
                                    columnDelimiter: ",",
                                    headerCategory: "category",
                                    headerValue: "value",
                                    dateFormatter: function(t175) {
                                        return new Date(t175).toDateString();
                                    }
                                },
                                png: {
                                    filename: void 0
                                },
                                svg: {
                                    filename: void 0
                                }
                            },
                            autoSelected: "zoom"
                        },
                        type: "line",
                        width: "100%",
                        zoom: {
                            enabled: !0,
                            type: "x",
                            autoScaleYaxis: !1,
                            zoomedArea: {
                                fill: {
                                    color: "#90CAF9",
                                    opacity: 0.4
                                },
                                stroke: {
                                    color: "#0D47A1",
                                    opacity: 0.4,
                                    width: 1
                                }
                            }
                        }
                    },
                    plotOptions: {
                        area: {
                            fillTo: "origin"
                        },
                        bar: {
                            horizontal: !1,
                            columnWidth: "70%",
                            barHeight: "70%",
                            distributed: !1,
                            borderRadius: 0,
                            rangeBarOverlap: !0,
                            rangeBarGroupRows: !1,
                            colors: {
                                ranges: [],
                                backgroundBarColors: [],
                                backgroundBarOpacity: 1,
                                backgroundBarRadius: 0
                            },
                            dataLabels: {
                                position: "top",
                                maxItems: 100,
                                hideOverflowingLabels: !0,
                                orientation: "horizontal"
                            }
                        },
                        bubble: {
                            minBubbleRadius: void 0,
                            maxBubbleRadius: void 0
                        },
                        candlestick: {
                            colors: {
                                upward: "#00B746",
                                downward: "#EF403C"
                            },
                            wick: {
                                useFillColor: !0
                            }
                        },
                        boxPlot: {
                            colors: {
                                upper: "#00E396",
                                lower: "#008FFB"
                            }
                        },
                        heatmap: {
                            radius: 2,
                            enableShades: !0,
                            shadeIntensity: 0.5,
                            reverseNegativeShade: !1,
                            distributed: !1,
                            useFillColorAsStroke: !1,
                            colorScale: {
                                inverse: !1,
                                ranges: [],
                                min: void 0,
                                max: void 0
                            }
                        },
                        treemap: {
                            enableShades: !0,
                            shadeIntensity: 0.5,
                            distributed: !1,
                            reverseNegativeShade: !1,
                            useFillColorAsStroke: !1,
                            colorScale: {
                                inverse: !1,
                                ranges: [],
                                min: void 0,
                                max: void 0
                            }
                        },
                        radialBar: {
                            inverseOrder: !1,
                            startAngle: 0,
                            endAngle: 360,
                            offsetX: 0,
                            offsetY: 0,
                            hollow: {
                                margin: 5,
                                size: "50%",
                                background: "transparent",
                                image: void 0,
                                imageWidth: 150,
                                imageHeight: 150,
                                imageOffsetX: 0,
                                imageOffsetY: 0,
                                imageClipped: !0,
                                position: "front",
                                dropShadow: {
                                    enabled: !1,
                                    top: 0,
                                    left: 0,
                                    blur: 3,
                                    color: "#000",
                                    opacity: 0.5
                                }
                            },
                            track: {
                                show: !0,
                                startAngle: void 0,
                                endAngle: void 0,
                                background: "#f2f2f2",
                                strokeWidth: "97%",
                                opacity: 1,
                                margin: 5,
                                dropShadow: {
                                    enabled: !1,
                                    top: 0,
                                    left: 0,
                                    blur: 3,
                                    color: "#000",
                                    opacity: 0.5
                                }
                            },
                            dataLabels: {
                                show: !0,
                                name: {
                                    show: !0,
                                    fontSize: "16px",
                                    fontFamily: void 0,
                                    fontWeight: 600,
                                    color: void 0,
                                    offsetY: 0,
                                    formatter: function(t176) {
                                        return t176;
                                    }
                                },
                                value: {
                                    show: !0,
                                    fontSize: "14px",
                                    fontFamily: void 0,
                                    fontWeight: 400,
                                    color: void 0,
                                    offsetY: 16,
                                    formatter: function(t177) {
                                        return t177 + "%";
                                    }
                                },
                                total: {
                                    show: !1,
                                    label: "Total",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    fontFamily: void 0,
                                    color: void 0,
                                    formatter: function(t178) {
                                        return t178.globals.seriesTotals.reduce(function(t179, e124) {
                                            return t179 + e124;
                                        }, 0) / t178.globals.series.length + "%";
                                    }
                                }
                            }
                        },
                        pie: {
                            customScale: 1,
                            offsetX: 0,
                            offsetY: 0,
                            startAngle: 0,
                            endAngle: 360,
                            expandOnClick: !0,
                            dataLabels: {
                                offset: 0,
                                minAngleToShowLabel: 10
                            },
                            donut: {
                                size: "65%",
                                background: "transparent",
                                labels: {
                                    show: !1,
                                    name: {
                                        show: !0,
                                        fontSize: "16px",
                                        fontFamily: void 0,
                                        fontWeight: 600,
                                        color: void 0,
                                        offsetY: -10,
                                        formatter: function(t180) {
                                            return t180;
                                        }
                                    },
                                    value: {
                                        show: !0,
                                        fontSize: "20px",
                                        fontFamily: void 0,
                                        fontWeight: 400,
                                        color: void 0,
                                        offsetY: 10,
                                        formatter: function(t181) {
                                            return t181;
                                        }
                                    },
                                    total: {
                                        show: !1,
                                        showAlways: !1,
                                        label: "Total",
                                        fontSize: "16px",
                                        fontWeight: 400,
                                        fontFamily: void 0,
                                        color: void 0,
                                        formatter: function(t182) {
                                            return t182.globals.seriesTotals.reduce(function(t183, e125) {
                                                return t183 + e125;
                                            }, 0);
                                        }
                                    }
                                }
                            }
                        },
                        polarArea: {
                            rings: {
                                strokeWidth: 1,
                                strokeColor: "#e8e8e8"
                            },
                            spokes: {
                                strokeWidth: 1,
                                connectorColors: "#e8e8e8"
                            }
                        },
                        radar: {
                            size: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            polygons: {
                                strokeWidth: 1,
                                strokeColors: "#e8e8e8",
                                connectorColors: "#e8e8e8",
                                fill: {
                                    colors: void 0
                                }
                            }
                        }
                    },
                    colors: void 0,
                    dataLabels: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        formatter: function(t184) {
                            return null !== t184 ? t184 : "";
                        },
                        textAnchor: "middle",
                        distributed: !1,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            fontSize: "12px",
                            fontFamily: void 0,
                            fontWeight: 600,
                            colors: void 0
                        },
                        background: {
                            enabled: !0,
                            foreColor: "#fff",
                            borderRadius: 2,
                            padding: 4,
                            opacity: 0.9,
                            borderWidth: 1,
                            borderColor: "#fff",
                            dropShadow: {
                                enabled: !1,
                                top: 1,
                                left: 1,
                                blur: 1,
                                color: "#000",
                                opacity: 0.45
                            }
                        },
                        dropShadow: {
                            enabled: !1,
                            top: 1,
                            left: 1,
                            blur: 1,
                            color: "#000",
                            opacity: 0.45
                        }
                    },
                    fill: {
                        type: "solid",
                        colors: void 0,
                        opacity: 0.85,
                        gradient: {
                            shade: "dark",
                            type: "horizontal",
                            shadeIntensity: 0.5,
                            gradientToColors: void 0,
                            inverseColors: !0,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [
                                0,
                                50,
                                100
                            ],
                            colorStops: []
                        },
                        image: {
                            src: [],
                            width: void 0,
                            height: void 0
                        },
                        pattern: {
                            style: "squares",
                            width: 6,
                            height: 6,
                            strokeWidth: 2
                        }
                    },
                    forecastDataPoints: {
                        count: 0,
                        fillOpacity: 0.5,
                        strokeWidth: void 0,
                        dashArray: 4
                    },
                    grid: {
                        show: !0,
                        borderColor: "#e0e0e0",
                        strokeDashArray: 0,
                        position: "back",
                        xaxis: {
                            lines: {
                                show: !1
                            }
                        },
                        yaxis: {
                            lines: {
                                show: !0
                            }
                        },
                        row: {
                            colors: void 0,
                            opacity: 0.5
                        },
                        column: {
                            colors: void 0,
                            opacity: 0.5
                        },
                        padding: {
                            top: 0,
                            right: 10,
                            bottom: 0,
                            left: 12
                        }
                    },
                    labels: [],
                    legend: {
                        show: !0,
                        showForSingleSeries: !1,
                        showForNullSeries: !0,
                        showForZeroSeries: !0,
                        floating: !1,
                        position: "bottom",
                        horizontalAlign: "center",
                        inverseOrder: !1,
                        fontSize: "12px",
                        fontFamily: void 0,
                        fontWeight: 400,
                        width: void 0,
                        height: void 0,
                        formatter: void 0,
                        tooltipHoverFormatter: void 0,
                        offsetX: -20,
                        offsetY: 4,
                        customLegendItems: [],
                        labels: {
                            colors: void 0,
                            useSeriesColors: !1
                        },
                        markers: {
                            width: 12,
                            height: 12,
                            strokeWidth: 0,
                            fillColors: void 0,
                            strokeColor: "#fff",
                            radius: 12,
                            customHTML: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            onClick: void 0
                        },
                        itemMargin: {
                            horizontal: 5,
                            vertical: 2
                        },
                        onItemClick: {
                            toggleDataSeries: !0
                        },
                        onItemHover: {
                            highlightDataSeries: !0
                        }
                    },
                    markers: {
                        discrete: [],
                        size: 0,
                        colors: void 0,
                        strokeColors: "#fff",
                        strokeWidth: 2,
                        strokeOpacity: 0.9,
                        strokeDashArray: 0,
                        fillOpacity: 1,
                        shape: "circle",
                        width: 8,
                        height: 8,
                        radius: 2,
                        offsetX: 0,
                        offsetY: 0,
                        onClick: void 0,
                        onDblClick: void 0,
                        showNullDataPoints: !0,
                        hover: {
                            size: void 0,
                            sizeOffset: 3
                        }
                    },
                    noData: {
                        text: void 0,
                        align: "center",
                        verticalAlign: "middle",
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            color: void 0,
                            fontSize: "14px",
                            fontFamily: void 0
                        }
                    },
                    responsive: [],
                    series: void 0,
                    states: {
                        normal: {
                            filter: {
                                type: "none",
                                value: 0
                            }
                        },
                        hover: {
                            filter: {
                                type: "lighten",
                                value: 0.1
                            }
                        },
                        active: {
                            allowMultipleDataPointsSelection: !1,
                            filter: {
                                type: "darken",
                                value: 0.5
                            }
                        }
                    },
                    title: {
                        text: void 0,
                        align: "left",
                        margin: 5,
                        offsetX: 0,
                        offsetY: 0,
                        floating: !1,
                        style: {
                            fontSize: "14px",
                            fontWeight: 900,
                            fontFamily: void 0,
                            color: void 0
                        }
                    },
                    subtitle: {
                        text: void 0,
                        align: "left",
                        margin: 5,
                        offsetX: 0,
                        offsetY: 30,
                        floating: !1,
                        style: {
                            fontSize: "12px",
                            fontWeight: 400,
                            fontFamily: void 0,
                            color: void 0
                        }
                    },
                    stroke: {
                        show: !0,
                        curve: "smooth",
                        lineCap: "butt",
                        width: 2,
                        colors: void 0,
                        dashArray: 0
                    },
                    tooltip: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        shared: !0,
                        followCursor: !1,
                        intersect: !1,
                        inverseOrder: !1,
                        custom: void 0,
                        fillSeriesColor: !1,
                        theme: "light",
                        style: {
                            fontSize: "12px",
                            fontFamily: void 0
                        },
                        onDatasetHover: {
                            highlightDataSeries: !1
                        },
                        x: {
                            show: !0,
                            format: "dd MMM",
                            formatter: void 0
                        },
                        y: {
                            formatter: void 0,
                            title: {
                                formatter: function(t185) {
                                    return t185 ? t185 + ": " : "";
                                }
                            }
                        },
                        z: {
                            formatter: void 0,
                            title: "Size: "
                        },
                        marker: {
                            show: !0,
                            fillColors: void 0
                        },
                        items: {
                            display: "flex"
                        },
                        fixed: {
                            enabled: !1,
                            position: "topRight",
                            offsetX: 0,
                            offsetY: 0
                        }
                    },
                    xaxis: {
                        type: "category",
                        categories: [],
                        convertedCatToNumeric: !1,
                        offsetX: 0,
                        offsetY: 0,
                        overwriteCategories: void 0,
                        labels: {
                            show: !0,
                            rotate: -45,
                            rotateAlways: !1,
                            hideOverlappingLabels: !0,
                            trim: !1,
                            minHeight: void 0,
                            maxHeight: 120,
                            showDuplicates: !0,
                            style: {
                                colors: [],
                                fontSize: "12px",
                                fontWeight: 400,
                                fontFamily: void 0,
                                cssClass: ""
                            },
                            offsetX: 0,
                            offsetY: 0,
                            format: void 0,
                            formatter: void 0,
                            datetimeUTC: !0,
                            datetimeFormatter: {
                                year: "yyyy",
                                month: "MMM 'yy",
                                day: "dd MMM",
                                hour: "HH:mm",
                                minute: "HH:mm:ss",
                                second: "HH:mm:ss"
                            }
                        },
                        axisBorder: {
                            show: !0,
                            color: "#e0e0e0",
                            width: "100%",
                            height: 1,
                            offsetX: 0,
                            offsetY: 0
                        },
                        axisTicks: {
                            show: !0,
                            color: "#e0e0e0",
                            height: 6,
                            offsetX: 0,
                            offsetY: 0
                        },
                        tickAmount: void 0,
                        tickPlacement: "on",
                        min: void 0,
                        max: void 0,
                        range: void 0,
                        floating: !1,
                        decimalsInFloat: void 0,
                        position: "bottom",
                        title: {
                            text: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: void 0,
                                fontSize: "12px",
                                fontWeight: 900,
                                fontFamily: void 0,
                                cssClass: ""
                            }
                        },
                        crosshairs: {
                            show: !0,
                            width: 1,
                            position: "back",
                            opacity: 0.9,
                            stroke: {
                                color: "#b6b6b6",
                                width: 1,
                                dashArray: 3
                            },
                            fill: {
                                type: "solid",
                                color: "#B1B9C4",
                                gradient: {
                                    colorFrom: "#D8E3F0",
                                    colorTo: "#BED1E6",
                                    stops: [
                                        0,
                                        100
                                    ],
                                    opacityFrom: 0.4,
                                    opacityTo: 0.5
                                }
                            },
                            dropShadow: {
                                enabled: !1,
                                left: 0,
                                top: 0,
                                blur: 1,
                                opacity: 0.4
                            }
                        },
                        tooltip: {
                            enabled: !0,
                            offsetY: 0,
                            formatter: void 0,
                            style: {
                                fontSize: "12px",
                                fontFamily: void 0
                            }
                        }
                    },
                    yaxis: this.yAxis,
                    theme: {
                        mode: "light",
                        palette: "palette1",
                        monochrome: {
                            enabled: !1,
                            color: "#008FFB",
                            shadeTo: "light",
                            shadeIntensity: 0.65
                        }
                    }
                };
            }
        }
    ]), t174;
}(), P = function() {
    function t186(e126) {
        a(this, t186), this.ctx = e126, this.w = e126.w, this.graphics = new m(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new y(this), this.xAxisAnnotations = new w(this), this.yAxisAnnotations = new A(this), this.pointsAnnotations = new S(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }
    return r(t186, [
        {
            key: "drawAxesAnnotations",
            value: function() {
                var t187 = this.w;
                if (t187.globals.axisCharts) {
                    for(var e127 = this.yAxisAnnotations.drawYAxisAnnotations(), i86 = this.xAxisAnnotations.drawXAxisAnnotations(), a71 = this.pointsAnnotations.drawPointAnnotations(), s48 = t187.config.chart.animations.enabled, r42 = [
                        e127,
                        i86,
                        a71
                    ], o33 = [
                        i86.node,
                        e127.node,
                        a71.node
                    ], n28 = 0; n28 < 3; n28++)t187.globals.dom.elGraphical.add(r42[n28]), !s48 || t187.globals.resized || t187.globals.dataChanged || "scatter" !== t187.config.chart.type && "bubble" !== t187.config.chart.type && t187.globals.dataPoints > 1 && o33[n28].classList.add("apexcharts-element-hidden"), t187.globals.delayedElements.push({
                        el: o33[n28],
                        index: 0
                    });
                    this.helpers.annotationsBackground();
                }
            }
        },
        {
            key: "drawImageAnnos",
            value: function() {
                var t188 = this;
                this.w.config.annotations.images.map(function(e128, i87) {
                    t188.addImage(e128, i87);
                });
            }
        },
        {
            key: "drawTextAnnos",
            value: function() {
                var t189 = this;
                this.w.config.annotations.texts.map(function(e129, i88) {
                    t189.addText(e129, i88);
                });
            }
        },
        {
            key: "addXaxisAnnotation",
            value: function(t190, e130, i89) {
                this.xAxisAnnotations.addXaxisAnnotation(t190, e130, i89);
            }
        },
        {
            key: "addYaxisAnnotation",
            value: function(t191, e131, i90) {
                this.yAxisAnnotations.addYaxisAnnotation(t191, e131, i90);
            }
        },
        {
            key: "addPointAnnotation",
            value: function(t192, e132, i91) {
                this.pointsAnnotations.addPointAnnotation(t192, e132, i91);
            }
        },
        {
            key: "addText",
            value: function(t193, e) {
                var i92 = t193.x, a72 = t193.y, s49 = t193.text, r43 = t193.textAnchor, o34 = t193.foreColor, n29 = t193.fontSize, l19 = t193.fontFamily, h16 = t193.fontWeight, c14 = t193.cssClass, d12 = t193.backgroundColor, g9 = t193.borderWidth, u7 = t193.strokeDashArray, f7 = t193.borderRadius, p6 = t193.borderColor, x3 = t193.appendTo, b5 = void 0 === x3 ? ".apexcharts-annotations" : x3, v3 = t193.paddingLeft, m3 = void 0 === v3 ? 4 : v3, y3 = t193.paddingRight, w3 = void 0 === y3 ? 4 : y3, k2 = t193.paddingBottom, A3 = void 0 === k2 ? 2 : k2, S3 = t193.paddingTop, C2 = void 0 === S3 ? 2 : S3, L2 = this.w, P2 = this.graphics.drawText({
                    x: i92,
                    y: a72,
                    text: s49,
                    textAnchor: r43 || "start",
                    fontSize: n29 || "12px",
                    fontWeight: h16 || "regular",
                    fontFamily: l19 || L2.config.chart.fontFamily,
                    foreColor: o34 || L2.config.chart.foreColor,
                    cssClass: c14
                }), T2 = L2.globals.dom.baseEl.querySelector(b5);
                T2 && T2.appendChild(P2.node);
                var M2 = P2.bbox();
                if (s49) {
                    var I2 = this.graphics.drawRect(M2.x - m3, M2.y - C2, M2.width + m3 + w3, M2.height + A3 + C2, f7, d12 || "transparent", 1, g9, p6, u7);
                    T2.insertBefore(I2.node, P2.node);
                }
            }
        },
        {
            key: "addImage",
            value: function(t194, e) {
                var i93 = this.w, a73 = t194.path, s50 = t194.x, r44 = void 0 === s50 ? 0 : s50, o35 = t194.y, n30 = void 0 === o35 ? 0 : o35, l20 = t194.width, h17 = void 0 === l20 ? 20 : l20, c15 = t194.height, d13 = void 0 === c15 ? 20 : c15, g10 = t194.appendTo, u8 = void 0 === g10 ? ".apexcharts-annotations" : g10, f8 = i93.globals.dom.Paper.image(a73);
                f8.size(h17, d13).move(r44, n30);
                var p7 = i93.globals.dom.baseEl.querySelector(u8);
                return p7 && p7.appendChild(f8.node), f8;
            }
        },
        {
            key: "addXaxisAnnotationExternal",
            value: function(t195, e133, i94) {
                return this.addAnnotationExternal({
                    params: t195,
                    pushToMemory: e133,
                    context: i94,
                    type: "xaxis",
                    contextMethod: i94.addXaxisAnnotation
                }), i94;
            }
        },
        {
            key: "addYaxisAnnotationExternal",
            value: function(t196, e134, i95) {
                return this.addAnnotationExternal({
                    params: t196,
                    pushToMemory: e134,
                    context: i95,
                    type: "yaxis",
                    contextMethod: i95.addYaxisAnnotation
                }), i95;
            }
        },
        {
            key: "addPointAnnotationExternal",
            value: function(t197, e135, i96) {
                return void 0 === this.invertAxis && (this.invertAxis = i96.w.globals.isBarHorizontal), this.addAnnotationExternal({
                    params: t197,
                    pushToMemory: e135,
                    context: i96,
                    type: "point",
                    contextMethod: i96.addPointAnnotation
                }), i96;
            }
        },
        {
            key: "addAnnotationExternal",
            value: function(t198) {
                var e136 = t198.params, i97 = t198.pushToMemory, a74 = t198.context, s51 = t198.type, r45 = t198.contextMethod, o36 = a74, n31 = o36.w, l21 = n31.globals.dom.baseEl.querySelector(".apexcharts-".concat(s51, "-annotations")), h18 = l21.childNodes.length + 1, c16 = new L, d14 = Object.assign({
                }, "xaxis" === s51 ? c16.xAxisAnnotation : "yaxis" === s51 ? c16.yAxisAnnotation : c16.pointAnnotation), g11 = x.extend(d14, e136);
                switch(s51){
                    case "xaxis":
                        this.addXaxisAnnotation(g11, l21, h18);
                        break;
                    case "yaxis":
                        this.addYaxisAnnotation(g11, l21, h18);
                        break;
                    case "point":
                        this.addPointAnnotation(g11, l21, h18);
                }
                var u9 = n31.globals.dom.baseEl.querySelector(".apexcharts-".concat(s51, "-annotations .apexcharts-").concat(s51, "-annotation-label[rel='").concat(h18, "']")), f9 = this.helpers.addBackgroundToAnno(u9, g11);
                return f9 && l21.insertBefore(f9.node, u9), i97 && n31.globals.memory.methodsToExec.push({
                    context: o36,
                    id: g11.id ? g11.id : x.randomId(),
                    method: r45,
                    label: "addAnnotation",
                    params: e136
                }), a74;
            }
        },
        {
            key: "clearAnnotations",
            value: function(t199) {
                var e137 = t199.w, i98 = e137.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
                e137.globals.memory.methodsToExec.map(function(t200, i99) {
                    "addText" !== t200.label && "addAnnotation" !== t200.label || e137.globals.memory.methodsToExec.splice(i99, 1);
                }), i98 = x.listToArray(i98), Array.prototype.forEach.call(i98, function(t201) {
                    for(; t201.firstChild;)t201.removeChild(t201.firstChild);
                });
            }
        },
        {
            key: "removeAnnotation",
            value: function(t202, e138) {
                var i100 = t202.w, a75 = i100.globals.dom.baseEl.querySelectorAll(".".concat(e138));
                a75 && (i100.globals.memory.methodsToExec.map(function(t203, a76) {
                    t203.id === e138 && i100.globals.memory.methodsToExec.splice(a76, 1);
                }), Array.prototype.forEach.call(a75, function(t204) {
                    t204.parentElement.removeChild(t204);
                }));
            }
        }
    ]), t186;
}(), T = function() {
    function t205(e139) {
        a(this, t205), this.ctx = e139, this.w = e139.w, this.opts = null, this.seriesIndex = 0;
    }
    return r(t205, [
        {
            key: "clippedImgArea",
            value: function(t206) {
                var e140 = this.w, i101 = e140.config, a77 = parseInt(e140.globals.gridWidth, 10), s52 = parseInt(e140.globals.gridHeight, 10), r46 = a77 > s52 ? a77 : s52, o37 = t206.image, n32 = 0, l22 = 0;
                void 0 === t206.width && void 0 === t206.height ? void 0 !== i101.fill.image.width && void 0 !== i101.fill.image.height ? (n32 = i101.fill.image.width + 1, l22 = i101.fill.image.height) : (n32 = r46 + 1, l22 = r46) : (n32 = t206.width, l22 = t206.height);
                var h19 = document.createElementNS(e140.globals.SVGNS, "pattern");
                m.setAttrs(h19, {
                    id: t206.patternID,
                    patternUnits: t206.patternUnits ? t206.patternUnits : "userSpaceOnUse",
                    width: n32 + "px",
                    height: l22 + "px"
                });
                var c17 = document.createElementNS(e140.globals.SVGNS, "image");
                h19.appendChild(c17), c17.setAttributeNS(window.SVG.xlink, "href", o37), m.setAttrs(c17, {
                    x: 0,
                    y: 0,
                    preserveAspectRatio: "none",
                    width: n32 + "px",
                    height: l22 + "px"
                }), c17.style.opacity = t206.opacity, e140.globals.dom.elDefs.node.appendChild(h19);
            }
        },
        {
            key: "getSeriesIndex",
            value: function(t207) {
                var e141 = this.w;
                return ("bar" === e141.config.chart.type || "rangeBar" === e141.config.chart.type) && e141.config.plotOptions.bar.distributed || "heatmap" === e141.config.chart.type || "treemap" === e141.config.chart.type ? this.seriesIndex = t207.seriesNumber : this.seriesIndex = t207.seriesNumber % e141.globals.series.length, this.seriesIndex;
            }
        },
        {
            key: "fillPath",
            value: function(t208) {
                var e142 = this.w;
                this.opts = t208;
                var i102, a78, s53, r47 = this.w.config;
                this.seriesIndex = this.getSeriesIndex(t208);
                var o38 = this.getFillColors()[this.seriesIndex];
                void 0 !== e142.globals.seriesColors[this.seriesIndex] && (o38 = e142.globals.seriesColors[this.seriesIndex]), "function" == typeof o38 && (o38 = o38({
                    seriesIndex: this.seriesIndex,
                    dataPointIndex: t208.dataPointIndex,
                    value: t208.value,
                    w: e142
                }));
                var n33 = this.getFillType(this.seriesIndex), l23 = Array.isArray(r47.fill.opacity) ? r47.fill.opacity[this.seriesIndex] : r47.fill.opacity;
                t208.color && (o38 = t208.color);
                var h20 = o38;
                if (-1 === o38.indexOf("rgb") ? o38.length < 9 && (h20 = x.hexToRgba(o38, l23)) : o38.indexOf("rgba") > -1 && (l23 = x.getOpacityFromRGBA(o38)), t208.opacity && (l23 = t208.opacity), "pattern" === n33 && (a78 = this.handlePatternFill(a78, o38, l23, h20)), "gradient" === n33 && (s53 = this.handleGradientFill(o38, l23, this.seriesIndex)), "image" === n33) {
                    var c18 = r47.fill.image.src, d15 = t208.patternID ? t208.patternID : "";
                    this.clippedImgArea({
                        opacity: l23,
                        image: Array.isArray(c18) ? t208.seriesNumber < c18.length ? c18[t208.seriesNumber] : c18[0] : c18,
                        width: t208.width ? t208.width : void 0,
                        height: t208.height ? t208.height : void 0,
                        patternUnits: t208.patternUnits,
                        patternID: "pattern".concat(e142.globals.cuid).concat(t208.seriesNumber + 1).concat(d15)
                    }), i102 = "url(#pattern".concat(e142.globals.cuid).concat(t208.seriesNumber + 1).concat(d15, ")");
                } else i102 = "gradient" === n33 ? s53 : "pattern" === n33 ? a78 : h20;
                return t208.solid && (i102 = h20), i102;
            }
        },
        {
            key: "getFillType",
            value: function(t) {
                var e143 = this.w;
                return Array.isArray(e143.config.fill.type) ? e143.config.fill.type[t] : e143.config.fill.type;
            }
        },
        {
            key: "getFillColors",
            value: function() {
                var t209 = this.w, e144 = t209.config, i103 = this.opts, a79 = [];
                return t209.globals.comboCharts ? "line" === t209.config.series[this.seriesIndex].type ? Array.isArray(t209.globals.stroke.colors) ? a79 = t209.globals.stroke.colors : a79.push(t209.globals.stroke.colors) : Array.isArray(t209.globals.fill.colors) ? a79 = t209.globals.fill.colors : a79.push(t209.globals.fill.colors) : "line" === e144.chart.type ? Array.isArray(t209.globals.stroke.colors) ? a79 = t209.globals.stroke.colors : a79.push(t209.globals.stroke.colors) : Array.isArray(t209.globals.fill.colors) ? a79 = t209.globals.fill.colors : a79.push(t209.globals.fill.colors), void 0 !== i103.fillColors && (a79 = [], Array.isArray(i103.fillColors) ? a79 = i103.fillColors.slice() : a79.push(i103.fillColors)), a79;
            }
        },
        {
            key: "handlePatternFill",
            value: function(t210, e145, i104, a80) {
                var s54 = this.w.config, r = this.opts, o39 = new m(this.ctx), n34 = void 0 === s54.fill.pattern.strokeWidth ? Array.isArray(s54.stroke.width) ? s54.stroke.width[this.seriesIndex] : s54.stroke.width : Array.isArray(s54.fill.pattern.strokeWidth) ? s54.fill.pattern.strokeWidth[this.seriesIndex] : s54.fill.pattern.strokeWidth, l24 = e145;
                Array.isArray(s54.fill.pattern.style) ? t210 = void 0 !== s54.fill.pattern.style[r.seriesNumber] ? o39.drawPattern(s54.fill.pattern.style[r.seriesNumber], s54.fill.pattern.width, s54.fill.pattern.height, l24, n34, i104) : a80 : t210 = o39.drawPattern(s54.fill.pattern.style, s54.fill.pattern.width, s54.fill.pattern.height, l24, n34, i104);
                return t210;
            }
        },
        {
            key: "handleGradientFill",
            value: function(t211, e146, i105) {
                var a81, s55 = this.w.config, r48 = this.opts, o40 = new m(this.ctx), n35 = new x, l25 = s55.fill.gradient.type, h21 = t211, c19 = void 0 === s55.fill.gradient.opacityFrom ? e146 : Array.isArray(s55.fill.gradient.opacityFrom) ? s55.fill.gradient.opacityFrom[i105] : s55.fill.gradient.opacityFrom;
                h21.indexOf("rgba") > -1 && (c19 = x.getOpacityFromRGBA(h21));
                var d16 = void 0 === s55.fill.gradient.opacityTo ? e146 : Array.isArray(s55.fill.gradient.opacityTo) ? s55.fill.gradient.opacityTo[i105] : s55.fill.gradient.opacityTo;
                if (void 0 === s55.fill.gradient.gradientToColors || 0 === s55.fill.gradient.gradientToColors.length) a81 = "dark" === s55.fill.gradient.shade ? n35.shadeColor(-1 * parseFloat(s55.fill.gradient.shadeIntensity), t211.indexOf("rgb") > -1 ? x.rgb2hex(t211) : t211) : n35.shadeColor(parseFloat(s55.fill.gradient.shadeIntensity), t211.indexOf("rgb") > -1 ? x.rgb2hex(t211) : t211);
                else if (s55.fill.gradient.gradientToColors[r48.seriesNumber]) {
                    var g12 = s55.fill.gradient.gradientToColors[r48.seriesNumber];
                    a81 = g12, g12.indexOf("rgba") > -1 && (d16 = x.getOpacityFromRGBA(g12));
                } else a81 = t211;
                if (s55.fill.gradient.inverseColors) {
                    var u10 = h21;
                    h21 = a81, a81 = u10;
                }
                return h21.indexOf("rgb") > -1 && (h21 = x.rgb2hex(h21)), a81.indexOf("rgb") > -1 && (a81 = x.rgb2hex(a81)), o40.drawGradient(l25, h21, a81, c19, d16, r48.size, s55.fill.gradient.stops, s55.fill.gradient.colorStops, i105);
            }
        }
    ]), t205;
}(), M = function() {
    function t212(e147, i) {
        a(this, t212), this.ctx = e147, this.w = e147.w;
    }
    return r(t212, [
        {
            key: "setGlobalMarkerSize",
            value: function() {
                var t213 = this.w;
                if (t213.globals.markers.size = Array.isArray(t213.config.markers.size) ? t213.config.markers.size : [
                    t213.config.markers.size
                ], t213.globals.markers.size.length > 0) {
                    if (t213.globals.markers.size.length < t213.globals.series.length + 1) for(var e148 = 0; e148 <= t213.globals.series.length; e148++)void 0 === t213.globals.markers.size[e148] && t213.globals.markers.size.push(t213.globals.markers.size[0]);
                } else t213.globals.markers.size = t213.config.series.map(function(e) {
                    return t213.config.markers.size;
                });
            }
        },
        {
            key: "plotChartMarkers",
            value: function(t214, e149, i106, a82) {
                var s56, r49 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o41 = this.w, n = e149, l26 = t214, h22 = null, c20 = new m(this.ctx), d17 = o41.config.markers.discrete && o41.config.markers.discrete.length;
                if ((o41.globals.markers.size[e149] > 0 || r49 || d17) && (h22 = c20.group({
                    class: r49 || d17 ? "" : "apexcharts-series-markers"
                })).attr("clip-path", "url(#gridRectMarkerMask".concat(o41.globals.cuid, ")")), Array.isArray(l26.x)) for(var g13 = 0; g13 < l26.x.length; g13++){
                    var u11 = i106;
                    1 === i106 && 0 === g13 && (u11 = 0), 1 === i106 && 1 === g13 && (u11 = 1);
                    var f10 = "apexcharts-marker";
                    "line" !== o41.config.chart.type && "area" !== o41.config.chart.type || o41.globals.comboCharts || o41.config.tooltip.intersect || (f10 += " no-pointer-events");
                    var p8 = Array.isArray(o41.config.markers.size) ? o41.globals.markers.size[e149] > 0 : o41.config.markers.size > 0;
                    if (p8 || r49 || d17) {
                        x.isNumber(l26.y[g13]) ? f10 += " w".concat(x.randomId()) : f10 = "apexcharts-nullpoint";
                        var b6 = this.getMarkerConfig({
                            cssClass: f10,
                            seriesIndex: e149,
                            dataPointIndex: u11
                        });
                        o41.config.series[n].data[u11] && (o41.config.series[n].data[u11].fillColor && (b6.pointFillColor = o41.config.series[n].data[u11].fillColor), o41.config.series[n].data[u11].strokeColor && (b6.pointStrokeColor = o41.config.series[n].data[u11].strokeColor)), a82 && (b6.pSize = a82), (s56 = c20.drawMarker(l26.x[g13], l26.y[g13], b6)).attr("rel", u11), s56.attr("j", u11), s56.attr("index", e149), s56.node.setAttribute("default-marker-size", b6.pSize);
                        var y4 = new v(this.ctx);
                        y4.setSelectionFilter(s56, e149, u11), this.addEvents(s56), h22 && h22.add(s56);
                    } else void 0 === o41.globals.pointsArray[e149] && (o41.globals.pointsArray[e149] = []), o41.globals.pointsArray[e149].push([
                        l26.x[g13],
                        l26.y[g13]
                    ]);
                }
                return h22;
            }
        },
        {
            key: "getMarkerConfig",
            value: function(t215) {
                var e150 = t215.cssClass, i107 = t215.seriesIndex, a83 = t215.dataPointIndex, s57 = void 0 === a83 ? null : a83, r50 = t215.finishRadius, o42 = void 0 === r50 ? null : r50, n36 = this.w, l27 = this.getMarkerStyle(i107), h23 = n36.globals.markers.size[i107], c21 = n36.config.markers;
                return null !== s57 && c21.discrete.length && c21.discrete.map(function(t216) {
                    t216.seriesIndex === i107 && t216.dataPointIndex === s57 && (l27.pointStrokeColor = t216.strokeColor, l27.pointFillColor = t216.fillColor, h23 = t216.size, l27.pointShape = t216.shape);
                }), {
                    pSize: null === o42 ? h23 : o42,
                    pRadius: c21.radius,
                    width: Array.isArray(c21.width) ? c21.width[i107] : c21.width,
                    height: Array.isArray(c21.height) ? c21.height[i107] : c21.height,
                    pointStrokeWidth: Array.isArray(c21.strokeWidth) ? c21.strokeWidth[i107] : c21.strokeWidth,
                    pointStrokeColor: l27.pointStrokeColor,
                    pointFillColor: l27.pointFillColor,
                    shape: l27.pointShape || (Array.isArray(c21.shape) ? c21.shape[i107] : c21.shape),
                    class: e150,
                    pointStrokeOpacity: Array.isArray(c21.strokeOpacity) ? c21.strokeOpacity[i107] : c21.strokeOpacity,
                    pointStrokeDashArray: Array.isArray(c21.strokeDashArray) ? c21.strokeDashArray[i107] : c21.strokeDashArray,
                    pointFillOpacity: Array.isArray(c21.fillOpacity) ? c21.fillOpacity[i107] : c21.fillOpacity,
                    seriesIndex: i107
                };
            }
        },
        {
            key: "addEvents",
            value: function(t217) {
                var e151 = this.w, i108 = new m(this.ctx);
                t217.node.addEventListener("mouseenter", i108.pathMouseEnter.bind(this.ctx, t217)), t217.node.addEventListener("mouseleave", i108.pathMouseLeave.bind(this.ctx, t217)), t217.node.addEventListener("mousedown", i108.pathMouseDown.bind(this.ctx, t217)), t217.node.addEventListener("click", e151.config.markers.onClick), t217.node.addEventListener("dblclick", e151.config.markers.onDblClick), t217.node.addEventListener("touchstart", i108.pathMouseDown.bind(this.ctx, t217), {
                    passive: !0
                });
            }
        },
        {
            key: "getMarkerStyle",
            value: function(t) {
                var e152 = this.w, i109 = e152.globals.markers.colors, a84 = e152.config.markers.strokeColor || e152.config.markers.strokeColors;
                return {
                    pointStrokeColor: Array.isArray(a84) ? a84[t] : a84,
                    pointFillColor: Array.isArray(i109) ? i109[t] : i109
                };
            }
        }
    ]), t212;
}(), I = function() {
    function t218(e153) {
        a(this, t218), this.ctx = e153, this.w = e153.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
    }
    return r(t218, [
        {
            key: "draw",
            value: function(t, e154, i110) {
                var a85 = this.w, s58 = new m(this.ctx), r51 = i110.realIndex, o43 = i110.pointsPos, n37 = i110.zRatio, l28 = i110.elParent, h24 = s58.group({
                    class: "apexcharts-series-markers apexcharts-series-".concat(a85.config.chart.type)
                });
                if (h24.attr("clip-path", "url(#gridRectMarkerMask".concat(a85.globals.cuid, ")")), Array.isArray(o43.x)) for(var c22 = 0; c22 < o43.x.length; c22++){
                    var d18 = e154 + 1, g14 = !0;
                    0 === e154 && 0 === c22 && (d18 = 0), 0 === e154 && 1 === c22 && (d18 = 1);
                    var u12 = 0, f11 = a85.globals.markers.size[r51];
                    if (n37 !== 1 / 0) {
                        f11 = a85.globals.seriesZ[r51][d18] / n37;
                        var p9 = a85.config.plotOptions.bubble;
                        p9.minBubbleRadius && f11 < p9.minBubbleRadius && (f11 = p9.minBubbleRadius), p9.maxBubbleRadius && f11 > p9.maxBubbleRadius && (f11 = p9.maxBubbleRadius);
                    }
                    a85.config.chart.animations.enabled || (u12 = f11);
                    var x4 = o43.x[c22], b7 = o43.y[c22];
                    if (u12 = u12 || 0, null !== b7 && void 0 !== a85.globals.series[r51][d18] || (g14 = !1), g14) {
                        var v4 = this.drawPoint(x4, b7, u12, f11, r51, d18, e154);
                        h24.add(v4);
                    }
                    l28.add(h24);
                }
            }
        },
        {
            key: "drawPoint",
            value: function(t219, e155, i111, a86, s59, r52, o) {
                var n38 = this.w, l29 = s59, h25 = new b(this.ctx), c23 = new v(this.ctx), d19 = new T(this.ctx), g15 = new M(this.ctx), u13 = new m(this.ctx), f12 = g15.getMarkerConfig({
                    cssClass: "apexcharts-marker",
                    seriesIndex: l29,
                    dataPointIndex: r52,
                    finishRadius: "bubble" === n38.config.chart.type || n38.globals.comboCharts && n38.config.series[s59] && "bubble" === n38.config.series[s59].type ? a86 : null
                });
                a86 = f12.pSize;
                var p10, x5 = d19.fillPath({
                    seriesNumber: s59,
                    dataPointIndex: r52,
                    color: f12.pointFillColor,
                    patternUnits: "objectBoundingBox",
                    value: n38.globals.series[s59][o]
                });
                if ("circle" === f12.shape ? p10 = u13.drawCircle(i111) : "square" !== f12.shape && "rect" !== f12.shape || (p10 = u13.drawRect(0, 0, f12.width - f12.pointStrokeWidth / 2, f12.height - f12.pointStrokeWidth / 2, f12.pRadius)), n38.config.series[l29].data[r52] && n38.config.series[l29].data[r52].fillColor && (x5 = n38.config.series[l29].data[r52].fillColor), p10.attr({
                    x: t219 - f12.width / 2 - f12.pointStrokeWidth / 2,
                    y: e155 - f12.height / 2 - f12.pointStrokeWidth / 2,
                    cx: t219,
                    cy: e155,
                    fill: x5,
                    "fill-opacity": f12.pointFillOpacity,
                    stroke: f12.pointStrokeColor,
                    r: a86,
                    "stroke-width": f12.pointStrokeWidth,
                    "stroke-dasharray": f12.pointStrokeDashArray,
                    "stroke-opacity": f12.pointStrokeOpacity
                }), n38.config.chart.dropShadow.enabled) {
                    var y5 = n38.config.chart.dropShadow;
                    c23.dropShadow(p10, y5, s59);
                }
                if (!this.initialAnim || n38.globals.dataChanged || n38.globals.resized) n38.globals.animationEnded = !0;
                else {
                    var w4 = n38.config.chart.animations.speed;
                    h25.animateMarker(p10, 0, "circle" === f12.shape ? a86 : {
                        width: f12.width,
                        height: f12.height
                    }, w4, n38.globals.easing, function() {
                        window.setTimeout(function() {
                            h25.animationCompleted(p10);
                        }, 100);
                    });
                }
                if (n38.globals.dataChanged && "circle" === f12.shape) {
                    if (this.dynamicAnim) {
                        var k3, A4, S4, C3, L3 = n38.config.chart.animations.dynamicAnimation.speed;
                        null != (C3 = n38.globals.previousPaths[s59] && n38.globals.previousPaths[s59][o]) && (k3 = C3.x, A4 = C3.y, S4 = void 0 !== C3.r ? C3.r : a86);
                        for(var P3 = 0; P3 < n38.globals.collapsedSeries.length; P3++)n38.globals.collapsedSeries[P3].index === s59 && (L3 = 1, a86 = 0);
                        0 === t219 && 0 === e155 && (a86 = 0), h25.animateCircle(p10, {
                            cx: k3,
                            cy: A4,
                            r: S4
                        }, {
                            cx: t219,
                            cy: e155,
                            r: a86
                        }, L3, n38.globals.easing);
                    } else p10.attr({
                        r: a86
                    });
                }
                return p10.attr({
                    rel: r52,
                    j: r52,
                    index: s59,
                    "default-marker-size": a86
                }), c23.setSelectionFilter(p10, s59, r52), g15.addEvents(p10), p10.node.classList.add("apexcharts-marker"), p10;
            }
        },
        {
            key: "centerTextInBubble",
            value: function(t220) {
                var e156 = this.w;
                return {
                    y: t220 += parseInt(e156.config.dataLabels.style.fontSize, 10) / 4
                };
            }
        }
    ]), t218;
}(), z = function() {
    function t221(e157) {
        a(this, t221), this.ctx = e157, this.w = e157.w;
    }
    return r(t221, [
        {
            key: "dataLabelsCorrection",
            value: function(t222, e158, i112, a, s60, r53, o44) {
                var n39 = this.w, l30 = !1, h26 = new m(this.ctx).getTextRects(i112, o44), c24 = h26.width, d20 = h26.height;
                e158 < 0 && (e158 = 0), e158 > n39.globals.gridHeight + d20 && (e158 = n39.globals.gridHeight + d20 / 2), void 0 === n39.globals.dataLabelsRects[a] && (n39.globals.dataLabelsRects[a] = []), n39.globals.dataLabelsRects[a].push({
                    x: t222,
                    y: e158,
                    width: c24,
                    height: d20
                });
                var g = n39.globals.dataLabelsRects[a].length - 2, u = void 0 !== n39.globals.lastDrawnDataLabelsIndexes[a] ? n39.globals.lastDrawnDataLabelsIndexes[a][n39.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
                if (void 0 !== n39.globals.dataLabelsRects[a][g]) {
                    var f13 = n39.globals.dataLabelsRects[a][u];
                    (t222 > f13.x + f13.width + 2 || e158 > f13.y + f13.height + 2 || t222 + c24 < f13.x) && (l30 = !0);
                }
                return (0 === s60 || r53) && (l30 = !0), {
                    x: t222,
                    y: e158,
                    textRects: h26,
                    drawnextLabel: l30
                };
            }
        },
        {
            key: "drawDataLabel",
            value: function(t223, e159, i113) {
                var a87 = this, s61 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2, r54 = this.w, o45 = new m(this.ctx), n40 = r54.config.dataLabels, l31 = 0, h27 = 0, c25 = i113, d21 = null;
                if (!n40.enabled || !Array.isArray(t223.x)) return d21;
                d21 = o45.group({
                    class: "apexcharts-data-labels"
                });
                for(var g16 = 0; g16 < t223.x.length; g16++)if (l31 = t223.x[g16] + n40.offsetX, h27 = t223.y[g16] + n40.offsetY + s61, !isNaN(l31)) {
                    1 === i113 && 0 === g16 && (c25 = 0), 1 === i113 && 1 === g16 && (c25 = 1);
                    var u14 = r54.globals.series[e159][c25], f14 = "", p11 = function(t224) {
                        return r54.config.dataLabels.formatter(t224, {
                            ctx: a87.ctx,
                            seriesIndex: e159,
                            dataPointIndex: c25,
                            w: r54
                        });
                    };
                    if ("bubble" === r54.config.chart.type) {
                        f14 = p11(u14 = r54.globals.seriesZ[e159][c25]), h27 = t223.y[g16];
                        var x6 = new I(this.ctx), b8 = x6.centerTextInBubble(h27, e159, c25);
                        h27 = b8.y;
                    } else void 0 !== u14 && (f14 = p11(u14));
                    this.plotDataLabelsText({
                        x: l31,
                        y: h27,
                        text: f14,
                        i: e159,
                        j: c25,
                        parent: d21,
                        offsetCorrection: !0,
                        dataLabelsConfig: r54.config.dataLabels
                    });
                }
                return d21;
            }
        },
        {
            key: "plotDataLabelsText",
            value: function(t225) {
                var e160 = this.w, i114 = new m(this.ctx), a88 = t225.x, s62 = t225.y, r55 = t225.i, o46 = t225.j, n41 = t225.text, l32 = t225.textAnchor, h28 = t225.fontSize, c26 = t225.parent, d22 = t225.dataLabelsConfig, g17 = t225.color, u15 = t225.alwaysDrawDataLabel, f15 = t225.offsetCorrection;
                if (!(Array.isArray(e160.config.dataLabels.enabledOnSeries) && e160.config.dataLabels.enabledOnSeries.indexOf(r55) < 0)) {
                    var p12 = {
                        x: a88,
                        y: s62,
                        drawnextLabel: !0,
                        textRects: null
                    };
                    f15 && (p12 = this.dataLabelsCorrection(a88, s62, n41, r55, o46, u15, parseInt(d22.style.fontSize, 10))), e160.globals.zoomed || (a88 = p12.x, s62 = p12.y), p12.textRects && (a88 < -10 - p12.textRects.width || a88 > e160.globals.gridWidth + p12.textRects.width + 10) && (n41 = "");
                    var x7 = e160.globals.dataLabels.style.colors[r55];
                    (("bar" === e160.config.chart.type || "rangeBar" === e160.config.chart.type) && e160.config.plotOptions.bar.distributed || e160.config.dataLabels.distributed) && (x7 = e160.globals.dataLabels.style.colors[o46]), "function" == typeof x7 && (x7 = x7({
                        series: e160.globals.series,
                        seriesIndex: r55,
                        dataPointIndex: o46,
                        w: e160
                    })), g17 && (x7 = g17);
                    var b9 = d22.offsetX, y6 = d22.offsetY;
                    if ("bar" !== e160.config.chart.type && "rangeBar" !== e160.config.chart.type || (b9 = 0, y6 = 0), p12.drawnextLabel) {
                        var w5 = i114.drawText({
                            width: 100,
                            height: parseInt(d22.style.fontSize, 10),
                            x: a88 + b9,
                            y: s62 + y6,
                            foreColor: x7,
                            textAnchor: l32 || d22.textAnchor,
                            text: n41,
                            fontSize: h28 || d22.style.fontSize,
                            fontFamily: d22.style.fontFamily,
                            fontWeight: d22.style.fontWeight || "normal"
                        });
                        if (w5.attr({
                            class: "apexcharts-datalabel",
                            cx: a88,
                            cy: s62
                        }), d22.dropShadow.enabled) {
                            var k4 = d22.dropShadow;
                            new v(this.ctx).dropShadow(w5, k4);
                        }
                        c26.add(w5), void 0 === e160.globals.lastDrawnDataLabelsIndexes[r55] && (e160.globals.lastDrawnDataLabelsIndexes[r55] = []), e160.globals.lastDrawnDataLabelsIndexes[r55].push(o46);
                    }
                }
            }
        },
        {
            key: "addBackgroundToDataLabel",
            value: function(t, e161) {
                var i115 = this.w, a89 = i115.config.dataLabels.background, s63 = a89.padding, r56 = a89.padding / 2, o47 = e161.width, n42 = e161.height, l33 = new m(this.ctx).drawRect(e161.x - s63, e161.y - r56 / 2, o47 + 2 * s63, n42 + r56, a89.borderRadius, "transparent" === i115.config.chart.background ? "#fff" : i115.config.chart.background, a89.opacity, a89.borderWidth, a89.borderColor);
                a89.dropShadow.enabled && new v(this.ctx).dropShadow(l33, a89.dropShadow);
                return l33;
            }
        },
        {
            key: "dataLabelsBackground",
            value: function() {
                var t226 = this.w;
                if ("bubble" !== t226.config.chart.type) for(var e162 = t226.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i116 = 0; i116 < e162.length; i116++){
                    var a90 = e162[i116], s64 = a90.getBBox(), r57 = null;
                    if (s64.width && s64.height && (r57 = this.addBackgroundToDataLabel(a90, s64)), r57) {
                        a90.parentNode.insertBefore(r57.node, a90);
                        var o48 = a90.getAttribute("fill");
                        t226.config.chart.animations.enabled && !t226.globals.resized && !t226.globals.dataChanged ? r57.animate().attr({
                            fill: o48
                        }) : r57.attr({
                            fill: o48
                        }), a90.setAttribute("fill", t226.config.dataLabels.background.foreColor);
                    }
                }
            }
        },
        {
            key: "bringForward",
            value: function() {
                for(var t227 = this.w, e163 = t227.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i117 = t227.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a91 = 0; a91 < e163.length; a91++)i117 && i117.insertBefore(e163[a91], i117.nextSibling);
            }
        }
    ]), t221;
}(), E = function() {
    function t228(e164) {
        a(this, t228), this.w = e164.w, this.barCtx = e164;
    }
    return r(t228, [
        {
            key: "handleBarDataLabels",
            value: function(t229) {
                var e165 = t229.x, i118 = t229.y, a92 = t229.y1, s65 = t229.y2, r58 = t229.i, o49 = t229.j, n43 = t229.realIndex, l34 = t229.series, h29 = t229.barHeight, c27 = t229.barWidth, d23 = t229.barYPosition, g18 = t229.visibleSeries, u16 = t229.renderedPath, f16 = this.w, p13 = new m(this.barCtx.ctx), x8 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[n43] : this.barCtx.strokeWidth, b10 = e165 + parseFloat(c27 * g18), v5 = i118 + parseFloat(h29 * g18);
                f16.globals.isXNumeric && !f16.globals.isBarHorizontal && (b10 = e165 + parseFloat(c27 * (g18 + 1)), v5 = i118 + parseFloat(h29 * (g18 + 1)) - x8);
                var y7 = e165, w6 = i118, k5 = {
                }, A5 = f16.config.dataLabels, S5 = this.barCtx.barOptions.dataLabels;
                void 0 !== d23 && this.barCtx.isRangeBar && (v5 = d23, w6 = d23);
                var C4 = A5.offsetX, L4 = A5.offsetY, P4 = {
                    width: 0,
                    height: 0
                };
                if (f16.config.dataLabels.enabled) {
                    var T3 = this.barCtx.series[r58][o49];
                    P4 = p13.getTextRects(f16.globals.yLabelFormatters[0](T3), parseFloat(A5.style.fontSize));
                }
                var M3 = {
                    x: e165,
                    y: i118,
                    i: r58,
                    j: o49,
                    renderedPath: u16,
                    bcx: b10,
                    bcy: v5,
                    barHeight: h29,
                    barWidth: c27,
                    textRects: P4,
                    strokeWidth: x8,
                    dataLabelsX: y7,
                    dataLabelsY: w6,
                    barDataLabelsConfig: S5,
                    offX: C4,
                    offY: L4
                };
                return k5 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(M3) : this.calculateColumnsDataLabelsPosition(M3), u16.attr({
                    cy: k5.bcy,
                    cx: k5.bcx,
                    j: o49,
                    val: l34[r58][o49],
                    barHeight: h29,
                    barWidth: c27
                }), this.drawCalculatedDataLabels({
                    x: k5.dataLabelsX,
                    y: k5.dataLabelsY,
                    val: this.barCtx.isRangeBar ? [
                        a92,
                        s65
                    ] : l34[r58][o49],
                    i: n43,
                    j: o49,
                    barWidth: c27,
                    barHeight: h29,
                    textRects: P4,
                    dataLabelsConfig: A5
                });
            }
        },
        {
            key: "calculateColumnsDataLabelsPosition",
            value: function(t230) {
                var e166, i119 = this.w, a = t230.i, s = t230.j, r59 = t230.y, o50 = t230.bcx, n44 = t230.barWidth, l35 = t230.barHeight, h30 = t230.textRects, c28 = t230.dataLabelsY, d24 = t230.barDataLabelsConfig, g19 = t230.strokeWidth, u17 = t230.offX, f17 = t230.offY;
                l35 = Math.abs(l35);
                var p14 = "vertical" === i119.config.plotOptions.bar.dataLabels.orientation;
                o50 -= g19 / 2;
                var x9 = i119.globals.gridWidth / i119.globals.dataPoints;
                if (e166 = i119.globals.isXNumeric ? o50 - n44 / 2 + u17 : o50 - x9 + n44 / 2 + u17, p14) e166 = e166 + h30.height / 2 - g19 / 2 - 2;
                var b11 = this.barCtx.series[a][s] < 0, v6 = r59;
                switch(this.barCtx.isReversed && (v6 = r59 - l35 + (b11 ? 2 * l35 : 0), r59 -= l35), d24.position){
                    case "center":
                        c28 = p14 ? b11 ? v6 + l35 / 2 + f17 : v6 + l35 / 2 - f17 : b11 ? v6 - l35 / 2 + h30.height / 2 + f17 : v6 + l35 / 2 + h30.height / 2 - f17;
                        break;
                    case "bottom":
                        c28 = p14 ? b11 ? v6 + l35 + f17 : v6 + l35 - f17 : b11 ? v6 - l35 + h30.height + g19 + f17 : v6 + l35 - h30.height / 2 + g19 - f17;
                        break;
                    case "top":
                        c28 = p14 ? b11 ? v6 + f17 : v6 - f17 : b11 ? v6 - h30.height / 2 - f17 : v6 + h30.height + f17;
                }
                return i119.config.chart.stacked || (c28 < 0 ? c28 = 0 + g19 : c28 + h30.height / 3 > i119.globals.gridHeight && (c28 = i119.globals.gridHeight - g19)), {
                    bcx: o50,
                    bcy: r59,
                    dataLabelsX: e166,
                    dataLabelsY: c28
                };
            }
        },
        {
            key: "calculateBarsDataLabelsPosition",
            value: function(t231) {
                var e167 = this.w, i120 = t231.x, a = t231.i, s = t231.j, r60 = t231.bcy, o51 = t231.barHeight, n45 = t231.barWidth, l36 = t231.textRects, h31 = t231.dataLabelsX, c29 = t231.strokeWidth, d25 = t231.barDataLabelsConfig, g20 = t231.offX, u18 = t231.offY, f18 = e167.globals.gridHeight / e167.globals.dataPoints;
                n45 = Math.abs(n45);
                var p15 = r60 - (this.barCtx.isRangeBar ? 0 : f18) + o51 / 2 + l36.height / 2 + u18 - 3, x10 = this.barCtx.series[a][s] < 0, b12 = i120;
                switch(this.barCtx.isReversed && (b12 = i120 + n45 - (x10 ? 2 * n45 : 0), i120 = e167.globals.gridWidth - n45), d25.position){
                    case "center":
                        h31 = x10 ? b12 + n45 / 2 - g20 : Math.max(l36.width / 2, b12 - n45 / 2) + g20;
                        break;
                    case "bottom":
                        h31 = x10 ? b12 + n45 - c29 - Math.round(l36.width / 2) - g20 : b12 - n45 + c29 + Math.round(l36.width / 2) + g20;
                        break;
                    case "top":
                        h31 = x10 ? b12 - c29 + Math.round(l36.width / 2) - g20 : b12 - c29 - Math.round(l36.width / 2) + g20;
                }
                return e167.config.chart.stacked || (h31 < 0 ? h31 = h31 + l36.width + c29 : h31 + l36.width / 2 > e167.globals.gridWidth && (h31 = e167.globals.gridWidth - l36.width - c29)), {
                    bcx: i120,
                    bcy: r60,
                    dataLabelsX: h31,
                    dataLabelsY: p15
                };
            }
        },
        {
            key: "drawCalculatedDataLabels",
            value: function(t232) {
                var i121 = t232.x, a93 = t232.y, s66 = t232.val, r61 = t232.i, o52 = t232.j, n46 = t232.textRects, l37 = t232.barHeight, h32 = t232.barWidth, c30 = t232.dataLabelsConfig, d26 = this.w, g21 = "rotate(0)";
                "vertical" === d26.config.plotOptions.bar.dataLabels.orientation && (g21 = "rotate(-90, ".concat(i121, ", ").concat(a93, ")"));
                var u19 = new z(this.barCtx.ctx), f19 = new m(this.barCtx.ctx), p16 = c30.formatter, x11 = null, b13 = d26.globals.collapsedSeriesIndices.indexOf(r61) > -1;
                if (c30.enabled && !b13) {
                    x11 = f19.group({
                        class: "apexcharts-data-labels",
                        transform: g21
                    });
                    var v7 = "";
                    void 0 !== s66 && (v7 = p16(s66, {
                        seriesIndex: r61,
                        dataPointIndex: o52,
                        w: d26
                    }));
                    var y8 = d26.globals.series[r61][o52] < 0, w7 = d26.config.plotOptions.bar.dataLabels.position;
                    if ("vertical" === d26.config.plotOptions.bar.dataLabels.orientation && ("top" === w7 && (c30.textAnchor = y8 ? "end" : "start"), "center" === w7 && (c30.textAnchor = "middle"), "bottom" === w7 && (c30.textAnchor = y8 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) h32 < f19.getTextRects(v7, parseFloat(c30.style.fontSize)).width && (v7 = "");
                    d26.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? n46.width / 1.6 > Math.abs(h32) && (v7 = "") : n46.height / 1.6 > Math.abs(l37) && (v7 = ""));
                    var k6 = e({
                    }, c30);
                    this.barCtx.isHorizontal && s66 < 0 && ("start" === c30.textAnchor ? k6.textAnchor = "end" : "end" === c30.textAnchor && (k6.textAnchor = "start")), u19.plotDataLabelsText({
                        x: i121,
                        y: a93,
                        text: v7,
                        i: r61,
                        j: o52,
                        parent: x11,
                        dataLabelsConfig: k6,
                        alwaysDrawDataLabel: !0,
                        offsetCorrection: !0
                    });
                }
                return x11;
            }
        }
    ]), t228;
}(), X = function() {
    function t233(e168) {
        a(this, t233), this.ctx = e168, this.w = e168.w, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    return r(t233, [
        {
            key: "getAllSeriesEls",
            value: function() {
                return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
            }
        },
        {
            key: "getSeriesByName",
            value: function(t234) {
                return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(x.escapeString(t234), "']"));
            }
        },
        {
            key: "isSeriesHidden",
            value: function(t235) {
                var e169 = this.getSeriesByName(t235), i122 = parseInt(e169.getAttribute("data:realIndex"), 10);
                return {
                    isHidden: e169.classList.contains("apexcharts-series-collapsed"),
                    realIndex: i122
                };
            }
        },
        {
            key: "addCollapsedClassToSeries",
            value: function(t236, e170) {
                var i123 = this.w;
                function a94(i124) {
                    for(var a95 = 0; a95 < i124.length; a95++)i124[a95].index === e170 && t236.node.classList.add("apexcharts-series-collapsed");
                }
                a94(i123.globals.collapsedSeries), a94(i123.globals.ancillaryCollapsedSeries);
            }
        },
        {
            key: "toggleSeries",
            value: function(t237) {
                var e171 = this.isSeriesHidden(t237);
                return this.ctx.legend.legendHelpers.toggleDataSeries(e171.realIndex, e171.isHidden), e171.isHidden;
            }
        },
        {
            key: "showSeries",
            value: function(t238) {
                var e172 = this.isSeriesHidden(t238);
                e172.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e172.realIndex, !0);
            }
        },
        {
            key: "hideSeries",
            value: function(t239) {
                var e173 = this.isSeriesHidden(t239);
                e173.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e173.realIndex, !1);
            }
        },
        {
            key: "resetSeries",
            value: function() {
                var t240 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e174 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i125 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a96 = this.w, s67 = x.clone(a96.globals.initialSeries);
                a96.globals.previousPaths = [], i125 ? (a96.globals.collapsedSeries = [], a96.globals.ancillaryCollapsedSeries = [], a96.globals.collapsedSeriesIndices = [], a96.globals.ancillaryCollapsedSeriesIndices = []) : s67 = this.emptyCollapsedSeries(s67), a96.config.series = s67, t240 && (e174 && (a96.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s67, a96.config.chart.animations.dynamicAnimation.enabled));
            }
        },
        {
            key: "emptyCollapsedSeries",
            value: function(t241) {
                for(var e175 = this.w, i126 = 0; i126 < t241.length; i126++)e175.globals.collapsedSeriesIndices.indexOf(i126) > -1 && (t241[i126].data = []);
                return t241;
            }
        },
        {
            key: "toggleSeriesOnHover",
            value: function(t242, e176) {
                var i127 = this.w;
                e176 || (e176 = t242.target);
                var a97 = i127.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");
                if ("mousemove" === t242.type) {
                    var s68 = parseInt(e176.getAttribute("rel"), 10) - 1, r62 = null, o53 = null;
                    i127.globals.axisCharts || "radialBar" === i127.config.chart.type ? i127.globals.axisCharts ? (r62 = i127.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s68, "']")), o53 = i127.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s68, "']"))) : r62 = i127.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s68 + 1, "']")) : r62 = i127.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s68 + 1, "'] path"));
                    for(var n47 = 0; n47 < a97.length; n47++)a97[n47].classList.add(this.legendInactiveClass);
                    null !== r62 && (i127.globals.axisCharts || r62.parentNode.classList.remove(this.legendInactiveClass), r62.classList.remove(this.legendInactiveClass), null !== o53 && o53.classList.remove(this.legendInactiveClass));
                } else if ("mouseout" === t242.type) for(var l38 = 0; l38 < a97.length; l38++)a97[l38].classList.remove(this.legendInactiveClass);
            }
        },
        {
            key: "highlightRangeInSeries",
            value: function(t243, e177) {
                var i128 = this, a98 = this.w, s69 = a98.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r63 = function(t) {
                    for(var e178 = 0; e178 < s69.length; e178++)s69[e178].classList[t](i128.legendInactiveClass);
                };
                if ("mousemove" === t243.type) {
                    var o = parseInt(e177.getAttribute("rel"), 10) - 1;
                    r63("add"), (function(t244) {
                        for(var e179 = 0; e179 < s69.length; e179++){
                            var a99 = parseInt(s69[e179].getAttribute("val"), 10);
                            a99 >= t244.from && a99 <= t244.to && s69[e179].classList.remove(i128.legendInactiveClass);
                        }
                    })(a98.config.plotOptions.heatmap.colorScale.ranges[o]);
                } else "mouseout" === t243.type && r63("remove");
            }
        },
        {
            key: "getActiveConfigSeriesIndex",
            value: function() {
                var t245 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e180 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "asc", i129 = this.w, a100 = 0;
                if (i129.config.series.length > 1) {
                    for(var s70 = i129.config.series.map(function(e181, a101) {
                        var s71 = !1;
                        return t245 && (s71 = "bar" === i129.config.series[a101].type || "column" === i129.config.series[a101].type), e181.data && e181.data.length > 0 && !s71 ? a101 : -1;
                    }), r64 = "asc" === e180 ? 0 : s70.length - 1; "asc" === e180 ? r64 < s70.length : r64 >= 0; "asc" === e180 ? r64++ : r64--)if (-1 !== s70[r64]) {
                        a100 = s70[r64];
                        break;
                    }
                }
                return a100;
            }
        },
        {
            key: "getPreviousPaths",
            value: function() {
                var t246 = this.w;
                function e182(e183, i, a103) {
                    for(var s73 = e183[i].childNodes, r65 = {
                        type: a103,
                        paths: [],
                        realIndex: e183[i].getAttribute("data:realIndex")
                    }, o54 = 0; o54 < s73.length; o54++)if (s73[o54].hasAttribute("pathTo")) {
                        var n48 = s73[o54].getAttribute("pathTo");
                        r65.paths.push({
                            d: n48
                        });
                    }
                    t246.globals.previousPaths.push(r65);
                }
                t246.globals.previousPaths = [];
                [
                    "line",
                    "area",
                    "bar",
                    "rangebar",
                    "candlestick",
                    "radar"
                ].forEach(function(i131) {
                    for(var a104, s74 = (a104 = i131, t246.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a104, "-series .apexcharts-series"))), r66 = 0; r66 < s74.length; r66++)e182(s74, r66, i131);
                }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
                var i130 = t246.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t246.config.chart.type, " .apexcharts-series"));
                if (i130.length > 0) for(var a102 = function(e184) {
                    for(var i132 = t246.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t246.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e184, "'] rect")), a105 = [], s75 = function(t) {
                        var e185 = function(e186) {
                            return i132[t].getAttribute(e186);
                        }, s76 = {
                            x: parseFloat(e185("x")),
                            y: parseFloat(e185("y")),
                            width: parseFloat(e185("width")),
                            height: parseFloat(e185("height"))
                        };
                        a105.push({
                            rect: s76,
                            color: i132[t].getAttribute("color")
                        });
                    }, r67 = 0; r67 < i132.length; r67++)s75(r67);
                    t246.globals.previousPaths.push(a105);
                }, s72 = 0; s72 < i130.length; s72++)a102(s72);
                t246.globals.axisCharts || (t246.globals.previousPaths = t246.globals.series);
            }
        },
        {
            key: "handlePrevBubbleScatterPaths",
            value: function(t247) {
                var e187 = this.w, i133 = e187.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t247, "-series .apexcharts-series"));
                if (i133.length > 0) for(var a106 = 0; a106 < i133.length; a106++){
                    for(var s77 = e187.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t247, "-series .apexcharts-series[data\\:realIndex='").concat(a106, "'] circle")), r68 = [], o55 = 0; o55 < s77.length; o55++)r68.push({
                        x: s77[o55].getAttribute("cx"),
                        y: s77[o55].getAttribute("cy"),
                        r: s77[o55].getAttribute("r")
                    });
                    e187.globals.previousPaths.push(r68);
                }
            }
        },
        {
            key: "clearPreviousPaths",
            value: function() {
                var t248 = this.w;
                t248.globals.previousPaths = [], t248.globals.allSeriesCollapsed = !1;
            }
        },
        {
            key: "handleNoData",
            value: function() {
                var t249 = this.w, e188 = t249.config.noData, i134 = new m(this.ctx), a107 = t249.globals.svgWidth / 2, s78 = t249.globals.svgHeight / 2, r69 = "middle";
                if (t249.globals.noData = !0, t249.globals.animationEnded = !0, "left" === e188.align ? (a107 = 10, r69 = "start") : "right" === e188.align && (a107 = t249.globals.svgWidth - 10, r69 = "end"), "top" === e188.verticalAlign ? s78 = 50 : "bottom" === e188.verticalAlign && (s78 = t249.globals.svgHeight - 50), a107 += e188.offsetX, s78 = s78 + parseInt(e188.style.fontSize, 10) + 2 + e188.offsetY, void 0 !== e188.text && "" !== e188.text) {
                    var o56 = i134.drawText({
                        x: a107,
                        y: s78,
                        text: e188.text,
                        textAnchor: r69,
                        fontSize: e188.style.fontSize,
                        fontFamily: e188.style.fontFamily,
                        foreColor: e188.style.color,
                        opacity: 1,
                        class: "apexcharts-text-nodata"
                    });
                    t249.globals.dom.Paper.add(o56);
                }
            }
        },
        {
            key: "setNullSeriesToZeroValues",
            value: function(t250) {
                for(var e = this.w, i135 = 0; i135 < t250.length; i135++)if (0 === t250[i135].length) for(var a108 = 0; a108 < t250[e.globals.maxValsInArrayIndex].length; a108++)t250[i135].push(0);
                return t250;
            }
        },
        {
            key: "hasAllSeriesEqualX",
            value: function() {
                for(var t251 = !0, e189 = this.w, i136 = this.filteredSeriesX(), a109 = 0; a109 < i136.length - 1; a109++)if (i136[a109][0] !== i136[a109 + 1][0]) {
                    t251 = !1;
                    break;
                }
                return e189.globals.allSeriesHasEqualX = t251, t251;
            }
        },
        {
            key: "filteredSeriesX",
            value: function() {
                var t252 = this.w.globals.seriesX.map(function(t253) {
                    return t253.length > 0 ? t253 : [];
                });
                return t252;
            }
        }
    ]), t233;
}(), Y = function() {
    function t254(e190) {
        a(this, t254), this.w = e190.w, this.barCtx = e190;
    }
    return r(t254, [
        {
            key: "initVariables",
            value: function(t255) {
                var e191 = this.w;
                this.barCtx.series = t255, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
                for(var i137 = 0; i137 < t255.length; i137++)if (t255[i137].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t255[i137].length), e191.globals.isXNumeric) for(var a110 = 0; a110 < t255[i137].length; a110++)e191.globals.seriesX[i137][a110] > e191.globals.minX && e191.globals.seriesX[i137][a110] < e191.globals.maxX && this.barCtx.visibleItems++;
                else this.barCtx.visibleItems = e191.globals.dataPoints;
                0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], this.barCtx.radiusOnSeriesNumber = t255.length - 1, e191.globals.comboCharts || this.checkZeroSeries({
                    series: t255
                });
            }
        },
        {
            key: "initialPositions",
            value: function() {
                var t256, e192, i138, a111, s79, r70, o57, n49, l39 = this.w, h33 = l39.globals.dataPoints;
                this.barCtx.isRangeBar && (h33 = l39.globals.labels.length);
                var c31 = this.barCtx.seriesLen;
                if (l39.config.plotOptions.bar.rangeBarGroupRows && (c31 = 1), this.barCtx.isHorizontal) s79 = (i138 = l39.globals.gridHeight / h33) / c31, l39.globals.isXNumeric && (s79 = (i138 = l39.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s79 = s79 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, n49 = this.barCtx.baseLineInvertedY + l39.globals.padHorizontal + (this.barCtx.isReversed ? l39.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), e192 = (i138 - s79 * this.barCtx.seriesLen) / 2;
                else {
                    if (a111 = l39.globals.gridWidth / this.barCtx.visibleItems, l39.config.xaxis.convertedCatToNumeric && (a111 = l39.globals.gridWidth / l39.globals.dataPoints), r70 = a111 / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l39.globals.isXNumeric) {
                        var d27 = this.barCtx.xRatio;
                        l39.config.xaxis.convertedCatToNumeric && (d27 = this.barCtx.initialXRatio), l39.globals.minXDiff && 0.5 !== l39.globals.minXDiff && l39.globals.minXDiff / d27 > 0 && (a111 = l39.globals.minXDiff / d27), (r70 = a111 / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r70 = 1);
                    }
                    o57 = l39.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? l39.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t256 = l39.globals.padHorizontal + (a111 - r70 * this.barCtx.seriesLen) / 2;
                }
                return {
                    x: t256,
                    y: e192,
                    yDivision: i138,
                    xDivision: a111,
                    barHeight: s79,
                    barWidth: r70,
                    zeroH: o57,
                    zeroW: n49
                };
            }
        },
        {
            key: "getPathFillColor",
            value: function(t257, e193, i139, a112) {
                var s80 = this.w, r71 = new T(this.barCtx.ctx), o58 = null, n50 = this.barCtx.barOptions.distributed ? i139 : e193;
                this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(a113) {
                    t257[e193][i139] >= a113.from && t257[e193][i139] <= a113.to && (o58 = a113.color);
                });
                return s80.config.series[e193].data[i139] && s80.config.series[e193].data[i139].fillColor && (o58 = s80.config.series[e193].data[i139].fillColor), r71.fillPath({
                    seriesNumber: this.barCtx.barOptions.distributed ? n50 : a112,
                    dataPointIndex: i139,
                    color: o58,
                    value: t257[e193][i139]
                });
            }
        },
        {
            key: "getStrokeWidth",
            value: function(t, e, i) {
                var a114 = 0, s81 = this.w;
                return void 0 === this.barCtx.series[t][e] || null === this.barCtx.series[t][e] ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s81.config.stroke.show && (this.barCtx.isNullValue || (a114 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a114;
            }
        },
        {
            key: "barBackground",
            value: function(t258) {
                var e194 = t258.j, i140 = t258.i, a115 = t258.x1, s82 = t258.x2, r72 = t258.y1, o59 = t258.y2, n51 = t258.elSeries, l40 = this.w, h34 = new m(this.barCtx.ctx), c32 = new X(this.barCtx.ctx).getActiveConfigSeriesIndex();
                if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c32 === i140) {
                    e194 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e194 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
                    var d28 = this.barCtx.barOptions.colors.backgroundBarColors[e194], g22 = h34.drawRect(void 0 !== a115 ? a115 : 0, void 0 !== r72 ? r72 : 0, void 0 !== s82 ? s82 : l40.globals.gridWidth, void 0 !== o59 ? o59 : l40.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d28, this.barCtx.barOptions.colors.backgroundBarOpacity);
                    n51.add(g22), g22.node.classList.add("apexcharts-backgroundBar");
                }
            }
        },
        {
            key: "getColumnPaths",
            value: function(t259) {
                var e195 = t259.barWidth, i141 = t259.barXPosition, a116 = t259.yRatio, s83 = t259.y1, r73 = t259.y2, o60 = t259.strokeWidth, n52 = t259.series, l41 = t259.realIndex, h35 = t259.i, c33 = t259.j, d29 = t259.w, g23 = new m(this.barCtx.ctx);
                (o60 = Array.isArray(o60) ? o60[l41] : o60) || (o60 = 0);
                var u20 = {
                    barWidth: e195,
                    strokeWidth: o60,
                    yRatio: a116,
                    barXPosition: i141,
                    y1: s83,
                    y2: r73
                }, f20 = this.getRoundedBars(d29, u20, n52, h35, c33), p17 = i141, x12 = i141 + e195, b14 = g23.move(p17, s83), v8 = g23.move(p17, s83), y9 = g23.line(x12 - o60, s83);
                return d29.globals.previousPaths.length > 0 && (v8 = this.barCtx.getPreviousPath(l41, c33, !1)), b14 = b14 + g23.line(p17, f20.y2) + f20.pathWithRadius + g23.line(x12 - o60, f20.y2) + y9 + y9 + "z", v8 = v8 + g23.line(p17, s83) + y9 + y9 + y9 + y9 + y9 + g23.line(p17, s83), d29.config.chart.stacked && (this.barCtx.yArrj.push(f20.y2), this.barCtx.yArrjF.push(Math.abs(s83 - f20.y2)), this.barCtx.yArrjVal.push(this.barCtx.series[h35][c33])), {
                    pathTo: b14,
                    pathFrom: v8
                };
            }
        },
        {
            key: "getBarpaths",
            value: function(t260) {
                var e196 = t260.barYPosition, i142 = t260.barHeight, a117 = t260.x1, s84 = t260.x2, r74 = t260.strokeWidth, o61 = t260.series, n53 = t260.realIndex, l42 = t260.i, h36 = t260.j, c34 = t260.w, d30 = new m(this.barCtx.ctx);
                (r74 = Array.isArray(r74) ? r74[n53] : r74) || (r74 = 0);
                var g24 = {
                    barHeight: i142,
                    strokeWidth: r74,
                    barYPosition: e196,
                    x2: s84,
                    x1: a117
                }, u21 = this.getRoundedBars(c34, g24, o61, l42, h36), f21 = d30.move(a117, e196), p18 = d30.move(a117, e196);
                c34.globals.previousPaths.length > 0 && (p18 = this.barCtx.getPreviousPath(n53, h36, !1));
                var x13 = e196, b15 = e196 + i142, v9 = d30.line(a117, b15 - r74);
                return f21 = f21 + d30.line(u21.x2, x13) + u21.pathWithRadius + d30.line(u21.x2, b15 - r74) + v9 + v9 + "z", p18 = p18 + d30.line(a117, x13) + v9 + v9 + v9 + v9 + v9 + d30.line(a117, x13), c34.config.chart.stacked && (this.barCtx.xArrj.push(u21.x2), this.barCtx.xArrjF.push(Math.abs(a117 - u21.x2)), this.barCtx.xArrjVal.push(this.barCtx.series[l42][h36])), {
                    pathTo: f21,
                    pathFrom: p18
                };
            }
        },
        {
            key: "getRoundedBars",
            value: function(t261, e197, i143, a118, s) {
                var r75 = new m(this.barCtx.ctx), o62 = 0, n54 = t261.config.plotOptions.bar.borderRadius, l43 = Array.isArray(n54);
                l43 ? o62 = n54[a118 > n54.length - 1 ? n54.length - 1 : a118] : o62 = n54;
                if (t261.config.chart.stacked && i143.length > 1 && a118 !== this.barCtx.radiusOnSeriesNumber && !l43 && (o62 = 0), this.barCtx.isHorizontal) {
                    var h37 = "", c35 = e197.x2;
                    if (Math.abs(e197.x1 - e197.x2) < o62 && (o62 = Math.abs(e197.x1 - e197.x2)), void 0 !== i143[a118][s] || null !== i143[a118][s]) {
                        var d31 = this.barCtx.isReversed ? i143[a118][s] > 0 : i143[a118][s] < 0;
                        d31 && (o62 *= -1), c35 -= o62, h37 = r75.quadraticCurve(c35 + o62, e197.barYPosition, c35 + o62, e197.barYPosition + (d31 ? -1 * o62 : o62)) + r75.line(c35 + o62, e197.barYPosition + e197.barHeight - e197.strokeWidth - (d31 ? -1 * o62 : o62)) + r75.quadraticCurve(c35 + o62, e197.barYPosition + e197.barHeight - e197.strokeWidth, c35, e197.barYPosition + e197.barHeight - e197.strokeWidth);
                    }
                    return {
                        pathWithRadius: h37,
                        x2: c35
                    };
                }
                var g25 = "", u22 = e197.y2;
                if (Math.abs(e197.y1 - e197.y2) < o62 && (o62 = Math.abs(e197.y1 - e197.y2)), void 0 !== i143[a118][s] || null !== i143[a118][s]) {
                    var f22 = i143[a118][s] < 0;
                    f22 && (o62 *= -1), u22 += o62, g25 = r75.quadraticCurve(e197.barXPosition, u22 - o62, e197.barXPosition + (f22 ? -1 * o62 : o62), u22 - o62) + r75.line(e197.barXPosition + e197.barWidth - e197.strokeWidth - (f22 ? -1 * o62 : o62), u22 - o62) + r75.quadraticCurve(e197.barXPosition + e197.barWidth - e197.strokeWidth, u22 - o62, e197.barXPosition + e197.barWidth - e197.strokeWidth, u22);
                }
                return {
                    pathWithRadius: g25,
                    y2: u22
                };
            }
        },
        {
            key: "checkZeroSeries",
            value: function(t262) {
                for(var e198 = t262.series, i144 = this.w, a119 = 0; a119 < e198.length; a119++){
                    for(var s85 = 0, r76 = 0; r76 < e198[i144.globals.maxValsInArrayIndex].length; r76++)s85 += e198[a119][r76];
                    0 === s85 && this.barCtx.zeroSerieses.push(a119);
                }
                for(var o63 = e198.length - 1; o63 >= 0; o63--)this.barCtx.zeroSerieses.indexOf(o63) > -1 && o63 === this.radiusOnSeriesNumber && (this.barCtx.radiusOnSeriesNumber -= 1);
                for(var n55 = e198.length - 1; n55 >= 0; n55--)i144.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber) > -1 && (this.barCtx.radiusOnSeriesNumber -= 1);
            }
        },
        {
            key: "getXForValue",
            value: function(t263, e199) {
                var i145 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a120 = i145 ? e199 : null;
                return null != t263 && (a120 = e199 + t263 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t263 / this.barCtx.invertedYRatio : 0)), a120;
            }
        },
        {
            key: "getYForValue",
            value: function(t264, e200) {
                var i146 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a121 = i146 ? e200 : null;
                return null != t264 && (a121 = e200 - t264 / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t264 / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0)), a121;
            }
        },
        {
            key: "getGoalValues",
            value: function(t265, e201, i147, a122, s86) {
                var r77 = this, n56 = this.w, l44 = [];
                return n56.globals.seriesGoals[a122] && n56.globals.seriesGoals[a122][s86] && Array.isArray(n56.globals.seriesGoals[a122][s86]) && n56.globals.seriesGoals[a122][s86].forEach(function(a123) {
                    var s87;
                    l44.push((o(s87 = {
                    }, t265, "x" === t265 ? r77.getXForValue(a123.value, e201, !1) : r77.getYForValue(a123.value, i147, !1)), o(s87, "attrs", a123), s87));
                }), l44;
            }
        },
        {
            key: "drawGoalLine",
            value: function(t266) {
                var e202 = t266.barXPosition, i148 = t266.barYPosition, a124 = t266.goalX, s88 = t266.goalY, r78 = t266.barWidth, o64 = t266.barHeight, n57 = new m(this.barCtx.ctx), l45 = n57.group({
                    className: "apexcharts-bar-goals-groups"
                }), h38 = null;
                return this.barCtx.isHorizontal ? Array.isArray(a124) && a124.forEach(function(t267) {
                    var e203 = void 0 !== t267.attrs.strokeHeight ? t267.attrs.strokeHeight : o64 / 2, a125 = i148 + e203 + o64 / 2;
                    h38 = n57.drawLine(t267.x, a125 - 2 * e203, t267.x, a125, t267.attrs.strokeColor ? t267.attrs.strokeColor : void 0, t267.attrs.strokeDashArray, t267.attrs.strokeWidth ? t267.attrs.strokeWidth : 2, t267.attrs.strokeLineCap), l45.add(h38);
                }) : Array.isArray(s88) && s88.forEach(function(t268) {
                    var i149 = void 0 !== t268.attrs.strokeWidth ? t268.attrs.strokeWidth : r78 / 2, a126 = e202 + i149 + r78 / 2;
                    h38 = n57.drawLine(a126 - 2 * i149, t268.y, a126, t268.y, t268.attrs.strokeColor ? t268.attrs.strokeColor : void 0, t268.attrs.strokeDashArray, t268.attrs.strokeHeight ? t268.attrs.strokeHeight : 2, t268.attrs.strokeLineCap), l45.add(h38);
                }), l45;
            }
        }
    ]), t254;
}(), F = function() {
    function t269(e204, i150) {
        a(this, t269), this.ctx = e204, this.w = e204.w;
        var s89 = this.w;
        this.barOptions = s89.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = s89.config.stroke.width, this.isNullValue = !1, this.isRangeBar = s89.globals.seriesRangeBar.length && this.isHorizontal, this.xyRatios = i150, null !== this.xyRatios && (this.xRatio = i150.xRatio, this.initialXRatio = i150.initialXRatio, this.yRatio = i150.yRatio, this.invertedXRatio = i150.invertedXRatio, this.invertedYRatio = i150.invertedYRatio, this.baseLineY = i150.baseLineY, this.baseLineInvertedY = i150.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.barHelpers = new Y(this);
    }
    return r(t269, [
        {
            key: "draw",
            value: function(t270, i151) {
                var a127 = this.w, s90 = new m(this.ctx), r79 = new k(this.ctx, a127);
                t270 = r79.getLogSeries(t270), this.series = t270, this.yRatio = r79.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t270);
                var o65 = s90.group({
                    class: "apexcharts-bar-series apexcharts-plot-series"
                });
                a127.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
                for(var n58 = 0, l46 = 0; n58 < t270.length; n58++, l46++){
                    var h39, c36, d32, g26, u23 = void 0, f23 = void 0, p19 = [], b16 = [], v10 = a127.globals.comboCharts ? i151[n58] : n58, y10 = s90.group({
                        class: "apexcharts-series",
                        rel: n58 + 1,
                        seriesName: x.escapeString(a127.globals.seriesNames[v10]),
                        "data:realIndex": v10
                    });
                    this.ctx.series.addCollapsedClassToSeries(y10, v10), t270[n58].length > 0 && (this.visibleI = this.visibleI + 1);
                    var w8 = 0, A6 = 0;
                    this.yRatio.length > 1 && (this.yaxisIndex = v10), this.isReversed = a127.config.yaxis[this.yaxisIndex] && a127.config.yaxis[this.yaxisIndex].reversed;
                    var S6 = this.barHelpers.initialPositions();
                    f23 = S6.y, w8 = S6.barHeight, c36 = S6.yDivision, g26 = S6.zeroW, u23 = S6.x, A6 = S6.barWidth, h39 = S6.xDivision, d32 = S6.zeroH, this.horizontal || b16.push(u23 + A6 / 2);
                    for(var C5 = s90.group({
                        class: "apexcharts-datalabels",
                        "data:realIndex": v10
                    }), L5 = s90.group({
                        class: "apexcharts-bar-goals-markers",
                        style: "pointer-events: none"
                    }), P5 = 0; P5 < a127.globals.dataPoints; P5++){
                        var T4 = this.barHelpers.getStrokeWidth(n58, P5, v10), M4 = null, I3 = {
                            indexes: {
                                i: n58,
                                j: P5,
                                realIndex: v10,
                                bc: l46
                            },
                            x: u23,
                            y: f23,
                            strokeWidth: T4,
                            elSeries: y10
                        };
                        this.isHorizontal ? (M4 = this.drawBarPaths(e(e({
                        }, I3), {
                        }, {
                            barHeight: w8,
                            zeroW: g26,
                            yDivision: c36
                        })), A6 = this.series[n58][P5] / this.invertedYRatio) : (M4 = this.drawColumnPaths(e(e({
                        }, I3), {
                        }, {
                            xDivision: h39,
                            barWidth: A6,
                            zeroH: d32
                        })), w8 = this.series[n58][P5] / this.yRatio[this.yaxisIndex]);
                        var z2 = this.barHelpers.drawGoalLine({
                            barXPosition: M4.barXPosition,
                            barYPosition: M4.barYPosition,
                            goalX: M4.goalX,
                            goalY: M4.goalY,
                            barHeight: w8,
                            barWidth: A6
                        });
                        z2 && L5.add(z2), f23 = M4.y, u23 = M4.x, P5 > 0 && b16.push(u23 + A6 / 2), p19.push(f23);
                        var E2 = this.barHelpers.getPathFillColor(t270, n58, P5, v10);
                        this.renderSeries({
                            realIndex: v10,
                            pathFill: E2,
                            j: P5,
                            i: n58,
                            pathFrom: M4.pathFrom,
                            pathTo: M4.pathTo,
                            strokeWidth: T4,
                            elSeries: y10,
                            x: u23,
                            y: f23,
                            series: t270,
                            barHeight: w8,
                            barWidth: A6,
                            elDataLabelsWrap: C5,
                            elGoalsMarkers: L5,
                            visibleSeries: this.visibleI,
                            type: "bar"
                        });
                    }
                    a127.globals.seriesXvalues[v10] = b16, a127.globals.seriesYvalues[v10] = p19, o65.add(y10);
                }
                return o65;
            }
        },
        {
            key: "renderSeries",
            value: function(t271) {
                var e205 = t271.realIndex, i152 = t271.pathFill, a128 = t271.lineFill, s91 = t271.j, r80 = t271.i, o66 = t271.pathFrom, n59 = t271.pathTo, l47 = t271.strokeWidth, h40 = t271.elSeries, c37 = t271.x, d33 = t271.y, g27 = t271.y1, u24 = t271.y2, f24 = t271.series, p20 = t271.barHeight, x14 = t271.barWidth, b17 = t271.barYPosition, y11 = t271.elDataLabelsWrap, w9 = t271.elGoalsMarkers, k7 = t271.visibleSeries, A7 = t271.type, S7 = this.w, C6 = new m(this.ctx);
                a128 || (a128 = this.barOptions.distributed ? S7.globals.stroke.colors[s91] : S7.globals.stroke.colors[e205]), S7.config.series[r80].data[s91] && S7.config.series[r80].data[s91].strokeColor && (a128 = S7.config.series[r80].data[s91].strokeColor), this.isNullValue && (i152 = "none");
                var L6 = s91 / S7.config.chart.animations.animateGradually.delay * (S7.config.chart.animations.speed / S7.globals.dataPoints) / 2.4, P6 = C6.renderPaths({
                    i: r80,
                    j: s91,
                    realIndex: e205,
                    pathFrom: o66,
                    pathTo: n59,
                    stroke: a128,
                    strokeWidth: l47,
                    strokeLineCap: S7.config.stroke.lineCap,
                    fill: i152,
                    animationDelay: L6,
                    initialSpeed: S7.config.chart.animations.speed,
                    dataChangeSpeed: S7.config.chart.animations.dynamicAnimation.speed,
                    className: "apexcharts-".concat(A7, "-area")
                });
                P6.attr("clip-path", "url(#gridRectMask".concat(S7.globals.cuid, ")"));
                var T5 = S7.config.forecastDataPoints;
                T5.count > 0 && s91 >= S7.globals.dataPoints - T5.count && (P6.node.setAttribute("stroke-dasharray", T5.dashArray), P6.node.setAttribute("stroke-width", T5.strokeWidth), P6.node.setAttribute("fill-opacity", T5.fillOpacity)), void 0 !== g27 && void 0 !== u24 && (P6.attr("data-range-y1", g27), P6.attr("data-range-y2", u24)), new v(this.ctx).setSelectionFilter(P6, e205, s91), h40.add(P6);
                var M5 = new E(this).handleBarDataLabels({
                    x: c37,
                    y: d33,
                    y1: g27,
                    y2: u24,
                    i: r80,
                    j: s91,
                    series: f24,
                    realIndex: e205,
                    barHeight: p20,
                    barWidth: x14,
                    barYPosition: b17,
                    renderedPath: P6,
                    visibleSeries: k7
                });
                return null !== M5 && y11.add(M5), h40.add(y11), w9 && h40.add(w9), h40;
            }
        },
        {
            key: "drawBarPaths",
            value: function(t272) {
                var e206 = t272.indexes, i153 = t272.barHeight, a129 = t272.strokeWidth, s92 = t272.zeroW, r81 = t272.x, o67 = t272.y, n60 = t272.yDivision, l48 = t272.elSeries, h41 = this.w, c38 = e206.i, d34 = e206.j;
                h41.globals.isXNumeric && (o67 = (h41.globals.seriesX[c38][d34] - h41.globals.minX) / this.invertedXRatio - i153);
                var g28 = o67 + i153 * this.visibleI;
                r81 = this.barHelpers.getXForValue(this.series[c38][d34], s92);
                var u25 = this.barHelpers.getBarpaths({
                    barYPosition: g28,
                    barHeight: i153,
                    x1: s92,
                    x2: r81,
                    strokeWidth: a129,
                    series: this.series,
                    realIndex: e206.realIndex,
                    i: c38,
                    j: d34,
                    w: h41
                });
                return h41.globals.isXNumeric || (o67 += n60), this.barHelpers.barBackground({
                    j: d34,
                    i: c38,
                    y1: g28 - i153 * this.visibleI,
                    y2: i153 * this.seriesLen,
                    elSeries: l48
                }), {
                    pathTo: u25.pathTo,
                    pathFrom: u25.pathFrom,
                    x: r81,
                    y: o67,
                    goalX: this.barHelpers.getGoalValues("x", s92, null, c38, d34),
                    barYPosition: g28
                };
            }
        },
        {
            key: "drawColumnPaths",
            value: function(t273) {
                var e207 = t273.indexes, i154 = t273.x, a130 = t273.y, s93 = t273.xDivision, r82 = t273.barWidth, o68 = t273.zeroH, n61 = t273.strokeWidth, l49 = t273.elSeries, h42 = this.w, c39 = e207.realIndex, d35 = e207.i, g29 = e207.j, u26 = e207.bc;
                if (h42.globals.isXNumeric) {
                    var f25 = c39;
                    h42.globals.seriesX[c39].length || (f25 = h42.globals.maxValsInArrayIndex), i154 = (h42.globals.seriesX[f25][g29] - h42.globals.minX) / this.xRatio - r82 * this.seriesLen / 2;
                }
                var p21 = i154 + r82 * this.visibleI;
                a130 = this.barHelpers.getYForValue(this.series[d35][g29], o68);
                var x15 = this.barHelpers.getColumnPaths({
                    barXPosition: p21,
                    barWidth: r82,
                    y1: o68,
                    y2: a130,
                    strokeWidth: n61,
                    series: this.series,
                    realIndex: e207.realIndex,
                    i: d35,
                    j: g29,
                    w: h42
                });
                return h42.globals.isXNumeric || (i154 += s93), this.barHelpers.barBackground({
                    bc: u26,
                    j: g29,
                    i: d35,
                    x1: p21 - n61 / 2 - r82 * this.visibleI,
                    x2: r82 * this.seriesLen + n61 / 2,
                    elSeries: l49
                }), {
                    pathTo: x15.pathTo,
                    pathFrom: x15.pathFrom,
                    x: i154,
                    y: a130,
                    goalY: this.barHelpers.getGoalValues("y", null, o68, d35, g29),
                    barXPosition: p21
                };
            }
        },
        {
            key: "getPreviousPath",
            value: function(t274, e) {
                for(var i155, a131 = this.w, s94 = 0; s94 < a131.globals.previousPaths.length; s94++){
                    var r83 = a131.globals.previousPaths[s94];
                    r83.paths && r83.paths.length > 0 && parseInt(r83.realIndex, 10) === parseInt(t274, 10) && void 0 !== a131.globals.previousPaths[s94].paths[e] && (i155 = a131.globals.previousPaths[s94].paths[e].d);
                }
                return i155;
            }
        }
    ]), t269;
}(), R = function() {
    function t275(e208) {
        a(this, t275), this.ctx = e208, this.w = e208.w, this.months31 = [
            1,
            3,
            5,
            7,
            8,
            10,
            12
        ], this.months30 = [
            2,
            4,
            6,
            9,
            11
        ], this.daysCntOfYear = [
            0,
            31,
            59,
            90,
            120,
            151,
            181,
            212,
            243,
            273,
            304,
            334
        ];
    }
    return r(t275, [
        {
            key: "isValidDate",
            value: function(t276) {
                return !isNaN(this.parseDate(t276));
            }
        },
        {
            key: "getTimeStamp",
            value: function(t277) {
                return Date.parse(t277) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t277).toISOString().substr(0, 25)).getTime() : new Date(t277).getTime() : t277;
            }
        },
        {
            key: "getDate",
            value: function(t278) {
                return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t278).toUTCString()) : new Date(t278);
            }
        },
        {
            key: "parseDate",
            value: function(t279) {
                var e209 = Date.parse(t279);
                if (!isNaN(e209)) return this.getTimeStamp(t279);
                var i156 = Date.parse(t279.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
                return i156 = this.getTimeStamp(i156);
            }
        },
        {
            key: "parseDateWithTimezone",
            value: function(t280) {
                return Date.parse(t280.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
            }
        },
        {
            key: "formatDate",
            value: function(t281, e210) {
                var i157 = this.w.globals.locale, a132 = this.w.config.xaxis.labels.datetimeUTC, s95 = [
                    "\0"
                ].concat(u(i157.months)), r84 = [
                    "\x01"
                ].concat(u(i157.shortMonths)), o69 = [
                    "\x02"
                ].concat(u(i157.days)), n62 = [
                    "\x03"
                ].concat(u(i157.shortDays));
                function l50(t282, e211) {
                    var i158 = t282 + "";
                    for(e211 = e211 || 2; i158.length < e211;)i158 = "0" + i158;
                    return i158;
                }
                var h43 = a132 ? t281.getUTCFullYear() : t281.getFullYear();
                e210 = (e210 = (e210 = e210.replace(/(^|[^\\])yyyy+/g, "$1" + h43)).replace(/(^|[^\\])yy/g, "$1" + h43.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h43);
                var c40 = (a132 ? t281.getUTCMonth() : t281.getMonth()) + 1;
                e210 = (e210 = (e210 = (e210 = e210.replace(/(^|[^\\])MMMM+/g, "$1" + s95[0])).replace(/(^|[^\\])MMM/g, "$1" + r84[0])).replace(/(^|[^\\])MM/g, "$1" + l50(c40))).replace(/(^|[^\\])M/g, "$1" + c40);
                var d36 = a132 ? t281.getUTCDate() : t281.getDate();
                e210 = (e210 = (e210 = (e210 = e210.replace(/(^|[^\\])dddd+/g, "$1" + o69[0])).replace(/(^|[^\\])ddd/g, "$1" + n62[0])).replace(/(^|[^\\])dd/g, "$1" + l50(d36))).replace(/(^|[^\\])d/g, "$1" + d36);
                var g30 = a132 ? t281.getUTCHours() : t281.getHours(), f26 = g30 > 12 ? g30 - 12 : 0 === g30 ? 12 : g30;
                e210 = (e210 = (e210 = (e210 = e210.replace(/(^|[^\\])HH+/g, "$1" + l50(g30))).replace(/(^|[^\\])H/g, "$1" + g30)).replace(/(^|[^\\])hh+/g, "$1" + l50(f26))).replace(/(^|[^\\])h/g, "$1" + f26);
                var p22 = a132 ? t281.getUTCMinutes() : t281.getMinutes();
                e210 = (e210 = e210.replace(/(^|[^\\])mm+/g, "$1" + l50(p22))).replace(/(^|[^\\])m/g, "$1" + p22);
                var x16 = a132 ? t281.getUTCSeconds() : t281.getSeconds();
                e210 = (e210 = e210.replace(/(^|[^\\])ss+/g, "$1" + l50(x16))).replace(/(^|[^\\])s/g, "$1" + x16);
                var b18 = a132 ? t281.getUTCMilliseconds() : t281.getMilliseconds();
                e210 = e210.replace(/(^|[^\\])fff+/g, "$1" + l50(b18, 3)), b18 = Math.round(b18 / 10), e210 = e210.replace(/(^|[^\\])ff/g, "$1" + l50(b18)), b18 = Math.round(b18 / 10);
                var v11 = g30 < 12 ? "AM" : "PM";
                e210 = (e210 = (e210 = e210.replace(/(^|[^\\])f/g, "$1" + b18)).replace(/(^|[^\\])TT+/g, "$1" + v11)).replace(/(^|[^\\])T/g, "$1" + v11.charAt(0));
                var m4 = v11.toLowerCase();
                e210 = (e210 = e210.replace(/(^|[^\\])tt+/g, "$1" + m4)).replace(/(^|[^\\])t/g, "$1" + m4.charAt(0));
                var y12 = -t281.getTimezoneOffset(), w10 = a132 || !y12 ? "Z" : y12 > 0 ? "+" : "-";
                if (!a132) {
                    var k8 = (y12 = Math.abs(y12)) % 60;
                    w10 += l50(Math.floor(y12 / 60)) + ":" + l50(k8);
                }
                e210 = e210.replace(/(^|[^\\])K/g, "$1" + w10);
                var A = (a132 ? t281.getUTCDay() : t281.getDay()) + 1;
                return e210 = (e210 = (e210 = (e210 = (e210 = e210.replace(new RegExp(o69[0], "g"), o69[A])).replace(new RegExp(n62[0], "g"), n62[A])).replace(new RegExp(s95[0], "g"), s95[c40])).replace(new RegExp(r84[0], "g"), r84[c40])).replace(/\\(.)/g, "$1");
            }
        },
        {
            key: "getTimeUnitsfromTimestamp",
            value: function(t283, e212, i) {
                var a133 = this.w;
                void 0 !== a133.config.xaxis.min && (t283 = a133.config.xaxis.min), void 0 !== a133.config.xaxis.max && (e212 = a133.config.xaxis.max);
                var s96 = this.getDate(t283), r85 = this.getDate(e212), o70 = this.formatDate(s96, "yyyy MM dd HH mm ss fff").split(" "), n63 = this.formatDate(r85, "yyyy MM dd HH mm ss fff").split(" ");
                return {
                    minMillisecond: parseInt(o70[6], 10),
                    maxMillisecond: parseInt(n63[6], 10),
                    minSecond: parseInt(o70[5], 10),
                    maxSecond: parseInt(n63[5], 10),
                    minMinute: parseInt(o70[4], 10),
                    maxMinute: parseInt(n63[4], 10),
                    minHour: parseInt(o70[3], 10),
                    maxHour: parseInt(n63[3], 10),
                    minDate: parseInt(o70[2], 10),
                    maxDate: parseInt(n63[2], 10),
                    minMonth: parseInt(o70[1], 10) - 1,
                    maxMonth: parseInt(n63[1], 10) - 1,
                    minYear: parseInt(o70[0], 10),
                    maxYear: parseInt(n63[0], 10)
                };
            }
        },
        {
            key: "isLeapYear",
            value: function(t284) {
                return t284 % 4 == 0 && t284 % 100 != 0 || t284 % 400 == 0;
            }
        },
        {
            key: "calculcateLastDaysOfMonth",
            value: function(t285, e213, i159) {
                return this.determineDaysOfMonths(t285, e213) - i159;
            }
        },
        {
            key: "determineDaysOfYear",
            value: function(t286) {
                var e214 = 365;
                return this.isLeapYear(t286) && (e214 = 366), e214;
            }
        },
        {
            key: "determineRemainingDaysOfYear",
            value: function(t, e215, i160) {
                var a134 = this.daysCntOfYear[e215] + i160;
                return e215 > 1 && this.isLeapYear() && a134++, a134;
            }
        },
        {
            key: "determineDaysOfMonths",
            value: function(t287, e216) {
                var i161 = 30;
                switch(t287 = x.monthMod(t287), !0){
                    case this.months30.indexOf(t287) > -1:
                        2 === t287 && (i161 = this.isLeapYear(e216) ? 29 : 28);
                        break;
                    case this.months31.indexOf(t287) > -1:
                    default:
                        i161 = 31;
                }
                return i161;
            }
        }
    ]), t275;
}(), H = function(t288) {
    n(s97, F);
    var i162 = d(s97);
    function s97() {
        return a(this, s97), i162.apply(this, arguments);
    }
    return r(s97, [
        {
            key: "draw",
            value: function(t289, i163) {
                var a135 = this.w, s98 = new m(this.ctx);
                this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t289, this.seriesRangeStart = a135.globals.seriesRangeStart, this.seriesRangeEnd = a135.globals.seriesRangeEnd, this.barHelpers.initVariables(t289);
                for(var r86 = s98.group({
                    class: "apexcharts-rangebar-series apexcharts-plot-series"
                }), o71 = 0; o71 < t289.length; o71++){
                    var n64, l51, h44, c41 = void 0, d37 = void 0, g31 = void 0, u27 = a135.globals.comboCharts ? i163[o71] : o71, f27 = s98.group({
                        class: "apexcharts-series",
                        seriesName: x.escapeString(a135.globals.seriesNames[u27]),
                        rel: o71 + 1,
                        "data:realIndex": u27
                    });
                    this.ctx.series.addCollapsedClassToSeries(f27, u27), t289[o71].length > 0 && (this.visibleI = this.visibleI + 1);
                    var p23 = 0, b19 = 0;
                    this.yRatio.length > 1 && (this.yaxisIndex = u27);
                    var v12 = this.barHelpers.initialPositions();
                    d37 = v12.y, h44 = v12.zeroW, c41 = v12.x, b19 = v12.barWidth, n64 = v12.xDivision, l51 = v12.zeroH;
                    for(var y13 = s98.group({
                        class: "apexcharts-datalabels",
                        "data:realIndex": u27
                    }), w11 = s98.group({
                        class: "apexcharts-rangebar-goals-markers",
                        style: "pointer-events: none"
                    }), k9 = 0; k9 < a135.globals.dataPoints; k9++){
                        var A8 = this.barHelpers.getStrokeWidth(o71, k9, u27), S8 = this.seriesRangeStart[o71][k9], C7 = this.seriesRangeEnd[o71][k9], L7 = null, P7 = null, T6 = {
                            x: c41,
                            y: d37,
                            strokeWidth: A8,
                            elSeries: f27
                        };
                        if (g31 = v12.yDivision, p23 = v12.barHeight, this.isHorizontal) {
                            P7 = d37 + p23 * this.visibleI;
                            var M6 = this.seriesLen;
                            a135.config.plotOptions.bar.rangeBarGroupRows && (M6 = 1);
                            var I4 = (g31 - p23 * M6) / 2;
                            if (void 0 === a135.config.series[o71].data[k9]) break;
                            if (a135.config.series[o71].data[k9].x) {
                                var z3 = this.detectOverlappingBars({
                                    i: o71,
                                    j: k9,
                                    barYPosition: P7,
                                    srty: I4,
                                    barHeight: p23,
                                    yDivision: g31,
                                    initPositions: v12
                                });
                                p23 = z3.barHeight, P7 = z3.barYPosition;
                            }
                            b19 = (L7 = this.drawRangeBarPaths(e({
                                indexes: {
                                    i: o71,
                                    j: k9,
                                    realIndex: u27
                                },
                                barHeight: p23,
                                barYPosition: P7,
                                zeroW: h44,
                                yDivision: g31,
                                y1: S8,
                                y2: C7
                            }, T6))).barWidth;
                        } else p23 = (L7 = this.drawRangeColumnPaths(e({
                            indexes: {
                                i: o71,
                                j: k9,
                                realIndex: u27
                            },
                            zeroH: l51,
                            barWidth: b19,
                            xDivision: n64
                        }, T6))).barHeight;
                        var E3 = this.barHelpers.drawGoalLine({
                            barXPosition: L7.barXPosition,
                            barYPosition: P7,
                            goalX: L7.goalX,
                            goalY: L7.goalY,
                            barHeight: p23,
                            barWidth: b19
                        });
                        E3 && w11.add(E3), d37 = L7.y, c41 = L7.x;
                        var X2 = this.barHelpers.getPathFillColor(t289, o71, k9, u27), Y1 = a135.globals.stroke.colors[u27];
                        this.renderSeries({
                            realIndex: u27,
                            pathFill: X2,
                            lineFill: Y1,
                            j: k9,
                            i: o71,
                            x: c41,
                            y: d37,
                            y1: S8,
                            y2: C7,
                            pathFrom: L7.pathFrom,
                            pathTo: L7.pathTo,
                            strokeWidth: A8,
                            elSeries: f27,
                            series: t289,
                            barHeight: p23,
                            barYPosition: P7,
                            barWidth: b19,
                            elDataLabelsWrap: y13,
                            elGoalsMarkers: w11,
                            visibleSeries: this.visibleI,
                            type: "rangebar"
                        });
                    }
                    r86.add(f27);
                }
                return r86;
            }
        },
        {
            key: "detectOverlappingBars",
            value: function(t290) {
                var e = t290.i, i = t290.j, a136 = t290.barYPosition, s99 = t290.srty, r87 = t290.barHeight, o72 = t290.yDivision, n65 = t290.initPositions, l52 = this.w, h45 = [], c42 = l52.config.series[e].data[i].rangeName, d38 = l52.config.series[e].data[i].x, g32 = l52.globals.labels.indexOf(d38), u28 = l52.globals.seriesRangeBar[e].findIndex(function(t291) {
                    return t291.x === d38 && t291.overlaps.length > 0;
                });
                return a136 = l52.config.plotOptions.bar.rangeBarGroupRows ? s99 + o72 * g32 : s99 + r87 * this.visibleI + o72 * g32, u28 > -1 && !l52.config.plotOptions.bar.rangeBarOverlap && (h45 = l52.globals.seriesRangeBar[e][u28].overlaps).indexOf(c42) > -1 && (a136 = (r87 = n65.barHeight / h45.length) * this.visibleI + o72 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + r87 * (this.visibleI + h45.indexOf(c42)) + o72 * g32), {
                    barYPosition: a136,
                    barHeight: r87
                };
            }
        },
        {
            key: "drawRangeColumnPaths",
            value: function(t292) {
                var e217 = t292.indexes, i164 = t292.x;
                t292.strokeWidth;
                var a137 = t292.xDivision, s100 = t292.barWidth, r88 = t292.zeroH, o73 = this.w, n66 = e217.i, l53 = e217.j, h46 = this.yRatio[this.yaxisIndex], c43 = e217.realIndex, d39 = this.getRangeValue(c43, l53), g33 = Math.min(d39.start, d39.end), u29 = Math.max(d39.start, d39.end);
                o73.globals.isXNumeric && (i164 = (o73.globals.seriesX[n66][l53] - o73.globals.minX) / this.xRatio - s100 / 2);
                var f28 = i164 + s100 * this.visibleI;
                void 0 === this.series[n66][l53] || null === this.series[n66][l53] ? g33 = r88 : (g33 = r88 - g33 / h46, u29 = r88 - u29 / h46);
                var p24 = Math.abs(u29 - g33), x17 = this.barHelpers.getColumnPaths({
                    barXPosition: f28,
                    barWidth: s100,
                    y1: g33,
                    y2: u29,
                    strokeWidth: this.strokeWidth,
                    series: this.seriesRangeEnd,
                    realIndex: e217.realIndex,
                    i: c43,
                    j: l53,
                    w: o73
                });
                return o73.globals.isXNumeric || (i164 += a137), {
                    pathTo: x17.pathTo,
                    pathFrom: x17.pathFrom,
                    barHeight: p24,
                    x: i164,
                    y: u29,
                    goalY: this.barHelpers.getGoalValues("y", null, r88, n66, l53),
                    barXPosition: f28
                };
            }
        },
        {
            key: "drawRangeBarPaths",
            value: function(t293) {
                var e218 = t293.indexes, i165 = t293.y, a138 = t293.y1, s101 = t293.y2, r89 = t293.yDivision, o74 = t293.barHeight, n67 = t293.barYPosition, l54 = t293.zeroW, h47 = this.w, c44 = l54 + a138 / this.invertedYRatio, d40 = l54 + s101 / this.invertedYRatio, g34 = Math.abs(d40 - c44), u30 = this.barHelpers.getBarpaths({
                    barYPosition: n67,
                    barHeight: o74,
                    x1: c44,
                    x2: d40,
                    strokeWidth: this.strokeWidth,
                    series: this.seriesRangeEnd,
                    i: e218.realIndex,
                    realIndex: e218.realIndex,
                    j: e218.j,
                    w: h47
                });
                return h47.globals.isXNumeric || (i165 += r89), {
                    pathTo: u30.pathTo,
                    pathFrom: u30.pathFrom,
                    barWidth: g34,
                    x: d40,
                    goalX: this.barHelpers.getGoalValues("x", l54, null, e218.realIndex, e218.j),
                    y: i165
                };
            }
        },
        {
            key: "getRangeValue",
            value: function(t, e) {
                var i166 = this.w;
                return {
                    start: i166.globals.seriesRangeStart[t][e],
                    end: i166.globals.seriesRangeEnd[t][e]
                };
            }
        },
        {
            key: "getTooltipValues",
            value: function(t294) {
                var e219 = t294.ctx, i167 = t294.seriesIndex, a139 = t294.dataPointIndex, s102 = t294.y1, r90 = t294.y2, o75 = t294.w, n68 = o75.globals.seriesRangeStart[i167][a139], l55 = o75.globals.seriesRangeEnd[i167][a139], h48 = o75.globals.labels[a139], c45 = o75.config.series[i167].name ? o75.config.series[i167].name : "", d41 = o75.config.tooltip.y.formatter, g35 = o75.config.tooltip.y.title.formatter, u31 = {
                    w: o75,
                    seriesIndex: i167,
                    dataPointIndex: a139,
                    start: n68,
                    end: l55
                };
                "function" == typeof g35 && (c45 = g35(c45, u31)), Number.isFinite(s102) && Number.isFinite(r90) && (n68 = s102, l55 = r90, o75.config.series[i167].data[a139].x && (h48 = o75.config.series[i167].data[a139].x + ":"), "function" == typeof d41 && (h48 = d41(h48, u31)));
                var f29 = "", p25 = "", x18 = o75.globals.colors[i167];
                if (void 0 === o75.config.tooltip.x.formatter) {
                    if ("datetime" === o75.config.xaxis.type) {
                        var b20 = new R(e219);
                        f29 = b20.formatDate(b20.getDate(n68), o75.config.tooltip.x.format), p25 = b20.formatDate(b20.getDate(l55), o75.config.tooltip.x.format);
                    } else f29 = n68, p25 = l55;
                } else f29 = o75.config.tooltip.x.formatter(n68), p25 = o75.config.tooltip.x.formatter(l55);
                return {
                    start: n68,
                    end: l55,
                    startVal: f29,
                    endVal: p25,
                    ylabel: h48,
                    color: x18,
                    seriesName: c45
                };
            }
        },
        {
            key: "buildCustomTooltipHTML",
            value: function(t295) {
                var e220 = t295.color, i168 = t295.seriesName;
                return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e220 + '">' + (i168 || "") + '</span></div><div> <span class="category">' + t295.ylabel + ' </span> <span class="value start-value">' + t295.start + '</span> <span class="separator">-</span> <span class="value end-value">' + t295.end + "</span></div></div>";
            }
        }
    ]), s97;
}(), D = function() {
    function t296(e221) {
        a(this, t296), this.opts = e221;
    }
    return r(t296, [
        {
            key: "line",
            value: function() {
                return {
                    chart: {
                        animations: {
                            easing: "swing"
                        }
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        width: 5,
                        curve: "straight"
                    },
                    markers: {
                        size: 0,
                        hover: {
                            sizeOffset: 6
                        }
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        }
                    }
                };
            }
        },
        {
            key: "sparkline",
            value: function(t297) {
                this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
                return x.extend(t297, {
                    grid: {
                        show: !1,
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                    legend: {
                        show: !1
                    },
                    xaxis: {
                        labels: {
                            show: !1
                        },
                        tooltip: {
                            enabled: !1
                        },
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        }
                    },
                    chart: {
                        toolbar: {
                            show: !1
                        },
                        zoom: {
                            enabled: !1
                        }
                    },
                    dataLabels: {
                        enabled: !1
                    }
                });
            }
        },
        {
            key: "bar",
            value: function() {
                return {
                    chart: {
                        stacked: !1,
                        animations: {
                            easing: "swing"
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                position: "center"
                            }
                        }
                    },
                    dataLabels: {
                        style: {
                            colors: [
                                "#fff"
                            ]
                        },
                        background: {
                            enabled: !1
                        }
                    },
                    stroke: {
                        width: 0,
                        lineCap: "round"
                    },
                    fill: {
                        opacity: 0.85
                    },
                    legend: {
                        markers: {
                            shape: "square",
                            radius: 2,
                            size: 8
                        }
                    },
                    tooltip: {
                        shared: !1,
                        intersect: !0
                    },
                    xaxis: {
                        tooltip: {
                            enabled: !1
                        },
                        tickPlacement: "between",
                        crosshairs: {
                            width: "barWidth",
                            position: "back",
                            fill: {
                                type: "gradient"
                            },
                            dropShadow: {
                                enabled: !1
                            },
                            stroke: {
                                width: 0
                            }
                        }
                    }
                };
            }
        },
        {
            key: "candlestick",
            value: function() {
                var t298 = this;
                return {
                    stroke: {
                        width: 1,
                        colors: [
                            "#333"
                        ]
                    },
                    fill: {
                        opacity: 1
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    tooltip: {
                        shared: !0,
                        custom: function(e222) {
                            var i169 = e222.seriesIndex, a140 = e222.dataPointIndex, s103 = e222.w;
                            return t298._getBoxTooltip(s103, i169, a140, [
                                "Open",
                                "High",
                                "",
                                "Low",
                                "Close"
                            ], "candlestick");
                        }
                    },
                    states: {
                        active: {
                            filter: {
                                type: "none"
                            }
                        }
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        }
                    }
                };
            }
        },
        {
            key: "boxPlot",
            value: function() {
                var t299 = this;
                return {
                    chart: {
                        animations: {
                            dynamicAnimation: {
                                enabled: !1
                            }
                        }
                    },
                    stroke: {
                        width: 1,
                        colors: [
                            "#24292e"
                        ]
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    tooltip: {
                        shared: !0,
                        custom: function(e223) {
                            var i170 = e223.seriesIndex, a141 = e223.dataPointIndex, s104 = e223.w;
                            return t299._getBoxTooltip(s104, i170, a141, [
                                "Minimum",
                                "Q1",
                                "Median",
                                "Q3",
                                "Maximum"
                            ], "boxPlot");
                        }
                    },
                    markers: {
                        size: 5,
                        strokeWidth: 1,
                        strokeColors: "#111"
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        }
                    }
                };
            }
        },
        {
            key: "rangeBar",
            value: function() {
                return {
                    stroke: {
                        width: 0,
                        lineCap: "square"
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            dataLabels: {
                                position: "center"
                            }
                        }
                    },
                    dataLabels: {
                        enabled: !1,
                        formatter: function(t, e224) {
                            e224.ctx;
                            var i = e224.seriesIndex, a = e224.dataPointIndex, s105 = e224.w, r91 = s105.globals.seriesRangeStart[i][a];
                            return s105.globals.seriesRangeEnd[i][a] - r91;
                        },
                        background: {
                            enabled: !1
                        },
                        style: {
                            colors: [
                                "#fff"
                            ]
                        }
                    },
                    tooltip: {
                        shared: !1,
                        followCursor: !0,
                        custom: function(t300) {
                            return t300.w.config.plotOptions && t300.w.config.plotOptions.bar && t300.w.config.plotOptions.bar.horizontal ? (function(t301) {
                                var e225 = new H(t301.ctx, null), i171 = e225.getTooltipValues(t301), a142 = i171.color, s106 = i171.seriesName, r92 = i171.ylabel, o76 = i171.startVal, n69 = i171.endVal;
                                return e225.buildCustomTooltipHTML({
                                    color: a142,
                                    seriesName: s106,
                                    ylabel: r92,
                                    start: o76,
                                    end: n69
                                });
                            })(t300) : (function(t302) {
                                var e226 = new H(t302.ctx, null), i172 = e226.getTooltipValues(t302), a143 = i172.color, s107 = i172.seriesName, r93 = i172.ylabel, o77 = i172.start, n70 = i172.end;
                                return e226.buildCustomTooltipHTML({
                                    color: a143,
                                    seriesName: s107,
                                    ylabel: r93,
                                    start: o77,
                                    end: n70
                                });
                            })(t300);
                        }
                    },
                    xaxis: {
                        tickPlacement: "between",
                        tooltip: {
                            enabled: !1
                        },
                        crosshairs: {
                            stroke: {
                                width: 0
                            }
                        }
                    }
                };
            }
        },
        {
            key: "area",
            value: function() {
                return {
                    stroke: {
                        width: 4
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            inverseColors: !1,
                            shade: "light",
                            type: "vertical",
                            opacityFrom: 0.65,
                            opacityTo: 0.5,
                            stops: [
                                0,
                                100,
                                100
                            ]
                        }
                    },
                    markers: {
                        size: 0,
                        hover: {
                            sizeOffset: 6
                        }
                    },
                    tooltip: {
                        followCursor: !1
                    }
                };
            }
        },
        {
            key: "brush",
            value: function(t303) {
                return x.extend(t303, {
                    chart: {
                        toolbar: {
                            autoSelected: "selection",
                            show: !1
                        },
                        zoom: {
                            enabled: !1
                        }
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        width: 1
                    },
                    tooltip: {
                        enabled: !1
                    },
                    xaxis: {
                        tooltip: {
                            enabled: !1
                        }
                    }
                });
            }
        },
        {
            key: "stacked100",
            value: function(t304) {
                t304.dataLabels = t304.dataLabels || {
                }, t304.dataLabels.formatter = t304.dataLabels.formatter || void 0;
                var e227 = t304.dataLabels.formatter;
                return t304.yaxis.forEach(function(e, i) {
                    t304.yaxis[i].min = 0, t304.yaxis[i].max = 100;
                }), "bar" === t304.chart.type && (t304.dataLabels.formatter = e227 || function(t305) {
                    return "number" == typeof t305 && t305 ? t305.toFixed(0) + "%" : t305;
                }), t304;
            }
        },
        {
            key: "convertCatToNumeric",
            value: function(t306) {
                return t306.xaxis.convertedCatToNumeric = !0, t306;
            }
        },
        {
            key: "convertCatToNumericXaxis",
            value: function(t307, e, i173) {
                t307.xaxis.type = "numeric", t307.xaxis.labels = t307.xaxis.labels || {
                }, t307.xaxis.labels.formatter = t307.xaxis.labels.formatter || function(t308) {
                    return x.isNumber(t308) ? Math.floor(t308) : t308;
                };
                var a144 = t307.xaxis.labels.formatter, s108 = t307.xaxis.categories && t307.xaxis.categories.length ? t307.xaxis.categories : t307.labels;
                return i173 && i173.length && (s108 = i173.map(function(t309) {
                    return Array.isArray(t309) ? t309 : String(t309);
                })), s108 && s108.length && (t307.xaxis.labels.formatter = function(t310) {
                    return x.isNumber(t310) ? a144(s108[Math.floor(t310) - 1]) : a144(t310);
                }), t307.xaxis.categories = [], t307.labels = [], t307.xaxis.tickAmount = t307.xaxis.tickAmount || "dataPoints", t307;
            }
        },
        {
            key: "bubble",
            value: function() {
                return {
                    dataLabels: {
                        style: {
                            colors: [
                                "#fff"
                            ]
                        }
                    },
                    tooltip: {
                        shared: !1,
                        intersect: !0
                    },
                    xaxis: {
                        crosshairs: {
                            width: 0
                        }
                    },
                    fill: {
                        type: "solid",
                        gradient: {
                            shade: "light",
                            inverse: !0,
                            shadeIntensity: 0.55,
                            opacityFrom: 0.4,
                            opacityTo: 0.8
                        }
                    }
                };
            }
        },
        {
            key: "scatter",
            value: function() {
                return {
                    dataLabels: {
                        enabled: !1
                    },
                    tooltip: {
                        shared: !1,
                        intersect: !0
                    },
                    markers: {
                        size: 6,
                        strokeWidth: 1,
                        hover: {
                            sizeOffset: 2
                        }
                    }
                };
            }
        },
        {
            key: "heatmap",
            value: function() {
                return {
                    chart: {
                        stacked: !1
                    },
                    fill: {
                        opacity: 1
                    },
                    dataLabels: {
                        style: {
                            colors: [
                                "#fff"
                            ]
                        }
                    },
                    stroke: {
                        colors: [
                            "#fff"
                        ]
                    },
                    tooltip: {
                        followCursor: !0,
                        marker: {
                            show: !1
                        },
                        x: {
                            show: !1
                        }
                    },
                    legend: {
                        position: "top",
                        markers: {
                            shape: "square",
                            size: 10,
                            offsetY: 2
                        }
                    },
                    grid: {
                        padding: {
                            right: 20
                        }
                    }
                };
            }
        },
        {
            key: "treemap",
            value: function() {
                return {
                    chart: {
                        zoom: {
                            enabled: !1
                        }
                    },
                    dataLabels: {
                        style: {
                            fontSize: 14,
                            fontWeight: 600,
                            colors: [
                                "#fff"
                            ]
                        }
                    },
                    stroke: {
                        show: !0,
                        width: 2,
                        colors: [
                            "#fff"
                        ]
                    },
                    legend: {
                        show: !1
                    },
                    fill: {
                        gradient: {
                            stops: [
                                0,
                                100
                            ]
                        }
                    },
                    tooltip: {
                        followCursor: !0,
                        x: {
                            show: !1
                        }
                    },
                    grid: {
                        padding: {
                            left: 0,
                            right: 0
                        }
                    },
                    xaxis: {
                        crosshairs: {
                            show: !1
                        },
                        tooltip: {
                            enabled: !1
                        }
                    }
                };
            }
        },
        {
            key: "pie",
            value: function() {
                return {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: !1
                                }
                            }
                        }
                    },
                    dataLabels: {
                        formatter: function(t311) {
                            return t311.toFixed(1) + "%";
                        },
                        style: {
                            colors: [
                                "#fff"
                            ]
                        },
                        background: {
                            enabled: !1
                        },
                        dropShadow: {
                            enabled: !0
                        }
                    },
                    stroke: {
                        colors: [
                            "#fff"
                        ]
                    },
                    fill: {
                        opacity: 1,
                        gradient: {
                            shade: "light",
                            stops: [
                                0,
                                100
                            ]
                        }
                    },
                    tooltip: {
                        theme: "dark",
                        fillSeriesColor: !0
                    },
                    legend: {
                        position: "right"
                    }
                };
            }
        },
        {
            key: "donut",
            value: function() {
                return {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    dataLabels: {
                        formatter: function(t312) {
                            return t312.toFixed(1) + "%";
                        },
                        style: {
                            colors: [
                                "#fff"
                            ]
                        },
                        background: {
                            enabled: !1
                        },
                        dropShadow: {
                            enabled: !0
                        }
                    },
                    stroke: {
                        colors: [
                            "#fff"
                        ]
                    },
                    fill: {
                        opacity: 1,
                        gradient: {
                            shade: "light",
                            shadeIntensity: 0.35,
                            stops: [
                                80,
                                100
                            ],
                            opacityFrom: 1,
                            opacityTo: 1
                        }
                    },
                    tooltip: {
                        theme: "dark",
                        fillSeriesColor: !0
                    },
                    legend: {
                        position: "right"
                    }
                };
            }
        },
        {
            key: "polarArea",
            value: function() {
                return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount ? this.opts.yaxis[0].tickAmount : 6, {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    dataLabels: {
                        formatter: function(t313) {
                            return t313.toFixed(1) + "%";
                        },
                        enabled: !1
                    },
                    stroke: {
                        show: !0,
                        width: 2
                    },
                    fill: {
                        opacity: 0.7
                    },
                    tooltip: {
                        theme: "dark",
                        fillSeriesColor: !0
                    },
                    legend: {
                        position: "right"
                    }
                };
            }
        },
        {
            key: "radar",
            value: function() {
                return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, {
                    dataLabels: {
                        enabled: !1,
                        style: {
                            fontSize: "11px"
                        }
                    },
                    stroke: {
                        width: 2
                    },
                    markers: {
                        size: 3,
                        strokeWidth: 1,
                        strokeOpacity: 1
                    },
                    fill: {
                        opacity: 0.2
                    },
                    tooltip: {
                        shared: !1,
                        intersect: !0,
                        followCursor: !0
                    },
                    grid: {
                        show: !1
                    },
                    xaxis: {
                        labels: {
                            formatter: function(t314) {
                                return t314;
                            },
                            style: {
                                colors: [
                                    "#a8a8a8"
                                ],
                                fontSize: "11px"
                            }
                        },
                        tooltip: {
                            enabled: !1
                        },
                        crosshairs: {
                            show: !1
                        }
                    }
                };
            }
        },
        {
            key: "radialBar",
            value: function() {
                return {
                    chart: {
                        animations: {
                            dynamicAnimation: {
                                enabled: !0,
                                speed: 800
                            }
                        },
                        toolbar: {
                            show: !1
                        }
                    },
                    fill: {
                        gradient: {
                            shade: "dark",
                            shadeIntensity: 0.4,
                            inverseColors: !1,
                            type: "diagonal2",
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [
                                70,
                                98,
                                100
                            ]
                        }
                    },
                    legend: {
                        show: !1,
                        position: "right"
                    },
                    tooltip: {
                        enabled: !1,
                        fillSeriesColor: !0
                    }
                };
            }
        },
        {
            key: "_getBoxTooltip",
            value: function(t315, e228, i, a145, s109) {
                var r94 = t315.globals.seriesCandleO[e228][i], o78 = t315.globals.seriesCandleH[e228][i], n71 = t315.globals.seriesCandleM[e228][i], l56 = t315.globals.seriesCandleL[e228][i], h49 = t315.globals.seriesCandleC[e228][i];
                return t315.config.series[e228].type && t315.config.series[e228].type !== s109 ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t315.config.series[e228].name ? t315.config.series[e228].name : "series-" + (e228 + 1), ": <strong>").concat(t315.globals.series[e228][i], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t315.config.chart.type, '">') + "<div>".concat(a145[0], ': <span class="value">') + r94 + "</span></div>" + "<div>".concat(a145[1], ': <span class="value">') + o78 + "</span></div>" + (n71 ? "<div>".concat(a145[2], ': <span class="value">') + n71 + "</span></div>" : "") + "<div>".concat(a145[3], ': <span class="value">') + l56 + "</span></div>" + "<div>".concat(a145[4], ': <span class="value">') + h49 + "</span></div></div>";
            }
        }
    ]), t296;
}(), N = function() {
    function t316(e229) {
        a(this, t316), this.opts = e229;
    }
    return r(t316, [
        {
            key: "init",
            value: function(t317) {
                var e230 = t317.responsiveOverride, a146 = this.opts, s110 = new L, r95 = new D(a146);
                this.chartType = a146.chart.type, "histogram" === this.chartType && (a146.chart.type = "bar", a146 = x.extend({
                    plotOptions: {
                        bar: {
                            columnWidth: "99.99%"
                        }
                    }
                }, a146)), a146 = this.extendYAxis(a146), a146 = this.extendAnnotations(a146);
                var o79 = s110.init(), n72 = {
                };
                if (a146 && "object" === i(a146)) {
                    var l57 = {
                    };
                    l57 = -1 !== [
                        "line",
                        "area",
                        "bar",
                        "candlestick",
                        "boxPlot",
                        "rangeBar",
                        "histogram",
                        "bubble",
                        "scatter",
                        "heatmap",
                        "treemap",
                        "pie",
                        "polarArea",
                        "donut",
                        "radar",
                        "radialBar"
                    ].indexOf(a146.chart.type) ? r95[a146.chart.type]() : r95.line(), a146.chart.brush && a146.chart.brush.enabled && (l57 = r95.brush(l57)), a146.chart.stacked && "100%" === a146.chart.stackType && (a146 = r95.stacked100(a146)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(a146), a146.xaxis = a146.xaxis || window.Apex.xaxis || {
                    }, e230 || (a146.xaxis.convertedCatToNumeric = !1), ((a146 = this.checkForCatToNumericXAxis(this.chartType, l57, a146)).chart.sparkline && a146.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (l57 = r95.sparkline(l57)), n72 = x.extend(o79, l57);
                }
                var h50 = x.extend(n72, window.Apex);
                return o79 = x.extend(h50, a146), o79 = this.handleUserInputErrors(o79);
            }
        },
        {
            key: "checkForCatToNumericXAxis",
            value: function(t318, e231, i174) {
                var a147 = new D(i174), s111 = ("bar" === t318 || "boxPlot" === t318) && i174.plotOptions && i174.plotOptions.bar && i174.plotOptions.bar.horizontal, r96 = "pie" === t318 || "polarArea" === t318 || "donut" === t318 || "radar" === t318 || "radialBar" === t318 || "heatmap" === t318, o80 = "datetime" !== i174.xaxis.type && "numeric" !== i174.xaxis.type, n73 = i174.xaxis.tickPlacement ? i174.xaxis.tickPlacement : e231.xaxis && e231.xaxis.tickPlacement;
                return s111 || r96 || !o80 || "between" === n73 || (i174 = a147.convertCatToNumeric(i174)), i174;
            }
        },
        {
            key: "extendYAxis",
            value: function(t319, e232) {
                var i175 = new L;
                (void 0 === t319.yaxis || !t319.yaxis || Array.isArray(t319.yaxis) && 0 === t319.yaxis.length) && (t319.yaxis = {
                }), t319.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t319.yaxis = x.extend(t319.yaxis, window.Apex.yaxis)), t319.yaxis.constructor !== Array ? t319.yaxis = [
                    x.extend(i175.yAxis, t319.yaxis)
                ] : t319.yaxis = x.extendArray(t319.yaxis, i175.yAxis);
                var a148 = !1;
                t319.yaxis.forEach(function(t320) {
                    t320.logarithmic && (a148 = !0);
                });
                var s112 = t319.series;
                return e232 && !s112 && (s112 = e232.config.series), a148 && s112.length !== t319.yaxis.length && s112.length && (t319.yaxis = s112.map(function(e233, a149) {
                    if (e233.name || (s112[a149].name = "series-".concat(a149 + 1)), t319.yaxis[a149]) return t319.yaxis[a149].seriesName = s112[a149].name, t319.yaxis[a149];
                    var r97 = x.extend(i175.yAxis, t319.yaxis[0]);
                    return r97.show = !1, r97;
                })), a148 && s112.length > 1 && s112.length !== t319.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."), t319;
            }
        },
        {
            key: "extendAnnotations",
            value: function(t321) {
                return void 0 === t321.annotations && (t321.annotations = {
                }, t321.annotations.yaxis = [], t321.annotations.xaxis = [], t321.annotations.points = []), t321 = this.extendYAxisAnnotations(t321), t321 = this.extendXAxisAnnotations(t321), t321 = this.extendPointAnnotations(t321);
            }
        },
        {
            key: "extendYAxisAnnotations",
            value: function(t322) {
                var e234 = new L;
                return t322.annotations.yaxis = x.extendArray(void 0 !== t322.annotations.yaxis ? t322.annotations.yaxis : [], e234.yAxisAnnotation), t322;
            }
        },
        {
            key: "extendXAxisAnnotations",
            value: function(t323) {
                var e235 = new L;
                return t323.annotations.xaxis = x.extendArray(void 0 !== t323.annotations.xaxis ? t323.annotations.xaxis : [], e235.xAxisAnnotation), t323;
            }
        },
        {
            key: "extendPointAnnotations",
            value: function(t324) {
                var e236 = new L;
                return t324.annotations.points = x.extendArray(void 0 !== t324.annotations.points ? t324.annotations.points : [], e236.pointAnnotation), t324;
            }
        },
        {
            key: "checkForDarkTheme",
            value: function(t325) {
                t325.theme && "dark" === t325.theme.mode && (t325.tooltip || (t325.tooltip = {
                }), "light" !== t325.tooltip.theme && (t325.tooltip.theme = "dark"), t325.chart.foreColor || (t325.chart.foreColor = "#f6f7f8"), t325.chart.background || (t325.chart.background = "#424242"), t325.theme.palette || (t325.theme.palette = "palette4"));
            }
        },
        {
            key: "handleUserInputErrors",
            value: function(t326) {
                var e237 = t326;
                if (e237.tooltip.shared && e237.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
                if ("bar" === e237.chart.type && e237.plotOptions.bar.horizontal) {
                    if (e237.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                    e237.yaxis[0].reversed && (e237.yaxis[0].opposite = !0), e237.xaxis.tooltip.enabled = !1, e237.yaxis[0].tooltip.enabled = !1, e237.chart.zoom.enabled = !1;
                }
                return "bar" !== e237.chart.type && "rangeBar" !== e237.chart.type || e237.tooltip.shared && "barWidth" === e237.xaxis.crosshairs.width && e237.series.length > 1 && (e237.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e237.chart.type && "boxPlot" !== e237.chart.type || e237.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e237.chart.type, " chart is not supported.")), e237.yaxis[0].reversed = !1), e237;
            }
        }
    ]), t316;
}(), O = function() {
    function t327() {
        a(this, t327);
    }
    return r(t327, [
        {
            key: "initGlobalVars",
            value: function(t328) {
                t328.series = [], t328.seriesCandleO = [], t328.seriesCandleH = [], t328.seriesCandleM = [], t328.seriesCandleL = [], t328.seriesCandleC = [], t328.seriesRangeStart = [], t328.seriesRangeEnd = [], t328.seriesRangeBar = [], t328.seriesPercent = [], t328.seriesGoals = [], t328.seriesX = [], t328.seriesZ = [], t328.seriesNames = [], t328.seriesTotals = [], t328.seriesLog = [], t328.seriesColors = [], t328.stackedSeriesTotals = [], t328.seriesXvalues = [], t328.seriesYvalues = [], t328.labels = [], t328.categoryLabels = [], t328.timescaleLabels = [], t328.noLabelsProvided = !1, t328.resizeTimer = null, t328.selectionResizeTimer = null, t328.delayedElements = [], t328.pointsArray = [], t328.dataLabelsRects = [], t328.isXNumeric = !1, t328.xaxisLabelsCount = 0, t328.skipLastTimelinelabel = !1, t328.skipFirstTimelinelabel = !1, t328.isDataXYZ = !1, t328.isMultiLineX = !1, t328.isMultipleYAxis = !1, t328.maxY = -Number.MAX_VALUE, t328.minY = Number.MIN_VALUE, t328.minYArr = [], t328.maxYArr = [], t328.maxX = -Number.MAX_VALUE, t328.minX = Number.MAX_VALUE, t328.initialMaxX = -Number.MAX_VALUE, t328.initialMinX = Number.MAX_VALUE, t328.maxDate = 0, t328.minDate = Number.MAX_VALUE, t328.minZ = Number.MAX_VALUE, t328.maxZ = -Number.MAX_VALUE, t328.minXDiff = Number.MAX_VALUE, t328.yAxisScale = [], t328.xAxisScale = null, t328.xAxisTicksPositions = [], t328.yLabelsCoords = [], t328.yTitleCoords = [], t328.barPadForNumericAxis = 0, t328.padHorizontal = 0, t328.xRange = 0, t328.yRange = [], t328.zRange = 0, t328.dataPoints = 0, t328.xTickAmount = 0;
            }
        },
        {
            key: "globalVars",
            value: function(t329) {
                return {
                    chartID: null,
                    cuid: null,
                    events: {
                        beforeMount: [],
                        mounted: [],
                        updated: [],
                        clicked: [],
                        selection: [],
                        dataPointSelection: [],
                        zoomed: [],
                        scrolled: []
                    },
                    colors: [],
                    clientX: null,
                    clientY: null,
                    fill: {
                        colors: []
                    },
                    stroke: {
                        colors: []
                    },
                    dataLabels: {
                        style: {
                            colors: []
                        }
                    },
                    radarPolygons: {
                        fill: {
                            colors: []
                        }
                    },
                    markers: {
                        colors: [],
                        size: t329.markers.size,
                        largestSize: 0
                    },
                    animationEnded: !1,
                    isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                    isDirty: !1,
                    isExecCalled: !1,
                    initialConfig: null,
                    initialSeries: [],
                    lastXAxis: [],
                    lastYAxis: [],
                    columnSeries: null,
                    labels: [],
                    timescaleLabels: [],
                    noLabelsProvided: !1,
                    allSeriesCollapsed: !1,
                    collapsedSeries: [],
                    collapsedSeriesIndices: [],
                    ancillaryCollapsedSeries: [],
                    ancillaryCollapsedSeriesIndices: [],
                    risingSeries: [],
                    dataFormatXNumeric: !1,
                    capturedSeriesIndex: -1,
                    capturedDataPointIndex: -1,
                    selectedDataPoints: [],
                    goldenPadding: 35,
                    invalidLogScale: !1,
                    ignoreYAxisIndexes: [],
                    yAxisSameScaleIndices: [],
                    maxValsInArrayIndex: 0,
                    radialSize: 0,
                    selection: void 0,
                    zoomEnabled: "zoom" === t329.chart.toolbar.autoSelected && t329.chart.toolbar.tools.zoom && t329.chart.zoom.enabled,
                    panEnabled: "pan" === t329.chart.toolbar.autoSelected && t329.chart.toolbar.tools.pan,
                    selectionEnabled: "selection" === t329.chart.toolbar.autoSelected && t329.chart.toolbar.tools.selection,
                    yaxis: null,
                    mousedown: !1,
                    lastClientPosition: {
                    },
                    visibleXRange: void 0,
                    yValueDecimal: 0,
                    total: 0,
                    SVGNS: "http://www.w3.org/2000/svg",
                    svgWidth: 0,
                    svgHeight: 0,
                    noData: !1,
                    locale: {
                    },
                    dom: {
                    },
                    memory: {
                        methodsToExec: []
                    },
                    shouldAnimate: !0,
                    skipLastTimelinelabel: !1,
                    skipFirstTimelinelabel: !1,
                    delayedElements: [],
                    axisCharts: !0,
                    isDataXYZ: !1,
                    resized: !1,
                    resizeTimer: null,
                    comboCharts: !1,
                    dataChanged: !1,
                    previousPaths: [],
                    allSeriesHasEqualX: !0,
                    pointsArray: [],
                    dataLabelsRects: [],
                    lastDrawnDataLabelsIndexes: [],
                    hasNullValues: !1,
                    easing: null,
                    zoomed: !1,
                    gridWidth: 0,
                    gridHeight: 0,
                    rotateXLabels: !1,
                    defaultLabels: !1,
                    xLabelFormatter: void 0,
                    yLabelFormatters: [],
                    xaxisTooltipFormatter: void 0,
                    ttKeyFormatter: void 0,
                    ttVal: void 0,
                    ttZFormatter: void 0,
                    LINE_HEIGHT_RATIO: 1.618,
                    xAxisLabelsHeight: 0,
                    xAxisLabelsWidth: 0,
                    yAxisLabelsWidth: 0,
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0,
                    translateY: 0,
                    translateYAxisX: [],
                    yAxisWidths: [],
                    translateXAxisY: 0,
                    translateXAxisX: 0,
                    tooltip: null
                };
            }
        },
        {
            key: "init",
            value: function(t330) {
                var e238 = this.globalVars(t330);
                return this.initGlobalVars(e238), e238.initialConfig = x.extend({
                }, t330), e238.initialSeries = x.clone(t330.series), e238.lastXAxis = x.clone(e238.initialConfig.xaxis), e238.lastYAxis = x.clone(e238.initialConfig.yaxis), e238;
            }
        }
    ]), t327;
}(), W = function() {
    function t331(e239) {
        a(this, t331), this.opts = e239;
    }
    return r(t331, [
        {
            key: "init",
            value: function() {
                var t332 = new N(this.opts).init({
                    responsiveOverride: !1
                });
                return {
                    config: t332,
                    globals: (new O).init(t332)
                };
            }
        }
    ]), t331;
}(), B = function() {
    function t333(e240) {
        a(this, t333), this.ctx = e240, this.w = e240.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new k(this.ctx);
    }
    return r(t333, [
        {
            key: "isMultiFormat",
            value: function() {
                return this.isFormatXY() || this.isFormat2DArray();
            }
        },
        {
            key: "isFormatXY",
            value: function() {
                var t334 = this.w.config.series.slice(), e241 = new X(this.ctx);
                if (this.activeSeriesIndex = e241.getActiveConfigSeriesIndex(), void 0 !== t334[this.activeSeriesIndex].data && t334[this.activeSeriesIndex].data.length > 0 && null !== t334[this.activeSeriesIndex].data[0] && void 0 !== t334[this.activeSeriesIndex].data[0].x && null !== t334[this.activeSeriesIndex].data[0]) return !0;
            }
        },
        {
            key: "isFormat2DArray",
            value: function() {
                var t335 = this.w.config.series.slice(), e242 = new X(this.ctx);
                if (this.activeSeriesIndex = e242.getActiveConfigSeriesIndex(), void 0 !== t335[this.activeSeriesIndex].data && t335[this.activeSeriesIndex].data.length > 0 && void 0 !== t335[this.activeSeriesIndex].data[0] && null !== t335[this.activeSeriesIndex].data[0] && t335[this.activeSeriesIndex].data[0].constructor === Array) return !0;
            }
        },
        {
            key: "handleFormat2DArray",
            value: function(t336, e) {
                for(var i176 = this.w.config, a150 = this.w.globals, s113 = "boxPlot" === i176.chart.type || "boxPlot" === i176.series[e].type, r98 = 0; r98 < t336[e].data.length; r98++)if (void 0 !== t336[e].data[r98][1] && (Array.isArray(t336[e].data[r98][1]) && 4 === t336[e].data[r98][1].length && !s113 ? this.twoDSeries.push(x.parseNumber(t336[e].data[r98][1][3])) : t336[e].data[r98].length >= 5 ? this.twoDSeries.push(x.parseNumber(t336[e].data[r98][4])) : this.twoDSeries.push(x.parseNumber(t336[e].data[r98][1])), a150.dataFormatXNumeric = !0), "datetime" === i176.xaxis.type) {
                    var o81 = new Date(t336[e].data[r98][0]);
                    o81 = new Date(o81).getTime(), this.twoDSeriesX.push(o81);
                } else this.twoDSeriesX.push(t336[e].data[r98][0]);
                for(var n74 = 0; n74 < t336[e].data.length; n74++)void 0 !== t336[e].data[n74][2] && (this.threeDSeries.push(t336[e].data[n74][2]), a150.isDataXYZ = !0);
            }
        },
        {
            key: "handleFormatXY",
            value: function(t337, e243) {
                var i177 = this.w.config, a151 = this.w.globals, s114 = new R(this.ctx), r99 = e243;
                a151.collapsedSeriesIndices.indexOf(e243) > -1 && (r99 = this.activeSeriesIndex);
                for(var o82 = 0; o82 < t337[e243].data.length; o82++)void 0 !== t337[e243].data[o82].y && (Array.isArray(t337[e243].data[o82].y) ? this.twoDSeries.push(x.parseNumber(t337[e243].data[o82].y[t337[e243].data[o82].y.length - 1])) : this.twoDSeries.push(x.parseNumber(t337[e243].data[o82].y))), void 0 !== t337[e243].data[o82].goals && Array.isArray(t337[e243].data[o82].goals) ? (void 0 === this.seriesGoals[e243] && (this.seriesGoals[e243] = []), this.seriesGoals[e243].push(t337[e243].data[o82].goals)) : (void 0 === this.seriesGoals[e243] && (this.seriesGoals[e243] = []), this.seriesGoals[e243].push(null));
                for(var n75 = 0; n75 < t337[r99].data.length; n75++){
                    var l58 = "string" == typeof t337[r99].data[n75].x, h51 = Array.isArray(t337[r99].data[n75].x), c46 = !h51 && !!s114.isValidDate(t337[r99].data[n75].x.toString());
                    if (l58 || c46) {
                        if (l58 || i177.xaxis.convertedCatToNumeric) {
                            var d42 = a151.isBarHorizontal && a151.isRangeData;
                            "datetime" !== i177.xaxis.type || d42 ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t337[r99].data[n75].x)) : this.twoDSeriesX.push(s114.parseDate(t337[r99].data[n75].x));
                        } else "datetime" === i177.xaxis.type ? this.twoDSeriesX.push(s114.parseDate(t337[r99].data[n75].x.toString())) : (a151.dataFormatXNumeric = !0, a151.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t337[r99].data[n75].x)));
                    } else h51 ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t337[r99].data[n75].x)) : (a151.isXNumeric = !0, a151.dataFormatXNumeric = !0, this.twoDSeriesX.push(t337[r99].data[n75].x));
                }
                if (t337[e243].data[0] && void 0 !== t337[e243].data[0].z) {
                    for(var g36 = 0; g36 < t337[e243].data.length; g36++)this.threeDSeries.push(t337[e243].data[g36].z);
                    a151.isDataXYZ = !0;
                }
            }
        },
        {
            key: "handleRangeData",
            value: function(t338, e244) {
                var i178 = this.w.globals, a152 = {
                };
                return this.isFormat2DArray() ? a152 = this.handleRangeDataFormat("array", t338, e244) : this.isFormatXY() && (a152 = this.handleRangeDataFormat("xy", t338, e244)), i178.seriesRangeStart.push(a152.start), i178.seriesRangeEnd.push(a152.end), i178.seriesRangeBar.push(a152.rangeUniques), i178.seriesRangeBar.forEach(function(t339, e245) {
                    t339 && t339.forEach(function(t340, e246) {
                        t340.y.forEach(function(e247, i179) {
                            for(var a153 = 0; a153 < t340.y.length; a153++)if (i179 !== a153) {
                                var s115 = e247.y1, r100 = e247.y2, o83 = t340.y[a153].y1;
                                s115 <= t340.y[a153].y2 && o83 <= r100 && (t340.overlaps.indexOf(e247.rangeName) < 0 && t340.overlaps.push(e247.rangeName), t340.overlaps.indexOf(t340.y[a153].rangeName) < 0 && t340.overlaps.push(t340.y[a153].rangeName));
                            }
                        });
                    });
                }), a152;
            }
        },
        {
            key: "handleCandleStickBoxData",
            value: function(t341, e248) {
                var i180 = this.w.globals, a154 = {
                };
                return this.isFormat2DArray() ? a154 = this.handleCandleStickBoxDataFormat("array", t341, e248) : this.isFormatXY() && (a154 = this.handleCandleStickBoxDataFormat("xy", t341, e248)), i180.seriesCandleO[e248] = a154.o, i180.seriesCandleH[e248] = a154.h, i180.seriesCandleM[e248] = a154.m, i180.seriesCandleL[e248] = a154.l, i180.seriesCandleC[e248] = a154.c, a154;
            }
        },
        {
            key: "handleRangeDataFormat",
            value: function(t342, e249, i181) {
                var a155 = [], s116 = [], r101 = e249[i181].data.filter(function(t343, e250, i182) {
                    return e250 === i182.findIndex(function(e251) {
                        return e251.x === t343.x;
                    });
                }).map(function(t344, e) {
                    return {
                        x: t344.x,
                        overlaps: [],
                        y: []
                    };
                }), o84 = "Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts", n76 = new X(this.ctx).getActiveConfigSeriesIndex();
                if ("array" === t342) {
                    if (2 !== e249[n76].data[0][1].length) throw new Error(o84);
                    for(var l59 = 0; l59 < e249[i181].data.length; l59++)a155.push(e249[i181].data[l59][1][0]), s116.push(e249[i181].data[l59][1][1]);
                } else if ("xy" === t342) {
                    if (2 !== e249[n76].data[0].y.length) throw new Error(o84);
                    for(var h52 = function(t345) {
                        var o85 = x.randomId(), n77 = e249[i181].data[t345].x, l60 = {
                            y1: e249[i181].data[t345].y[0],
                            y2: e249[i181].data[t345].y[1],
                            rangeName: o85
                        };
                        e249[i181].data[t345].rangeName = o85;
                        var h = r101.findIndex(function(t346) {
                            return t346.x === n77;
                        });
                        r101[h].y.push(l60), a155.push(l60.y1), s116.push(l60.y2);
                    }, c47 = 0; c47 < e249[i181].data.length; c47++)h52(c47);
                }
                return {
                    start: a155,
                    end: s116,
                    rangeUniques: r101
                };
            }
        },
        {
            key: "handleCandleStickBoxDataFormat",
            value: function(t347, e252, i) {
                var a156 = this.w, s117 = "boxPlot" === a156.config.chart.type || "boxPlot" === a156.config.series[i].type, r102 = [], o86 = [], n78 = [], l61 = [], h53 = [];
                if ("array" === t347) {
                    if (s117 && 6 === e252[i].data[0].length || !s117 && 5 === e252[i].data[0].length) for(var c48 = 0; c48 < e252[i].data.length; c48++)r102.push(e252[i].data[c48][1]), o86.push(e252[i].data[c48][2]), s117 ? (n78.push(e252[i].data[c48][3]), l61.push(e252[i].data[c48][4]), h53.push(e252[i].data[c48][5])) : (l61.push(e252[i].data[c48][3]), h53.push(e252[i].data[c48][4]));
                    else for(var d43 = 0; d43 < e252[i].data.length; d43++)Array.isArray(e252[i].data[d43][1]) && (r102.push(e252[i].data[d43][1][0]), o86.push(e252[i].data[d43][1][1]), s117 ? (n78.push(e252[i].data[d43][1][2]), l61.push(e252[i].data[d43][1][3]), h53.push(e252[i].data[d43][1][4])) : (l61.push(e252[i].data[d43][1][2]), h53.push(e252[i].data[d43][1][3])));
                } else if ("xy" === t347) for(var g37 = 0; g37 < e252[i].data.length; g37++)Array.isArray(e252[i].data[g37].y) && (r102.push(e252[i].data[g37].y[0]), o86.push(e252[i].data[g37].y[1]), s117 ? (n78.push(e252[i].data[g37].y[2]), l61.push(e252[i].data[g37].y[3]), h53.push(e252[i].data[g37].y[4])) : (l61.push(e252[i].data[g37].y[2]), h53.push(e252[i].data[g37].y[3])));
                return {
                    o: r102,
                    h: o86,
                    m: n78,
                    l: l61,
                    c: h53
                };
            }
        },
        {
            key: "parseDataAxisCharts",
            value: function(t348) {
                var e253 = this, i183 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, a157 = this.w.config, s118 = this.w.globals, r103 = new R(i183), o87 = a157.labels.length > 0 ? a157.labels.slice() : a157.xaxis.categories.slice();
                s118.isRangeBar = "rangeBar" === a157.chart.type && s118.isBarHorizontal;
                for(var n79 = function() {
                    for(var t349 = 0; t349 < o87.length; t349++)if ("string" == typeof o87[t349]) {
                        if (!r103.isValidDate(o87[t349])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                        e253.twoDSeriesX.push(r103.parseDate(o87[t349]));
                    } else e253.twoDSeriesX.push(o87[t349]);
                }, l62 = 0; l62 < t348.length; l62++){
                    if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t348[l62].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                    if ("rangeBar" !== a157.chart.type && "rangeArea" !== a157.chart.type && "rangeBar" !== t348[l62].type && "rangeArea" !== t348[l62].type || (s118.isRangeData = !0, this.handleRangeData(t348, l62)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t348, l62) : this.isFormatXY() && this.handleFormatXY(t348, l62), "candlestick" !== a157.chart.type && "candlestick" !== t348[l62].type && "boxPlot" !== a157.chart.type && "boxPlot" !== t348[l62].type || this.handleCandleStickBoxData(t348, l62), s118.series.push(this.twoDSeries), s118.labels.push(this.twoDSeriesX), s118.seriesX.push(this.twoDSeriesX), s118.seriesGoals = this.seriesGoals, l62 !== this.activeSeriesIndex || this.fallbackToCategory || (s118.isXNumeric = !0);
                    else {
                        "datetime" === a157.xaxis.type ? (s118.isXNumeric = !0, n79(), s118.seriesX.push(this.twoDSeriesX)) : "numeric" === a157.xaxis.type && (s118.isXNumeric = !0, o87.length > 0 && (this.twoDSeriesX = o87, s118.seriesX.push(this.twoDSeriesX))), s118.labels.push(this.twoDSeriesX);
                        var h54 = t348[l62].data.map(function(t350) {
                            return x.parseNumber(t350);
                        });
                        s118.series.push(h54);
                    }
                    s118.seriesZ.push(this.threeDSeries), void 0 !== t348[l62].name ? s118.seriesNames.push(t348[l62].name) : s118.seriesNames.push("series-" + parseInt(l62 + 1, 10)), void 0 !== t348[l62].color ? s118.seriesColors.push(t348[l62].color) : s118.seriesColors.push(void 0);
                }
                return this.w;
            }
        },
        {
            key: "parseDataNonAxisCharts",
            value: function(t351) {
                var e254 = this.w.globals, i184 = this.w.config;
                e254.series = t351.slice(), e254.seriesNames = i184.labels.slice();
                for(var a158 = 0; a158 < e254.series.length; a158++)void 0 === e254.seriesNames[a158] && e254.seriesNames.push("series-" + (a158 + 1));
                return this.w;
            }
        },
        {
            key: "handleExternalLabelsData",
            value: function(t352) {
                var e255 = this.w.config, i185 = this.w.globals;
                if (e255.xaxis.categories.length > 0) i185.labels = e255.xaxis.categories;
                else if (e255.labels.length > 0) i185.labels = e255.labels.slice();
                else if (this.fallbackToCategory) {
                    if (i185.labels = i185.labels[0], i185.seriesRangeBar.length && (i185.seriesRangeBar.map(function(t353) {
                        t353.forEach(function(t354) {
                            i185.labels.indexOf(t354.x) < 0 && t354.x && i185.labels.push(t354.x);
                        });
                    }), i185.labels = i185.labels.filter(function(t355, e256, i186) {
                        return i186.indexOf(t355) === e256;
                    })), e255.xaxis.convertedCatToNumeric) new D(e255).convertCatToNumericXaxis(e255, this.ctx, i185.seriesX[0]), this._generateExternalLabels(t352);
                } else this._generateExternalLabels(t352);
            }
        },
        {
            key: "_generateExternalLabels",
            value: function(t356) {
                var e257 = this.w.globals, i187 = this.w.config, a159 = [];
                if (e257.axisCharts) {
                    if (e257.series.length > 0) {
                        if (this.isFormatXY()) for(var s119 = i187.series.map(function(t357, e258) {
                            return t357.data.filter(function(t358, e259, i188) {
                                return i188.findIndex(function(e260) {
                                    return e260.x === t358.x;
                                }) === e259;
                            });
                        }), r = s119.reduce(function(t359, e261, i189, a160) {
                            return a160[t359].length > e261.length ? t359 : i189;
                        }, 0), o88 = 0; o88 < s119[r].length; o88++)a159.push(o88 + 1);
                        else for(var n80 = 0; n80 < e257.series[e257.maxValsInArrayIndex].length; n80++)a159.push(n80 + 1);
                    }
                    e257.seriesX = [];
                    for(var l63 = 0; l63 < t356.length; l63++)e257.seriesX.push(a159);
                    e257.isXNumeric = !0;
                }
                if (0 === a159.length) {
                    a159 = e257.axisCharts ? [] : e257.series.map(function(t, e262) {
                        return e262 + 1;
                    });
                    for(var h55 = 0; h55 < t356.length; h55++)e257.seriesX.push(a159);
                }
                e257.labels = a159, i187.xaxis.convertedCatToNumeric && (e257.categoryLabels = a159.map(function(t360) {
                    return i187.xaxis.labels.formatter(t360);
                })), e257.noLabelsProvided = !0;
            }
        },
        {
            key: "parseData",
            value: function(t361) {
                var e263 = this.w, i190 = e263.config, a161 = e263.globals;
                if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a161.axisCharts ? this.parseDataAxisCharts(t361) : this.parseDataNonAxisCharts(t361), this.coreUtils.getLargestSeries(), "bar" === i190.chart.type && i190.chart.stacked) {
                    var s120 = new X(this.ctx);
                    a161.series = s120.setNullSeriesToZeroValues(a161.series);
                }
                this.coreUtils.getSeriesTotals(), a161.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), a161.dataFormatXNumeric || a161.isXNumeric && ("numeric" !== i190.xaxis.type || 0 !== i190.labels.length || 0 !== i190.xaxis.categories.length) || this.handleExternalLabelsData(t361);
                for(var r104 = this.coreUtils.getCategoryLabels(a161.labels), o89 = 0; o89 < r104.length; o89++)if (Array.isArray(r104[o89])) {
                    a161.isMultiLineX = !0;
                    break;
                }
            }
        },
        {
            key: "excludeCollapsedSeriesInYAxis",
            value: function() {
                var t362 = this, e264 = this.w;
                e264.globals.ignoreYAxisIndexes = e264.globals.collapsedSeries.map(function(i191, a) {
                    if (t362.w.globals.isMultipleYAxis && !e264.config.chart.stacked) return i191.index;
                });
            }
        }
    ]), t333;
}(), V = function() {
    function t363(e265) {
        a(this, t363), this.ctx = e265, this.w = e265.w, this.tooltipKeyFormat = "dd MMM";
    }
    return r(t363, [
        {
            key: "xLabelFormat",
            value: function(t364, e266, i192, a162) {
                var s121 = this.w;
                if ("datetime" === s121.config.xaxis.type && void 0 === s121.config.xaxis.labels.formatter && void 0 === s121.config.tooltip.x.formatter) {
                    var r105 = new R(this.ctx);
                    return r105.formatDate(r105.getDate(e266), s121.config.tooltip.x.format);
                }
                return t364(e266, i192, a162);
            }
        },
        {
            key: "defaultGeneralFormatter",
            value: function(t365) {
                return Array.isArray(t365) ? t365.map(function(t366) {
                    return t366;
                }) : t365;
            }
        },
        {
            key: "defaultYFormatter",
            value: function(t367, e267, i) {
                var a163 = this.w;
                return x.isNumber(t367) && (t367 = 0 !== a163.globals.yValueDecimal ? t367.toFixed(void 0 !== e267.decimalsInFloat ? e267.decimalsInFloat : a163.globals.yValueDecimal) : a163.globals.maxYArr[i] - a163.globals.minYArr[i] < 5 ? t367.toFixed(1) : t367.toFixed(0)), t367;
            }
        },
        {
            key: "setLabelFormatters",
            value: function() {
                var t368 = this, e268 = this.w;
                return e268.globals.xaxisTooltipFormatter = function(e269) {
                    return t368.defaultGeneralFormatter(e269);
                }, e268.globals.ttKeyFormatter = function(e270) {
                    return t368.defaultGeneralFormatter(e270);
                }, e268.globals.ttZFormatter = function(t369) {
                    return t369;
                }, e268.globals.legendFormatter = function(e271) {
                    return t368.defaultGeneralFormatter(e271);
                }, void 0 !== e268.config.xaxis.labels.formatter ? e268.globals.xLabelFormatter = e268.config.xaxis.labels.formatter : e268.globals.xLabelFormatter = function(t370) {
                    if (x.isNumber(t370)) {
                        if (!e268.config.xaxis.convertedCatToNumeric && "numeric" === e268.config.xaxis.type) {
                            if (x.isNumber(e268.config.xaxis.decimalsInFloat)) return t370.toFixed(e268.config.xaxis.decimalsInFloat);
                            var i193 = e268.globals.maxX - e268.globals.minX;
                            return i193 > 0 && i193 < 100 ? t370.toFixed(1) : t370.toFixed(0);
                        }
                        if (e268.globals.isBarHorizontal) {
                            if (e268.globals.maxY - e268.globals.minYArr < 4) return t370.toFixed(1);
                        }
                        return t370.toFixed(0);
                    }
                    return t370;
                }, "function" == typeof e268.config.tooltip.x.formatter ? e268.globals.ttKeyFormatter = e268.config.tooltip.x.formatter : e268.globals.ttKeyFormatter = e268.globals.xLabelFormatter, "function" == typeof e268.config.xaxis.tooltip.formatter && (e268.globals.xaxisTooltipFormatter = e268.config.xaxis.tooltip.formatter), (Array.isArray(e268.config.tooltip.y) || void 0 !== e268.config.tooltip.y.formatter) && (e268.globals.ttVal = e268.config.tooltip.y), void 0 !== e268.config.tooltip.z.formatter && (e268.globals.ttZFormatter = e268.config.tooltip.z.formatter), void 0 !== e268.config.legend.formatter && (e268.globals.legendFormatter = e268.config.legend.formatter), e268.config.yaxis.forEach(function(i194, a164) {
                    void 0 !== i194.labels.formatter ? e268.globals.yLabelFormatters[a164] = i194.labels.formatter : e268.globals.yLabelFormatters[a164] = function(s122) {
                        return e268.globals.xyCharts ? Array.isArray(s122) ? s122.map(function(e272) {
                            return t368.defaultYFormatter(e272, i194, a164);
                        }) : t368.defaultYFormatter(s122, i194, a164) : s122;
                    };
                }), e268.globals;
            }
        },
        {
            key: "heatmapLabelFormatters",
            value: function() {
                var t371 = this.w;
                if ("heatmap" === t371.config.chart.type) {
                    t371.globals.yAxisScale[0].result = t371.globals.seriesNames.slice();
                    var e273 = t371.globals.seriesNames.reduce(function(t372, e275) {
                        return t372.length > e275.length ? t372 : e275;
                    }, 0);
                    t371.globals.yAxisScale[0].niceMax = e273, t371.globals.yAxisScale[0].niceMin = e273;
                }
            }
        }
    ]), t363;
}(), G = function() {
    function t373(e276) {
        a(this, t373), this.ctx = e276, this.w = e276.w;
    }
    return r(t373, [
        {
            key: "getLabel",
            value: function(t374, e277, i195, a165) {
                var s123 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], r106 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px", o90 = this.w, n81 = void 0 === t374[a165] ? "" : t374[a165], l64 = n81, h56 = o90.globals.xLabelFormatter, c49 = o90.config.xaxis.labels.formatter, d44 = !1, g38 = new V(this.ctx), u32 = n81;
                l64 = g38.xLabelFormat(h56, n81, u32, {
                    i: a165,
                    dateFormatter: new R(this.ctx).formatDate,
                    w: o90
                }), void 0 !== c49 && (l64 = c49(n81, t374[a165], {
                    i: a165,
                    dateFormatter: new R(this.ctx).formatDate,
                    w: o90
                }));
                var f30 = function(t375) {
                    var i196 = null;
                    return e277.forEach(function(t376) {
                        "month" === t376.unit ? i196 = "year" : "day" === t376.unit ? i196 = "month" : "hour" === t376.unit ? i196 = "day" : "minute" === t376.unit && (i196 = "hour");
                    }), i196 === t375;
                };
                e277.length > 0 ? (d44 = f30(e277[a165].unit), i195 = e277[a165].position, l64 = e277[a165].value) : "datetime" === o90.config.xaxis.type && void 0 === c49 && (l64 = ""), void 0 === l64 && (l64 = ""), l64 = Array.isArray(l64) ? l64 : l64.toString();
                var p26 = new m(this.ctx), x19 = {
                };
                x19 = o90.globals.rotateXLabels ? p26.getTextRects(l64, parseInt(r106, 10), null, "rotate(".concat(o90.config.xaxis.labels.rotate, " 0 0)"), !1) : p26.getTextRects(l64, parseInt(r106, 10));
                var b21 = !o90.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
                return !Array.isArray(l64) && (0 === l64.indexOf("NaN") || 0 === l64.toLowerCase().indexOf("invalid") || l64.toLowerCase().indexOf("infinity") >= 0 || s123.indexOf(l64) >= 0 && b21) && (l64 = ""), {
                    x: i195,
                    text: l64,
                    textRect: x19,
                    isBold: d44
                };
            }
        },
        {
            key: "checkLabelBasedOnTickamount",
            value: function(t377, e278, i197) {
                var a166 = this.w, s124 = a166.config.xaxis.tickAmount;
                return "dataPoints" === s124 && (s124 = Math.round(a166.globals.gridWidth / 120)), s124 > i197 || t377 % Math.round(i197 / (s124 + 1)) == 0 || (e278.text = ""), e278;
            }
        },
        {
            key: "checkForOverflowingLabels",
            value: function(t378, e279, i198, a167, s125) {
                var r107 = this.w;
                if (0 === t378 && r107.globals.skipFirstTimelinelabel && (e279.text = ""), t378 === i198 - 1 && r107.globals.skipLastTimelinelabel && (e279.text = ""), r107.config.xaxis.labels.hideOverlappingLabels && a167.length > 0) {
                    var o91 = s125[s125.length - 1];
                    e279.x < o91.textRect.width / (r107.globals.rotateXLabels ? Math.abs(r107.config.xaxis.labels.rotate) / 12 : 1.01) + o91.x && (e279.text = "");
                }
                return e279;
            }
        },
        {
            key: "checkForReversedLabels",
            value: function(t, e280) {
                var i199 = this.w;
                return i199.config.yaxis[t] && i199.config.yaxis[t].reversed && e280.reverse(), e280;
            }
        },
        {
            key: "isYAxisHidden",
            value: function(t379) {
                var e281 = this.w, i200 = new k(this.ctx);
                return !e281.config.yaxis[t379].show || !e281.config.yaxis[t379].showForNullSeries && i200.isSeriesNull(t379) && -1 === e281.globals.collapsedSeriesIndices.indexOf(t379);
            }
        },
        {
            key: "getYAxisForeColor",
            value: function(t380, e) {
                var i201 = this.w;
                return Array.isArray(t380) && i201.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t380, i201.globals.yAxisScale[e].result.length, !1), t380;
            }
        },
        {
            key: "drawYAxisTicks",
            value: function(t381, e282, i202, a168, s, r108, o92) {
                var n82 = this.w, l65 = new m(this.ctx), h57 = n82.globals.translateY;
                if (a168.show && e282 > 0) {
                    !0 === n82.config.yaxis[s].opposite && (t381 += a168.width);
                    for(var c50 = e282; c50 >= 0; c50--){
                        var d45 = h57 + e282 / 10 + n82.config.yaxis[s].labels.offsetY - 1;
                        n82.globals.isBarHorizontal && (d45 = r108 * c50), "heatmap" === n82.config.chart.type && (d45 += r108 / 2);
                        var g39 = l65.drawLine(t381 + i202.offsetX - a168.width + a168.offsetX, d45 + a168.offsetY, t381 + i202.offsetX + a168.offsetX, d45 + a168.offsetY, a168.color);
                        o92.add(g39), h57 += r108;
                    }
                }
            }
        }
    ]), t373;
}(), j = function() {
    function t382(e283) {
        a(this, t382), this.ctx = e283, this.w = e283.w;
    }
    return r(t382, [
        {
            key: "scaleSvgNode",
            value: function(t383, e284) {
                var i203 = parseFloat(t383.getAttributeNS(null, "width")), a169 = parseFloat(t383.getAttributeNS(null, "height"));
                t383.setAttributeNS(null, "width", i203 * e284), t383.setAttributeNS(null, "height", a169 * e284), t383.setAttributeNS(null, "viewBox", "0 0 " + i203 + " " + a169);
            }
        },
        {
            key: "fixSvgStringForIe11",
            value: function(t384) {
                if (!x.isIE11()) return t384.replace(/&nbsp;/g, "&#160;");
                var e285 = 0, i204 = t384.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function(t385) {
                    return 2 === ++e285 ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : t385;
                });
                return i204 = (i204 = i204.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1");
            }
        },
        {
            key: "getSvgString",
            value: function(t386) {
                var e286 = this.w.globals.dom.Paper.svg();
                if (1 !== t386) {
                    var i205 = this.w.globals.dom.Paper.node.cloneNode(!0);
                    this.scaleSvgNode(i205, t386), e286 = (new XMLSerializer).serializeToString(i205);
                }
                return this.fixSvgStringForIe11(e286);
            }
        },
        {
            key: "cleanup",
            value: function() {
                var t387 = this.w, e287 = t387.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i206 = t387.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a170 = t387.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
                Array.prototype.forEach.call(a170, function(t388) {
                    t388.setAttribute("width", 0);
                }), e287 && e287[0] && (e287[0].setAttribute("x", -500), e287[0].setAttribute("x1", -500), e287[0].setAttribute("x2", -500)), i206 && i206[0] && (i206[0].setAttribute("y", -100), i206[0].setAttribute("y1", -100), i206[0].setAttribute("y2", -100));
            }
        },
        {
            key: "svgUrl",
            value: function() {
                this.cleanup();
                var t389 = this.getSvgString(), e288 = new Blob([
                    t389
                ], {
                    type: "image/svg+xml;charset=utf-8"
                });
                return URL.createObjectURL(e288);
            }
        },
        {
            key: "dataURI",
            value: function(t390) {
                var e289 = this;
                return new Promise(function(i207) {
                    var a171 = e289.w, s126 = t390 ? t390.scale || t390.width / a171.globals.svgWidth : 1;
                    e289.cleanup();
                    var r109 = document.createElement("canvas");
                    r109.width = a171.globals.svgWidth * s126, r109.height = parseInt(a171.globals.dom.elWrap.style.height, 10) * s126;
                    var o93 = "transparent" === a171.config.chart.background ? "#fff" : a171.config.chart.background, n83 = r109.getContext("2d");
                    n83.fillStyle = o93, n83.fillRect(0, 0, r109.width * s126, r109.height * s126);
                    var l66 = e289.getSvgString(s126);
                    if (window.canvg && x.isIE11()) {
                        var h58 = window.canvg.Canvg.fromString(n83, l66, {
                            ignoreClear: !0,
                            ignoreDimensions: !0
                        });
                        h58.start();
                        var c51 = r109.msToBlob();
                        h58.stop(), i207({
                            blob: c51
                        });
                    } else {
                        var d46 = "data:image/svg+xml," + encodeURIComponent(l66), g40 = new Image;
                        g40.crossOrigin = "anonymous", g40.onload = function() {
                            if (n83.drawImage(g40, 0, 0), r109.msToBlob) {
                                var t391 = r109.msToBlob();
                                i207({
                                    blob: t391
                                });
                            } else {
                                var e290 = r109.toDataURL("image/png");
                                i207({
                                    imgURI: e290
                                });
                            }
                        }, g40.src = d46;
                    }
                });
            }
        },
        {
            key: "exportToSVG",
            value: function() {
                this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg");
            }
        },
        {
            key: "exportToPng",
            value: function() {
                var t392 = this;
                this.dataURI().then(function(e291) {
                    var i208 = e291.imgURI, a172 = e291.blob;
                    a172 ? navigator.msSaveOrOpenBlob(a172, t392.w.globals.chartID + ".png") : t392.triggerDownload(i208, t392.w.config.chart.toolbar.export.png.filename, ".png");
                });
            }
        },
        {
            key: "exportToCSV",
            value: function(t393) {
                var e292 = this, i209 = t393.series, a173 = t393.columnDelimiter, s127 = t393.lineDelimiter, r110 = void 0 === s127 ? "\n" : s127, o94 = this.w, n84 = [], l67 = [], h59 = "", c52 = new B(this.ctx), d47 = new G(this.ctx), g41 = function(t394) {
                    var i210 = "";
                    if (o94.globals.axisCharts) {
                        if ("category" === o94.config.xaxis.type || o94.config.xaxis.convertedCatToNumeric) {
                            if (o94.globals.isBarHorizontal) {
                                var s128 = o94.globals.yLabelFormatters[0], r111 = new X(e292.ctx).getActiveConfigSeriesIndex();
                                i210 = s128(o94.globals.labels[t394], {
                                    seriesIndex: r111,
                                    dataPointIndex: t394,
                                    w: o94
                                });
                            } else i210 = d47.getLabel(o94.globals.labels, o94.globals.timescaleLabels, 0, t394).text;
                        }
                        "datetime" === o94.config.xaxis.type && (o94.config.xaxis.categories.length ? i210 = o94.config.xaxis.categories[t394] : o94.config.labels.length && (i210 = o94.config.labels[t394]));
                    } else i210 = o94.config.labels[t394];
                    return Array.isArray(i210) && (i210 = i210.join(" ")), x.isNumber(i210) ? i210 : i210.split(a173).join("");
                };
                n84.push(o94.config.chart.toolbar.export.csv.headerCategory), i209.map(function(t395, e293) {
                    var i211 = t395.name ? t395.name : "series-".concat(e293);
                    o94.globals.axisCharts && n84.push(i211.split(a173).join("") ? i211.split(a173).join("") : "series-".concat(e293));
                }), o94.globals.axisCharts || (n84.push(o94.config.chart.toolbar.export.csv.headerValue), l67.push(n84.join(a173))), i209.map(function(t396, e294) {
                    o94.globals.axisCharts ? (function(t397, e295) {
                        if (n84.length && 0 === e295 && l67.push(n84.join(a173)), t397.data && t397.data.length) for(var s129 = 0; s129 < t397.data.length; s129++){
                            n84 = [];
                            var r112 = g41(s129);
                            if (r112 || (c52.isFormatXY() ? r112 = i209[e295].data[s129].x : c52.isFormat2DArray() && (r112 = i209[e295].data[s129] ? i209[e295].data[s129][0] : "")), 0 === e295) {
                                n84.push((d48 = r112, "datetime" === o94.config.xaxis.type && String(d48).length >= 10 ? o94.config.chart.toolbar.export.csv.dateFormatter(r112) : x.isNumber(r112) ? r112 : r112.split(a173).join("")));
                                for(var h60 = 0; h60 < o94.globals.series.length; h60++)n84.push(o94.globals.series[h60][s129]);
                            }
                            ("candlestick" === o94.config.chart.type || t397.type && "candlestick" === t397.type) && (n84.pop(), n84.push(o94.globals.seriesCandleO[e295][s129]), n84.push(o94.globals.seriesCandleH[e295][s129]), n84.push(o94.globals.seriesCandleL[e295][s129]), n84.push(o94.globals.seriesCandleC[e295][s129])), ("boxPlot" === o94.config.chart.type || t397.type && "boxPlot" === t397.type) && (n84.pop(), n84.push(o94.globals.seriesCandleO[e295][s129]), n84.push(o94.globals.seriesCandleH[e295][s129]), n84.push(o94.globals.seriesCandleM[e295][s129]), n84.push(o94.globals.seriesCandleL[e295][s129]), n84.push(o94.globals.seriesCandleC[e295][s129])), "rangeBar" === o94.config.chart.type && (n84.pop(), n84.push(o94.globals.seriesRangeStart[e295][s129]), n84.push(o94.globals.seriesRangeEnd[e295][s129])), n84.length && l67.push(n84.join(a173));
                        }
                        var d48;
                    })(t396, e294) : ((n84 = []).push(o94.globals.labels[e294].split(a173).join("")), n84.push(o94.globals.series[e294]), l67.push(n84.join(a173)));
                }), h59 += l67.join(r110), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\ufeff" + h59), o94.config.chart.toolbar.export.csv.filename, ".csv");
            }
        },
        {
            key: "triggerDownload",
            value: function(t398, e296, i212) {
                var a174 = document.createElement("a");
                a174.href = t398, a174.download = (e296 || this.w.globals.chartID) + i212, document.body.appendChild(a174), a174.click(), document.body.removeChild(a174);
            }
        }
    ]), t382;
}(), _ = function() {
    function t399(e297) {
        a(this, t399), this.ctx = e297, this.w = e297.w;
        var i213 = this.w;
        this.axesUtils = new G(e297), this.xaxisLabels = i213.globals.labels.slice(), i213.globals.timescaleLabels.length > 0 && !i213.globals.isBarHorizontal && (this.xaxisLabels = i213.globals.timescaleLabels.slice()), i213.config.xaxis.overwriteCategories && (this.xaxisLabels = i213.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === i213.config.xaxis.position ? this.offY = 0 : this.offY = i213.globals.gridHeight + 1, this.offY = this.offY + i213.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === i213.config.chart.type && i213.config.plotOptions.bar.horizontal, this.xaxisFontSize = i213.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = i213.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i213.config.xaxis.labels.style.colors, this.xaxisBorderWidth = i213.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = i213.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = i213.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = i213.config.xaxis.axisBorder.height, this.yaxis = i213.config.yaxis[0];
    }
    return r(t399, [
        {
            key: "drawXaxis",
            value: function() {
                var t400, e298 = this, i214 = this.w, a175 = new m(this.ctx), s130 = a175.group({
                    class: "apexcharts-xaxis",
                    transform: "translate(".concat(i214.config.xaxis.offsetX, ", ").concat(i214.config.xaxis.offsetY, ")")
                }), r113 = a175.group({
                    class: "apexcharts-xaxis-texts-g",
                    transform: "translate(".concat(i214.globals.translateXAxisX, ", ").concat(i214.globals.translateXAxisY, ")")
                });
                s130.add(r113);
                for(var o95 = i214.globals.padHorizontal, n85 = [], l68 = 0; l68 < this.xaxisLabels.length; l68++)n85.push(this.xaxisLabels[l68]);
                var h61 = n85.length;
                if (i214.globals.isXNumeric) {
                    var c53 = h61 > 1 ? h61 - 1 : h61;
                    t400 = i214.globals.gridWidth / c53, o95 = o95 + t400 / 2 + i214.config.xaxis.labels.offsetX;
                } else t400 = i214.globals.gridWidth / n85.length, o95 = o95 + t400 + i214.config.xaxis.labels.offsetX;
                for(var d49 = function(s131) {
                    var l69 = o95 - t400 / 2 + i214.config.xaxis.labels.offsetX;
                    0 === s131 && 1 === h61 && t400 / 2 === o95 && 1 === i214.globals.dataPoints && (l69 = i214.globals.gridWidth / 2);
                    var c54 = e298.axesUtils.getLabel(n85, i214.globals.timescaleLabels, l69, s131, e298.drawnLabels, e298.xaxisFontSize), d50 = 28;
                    i214.globals.rotateXLabels && (d50 = 22);
                    if ((c54 = void 0 !== i214.config.xaxis.tickAmount && "dataPoints" !== i214.config.xaxis.tickAmount && "datetime" !== i214.config.xaxis.type ? e298.axesUtils.checkLabelBasedOnTickamount(s131, c54, h61) : e298.axesUtils.checkForOverflowingLabels(s131, c54, h61, e298.drawnLabels, e298.drawnLabelsRects)).text && i214.globals.xaxisLabelsCount++, i214.config.xaxis.labels.show) {
                        var g43 = a175.drawText({
                            x: c54.x,
                            y: e298.offY + i214.config.xaxis.labels.offsetY + d50 - ("top" === i214.config.xaxis.position ? i214.globals.xAxisHeight + i214.config.xaxis.axisTicks.height - 2 : 0),
                            text: c54.text,
                            textAnchor: "middle",
                            fontWeight: c54.isBold ? 600 : i214.config.xaxis.labels.style.fontWeight,
                            fontSize: e298.xaxisFontSize,
                            fontFamily: e298.xaxisFontFamily,
                            foreColor: Array.isArray(e298.xaxisForeColors) ? i214.config.xaxis.convertedCatToNumeric ? e298.xaxisForeColors[i214.globals.minX + s131 - 1] : e298.xaxisForeColors[s131] : e298.xaxisForeColors,
                            isPlainText: !1,
                            cssClass: "apexcharts-xaxis-label " + i214.config.xaxis.labels.style.cssClass
                        });
                        r113.add(g43);
                        var u34 = document.createElementNS(i214.globals.SVGNS, "title");
                        u34.textContent = Array.isArray(c54.text) ? c54.text.join(" ") : c54.text, g43.node.appendChild(u34), "" !== c54.text && (e298.drawnLabels.push(c54.text), e298.drawnLabelsRects.push(c54));
                    }
                    o95 += t400;
                }, g42 = 0; g42 <= h61 - 1; g42++)d49(g42);
                if (void 0 !== i214.config.xaxis.title.text) {
                    var u33 = a175.group({
                        class: "apexcharts-xaxis-title"
                    }), f31 = a175.drawText({
                        x: i214.globals.gridWidth / 2 + i214.config.xaxis.title.offsetX,
                        y: this.offY + parseFloat(this.xaxisFontSize) + i214.globals.xAxisLabelsHeight + i214.config.xaxis.title.offsetY,
                        text: i214.config.xaxis.title.text,
                        textAnchor: "middle",
                        fontSize: i214.config.xaxis.title.style.fontSize,
                        fontFamily: i214.config.xaxis.title.style.fontFamily,
                        fontWeight: i214.config.xaxis.title.style.fontWeight,
                        foreColor: i214.config.xaxis.title.style.color,
                        cssClass: "apexcharts-xaxis-title-text " + i214.config.xaxis.title.style.cssClass
                    });
                    u33.add(f31), s130.add(u33);
                }
                if (i214.config.xaxis.axisBorder.show) {
                    var p27 = i214.globals.barPadForNumericAxis, x20 = a175.drawLine(i214.globals.padHorizontal + i214.config.xaxis.axisBorder.offsetX - p27, this.offY, this.xaxisBorderWidth + p27, this.offY, i214.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                    s130.add(x20);
                }
                return s130;
            }
        },
        {
            key: "drawXaxisInversed",
            value: function(t401) {
                var e299, i215, a176 = this, s132 = this.w, r114 = new m(this.ctx), o96 = s132.config.yaxis[0].opposite ? s132.globals.translateYAxisX[t401] : 0, n86 = r114.group({
                    class: "apexcharts-yaxis apexcharts-xaxis-inversed",
                    rel: t401
                }), l70 = r114.group({
                    class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
                    transform: "translate(" + o96 + ", 0)"
                });
                n86.add(l70);
                var h62 = [];
                if (s132.config.yaxis[t401].show) for(var c55 = 0; c55 < this.xaxisLabels.length; c55++)h62.push(this.xaxisLabels[c55]);
                e299 = s132.globals.gridHeight / h62.length, i215 = -e299 / 2.2;
                var d51 = s132.globals.yLabelFormatters[0], g44 = s132.config.yaxis[0].labels;
                if (g44.show) for(var u35 = function(o97) {
                    var n87 = void 0 === h62[o97] ? "" : h62[o97];
                    n87 = d51(n87, {
                        seriesIndex: t401,
                        dataPointIndex: o97,
                        w: s132
                    });
                    var c56 = a176.axesUtils.getYAxisForeColor(g44.style.colors, t401), u36 = 0;
                    Array.isArray(n87) && (u36 = n87.length / 2 * parseInt(g44.style.fontSize, 10));
                    var f33 = r114.drawText({
                        x: g44.offsetX - 15,
                        y: i215 + e299 + g44.offsetY - u36,
                        text: n87,
                        textAnchor: a176.yaxis.opposite ? "start" : "end",
                        foreColor: Array.isArray(c56) ? c56[o97] : c56,
                        fontSize: g44.style.fontSize,
                        fontFamily: g44.style.fontFamily,
                        fontWeight: g44.style.fontWeight,
                        isPlainText: !1,
                        cssClass: "apexcharts-yaxis-label " + g44.style.cssClass
                    });
                    l70.add(f33);
                    var p29 = document.createElementNS(s132.globals.SVGNS, "title");
                    if (p29.textContent = Array.isArray(n87) ? n87.join(" ") : n87, f33.node.appendChild(p29), 0 !== s132.config.yaxis[t401].labels.rotate) {
                        var x22 = r114.rotateAroundCenter(f33.node);
                        f33.node.setAttribute("transform", "rotate(".concat(s132.config.yaxis[t401].labels.rotate, " 0 ").concat(x22.y, ")"));
                    }
                    i215 += e299;
                }, f32 = 0; f32 <= h62.length - 1; f32++)u35(f32);
                if (void 0 !== s132.config.yaxis[0].title.text) {
                    var p28 = r114.group({
                        class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
                        transform: "translate(" + o96 + ", 0)"
                    }), x21 = r114.drawText({
                        x: 0,
                        y: s132.globals.gridHeight / 2,
                        text: s132.config.yaxis[0].title.text,
                        textAnchor: "middle",
                        foreColor: s132.config.yaxis[0].title.style.color,
                        fontSize: s132.config.yaxis[0].title.style.fontSize,
                        fontWeight: s132.config.yaxis[0].title.style.fontWeight,
                        fontFamily: s132.config.yaxis[0].title.style.fontFamily,
                        cssClass: "apexcharts-yaxis-title-text " + s132.config.yaxis[0].title.style.cssClass
                    });
                    p28.add(x21), n86.add(p28);
                }
                var b22 = 0;
                this.isCategoryBarHorizontal && s132.config.yaxis[0].opposite && (b22 = s132.globals.gridWidth);
                var v13 = s132.config.xaxis.axisBorder;
                if (v13.show) {
                    var y14 = r114.drawLine(s132.globals.padHorizontal + v13.offsetX + b22, 1 + v13.offsetY, s132.globals.padHorizontal + v13.offsetX + b22, s132.globals.gridHeight + v13.offsetY, v13.color, 0);
                    n86.add(y14);
                }
                return s132.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b22, h62.length, s132.config.yaxis[0].axisBorder, s132.config.yaxis[0].axisTicks, 0, e299, n86), n86;
            }
        },
        {
            key: "drawXaxisTicks",
            value: function(t402, e300) {
                var i216 = this.w, a177 = t402;
                if (!(t402 < 0 || t402 - 2 > i216.globals.gridWidth)) {
                    var s133 = this.offY + i216.config.xaxis.axisTicks.offsetY, r115 = s133 + i216.config.xaxis.axisTicks.height;
                    if ("top" === i216.config.xaxis.position && (r115 = s133 - i216.config.xaxis.axisTicks.height), i216.config.xaxis.axisTicks.show) {
                        var o98 = new m(this.ctx).drawLine(t402 + i216.config.xaxis.axisTicks.offsetX, s133 + i216.config.xaxis.offsetY, a177 + i216.config.xaxis.axisTicks.offsetX, r115 + i216.config.xaxis.offsetY, i216.config.xaxis.axisTicks.color);
                        e300.add(o98), o98.node.classList.add("apexcharts-xaxis-tick");
                    }
                }
            }
        },
        {
            key: "getXAxisTicksPositions",
            value: function() {
                var t403 = this.w, e301 = [], i217 = this.xaxisLabels.length, a178 = t403.globals.padHorizontal;
                if (t403.globals.timescaleLabels.length > 0) for(var s134 = 0; s134 < i217; s134++)a178 = this.xaxisLabels[s134].position, e301.push(a178);
                else for(var r116 = i217, o99 = 0; o99 < r116; o99++){
                    var n88 = r116;
                    t403.globals.isXNumeric && "bar" !== t403.config.chart.type && (n88 -= 1), a178 += t403.globals.gridWidth / n88, e301.push(a178);
                }
                return e301;
            }
        },
        {
            key: "xAxisLabelCorrections",
            value: function() {
                var t404 = this.w, e302 = new m(this.ctx), i218 = t404.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a179 = t404.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"), s135 = t404.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r117 = t404.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
                if (t404.globals.rotateXLabels || t404.config.xaxis.labels.rotateAlways) for(var o100 = 0; o100 < a179.length; o100++){
                    var n89 = e302.rotateAroundCenter(a179[o100]);
                    n89.y = n89.y - 1, n89.x = n89.x + 1, a179[o100].setAttribute("transform", "rotate(".concat(t404.config.xaxis.labels.rotate, " ").concat(n89.x, " ").concat(n89.y, ")")), a179[o100].setAttribute("text-anchor", "end");
                    i218.setAttribute("transform", "translate(0, ".concat(-10, ")"));
                    var l71 = a179[o100].childNodes;
                    t404.config.xaxis.labels.trim && Array.prototype.forEach.call(l71, function(i219) {
                        e302.placeTextWithEllipsis(i219, i219.textContent, t404.globals.xAxisLabelsHeight - ("bottom" === t404.config.legend.position ? 20 : 10));
                    });
                }
                else !function() {
                    for(var i220 = t404.globals.gridWidth / (t404.globals.labels.length + 1), s136 = 0; s136 < a179.length; s136++){
                        var r118 = a179[s136].childNodes;
                        t404.config.xaxis.labels.trim && "datetime" !== t404.config.xaxis.type && Array.prototype.forEach.call(r118, function(t405) {
                            e302.placeTextWithEllipsis(t405, t405.textContent, i220);
                        });
                    }
                }();
                if (s135.length > 0) {
                    var h63 = s135[s135.length - 1].getBBox(), c57 = s135[0].getBBox();
                    h63.x < -20 && s135[s135.length - 1].parentNode.removeChild(s135[s135.length - 1]), c57.x + c57.width > t404.globals.gridWidth && !t404.globals.isBarHorizontal && s135[0].parentNode.removeChild(s135[0]);
                    for(var d52 = 0; d52 < r117.length; d52++)e302.placeTextWithEllipsis(r117[d52], r117[d52].textContent, t404.config.yaxis[0].labels.maxWidth - 2 * parseFloat(t404.config.yaxis[0].title.style.fontSize) - 20);
                }
            }
        }
    ]), t399;
}(), U = function() {
    function t406(e303) {
        a(this, t406), this.ctx = e303, this.w = e303.w;
        var i221 = this.w;
        this.xaxisLabels = i221.globals.labels.slice(), this.axesUtils = new G(e303), this.isRangeBar = i221.globals.seriesRangeBar.length, i221.globals.timescaleLabels.length > 0 && (this.xaxisLabels = i221.globals.timescaleLabels.slice());
    }
    return r(t406, [
        {
            key: "drawGridArea",
            value: function() {
                var t407 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e304 = this.w, i222 = new m(this.ctx);
                null === t407 && (t407 = i222.group({
                    class: "apexcharts-grid"
                }));
                var a180 = i222.drawLine(e304.globals.padHorizontal, 1, e304.globals.padHorizontal, e304.globals.gridHeight, "transparent"), s137 = i222.drawLine(e304.globals.padHorizontal, e304.globals.gridHeight, e304.globals.gridWidth, e304.globals.gridHeight, "transparent");
                return t407.add(s137), t407.add(a180), t407;
            }
        },
        {
            key: "drawGrid",
            value: function() {
                var t408 = null;
                return this.w.globals.axisCharts && (t408 = this.renderGrid(), this.drawGridArea(t408.el)), t408;
            }
        },
        {
            key: "createGridMask",
            value: function() {
                var t409 = this.w, e305 = t409.globals, i223 = new m(this.ctx), a181 = Array.isArray(t409.config.stroke.width) ? 0 : t409.config.stroke.width;
                if (Array.isArray(t409.config.stroke.width)) {
                    var s138 = 0;
                    t409.config.stroke.width.forEach(function(t410) {
                        s138 = Math.max(s138, t410);
                    }), a181 = s138;
                }
                e305.dom.elGridRectMask = document.createElementNS(e305.SVGNS, "clipPath"), e305.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e305.cuid)), e305.dom.elGridRectMarkerMask = document.createElementNS(e305.SVGNS, "clipPath"), e305.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e305.cuid)), e305.dom.elForecastMask = document.createElementNS(e305.SVGNS, "clipPath"), e305.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e305.cuid)), e305.dom.elNonForecastMask = document.createElementNS(e305.SVGNS, "clipPath"), e305.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e305.cuid));
                var r119 = t409.config.chart.type, o101 = 0, n90 = 0;
                ("bar" === r119 || "rangeBar" === r119 || "candlestick" === r119 || "boxPlot" === r119 || t409.globals.comboBarCount > 0) && t409.globals.isXNumeric && !t409.globals.isBarHorizontal && (o101 = t409.config.grid.padding.left, n90 = t409.config.grid.padding.right, e305.barPadForNumericAxis > o101 && (o101 = e305.barPadForNumericAxis, n90 = e305.barPadForNumericAxis)), e305.dom.elGridRect = i223.drawRect(-a181 / 2 - o101 - 2, -a181 / 2, e305.gridWidth + a181 + n90 + o101 + 4, e305.gridHeight + a181, 0, "#fff");
                var l72 = t409.globals.markers.largestSize + 1;
                e305.dom.elGridRectMarker = i223.drawRect(2 * -l72, 2 * -l72, e305.gridWidth + 4 * l72, e305.gridHeight + 4 * l72, 0, "#fff"), e305.dom.elGridRectMask.appendChild(e305.dom.elGridRect.node), e305.dom.elGridRectMarkerMask.appendChild(e305.dom.elGridRectMarker.node);
                var h64 = e305.dom.baseEl.querySelector("defs");
                h64.appendChild(e305.dom.elGridRectMask), h64.appendChild(e305.dom.elForecastMask), h64.appendChild(e305.dom.elNonForecastMask), h64.appendChild(e305.dom.elGridRectMarkerMask);
            }
        },
        {
            key: "_drawGridLines",
            value: function(t411) {
                var e306 = t411.i, i224 = t411.x1, a182 = t411.y1, s139 = t411.x2, r120 = t411.y2, o102 = t411.xCount, n91 = t411.parent, l73 = this.w;
                0 === e306 && l73.globals.skipFirstTimelinelabel || e306 === o102 - 1 && l73.globals.skipLastTimelinelabel && !l73.config.xaxis.labels.formatter || "radar" === l73.config.chart.type || (l73.config.grid.xaxis.lines.show && this._drawGridLine({
                    x1: i224,
                    y1: a182,
                    x2: s139,
                    y2: r120,
                    parent: n91
                }), new _(this.ctx).drawXaxisTicks(i224, this.elg));
            }
        },
        {
            key: "_drawGridLine",
            value: function(t412) {
                var e307 = t412.x1, i225 = t412.y1, a183 = t412.x2, s140 = t412.y2, r121 = t412.parent, o103 = this.w, n92 = r121.node.classList.contains("apexcharts-gridlines-horizontal"), l74 = o103.config.grid.strokeDashArray, h65 = o103.globals.barPadForNumericAxis, c58 = new m(this).drawLine(e307 - (n92 ? h65 : 0), i225, a183 + (n92 ? h65 : 0), s140, o103.config.grid.borderColor, l74);
                c58.node.classList.add("apexcharts-gridline"), r121.add(c58);
            }
        },
        {
            key: "_drawGridBandRect",
            value: function(t413) {
                var e = t413.c, i226 = t413.x1, a184 = t413.y1, s141 = t413.x2, r122 = t413.y2, o104 = t413.type, n93 = this.w, l75 = new m(this.ctx), h66 = n93.globals.barPadForNumericAxis;
                if ("column" !== o104 || "datetime" !== n93.config.xaxis.type) {
                    var c59 = n93.config.grid[o104].colors[e], d53 = l75.drawRect(i226 - ("row" === o104 ? h66 : 0), a184, s141 + ("row" === o104 ? 2 * h66 : 0), r122, 0, c59, n93.config.grid[o104].opacity);
                    this.elg.add(d53), d53.attr("clip-path", "url(#gridRectMask".concat(n93.globals.cuid, ")")), d53.node.classList.add("apexcharts-grid-".concat(o104));
                }
            }
        },
        {
            key: "_drawXYLines",
            value: function(t414) {
                var e308 = this, i227 = t414.xCount, a185 = t414.tickAmount, s142 = this.w;
                if (s142.config.grid.xaxis.lines.show || s142.config.xaxis.axisTicks.show) {
                    var r123, o105 = s142.globals.padHorizontal, n94 = s142.globals.gridHeight;
                    s142.globals.timescaleLabels.length ? (function(t415) {
                        for(var a186 = t415.xC, s143 = t415.x1, r125 = t415.y1, o107 = t415.x2, n96 = t415.y2, l77 = 0; l77 < a186; l77++)s143 = e308.xaxisLabels[l77].position, o107 = e308.xaxisLabels[l77].position, e308._drawGridLines({
                            i: l77,
                            x1: s143,
                            y1: r125,
                            x2: o107,
                            y2: n96,
                            xCount: i227,
                            parent: e308.elgridLinesV
                        });
                    })({
                        xC: i227,
                        x1: o105,
                        y1: 0,
                        x2: r123,
                        y2: n94
                    }) : (s142.globals.isXNumeric && (i227 = s142.globals.xAxisScale.result.length), s142.config.xaxis.convertedCatToNumeric && (i227 = s142.globals.xaxisLabelsCount), (function(t416) {
                        var a187 = t416.xC, r126 = t416.x1, o108 = t416.y1, n97 = t416.x2, l78 = t416.y2;
                        if (void 0 !== s142.config.xaxis.tickAmount && "dataPoints" !== s142.config.xaxis.tickAmount) s142.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach(function(t417, a188) {
                            var s144 = t417.getBBox();
                            e308._drawGridLines({
                                i: a188,
                                x1: s144.x + s144.width / 2,
                                y1: o108,
                                x2: s144.x + s144.width / 2,
                                y2: l78,
                                xCount: i227,
                                parent: e308.elgridLinesV
                            });
                        });
                        else for(var h68 = 0; h68 < a187 + (s142.globals.isXNumeric ? 0 : 1); h68++)0 === h68 && 1 === a187 && 1 === s142.globals.dataPoints && (n97 = r126 = s142.globals.gridWidth / 2), e308._drawGridLines({
                            i: h68,
                            x1: r126,
                            y1: o108,
                            x2: n97,
                            y2: l78,
                            xCount: i227,
                            parent: e308.elgridLinesV
                        }), n97 = r126 += s142.globals.gridWidth / (s142.globals.isXNumeric ? a187 - 1 : a187);
                    })({
                        xC: i227,
                        x1: o105,
                        y1: 0,
                        x2: r123,
                        y2: n94
                    }));
                }
                if (s142.config.grid.yaxis.lines.show) {
                    var l76 = 0, h67 = 0, c60 = s142.globals.gridWidth, d54 = a185 + 1;
                    this.isRangeBar && (d54 = s142.globals.labels.length);
                    for(var g45 = 0; g45 < d54 + (this.isRangeBar ? 1 : 0); g45++)this._drawGridLine({
                        x1: 0,
                        y1: l76,
                        x2: c60,
                        y2: h67,
                        parent: this.elgridLinesH
                    }), h67 = l76 += s142.globals.gridHeight / (this.isRangeBar ? d54 : a185);
                }
            }
        },
        {
            key: "_drawInvertedXYLines",
            value: function(t418) {
                var e309 = t418.xCount, i228 = this.w;
                if (i228.config.grid.xaxis.lines.show || i228.config.xaxis.axisTicks.show) for(var a189, s145 = i228.globals.padHorizontal, r127 = i228.globals.gridHeight, o109 = 0; o109 < e309 + 1; o109++)i228.config.grid.xaxis.lines.show && this._drawGridLine({
                    x1: s145,
                    y1: 0,
                    x2: a189,
                    y2: r127,
                    parent: this.elgridLinesV
                }), new _(this.ctx).drawXaxisTicks(s145, this.elg), a189 = s145 = s145 + i228.globals.gridWidth / e309 + 0.3;
                if (i228.config.grid.yaxis.lines.show) for(var n98 = 0, l79 = 0, h69 = i228.globals.gridWidth, c61 = 0; c61 < i228.globals.dataPoints + 1; c61++)this._drawGridLine({
                    x1: 0,
                    y1: n98,
                    x2: h69,
                    y2: l79,
                    parent: this.elgridLinesH
                }), l79 = n98 += i228.globals.gridHeight / i228.globals.dataPoints;
            }
        },
        {
            key: "renderGrid",
            value: function() {
                var t419 = this.w, e310 = new m(this.ctx);
                this.elg = e310.group({
                    class: "apexcharts-grid"
                }), this.elgridLinesH = e310.group({
                    class: "apexcharts-gridlines-horizontal"
                }), this.elgridLinesV = e310.group({
                    class: "apexcharts-gridlines-vertical"
                }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t419.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide());
                for(var i229, a190 = t419.globals.yAxisScale.length ? t419.globals.yAxisScale[0].result.length - 1 : 5, s146 = 0; s146 < t419.globals.series.length && (void 0 !== t419.globals.yAxisScale[s146] && (a190 = t419.globals.yAxisScale[s146].result.length - 1), !(a190 > 2)); s146++);
                return !t419.globals.isBarHorizontal || this.isRangeBar ? (i229 = this.xaxisLabels.length, this.isRangeBar && (a190 = t419.globals.labels.length, t419.config.xaxis.tickAmount && t419.config.xaxis.labels.formatter && (i229 = t419.config.xaxis.tickAmount)), this._drawXYLines({
                    xCount: i229,
                    tickAmount: a190
                })) : (i229 = a190, a190 = t419.globals.xTickAmount, this._drawInvertedXYLines({
                    xCount: i229,
                    tickAmount: a190
                })), this.drawGridBands(i229, a190), {
                    el: this.elg,
                    xAxisTickWidth: t419.globals.gridWidth / i229
                };
            }
        },
        {
            key: "drawGridBands",
            value: function(t420, e311) {
                var i230 = this.w;
                if (void 0 !== i230.config.grid.row.colors && i230.config.grid.row.colors.length > 0) for(var a191 = 0, s147 = i230.globals.gridHeight / e311, r128 = i230.globals.gridWidth, o110 = 0, n99 = 0; o110 < e311; o110++, n99++)n99 >= i230.config.grid.row.colors.length && (n99 = 0), this._drawGridBandRect({
                    c: n99,
                    x1: 0,
                    y1: a191,
                    x2: r128,
                    y2: s147,
                    type: "row"
                }), a191 += i230.globals.gridHeight / e311;
                if (void 0 !== i230.config.grid.column.colors && i230.config.grid.column.colors.length > 0) for(var l80 = i230.globals.isBarHorizontal || "category" !== i230.config.xaxis.type && !i230.config.xaxis.convertedCatToNumeric ? t420 : t420 - 1, h70 = i230.globals.padHorizontal, c62 = i230.globals.padHorizontal + i230.globals.gridWidth / l80, d55 = i230.globals.gridHeight, g46 = 0, u37 = 0; g46 < t420; g46++, u37++)u37 >= i230.config.grid.column.colors.length && (u37 = 0), this._drawGridBandRect({
                    c: u37,
                    x1: h70,
                    y1: 0,
                    x2: c62,
                    y2: d55,
                    type: "column"
                }), h70 += i230.globals.gridWidth / l80;
            }
        }
    ]), t406;
}(), q = function() {
    function t421(e312) {
        a(this, t421), this.ctx = e312, this.w = e312.w;
    }
    return r(t421, [
        {
            key: "niceScale",
            value: function(t422, e313) {
                var i231 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a192 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s148 = arguments.length > 4 ? arguments[4] : void 0, r129 = this.w, o111 = Math.abs(e313 - t422);
                if ("dataPoints" === (i231 = this._adjustTicksForSmallRange(i231, a192, o111)) && (i231 = r129.globals.dataPoints - 1), t422 === Number.MIN_VALUE && 0 === e313 || !x.isNumber(t422) && !x.isNumber(e313) || t422 === Number.MIN_VALUE && e313 === -Number.MAX_VALUE) {
                    t422 = 0, e313 = i231;
                    var n100 = this.linearScale(t422, e313, i231);
                    return n100;
                }
                t422 > e313 ? (console.warn("axis.min cannot be greater than axis.max"), e313 = t422 + 0.1) : t422 === e313 && (t422 = 0 === t422 ? 0 : t422 - 0.5, e313 = 0 === e313 ? 2 : e313 + 0.5);
                var l81 = [];
                o111 < 1 && s148 && ("candlestick" === r129.config.chart.type || "candlestick" === r129.config.series[a192].type || "boxPlot" === r129.config.chart.type || "boxPlot" === r129.config.series[a192].type || r129.globals.isRangeData) && (e313 *= 1.01);
                var h71 = i231 + 1;
                h71 < 2 ? h71 = 2 : h71 > 2 && (h71 -= 2);
                var c63 = o111 / h71, d56 = Math.floor(x.log10(c63)), g47 = Math.pow(10, d56), u38 = Math.round(c63 / g47);
                u38 < 1 && (u38 = 1);
                var f34 = u38 * g47, p30 = f34 * Math.floor(t422 / f34), b23 = f34 * Math.ceil(e313 / f34), v14 = p30;
                if (s148 && o111 > 2) {
                    for(; l81.push(v14), !((v14 += f34) > b23););
                    return {
                        result: l81,
                        niceMin: l81[0],
                        niceMax: l81[l81.length - 1]
                    };
                }
                var m5 = t422;
                (l81 = []).push(m5);
                for(var y15 = Math.abs(e313 - t422) / i231, w12 = 0; w12 <= i231; w12++)m5 += y15, l81.push(m5);
                return l81[l81.length - 2] >= e313 && l81.pop(), {
                    result: l81,
                    niceMin: l81[0],
                    niceMax: l81[l81.length - 1]
                };
            }
        },
        {
            key: "linearScale",
            value: function(t423, e314) {
                var i232 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a193 = arguments.length > 3 ? arguments[3] : void 0, s149 = Math.abs(e314 - t423);
                "dataPoints" === (i232 = this._adjustTicksForSmallRange(i232, a193, s149)) && (i232 = this.w.globals.dataPoints - 1);
                var r130 = s149 / i232;
                i232 === Number.MAX_VALUE && (i232 = 10, r130 = 1);
                for(var o112 = [], n101 = t423; i232 >= 0;)o112.push(n101), n101 += r130, i232 -= 1;
                return {
                    result: o112,
                    niceMin: o112[0],
                    niceMax: o112[o112.length - 1]
                };
            }
        },
        {
            key: "logarithmicScale",
            value: function(t424, e315, i233) {
                for(var a194 = [], s150 = Math.ceil(Math.log(e315) / Math.log(i233)) + 1, r131 = 0; r131 < s150; r131++)a194.push(Math.pow(i233, r131));
                return 0 === t424 && a194.unshift(t424), {
                    result: a194,
                    niceMin: a194[0],
                    niceMax: a194[a194.length - 1]
                };
            }
        },
        {
            key: "_adjustTicksForSmallRange",
            value: function(t425, e316, i234) {
                var a195 = t425;
                if (void 0 !== e316 && this.w.config.yaxis[e316].labels.formatter && void 0 === this.w.config.yaxis[e316].tickAmount) {
                    var s151 = this.w.config.yaxis[e316].labels.formatter(1);
                    x.isNumber(Number(s151)) && !x.isFloat(s151) && (a195 = Math.ceil(i234));
                }
                return a195 < t425 ? a195 : t425;
            }
        },
        {
            key: "setYScaleForIndex",
            value: function(t426, e317, i235) {
                var a196 = this.w.globals, s152 = this.w.config, r132 = a196.isBarHorizontal ? s152.xaxis : s152.yaxis[t426];
                void 0 === a196.yAxisScale[t426] && (a196.yAxisScale[t426] = []);
                var o113 = Math.abs(i235 - e317);
                if (r132.logarithmic && o113 <= 5 && (a196.invalidLogScale = !0), r132.logarithmic && o113 > 5) a196.allSeriesCollapsed = !1, a196.yAxisScale[t426] = this.logarithmicScale(e317, i235, r132.logBase);
                else if (i235 !== -Number.MAX_VALUE && x.isNumber(i235)) {
                    if (a196.allSeriesCollapsed = !1, void 0 === r132.min && void 0 === r132.max || r132.forceNiceScale) {
                        var n102 = void 0 === s152.yaxis[t426].max && void 0 === s152.yaxis[t426].min || s152.yaxis[t426].forceNiceScale;
                        a196.yAxisScale[t426] = this.niceScale(e317, i235, r132.tickAmount ? r132.tickAmount : o113 < 5 && o113 > 1 ? o113 + 1 : 5, t426, n102);
                    } else a196.yAxisScale[t426] = this.linearScale(e317, i235, r132.tickAmount, t426);
                } else a196.yAxisScale[t426] = this.linearScale(0, 5, 5);
            }
        },
        {
            key: "setXScale",
            value: function(t427, e318) {
                var i236 = this.w, a197 = i236.globals, s153 = i236.config.xaxis, r133 = Math.abs(e318 - t427);
                return e318 !== -Number.MAX_VALUE && x.isNumber(e318) ? a197.xAxisScale = this.linearScale(t427, e318, s153.tickAmount ? s153.tickAmount : r133 < 5 && r133 > 1 ? r133 + 1 : 5, 0) : a197.xAxisScale = this.linearScale(0, 5, 5), a197.xAxisScale;
            }
        },
        {
            key: "setMultipleYScales",
            value: function() {
                var t428 = this, e319 = this.w.globals, i237 = this.w.config, a198 = e319.minYArr.concat([]), s154 = e319.maxYArr.concat([]), r134 = [];
                i237.yaxis.forEach(function(e320, o114) {
                    var n103 = o114;
                    i237.series.forEach(function(t429, i238) {
                        t429.name === e320.seriesName && (n103 = i238, o114 !== i238 ? r134.push({
                            index: i238,
                            similarIndex: o114,
                            alreadyExists: !0
                        }) : r134.push({
                            index: i238
                        }));
                    });
                    var l82 = a198[n103], h72 = s154[n103];
                    t428.setYScaleForIndex(o114, l82, h72);
                }), this.sameScaleInMultipleAxes(a198, s154, r134);
            }
        },
        {
            key: "sameScaleInMultipleAxes",
            value: function(t430, e321, i239) {
                var a199 = this, s155 = this.w.config, r135 = this.w.globals, o115 = [];
                i239.forEach(function(t431) {
                    t431.alreadyExists && (void 0 === o115[t431.index] && (o115[t431.index] = []), o115[t431.index].push(t431.index), o115[t431.index].push(t431.similarIndex));
                }), r135.yAxisSameScaleIndices = o115, o115.forEach(function(t432, e322) {
                    o115.forEach(function(i240, a200) {
                        var s156, r136;
                        e322 !== a200 && (s156 = t432, r136 = i240, s156.filter(function(t433) {
                            return -1 !== r136.indexOf(t433);
                        })).length > 0 && (o115[e322] = o115[e322].concat(o115[a200]));
                    });
                });
                var n104 = o115.map(function(t434) {
                    return t434.filter(function(e323, i241) {
                        return t434.indexOf(e323) === i241;
                    });
                }).map(function(t435) {
                    return t435.sort();
                });
                o115 = o115.filter(function(t436) {
                    return !!t436;
                });
                var l83 = n104.slice(), h73 = l83.map(function(t437) {
                    return JSON.stringify(t437);
                });
                l83 = l83.filter(function(t438, e324) {
                    return h73.indexOf(JSON.stringify(t438)) === e324;
                });
                var c64 = [], d57 = [];
                t430.forEach(function(t439, i242) {
                    l83.forEach(function(a201, s) {
                        a201.indexOf(i242) > -1 && (void 0 === c64[s] && (c64[s] = [], d57[s] = []), c64[s].push({
                            key: i242,
                            value: t439
                        }), d57[s].push({
                            key: i242,
                            value: e321[i242]
                        }));
                    });
                });
                var g48 = Array.apply(null, Array(l83.length)).map(Number.prototype.valueOf, Number.MIN_VALUE), u39 = Array.apply(null, Array(l83.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
                c64.forEach(function(t440, e) {
                    t440.forEach(function(t441, i) {
                        g48[e] = Math.min(t441.value, g48[e]);
                    });
                }), d57.forEach(function(t442, e) {
                    t442.forEach(function(t443, i) {
                        u39[e] = Math.max(t443.value, u39[e]);
                    });
                }), t430.forEach(function(t444, e325) {
                    d57.forEach(function(t445, i) {
                        var o116 = g48[i], n105 = u39[i];
                        s155.chart.stacked && (n105 = 0, t445.forEach(function(t446, e) {
                            t446.value !== -Number.MAX_VALUE && (n105 += t446.value), o116 !== Number.MIN_VALUE && (o116 += c64[i][e].value);
                        })), t445.forEach(function(i, l) {
                            t445[l].key === e325 && (void 0 !== s155.yaxis[e325].min && (o116 = "function" == typeof s155.yaxis[e325].min ? s155.yaxis[e325].min(r135.minY) : s155.yaxis[e325].min), void 0 !== s155.yaxis[e325].max && (n105 = "function" == typeof s155.yaxis[e325].max ? s155.yaxis[e325].max(r135.maxY) : s155.yaxis[e325].max), a199.setYScaleForIndex(e325, o116, n105));
                        });
                    });
                });
            }
        },
        {
            key: "autoScaleY",
            value: function(t447, e326, i243) {
                t447 || (t447 = this);
                var a202 = t447.w;
                if (a202.globals.isMultipleYAxis || a202.globals.collapsedSeries.length) return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."), e326;
                var s157 = a202.globals.seriesX[0], r137 = a202.config.chart.stacked;
                return e326.forEach(function(t448, o117) {
                    for(var n106 = 0, l84 = 0; l84 < s157.length; l84++)if (s157[l84] >= i243.xaxis.min) {
                        n106 = l84;
                        break;
                    }
                    var h74, c65, d58 = a202.globals.minYArr[o117], g49 = a202.globals.maxYArr[o117], u40 = a202.globals.stackedSeriesTotals;
                    a202.globals.series.forEach(function(o118, l) {
                        var f35 = o118[n106];
                        r137 ? (f35 = u40[n106], h74 = c65 = f35, u40.forEach(function(t449, e) {
                            s157[e] <= i243.xaxis.max && s157[e] >= i243.xaxis.min && (t449 > c65 && null !== t449 && (c65 = t449), o118[e] < h74 && null !== o118[e] && (h74 = o118[e]));
                        })) : (h74 = c65 = f35, o118.forEach(function(t450, e) {
                            if (s157[e] <= i243.xaxis.max && s157[e] >= i243.xaxis.min) {
                                var r138 = t450, o119 = t450;
                                a202.globals.series.forEach(function(i244, a) {
                                    null !== t450 && (r138 = Math.min(i244[e], r138), o119 = Math.max(i244[e], o119));
                                }), o119 > c65 && null !== o119 && (c65 = o119), r138 < h74 && null !== r138 && (h74 = r138);
                            }
                        })), void 0 === h74 && void 0 === c65 && (h74 = d58, c65 = g49), (c65 *= c65 < 0 ? 0.9 : 1.1) < 0 && c65 < g49 && (c65 = g49), (h74 *= h74 < 0 ? 1.1 : 0.9) < 0 && h74 > d58 && (h74 = d58), e326.length > 1 ? (e326[l].min = void 0 === t448.min ? h74 : t448.min, e326[l].max = void 0 === t448.max ? c65 : t448.max) : (e326[0].min = void 0 === t448.min ? h74 : t448.min, e326[0].max = void 0 === t448.max ? c65 : t448.max);
                    });
                }), e326;
            }
        }
    ]), t421;
}(), Z = function() {
    function t451(e327) {
        a(this, t451), this.ctx = e327, this.w = e327.w, this.scales = new q(e327);
    }
    return r(t451, [
        {
            key: "init",
            value: function() {
                this.setYRange(), this.setXRange(), this.setZRange();
            }
        },
        {
            key: "getMinYMaxY",
            value: function(t452) {
                var e328 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE, i245 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE, a203 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s158 = this.w.config, r139 = this.w.globals, o120 = -Number.MAX_VALUE, n107 = Number.MIN_VALUE;
                null === a203 && (a203 = t452 + 1);
                var l85 = r139.series, h75 = l85, c66 = l85;
                "candlestick" === s158.chart.type ? (h75 = r139.seriesCandleL, c66 = r139.seriesCandleH) : "boxPlot" === s158.chart.type ? (h75 = r139.seriesCandleO, c66 = r139.seriesCandleC) : r139.isRangeData && (h75 = r139.seriesRangeStart, c66 = r139.seriesRangeEnd);
                for(var d59 = t452; d59 < a203; d59++){
                    r139.dataPoints = Math.max(r139.dataPoints, l85[d59].length), r139.categoryLabels.length && (r139.dataPoints = r139.categoryLabels.filter(function(t453) {
                        return void 0 !== t453;
                    }).length);
                    for(var g50 = 0; g50 < r139.series[d59].length; g50++){
                        var u41 = l85[d59][g50];
                        null !== u41 && x.isNumber(u41) ? (void 0 !== c66[d59][g50] && (o120 = Math.max(o120, c66[d59][g50]), e328 = Math.min(e328, c66[d59][g50])), void 0 !== h75[d59][g50] && (e328 = Math.min(e328, h75[d59][g50]), i245 = Math.max(i245, h75[d59][g50])), "candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type || (void 0 !== r139.seriesCandleC[d59][g50] && (o120 = Math.max(o120, r139.seriesCandleO[d59][g50]), o120 = Math.max(o120, r139.seriesCandleH[d59][g50]), o120 = Math.max(o120, r139.seriesCandleL[d59][g50]), o120 = Math.max(o120, r139.seriesCandleC[d59][g50]), "boxPlot" === this.w.config.chart.type && (o120 = Math.max(o120, r139.seriesCandleM[d59][g50]))), !s158.series[d59].type || "candlestick" === s158.series[d59].type && "boxPlot" === s158.series[d59].type || (o120 = Math.max(o120, r139.series[d59][g50]), e328 = Math.min(e328, r139.series[d59][g50])), i245 = o120), r139.seriesGoals[d59] && r139.seriesGoals[d59][g50] && Array.isArray(r139.seriesGoals[d59][g50]) && r139.seriesGoals[d59][g50].forEach(function(t454) {
                            n107 !== Number.MIN_VALUE && (n107 = Math.min(n107, t454.value), e328 = n107), o120 = Math.max(o120, t454.value), i245 = o120;
                        }), x.isFloat(u41) && (u41 = x.noExponents(u41), r139.yValueDecimal = Math.max(r139.yValueDecimal, u41.toString().split(".")[1].length)), n107 > h75[d59][g50] && h75[d59][g50] < 0 && (n107 = h75[d59][g50])) : r139.hasNullValues = !0;
                    }
                }
                return "rangeBar" === s158.chart.type && r139.seriesRangeStart.length && r139.isBarHorizontal && (n107 = e328), "bar" === s158.chart.type && (n107 < 0 && o120 < 0 && (o120 = 0), n107 === Number.MIN_VALUE && (n107 = 0)), {
                    minY: n107,
                    maxY: o120,
                    lowestY: e328,
                    highestY: i245
                };
            }
        },
        {
            key: "setYRange",
            value: function() {
                var t455 = this.w.globals, e329 = this.w.config;
                t455.maxY = -Number.MAX_VALUE, t455.minY = Number.MIN_VALUE;
                var i246 = Number.MAX_VALUE;
                if (t455.isMultipleYAxis) for(var a204 = 0; a204 < t455.series.length; a204++){
                    var s159 = this.getMinYMaxY(a204, i246, null, a204 + 1);
                    t455.minYArr.push(s159.minY), t455.maxYArr.push(s159.maxY), i246 = s159.lowestY;
                }
                var r140 = this.getMinYMaxY(0, i246, null, t455.series.length);
                if (t455.minY = r140.minY, t455.maxY = r140.maxY, i246 = r140.lowestY, e329.chart.stacked && this._setStackedMinMax(), ("line" === e329.chart.type || "area" === e329.chart.type || "candlestick" === e329.chart.type || "boxPlot" === e329.chart.type || "rangeBar" === e329.chart.type && !t455.isBarHorizontal) && t455.minY === Number.MIN_VALUE && i246 !== -Number.MAX_VALUE && i246 !== t455.maxY) {
                    var o121 = t455.maxY - i246;
                    (i246 >= 0 && i246 <= 10 || void 0 !== e329.yaxis[0].min || void 0 !== e329.yaxis[0].max) && (o121 = 0), t455.minY = i246 - 5 * o121 / 100, i246 > 0 && t455.minY < 0 && (t455.minY = 0), t455.maxY = t455.maxY + 5 * o121 / 100;
                }
                if (e329.yaxis.forEach(function(e330, i) {
                    void 0 !== e330.max && ("number" == typeof e330.max ? t455.maxYArr[i] = e330.max : "function" == typeof e330.max && (t455.maxYArr[i] = e330.max(t455.isMultipleYAxis ? t455.maxYArr[i] : t455.maxY)), t455.maxY = t455.maxYArr[i]), void 0 !== e330.min && ("number" == typeof e330.min ? t455.minYArr[i] = e330.min : "function" == typeof e330.min && (t455.minYArr[i] = e330.min(t455.isMultipleYAxis ? t455.minYArr[i] === Number.MIN_VALUE ? 0 : t455.minYArr[i] : t455.minY)), t455.minY = t455.minYArr[i]);
                }), t455.isBarHorizontal) [
                    "min",
                    "max"
                ].forEach(function(i247) {
                    void 0 !== e329.xaxis[i247] && "number" == typeof e329.xaxis[i247] && ("min" === i247 ? t455.minY = e329.xaxis[i247] : t455.maxY = e329.xaxis[i247]);
                });
                return t455.isMultipleYAxis ? (this.scales.setMultipleYScales(), t455.minY = i246, t455.yAxisScale.forEach(function(e331, i) {
                    t455.minYArr[i] = e331.niceMin, t455.maxYArr[i] = e331.niceMax;
                })) : (this.scales.setYScaleForIndex(0, t455.minY, t455.maxY), t455.minY = t455.yAxisScale[0].niceMin, t455.maxY = t455.yAxisScale[0].niceMax, t455.minYArr[0] = t455.yAxisScale[0].niceMin, t455.maxYArr[0] = t455.yAxisScale[0].niceMax), {
                    minY: t455.minY,
                    maxY: t455.maxY,
                    minYArr: t455.minYArr,
                    maxYArr: t455.maxYArr,
                    yAxisScale: t455.yAxisScale
                };
            }
        },
        {
            key: "setXRange",
            value: function() {
                var t456 = this.w.globals, e332 = this.w.config, i248 = "numeric" === e332.xaxis.type || "datetime" === e332.xaxis.type || "category" === e332.xaxis.type && !t456.noLabelsProvided || t456.noLabelsProvided || t456.isXNumeric;
                if (t456.isXNumeric && (function() {
                    for(var e333 = 0; e333 < t456.series.length; e333++)if (t456.labels[e333]) for(var i249 = 0; i249 < t456.labels[e333].length; i249++)null !== t456.labels[e333][i249] && x.isNumber(t456.labels[e333][i249]) && (t456.maxX = Math.max(t456.maxX, t456.labels[e333][i249]), t456.initialMaxX = Math.max(t456.maxX, t456.labels[e333][i249]), t456.minX = Math.min(t456.minX, t456.labels[e333][i249]), t456.initialMinX = Math.min(t456.minX, t456.labels[e333][i249]));
                })(), t456.noLabelsProvided && 0 === e332.xaxis.categories.length && (t456.maxX = t456.labels[t456.labels.length - 1], t456.initialMaxX = t456.labels[t456.labels.length - 1], t456.minX = 1, t456.initialMinX = 1), t456.isXNumeric || t456.noLabelsProvided || t456.dataFormatXNumeric) {
                    var a205;
                    if (void 0 === e332.xaxis.tickAmount ? (a205 = Math.round(t456.svgWidth / 150), "numeric" === e332.xaxis.type && t456.dataPoints < 30 && (a205 = t456.dataPoints - 1), a205 > t456.dataPoints && 0 !== t456.dataPoints && (a205 = t456.dataPoints - 1)) : "dataPoints" === e332.xaxis.tickAmount ? (t456.series.length > 1 && (a205 = t456.series[t456.maxValsInArrayIndex].length - 1), t456.isXNumeric && (a205 = t456.maxX - t456.minX - 1)) : a205 = e332.xaxis.tickAmount, t456.xTickAmount = a205, void 0 !== e332.xaxis.max && "number" == typeof e332.xaxis.max && (t456.maxX = e332.xaxis.max), void 0 !== e332.xaxis.min && "number" == typeof e332.xaxis.min && (t456.minX = e332.xaxis.min), void 0 !== e332.xaxis.range && (t456.minX = t456.maxX - e332.xaxis.range), t456.minX !== Number.MAX_VALUE && t456.maxX !== -Number.MAX_VALUE) {
                        if (e332.xaxis.convertedCatToNumeric && !t456.dataFormatXNumeric) {
                            for(var s160 = [], r141 = t456.minX - 1; r141 < t456.maxX; r141++)s160.push(r141 + 1);
                            t456.xAxisScale = {
                                result: s160,
                                niceMin: s160[0],
                                niceMax: s160[s160.length - 1]
                            };
                        } else t456.xAxisScale = this.scales.setXScale(t456.minX, t456.maxX);
                    } else t456.xAxisScale = this.scales.linearScale(1, a205, a205), t456.noLabelsProvided && t456.labels.length > 0 && (t456.xAxisScale = this.scales.linearScale(1, t456.labels.length, a205 - 1), t456.seriesX = t456.labels.slice());
                    i248 && (t456.labels = t456.xAxisScale.result.slice());
                }
                return t456.isBarHorizontal && t456.labels.length && (t456.xTickAmount = t456.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), {
                    minX: t456.minX,
                    maxX: t456.maxX
                };
            }
        },
        {
            key: "setZRange",
            value: function() {
                var t457 = this.w.globals;
                if (t457.isDataXYZ) {
                    for(var e334 = 0; e334 < t457.series.length; e334++)if (void 0 !== t457.seriesZ[e334]) for(var i250 = 0; i250 < t457.seriesZ[e334].length; i250++)null !== t457.seriesZ[e334][i250] && x.isNumber(t457.seriesZ[e334][i250]) && (t457.maxZ = Math.max(t457.maxZ, t457.seriesZ[e334][i250]), t457.minZ = Math.min(t457.minZ, t457.seriesZ[e334][i250]));
                }
            }
        },
        {
            key: "_handleSingleDataPoint",
            value: function() {
                var t458 = this.w.globals, e335 = this.w.config;
                if (t458.minX === t458.maxX) {
                    var i251 = new R(this.ctx);
                    if ("datetime" === e335.xaxis.type) {
                        var a206 = i251.getDate(t458.minX);
                        e335.xaxis.labels.datetimeUTC ? a206.setUTCDate(a206.getUTCDate() - 2) : a206.setDate(a206.getDate() - 2), t458.minX = new Date(a206).getTime();
                        var s161 = i251.getDate(t458.maxX);
                        e335.xaxis.labels.datetimeUTC ? s161.setUTCDate(s161.getUTCDate() + 2) : s161.setDate(s161.getDate() + 2), t458.maxX = new Date(s161).getTime();
                    } else ("numeric" === e335.xaxis.type || "category" === e335.xaxis.type && !t458.noLabelsProvided) && (t458.minX = t458.minX - 2, t458.initialMinX = t458.minX, t458.maxX = t458.maxX + 2, t458.initialMaxX = t458.maxX);
                }
            }
        },
        {
            key: "_getMinXDiff",
            value: function() {
                var t459 = this.w.globals;
                t459.isXNumeric && t459.seriesX.forEach(function(e336, i252) {
                    1 === e336.length && e336.push(t459.seriesX[t459.maxValsInArrayIndex][t459.seriesX[t459.maxValsInArrayIndex].length - 1]);
                    var a207 = e336.slice();
                    a207.sort(function(t460, e337) {
                        return t460 - e337;
                    }), a207.forEach(function(e338, i253) {
                        if (i253 > 0) {
                            var s162 = e338 - a207[i253 - 1];
                            s162 > 0 && (t459.minXDiff = Math.min(s162, t459.minXDiff));
                        }
                    }), 1 !== t459.dataPoints && t459.minXDiff !== Number.MAX_VALUE || (t459.minXDiff = 0.5);
                });
            }
        },
        {
            key: "_setStackedMinMax",
            value: function() {
                var t461 = this.w.globals, e339 = [], i254 = [];
                if (t461.series.length) for(var a208 = 0; a208 < t461.series[t461.maxValsInArrayIndex].length; a208++)for(var s163 = 0, r142 = 0, o122 = 0; o122 < t461.series.length; o122++)null !== t461.series[o122][a208] && x.isNumber(t461.series[o122][a208]) && (t461.series[o122][a208] > 0 ? s163 = s163 + parseFloat(t461.series[o122][a208]) + 0.0001 : r142 += parseFloat(t461.series[o122][a208])), o122 === t461.series.length - 1 && (e339.push(s163), i254.push(r142));
                for(var n108 = 0; n108 < e339.length; n108++)t461.maxY = Math.max(t461.maxY, e339[n108]), t461.minY = Math.min(t461.minY, i254[n108]);
            }
        }
    ]), t451;
}(), $ = function() {
    function t462(e340) {
        a(this, t462), this.ctx = e340, this.w = e340.w;
        var i255 = this.w;
        this.xaxisFontSize = i255.config.xaxis.labels.style.fontSize, this.axisFontFamily = i255.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i255.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === i255.config.chart.type && i255.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === i255.config.xaxis.position && (this.xAxisoffX = i255.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new G(e340);
    }
    return r(t462, [
        {
            key: "drawYaxis",
            value: function(t463) {
                var e341 = this, i256 = this.w, a209 = new m(this.ctx), s164 = i256.config.yaxis[t463].labels.style, r143 = s164.fontSize, o123 = s164.fontFamily, n109 = s164.fontWeight, l86 = a209.group({
                    class: "apexcharts-yaxis",
                    rel: t463,
                    transform: "translate(" + i256.globals.translateYAxisX[t463] + ", 0)"
                });
                if (this.axesUtils.isYAxisHidden(t463)) return l86;
                var h76 = a209.group({
                    class: "apexcharts-yaxis-texts-g"
                });
                l86.add(h76);
                var c67 = i256.globals.yAxisScale[t463].result.length - 1, d60 = i256.globals.gridHeight / c67, g51 = i256.globals.translateY, u42 = i256.globals.yLabelFormatters[t463], f36 = i256.globals.yAxisScale[t463].result.slice();
                f36 = this.axesUtils.checkForReversedLabels(t463, f36);
                var p31 = "";
                if (i256.config.yaxis[t463].labels.show) for(var x23 = function(l87) {
                    var x24 = f36[l87];
                    x24 = u42(x24, l87, i256);
                    var b25 = i256.config.yaxis[t463].labels.padding;
                    i256.config.yaxis[t463].opposite && 0 !== i256.config.yaxis.length && (b25 *= -1);
                    var v16 = e341.axesUtils.getYAxisForeColor(s164.colors, t463), m6 = a209.drawText({
                        x: b25,
                        y: g51 + c67 / 10 + i256.config.yaxis[t463].labels.offsetY + 1,
                        text: x24,
                        textAnchor: i256.config.yaxis[t463].opposite ? "start" : "end",
                        fontSize: r143,
                        fontFamily: o123,
                        fontWeight: n109,
                        foreColor: Array.isArray(v16) ? v16[l87] : v16,
                        isPlainText: !1,
                        cssClass: "apexcharts-yaxis-label " + s164.cssClass
                    });
                    l87 === c67 && (p31 = m6), h76.add(m6);
                    var y17 = document.createElementNS(i256.globals.SVGNS, "title");
                    if (y17.textContent = Array.isArray(x24) ? x24.join(" ") : x24, m6.node.appendChild(y17), 0 !== i256.config.yaxis[t463].labels.rotate) {
                        var w14 = a209.rotateAroundCenter(p31.node), k11 = a209.rotateAroundCenter(m6.node);
                        m6.node.setAttribute("transform", "rotate(".concat(i256.config.yaxis[t463].labels.rotate, " ").concat(w14.x, " ").concat(k11.y, ")"));
                    }
                    g51 += d60;
                }, b24 = c67; b24 >= 0; b24--)x23(b24);
                if (void 0 !== i256.config.yaxis[t463].title.text) {
                    var v15 = a209.group({
                        class: "apexcharts-yaxis-title"
                    }), y16 = 0;
                    i256.config.yaxis[t463].opposite && (y16 = i256.globals.translateYAxisX[t463]);
                    var w13 = a209.drawText({
                        x: y16,
                        y: i256.globals.gridHeight / 2 + i256.globals.translateY + i256.config.yaxis[t463].title.offsetY,
                        text: i256.config.yaxis[t463].title.text,
                        textAnchor: "end",
                        foreColor: i256.config.yaxis[t463].title.style.color,
                        fontSize: i256.config.yaxis[t463].title.style.fontSize,
                        fontWeight: i256.config.yaxis[t463].title.style.fontWeight,
                        fontFamily: i256.config.yaxis[t463].title.style.fontFamily,
                        cssClass: "apexcharts-yaxis-title-text " + i256.config.yaxis[t463].title.style.cssClass
                    });
                    v15.add(w13), l86.add(v15);
                }
                var k10 = i256.config.yaxis[t463].axisBorder, A9 = 31 + k10.offsetX;
                if (i256.config.yaxis[t463].opposite && (A9 = -31 - k10.offsetX), k10.show) {
                    var S9 = a209.drawLine(A9, i256.globals.translateY + k10.offsetY - 2, A9, i256.globals.gridHeight + i256.globals.translateY + k10.offsetY + 2, k10.color, 0, k10.width);
                    l86.add(S9);
                }
                return i256.config.yaxis[t463].axisTicks.show && this.axesUtils.drawYAxisTicks(A9, c67, k10, i256.config.yaxis[t463].axisTicks, t463, d60, l86), l86;
            }
        },
        {
            key: "drawYaxisInversed",
            value: function(t464) {
                var e342 = this.w, i257 = new m(this.ctx), a210 = i257.group({
                    class: "apexcharts-xaxis apexcharts-yaxis-inversed"
                }), s165 = i257.group({
                    class: "apexcharts-xaxis-texts-g",
                    transform: "translate(".concat(e342.globals.translateXAxisX, ", ").concat(e342.globals.translateXAxisY, ")")
                });
                a210.add(s165);
                var r144 = e342.globals.yAxisScale[t464].result.length - 1, o124 = e342.globals.gridWidth / r144 + 0.1, n110 = o124 + e342.config.xaxis.labels.offsetX, l88 = e342.globals.xLabelFormatter, h77 = e342.globals.yAxisScale[t464].result.slice(), c68 = e342.globals.timescaleLabels;
                c68.length > 0 && (this.xaxisLabels = c68.slice(), r144 = (h77 = c68.slice()).length), h77 = this.axesUtils.checkForReversedLabels(t464, h77);
                var d61 = c68.length;
                if (e342.config.xaxis.labels.show) for(var g52 = d61 ? 0 : r144; d61 ? g52 < d61 : g52 >= 0; d61 ? g52++ : g52--){
                    var u43 = h77[g52];
                    u43 = l88(u43, g52, e342);
                    var f37 = e342.globals.gridWidth + e342.globals.padHorizontal - (n110 - o124 + e342.config.xaxis.labels.offsetX);
                    if (c68.length) {
                        var p32 = this.axesUtils.getLabel(h77, c68, f37, g52, this.drawnLabels, this.xaxisFontSize);
                        f37 = p32.x, u43 = p32.text, this.drawnLabels.push(p32.text), 0 === g52 && e342.globals.skipFirstTimelinelabel && (u43 = ""), g52 === h77.length - 1 && e342.globals.skipLastTimelinelabel && (u43 = "");
                    }
                    var x25 = i257.drawText({
                        x: f37,
                        y: this.xAxisoffX + e342.config.xaxis.labels.offsetY + 30 - ("top" === e342.config.xaxis.position ? e342.globals.xAxisHeight + e342.config.xaxis.axisTicks.height - 2 : 0),
                        text: u43,
                        textAnchor: "middle",
                        foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t464] : this.xaxisForeColors,
                        fontSize: this.xaxisFontSize,
                        fontFamily: this.xaxisFontFamily,
                        fontWeight: e342.config.xaxis.labels.style.fontWeight,
                        isPlainText: !1,
                        cssClass: "apexcharts-xaxis-label " + e342.config.xaxis.labels.style.cssClass
                    });
                    s165.add(x25), x25.tspan(u43);
                    var b26 = document.createElementNS(e342.globals.SVGNS, "title");
                    b26.textContent = u43, x25.node.appendChild(b26), n110 += o124;
                }
                return this.inversedYAxisTitleText(a210), this.inversedYAxisBorder(a210), a210;
            }
        },
        {
            key: "inversedYAxisBorder",
            value: function(t465) {
                var e343 = this.w, i258 = new m(this.ctx), a211 = e343.config.xaxis.axisBorder;
                if (a211.show) {
                    var s166 = 0;
                    "bar" === e343.config.chart.type && e343.globals.isXNumeric && (s166 -= 15);
                    var r145 = i258.drawLine(e343.globals.padHorizontal + s166 + a211.offsetX, this.xAxisoffX, e343.globals.gridWidth, this.xAxisoffX, a211.color, 0, a211.height);
                    t465.add(r145);
                }
            }
        },
        {
            key: "inversedYAxisTitleText",
            value: function(t466) {
                var e344 = this.w, i259 = new m(this.ctx);
                if (void 0 !== e344.config.xaxis.title.text) {
                    var a212 = i259.group({
                        class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
                    }), s167 = i259.drawText({
                        x: e344.globals.gridWidth / 2 + e344.config.xaxis.title.offsetX,
                        y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e344.config.xaxis.title.style.fontSize) + e344.config.xaxis.title.offsetY + 20,
                        text: e344.config.xaxis.title.text,
                        textAnchor: "middle",
                        fontSize: e344.config.xaxis.title.style.fontSize,
                        fontFamily: e344.config.xaxis.title.style.fontFamily,
                        fontWeight: e344.config.xaxis.title.style.fontWeight,
                        foreColor: e344.config.xaxis.title.style.color,
                        cssClass: "apexcharts-xaxis-title-text " + e344.config.xaxis.title.style.cssClass
                    });
                    a212.add(s167), t466.add(a212);
                }
            }
        },
        {
            key: "yAxisTitleRotate",
            value: function(t467, e345) {
                var i260 = this.w, a213 = new m(this.ctx), s168 = {
                    width: 0,
                    height: 0
                }, r146 = {
                    width: 0,
                    height: 0
                }, o125 = i260.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t467, "'] .apexcharts-yaxis-texts-g"));
                null !== o125 && (s168 = o125.getBoundingClientRect());
                var n111 = i260.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t467, "'] .apexcharts-yaxis-title text"));
                if (null !== n111 && (r146 = n111.getBoundingClientRect()), null !== n111) {
                    var l89 = this.xPaddingForYAxisTitle(t467, s168, r146, e345);
                    n111.setAttribute("x", l89.xPos - (e345 ? 10 : 0));
                }
                if (null !== n111) {
                    var h78 = a213.rotateAroundCenter(n111);
                    n111.setAttribute("transform", "rotate(".concat(e345 ? -1 * i260.config.yaxis[t467].title.rotate : i260.config.yaxis[t467].title.rotate, " ").concat(h78.x, " ").concat(h78.y, ")"));
                }
            }
        },
        {
            key: "xPaddingForYAxisTitle",
            value: function(t468, e346, i261, a214) {
                var s169 = this.w, r147 = 0, o126 = 0, n112 = 10;
                return void 0 === s169.config.yaxis[t468].title.text || t468 < 0 ? {
                    xPos: o126,
                    padd: 0
                } : (a214 ? (o126 = e346.width + s169.config.yaxis[t468].title.offsetX + i261.width / 2 + n112 / 2, 0 === (r147 += 1) && (o126 -= n112 / 2)) : (o126 = -1 * e346.width + s169.config.yaxis[t468].title.offsetX + n112 / 2 + i261.width / 2, s169.globals.isBarHorizontal && (n112 = 25, o126 = -1 * e346.width - s169.config.yaxis[t468].title.offsetX - n112)), {
                    xPos: o126,
                    padd: n112
                });
            }
        },
        {
            key: "setYAxisXPosition",
            value: function(t469, e347) {
                var i262 = this.w, a215 = 0, s170 = 0, r148 = 18, o127 = 1;
                i262.config.yaxis.length > 1 && (this.multipleYs = !0), i262.config.yaxis.map(function(n113, l90) {
                    var h79 = i262.globals.ignoreYAxisIndexes.indexOf(l90) > -1 || !n113.show || n113.floating || 0 === t469[l90].width, c69 = t469[l90].width + e347[l90].width;
                    n113.opposite ? i262.globals.isBarHorizontal ? (s170 = i262.globals.gridWidth + i262.globals.translateX - 1, i262.globals.translateYAxisX[l90] = s170 - n113.labels.offsetX) : (s170 = i262.globals.gridWidth + i262.globals.translateX + o127, h79 || (o127 = o127 + c69 + 20), i262.globals.translateYAxisX[l90] = s170 - n113.labels.offsetX + 20) : (a215 = i262.globals.translateX - r148, h79 || (r148 = r148 + c69 + 20), i262.globals.translateYAxisX[l90] = a215 + n113.labels.offsetX);
                });
            }
        },
        {
            key: "setYAxisTextAlignments",
            value: function() {
                var t470 = this.w, e348 = t470.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
                (e348 = x.listToArray(e348)).forEach(function(e, i263) {
                    var a216 = t470.config.yaxis[i263];
                    if (a216 && void 0 !== a216.labels.align) {
                        var s171 = t470.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i263, "'] .apexcharts-yaxis-texts-g")), r149 = t470.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i263, "'] .apexcharts-yaxis-label"));
                        r149 = x.listToArray(r149);
                        var o128 = s171.getBoundingClientRect();
                        "left" === a216.labels.align ? (r149.forEach(function(t471, e) {
                            t471.setAttribute("text-anchor", "start");
                        }), a216.opposite || s171.setAttribute("transform", "translate(-".concat(o128.width, ", 0)"))) : "center" === a216.labels.align ? (r149.forEach(function(t472, e) {
                            t472.setAttribute("text-anchor", "middle");
                        }), s171.setAttribute("transform", "translate(".concat(o128.width / 2 * (a216.opposite ? 1 : -1), ", 0)"))) : "right" === a216.labels.align && (r149.forEach(function(t473, e) {
                            t473.setAttribute("text-anchor", "end");
                        }), a216.opposite && s171.setAttribute("transform", "translate(".concat(o128.width, ", 0)")));
                    }
                });
            }
        }
    ]), t462;
}(), J = function() {
    function t474(e349) {
        a(this, t474), this.ctx = e349, this.w = e349.w, this.documentEvent = x.bind(this.documentEvent, this);
    }
    return r(t474, [
        {
            key: "addEventListener",
            value: function(t475, e350) {
                var i264 = this.w;
                i264.globals.events.hasOwnProperty(t475) ? i264.globals.events[t475].push(e350) : i264.globals.events[t475] = [
                    e350
                ];
            }
        },
        {
            key: "removeEventListener",
            value: function(t476, e351) {
                var i265 = this.w;
                if (i265.globals.events.hasOwnProperty(t476)) {
                    var a217 = i265.globals.events[t476].indexOf(e351);
                    -1 !== a217 && i265.globals.events[t476].splice(a217, 1);
                }
            }
        },
        {
            key: "fireEvent",
            value: function(t477, e352) {
                var i266 = this.w;
                if (i266.globals.events.hasOwnProperty(t477)) {
                    e352 && e352.length || (e352 = []);
                    for(var a218 = i266.globals.events[t477], s172 = a218.length, r150 = 0; r150 < s172; r150++)a218[r150].apply(null, e352);
                }
            }
        },
        {
            key: "setupEventHandlers",
            value: function() {
                var t478 = this, e353 = this.w, i267 = this.ctx, a219 = e353.globals.dom.baseEl.querySelector(e353.globals.chartClass);
                this.ctx.eventList.forEach(function(t479) {
                    a219.addEventListener(t479, function(t480) {
                        var a220 = Object.assign({
                        }, e353, {
                            seriesIndex: e353.globals.capturedSeriesIndex,
                            dataPointIndex: e353.globals.capturedDataPointIndex
                        });
                        "mousemove" === t480.type || "touchmove" === t480.type ? "function" == typeof e353.config.chart.events.mouseMove && e353.config.chart.events.mouseMove(t480, i267, a220) : "mouseleave" === t480.type || "touchleave" === t480.type ? "function" == typeof e353.config.chart.events.mouseLeave && e353.config.chart.events.mouseLeave(t480, i267, a220) : ("mouseup" === t480.type && 1 === t480.which || "touchend" === t480.type) && ("function" == typeof e353.config.chart.events.click && e353.config.chart.events.click(t480, i267, a220), i267.ctx.events.fireEvent("click", [
                            t480,
                            i267,
                            a220
                        ]));
                    }, {
                        capture: !1,
                        passive: !0
                    });
                }), this.ctx.eventList.forEach(function(i268) {
                    e353.globals.dom.baseEl.addEventListener(i268, t478.documentEvent, {
                        passive: !0
                    });
                }), this.ctx.core.setupBrushHandler();
            }
        },
        {
            key: "documentEvent",
            value: function(t481) {
                var e354 = this.w, i269 = t481.target.className;
                if ("click" === t481.type) {
                    var a221 = e354.globals.dom.baseEl.querySelector(".apexcharts-menu");
                    a221 && a221.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i269 && a221.classList.remove("apexcharts-menu-open");
                }
                e354.globals.clientX = "touchmove" === t481.type ? t481.touches[0].clientX : t481.clientX, e354.globals.clientY = "touchmove" === t481.type ? t481.touches[0].clientY : t481.clientY;
            }
        }
    ]), t474;
}(), Q = function() {
    function t482(e355) {
        a(this, t482), this.ctx = e355, this.w = e355.w;
    }
    return r(t482, [
        {
            key: "setCurrentLocaleValues",
            value: function(t483) {
                var e356 = this.w.config.chart.locales;
                window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e356 = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                var i270 = e356.filter(function(e357) {
                    return e357.name === t483;
                })[0];
                if (!i270) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
                var a222 = x.extend(C, i270);
                this.w.globals.locale = a222.options;
            }
        }
    ]), t482;
}(), K = function() {
    function t484(e358) {
        a(this, t484), this.ctx = e358, this.w = e358.w;
    }
    return r(t484, [
        {
            key: "drawAxis",
            value: function(t485, e359) {
                var i271, a223, s173 = this.w.globals, r151 = this.w.config, o129 = new _(this.ctx), n114 = new $(this.ctx);
                s173.axisCharts && "radar" !== t485 && (s173.isBarHorizontal ? (a223 = n114.drawYaxisInversed(0), i271 = o129.drawXaxisInversed(0), s173.dom.elGraphical.add(i271), s173.dom.elGraphical.add(a223)) : (i271 = o129.drawXaxis(), s173.dom.elGraphical.add(i271), r151.yaxis.map(function(t, e360) {
                    -1 === s173.ignoreYAxisIndexes.indexOf(e360) && (a223 = n114.drawYaxis(e360), s173.dom.Paper.add(a223));
                })));
            }
        }
    ]), t484;
}(), tt = function() {
    function t486(e361) {
        a(this, t486), this.ctx = e361, this.w = e361.w;
    }
    return r(t486, [
        {
            key: "drawXCrosshairs",
            value: function() {
                var t487 = this.w, e362 = new m(this.ctx), i272 = new v(this.ctx), a224 = t487.config.xaxis.crosshairs.fill.gradient, s174 = t487.config.xaxis.crosshairs.dropShadow, r152 = t487.config.xaxis.crosshairs.fill.type, o130 = a224.colorFrom, n115 = a224.colorTo, l91 = a224.opacityFrom, h80 = a224.opacityTo, c70 = a224.stops, d62 = s174.enabled, g53 = s174.left, u44 = s174.top, f38 = s174.blur, p33 = s174.color, b27 = s174.opacity, y18 = t487.config.xaxis.crosshairs.fill.color;
                if (t487.config.xaxis.crosshairs.show) {
                    "gradient" === r152 && (y18 = e362.drawGradient("vertical", o130, n115, l91, h80, null, c70, null));
                    var w15 = e362.drawRect();
                    1 === t487.config.xaxis.crosshairs.width && (w15 = e362.drawLine());
                    var k12 = t487.globals.gridHeight;
                    (!x.isNumber(k12) || k12 < 0) && (k12 = 0);
                    var A10 = t487.config.xaxis.crosshairs.width;
                    (!x.isNumber(A10) || A10 < 0) && (A10 = 0), w15.attr({
                        class: "apexcharts-xcrosshairs",
                        x: 0,
                        y: 0,
                        y2: k12,
                        width: A10,
                        height: k12,
                        fill: y18,
                        filter: "none",
                        "fill-opacity": t487.config.xaxis.crosshairs.opacity,
                        stroke: t487.config.xaxis.crosshairs.stroke.color,
                        "stroke-width": t487.config.xaxis.crosshairs.stroke.width,
                        "stroke-dasharray": t487.config.xaxis.crosshairs.stroke.dashArray
                    }), d62 && (w15 = i272.dropShadow(w15, {
                        left: g53,
                        top: u44,
                        blur: f38,
                        color: p33,
                        opacity: b27
                    })), t487.globals.dom.elGraphical.add(w15);
                }
            }
        },
        {
            key: "drawYCrosshairs",
            value: function() {
                var t488 = this.w, e363 = new m(this.ctx), i273 = t488.config.yaxis[0].crosshairs, a225 = t488.globals.barPadForNumericAxis;
                if (t488.config.yaxis[0].crosshairs.show) {
                    var s175 = e363.drawLine(-a225, 0, t488.globals.gridWidth + a225, 0, i273.stroke.color, i273.stroke.dashArray, i273.stroke.width);
                    s175.attr({
                        class: "apexcharts-ycrosshairs"
                    }), t488.globals.dom.elGraphical.add(s175);
                }
                var r153 = e363.drawLine(-a225, 0, t488.globals.gridWidth + a225, 0, i273.stroke.color, 0, 0);
                r153.attr({
                    class: "apexcharts-ycrosshairs-hidden"
                }), t488.globals.dom.elGraphical.add(r153);
            }
        }
    ]), t486;
}(), et = function() {
    function t489(e364) {
        a(this, t489), this.ctx = e364, this.w = e364.w;
    }
    return r(t489, [
        {
            key: "checkResponsiveConfig",
            value: function(t490) {
                var e365 = this, i274 = this.w, a226 = i274.config;
                if (0 !== a226.responsive.length) {
                    var s176 = a226.responsive.slice();
                    s176.sort(function(t491, e366) {
                        return t491.breakpoint > e366.breakpoint ? 1 : e366.breakpoint > t491.breakpoint ? -1 : 0;
                    }).reverse();
                    var r154 = new N({
                    }), o131 = function() {
                        var t492 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        }, a227 = s176[0].breakpoint, o133 = window.innerWidth > 0 ? window.innerWidth : screen.width;
                        if (o133 > a227) {
                            var n118 = k.extendArrayProps(r154, i274.globals.initialConfig, i274);
                            t492 = x.extend(n118, t492), t492 = x.extend(i274.config, t492), e365.overrideResponsiveOptions(t492);
                        } else for(var l92 = 0; l92 < s176.length; l92++)o133 < s176[l92].breakpoint && (t492 = k.extendArrayProps(r154, s176[l92].options, i274), t492 = x.extend(i274.config, t492), e365.overrideResponsiveOptions(t492));
                    };
                    if (t490) {
                        var n116 = k.extendArrayProps(r154, t490, i274);
                        n116 = x.extend(i274.config, n116), o131(n116 = x.extend(n116, t490));
                    } else o131({
                    });
                }
            }
        },
        {
            key: "overrideResponsiveOptions",
            value: function(t493) {
                var e367 = new N(t493).init({
                    responsiveOverride: !0
                });
                this.w.config = e367;
            }
        }
    ]), t489;
}(), it = function() {
    function t494(e368) {
        a(this, t494), this.ctx = e368, this.colors = [], this.w = e368.w;
        var i275 = this.w;
        this.isColorFn = !1, this.isHeatmapDistributed = "treemap" === i275.config.chart.type && i275.config.plotOptions.treemap.distributed || "heatmap" === i275.config.chart.type && i275.config.plotOptions.heatmap.distributed, this.isBarDistributed = i275.config.plotOptions.bar.distributed && ("bar" === i275.config.chart.type || "rangeBar" === i275.config.chart.type);
    }
    return r(t494, [
        {
            key: "init",
            value: function() {
                this.setDefaultColors();
            }
        },
        {
            key: "setDefaultColors",
            value: function() {
                var t495 = this, e369 = this.w, i276 = new x;
                if (e369.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e369.config.theme.mode)), void 0 === e369.config.colors ? e369.globals.colors = this.predefined() : (e369.globals.colors = e369.config.colors, Array.isArray(e369.config.colors) && e369.config.colors.length > 0 && "function" == typeof e369.config.colors[0] && (e369.globals.colors = e369.config.series.map(function(i, a229) {
                    var s178 = e369.config.colors[a229];
                    return s178 || (s178 = e369.config.colors[0]), "function" == typeof s178 ? (t495.isColorFn = !0, s178({
                        value: e369.globals.axisCharts ? e369.globals.series[a229][0] ? e369.globals.series[a229][0] : 0 : e369.globals.series[a229],
                        seriesIndex: a229,
                        dataPointIndex: a229,
                        w: e369
                    })) : s178;
                }))), e369.globals.seriesColors.map(function(t496, i) {
                    t496 && (e369.globals.colors[i] = t496);
                }), e369.config.theme.monochrome.enabled) {
                    var a228 = [], s177 = e369.globals.series.length;
                    (this.isBarDistributed || this.isHeatmapDistributed) && (s177 = e369.globals.series[0].length * e369.globals.series.length);
                    for(var r155 = e369.config.theme.monochrome.color, o134 = 1 / (s177 / e369.config.theme.monochrome.shadeIntensity), n119 = e369.config.theme.monochrome.shadeTo, l93 = 0, h81 = 0; h81 < s177; h81++){
                        var c71 = void 0;
                        "dark" === n119 ? (c71 = i276.shadeColor(-1 * l93, r155), l93 += o134) : (c71 = i276.shadeColor(l93, r155), l93 += o134), a228.push(c71);
                    }
                    e369.globals.colors = a228.slice();
                }
                var d63 = e369.globals.colors.slice();
                this.pushExtraColors(e369.globals.colors);
                [
                    "fill",
                    "stroke"
                ].forEach(function(i) {
                    void 0 === e369.config[i].colors ? e369.globals[i].colors = t495.isColorFn ? e369.config.colors : d63 : e369.globals[i].colors = e369.config[i].colors.slice(), t495.pushExtraColors(e369.globals[i].colors);
                }), void 0 === e369.config.dataLabels.style.colors ? e369.globals.dataLabels.style.colors = d63 : e369.globals.dataLabels.style.colors = e369.config.dataLabels.style.colors.slice(), this.pushExtraColors(e369.globals.dataLabels.style.colors, 50), void 0 === e369.config.plotOptions.radar.polygons.fill.colors ? e369.globals.radarPolygons.fill.colors = [
                    "dark" === e369.config.theme.mode ? "#424242" : "none"
                ] : e369.globals.radarPolygons.fill.colors = e369.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(e369.globals.radarPolygons.fill.colors, 20), void 0 === e369.config.markers.colors ? e369.globals.markers.colors = d63 : e369.globals.markers.colors = e369.config.markers.colors.slice(), this.pushExtraColors(e369.globals.markers.colors);
            }
        },
        {
            key: "pushExtraColors",
            value: function(t497, e370) {
                var i277 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a230 = this.w, s179 = e370 || a230.globals.series.length;
                if (null === i277 && (i277 = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a230.config.chart.type && a230.config.plotOptions.heatmap.colorScale.inverse), i277 && a230.globals.series.length && (s179 = a230.globals.series[a230.globals.maxValsInArrayIndex].length * a230.globals.series.length), t497.length < s179) for(var r156 = s179 - t497.length, o135 = 0; o135 < r156; o135++)t497.push(t497[o135]);
            }
        },
        {
            key: "updateThemeOptions",
            value: function(t498) {
                t498.chart = t498.chart || {
                }, t498.tooltip = t498.tooltip || {
                };
                var e371 = t498.theme.mode || "light", i278 = t498.theme.palette ? t498.theme.palette : "dark" === e371 ? "palette4" : "palette1", a231 = t498.chart.foreColor ? t498.chart.foreColor : "dark" === e371 ? "#f6f7f8" : "#373d3f";
                return t498.tooltip.theme = e371, t498.chart.foreColor = a231, t498.theme.palette = i278, t498;
            }
        },
        {
            key: "predefined",
            value: function() {
                switch(this.w.config.theme.palette){
                    case "palette1":
                        this.colors = [
                            "#008FFB",
                            "#00E396",
                            "#FEB019",
                            "#FF4560",
                            "#775DD0"
                        ];
                        break;
                    case "palette2":
                        this.colors = [
                            "#3f51b5",
                            "#03a9f4",
                            "#4caf50",
                            "#f9ce1d",
                            "#FF9800"
                        ];
                        break;
                    case "palette3":
                        this.colors = [
                            "#33b2df",
                            "#546E7A",
                            "#d4526e",
                            "#13d8aa",
                            "#A5978B"
                        ];
                        break;
                    case "palette4":
                        this.colors = [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ];
                        break;
                    case "palette5":
                        this.colors = [
                            "#2b908f",
                            "#f9a3a4",
                            "#90ee7e",
                            "#fa4443",
                            "#69d2e7"
                        ];
                        break;
                    case "palette6":
                        this.colors = [
                            "#449DD1",
                            "#F86624",
                            "#EA3546",
                            "#662E9B",
                            "#C5D86D"
                        ];
                        break;
                    case "palette7":
                        this.colors = [
                            "#D7263D",
                            "#1B998B",
                            "#2E294E",
                            "#F46036",
                            "#E2C044"
                        ];
                        break;
                    case "palette8":
                        this.colors = [
                            "#662E9B",
                            "#F86624",
                            "#F9C80E",
                            "#EA3546",
                            "#43BCCD"
                        ];
                        break;
                    case "palette9":
                        this.colors = [
                            "#5C4742",
                            "#A5978B",
                            "#8D5B4C",
                            "#5A2A27",
                            "#C4BBAF"
                        ];
                        break;
                    case "palette10":
                        this.colors = [
                            "#A300D6",
                            "#7D02EB",
                            "#5653FE",
                            "#2983FF",
                            "#00B1F2"
                        ];
                        break;
                    default:
                        this.colors = [
                            "#008FFB",
                            "#00E396",
                            "#FEB019",
                            "#FF4560",
                            "#775DD0"
                        ];
                }
                return this.colors;
            }
        }
    ]), t494;
}(), at = function() {
    function t499(e372) {
        a(this, t499), this.ctx = e372, this.w = e372.w;
    }
    return r(t499, [
        {
            key: "draw",
            value: function() {
                this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
            }
        },
        {
            key: "drawTitleSubtitle",
            value: function(t500) {
                var e373 = this.w, i279 = "title" === t500 ? e373.config.title : e373.config.subtitle, a232 = e373.globals.svgWidth / 2, s180 = i279.offsetY, r157 = "middle";
                if ("left" === i279.align ? (a232 = 10, r157 = "start") : "right" === i279.align && (a232 = e373.globals.svgWidth - 10, r157 = "end"), a232 += i279.offsetX, s180 = s180 + parseInt(i279.style.fontSize, 10) + i279.margin / 2, void 0 !== i279.text) {
                    var o136 = new m(this.ctx).drawText({
                        x: a232,
                        y: s180,
                        text: i279.text,
                        textAnchor: r157,
                        fontSize: i279.style.fontSize,
                        fontFamily: i279.style.fontFamily,
                        fontWeight: i279.style.fontWeight,
                        foreColor: i279.style.color,
                        opacity: 1
                    });
                    o136.node.setAttribute("class", "apexcharts-".concat(t500, "-text")), e373.globals.dom.Paper.add(o136);
                }
            }
        }
    ]), t499;
}(), st = function() {
    function t501(e374) {
        a(this, t501), this.w = e374.w, this.dCtx = e374;
    }
    return r(t501, [
        {
            key: "getTitleSubtitleCoords",
            value: function(t502) {
                var e375 = this.w, i280 = 0, a233 = 0, s181 = "title" === t502 ? e375.config.title.floating : e375.config.subtitle.floating, r158 = e375.globals.dom.baseEl.querySelector(".apexcharts-".concat(t502, "-text"));
                if (null !== r158 && !s181) {
                    var o137 = r158.getBoundingClientRect();
                    i280 = o137.width, a233 = e375.globals.axisCharts ? o137.height + 5 : o137.height;
                }
                return {
                    width: i280,
                    height: a233
                };
            }
        },
        {
            key: "getLegendsRect",
            value: function() {
                var t503 = this.w, e376 = t503.globals.dom.baseEl.querySelector(".apexcharts-legend");
                t503.config.legend.height || "top" !== t503.config.legend.position && "bottom" !== t503.config.legend.position || (e376.style.maxHeight = t503.globals.svgHeight / 2 + "px");
                var i281 = Object.assign({
                }, x.getBoundingClientRect(e376));
                return null !== e376 && !t503.config.legend.floating && t503.config.legend.show ? this.dCtx.lgRect = {
                    x: i281.x,
                    y: i281.y,
                    height: i281.height,
                    width: 0 === i281.height ? 0 : i281.width
                } : this.dCtx.lgRect = {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                }, "left" !== t503.config.legend.position && "right" !== t503.config.legend.position || 1.5 * this.dCtx.lgRect.width > t503.globals.svgWidth && (this.dCtx.lgRect.width = t503.globals.svgWidth / 1.5), this.dCtx.lgRect;
            }
        },
        {
            key: "getLargestStringFromMultiArr",
            value: function(t504, e377) {
                var i282 = t504;
                if (this.w.globals.isMultiLineX) {
                    var a234 = e377.map(function(t505, e) {
                        return Array.isArray(t505) ? t505.length : 1;
                    }), s = Math.max.apply(Math, u(a234));
                    i282 = e377[a234.indexOf(s)];
                }
                return i282;
            }
        }
    ]), t501;
}(), rt = function() {
    function t506(e378) {
        a(this, t506), this.w = e378.w, this.dCtx = e378;
    }
    return r(t506, [
        {
            key: "getxAxisLabelsCoords",
            value: function() {
                var t507, e379 = this.w, i283 = e379.globals.labels.slice();
                if (e379.config.xaxis.convertedCatToNumeric && 0 === i283.length && (i283 = e379.globals.categoryLabels), e379.globals.timescaleLabels.length > 0) {
                    var a235 = this.getxAxisTimeScaleLabelsCoords();
                    t507 = {
                        width: a235.width,
                        height: a235.height
                    }, e379.globals.rotateXLabels = !1;
                } else {
                    this.dCtx.lgWidthForSideLegends = "left" !== e379.config.legend.position && "right" !== e379.config.legend.position || e379.config.legend.floating ? 0 : this.dCtx.lgRect.width;
                    var s182 = e379.globals.xLabelFormatter, r159 = x.getLargestStringFromArr(i283), o138 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r159, i283);
                    e379.globals.isBarHorizontal && (o138 = r159 = e379.globals.yAxisScale[0].result.reduce(function(t508, e380) {
                        return t508.length > e380.length ? t508 : e380;
                    }, 0));
                    var n120 = new V(this.dCtx.ctx), l94 = r159;
                    r159 = n120.xLabelFormat(s182, r159, l94, {
                        i: void 0,
                        dateFormatter: new R(this.dCtx.ctx).formatDate,
                        w: e379
                    }), o138 = n120.xLabelFormat(s182, o138, l94, {
                        i: void 0,
                        dateFormatter: new R(this.dCtx.ctx).formatDate,
                        w: e379
                    }), (e379.config.xaxis.convertedCatToNumeric && void 0 === r159 || "" === String(r159).trim()) && (o138 = r159 = "1");
                    var h82 = new m(this.dCtx.ctx), c72 = h82.getTextRects(r159, e379.config.xaxis.labels.style.fontSize), d64 = c72;
                    if (r159 !== o138 && (d64 = h82.getTextRects(o138, e379.config.xaxis.labels.style.fontSize)), (t507 = {
                        width: c72.width >= d64.width ? c72.width : d64.width,
                        height: c72.height >= d64.height ? c72.height : d64.height
                    }).width * i283.length > e379.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e379.config.xaxis.labels.rotate || e379.config.xaxis.labels.rotateAlways) {
                        if (!e379.globals.isBarHorizontal) {
                            e379.globals.rotateXLabels = !0;
                            var g54 = function(t509) {
                                return h82.getTextRects(t509, e379.config.xaxis.labels.style.fontSize, e379.config.xaxis.labels.style.fontFamily, "rotate(".concat(e379.config.xaxis.labels.rotate, " 0 0)"), !1);
                            };
                            c72 = g54(r159), r159 !== o138 && (d64 = g54(o138)), t507.height = (c72.height > d64.height ? c72.height : d64.height) / 1.5, t507.width = c72.width > d64.width ? c72.width : d64.width;
                        }
                    } else e379.globals.rotateXLabels = !1;
                }
                return e379.config.xaxis.labels.show || (t507 = {
                    width: 0,
                    height: 0
                }), {
                    width: t507.width,
                    height: t507.height
                };
            }
        },
        {
            key: "getxAxisTitleCoords",
            value: function() {
                var t510 = this.w, e381 = 0, i284 = 0;
                if (void 0 !== t510.config.xaxis.title.text) {
                    var a236 = new m(this.dCtx.ctx).getTextRects(t510.config.xaxis.title.text, t510.config.xaxis.title.style.fontSize);
                    e381 = a236.width, i284 = a236.height;
                }
                return {
                    width: e381,
                    height: i284
                };
            }
        },
        {
            key: "getxAxisTimeScaleLabelsCoords",
            value: function() {
                var t511, e382 = this.w;
                this.dCtx.timescaleLabels = e382.globals.timescaleLabels.slice();
                var i285 = this.dCtx.timescaleLabels.map(function(t512) {
                    return t512.value;
                }), a237 = i285.reduce(function(t513, e383) {
                    return void 0 === t513 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t513.length > e383.length ? t513 : e383;
                }, 0);
                return 1.05 * (t511 = new m(this.dCtx.ctx).getTextRects(a237, e382.config.xaxis.labels.style.fontSize)).width * i285.length > e382.globals.gridWidth && 0 !== e382.config.xaxis.labels.rotate && (e382.globals.overlappingXLabels = !0), t511;
            }
        },
        {
            key: "additionalPaddingXLabels",
            value: function(t514) {
                var e384 = this, i286 = this.w, a238 = i286.globals, s183 = i286.config, r160 = s183.xaxis.type, o139 = t514.width;
                a238.skipLastTimelinelabel = !1, a238.skipFirstTimelinelabel = !1;
                var n121 = i286.config.yaxis[0].opposite && i286.globals.isBarHorizontal, l95 = function(t515, n122) {
                    (function(t516) {
                        return -1 !== a238.collapsedSeriesIndices.indexOf(t516);
                    })(n122) || (function(t517) {
                        if (e384.dCtx.timescaleLabels && e384.dCtx.timescaleLabels.length) {
                            var n123 = e384.dCtx.timescaleLabels[0], l96 = e384.dCtx.timescaleLabels[e384.dCtx.timescaleLabels.length - 1].position + o139 / 1.75 - e384.dCtx.yAxisWidthRight, h83 = n123.position - o139 / 1.75 + e384.dCtx.yAxisWidthLeft, c73 = "right" === i286.config.legend.position && e384.dCtx.lgRect.width > 0 ? e384.dCtx.lgRect.width : 0;
                            l96 > a238.svgWidth - a238.translateX - c73 && (a238.skipLastTimelinelabel = !0), h83 < -(t517.show && !t517.floating || "bar" !== s183.chart.type && "candlestick" !== s183.chart.type && "rangeBar" !== s183.chart.type && "boxPlot" !== s183.chart.type ? 10 : o139 / 1.75) && (a238.skipFirstTimelinelabel = !0);
                        } else "datetime" === r160 ? e384.dCtx.gridPad.right < o139 && !a238.rotateXLabels && (a238.skipLastTimelinelabel = !0) : "datetime" !== r160 && e384.dCtx.gridPad.right < o139 / 2 - e384.dCtx.yAxisWidthRight && !a238.rotateXLabels && !i286.config.xaxis.labels.trim && ("between" !== i286.config.xaxis.tickPlacement || i286.globals.isBarHorizontal) && (e384.dCtx.xPadRight = o139 / 2 + 1);
                    })(t515);
                };
                s183.yaxis.forEach(function(t518, i287) {
                    n121 ? (e384.dCtx.gridPad.left < o139 && (e384.dCtx.xPadLeft = o139 / 2 + 1), e384.dCtx.xPadRight = o139 / 2 + 1) : l95(t518, i287);
                });
            }
        }
    ]), t506;
}(), ot = function() {
    function t519(e385) {
        a(this, t519), this.w = e385.w, this.dCtx = e385;
    }
    return r(t519, [
        {
            key: "getyAxisLabelsCoords",
            value: function() {
                var t520 = this, e386 = this.w, i288 = [], a239 = 10, s184 = new G(this.dCtx.ctx);
                return e386.config.yaxis.map(function(r161, o140) {
                    var n124 = e386.globals.yAxisScale[o140], l97 = 0;
                    if (!s184.isYAxisHidden(o140) && r161.labels.show && void 0 !== r161.labels.minWidth && (l97 = r161.labels.minWidth), !s184.isYAxisHidden(o140) && r161.labels.show && n124.result.length) {
                        var h84 = e386.globals.yLabelFormatters[o140], c74 = n124.niceMin === Number.MIN_VALUE ? 0 : n124.niceMin, d65 = String(c74).length > String(n124.niceMax).length ? c74 : n124.niceMax, g55 = h84(d65, {
                            seriesIndex: o140,
                            dataPointIndex: -1,
                            w: e386
                        }), u45 = g55;
                        if (void 0 !== g55 && 0 !== g55.length || (g55 = d65), e386.globals.isBarHorizontal) {
                            a239 = 0;
                            var f39 = e386.globals.labels.slice();
                            g55 = h84(g55 = x.getLargestStringFromArr(f39), {
                                seriesIndex: o140,
                                dataPointIndex: -1,
                                w: e386
                            }), u45 = t520.dCtx.dimHelpers.getLargestStringFromMultiArr(g55, f39);
                        }
                        var p34 = new m(t520.dCtx.ctx), b28 = "rotate(".concat(r161.labels.rotate, " 0 0)"), v17 = p34.getTextRects(g55, r161.labels.style.fontSize, r161.labels.style.fontFamily, b28, !1), y19 = v17;
                        g55 !== u45 && (y19 = p34.getTextRects(u45, r161.labels.style.fontSize, r161.labels.style.fontFamily, b28, !1)), i288.push({
                            width: (l97 > y19.width || l97 > v17.width ? l97 : y19.width > v17.width ? y19.width : v17.width) + a239,
                            height: y19.height > v17.height ? y19.height : v17.height
                        });
                    } else i288.push({
                        width: 0,
                        height: 0
                    });
                }), i288;
            }
        },
        {
            key: "getyAxisTitleCoords",
            value: function() {
                var t521 = this, e387 = this.w, i289 = [];
                return e387.config.yaxis.map(function(e388, a) {
                    if (e388.show && void 0 !== e388.title.text) {
                        var s185 = new m(t521.dCtx.ctx), r162 = "rotate(".concat(e388.title.rotate, " 0 0)"), o141 = s185.getTextRects(e388.title.text, e388.title.style.fontSize, e388.title.style.fontFamily, r162, !1);
                        i289.push({
                            width: o141.width,
                            height: o141.height
                        });
                    } else i289.push({
                        width: 0,
                        height: 0
                    });
                }), i289;
            }
        },
        {
            key: "getTotalYAxisWidth",
            value: function() {
                var t522 = this.w, e389 = 0, i290 = 0, a240 = 0, s186 = t522.globals.yAxisScale.length > 1 ? 10 : 0, r163 = new G(this.dCtx.ctx), o142 = function(o143, n125) {
                    var l98 = t522.config.yaxis[n125].floating, h85 = 0;
                    o143.width > 0 && !l98 ? (h85 = o143.width + s186, (function(e390) {
                        return t522.globals.ignoreYAxisIndexes.indexOf(e390) > -1;
                    })(n125) && (h85 = h85 - o143.width - s186)) : h85 = l98 || r163.isYAxisHidden(n125) ? 0 : 5, t522.config.yaxis[n125].opposite ? a240 += h85 : i290 += h85, e389 += h85;
                };
                return t522.globals.yLabelsCoords.map(function(t523, e391) {
                    o142(t523, e391);
                }), t522.globals.yTitleCoords.map(function(t524, e392) {
                    o142(t524, e392);
                }), t522.globals.isBarHorizontal && !t522.config.yaxis[0].floating && (e389 = t522.globals.yLabelsCoords[0].width + t522.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i290, this.dCtx.yAxisWidthRight = a240, e389;
            }
        }
    ]), t519;
}(), nt = function() {
    function t525(e393) {
        a(this, t525), this.w = e393.w, this.dCtx = e393;
    }
    return r(t525, [
        {
            key: "gridPadForColumnsInNumericAxis",
            value: function(t526) {
                var e394 = this.w;
                if (e394.globals.noData || e394.globals.allSeriesCollapsed) return 0;
                var i291 = function(t527) {
                    return "bar" === t527 || "rangeBar" === t527 || "candlestick" === t527 || "boxPlot" === t527;
                }, a241 = e394.config.chart.type, s187 = 0, r164 = i291(a241) ? e394.config.series.length : 1;
                if (e394.globals.comboBarCount > 0 && (r164 = e394.globals.comboBarCount), e394.globals.collapsedSeries.forEach(function(t528) {
                    i291(t528.type) && (r164 -= 1);
                }), e394.config.chart.stacked && (r164 = 1), (i291(a241) || e394.globals.comboBarCount > 0) && e394.globals.isXNumeric && !e394.globals.isBarHorizontal && r164 > 0) {
                    var o144, n126, l99 = Math.abs(e394.globals.initialMaxX - e394.globals.initialMinX);
                    l99 <= 3 && (l99 = e394.globals.dataPoints), o144 = l99 / t526, e394.globals.minXDiff && e394.globals.minXDiff / o144 > 0 && (n126 = e394.globals.minXDiff / o144), n126 > t526 / 2 && (n126 /= 2), (s187 = n126 / r164 * parseInt(e394.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (s187 = 1), s187 = s187 / (r164 > 1 ? 1 : 1.5) + 5, e394.globals.barPadForNumericAxis = s187;
                }
                return s187;
            }
        },
        {
            key: "gridPadFortitleSubtitle",
            value: function() {
                var t529 = this, e395 = this.w, i292 = e395.globals, a242 = this.dCtx.isSparkline || !e395.globals.axisCharts ? 0 : 10;
                [
                    "title",
                    "subtitle"
                ].forEach(function(i) {
                    void 0 !== e395.config[i].text ? a242 += e395.config[i].margin : a242 += t529.dCtx.isSparkline || !e395.globals.axisCharts ? 0 : 5;
                }), !e395.config.legend.show || "bottom" !== e395.config.legend.position || e395.config.legend.floating || e395.globals.axisCharts || (a242 += 10);
                var s188 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r165 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
                i292.gridHeight = i292.gridHeight - s188.height - r165.height - a242, i292.translateY = i292.translateY + s188.height + r165.height + a242;
            }
        },
        {
            key: "setGridXPosForDualYAxis",
            value: function(t530, e396) {
                var i293 = this.w, a243 = new G(this.dCtx.ctx);
                i293.config.yaxis.map(function(s189, r166) {
                    -1 !== i293.globals.ignoreYAxisIndexes.indexOf(r166) || s189.floating || a243.isYAxisHidden(r166) || (s189.opposite && (i293.globals.translateX = i293.globals.translateX - (e396[r166].width + t530[r166].width) - parseInt(i293.config.yaxis[r166].labels.style.fontSize, 10) / 1.2 - 12), i293.globals.translateX < 2 && (i293.globals.translateX = 2));
                });
            }
        }
    ]), t525;
}(), lt = function() {
    function t531(e397) {
        a(this, t531), this.ctx = e397, this.w = e397.w, this.lgRect = {
        }, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new st(this), this.dimYAxis = new ot(this), this.dimXAxis = new rt(this), this.dimGrid = new nt(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    return r(t531, [
        {
            key: "plotCoords",
            value: function() {
                var t532 = this, e398 = this.w, i294 = e398.globals;
                this.lgRect = this.dimHelpers.getLegendsRect(), this.isSparkline && (e398.config.markers.discrete.length > 0 || e398.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(e399) {
                    var i295 = g(e399, 2), a = i295[0], s190 = i295[1];
                    t532.gridPad[a] = Math.max(s190, t532.w.globals.markers.largestSize / 1.5);
                }), i294.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i294.gridHeight = i294.gridHeight - this.gridPad.top - this.gridPad.bottom, i294.gridWidth = i294.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
                var a244 = this.dimGrid.gridPadForColumnsInNumericAxis(i294.gridWidth);
                i294.gridWidth = i294.gridWidth - 2 * a244, i294.translateX = i294.translateX + this.gridPad.left + this.xPadLeft + (a244 > 0 ? a244 + 4 : 0), i294.translateY = i294.translateY + this.gridPad.top;
            }
        },
        {
            key: "setDimensionsForAxisCharts",
            value: function() {
                var t533 = this, e400 = this.w, i296 = e400.globals, a245 = this.dimYAxis.getyAxisLabelsCoords(), s191 = this.dimYAxis.getyAxisTitleCoords();
                e400.globals.yLabelsCoords = [], e400.globals.yTitleCoords = [], e400.config.yaxis.map(function(t, i297) {
                    e400.globals.yLabelsCoords.push({
                        width: a245[i297].width,
                        index: i297
                    }), e400.globals.yTitleCoords.push({
                        width: s191[i297].width,
                        index: i297
                    });
                }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
                var r167 = this.dimXAxis.getxAxisLabelsCoords(), o145 = this.dimXAxis.getxAxisTitleCoords();
                this.conditionalChecksForAxisCoords(r167, o145), i296.translateXAxisY = e400.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i296.translateXAxisX = e400.globals.rotateXLabels && e400.globals.isXNumeric && e400.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e400.globals.isBarHorizontal && (i296.rotateXLabels = !1, i296.translateXAxisY = parseInt(e400.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i296.translateXAxisY = i296.translateXAxisY + e400.config.xaxis.labels.offsetY, i296.translateXAxisX = i296.translateXAxisX + e400.config.xaxis.labels.offsetX;
                var n127 = this.yAxisWidth, l100 = this.xAxisHeight;
                i296.xAxisLabelsHeight = this.xAxisHeight - o145.height, i296.xAxisLabelsWidth = this.xAxisWidth, i296.xAxisHeight = this.xAxisHeight;
                var h86 = 10;
                ("radar" === e400.config.chart.type || this.isSparkline) && (n127 = 0, l100 = i296.goldenPadding), this.isSparkline && (this.lgRect = {
                    height: 0,
                    width: 0
                }), (this.isSparkline || "treemap" === e400.config.chart.type) && (n127 = 0, l100 = 0, h86 = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(r167);
                var c75 = function() {
                    i296.translateX = n127, i296.gridHeight = i296.svgHeight - t533.lgRect.height - l100 - (t533.isSparkline || "treemap" === e400.config.chart.type ? 0 : e400.globals.rotateXLabels ? 10 : 15), i296.gridWidth = i296.svgWidth - n127;
                };
                switch("top" === e400.config.xaxis.position && (h86 = i296.xAxisHeight - e400.config.xaxis.axisTicks.height - 5), e400.config.legend.position){
                    case "bottom":
                        i296.translateY = h86, c75();
                        break;
                    case "top":
                        i296.translateY = this.lgRect.height + h86, c75();
                        break;
                    case "left":
                        i296.translateY = h86, i296.translateX = this.lgRect.width + n127, i296.gridHeight = i296.svgHeight - l100 - 12, i296.gridWidth = i296.svgWidth - this.lgRect.width - n127;
                        break;
                    case "right":
                        i296.translateY = h86, i296.translateX = n127, i296.gridHeight = i296.svgHeight - l100 - 12, i296.gridWidth = i296.svgWidth - this.lgRect.width - n127 - 5;
                        break;
                    default:
                        throw new Error("Legend position not supported");
                }
                this.dimGrid.setGridXPosForDualYAxis(s191, a245), new $(this.ctx).setYAxisXPosition(a245, s191);
            }
        },
        {
            key: "setDimensionsForNonAxisCharts",
            value: function() {
                var t534 = this.w, e401 = t534.globals, i298 = t534.config, a246 = 0;
                t534.config.legend.show && !t534.config.legend.floating && (a246 = 20);
                var s = "pie" === i298.chart.type || "polarArea" === i298.chart.type || "donut" === i298.chart.type ? "pie" : "radialBar", r168 = i298.plotOptions[s].offsetY, o146 = i298.plotOptions[s].offsetX;
                if (!i298.legend.show || i298.legend.floating) return e401.gridHeight = e401.svgHeight - i298.grid.padding.left + i298.grid.padding.right, e401.gridWidth = e401.gridHeight, e401.translateY = r168, void (e401.translateX = o146 + (e401.svgWidth - e401.gridWidth) / 2);
                switch(i298.legend.position){
                    case "bottom":
                        e401.gridHeight = e401.svgHeight - this.lgRect.height - e401.goldenPadding, e401.gridWidth = e401.svgWidth, e401.translateY = r168 - 10, e401.translateX = o146 + (e401.svgWidth - e401.gridWidth) / 2;
                        break;
                    case "top":
                        e401.gridHeight = e401.svgHeight - this.lgRect.height - e401.goldenPadding, e401.gridWidth = e401.svgWidth, e401.translateY = this.lgRect.height + r168 + 10, e401.translateX = o146 + (e401.svgWidth - e401.gridWidth) / 2;
                        break;
                    case "left":
                        e401.gridWidth = e401.svgWidth - this.lgRect.width - a246, e401.gridHeight = "auto" !== i298.chart.height ? e401.svgHeight : e401.gridWidth, e401.translateY = r168, e401.translateX = o146 + this.lgRect.width + a246;
                        break;
                    case "right":
                        e401.gridWidth = e401.svgWidth - this.lgRect.width - a246 - 5, e401.gridHeight = "auto" !== i298.chart.height ? e401.svgHeight : e401.gridWidth, e401.translateY = r168, e401.translateX = o146 + 10;
                        break;
                    default:
                        throw new Error("Legend position not supported");
                }
            }
        },
        {
            key: "conditionalChecksForAxisCoords",
            value: function(t535, e402) {
                var i299 = this.w, a247 = t535.height + e402.height, s192 = i299.globals.isMultiLineX ? 1.2 : i299.globals.LINE_HEIGHT_RATIO, r169 = i299.globals.rotateXLabels ? 22 : 10, o147 = i299.globals.rotateXLabels && "bottom" === i299.config.legend.position ? 10 : 0;
                this.xAxisHeight = a247 * s192 + r169 + o147, this.xAxisWidth = t535.width, this.xAxisHeight - e402.height > i299.config.xaxis.labels.maxHeight && (this.xAxisHeight = i299.config.xaxis.labels.maxHeight), i299.config.xaxis.labels.minHeight && this.xAxisHeight < i299.config.xaxis.labels.minHeight && (this.xAxisHeight = i299.config.xaxis.labels.minHeight), i299.config.xaxis.floating && (this.xAxisHeight = 0);
                var n128 = 0, l101 = 0;
                i299.config.yaxis.forEach(function(t536) {
                    n128 += t536.labels.minWidth, l101 += t536.labels.maxWidth;
                }), this.yAxisWidth < n128 && (this.yAxisWidth = n128), this.yAxisWidth > l101 && (this.yAxisWidth = l101);
            }
        }
    ]), t531;
}(), ht = function() {
    function t537(e403) {
        a(this, t537), this.w = e403.w, this.lgCtx = e403;
    }
    return r(t537, [
        {
            key: "getLegendStyles",
            value: function() {
                var t538 = document.createElement("style");
                t538.setAttribute("type", "text/css");
                var e404 = document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }");
                return t538.appendChild(e404), t538;
            }
        },
        {
            key: "getLegendBBox",
            value: function() {
                var t539 = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e405 = t539.width;
                return {
                    clwh: t539.height,
                    clww: e405
                };
            }
        },
        {
            key: "appendToForeignObject",
            value: function() {
                var t540 = this.w.globals;
                t540.dom.elLegendForeign = document.createElementNS(t540.SVGNS, "foreignObject");
                var e406 = t540.dom.elLegendForeign;
                e406.setAttribute("x", 0), e406.setAttribute("y", 0), e406.setAttribute("width", t540.svgWidth), e406.setAttribute("height", t540.svgHeight), t540.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e406.appendChild(t540.dom.elLegendWrap), e406.appendChild(this.getLegendStyles()), t540.dom.Paper.node.insertBefore(e406, t540.dom.elGraphical.node);
            }
        },
        {
            key: "toggleDataSeries",
            value: function(t541, e407) {
                var i300 = this, a248 = this.w;
                if (a248.globals.axisCharts || "radialBar" === a248.config.chart.type) {
                    a248.globals.resized = !0;
                    var s193 = null, r170 = null;
                    if (a248.globals.risingSeries = [], a248.globals.axisCharts ? (s193 = a248.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t541, "']")), r170 = parseInt(s193.getAttribute("data:realIndex"), 10)) : (s193 = a248.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t541 + 1, "']")), r170 = parseInt(s193.getAttribute("rel"), 10) - 1), e407) [
                        {
                            cs: a248.globals.collapsedSeries,
                            csi: a248.globals.collapsedSeriesIndices
                        },
                        {
                            cs: a248.globals.ancillaryCollapsedSeries,
                            csi: a248.globals.ancillaryCollapsedSeriesIndices
                        }
                    ].forEach(function(t542) {
                        i300.riseCollapsedSeries(t542.cs, t542.csi, r170);
                    });
                    else this.hideSeries({
                        seriesEl: s193,
                        realIndex: r170
                    });
                } else {
                    var o148 = a248.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t541 + 1, "'] path")), n129 = a248.config.chart.type;
                    if ("pie" === n129 || "polarArea" === n129 || "donut" === n129) {
                        var l102 = a248.config.plotOptions.pie.donut.labels;
                        new m(this.lgCtx.ctx).pathMouseDown(o148.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o148.members[0].node, l102);
                    }
                    o148.fire("click");
                }
            }
        },
        {
            key: "hideSeries",
            value: function(t543) {
                var e408 = t543.seriesEl, i301 = t543.realIndex, a249 = this.w, s194 = x.clone(a249.config.series);
                if (a249.globals.axisCharts) {
                    var r171 = !1;
                    if (a249.config.yaxis[i301] && a249.config.yaxis[i301].show && a249.config.yaxis[i301].showAlways && (r171 = !0, a249.globals.ancillaryCollapsedSeriesIndices.indexOf(i301) < 0 && (a249.globals.ancillaryCollapsedSeries.push({
                        index: i301,
                        data: s194[i301].data.slice(),
                        type: e408.parentNode.className.baseVal.split("-")[1]
                    }), a249.globals.ancillaryCollapsedSeriesIndices.push(i301))), !r171) {
                        a249.globals.collapsedSeries.push({
                            index: i301,
                            data: s194[i301].data.slice(),
                            type: e408.parentNode.className.baseVal.split("-")[1]
                        }), a249.globals.collapsedSeriesIndices.push(i301);
                        var o149 = a249.globals.risingSeries.indexOf(i301);
                        a249.globals.risingSeries.splice(o149, 1);
                    }
                } else a249.globals.collapsedSeries.push({
                    index: i301,
                    data: s194[i301]
                }), a249.globals.collapsedSeriesIndices.push(i301);
                for(var n130 = e408.childNodes, l103 = 0; l103 < n130.length; l103++)n130[l103].classList.contains("apexcharts-series-markers-wrap") && (n130[l103].classList.contains("apexcharts-hide") ? n130[l103].classList.remove("apexcharts-hide") : n130[l103].classList.add("apexcharts-hide"));
                a249.globals.allSeriesCollapsed = a249.globals.collapsedSeries.length === a249.config.series.length, s194 = this._getSeriesBasedOnCollapsedState(s194), this.lgCtx.ctx.updateHelpers._updateSeries(s194, a249.config.chart.animations.dynamicAnimation.enabled);
            }
        },
        {
            key: "riseCollapsedSeries",
            value: function(t544, e409, i302) {
                var a250 = this.w, s195 = x.clone(a250.config.series);
                if (t544.length > 0) {
                    for(var r172 = 0; r172 < t544.length; r172++)t544[r172].index === i302 && (a250.globals.axisCharts ? (s195[i302].data = t544[r172].data.slice(), t544.splice(r172, 1), e409.splice(r172, 1), a250.globals.risingSeries.push(i302)) : (s195[i302] = t544[r172].data, t544.splice(r172, 1), e409.splice(r172, 1), a250.globals.risingSeries.push(i302)));
                    s195 = this._getSeriesBasedOnCollapsedState(s195), this.lgCtx.ctx.updateHelpers._updateSeries(s195, a250.config.chart.animations.dynamicAnimation.enabled);
                }
            }
        },
        {
            key: "_getSeriesBasedOnCollapsedState",
            value: function(t545) {
                var e410 = this.w;
                return e410.globals.axisCharts ? t545.forEach(function(i, a251) {
                    e410.globals.collapsedSeriesIndices.indexOf(a251) > -1 && (t545[a251].data = []);
                }) : t545.forEach(function(i, a252) {
                    e410.globals.collapsedSeriesIndices.indexOf(a252) > -1 && (t545[a252] = 0);
                }), t545;
            }
        }
    ]), t537;
}(), ct = function() {
    function t546(e411, i) {
        a(this, t546), this.ctx = e411, this.w = e411.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new ht(this);
    }
    return r(t546, [
        {
            key: "init",
            value: function() {
                var t547 = this.w, e412 = t547.globals, i303 = t547.config;
                if ((i303.legend.showForSingleSeries && 1 === e412.series.length || this.isBarsDistributed || e412.series.length > 1 || !e412.axisCharts) && i303.legend.show) {
                    for(; e412.dom.elLegendWrap.firstChild;)e412.dom.elLegendWrap.removeChild(e412.dom.elLegendWrap.firstChild);
                    this.drawLegends(), x.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), "bottom" === i303.legend.position || "top" === i303.legend.position ? this.legendAlignHorizontal() : "right" !== i303.legend.position && "left" !== i303.legend.position || this.legendAlignVertical();
                }
            }
        },
        {
            key: "drawLegends",
            value: function() {
                var t548 = this, e413 = this.w, i304 = e413.config.legend.fontFamily, a253 = e413.globals.seriesNames, s196 = e413.globals.colors.slice();
                if ("heatmap" === e413.config.chart.type) {
                    var r173 = e413.config.plotOptions.heatmap.colorScale.ranges;
                    a253 = r173.map(function(t549) {
                        return t549.name ? t549.name : t549.from + " - " + t549.to;
                    }), s196 = r173.map(function(t550) {
                        return t550.color;
                    });
                } else this.isBarsDistributed && (a253 = e413.globals.labels.slice());
                e413.config.legend.customLegendItems.length && (a253 = e413.config.legend.customLegendItems);
                for(var o150 = e413.globals.legendFormatter, n131 = e413.config.legend.inverseOrder, l104 = n131 ? a253.length - 1 : 0; n131 ? l104 >= 0 : l104 <= a253.length - 1; n131 ? l104-- : l104++){
                    var h87 = o150(a253[l104], {
                        seriesIndex: l104,
                        w: e413
                    }), c76 = !1, d66 = !1;
                    if (e413.globals.collapsedSeries.length > 0) for(var g56 = 0; g56 < e413.globals.collapsedSeries.length; g56++)e413.globals.collapsedSeries[g56].index === l104 && (c76 = !0);
                    if (e413.globals.ancillaryCollapsedSeriesIndices.length > 0) for(var u46 = 0; u46 < e413.globals.ancillaryCollapsedSeriesIndices.length; u46++)e413.globals.ancillaryCollapsedSeriesIndices[u46] === l104 && (d66 = !0);
                    var f40 = document.createElement("span");
                    f40.classList.add("apexcharts-legend-marker");
                    var p35 = e413.config.legend.markers.offsetX, b29 = e413.config.legend.markers.offsetY, v18 = e413.config.legend.markers.height, y20 = e413.config.legend.markers.width, w16 = e413.config.legend.markers.strokeWidth, A11 = e413.config.legend.markers.strokeColor, S10 = e413.config.legend.markers.radius, C8 = f40.style;
                    C8.background = s196[l104], C8.color = s196[l104], C8.setProperty("background", s196[l104], "important"), e413.config.legend.markers.fillColors && e413.config.legend.markers.fillColors[l104] && (C8.background = e413.config.legend.markers.fillColors[l104]), void 0 !== e413.globals.seriesColors[l104] && (C8.background = e413.globals.seriesColors[l104], C8.color = e413.globals.seriesColors[l104]), C8.height = Array.isArray(v18) ? parseFloat(v18[l104]) + "px" : parseFloat(v18) + "px", C8.width = Array.isArray(y20) ? parseFloat(y20[l104]) + "px" : parseFloat(y20) + "px", C8.left = (Array.isArray(p35) ? parseFloat(p35[l104]) : parseFloat(p35)) + "px", C8.top = (Array.isArray(b29) ? parseFloat(b29[l104]) : parseFloat(b29)) + "px", C8.borderWidth = Array.isArray(w16) ? w16[l104] : w16, C8.borderColor = Array.isArray(A11) ? A11[l104] : A11, C8.borderRadius = Array.isArray(S10) ? parseFloat(S10[l104]) + "px" : parseFloat(S10) + "px", e413.config.legend.markers.customHTML && (Array.isArray(e413.config.legend.markers.customHTML) ? e413.config.legend.markers.customHTML[l104] && (f40.innerHTML = e413.config.legend.markers.customHTML[l104]()) : f40.innerHTML = e413.config.legend.markers.customHTML()), m.setAttrs(f40, {
                        rel: l104 + 1,
                        "data:collapsed": c76 || d66
                    }), (c76 || d66) && f40.classList.add("apexcharts-inactive-legend");
                    var L8 = document.createElement("div"), P8 = document.createElement("span");
                    P8.classList.add("apexcharts-legend-text"), P8.innerHTML = Array.isArray(h87) ? h87.join(" ") : h87;
                    var T7 = e413.config.legend.labels.useSeriesColors ? e413.globals.colors[l104] : e413.config.legend.labels.colors;
                    T7 || (T7 = e413.config.chart.foreColor), P8.style.color = T7, P8.style.fontSize = parseFloat(e413.config.legend.fontSize) + "px", P8.style.fontWeight = e413.config.legend.fontWeight, P8.style.fontFamily = i304 || e413.config.chart.fontFamily, m.setAttrs(P8, {
                        rel: l104 + 1,
                        i: l104,
                        "data:default-text": encodeURIComponent(h87),
                        "data:collapsed": c76 || d66
                    }), L8.appendChild(f40), L8.appendChild(P8);
                    var M7 = new k(this.ctx);
                    if (!e413.config.legend.showForZeroSeries) 0 === M7.getSeriesTotalByIndex(l104) && M7.seriesHaveSameValues(l104) && !M7.isSeriesNull(l104) && -1 === e413.globals.collapsedSeriesIndices.indexOf(l104) && -1 === e413.globals.ancillaryCollapsedSeriesIndices.indexOf(l104) && L8.classList.add("apexcharts-hidden-zero-series");
                    e413.config.legend.showForNullSeries || M7.isSeriesNull(l104) && -1 === e413.globals.collapsedSeriesIndices.indexOf(l104) && -1 === e413.globals.ancillaryCollapsedSeriesIndices.indexOf(l104) && L8.classList.add("apexcharts-hidden-null-series"), e413.globals.dom.elLegendWrap.appendChild(L8), e413.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e413.config.legend.horizontalAlign)), e413.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e413.config.legend.position), L8.classList.add("apexcharts-legend-series"), L8.style.margin = "".concat(e413.config.legend.itemMargin.vertical, "px ").concat(e413.config.legend.itemMargin.horizontal, "px"), e413.globals.dom.elLegendWrap.style.width = e413.config.legend.width ? e413.config.legend.width + "px" : "", e413.globals.dom.elLegendWrap.style.height = e413.config.legend.height ? e413.config.legend.height + "px" : "", m.setAttrs(L8, {
                        rel: l104 + 1,
                        seriesName: x.escapeString(a253[l104]),
                        "data:collapsed": c76 || d66
                    }), (c76 || d66) && L8.classList.add("apexcharts-inactive-legend"), e413.config.legend.onItemClick.toggleDataSeries || L8.classList.add("apexcharts-no-click");
                }
                e413.globals.dom.elWrap.addEventListener("click", t548.onLegendClick, !0), e413.config.legend.onItemHover.highlightDataSeries && 0 === e413.config.legend.customLegendItems.length && (e413.globals.dom.elWrap.addEventListener("mousemove", t548.onLegendHovered, !0), e413.globals.dom.elWrap.addEventListener("mouseout", t548.onLegendHovered, !0));
            }
        },
        {
            key: "setLegendWrapXY",
            value: function(t551, e414) {
                var i305 = this.w, a254 = i305.globals.dom.baseEl.querySelector(".apexcharts-legend"), s197 = a254.getBoundingClientRect(), r174 = 0, o151 = 0;
                if ("bottom" === i305.config.legend.position) o151 += i305.globals.svgHeight - s197.height / 2;
                else if ("top" === i305.config.legend.position) {
                    var n132 = new lt(this.ctx), l105 = n132.dimHelpers.getTitleSubtitleCoords("title").height, h88 = n132.dimHelpers.getTitleSubtitleCoords("subtitle").height;
                    o151 = o151 + (l105 > 0 ? l105 - 10 : 0) + (h88 > 0 ? h88 - 10 : 0);
                }
                a254.style.position = "absolute", r174 = r174 + t551 + i305.config.legend.offsetX, o151 = o151 + e414 + i305.config.legend.offsetY, a254.style.left = r174 + "px", a254.style.top = o151 + "px", "bottom" === i305.config.legend.position ? (a254.style.top = "auto", a254.style.bottom = 5 - i305.config.legend.offsetY + "px") : "right" === i305.config.legend.position && (a254.style.left = "auto", a254.style.right = 25 + i305.config.legend.offsetX + "px");
                [
                    "width",
                    "height"
                ].forEach(function(t) {
                    a254.style[t] && (a254.style[t] = parseInt(i305.config.legend[t], 10) + "px");
                });
            }
        },
        {
            key: "legendAlignHorizontal",
            value: function() {
                var t552 = this.w;
                t552.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0;
                var e415 = this.legendHelpers.getLegendBBox(), i306 = new lt(this.ctx), a255 = i306.dimHelpers.getTitleSubtitleCoords("title"), s198 = i306.dimHelpers.getTitleSubtitleCoords("subtitle"), r175 = 0;
                "bottom" === t552.config.legend.position ? r175 = -e415.clwh / 1.8 : "top" === t552.config.legend.position && (r175 = a255.height + s198.height + t552.config.title.margin + t552.config.subtitle.margin - 10), this.setLegendWrapXY(20, r175);
            }
        },
        {
            key: "legendAlignVertical",
            value: function() {
                var t553 = this.w, e416 = this.legendHelpers.getLegendBBox(), i307 = 0;
                "left" === t553.config.legend.position && (i307 = 20), "right" === t553.config.legend.position && (i307 = t553.globals.svgWidth - e416.clww - 10), this.setLegendWrapXY(i307, 20);
            }
        },
        {
            key: "onLegendHovered",
            value: function(t554) {
                var e417 = this.w, i308 = t554.target.classList.contains("apexcharts-legend-text") || t554.target.classList.contains("apexcharts-legend-marker");
                if ("heatmap" === e417.config.chart.type || this.isBarsDistributed) {
                    if (i308) {
                        var a256 = parseInt(t554.target.getAttribute("rel"), 10) - 1;
                        this.ctx.events.fireEvent("legendHover", [
                            this.ctx,
                            a256,
                            this.w
                        ]), new X(this.ctx).highlightRangeInSeries(t554, t554.target);
                    }
                } else !t554.target.classList.contains("apexcharts-inactive-legend") && i308 && new X(this.ctx).toggleSeriesOnHover(t554, t554.target);
            }
        },
        {
            key: "onLegendClick",
            value: function(t555) {
                var e418 = this.w;
                if (!e418.config.legend.customLegendItems.length && (t555.target.classList.contains("apexcharts-legend-text") || t555.target.classList.contains("apexcharts-legend-marker"))) {
                    var i309 = parseInt(t555.target.getAttribute("rel"), 10) - 1, a257 = "true" === t555.target.getAttribute("data:collapsed"), s199 = this.w.config.chart.events.legendClick;
                    "function" == typeof s199 && s199(this.ctx, i309, this.w), this.ctx.events.fireEvent("legendClick", [
                        this.ctx,
                        i309,
                        this.w
                    ]);
                    var r176 = this.w.config.legend.markers.onClick;
                    "function" == typeof r176 && t555.target.classList.contains("apexcharts-legend-marker") && (r176(this.ctx, i309, this.w), this.ctx.events.fireEvent("legendMarkerClick", [
                        this.ctx,
                        i309,
                        this.w
                    ])), "treemap" !== e418.config.chart.type && "heatmap" !== e418.config.chart.type && !this.isBarsDistributed && e418.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i309, a257);
                }
            }
        }
    ]), t546;
}(), dt = function() {
    function t556(e419) {
        a(this, t556), this.ctx = e419, this.w = e419.w;
        var i310 = this.w;
        this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = i310.globals.minX, this.maxX = i310.globals.maxX;
    }
    return r(t556, [
        {
            key: "createToolbar",
            value: function() {
                var t557 = this, e420 = this.w, i311 = function() {
                    return document.createElement("div");
                }, a258 = i311();
                if (a258.setAttribute("class", "apexcharts-toolbar"), a258.style.top = e420.config.chart.toolbar.offsetY + "px", a258.style.right = 3 - e420.config.chart.toolbar.offsetX + "px", e420.globals.dom.elWrap.appendChild(a258), this.elZoom = i311(), this.elZoomIn = i311(), this.elZoomOut = i311(), this.elPan = i311(), this.elSelection = i311(), this.elZoomReset = i311(), this.elMenuIcon = i311(), this.elMenu = i311(), this.elCustomIcons = [], this.t = e420.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for(var s200 = 0; s200 < this.t.customIcons.length; s200++)this.elCustomIcons.push(i311());
                var r177 = [], o152 = function(i312, a259, s201) {
                    var o153 = i312.toLowerCase();
                    t557.t[o153] && e420.config.chart.zoom.enabled && r177.push({
                        el: a259,
                        icon: "string" == typeof t557.t[o153] ? t557.t[o153] : s201,
                        title: t557.localeValues[i312],
                        class: "apexcharts-".concat(o153, "-icon")
                    });
                };
                o152("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), o152("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
                var n133 = function(i313) {
                    t557.t[i313] && e420.config.chart[i313].enabled && r177.push({
                        el: "zoom" === i313 ? t557.elZoom : t557.elSelection,
                        icon: "string" == typeof t557.t[i313] ? t557.t[i313] : "zoom" === i313 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
                        title: t557.localeValues["zoom" === i313 ? "selectionZoom" : "selection"],
                        class: e420.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i313, "-icon")
                    });
                };
                n133("zoom"), n133("selection"), this.t.pan && e420.config.chart.zoom.enabled && r177.push({
                    el: this.elPan,
                    icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
                    title: this.localeValues.pan,
                    class: e420.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon"
                }), o152("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r177.push({
                    el: this.elMenuIcon,
                    icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
                    title: this.localeValues.menu,
                    class: "apexcharts-menu-icon"
                });
                for(var l106 = 0; l106 < this.elCustomIcons.length; l106++)r177.push({
                    el: this.elCustomIcons[l106],
                    icon: this.t.customIcons[l106].icon,
                    title: this.t.customIcons[l106].title,
                    index: this.t.customIcons[l106].index,
                    class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l106].class
                });
                r177.forEach(function(t558, e421) {
                    t558.index && x.moveIndexInArray(r177, e421, t558.index);
                });
                for(var h89 = 0; h89 < r177.length; h89++)m.setAttrs(r177[h89].el, {
                    class: r177[h89].class,
                    title: r177[h89].title
                }), r177[h89].el.innerHTML = r177[h89].icon, a258.appendChild(r177[h89].el);
                this._createHamburgerMenu(a258), e420.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e420.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e420.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
            }
        },
        {
            key: "_createHamburgerMenu",
            value: function(t559) {
                this.elMenuItems = [], t559.appendChild(this.elMenu), m.setAttrs(this.elMenu, {
                    class: "apexcharts-menu"
                });
                var e422 = [
                    {
                        name: "exportSVG",
                        title: this.localeValues.exportToSVG
                    },
                    {
                        name: "exportPNG",
                        title: this.localeValues.exportToPNG
                    },
                    {
                        name: "exportCSV",
                        title: this.localeValues.exportToCSV
                    }
                ];
                this.w.globals.allSeriesHasEqualX || e422.splice(2, 1);
                for(var i314 = 0; i314 < e422.length; i314++)this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i314].innerHTML = e422[i314].title, m.setAttrs(this.elMenuItems[i314], {
                    class: "apexcharts-menu-item ".concat(e422[i314].name),
                    title: e422[i314].title
                }), this.elMenu.appendChild(this.elMenuItems[i314]);
            }
        },
        {
            key: "addToolbarEventListeners",
            value: function() {
                var t560 = this;
                this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(e424) {
                    e424.classList.contains("exportSVG") ? e424.addEventListener("click", t560.handleDownload.bind(t560, "svg")) : e424.classList.contains("exportPNG") ? e424.addEventListener("click", t560.handleDownload.bind(t560, "png")) : e424.classList.contains("exportCSV") && e424.addEventListener("click", t560.handleDownload.bind(t560, "csv"));
                });
                for(var e423 = 0; e423 < this.t.customIcons.length; e423++)this.elCustomIcons[e423].addEventListener("click", this.t.customIcons[e423].click.bind(this, this.ctx, this.ctx.w));
            }
        },
        {
            key: "toggleZoomSelection",
            value: function(t561) {
                this.ctx.getSyncedCharts().forEach(function(e425) {
                    e425.ctx.toolbar.toggleOtherControls();
                    var i315 = "selection" === t561 ? e425.ctx.toolbar.elSelection : e425.ctx.toolbar.elZoom, a = "selection" === t561 ? "selectionEnabled" : "zoomEnabled";
                    e425.w.globals[a] = !e425.w.globals[a], i315.classList.contains(e425.ctx.toolbar.selectedClass) ? i315.classList.remove(e425.ctx.toolbar.selectedClass) : i315.classList.add(e425.ctx.toolbar.selectedClass);
                });
            }
        },
        {
            key: "getToolbarIconsReference",
            value: function() {
                var t562 = this.w;
                this.elZoom || (this.elZoom = t562.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t562.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t562.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
            }
        },
        {
            key: "enableZoomPanFromToolbar",
            value: function(t563) {
                this.toggleOtherControls(), "pan" === t563 ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
                var e426 = "pan" === t563 ? this.elPan : this.elZoom, i316 = "pan" === t563 ? this.elZoom : this.elPan;
                e426 && e426.classList.add(this.selectedClass), i316 && i316.classList.remove(this.selectedClass);
            }
        },
        {
            key: "togglePanning",
            value: function() {
                this.ctx.getSyncedCharts().forEach(function(t564) {
                    t564.ctx.toolbar.toggleOtherControls(), t564.w.globals.panEnabled = !t564.w.globals.panEnabled, t564.ctx.toolbar.elPan.classList.contains(t564.ctx.toolbar.selectedClass) ? t564.ctx.toolbar.elPan.classList.remove(t564.ctx.toolbar.selectedClass) : t564.ctx.toolbar.elPan.classList.add(t564.ctx.toolbar.selectedClass);
                });
            }
        },
        {
            key: "toggleOtherControls",
            value: function() {
                var t565 = this, e427 = this.w;
                e427.globals.panEnabled = !1, e427.globals.zoomEnabled = !1, e427.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [
                    this.elPan,
                    this.elSelection,
                    this.elZoom
                ].forEach(function(e428) {
                    e428 && e428.classList.remove(t565.selectedClass);
                });
            }
        },
        {
            key: "handleZoomIn",
            value: function() {
                var t566 = this.w;
                t566.globals.isRangeBar && (this.minX = t566.globals.minY, this.maxX = t566.globals.maxY);
                var e429 = (this.minX + this.maxX) / 2, i317 = (this.minX + e429) / 2, a260 = (this.maxX + e429) / 2, s202 = this._getNewMinXMaxX(i317, a260);
                t566.globals.disableZoomIn || this.zoomUpdateOptions(s202.minX, s202.maxX);
            }
        },
        {
            key: "handleZoomOut",
            value: function() {
                var t567 = this.w;
                if (t567.globals.isRangeBar && (this.minX = t567.globals.minY, this.maxX = t567.globals.maxY), !("datetime" === t567.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1000)) {
                    var e430 = (this.minX + this.maxX) / 2, i318 = this.minX - (e430 - this.minX), a261 = this.maxX - (e430 - this.maxX), s203 = this._getNewMinXMaxX(i318, a261);
                    t567.globals.disableZoomOut || this.zoomUpdateOptions(s203.minX, s203.maxX);
                }
            }
        },
        {
            key: "_getNewMinXMaxX",
            value: function(t568, e431) {
                var i319 = this.w.config.xaxis.convertedCatToNumeric;
                return {
                    minX: i319 ? Math.floor(t568) : t568,
                    maxX: i319 ? Math.floor(e431) : e431
                };
            }
        },
        {
            key: "zoomUpdateOptions",
            value: function(t569, e432) {
                var i320 = this.w;
                if (void 0 !== t569 || void 0 !== e432) {
                    if (!(i320.config.xaxis.convertedCatToNumeric && (t569 < 1 && (t569 = 1, e432 = i320.globals.dataPoints), e432 - t569 < 2))) {
                        var a262 = {
                            min: t569,
                            max: e432
                        }, s204 = this.getBeforeZoomRange(a262);
                        s204 && (a262 = s204.xaxis);
                        var r178 = {
                            xaxis: a262
                        }, o154 = x.clone(i320.globals.initialConfig.yaxis);
                        if (i320.config.chart.zoom.autoScaleYaxis) o154 = new q(this.ctx).autoScaleY(this.ctx, o154, {
                            xaxis: a262
                        });
                        i320.config.chart.group || (r178.yaxis = o154), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r178, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a262, o154);
                    }
                } else this.handleZoomReset();
            }
        },
        {
            key: "zoomCallback",
            value: function(t570, e433) {
                "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {
                    xaxis: t570,
                    yaxis: e433
                });
            }
        },
        {
            key: "getBeforeZoomRange",
            value: function(t571, e434) {
                var i321 = null;
                return "function" == typeof this.ev.beforeZoom && (i321 = this.ev.beforeZoom(this, {
                    xaxis: t571,
                    yaxis: e434
                })), i321;
            }
        },
        {
            key: "toggleMenu",
            value: function() {
                var t572 = this;
                window.setTimeout(function() {
                    t572.elMenu.classList.contains("apexcharts-menu-open") ? t572.elMenu.classList.remove("apexcharts-menu-open") : t572.elMenu.classList.add("apexcharts-menu-open");
                }, 0);
            }
        },
        {
            key: "handleDownload",
            value: function(t573) {
                var e435 = this.w, i322 = new j(this.ctx);
                switch(t573){
                    case "svg":
                        i322.exportToSVG(this.ctx);
                        break;
                    case "png":
                        i322.exportToPng(this.ctx);
                        break;
                    case "csv":
                        i322.exportToCSV({
                            series: e435.config.series,
                            columnDelimiter: e435.config.chart.toolbar.export.csv.columnDelimiter
                        });
                }
            }
        },
        {
            key: "handleZoomReset",
            value: function(t574) {
                this.ctx.getSyncedCharts().forEach(function(t575) {
                    var e436 = t575.w;
                    if (e436.globals.lastXAxis.min = void 0, e436.globals.lastXAxis.max = void 0, t575.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e436.config.chart.events.beforeResetZoom) {
                        var i323 = e436.config.chart.events.beforeResetZoom(t575, e436);
                        i323 && t575.updateHelpers.revertDefaultAxisMinMax(i323);
                    }
                    "function" == typeof e436.config.chart.events.zoomed && t575.ctx.toolbar.zoomCallback({
                        min: e436.config.xaxis.min,
                        max: e436.config.xaxis.max
                    }), e436.globals.zoomed = !1;
                    var a263 = t575.ctx.series.emptyCollapsedSeries(x.clone(e436.globals.initialSeries));
                    t575.updateHelpers._updateSeries(a263, e436.config.chart.animations.dynamicAnimation.enabled);
                });
            }
        },
        {
            key: "destroy",
            value: function() {
                this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
            }
        }
    ]), t556;
}(), gt = function(t576) {
    n(i324, dt);
    var e437 = d(i324);
    function i324(t577) {
        var s205;
        return a(this, i324), (s205 = e437.call(this, t577)).ctx = t577, s205.w = t577.w, s205.dragged = !1, s205.graphics = new m(s205.ctx), s205.eventList = [
            "mousedown",
            "mouseleave",
            "mousemove",
            "touchstart",
            "touchmove",
            "mouseup",
            "touchend"
        ], s205.clientX = 0, s205.clientY = 0, s205.startX = 0, s205.endX = 0, s205.dragX = 0, s205.startY = 0, s205.endY = 0, s205.dragY = 0, s205.moveDirection = "none", s205;
    }
    return r(i324, [
        {
            key: "init",
            value: function(t578) {
                var e438 = this, i325 = t578.xyRatios, a264 = this.w, s206 = this;
                this.xyRatios = i325, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a264.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a264.globals.dom.elGraphical.add(this.zoomRect), a264.globals.dom.elGraphical.add(this.selectionRect), "x" === a264.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                    minX: 0,
                    minY: 0,
                    maxX: a264.globals.gridWidth,
                    maxY: a264.globals.gridHeight
                }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === a264.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                    minX: 0,
                    maxX: a264.globals.gridWidth
                }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a264.globals.dom.baseEl.querySelector("".concat(a264.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(t579) {
                    e438.hoverArea.addEventListener(t579, s206.svgMouseEvents.bind(s206, i325), {
                        capture: !1,
                        passive: !0
                    });
                });
            }
        },
        {
            key: "destroy",
            value: function() {
                this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
            }
        },
        {
            key: "svgMouseEvents",
            value: function(t580, e439) {
                var i326 = this.w, a265 = this, s207 = this.ctx.toolbar, r179 = i326.globals.zoomEnabled ? i326.config.chart.zoom.type : i326.config.chart.selection.type, o155 = i326.config.chart.toolbar.autoSelected;
                if (e439.shiftKey ? (this.shiftWasPressed = !0, s207.enableZoomPanFromToolbar("pan" === o155 ? "zoom" : "pan")) : this.shiftWasPressed && (s207.enableZoomPanFromToolbar(o155), this.shiftWasPressed = !1), e439.target) {
                    var n134, l107 = e439.target.classList;
                    if (e439.target.parentNode && null !== e439.target.parentNode && (n134 = e439.target.parentNode.classList), !(l107.contains("apexcharts-selection-rect") || l107.contains("apexcharts-legend-marker") || l107.contains("apexcharts-legend-text") || n134 && n134.contains("apexcharts-toolbar"))) {
                        if (a265.clientX = "touchmove" === e439.type || "touchstart" === e439.type ? e439.touches[0].clientX : "touchend" === e439.type ? e439.changedTouches[0].clientX : e439.clientX, a265.clientY = "touchmove" === e439.type || "touchstart" === e439.type ? e439.touches[0].clientY : "touchend" === e439.type ? e439.changedTouches[0].clientY : e439.clientY, "mousedown" === e439.type && 1 === e439.which) {
                            var h90 = a265.gridRect.getBoundingClientRect();
                            a265.startX = a265.clientX - h90.left, a265.startY = a265.clientY - h90.top, a265.dragged = !1, a265.w.globals.mousedown = !0;
                        }
                        if (("mousemove" === e439.type && 1 === e439.which || "touchmove" === e439.type) && (a265.dragged = !0, i326.globals.panEnabled ? (i326.globals.selection = null, a265.w.globals.mousedown && a265.panDragging({
                            context: a265,
                            zoomtype: r179,
                            xyRatios: t580
                        })) : (a265.w.globals.mousedown && i326.globals.zoomEnabled || a265.w.globals.mousedown && i326.globals.selectionEnabled) && (a265.selection = a265.selectionDrawing({
                            context: a265,
                            zoomtype: r179
                        }))), "mouseup" === e439.type || "touchend" === e439.type || "mouseleave" === e439.type) {
                            var c77 = a265.gridRect.getBoundingClientRect();
                            a265.w.globals.mousedown && (a265.endX = a265.clientX - c77.left, a265.endY = a265.clientY - c77.top, a265.dragX = Math.abs(a265.endX - a265.startX), a265.dragY = Math.abs(a265.endY - a265.startY), (i326.globals.zoomEnabled || i326.globals.selectionEnabled) && a265.selectionDrawn({
                                context: a265,
                                zoomtype: r179
                            }), i326.globals.panEnabled && i326.config.xaxis.convertedCatToNumeric && a265.delayedPanScrolled()), i326.globals.zoomEnabled && a265.hideSelectionRect(this.selectionRect), a265.dragged = !1, a265.w.globals.mousedown = !1;
                        }
                        this.makeSelectionRectDraggable();
                    }
                }
            }
        },
        {
            key: "makeSelectionRectDraggable",
            value: function() {
                var t581 = this.w;
                if (this.selectionRect) {
                    var e440 = this.selectionRect.node.getBoundingClientRect();
                    e440.width > 0 && e440.height > 0 && this.slDraggableRect.selectize({
                        points: "l, r",
                        pointSize: 8,
                        pointType: "rect"
                    }).resize({
                        constraint: {
                            minX: 0,
                            minY: 0,
                            maxX: t581.globals.gridWidth,
                            maxY: t581.globals.gridHeight
                        }
                    }).on("resizing", this.selectionDragging.bind(this, "resizing"));
                }
            }
        },
        {
            key: "preselectedSelection",
            value: function() {
                var t582 = this.w, e441 = this.xyRatios;
                if (!t582.globals.zoomEnabled) {
                    if (void 0 !== t582.globals.selection && null !== t582.globals.selection) this.drawSelectionRect(t582.globals.selection);
                    else if (void 0 !== t582.config.chart.selection.xaxis.min && void 0 !== t582.config.chart.selection.xaxis.max) {
                        var i327 = (t582.config.chart.selection.xaxis.min - t582.globals.minX) / e441.xRatio, a266 = {
                            x: i327,
                            y: 0,
                            width: t582.globals.gridWidth - (t582.globals.maxX - t582.config.chart.selection.xaxis.max) / e441.xRatio - i327,
                            height: t582.globals.gridHeight,
                            translateX: 0,
                            translateY: 0,
                            selectionEnabled: !0
                        };
                        this.drawSelectionRect(a266), this.makeSelectionRectDraggable(), "function" == typeof t582.config.chart.events.selection && t582.config.chart.events.selection(this.ctx, {
                            xaxis: {
                                min: t582.config.chart.selection.xaxis.min,
                                max: t582.config.chart.selection.xaxis.max
                            },
                            yaxis: {
                            }
                        });
                    }
                }
            }
        },
        {
            key: "drawSelectionRect",
            value: function(t583) {
                var e442 = t583.x, i328 = t583.y, a267 = t583.width, s208 = t583.height, r180 = t583.translateX, o156 = void 0 === r180 ? 0 : r180, n135 = t583.translateY, l108 = void 0 === n135 ? 0 : n135, h91 = this.w, c78 = this.zoomRect, d67 = this.selectionRect;
                if (this.dragged || null !== h91.globals.selection) {
                    var g57 = {
                        transform: "translate(" + o156 + ", " + l108 + ")"
                    };
                    h91.globals.zoomEnabled && this.dragged && (a267 < 0 && (a267 = 1), c78.attr({
                        x: e442,
                        y: i328,
                        width: a267,
                        height: s208,
                        fill: h91.config.chart.zoom.zoomedArea.fill.color,
                        "fill-opacity": h91.config.chart.zoom.zoomedArea.fill.opacity,
                        stroke: h91.config.chart.zoom.zoomedArea.stroke.color,
                        "stroke-width": h91.config.chart.zoom.zoomedArea.stroke.width,
                        "stroke-opacity": h91.config.chart.zoom.zoomedArea.stroke.opacity
                    }), m.setAttrs(c78.node, g57)), h91.globals.selectionEnabled && (d67.attr({
                        x: e442,
                        y: i328,
                        width: a267 > 0 ? a267 : 0,
                        height: s208 > 0 ? s208 : 0,
                        fill: h91.config.chart.selection.fill.color,
                        "fill-opacity": h91.config.chart.selection.fill.opacity,
                        stroke: h91.config.chart.selection.stroke.color,
                        "stroke-width": h91.config.chart.selection.stroke.width,
                        "stroke-dasharray": h91.config.chart.selection.stroke.dashArray,
                        "stroke-opacity": h91.config.chart.selection.stroke.opacity
                    }), m.setAttrs(d67.node, g57));
                }
            }
        },
        {
            key: "hideSelectionRect",
            value: function(t584) {
                t584 && t584.attr({
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                });
            }
        },
        {
            key: "selectionDrawing",
            value: function(t585) {
                var e443 = t585.context, i329 = t585.zoomtype, a268 = this.w, s209 = e443, r181 = this.gridRect.getBoundingClientRect(), o157 = s209.startX - 1, n136 = s209.startY, l109 = !1, h92 = !1, c79 = s209.clientX - r181.left - o157, d68 = s209.clientY - r181.top - n136, g58 = {
                };
                return Math.abs(c79 + o157) > a268.globals.gridWidth ? c79 = a268.globals.gridWidth - o157 : s209.clientX - r181.left < 0 && (c79 = o157), o157 > s209.clientX - r181.left && (l109 = !0, c79 = Math.abs(c79)), n136 > s209.clientY - r181.top && (h92 = !0, d68 = Math.abs(d68)), g58 = "x" === i329 ? {
                    x: l109 ? o157 - c79 : o157,
                    y: 0,
                    width: c79,
                    height: a268.globals.gridHeight
                } : "y" === i329 ? {
                    x: 0,
                    y: h92 ? n136 - d68 : n136,
                    width: a268.globals.gridWidth,
                    height: d68
                } : {
                    x: l109 ? o157 - c79 : o157,
                    y: h92 ? n136 - d68 : n136,
                    width: c79,
                    height: d68
                }, s209.drawSelectionRect(g58), s209.selectionDragging("resizing"), g58;
            }
        },
        {
            key: "selectionDragging",
            value: function(t586, e444) {
                var i330 = this, a269 = this.w, s210 = this.xyRatios, r182 = this.selectionRect, o158 = 0;
                "resizing" === t586 && (o158 = 30);
                var n137 = function(t587) {
                    return parseFloat(r182.node.getAttribute(t587));
                }, l110 = {
                    x: n137("x"),
                    y: n137("y"),
                    width: n137("width"),
                    height: n137("height")
                };
                a269.globals.selection = l110, "function" == typeof a269.config.chart.events.selection && a269.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
                    var t588 = i330.gridRect.getBoundingClientRect(), e445 = r182.node.getBoundingClientRect(), o159 = {
                        xaxis: {
                            min: a269.globals.xAxisScale.niceMin + (e445.left - t588.left) * s210.xRatio,
                            max: a269.globals.xAxisScale.niceMin + (e445.right - t588.left) * s210.xRatio
                        },
                        yaxis: {
                            min: a269.globals.yAxisScale[0].niceMin + (t588.bottom - e445.bottom) * s210.yRatio[0],
                            max: a269.globals.yAxisScale[0].niceMax - (e445.top - t588.top) * s210.yRatio[0]
                        }
                    };
                    a269.config.chart.events.selection(i330.ctx, o159), a269.config.chart.brush.enabled && void 0 !== a269.config.chart.events.brushScrolled && a269.config.chart.events.brushScrolled(i330.ctx, o159);
                }, o158));
            }
        },
        {
            key: "selectionDrawn",
            value: function(t589) {
                var e446 = t589.context, i331 = t589.zoomtype, a270 = this.w, s211 = e446, r183 = this.xyRatios, o160 = this.ctx.toolbar;
                if (s211.startX > s211.endX) {
                    var n138 = s211.startX;
                    s211.startX = s211.endX, s211.endX = n138;
                }
                if (s211.startY > s211.endY) {
                    var l111 = s211.startY;
                    s211.startY = s211.endY, s211.endY = l111;
                }
                var h93 = void 0, c80 = void 0;
                a270.globals.isRangeBar ? (h93 = a270.globals.yAxisScale[0].niceMin + s211.startX * r183.invertedYRatio, c80 = a270.globals.yAxisScale[0].niceMin + s211.endX * r183.invertedYRatio) : (h93 = a270.globals.xAxisScale.niceMin + s211.startX * r183.xRatio, c80 = a270.globals.xAxisScale.niceMin + s211.endX * r183.xRatio);
                var d69 = [], g59 = [];
                if (a270.config.yaxis.forEach(function(t, e) {
                    d69.push(a270.globals.yAxisScale[e].niceMax - r183.yRatio[e] * s211.startY), g59.push(a270.globals.yAxisScale[e].niceMax - r183.yRatio[e] * s211.endY);
                }), s211.dragged && (s211.dragX > 10 || s211.dragY > 10) && h93 !== c80) {
                    if (a270.globals.zoomEnabled) {
                        var u47 = x.clone(a270.globals.initialConfig.yaxis), f41 = x.clone(a270.globals.initialConfig.xaxis);
                        if (a270.globals.zoomed = !0, a270.config.xaxis.convertedCatToNumeric && (h93 = Math.floor(h93), c80 = Math.floor(c80), h93 < 1 && (h93 = 1, c80 = a270.globals.dataPoints), c80 - h93 < 2 && (c80 = h93 + 1)), "xy" !== i331 && "x" !== i331 || (f41 = {
                            min: h93,
                            max: c80
                        }), "xy" !== i331 && "y" !== i331 || u47.forEach(function(t, e) {
                            u47[e].min = g59[e], u47[e].max = d69[e];
                        }), a270.config.chart.zoom.autoScaleYaxis) {
                            var p36 = new q(s211.ctx);
                            u47 = p36.autoScaleY(s211.ctx, u47, {
                                xaxis: f41
                            });
                        }
                        if (o160) {
                            var b30 = o160.getBeforeZoomRange(f41, u47);
                            b30 && (f41 = b30.xaxis ? b30.xaxis : f41, u47 = b30.yaxis ? b30.yaxis : u47);
                        }
                        var v19 = {
                            xaxis: f41
                        };
                        a270.config.chart.group || (v19.yaxis = u47), s211.ctx.updateHelpers._updateOptions(v19, !1, s211.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a270.config.chart.events.zoomed && o160.zoomCallback(f41, u47);
                    } else if (a270.globals.selectionEnabled) {
                        var m7, y21 = null;
                        m7 = {
                            min: h93,
                            max: c80
                        }, "xy" !== i331 && "y" !== i331 || (y21 = x.clone(a270.config.yaxis)).forEach(function(t, e) {
                            y21[e].min = g59[e], y21[e].max = d69[e];
                        }), a270.globals.selection = s211.selection, "function" == typeof a270.config.chart.events.selection && a270.config.chart.events.selection(s211.ctx, {
                            xaxis: m7,
                            yaxis: y21
                        });
                    }
                }
            }
        },
        {
            key: "panDragging",
            value: function(t590) {
                var e447 = t590.context, i332 = this.w, a271 = e447;
                if (void 0 !== i332.globals.lastClientPosition.x) {
                    var s212 = i332.globals.lastClientPosition.x - a271.clientX, r184 = i332.globals.lastClientPosition.y - a271.clientY;
                    Math.abs(s212) > Math.abs(r184) && s212 > 0 ? this.moveDirection = "left" : Math.abs(s212) > Math.abs(r184) && s212 < 0 ? this.moveDirection = "right" : Math.abs(r184) > Math.abs(s212) && r184 > 0 ? this.moveDirection = "up" : Math.abs(r184) > Math.abs(s212) && r184 < 0 && (this.moveDirection = "down");
                }
                i332.globals.lastClientPosition = {
                    x: a271.clientX,
                    y: a271.clientY
                };
                var o161 = i332.globals.isRangeBar ? i332.globals.minY : i332.globals.minX, n139 = i332.globals.isRangeBar ? i332.globals.maxY : i332.globals.maxX;
                i332.config.xaxis.convertedCatToNumeric || a271.panScrolled(o161, n139);
            }
        },
        {
            key: "delayedPanScrolled",
            value: function() {
                var t591 = this.w, e448 = t591.globals.minX, i333 = t591.globals.maxX, a272 = (t591.globals.maxX - t591.globals.minX) / 2;
                "left" === this.moveDirection ? (e448 = t591.globals.minX + a272, i333 = t591.globals.maxX + a272) : "right" === this.moveDirection && (e448 = t591.globals.minX - a272, i333 = t591.globals.maxX - a272), e448 = Math.floor(e448), i333 = Math.floor(i333), this.updateScrolledChart({
                    xaxis: {
                        min: e448,
                        max: i333
                    }
                }, e448, i333);
            }
        },
        {
            key: "panScrolled",
            value: function(t592, e449) {
                var i334 = this.w, a273 = this.xyRatios, s213 = x.clone(i334.globals.initialConfig.yaxis), r185 = a273.xRatio, o162 = i334.globals.minX, n140 = i334.globals.maxX;
                i334.globals.isRangeBar && (r185 = a273.invertedYRatio, o162 = i334.globals.minY, n140 = i334.globals.maxY), "left" === this.moveDirection ? (t592 = o162 + i334.globals.gridWidth / 15 * r185, e449 = n140 + i334.globals.gridWidth / 15 * r185) : "right" === this.moveDirection && (t592 = o162 - i334.globals.gridWidth / 15 * r185, e449 = n140 - i334.globals.gridWidth / 15 * r185), i334.globals.isRangeBar || (t592 < i334.globals.initialMinX || e449 > i334.globals.initialMaxX) && (t592 = o162, e449 = n140);
                var l112 = {
                    min: t592,
                    max: e449
                };
                i334.config.chart.zoom.autoScaleYaxis && (s213 = new q(this.ctx).autoScaleY(this.ctx, s213, {
                    xaxis: l112
                }));
                var h94 = {
                    xaxis: {
                        min: t592,
                        max: e449
                    }
                };
                i334.config.chart.group || (h94.yaxis = s213), this.updateScrolledChart(h94, t592, e449);
            }
        },
        {
            key: "updateScrolledChart",
            value: function(t593, e450, i335) {
                var a274 = this.w;
                this.ctx.updateHelpers._updateOptions(t593, !1, !1), "function" == typeof a274.config.chart.events.scrolled && a274.config.chart.events.scrolled(this.ctx, {
                    xaxis: {
                        min: e450,
                        max: i335
                    }
                });
            }
        }
    ]), i324;
}(), ut = function() {
    function t594(e451) {
        a(this, t594), this.w = e451.w, this.ttCtx = e451, this.ctx = e451.ctx;
    }
    return r(t594, [
        {
            key: "getNearestValues",
            value: function(t595) {
                var e452 = t595.hoverArea, i336 = t595.elGrid, a275 = t595.clientX, s214 = t595.clientY, r186 = this.w, o163 = i336.getBoundingClientRect(), n141 = o163.width, l113 = o163.height, h95 = n141 / (r186.globals.dataPoints - 1), c81 = l113 / r186.globals.dataPoints, d70 = this.hasBars();
                !r186.globals.comboCharts && !d70 || r186.config.xaxis.convertedCatToNumeric || (h95 = n141 / r186.globals.dataPoints);
                var g60 = a275 - o163.left - r186.globals.barPadForNumericAxis, u48 = s214 - o163.top;
                g60 < 0 || u48 < 0 || g60 > n141 || u48 > l113 ? (e452.classList.remove("hovering-zoom"), e452.classList.remove("hovering-pan")) : r186.globals.zoomEnabled ? (e452.classList.remove("hovering-pan"), e452.classList.add("hovering-zoom")) : r186.globals.panEnabled && (e452.classList.remove("hovering-zoom"), e452.classList.add("hovering-pan"));
                var f42 = Math.round(g60 / h95), p37 = Math.floor(u48 / c81);
                d70 && !r186.config.xaxis.convertedCatToNumeric && (f42 = Math.ceil(g60 / h95), f42 -= 1);
                var b31 = null, v20 = null, m8 = [], y22 = [];
                if (r186.globals.seriesXvalues.forEach(function(t596) {
                    m8.push([
                        t596[0] + 0.000001
                    ].concat(t596));
                }), r186.globals.seriesYvalues.forEach(function(t597) {
                    y22.push([
                        t597[0] + 0.000001
                    ].concat(t597));
                }), m8 = m8.map(function(t598) {
                    return t598.filter(function(t599) {
                        return x.isNumber(t599);
                    });
                }), y22 = y22.map(function(t600) {
                    return t600.filter(function(t601) {
                        return x.isNumber(t601);
                    });
                }), r186.globals.isXNumeric) {
                    var w17 = this.ttCtx.getElGrid().getBoundingClientRect(), k13 = g60 * (w17.width / n141), A12 = u48 * (w17.height / l113);
                    b31 = (v20 = this.closestInMultiArray(k13, A12, m8, y22)).index, f42 = v20.j, null !== b31 && (m8 = r186.globals.seriesXvalues[b31], f42 = (v20 = this.closestInArray(k13, m8)).index);
                }
                return r186.globals.capturedSeriesIndex = null === b31 ? -1 : b31, (!f42 || f42 < 1) && (f42 = 0), r186.globals.isBarHorizontal ? r186.globals.capturedDataPointIndex = p37 : r186.globals.capturedDataPointIndex = f42, {
                    capturedSeries: b31,
                    j: r186.globals.isBarHorizontal ? p37 : f42,
                    hoverX: g60,
                    hoverY: u48
                };
            }
        },
        {
            key: "closestInMultiArray",
            value: function(t602, e453, i337, a276) {
                var s215 = this.w, r187 = 0, o164 = null, n142 = -1;
                s215.globals.series.length > 1 ? r187 = this.getFirstActiveXArray(i337) : o164 = 0;
                var l114 = i337[r187][0], h96 = Math.abs(t602 - l114);
                if (i337.forEach(function(e454) {
                    e454.forEach(function(e455, i338) {
                        var a277 = Math.abs(t602 - e455);
                        a277 < h96 && (h96 = a277, n142 = i338);
                    });
                }), -1 !== n142) {
                    var c82 = a276[r187][n142], d71 = Math.abs(e453 - c82);
                    o164 = r187, a276.forEach(function(t603, i339) {
                        var a278 = Math.abs(e453 - t603[n142]);
                        a278 < d71 && (d71 = a278, o164 = i339);
                    });
                }
                return {
                    index: o164,
                    j: n142
                };
            }
        },
        {
            key: "getFirstActiveXArray",
            value: function(t604) {
                for(var e456 = this.w, i340 = 0, a279 = t604.map(function(t605, e457) {
                    return t605.length > 0 ? e457 : -1;
                }), s216 = 0; s216 < a279.length; s216++)if (-1 !== a279[s216] && -1 === e456.globals.collapsedSeriesIndices.indexOf(s216) && -1 === e456.globals.ancillaryCollapsedSeriesIndices.indexOf(s216)) {
                    i340 = a279[s216];
                    break;
                }
                return i340;
            }
        },
        {
            key: "closestInArray",
            value: function(t606, e458) {
                for(var i341 = e458[0], a280 = null, s217 = Math.abs(t606 - i341), r188 = 0; r188 < e458.length; r188++){
                    var o165 = Math.abs(t606 - e458[r188]);
                    o165 < s217 && (s217 = o165, a280 = r188);
                }
                return {
                    index: a280
                };
            }
        },
        {
            key: "isXoverlap",
            value: function(t607) {
                var e459 = [], i342 = this.w.globals.seriesX.filter(function(t608) {
                    return void 0 !== t608[0];
                });
                if (i342.length > 0) for(var a281 = 0; a281 < i342.length - 1; a281++)void 0 !== i342[a281][t607] && void 0 !== i342[a281 + 1][t607] && i342[a281][t607] !== i342[a281 + 1][t607] && e459.push("unEqual");
                return 0 === e459.length;
            }
        },
        {
            key: "isInitialSeriesSameLen",
            value: function() {
                for(var t609 = !0, e460 = this.w.globals.initialSeries, i343 = 0; i343 < e460.length - 1; i343++)if (e460[i343].data.length !== e460[i343 + 1].data.length) {
                    t609 = !1;
                    break;
                }
                return t609;
            }
        },
        {
            key: "getBarsHeight",
            value: function(t610) {
                return u(t610).reduce(function(t611, e461) {
                    return t611 + e461.getBBox().height;
                }, 0);
            }
        },
        {
            key: "getElMarkers",
            value: function() {
                return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers");
            }
        },
        {
            key: "getAllMarkers",
            value: function() {
                var t612 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
                (t612 = u(t612)).sort(function(t613, e463) {
                    return Number(e463.getAttribute("data:realIndex")) < Number(t613.getAttribute("data:realIndex")) ? 0 : -1;
                });
                var e462 = [];
                return t612.forEach(function(t614) {
                    e462.push(t614.querySelector(".apexcharts-marker"));
                }), e462;
            }
        },
        {
            key: "hasMarkers",
            value: function() {
                return this.getElMarkers().length > 0;
            }
        },
        {
            key: "getElBars",
            value: function() {
                return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
            }
        },
        {
            key: "hasBars",
            value: function() {
                return this.getElBars().length > 0;
            }
        },
        {
            key: "getHoverMarkerSize",
            value: function(t) {
                var e464 = this.w, i344 = e464.config.markers.hover.size;
                return void 0 === i344 && (i344 = e464.globals.markers.size[t] + e464.config.markers.hover.sizeOffset), i344;
            }
        },
        {
            key: "toggleAllTooltipSeriesGroups",
            value: function(t615) {
                var e465 = this.w, i345 = this.ttCtx;
                0 === i345.allTooltipSeriesGroups.length && (i345.allTooltipSeriesGroups = e465.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
                for(var a282 = i345.allTooltipSeriesGroups, s218 = 0; s218 < a282.length; s218++)"enable" === t615 ? (a282[s218].classList.add("apexcharts-active"), a282[s218].style.display = e465.config.tooltip.items.display) : (a282[s218].classList.remove("apexcharts-active"), a282[s218].style.display = "none");
            }
        }
    ]), t594;
}(), ft = function() {
    function t616(e466) {
        a(this, t616), this.w = e466.w, this.ctx = e466.ctx, this.ttCtx = e466, this.tooltipUtil = new ut(e466);
    }
    return r(t616, [
        {
            key: "drawSeriesTexts",
            value: function(t617) {
                var e467 = t617.shared, i346 = void 0 === e467 || e467, a283 = t617.ttItems, s219 = t617.i, r189 = void 0 === s219 ? 0 : s219, o166 = t617.j, n143 = void 0 === o166 ? null : o166, l115 = t617.y1, h97 = t617.y2, c83 = t617.e, d72 = this.w;
                void 0 !== d72.config.tooltip.custom ? this.handleCustomTooltip({
                    i: r189,
                    j: n143,
                    y1: l115,
                    y2: h97,
                    w: d72
                }) : this.toggleActiveInactiveSeries(i346);
                var g61 = this.getValuesToPrint({
                    i: r189,
                    j: n143
                });
                this.printLabels({
                    i: r189,
                    j: n143,
                    values: g61,
                    ttItems: a283,
                    shared: i346,
                    e: c83
                });
                var u49 = this.ttCtx.getElTooltip();
                this.ttCtx.tooltipRect.ttWidth = u49.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = u49.getBoundingClientRect().height;
            }
        },
        {
            key: "printLabels",
            value: function(t618) {
                var i347, a284 = this, s220 = t618.i, r190 = t618.j, o167 = t618.values, n144 = t618.ttItems, l116 = t618.shared, h98 = t618.e, c84 = this.w, d73 = [], g62 = function(t) {
                    return c84.globals.seriesGoals[t] && c84.globals.seriesGoals[t][r190] && Array.isArray(c84.globals.seriesGoals[t][r190]);
                }, u50 = o167.xVal, f43 = o167.zVal, p38 = o167.xAxisTTVal, x26 = "", b32 = c84.globals.colors[s220];
                null !== r190 && c84.config.plotOptions.bar.distributed && (b32 = c84.globals.colors[r190]);
                for(var v21 = function(t619, o168) {
                    var v22 = a284.getFormatters(s220);
                    x26 = a284.getSeriesName({
                        fn: v22.yLbTitleFormatter,
                        index: s220,
                        seriesIndex: s220,
                        j: r190
                    }), "treemap" === c84.config.chart.type && (x26 = v22.yLbTitleFormatter(String(c84.config.series[s220].data[r190].x), {
                        series: c84.globals.series,
                        seriesIndex: s220,
                        dataPointIndex: r190,
                        w: c84
                    }));
                    var m10 = c84.config.tooltip.inverseOrder ? o168 : t619;
                    if (c84.globals.axisCharts) {
                        var y24 = function(t620) {
                            return v22.yLbFormatter(c84.globals.series[t620][r190], {
                                series: c84.globals.series,
                                seriesIndex: t620,
                                dataPointIndex: r190,
                                w: c84
                            });
                        };
                        if (l116) v22 = a284.getFormatters(m10), x26 = a284.getSeriesName({
                            fn: v22.yLbTitleFormatter,
                            index: m10,
                            seriesIndex: s220,
                            j: r190
                        }), b32 = c84.globals.colors[m10], i347 = y24(m10), g62(m10) && (d73 = c84.globals.seriesGoals[m10][r190].map(function(t621) {
                            return {
                                attrs: t621,
                                val: v22.yLbFormatter(t621.value, {
                                    seriesIndex: m10,
                                    dataPointIndex: r190,
                                    w: c84
                                })
                            };
                        }));
                        else {
                            var w18, k14 = null == h98 || null === (w18 = h98.target) || void 0 === w18 ? void 0 : w18.getAttribute("fill");
                            k14 && (b32 = -1 !== k14.indexOf("url") ? document.querySelector(k14.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : k14), i347 = y24(s220), g62(s220) && Array.isArray(c84.globals.seriesGoals[s220][r190]) && (d73 = c84.globals.seriesGoals[s220][r190].map(function(t622) {
                                return {
                                    attrs: t622,
                                    val: v22.yLbFormatter(t622.value, {
                                        seriesIndex: s220,
                                        dataPointIndex: r190,
                                        w: c84
                                    })
                                };
                            }));
                        }
                    }
                    null === r190 && (i347 = v22.yLbFormatter(c84.globals.series[s220], e(e({
                    }, c84), {
                    }, {
                        seriesIndex: s220,
                        dataPointIndex: s220
                    }))), a284.DOMHandling({
                        i: s220,
                        t: m10,
                        j: r190,
                        ttItems: n144,
                        values: {
                            val: i347,
                            goalVals: d73,
                            xVal: u50,
                            xAxisTTVal: p38,
                            zVal: f43
                        },
                        seriesName: x26,
                        shared: l116,
                        pColor: b32
                    });
                }, m9 = 0, y23 = c84.globals.series.length - 1; m9 < c84.globals.series.length; m9++, y23--)v21(m9, y23);
            }
        },
        {
            key: "getFormatters",
            value: function(t623) {
                var e468, i348 = this.w, a285 = i348.globals.yLabelFormatters[t623];
                return void 0 !== i348.globals.ttVal ? Array.isArray(i348.globals.ttVal) ? (a285 = i348.globals.ttVal[t623] && i348.globals.ttVal[t623].formatter, e468 = i348.globals.ttVal[t623] && i348.globals.ttVal[t623].title && i348.globals.ttVal[t623].title.formatter) : (a285 = i348.globals.ttVal.formatter, "function" == typeof i348.globals.ttVal.title.formatter && (e468 = i348.globals.ttVal.title.formatter)) : e468 = i348.config.tooltip.y.title.formatter, "function" != typeof a285 && (a285 = i348.globals.yLabelFormatters[0] ? i348.globals.yLabelFormatters[0] : function(t624) {
                    return t624;
                }), "function" != typeof e468 && (e468 = function(t625) {
                    return t625;
                }), {
                    yLbFormatter: a285,
                    yLbTitleFormatter: e468
                };
            }
        },
        {
            key: "getSeriesName",
            value: function(t626) {
                var e469 = t626.fn, i = t626.index, a286 = t626.seriesIndex, s221 = t626.j, r191 = this.w;
                return e469(String(r191.globals.seriesNames[i]), {
                    series: r191.globals.series,
                    seriesIndex: a286,
                    dataPointIndex: s221,
                    w: r191
                });
            }
        },
        {
            key: "DOMHandling",
            value: function(t627) {
                t627.i;
                var e470 = t627.t, i349 = t627.j, a287 = t627.ttItems, s222 = t627.values, r192 = t627.seriesName, o169 = t627.shared, n145 = t627.pColor, l117 = this.w, h99 = this.ttCtx, c85 = s222.val, d74 = s222.goalVals, g63 = s222.xVal, u51 = s222.xAxisTTVal, f44 = s222.zVal, p39 = null;
                p39 = a287[e470].children, l117.config.tooltip.fillSeriesColor && (a287[e470].style.backgroundColor = n145, p39[0].style.display = "none"), h99.showTooltipTitle && (null === h99.tooltipTitle && (h99.tooltipTitle = l117.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h99.tooltipTitle.innerHTML = g63), h99.isXAxisTooltipEnabled && (h99.xaxisTooltipText.innerHTML = "" !== u51 ? u51 : g63);
                var x27 = a287[e470].querySelector(".apexcharts-tooltip-text-y-label");
                x27 && (x27.innerHTML = r192 || "");
                var b33 = a287[e470].querySelector(".apexcharts-tooltip-text-y-value");
                b33 && (b33.innerHTML = void 0 !== c85 ? c85 : ""), p39[0] && p39[0].classList.contains("apexcharts-tooltip-marker") && (l117.config.tooltip.marker.fillColors && Array.isArray(l117.config.tooltip.marker.fillColors) && (n145 = l117.config.tooltip.marker.fillColors[e470]), p39[0].style.backgroundColor = n145), l117.config.tooltip.marker.show || (p39[0].style.display = "none");
                var v23 = a287[e470].querySelector(".apexcharts-tooltip-text-goals-label"), m11 = a287[e470].querySelector(".apexcharts-tooltip-text-goals-value");
                if (d74.length && l117.globals.seriesGoals[e470]) {
                    var y25 = function() {
                        var t628 = "<div >", e471 = "<div>";
                        d74.forEach(function(i350, a) {
                            t628 += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i350.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i350.attrs.name, "</div>"), e471 += "<div>".concat(i350.val, "</div>");
                        }), v23.innerHTML = t628 + "</div>", m11.innerHTML = e471 + "</div>";
                    };
                    o169 ? l117.globals.seriesGoals[e470][i349] && Array.isArray(l117.globals.seriesGoals[e470][i349]) ? y25() : (v23.innerHTML = "", m11.innerHTML = "") : y25();
                } else v23.innerHTML = "", m11.innerHTML = "";
                null !== f44 && (a287[e470].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l117.config.tooltip.z.title, a287[e470].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== f44 ? f44 : "");
                o169 && p39[0] && (null == c85 || l117.globals.ancillaryCollapsedSeriesIndices.indexOf(e470) > -1 || l117.globals.collapsedSeriesIndices.indexOf(e470) > -1 ? p39[0].parentNode.style.display = "none" : p39[0].parentNode.style.display = l117.config.tooltip.items.display);
            }
        },
        {
            key: "toggleActiveInactiveSeries",
            value: function(t629) {
                var e472 = this.w;
                if (t629) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
                else {
                    this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                    var i351 = e472.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                    i351 && (i351.classList.add("apexcharts-active"), i351.style.display = e472.config.tooltip.items.display);
                }
            }
        },
        {
            key: "getValuesToPrint",
            value: function(t630) {
                var e473 = t630.i, i352 = t630.j, a288 = this.w, s223 = this.ctx.series.filteredSeriesX(), r193 = "", o170 = "", n146 = null, l118 = null, h100 = {
                    series: a288.globals.series,
                    seriesIndex: e473,
                    dataPointIndex: i352,
                    w: a288
                }, c86 = a288.globals.ttZFormatter;
                null === i352 ? l118 = a288.globals.series[e473] : a288.globals.isXNumeric && "treemap" !== a288.config.chart.type ? (r193 = s223[e473][i352], 0 === s223[e473].length && (r193 = s223[this.tooltipUtil.getFirstActiveXArray(s223)][i352])) : r193 = void 0 !== a288.globals.labels[i352] ? a288.globals.labels[i352] : "";
                var d75 = r193;
                a288.globals.isXNumeric && "datetime" === a288.config.xaxis.type ? r193 = new V(this.ctx).xLabelFormat(a288.globals.ttKeyFormatter, d75, d75, {
                    i: void 0,
                    dateFormatter: new R(this.ctx).formatDate,
                    w: this.w
                }) : r193 = a288.globals.isBarHorizontal ? a288.globals.yLabelFormatters[0](d75, h100) : a288.globals.xLabelFormatter(d75, h100);
                return void 0 !== a288.config.tooltip.x.formatter && (r193 = a288.globals.ttKeyFormatter(d75, h100)), a288.globals.seriesZ.length > 0 && a288.globals.seriesZ[e473].length > 0 && (n146 = c86(a288.globals.seriesZ[e473][i352], a288)), o170 = "function" == typeof a288.config.xaxis.tooltip.formatter ? a288.globals.xaxisTooltipFormatter(d75, h100) : r193, {
                    val: Array.isArray(l118) ? l118.join(" ") : l118,
                    xVal: Array.isArray(r193) ? r193.join(" ") : r193,
                    xAxisTTVal: Array.isArray(o170) ? o170.join(" ") : o170,
                    zVal: n146
                };
            }
        },
        {
            key: "handleCustomTooltip",
            value: function(t631) {
                var e474 = t631.i, i353 = t631.j, a289 = t631.y1, s224 = t631.y2, r194 = t631.w, o171 = this.ttCtx.getElTooltip(), n147 = r194.config.tooltip.custom;
                Array.isArray(n147) && n147[e474] && (n147 = n147[e474]), o171.innerHTML = n147({
                    ctx: this.ctx,
                    series: r194.globals.series,
                    seriesIndex: e474,
                    dataPointIndex: i353,
                    y1: a289,
                    y2: s224,
                    w: r194
                });
            }
        }
    ]), t616;
}(), pt = function() {
    function t632(e475) {
        a(this, t632), this.ttCtx = e475, this.ctx = e475.ctx, this.w = e475.w;
    }
    return r(t632, [
        {
            key: "moveXCrosshairs",
            value: function(t633) {
                var e476 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i354 = this.ttCtx, a290 = this.w, s225 = i354.getElXCrosshairs(), r195 = t633 - i354.xcrosshairsWidth / 2, o172 = a290.globals.labels.slice().length;
                if (null !== e476 && (r195 = a290.globals.gridWidth / o172 * e476), null === s225 || a290.globals.isBarHorizontal || (s225.setAttribute("x", r195), s225.setAttribute("x1", r195), s225.setAttribute("x2", r195), s225.setAttribute("y2", a290.globals.gridHeight), s225.classList.add("apexcharts-active")), r195 < 0 && (r195 = 0), r195 > a290.globals.gridWidth && (r195 = a290.globals.gridWidth), i354.isXAxisTooltipEnabled) {
                    var n148 = r195;
                    "tickWidth" !== a290.config.xaxis.crosshairs.width && "barWidth" !== a290.config.xaxis.crosshairs.width || (n148 = r195 + i354.xcrosshairsWidth / 2), this.moveXAxisTooltip(n148);
                }
            }
        },
        {
            key: "moveYCrosshairs",
            value: function(t634) {
                var e477 = this.ttCtx;
                null !== e477.ycrosshairs && m.setAttrs(e477.ycrosshairs, {
                    y1: t634,
                    y2: t634
                }), null !== e477.ycrosshairsHidden && m.setAttrs(e477.ycrosshairsHidden, {
                    y1: t634,
                    y2: t634
                });
            }
        },
        {
            key: "moveXAxisTooltip",
            value: function(t635) {
                var e478 = this.w, i355 = this.ttCtx;
                if (null !== i355.xaxisTooltip && 0 !== i355.xcrosshairsWidth) {
                    i355.xaxisTooltip.classList.add("apexcharts-active");
                    var a291 = i355.xaxisOffY + e478.config.xaxis.tooltip.offsetY + e478.globals.translateY + 1 + e478.config.xaxis.offsetY;
                    if (t635 -= i355.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t635)) {
                        t635 += e478.globals.translateX;
                        var s226;
                        s226 = new m(this.ctx).getTextRects(i355.xaxisTooltipText.innerHTML), i355.xaxisTooltipText.style.minWidth = s226.width + "px", i355.xaxisTooltip.style.left = t635 + "px", i355.xaxisTooltip.style.top = a291 + "px";
                    }
                }
            }
        },
        {
            key: "moveYAxisTooltip",
            value: function(t636) {
                var e479 = this.w, i356 = this.ttCtx;
                null === i356.yaxisTTEls && (i356.yaxisTTEls = e479.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                var a292 = parseInt(i356.ycrosshairsHidden.getAttribute("y1"), 10), s227 = e479.globals.translateY + a292, r196 = i356.yaxisTTEls[t636].getBoundingClientRect().height, o173 = e479.globals.translateYAxisX[t636] - 2;
                e479.config.yaxis[t636].opposite && (o173 -= 26), s227 -= r196 / 2, -1 === e479.globals.ignoreYAxisIndexes.indexOf(t636) ? (i356.yaxisTTEls[t636].classList.add("apexcharts-active"), i356.yaxisTTEls[t636].style.top = s227 + "px", i356.yaxisTTEls[t636].style.left = o173 + e479.config.yaxis[t636].tooltip.offsetX + "px") : i356.yaxisTTEls[t636].classList.remove("apexcharts-active");
            }
        },
        {
            key: "moveTooltip",
            value: function(t637, e480) {
                var i357 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a293 = this.w, s228 = this.ttCtx, r197 = s228.getElTooltip(), o174 = s228.tooltipRect, n149 = null !== i357 ? parseFloat(i357) : 1, l119 = parseFloat(t637) + n149 + 5, h101 = parseFloat(e480) + n149 / 2;
                if (l119 > a293.globals.gridWidth / 2 && (l119 = l119 - o174.ttWidth - n149 - 15), l119 > a293.globals.gridWidth - o174.ttWidth - 10 && (l119 = a293.globals.gridWidth - o174.ttWidth), l119 < -20 && (l119 = -20), a293.config.tooltip.followCursor) {
                    var c87 = s228.getElGrid(), d76 = c87.getBoundingClientRect();
                    h101 = s228.e.clientY + a293.globals.translateY - d76.top - o174.ttHeight / 2;
                } else a293.globals.isBarHorizontal || (o174.ttHeight / 2 + h101 > a293.globals.gridHeight && (h101 = a293.globals.gridHeight - o174.ttHeight + a293.globals.translateY), h101 < 0 && (h101 = 0));
                isNaN(l119) || (l119 += a293.globals.translateX, r197.style.left = l119 + "px", r197.style.top = h101 + "px");
            }
        },
        {
            key: "moveMarkers",
            value: function(t638, e481) {
                var i358 = this.w, a294 = this.ttCtx;
                if (i358.globals.markers.size[t638] > 0) for(var s229 = i358.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t638, "'] .apexcharts-marker")), r198 = 0; r198 < s229.length; r198++)parseInt(s229[r198].getAttribute("rel"), 10) === e481 && (a294.marker.resetPointsSize(), a294.marker.enlargeCurrentPoint(e481, s229[r198]));
                else a294.marker.resetPointsSize(), this.moveDynamicPointOnHover(e481, t638);
            }
        },
        {
            key: "moveDynamicPointOnHover",
            value: function(t, e482) {
                var i359, a295, s230 = this.w, r199 = this.ttCtx, o175 = s230.globals.pointsArray, n150 = r199.tooltipUtil.getHoverMarkerSize(e482), l120 = s230.config.series[e482].type;
                if (!l120 || "column" !== l120 && "candlestick" !== l120 && "boxPlot" !== l120) {
                    i359 = o175[e482][t][0], a295 = o175[e482][t][1] ? o175[e482][t][1] : 0;
                    var h102 = s230.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e482, "'] .apexcharts-series-markers circle"));
                    h102 && a295 < s230.globals.gridHeight && a295 > 0 && (h102.setAttribute("r", n150), h102.setAttribute("cx", i359), h102.setAttribute("cy", a295)), this.moveXCrosshairs(i359), r199.fixedTooltip || this.moveTooltip(i359, a295, n150);
                }
            }
        },
        {
            key: "moveDynamicPointsOnHover",
            value: function(t) {
                var e483, i360 = this.ttCtx, a296 = i360.w, s231 = 0, r200 = 0, o176 = a296.globals.pointsArray;
                e483 = new X(this.ctx).getActiveConfigSeriesIndex(!0);
                var n151 = i360.tooltipUtil.getHoverMarkerSize(e483);
                o176[e483] && (s231 = o176[e483][t][0], r200 = o176[e483][t][1]);
                var l121 = i360.tooltipUtil.getAllMarkers();
                if (null !== l121) for(var h103 = 0; h103 < a296.globals.series.length; h103++){
                    var c88 = o176[h103];
                    if (a296.globals.comboCharts && void 0 === c88 && l121.splice(h103, 0, null), c88 && c88.length) {
                        var d77 = o176[h103][t][1];
                        l121[h103].setAttribute("cx", s231), null !== d77 && !isNaN(d77) && d77 < a296.globals.gridHeight + n151 && d77 + n151 > 0 ? (l121[h103] && l121[h103].setAttribute("r", n151), l121[h103] && l121[h103].setAttribute("cy", d77)) : l121[h103] && l121[h103].setAttribute("r", 0);
                    }
                }
                if (this.moveXCrosshairs(s231), !i360.fixedTooltip) {
                    var g64 = r200 || a296.globals.gridHeight;
                    this.moveTooltip(s231, g64, n151);
                }
            }
        },
        {
            key: "moveStickyTooltipOverBars",
            value: function(t639) {
                var e484 = this.w, i361 = this.ttCtx, a297 = e484.globals.columnSeries ? e484.globals.columnSeries.length : e484.globals.series.length, s232 = a297 >= 2 && a297 % 2 == 0 ? Math.floor(a297 / 2) : Math.floor(a297 / 2) + 1;
                e484.globals.isBarHorizontal && (s232 = new X(this.ctx).getActiveConfigSeriesIndex(!1, "desc") + 1);
                var r201 = e484.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s232, "'] path[j='").concat(t639, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s232, "'] path[j='").concat(t639, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s232, "'] path[j='").concat(t639, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s232, "'] path[j='").concat(t639, "']")), o177 = r201 ? parseFloat(r201.getAttribute("cx")) : 0, n152 = r201 ? parseFloat(r201.getAttribute("cy")) : 0, l122 = r201 ? parseFloat(r201.getAttribute("barWidth")) : 0, h104 = r201 ? parseFloat(r201.getAttribute("barHeight")) : 0, c89 = i361.getElGrid().getBoundingClientRect(), d78 = r201.classList.contains("apexcharts-candlestick-area") || r201.classList.contains("apexcharts-boxPlot-area");
                if (e484.globals.isXNumeric ? (r201 && !d78 && (o177 -= a297 % 2 != 0 ? l122 / 2 : 0), r201 && d78 && e484.globals.comboCharts && (o177 -= l122 / 2)) : e484.globals.isBarHorizontal || (o177 = i361.xAxisTicksPositions[t639 - 1] + i361.dataPointsDividedWidth / 2, isNaN(o177) && (o177 = i361.xAxisTicksPositions[t639] - i361.dataPointsDividedWidth / 2)), e484.globals.isBarHorizontal ? (n152 = n152 + e484.config.grid.padding.top + h104 / 3) + h104 > e484.globals.gridHeight && (n152 = e484.globals.gridHeight - h104) : e484.config.tooltip.followCursor && (n152 = i361.e.clientY - c89.top - i361.tooltipRect.ttHeight / 2), e484.globals.isBarHorizontal || this.moveXCrosshairs(o177), !i361.fixedTooltip) {
                    var g65 = n152 || e484.globals.gridHeight;
                    this.moveTooltip(o177, g65);
                }
            }
        }
    ]), t632;
}(), xt = function() {
    function t640(e485) {
        a(this, t640), this.w = e485.w, this.ttCtx = e485, this.ctx = e485.ctx, this.tooltipPosition = new pt(e485);
    }
    return r(t640, [
        {
            key: "drawDynamicPoints",
            value: function() {
                var t641 = this.w, e486 = new m(this.ctx), i362 = new M(this.ctx), a298 = t641.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                a298 = u(a298), t641.config.chart.stacked && a298.sort(function(t642, e487) {
                    return parseFloat(t642.getAttribute("data:realIndex")) - parseFloat(e487.getAttribute("data:realIndex"));
                });
                for(var s233 = 0; s233 < a298.length; s233++){
                    var r202 = a298[s233].querySelector(".apexcharts-series-markers-wrap");
                    if (null !== r202) {
                        var o178 = void 0, n153 = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
                        "line" !== t641.config.chart.type && "area" !== t641.config.chart.type || t641.globals.comboCharts || t641.config.tooltip.intersect || (n153 += " no-pointer-events");
                        var l123 = i362.getMarkerConfig({
                            cssClass: n153,
                            seriesIndex: Number(r202.getAttribute("data:realIndex"))
                        });
                        (o178 = e486.drawMarker(0, 0, l123)).node.setAttribute("default-marker-size", 0);
                        var h105 = document.createElementNS(t641.globals.SVGNS, "g");
                        h105.classList.add("apexcharts-series-markers"), h105.appendChild(o178.node), r202.appendChild(h105);
                    }
                }
            }
        },
        {
            key: "enlargeCurrentPoint",
            value: function(t643, e488) {
                var i363 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a299 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s234 = this.w;
                "bubble" !== s234.config.chart.type && this.newPointSize(t643, e488);
                var r203 = e488.getAttribute("cx"), o179 = e488.getAttribute("cy");
                if (null !== i363 && null !== a299 && (r203 = i363, o179 = a299), this.tooltipPosition.moveXCrosshairs(r203), !this.fixedTooltip) {
                    if ("radar" === s234.config.chart.type) {
                        var n154 = this.ttCtx.getElGrid(), l124 = n154.getBoundingClientRect();
                        r203 = this.ttCtx.e.clientX - l124.left;
                    }
                    this.tooltipPosition.moveTooltip(r203, o179, s234.config.markers.hover.size);
                }
            }
        },
        {
            key: "enlargePoints",
            value: function(t644) {
                for(var e489 = this.w, i364 = this, a300 = this.ttCtx, s235 = t644, r204 = e489.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o180 = e489.config.markers.hover.size, n155 = 0; n155 < r204.length; n155++){
                    var l125 = r204[n155].getAttribute("rel"), h = r204[n155].getAttribute("index");
                    if (void 0 === o180 && (o180 = e489.globals.markers.size[h] + e489.config.markers.hover.sizeOffset), s235 === parseInt(l125, 10)) {
                        i364.newPointSize(s235, r204[n155]);
                        var c90 = r204[n155].getAttribute("cx"), d79 = r204[n155].getAttribute("cy");
                        i364.tooltipPosition.moveXCrosshairs(c90), a300.fixedTooltip || i364.tooltipPosition.moveTooltip(c90, d79, o180);
                    } else i364.oldPointSize(r204[n155]);
                }
            }
        },
        {
            key: "newPointSize",
            value: function(t645, e490) {
                var i365 = this.w, a301 = i365.config.markers.hover.size, s236 = 0 === t645 ? e490.parentNode.firstChild : e490.parentNode.lastChild;
                if ("0" !== s236.getAttribute("default-marker-size")) {
                    var r = parseInt(s236.getAttribute("index"), 10);
                    void 0 === a301 && (a301 = i365.globals.markers.size[r] + i365.config.markers.hover.sizeOffset), a301 < 0 && (a301 = 0), s236.setAttribute("r", a301);
                }
            }
        },
        {
            key: "oldPointSize",
            value: function(t646) {
                var e491 = parseFloat(t646.getAttribute("default-marker-size"));
                t646.setAttribute("r", e491);
            }
        },
        {
            key: "resetPointsSize",
            value: function() {
                for(var t647 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e492 = 0; e492 < t647.length; e492++){
                    var i366 = parseFloat(t647[e492].getAttribute("default-marker-size"));
                    x.isNumber(i366) && i366 >= 0 ? t647[e492].setAttribute("r", i366) : t647[e492].setAttribute("r", 0);
                }
            }
        }
    ]), t640;
}(), bt = function() {
    function t648(e493) {
        a(this, t648), this.w = e493.w, this.ttCtx = e493;
    }
    return r(t648, [
        {
            key: "getAttr",
            value: function(t649, e494) {
                return parseFloat(t649.target.getAttribute(e494));
            }
        },
        {
            key: "handleHeatTreeTooltip",
            value: function(t650) {
                var e495 = t650.e, i367 = t650.opt, a302 = t650.x, s237 = t650.y, r205 = t650.type, o181 = this.ttCtx, n156 = this.w;
                if (e495.target.classList.contains("apexcharts-".concat(r205, "-rect"))) {
                    var l126 = this.getAttr(e495, "i"), h106 = this.getAttr(e495, "j"), c91 = this.getAttr(e495, "cx"), d80 = this.getAttr(e495, "cy"), g66 = this.getAttr(e495, "width"), u52 = this.getAttr(e495, "height");
                    if (o181.tooltipLabels.drawSeriesTexts({
                        ttItems: i367.ttItems,
                        i: l126,
                        j: h106,
                        shared: !1,
                        e: e495
                    }), n156.globals.capturedSeriesIndex = l126, n156.globals.capturedDataPointIndex = h106, a302 = c91 + o181.tooltipRect.ttWidth / 2 + g66, s237 = d80 + o181.tooltipRect.ttHeight / 2 - u52 / 2, o181.tooltipPosition.moveXCrosshairs(c91 + g66 / 2), a302 > n156.globals.gridWidth / 2 && (a302 = c91 - o181.tooltipRect.ttWidth / 2 + g66), o181.w.config.tooltip.followCursor) {
                        var f45 = n156.globals.dom.elWrap.getBoundingClientRect();
                        a302 = n156.globals.clientX - f45.left - (a302 > n156.globals.gridWidth / 2 ? o181.tooltipRect.ttWidth : 0), s237 = n156.globals.clientY - f45.top;
                    }
                }
                return {
                    x: a302,
                    y: s237
                };
            }
        },
        {
            key: "handleMarkerTooltip",
            value: function(t651) {
                var e496, i368, a303 = t651.e, s238 = t651.opt, r206 = t651.x, o182 = t651.y, n157 = this.w, l127 = this.ttCtx;
                if (a303.target.classList.contains("apexcharts-marker")) {
                    var h107 = parseInt(s238.paths.getAttribute("cx"), 10), c92 = parseInt(s238.paths.getAttribute("cy"), 10), d81 = parseFloat(s238.paths.getAttribute("val"));
                    if (i368 = parseInt(s238.paths.getAttribute("rel"), 10), e496 = parseInt(s238.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l127.intersect) {
                        var g67 = x.findAncestor(s238.paths, "apexcharts-series");
                        g67 && (e496 = parseInt(g67.getAttribute("data:realIndex"), 10));
                    }
                    if (l127.tooltipLabels.drawSeriesTexts({
                        ttItems: s238.ttItems,
                        i: e496,
                        j: i368,
                        shared: !l127.showOnIntersect && n157.config.tooltip.shared,
                        e: a303
                    }), "mouseup" === a303.type && l127.markerClick(a303, e496, i368), n157.globals.capturedSeriesIndex = e496, n157.globals.capturedDataPointIndex = i368, r206 = h107, o182 = c92 + n157.globals.translateY - 1.4 * l127.tooltipRect.ttHeight, l127.w.config.tooltip.followCursor) {
                        var u53 = l127.getElGrid().getBoundingClientRect();
                        o182 = l127.e.clientY + n157.globals.translateY - u53.top;
                    }
                    d81 < 0 && (o182 = c92), l127.marker.enlargeCurrentPoint(i368, s238.paths, r206, o182);
                }
                return {
                    x: r206,
                    y: o182
                };
            }
        },
        {
            key: "handleBarTooltip",
            value: function(t652) {
                var e497, i369, a304 = t652.e, s239 = t652.opt, r207 = this.w, o183 = this.ttCtx, n158 = o183.getElTooltip(), l128 = 0, h108 = 0, c93 = 0, d82 = this.getBarTooltipXY({
                    e: a304,
                    opt: s239
                });
                e497 = d82.i;
                var g68 = d82.barHeight, u54 = d82.j;
                r207.globals.capturedSeriesIndex = e497, r207.globals.capturedDataPointIndex = u54, r207.globals.isBarHorizontal && o183.tooltipUtil.hasBars() || !r207.config.tooltip.shared ? (h108 = d82.x, c93 = d82.y, i369 = Array.isArray(r207.config.stroke.width) ? r207.config.stroke.width[e497] : r207.config.stroke.width, l128 = h108) : r207.globals.comboCharts || r207.config.tooltip.shared || (l128 /= 2), isNaN(c93) ? c93 = r207.globals.svgHeight - o183.tooltipRect.ttHeight : c93 < 0 && (c93 = 0);
                var f = parseInt(s239.paths.parentNode.getAttribute("data:realIndex"), 10), p40 = r207.globals.isMultipleYAxis ? r207.config.yaxis[f] && r207.config.yaxis[f].reversed : r207.config.yaxis[0].reversed;
                if (h108 + o183.tooltipRect.ttWidth > r207.globals.gridWidth && !p40 ? h108 -= o183.tooltipRect.ttWidth : h108 < 0 && (h108 = 0), o183.w.config.tooltip.followCursor) {
                    var x28 = o183.getElGrid().getBoundingClientRect();
                    c93 = o183.e.clientY - x28.top;
                }
                null === o183.tooltip && (o183.tooltip = r207.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r207.config.tooltip.shared || (r207.globals.comboBarCount > 0 ? o183.tooltipPosition.moveXCrosshairs(l128 + i369 / 2) : o183.tooltipPosition.moveXCrosshairs(l128)), !o183.fixedTooltip && (!r207.config.tooltip.shared || r207.globals.isBarHorizontal && o183.tooltipUtil.hasBars()) && (p40 && (h108 -= o183.tooltipRect.ttWidth) < 0 && (h108 = 0), !p40 || r207.globals.isBarHorizontal && o183.tooltipUtil.hasBars() || (c93 = c93 + g68 - 2 * (r207.globals.series[e497][u54] < 0 ? g68 : 0)), o183.tooltipRect.ttHeight + c93 > r207.globals.gridHeight ? c93 = r207.globals.gridHeight - o183.tooltipRect.ttHeight + r207.globals.translateY : (c93 = c93 + r207.globals.translateY - o183.tooltipRect.ttHeight / 2) < 0 && (c93 = 0), n158.style.left = h108 + r207.globals.translateX + "px", n158.style.top = c93 + "px");
            }
        },
        {
            key: "getBarTooltipXY",
            value: function(t653) {
                var e498 = t653.e, i370 = t653.opt, a305 = this.w, s240 = null, r208 = this.ttCtx, o184 = 0, n159 = 0, l129 = 0, h109 = 0, c94 = 0, d83 = e498.target.classList;
                if (d83.contains("apexcharts-bar-area") || d83.contains("apexcharts-candlestick-area") || d83.contains("apexcharts-boxPlot-area") || d83.contains("apexcharts-rangebar-area")) {
                    var g69 = e498.target, u55 = g69.getBoundingClientRect(), f46 = i370.elGrid.getBoundingClientRect(), p41 = u55.height;
                    c94 = u55.height;
                    var x29 = u55.width, b34 = parseInt(g69.getAttribute("cx"), 10), v24 = parseInt(g69.getAttribute("cy"), 10);
                    h109 = parseFloat(g69.getAttribute("barWidth"));
                    var m12 = "touchmove" === e498.type ? e498.touches[0].clientX : e498.clientX;
                    s240 = parseInt(g69.getAttribute("j"), 10), o184 = parseInt(g69.parentNode.getAttribute("rel"), 10) - 1;
                    var y26 = g69.getAttribute("data-range-y1"), w19 = g69.getAttribute("data-range-y2");
                    a305.globals.comboCharts && (o184 = parseInt(g69.parentNode.getAttribute("data:realIndex"), 10)), r208.tooltipLabels.drawSeriesTexts({
                        ttItems: i370.ttItems,
                        i: o184,
                        j: s240,
                        y1: y26 ? parseInt(y26, 10) : null,
                        y2: w19 ? parseInt(w19, 10) : null,
                        shared: !r208.showOnIntersect && a305.config.tooltip.shared,
                        e: e498
                    }), a305.config.tooltip.followCursor ? a305.globals.isBarHorizontal ? (n159 = m12 - f46.left + 15, l129 = v24 - r208.dataPointsDividedHeight + p41 / 2 - r208.tooltipRect.ttHeight / 2) : (n159 = a305.globals.isXNumeric ? b34 - x29 / 2 : b34 - r208.dataPointsDividedWidth + x29 / 2, l129 = e498.clientY - f46.top - r208.tooltipRect.ttHeight / 2 - 15) : a305.globals.isBarHorizontal ? ((n159 = b34) < r208.xyRatios.baseLineInvertedY && (n159 = b34 - r208.tooltipRect.ttWidth), l129 = v24 - r208.dataPointsDividedHeight + p41 / 2 - r208.tooltipRect.ttHeight / 2) : (n159 = a305.globals.isXNumeric ? b34 - x29 / 2 : b34 - r208.dataPointsDividedWidth + x29 / 2, l129 = v24);
                }
                return {
                    x: n159,
                    y: l129,
                    barHeight: c94,
                    barWidth: h109,
                    i: o184,
                    j: s240
                };
            }
        }
    ]), t648;
}(), vt = function() {
    function t654(e499) {
        a(this, t654), this.w = e499.w, this.ttCtx = e499;
    }
    return r(t654, [
        {
            key: "drawXaxisTooltip",
            value: function() {
                var t655 = this.w, e500 = this.ttCtx, i371 = "bottom" === t655.config.xaxis.position;
                e500.xaxisOffY = i371 ? t655.globals.gridHeight + 1 : -t655.globals.xAxisHeight - t655.config.xaxis.axisTicks.height + 3;
                var a306 = i371 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s241 = t655.globals.dom.elWrap;
                e500.isXAxisTooltipEnabled && null === t655.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e500.xaxisTooltip = document.createElement("div"), e500.xaxisTooltip.setAttribute("class", a306 + " apexcharts-theme-" + t655.config.tooltip.theme), s241.appendChild(e500.xaxisTooltip), e500.xaxisTooltipText = document.createElement("div"), e500.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e500.xaxisTooltipText.style.fontFamily = t655.config.xaxis.tooltip.style.fontFamily || t655.config.chart.fontFamily, e500.xaxisTooltipText.style.fontSize = t655.config.xaxis.tooltip.style.fontSize, e500.xaxisTooltip.appendChild(e500.xaxisTooltipText));
            }
        },
        {
            key: "drawYaxisTooltip",
            value: function() {
                for(var t656 = this.w, e501 = this.ttCtx, i372 = function(i373) {
                    var a308 = t656.config.yaxis[i373].opposite || t656.config.yaxis[i373].crosshairs.opposite;
                    e501.yaxisOffX = a308 ? t656.globals.gridWidth + 1 : 1;
                    var s242 = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i373, a308 ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
                    t656.globals.yAxisSameScaleIndices.map(function(e502, a309) {
                        e502.map(function(e, a310) {
                            a310 === i373 && (s242 += t656.config.yaxis[a310].show ? " " : " apexcharts-yaxistooltip-hidden");
                        });
                    });
                    var r209 = t656.globals.dom.elWrap;
                    null === t656.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i373)) && (e501.yaxisTooltip = document.createElement("div"), e501.yaxisTooltip.setAttribute("class", s242 + " apexcharts-theme-" + t656.config.tooltip.theme), r209.appendChild(e501.yaxisTooltip), 0 === i373 && (e501.yaxisTooltipText = []), e501.yaxisTooltipText[i373] = document.createElement("div"), e501.yaxisTooltipText[i373].classList.add("apexcharts-yaxistooltip-text"), e501.yaxisTooltip.appendChild(e501.yaxisTooltipText[i373]));
                }, a307 = 0; a307 < t656.config.yaxis.length; a307++)i372(a307);
            }
        },
        {
            key: "setXCrosshairWidth",
            value: function() {
                var t657 = this.w, e503 = this.ttCtx, i374 = e503.getElXCrosshairs();
                if (e503.xcrosshairsWidth = parseInt(t657.config.xaxis.crosshairs.width, 10), t657.globals.comboCharts) {
                    var a311 = t657.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                    if (null !== a311 && "barWidth" === t657.config.xaxis.crosshairs.width) {
                        var s243 = parseFloat(a311.getAttribute("barWidth"));
                        e503.xcrosshairsWidth = s243;
                    } else if ("tickWidth" === t657.config.xaxis.crosshairs.width) {
                        var r210 = t657.globals.labels.length;
                        e503.xcrosshairsWidth = t657.globals.gridWidth / r210;
                    }
                } else if ("tickWidth" === t657.config.xaxis.crosshairs.width) {
                    var o185 = t657.globals.labels.length;
                    e503.xcrosshairsWidth = t657.globals.gridWidth / o185;
                } else if ("barWidth" === t657.config.xaxis.crosshairs.width) {
                    var n160 = t657.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                    if (null !== n160) {
                        var l130 = parseFloat(n160.getAttribute("barWidth"));
                        e503.xcrosshairsWidth = l130;
                    } else e503.xcrosshairsWidth = 1;
                }
                t657.globals.isBarHorizontal && (e503.xcrosshairsWidth = 0), null !== i374 && e503.xcrosshairsWidth > 0 && i374.setAttribute("width", e503.xcrosshairsWidth);
            }
        },
        {
            key: "handleYCrosshair",
            value: function() {
                var t658 = this.w, e504 = this.ttCtx;
                e504.ycrosshairs = t658.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e504.ycrosshairsHidden = t658.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
            }
        },
        {
            key: "drawYaxisTooltipText",
            value: function(t659, e505, i375) {
                var a312 = this.ttCtx, s244 = this.w, r211 = s244.globals.yLabelFormatters[t659];
                if (a312.yaxisTooltips[t659]) {
                    var o186 = a312.getElGrid().getBoundingClientRect(), n161 = (e505 - o186.top) * i375.yRatio[t659], l131 = s244.globals.maxYArr[t659] - s244.globals.minYArr[t659], h110 = s244.globals.minYArr[t659] + (l131 - n161);
                    a312.tooltipPosition.moveYCrosshairs(e505 - o186.top), a312.yaxisTooltipText[t659].innerHTML = r211(h110), a312.tooltipPosition.moveYAxisTooltip(t659);
                }
            }
        }
    ]), t654;
}(), mt = function() {
    function t660(e506) {
        a(this, t660), this.ctx = e506, this.w = e506.w;
        var i376 = this.w;
        this.tConfig = i376.config.tooltip, this.tooltipUtil = new ut(this), this.tooltipLabels = new ft(this), this.tooltipPosition = new pt(this), this.marker = new xt(this), this.intersect = new bt(this), this.axesTooltip = new vt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !i376.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
    }
    return r(t660, [
        {
            key: "getElTooltip",
            value: function(t661) {
                return t661 || (t661 = this), t661.w.globals.dom.baseEl ? t661.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
            }
        },
        {
            key: "getElXCrosshairs",
            value: function() {
                return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
            }
        },
        {
            key: "getElGrid",
            value: function() {
                return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
            }
        },
        {
            key: "drawTooltip",
            value: function(t662) {
                var e507 = this.w;
                this.xyRatios = t662, this.isXAxisTooltipEnabled = e507.config.xaxis.tooltip.enabled && e507.globals.axisCharts, this.yaxisTooltips = e507.config.yaxis.map(function(t663, i) {
                    return !!(t663.show && t663.tooltip.enabled && e507.globals.axisCharts);
                }), this.allTooltipSeriesGroups = [], e507.globals.axisCharts || (this.showTooltipTitle = !1);
                var i377 = document.createElement("div");
                if (i377.classList.add("apexcharts-tooltip"), i377.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e507.globals.dom.elWrap.appendChild(i377), e507.globals.axisCharts) {
                    this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                    var a313 = new _(this.ctx);
                    this.xAxisTicksPositions = a313.getXAxisTicksPositions();
                }
                if (!e507.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e507.config.chart.type || this.tConfig.shared || (this.showOnIntersect = !0), 0 !== e507.config.markers.size && 0 !== e507.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e507.globals.collapsedSeries.length !== e507.globals.series.length) {
                    this.dataPointsDividedHeight = e507.globals.gridHeight / e507.globals.dataPoints, this.dataPointsDividedWidth = e507.globals.gridWidth / e507.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e507.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i377.appendChild(this.tooltipTitle));
                    var s245 = e507.globals.series.length;
                    (e507.globals.xyCharts || e507.globals.comboCharts) && this.tConfig.shared && (s245 = this.showOnIntersect ? 1 : e507.globals.series.length), this.legendLabels = e507.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s245), this.addSVGEvents();
                }
            }
        },
        {
            key: "createTTElements",
            value: function(t664) {
                for(var e508 = this, i378 = this.w, a314 = [], s246 = this.getElTooltip(), r212 = function(r213) {
                    var o188 = document.createElement("div");
                    o188.classList.add("apexcharts-tooltip-series-group"), o188.style.order = i378.config.tooltip.inverseOrder ? t664 - r213 : r213 + 1, e508.tConfig.shared && e508.tConfig.enabledOnSeries && Array.isArray(e508.tConfig.enabledOnSeries) && e508.tConfig.enabledOnSeries.indexOf(r213) < 0 && o188.classList.add("apexcharts-tooltip-series-group-hidden");
                    var n162 = document.createElement("span");
                    n162.classList.add("apexcharts-tooltip-marker"), n162.style.backgroundColor = i378.globals.colors[r213], o188.appendChild(n162);
                    var l132 = document.createElement("div");
                    l132.classList.add("apexcharts-tooltip-text"), l132.style.fontFamily = e508.tConfig.style.fontFamily || i378.config.chart.fontFamily, l132.style.fontSize = e508.tConfig.style.fontSize, [
                        "y",
                        "goals",
                        "z"
                    ].forEach(function(t665) {
                        var e509 = document.createElement("div");
                        e509.classList.add("apexcharts-tooltip-".concat(t665, "-group"));
                        var i379 = document.createElement("span");
                        i379.classList.add("apexcharts-tooltip-text-".concat(t665, "-label")), e509.appendChild(i379);
                        var a315 = document.createElement("span");
                        a315.classList.add("apexcharts-tooltip-text-".concat(t665, "-value")), e509.appendChild(a315), l132.appendChild(e509);
                    }), o188.appendChild(l132), s246.appendChild(o188), a314.push(o188);
                }, o187 = 0; o187 < t664; o187++)r212(o187);
                return a314;
            }
        },
        {
            key: "addSVGEvents",
            value: function() {
                var t666 = this.w, e510 = t666.config.chart.type, i380 = this.getElTooltip(), a316 = !("bar" !== e510 && "candlestick" !== e510 && "boxPlot" !== e510 && "rangeBar" !== e510), s247 = "area" === e510 || "line" === e510 || "scatter" === e510 || "bubble" === e510 || "radar" === e510, r214 = t666.globals.dom.Paper.node, o189 = this.getElGrid();
                o189 && (this.seriesBound = o189.getBoundingClientRect());
                var n163, l133 = [], h111 = [], c95 = {
                    hoverArea: r214,
                    elGrid: o189,
                    tooltipEl: i380,
                    tooltipY: l133,
                    tooltipX: h111,
                    ttItems: this.ttItems
                };
                if (t666.globals.axisCharts && (s247 ? n163 = t666.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a316 ? n163 = t666.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e510 && "treemap" !== e510 || (n163 = t666.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n163 && n163.length)) for(var d84 = 0; d84 < n163.length; d84++)l133.push(n163[d84].getAttribute("cy")), h111.push(n163[d84].getAttribute("cx"));
                if (t666.globals.xyCharts && !this.showOnIntersect || t666.globals.comboCharts && !this.showOnIntersect || a316 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([
                    r214
                ], c95);
                else if (a316 && !t666.globals.comboCharts || s247 && this.showOnIntersect) this.addDatapointEventsListeners(c95);
                else if (!t666.globals.axisCharts || "heatmap" === e510 || "treemap" === e510) {
                    var g70 = t666.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                    this.addPathsEventListeners(g70, c95);
                }
                if (this.showOnIntersect) {
                    var u56 = t666.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
                    u56.length > 0 && this.addPathsEventListeners(u56, c95), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c95);
                }
            }
        },
        {
            key: "drawFixedTooltipRect",
            value: function() {
                var t667 = this.w, e511 = this.getElTooltip(), i381 = e511.getBoundingClientRect(), a317 = i381.width + 10, s248 = i381.height + 10, r215 = this.tConfig.fixed.offsetX, o190 = this.tConfig.fixed.offsetY, n164 = this.tConfig.fixed.position.toLowerCase();
                return n164.indexOf("right") > -1 && (r215 = r215 + t667.globals.svgWidth - a317 + 10), n164.indexOf("bottom") > -1 && (o190 = o190 + t667.globals.svgHeight - s248 - 10), e511.style.left = r215 + "px", e511.style.top = o190 + "px", {
                    x: r215,
                    y: o190,
                    ttWidth: a317,
                    ttHeight: s248
                };
            }
        },
        {
            key: "addDatapointEventsListeners",
            value: function(t668) {
                var e512 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
                this.addPathsEventListeners(e512, t668);
            }
        },
        {
            key: "addPathsEventListeners",
            value: function(t669, e513) {
                for(var i382 = this, a318 = function(a) {
                    var s250 = {
                        paths: t669[a],
                        tooltipEl: e513.tooltipEl,
                        tooltipY: e513.tooltipY,
                        tooltipX: e513.tooltipX,
                        elGrid: e513.elGrid,
                        hoverArea: e513.hoverArea,
                        ttItems: e513.ttItems
                    };
                    [
                        "mousemove",
                        "mouseup",
                        "touchmove",
                        "mouseout",
                        "touchend"
                    ].map(function(e514) {
                        return t669[a].addEventListener(e514, i382.onSeriesHover.bind(i382, s250), {
                            capture: !1,
                            passive: !0
                        });
                    });
                }, s249 = 0; s249 < t669.length; s249++)a318(s249);
            }
        },
        {
            key: "onSeriesHover",
            value: function(t670, e515) {
                var i383 = this, a319 = Date.now() - this.lastHoverTime;
                a319 >= 100 ? this.seriesHover(t670, e515) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
                    i383.seriesHover(t670, e515);
                }, 100 - a319));
            }
        },
        {
            key: "seriesHover",
            value: function(t671, e516) {
                var i384 = this;
                this.lastHoverTime = Date.now();
                var a320 = [], s251 = this.w;
                s251.config.chart.group && (a320 = this.ctx.getGroupedCharts()), s251.globals.axisCharts && (s251.globals.minX === -1 / 0 && s251.globals.maxX === 1 / 0 || 0 === s251.globals.dataPoints) || (a320.length ? a320.forEach(function(a321) {
                    var s252 = i384.getElTooltip(a321), r216 = {
                        paths: t671.paths,
                        tooltipEl: s252,
                        tooltipY: t671.tooltipY,
                        tooltipX: t671.tooltipX,
                        elGrid: t671.elGrid,
                        hoverArea: t671.hoverArea,
                        ttItems: a321.w.globals.tooltip.ttItems
                    };
                    a321.w.globals.minX === i384.w.globals.minX && a321.w.globals.maxX === i384.w.globals.maxX && a321.w.globals.tooltip.seriesHoverByContext({
                        chartCtx: a321,
                        ttCtx: a321.w.globals.tooltip,
                        opt: r216,
                        e: e516
                    });
                }) : this.seriesHoverByContext({
                    chartCtx: this.ctx,
                    ttCtx: this.w.globals.tooltip,
                    opt: t671,
                    e: e516
                }));
            }
        },
        {
            key: "seriesHoverByContext",
            value: function(t672) {
                var e517 = t672.chartCtx, i385 = t672.ttCtx, a322 = t672.opt, s253 = t672.e, r217 = e517.w, o191 = this.getElTooltip();
                if (o191) {
                    if (i385.tooltipRect = {
                        x: 0,
                        y: 0,
                        ttWidth: o191.getBoundingClientRect().width,
                        ttHeight: o191.getBoundingClientRect().height
                    }, i385.e = s253, i385.tooltipUtil.hasBars() && !r217.globals.comboCharts && !i385.isBarShared) {
                        if (this.tConfig.onDatasetHover.highlightDataSeries) new X(e517).toggleSeriesOnHover(s253, s253.target.parentNode);
                    }
                    i385.fixedTooltip && i385.drawFixedTooltipRect(), r217.globals.axisCharts ? i385.axisChartsTooltips({
                        e: s253,
                        opt: a322,
                        tooltipRect: i385.tooltipRect
                    }) : i385.nonAxisChartsTooltips({
                        e: s253,
                        opt: a322,
                        tooltipRect: i385.tooltipRect
                    });
                }
            }
        },
        {
            key: "axisChartsTooltips",
            value: function(t673) {
                var e518, i386, a323 = t673.e, s254 = t673.opt, r218 = this.w, o192 = s254.elGrid.getBoundingClientRect(), n165 = "touchmove" === a323.type ? a323.touches[0].clientX : a323.clientX, l134 = "touchmove" === a323.type ? a323.touches[0].clientY : a323.clientY;
                if (this.clientY = l134, this.clientX = n165, r218.globals.capturedSeriesIndex = -1, r218.globals.capturedDataPointIndex = -1, l134 < o192.top || l134 > o192.top + o192.height) this.handleMouseOut(s254);
                else {
                    if (Array.isArray(this.tConfig.enabledOnSeries) && !r218.config.tooltip.shared) {
                        var h112 = parseInt(s254.paths.getAttribute("index"), 10);
                        if (this.tConfig.enabledOnSeries.indexOf(h112) < 0) return void this.handleMouseOut(s254);
                    }
                    var c96 = this.getElTooltip(), d85 = this.getElXCrosshairs(), g71 = r218.globals.xyCharts || "bar" === r218.config.chart.type && !r218.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r218.globals.comboCharts && this.tooltipUtil.hasBars();
                    if ("mousemove" === a323.type || "touchmove" === a323.type || "mouseup" === a323.type) {
                        if (r218.globals.collapsedSeries.length + r218.globals.ancillaryCollapsedSeries.length === r218.globals.series.length) return;
                        null !== d85 && d85.classList.add("apexcharts-active");
                        var u57 = this.yaxisTooltips.filter(function(t674) {
                            return !0 === t674;
                        });
                        if (null !== this.ycrosshairs && u57.length && this.ycrosshairs.classList.add("apexcharts-active"), g71 && !this.showOnIntersect) this.handleStickyTooltip(a323, n165, l134, s254);
                        else if ("heatmap" === r218.config.chart.type || "treemap" === r218.config.chart.type) {
                            var f47 = this.intersect.handleHeatTreeTooltip({
                                e: a323,
                                opt: s254,
                                x: e518,
                                y: i386,
                                type: r218.config.chart.type
                            });
                            e518 = f47.x, i386 = f47.y, c96.style.left = e518 + "px", c96.style.top = i386 + "px";
                        } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({
                            e: a323,
                            opt: s254
                        }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({
                            e: a323,
                            opt: s254,
                            x: e518,
                            y: i386
                        });
                        if (this.yaxisTooltips.length) for(var p42 = 0; p42 < r218.config.yaxis.length; p42++)this.axesTooltip.drawYaxisTooltipText(p42, l134, this.xyRatios);
                        s254.tooltipEl.classList.add("apexcharts-active");
                    } else "mouseout" !== a323.type && "touchend" !== a323.type || this.handleMouseOut(s254);
                }
            }
        },
        {
            key: "nonAxisChartsTooltips",
            value: function(t675) {
                var e519 = t675.e, i387 = t675.opt, a324 = t675.tooltipRect, s255 = this.w, r219 = i387.paths.getAttribute("rel"), o193 = this.getElTooltip(), n166 = s255.globals.dom.elWrap.getBoundingClientRect();
                if ("mousemove" === e519.type || "touchmove" === e519.type) {
                    o193.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({
                        ttItems: i387.ttItems,
                        i: parseInt(r219, 10) - 1,
                        shared: !1
                    });
                    var l135 = s255.globals.clientX - n166.left - a324.ttWidth / 2, h113 = s255.globals.clientY - n166.top - a324.ttHeight - 10;
                    if (o193.style.left = l135 + "px", o193.style.top = h113 + "px", s255.config.legend.tooltipHoverFormatter) {
                        var c97 = r219 - 1, d86 = (0, s255.config.legend.tooltipHoverFormatter)(this.legendLabels[c97].getAttribute("data:default-text"), {
                            seriesIndex: c97,
                            dataPointIndex: c97,
                            w: s255
                        });
                        this.legendLabels[c97].innerHTML = d86;
                    }
                } else "mouseout" !== e519.type && "touchend" !== e519.type || (o193.classList.remove("apexcharts-active"), s255.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t676) {
                    var e520 = t676.getAttribute("data:default-text");
                    t676.innerHTML = decodeURIComponent(e520);
                }));
            }
        },
        {
            key: "handleStickyTooltip",
            value: function(t677, e521, i388, a325) {
                var s256 = this.w, r220 = this.tooltipUtil.getNearestValues({
                    context: this,
                    hoverArea: a325.hoverArea,
                    elGrid: a325.elGrid,
                    clientX: e521,
                    clientY: i388
                }), o194 = r220.j, n167 = r220.capturedSeries, l136 = a325.elGrid.getBoundingClientRect();
                r220.hoverX < 0 || r220.hoverX > l136.width ? this.handleMouseOut(a325) : null !== n167 ? this.handleStickyCapturedSeries(t677, n167, a325, o194) : (this.tooltipUtil.isXoverlap(o194) || s256.globals.isBarHorizontal) && this.create(t677, this, 0, o194, a325.ttItems);
            }
        },
        {
            key: "handleStickyCapturedSeries",
            value: function(t678, e522, i389, a326) {
                var s257 = this.w;
                if (!this.tConfig.shared && null === s257.globals.series[e522][a326]) return void this.handleMouseOut(i389);
                void 0 !== s257.globals.series[e522][a326] ? this.tConfig.shared && this.tooltipUtil.isXoverlap(a326) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t678, this, e522, a326, i389.ttItems) : this.create(t678, this, e522, a326, i389.ttItems, !1) : this.tooltipUtil.isXoverlap(a326) && this.create(t678, this, 0, a326, i389.ttItems);
            }
        },
        {
            key: "deactivateHoverFilter",
            value: function() {
                for(var t679 = this.w, e523 = new m(this.ctx), i390 = t679.globals.dom.Paper.select(".apexcharts-bar-area"), a327 = 0; a327 < i390.length; a327++)e523.pathMouseLeave(i390[a327]);
            }
        },
        {
            key: "handleMouseOut",
            value: function(t680) {
                var e524 = this.w, i391 = this.getElXCrosshairs();
                if (t680.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e524.config.chart.type && this.marker.resetPointsSize(), null !== i391 && i391.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
                    null === this.yaxisTTEls && (this.yaxisTTEls = e524.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                    for(var a328 = 0; a328 < this.yaxisTTEls.length; a328++)this.yaxisTTEls[a328].classList.remove("apexcharts-active");
                }
                e524.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t681) {
                    var e525 = t681.getAttribute("data:default-text");
                    t681.innerHTML = decodeURIComponent(e525);
                });
            }
        },
        {
            key: "markerClick",
            value: function(t682, e526, i392) {
                var a329 = this.w;
                "function" == typeof a329.config.chart.events.markerClick && a329.config.chart.events.markerClick(t682, this.ctx, {
                    seriesIndex: e526,
                    dataPointIndex: i392,
                    w: a329
                }), this.ctx.events.fireEvent("markerClick", [
                    t682,
                    this.ctx,
                    {
                        seriesIndex: e526,
                        dataPointIndex: i392,
                        w: a329
                    }
                ]);
            }
        },
        {
            key: "create",
            value: function(t683, e527, i393, a330, s258) {
                var r221 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, o195 = this.w, n168 = e527;
                "mouseup" === t683.type && this.markerClick(t683, i393, a330), null === r221 && (r221 = this.tConfig.shared);
                var l137 = this.tooltipUtil.hasMarkers(), h114 = this.tooltipUtil.getElBars();
                if (o195.config.legend.tooltipHoverFormatter) {
                    var c98 = o195.config.legend.tooltipHoverFormatter, d87 = Array.from(this.legendLabels);
                    d87.forEach(function(t684) {
                        var e528 = t684.getAttribute("data:default-text");
                        t684.innerHTML = decodeURIComponent(e528);
                    });
                    for(var g72 = 0; g72 < d87.length; g72++){
                        var u58 = d87[g72], f48 = parseInt(u58.getAttribute("i"), 10), p43 = decodeURIComponent(u58.getAttribute("data:default-text")), x30 = c98(p43, {
                            seriesIndex: r221 ? f48 : i393,
                            dataPointIndex: a330,
                            w: o195
                        });
                        if (r221) u58.innerHTML = o195.globals.collapsedSeriesIndices.indexOf(f48) < 0 ? x30 : p43;
                        else if (u58.innerHTML = f48 === i393 ? x30 : p43, i393 === f48) break;
                    }
                }
                if (r221) {
                    if (n168.tooltipLabels.drawSeriesTexts({
                        ttItems: s258,
                        i: i393,
                        j: a330,
                        shared: !this.showOnIntersect && this.tConfig.shared
                    }), l137 && (o195.globals.markers.largestSize > 0 ? n168.marker.enlargePoints(a330) : n168.tooltipPosition.moveDynamicPointsOnHover(a330)), this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(h114), this.barSeriesHeight > 0)) {
                        var b35 = new m(this.ctx), v25 = o195.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a330, "']"));
                        this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a330);
                        for(var y27 = 0; y27 < v25.length; y27++)b35.pathMouseEnter(v25[y27]);
                    }
                } else n168.tooltipLabels.drawSeriesTexts({
                    shared: !1,
                    ttItems: s258,
                    i: i393,
                    j: a330
                }), this.tooltipUtil.hasBars() && n168.tooltipPosition.moveStickyTooltipOverBars(a330), l137 && n168.tooltipPosition.moveMarkers(i393, a330);
            }
        }
    ]), t660;
}(), yt = function(t685) {
    n(s259, F);
    var i394 = d(s259);
    function s259() {
        return a(this, s259), i394.apply(this, arguments);
    }
    return r(s259, [
        {
            key: "draw",
            value: function(t686, i395) {
                var a331 = this, s260 = this.w;
                this.graphics = new m(this.ctx), this.bar = new F(this.ctx, this.xyRatios);
                var r222 = new k(this.ctx, s260);
                t686 = r222.getLogSeries(t686), this.yRatio = r222.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t686), "100%" === s260.config.chart.stackType && (t686 = s260.globals.seriesPercent.slice()), this.series = t686, this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
                for(var o196 = 0; o196 < t686.length; o196++)t686[o196].length > 0 && (this.totalItems += t686[o196].length);
                for(var n169 = this.graphics.group({
                    class: "apexcharts-bar-series apexcharts-plot-series"
                }), l138 = 0, h115 = 0, c99 = function(r223, o197) {
                    var c100 = void 0, d89 = void 0, g74 = void 0, u59 = void 0, f49 = [], p44 = [], b36 = s260.globals.comboCharts ? i395[r223] : r223;
                    a331.yRatio.length > 1 && (a331.yaxisIndex = b36), a331.isReversed = s260.config.yaxis[a331.yaxisIndex] && s260.config.yaxis[a331.yaxisIndex].reversed;
                    var v26 = a331.graphics.group({
                        class: "apexcharts-series",
                        seriesName: x.escapeString(s260.globals.seriesNames[b36]),
                        rel: r223 + 1,
                        "data:realIndex": b36
                    });
                    a331.ctx.series.addCollapsedClassToSeries(v26, b36);
                    var m13 = a331.graphics.group({
                        class: "apexcharts-datalabels",
                        "data:realIndex": b36
                    }), y28 = 0, w20 = 0, k15 = a331.initialPositions(l138, h115, c100, d89, g74, u59);
                    h115 = k15.y, y28 = k15.barHeight, d89 = k15.yDivision, u59 = k15.zeroW, l138 = k15.x, w20 = k15.barWidth, c100 = k15.xDivision, g74 = k15.zeroH, a331.yArrj = [], a331.yArrjF = [], a331.yArrjVal = [], a331.xArrj = [], a331.xArrjF = [], a331.xArrjVal = [], 1 === a331.prevY.length && a331.prevY[0].every(function(t687) {
                        return isNaN(t687);
                    }) && (a331.prevY[0] = a331.prevY[0].map(function(t) {
                        return g74;
                    }), a331.prevYF[0] = a331.prevYF[0].map(function(t) {
                        return 0;
                    }));
                    for(var A13 = 0; A13 < s260.globals.dataPoints; A13++){
                        var S11 = a331.barHelpers.getStrokeWidth(r223, A13, b36), C9 = {
                            indexes: {
                                i: r223,
                                j: A13,
                                realIndex: b36,
                                bc: o197
                            },
                            strokeWidth: S11,
                            x: l138,
                            y: h115,
                            elSeries: v26
                        }, L9 = null;
                        a331.isHorizontal ? (L9 = a331.drawStackedBarPaths(e(e({
                        }, C9), {
                        }, {
                            zeroW: u59,
                            barHeight: y28,
                            yDivision: d89
                        })), w20 = a331.series[r223][A13] / a331.invertedYRatio) : (L9 = a331.drawStackedColumnPaths(e(e({
                        }, C9), {
                        }, {
                            xDivision: c100,
                            barWidth: w20,
                            zeroH: g74
                        })), y28 = a331.series[r223][A13] / a331.yRatio[a331.yaxisIndex]), h115 = L9.y, l138 = L9.x, f49.push(l138), p44.push(h115);
                        var P9 = a331.barHelpers.getPathFillColor(t686, r223, A13, b36);
                        v26 = a331.renderSeries({
                            realIndex: b36,
                            pathFill: P9,
                            j: A13,
                            i: r223,
                            pathFrom: L9.pathFrom,
                            pathTo: L9.pathTo,
                            strokeWidth: S11,
                            elSeries: v26,
                            x: l138,
                            y: h115,
                            series: t686,
                            barHeight: y28,
                            barWidth: w20,
                            elDataLabelsWrap: m13,
                            type: "bar",
                            visibleSeries: 0
                        });
                    }
                    s260.globals.seriesXvalues[b36] = f49, s260.globals.seriesYvalues[b36] = p44, a331.prevY.push(a331.yArrj), a331.prevYF.push(a331.yArrjF), a331.prevYVal.push(a331.yArrjVal), a331.prevX.push(a331.xArrj), a331.prevXF.push(a331.xArrjF), a331.prevXVal.push(a331.xArrjVal), n169.add(v26);
                }, d88 = 0, g73 = 0; d88 < t686.length; d88++, g73++)c99(d88, g73);
                return n169;
            }
        },
        {
            key: "initialPositions",
            value: function(t688, e529, i396, a332, s261, r224) {
                var o198, n170, l139 = this.w;
                return this.isHorizontal ? (o198 = (o198 = a332 = l139.globals.gridHeight / l139.globals.dataPoints) * parseInt(l139.config.plotOptions.bar.barHeight, 10) / 100, r224 = this.baseLineInvertedY + l139.globals.padHorizontal + (this.isReversed ? l139.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e529 = (a332 - o198) / 2) : (n170 = i396 = l139.globals.gridWidth / l139.globals.dataPoints, n170 = l139.globals.isXNumeric && l139.globals.dataPoints > 1 ? (i396 = l139.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : n170 * parseInt(l139.config.plotOptions.bar.columnWidth, 10) / 100, s261 = this.baseLineY[this.yaxisIndex] + (this.isReversed ? l139.globals.gridHeight : 0) - (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t688 = l139.globals.padHorizontal + (i396 - n170) / 2), {
                    x: t688,
                    y: e529,
                    yDivision: a332,
                    xDivision: i396,
                    barHeight: o198,
                    barWidth: n170,
                    zeroH: s261,
                    zeroW: r224
                };
            }
        },
        {
            key: "drawStackedBarPaths",
            value: function(t689) {
                for(var e530, i397 = t689.indexes, a333 = t689.barHeight, s262 = t689.strokeWidth, r225 = t689.zeroW, o199 = t689.x, n171 = t689.y, l140 = t689.yDivision, h116 = t689.elSeries, c101 = this.w, d90 = n171, g75 = i397.i, u60 = i397.j, f50 = 0, p45 = 0; p45 < this.prevXF.length; p45++)f50 += this.prevXF[p45][u60];
                if (g75 > 0) {
                    var x31 = r225;
                    this.prevXVal[g75 - 1][u60] < 0 ? x31 = this.series[g75][u60] >= 0 ? this.prevX[g75 - 1][u60] + f50 - 2 * (this.isReversed ? f50 : 0) : this.prevX[g75 - 1][u60] : this.prevXVal[g75 - 1][u60] >= 0 && (x31 = this.series[g75][u60] >= 0 ? this.prevX[g75 - 1][u60] : this.prevX[g75 - 1][u60] - f50 + 2 * (this.isReversed ? f50 : 0)), e530 = x31;
                } else e530 = r225;
                o199 = null === this.series[g75][u60] ? e530 : e530 + this.series[g75][u60] / this.invertedYRatio - 2 * (this.isReversed ? this.series[g75][u60] / this.invertedYRatio : 0);
                var b37 = this.barHelpers.getBarpaths({
                    barYPosition: d90,
                    barHeight: a333,
                    x1: e530,
                    x2: o199,
                    strokeWidth: s262,
                    series: this.series,
                    realIndex: i397.realIndex,
                    i: g75,
                    j: u60,
                    w: c101
                });
                return this.barHelpers.barBackground({
                    j: u60,
                    i: g75,
                    y1: d90,
                    y2: a333,
                    elSeries: h116
                }), n171 += l140, {
                    pathTo: b37.pathTo,
                    pathFrom: b37.pathFrom,
                    x: o199,
                    y: n171
                };
            }
        },
        {
            key: "drawStackedColumnPaths",
            value: function(t690) {
                var e531 = t690.indexes, i398 = t690.x, a334 = t690.y, s263 = t690.xDivision, r226 = t690.barWidth, o200 = t690.zeroH;
                t690.strokeWidth;
                var n172 = t690.elSeries, l141 = this.w, h117 = e531.i, c102 = e531.j, d91 = e531.bc;
                if (l141.globals.isXNumeric) {
                    var g76 = l141.globals.seriesX[h117][c102];
                    g76 || (g76 = 0), i398 = (g76 - l141.globals.minX) / this.xRatio - r226 / 2;
                }
                for(var u61, f51 = i398, p46 = 0, x32 = 0; x32 < this.prevYF.length; x32++)p46 += isNaN(this.prevYF[x32][c102]) ? 0 : this.prevYF[x32][c102];
                if (h117 > 0 && !l141.globals.isXNumeric || h117 > 0 && l141.globals.isXNumeric && l141.globals.seriesX[h117 - 1][c102] === l141.globals.seriesX[h117][c102]) {
                    var b38, v27, m14 = Math.min(this.yRatio.length + 1, h117 + 1);
                    if (void 0 !== this.prevY[h117 - 1]) {
                        for(var y29 = 1; y29 < m14; y29++)if (!isNaN(this.prevY[h117 - y29][c102])) {
                            v27 = this.prevY[h117 - y29][c102];
                            break;
                        }
                    }
                    for(var w21 = 1; w21 < m14; w21++){
                        if (this.prevYVal[h117 - w21][c102] < 0) {
                            b38 = this.series[h117][c102] >= 0 ? v27 - p46 + 2 * (this.isReversed ? p46 : 0) : v27;
                            break;
                        }
                        if (this.prevYVal[h117 - w21][c102] >= 0) {
                            b38 = this.series[h117][c102] >= 0 ? v27 : v27 + p46 - 2 * (this.isReversed ? p46 : 0);
                            break;
                        }
                    }
                    void 0 === b38 && (b38 = l141.globals.gridHeight), u61 = this.prevYF[0].every(function(t691) {
                        return 0 === t691;
                    }) && this.prevYF.slice(1, h117).every(function(t692) {
                        return t692.every(function(t693) {
                            return isNaN(t693);
                        });
                    }) ? l141.globals.gridHeight - o200 : b38;
                } else u61 = l141.globals.gridHeight - o200;
                a334 = u61 - this.series[h117][c102] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[h117][c102] / this.yRatio[this.yaxisIndex] : 0);
                var k16 = this.barHelpers.getColumnPaths({
                    barXPosition: f51,
                    barWidth: r226,
                    y1: u61,
                    y2: a334,
                    yRatio: this.yRatio[this.yaxisIndex],
                    strokeWidth: this.strokeWidth,
                    series: this.series,
                    realIndex: e531.realIndex,
                    i: h117,
                    j: c102,
                    w: l141
                });
                return this.barHelpers.barBackground({
                    bc: d91,
                    j: c102,
                    i: h117,
                    x1: f51,
                    x2: r226,
                    elSeries: n172
                }), i398 += s263, {
                    pathTo: k16.pathTo,
                    pathFrom: k16.pathFrom,
                    x: l141.globals.isXNumeric ? i398 - s263 : i398,
                    y: a334
                };
            }
        }
    ]), s259;
}(), wt = function(t694) {
    n(s264, F);
    var i399 = d(s264);
    function s264() {
        return a(this, s264), i399.apply(this, arguments);
    }
    return r(s264, [
        {
            key: "draw",
            value: function(t695, i400) {
                var a335 = this, s265 = this.w, r227 = new m(this.ctx), o201 = new T(this.ctx);
                this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = s265.config.plotOptions.bar.horizontal;
                var n173 = new k(this.ctx, s265);
                t695 = n173.getLogSeries(t695), this.series = t695, this.yRatio = n173.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t695);
                for(var l142 = r227.group({
                    class: "apexcharts-".concat(s265.config.chart.type, "-series apexcharts-plot-series")
                }), h118 = function(n174) {
                    a335.isBoxPlot = "boxPlot" === s265.config.chart.type || "boxPlot" === s265.config.series[n174].type;
                    var h119, c104, d92, g77, u62 = void 0, f52 = void 0, p47 = [], b39 = [], v28 = s265.globals.comboCharts ? i400[n174] : n174, m15 = r227.group({
                        class: "apexcharts-series",
                        seriesName: x.escapeString(s265.globals.seriesNames[v28]),
                        rel: n174 + 1,
                        "data:realIndex": v28
                    });
                    a335.ctx.series.addCollapsedClassToSeries(m15, v28), t695[n174].length > 0 && (a335.visibleI = a335.visibleI + 1);
                    var y30, w22;
                    a335.yRatio.length > 1 && (a335.yaxisIndex = v28);
                    var k17 = a335.barHelpers.initialPositions();
                    f52 = k17.y, y30 = k17.barHeight, c104 = k17.yDivision, g77 = k17.zeroW, u62 = k17.x, w22 = k17.barWidth, h119 = k17.xDivision, d92 = k17.zeroH, b39.push(u62 + w22 / 2);
                    for(var A14 = r227.group({
                        class: "apexcharts-datalabels",
                        "data:realIndex": v28
                    }), S12 = function(i401) {
                        var r228 = a335.barHelpers.getStrokeWidth(n174, i401, v28), l143 = null, x33 = {
                            indexes: {
                                i: n174,
                                j: i401,
                                realIndex: v28
                            },
                            x: u62,
                            y: f52,
                            strokeWidth: r228,
                            elSeries: m15
                        };
                        l143 = a335.isHorizontal ? a335.drawHorizontalBoxPaths(e(e({
                        }, x33), {
                        }, {
                            yDivision: c104,
                            barHeight: y30,
                            zeroW: g77
                        })) : a335.drawVerticalBoxPaths(e(e({
                        }, x33), {
                        }, {
                            xDivision: h119,
                            barWidth: w22,
                            zeroH: d92
                        })), f52 = l143.y, u62 = l143.x, i401 > 0 && b39.push(u62 + w22 / 2), p47.push(f52), l143.pathTo.forEach(function(e532, h) {
                            var c105 = !a335.isBoxPlot && a335.candlestickOptions.wick.useFillColor ? l143.color[h] : s265.globals.stroke.colors[n174], d93 = o201.fillPath({
                                seriesNumber: v28,
                                dataPointIndex: i401,
                                color: l143.color[h],
                                value: t695[n174][i401]
                            });
                            a335.renderSeries({
                                realIndex: v28,
                                pathFill: d93,
                                lineFill: c105,
                                j: i401,
                                i: n174,
                                pathFrom: l143.pathFrom,
                                pathTo: e532,
                                strokeWidth: r228,
                                elSeries: m15,
                                x: u62,
                                y: f52,
                                series: t695,
                                barHeight: y30,
                                barWidth: w22,
                                elDataLabelsWrap: A14,
                                visibleSeries: a335.visibleI,
                                type: s265.config.chart.type
                            });
                        });
                    }, C10 = 0; C10 < s265.globals.dataPoints; C10++)S12(C10);
                    s265.globals.seriesXvalues[v28] = b39, s265.globals.seriesYvalues[v28] = p47, l142.add(m15);
                }, c103 = 0; c103 < t695.length; c103++)h118(c103);
                return l142;
            }
        },
        {
            key: "drawVerticalBoxPaths",
            value: function(t696) {
                var e533 = t696.indexes, i402 = t696.x;
                t696.y;
                var a336 = t696.xDivision, s266 = t696.barWidth, r229 = t696.zeroH, o202 = t696.strokeWidth, n175 = this.w, l144 = new m(this.ctx), h = e533.i, c106 = e533.j, d94 = !0, g78 = n175.config.plotOptions.candlestick.colors.upward, u63 = n175.config.plotOptions.candlestick.colors.downward, f53 = "";
                this.isBoxPlot && (f53 = [
                    this.boxOptions.colors.lower,
                    this.boxOptions.colors.upper
                ]);
                var p48 = this.yRatio[this.yaxisIndex], x34 = e533.realIndex, b40 = this.getOHLCValue(x34, c106), v29 = r229, y31 = r229;
                b40.o > b40.c && (d94 = !1);
                var w23 = Math.min(b40.o, b40.c), k18 = Math.max(b40.o, b40.c), A15 = b40.m;
                n175.globals.isXNumeric && (i402 = (n175.globals.seriesX[x34][c106] - n175.globals.minX) / this.xRatio - s266 / 2);
                var S13 = i402 + s266 * this.visibleI;
                void 0 === this.series[h][c106] || null === this.series[h][c106] ? (w23 = r229, k18 = r229) : (w23 = r229 - w23 / p48, k18 = r229 - k18 / p48, v29 = r229 - b40.h / p48, y31 = r229 - b40.l / p48, A15 = r229 - b40.m / p48);
                var C11 = l144.move(S13, r229), L10 = l144.move(S13 + s266 / 2, w23);
                return n175.globals.previousPaths.length > 0 && (L10 = this.getPreviousPath(x34, c106, !0)), C11 = this.isBoxPlot ? [
                    l144.move(S13, w23) + l144.line(S13 + s266 / 2, w23) + l144.line(S13 + s266 / 2, v29) + l144.line(S13 + s266 / 4, v29) + l144.line(S13 + s266 - s266 / 4, v29) + l144.line(S13 + s266 / 2, v29) + l144.line(S13 + s266 / 2, w23) + l144.line(S13 + s266, w23) + l144.line(S13 + s266, A15) + l144.line(S13, A15) + l144.line(S13, w23 + o202 / 2),
                    l144.move(S13, A15) + l144.line(S13 + s266, A15) + l144.line(S13 + s266, k18) + l144.line(S13 + s266 / 2, k18) + l144.line(S13 + s266 / 2, y31) + l144.line(S13 + s266 - s266 / 4, y31) + l144.line(S13 + s266 / 4, y31) + l144.line(S13 + s266 / 2, y31) + l144.line(S13 + s266 / 2, k18) + l144.line(S13, k18) + l144.line(S13, A15) + "z"
                ] : [
                    l144.move(S13, k18) + l144.line(S13 + s266 / 2, k18) + l144.line(S13 + s266 / 2, v29) + l144.line(S13 + s266 / 2, k18) + l144.line(S13 + s266, k18) + l144.line(S13 + s266, w23) + l144.line(S13 + s266 / 2, w23) + l144.line(S13 + s266 / 2, y31) + l144.line(S13 + s266 / 2, w23) + l144.line(S13, w23) + l144.line(S13, k18 - o202 / 2)
                ], L10 += l144.move(S13, w23), n175.globals.isXNumeric || (i402 += a336), {
                    pathTo: C11,
                    pathFrom: L10,
                    x: i402,
                    y: k18,
                    barXPosition: S13,
                    color: this.isBoxPlot ? f53 : d94 ? [
                        g78
                    ] : [
                        u63
                    ]
                };
            }
        },
        {
            key: "drawHorizontalBoxPaths",
            value: function(t697) {
                var e534 = t697.indexes;
                t697.x;
                var i403 = t697.y, a337 = t697.yDivision, s267 = t697.barHeight, r230 = t697.zeroW, o203 = t697.strokeWidth, n176 = this.w, l145 = new m(this.ctx), h = e534.i, c107 = e534.j, d95 = this.boxOptions.colors.lower;
                this.isBoxPlot && (d95 = [
                    this.boxOptions.colors.lower,
                    this.boxOptions.colors.upper
                ]);
                var g79 = this.invertedYRatio, u64 = e534.realIndex, f54 = this.getOHLCValue(u64, c107), p49 = r230, x35 = r230, b41 = Math.min(f54.o, f54.c), v30 = Math.max(f54.o, f54.c), y32 = f54.m;
                n176.globals.isXNumeric && (i403 = (n176.globals.seriesX[u64][c107] - n176.globals.minX) / this.invertedXRatio - s267 / 2);
                var w24 = i403 + s267 * this.visibleI;
                void 0 === this.series[h][c107] || null === this.series[h][c107] ? (b41 = r230, v30 = r230) : (b41 = r230 + b41 / g79, v30 = r230 + v30 / g79, p49 = r230 + f54.h / g79, x35 = r230 + f54.l / g79, y32 = r230 + f54.m / g79);
                var k19 = l145.move(r230, w24), A16 = l145.move(b41, w24 + s267 / 2);
                return n176.globals.previousPaths.length > 0 && (A16 = this.getPreviousPath(u64, c107, !0)), k19 = [
                    l145.move(b41, w24) + l145.line(b41, w24 + s267 / 2) + l145.line(p49, w24 + s267 / 2) + l145.line(p49, w24 + s267 / 2 - s267 / 4) + l145.line(p49, w24 + s267 / 2 + s267 / 4) + l145.line(p49, w24 + s267 / 2) + l145.line(b41, w24 + s267 / 2) + l145.line(b41, w24 + s267) + l145.line(y32, w24 + s267) + l145.line(y32, w24) + l145.line(b41 + o203 / 2, w24),
                    l145.move(y32, w24) + l145.line(y32, w24 + s267) + l145.line(v30, w24 + s267) + l145.line(v30, w24 + s267 / 2) + l145.line(x35, w24 + s267 / 2) + l145.line(x35, w24 + s267 - s267 / 4) + l145.line(x35, w24 + s267 / 4) + l145.line(x35, w24 + s267 / 2) + l145.line(v30, w24 + s267 / 2) + l145.line(v30, w24) + l145.line(y32, w24) + "z"
                ], A16 += l145.move(b41, w24), n176.globals.isXNumeric || (i403 += a337), {
                    pathTo: k19,
                    pathFrom: A16,
                    x: v30,
                    y: i403,
                    barYPosition: w24,
                    color: d95
                };
            }
        },
        {
            key: "getOHLCValue",
            value: function(t, e) {
                var i404 = this.w;
                return {
                    o: this.isBoxPlot ? i404.globals.seriesCandleH[t][e] : i404.globals.seriesCandleO[t][e],
                    h: this.isBoxPlot ? i404.globals.seriesCandleO[t][e] : i404.globals.seriesCandleH[t][e],
                    m: i404.globals.seriesCandleM[t][e],
                    l: this.isBoxPlot ? i404.globals.seriesCandleC[t][e] : i404.globals.seriesCandleL[t][e],
                    c: this.isBoxPlot ? i404.globals.seriesCandleL[t][e] : i404.globals.seriesCandleC[t][e]
                };
            }
        }
    ]), s264;
}(), kt = function() {
    function t698(e535) {
        a(this, t698), this.ctx = e535, this.w = e535.w;
    }
    return r(t698, [
        {
            key: "checkColorRange",
            value: function() {
                var t699 = this.w, e536 = !1, i405 = t699.config.plotOptions[t699.config.chart.type];
                return i405.colorScale.ranges.length > 0 && i405.colorScale.ranges.map(function(t700, i) {
                    t700.from <= 0 && (e536 = !0);
                }), e536;
            }
        },
        {
            key: "getShadeColor",
            value: function(t701, e537, i406, a338) {
                var s268 = this.w, r231 = 1, o204 = s268.config.plotOptions[t701].shadeIntensity, n177 = this.determineColor(t701, e537, i406);
                s268.globals.hasNegs || a338 ? r231 = s268.config.plotOptions[t701].reverseNegativeShade ? n177.percent < 0 ? n177.percent / 100 * (1.25 * o204) : (1 - n177.percent / 100) * (1.25 * o204) : n177.percent <= 0 ? 1 - (1 + n177.percent / 100) * o204 : (1 - n177.percent / 100) * o204 : (r231 = 1 - n177.percent / 100, "treemap" === t701 && (r231 = (1 - n177.percent / 100) * (1.25 * o204)));
                var l146 = n177.color, h120 = new x;
                return s268.config.plotOptions[t701].enableShades && (l146 = "dark" === this.w.config.theme.mode ? x.hexToRgba(h120.shadeColor(-1 * r231, n177.color), s268.config.fill.opacity) : x.hexToRgba(h120.shadeColor(r231, n177.color), s268.config.fill.opacity)), {
                    color: l146,
                    colorProps: n177
                };
            }
        },
        {
            key: "determineColor",
            value: function(t702, e538, i407) {
                var a339 = this.w, s269 = a339.globals.series[e538][i407], r232 = a339.config.plotOptions[t702], o205 = r232.colorScale.inverse ? i407 : e538;
                r232.distributed && "treemap" === a339.config.chart.type && (o205 = i407);
                var n178 = a339.globals.colors[o205], l147 = null, h121 = Math.min.apply(Math, u(a339.globals.series[e538])), c108 = Math.max.apply(Math, u(a339.globals.series[e538]));
                r232.distributed || "heatmap" !== t702 || (h121 = a339.globals.minY, c108 = a339.globals.maxY), void 0 !== r232.colorScale.min && (h121 = r232.colorScale.min < a339.globals.minY ? r232.colorScale.min : a339.globals.minY, c108 = r232.colorScale.max > a339.globals.maxY ? r232.colorScale.max : a339.globals.maxY);
                var d96 = Math.abs(c108) + Math.abs(h121), g80 = 100 * s269 / (0 === d96 ? d96 - 0.000001 : d96);
                r232.colorScale.ranges.length > 0 && r232.colorScale.ranges.map(function(t703, e) {
                    if (s269 >= t703.from && s269 <= t703.to) {
                        n178 = t703.color, l147 = t703.foreColor ? t703.foreColor : null, h121 = t703.from, c108 = t703.to;
                        var i408 = Math.abs(c108) + Math.abs(h121);
                        g80 = 100 * s269 / (0 === i408 ? i408 - 0.000001 : i408);
                    }
                });
                return {
                    color: n178,
                    foreColor: l147,
                    percent: g80
                };
            }
        },
        {
            key: "calculateDataLabels",
            value: function(t704) {
                var e539 = t704.text, i409 = t704.x, a340 = t704.y, s270 = t704.i, r233 = t704.j, o206 = t704.colorProps, n179 = t704.fontSize, l148 = this.w.config.dataLabels, h122 = new m(this.ctx), c109 = new z(this.ctx), d97 = null;
                if (l148.enabled) {
                    d97 = h122.group({
                        class: "apexcharts-data-labels"
                    });
                    var g81 = l148.offsetX, u65 = l148.offsetY, f55 = i409 + g81, p50 = a340 + parseFloat(l148.style.fontSize) / 3 + u65;
                    c109.plotDataLabelsText({
                        x: f55,
                        y: p50,
                        text: e539,
                        i: s270,
                        j: r233,
                        color: o206.foreColor,
                        parent: d97,
                        fontSize: n179,
                        dataLabelsConfig: l148
                    });
                }
                return d97;
            }
        },
        {
            key: "addListeners",
            value: function(t705) {
                var e540 = new m(this.ctx);
                t705.node.addEventListener("mouseenter", e540.pathMouseEnter.bind(this, t705)), t705.node.addEventListener("mouseleave", e540.pathMouseLeave.bind(this, t705)), t705.node.addEventListener("mousedown", e540.pathMouseDown.bind(this, t705));
            }
        }
    ]), t698;
}(), At = function() {
    function t706(e541, i410) {
        a(this, t706), this.ctx = e541, this.w = e541.w, this.xRatio = i410.xRatio, this.yRatio = i410.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new kt(e541), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    return r(t706, [
        {
            key: "draw",
            value: function(t707) {
                var e542 = this.w, i411 = new m(this.ctx), a341 = i411.group({
                    class: "apexcharts-heatmap"
                });
                a341.attr("clip-path", "url(#gridRectMask".concat(e542.globals.cuid, ")"));
                var s271 = e542.globals.gridWidth / e542.globals.dataPoints, r234 = e542.globals.gridHeight / e542.globals.series.length, o207 = 0, n180 = !1;
                this.negRange = this.helpers.checkColorRange();
                var l149 = t707.slice();
                e542.config.yaxis[0].reversed && (n180 = !0, l149.reverse());
                for(var h123 = n180 ? 0 : l149.length - 1; n180 ? h123 < l149.length : h123 >= 0; n180 ? h123++ : h123--){
                    var c110 = i411.group({
                        class: "apexcharts-series apexcharts-heatmap-series",
                        seriesName: x.escapeString(e542.globals.seriesNames[h123]),
                        rel: h123 + 1,
                        "data:realIndex": h123
                    });
                    if (this.ctx.series.addCollapsedClassToSeries(c110, h123), e542.config.chart.dropShadow.enabled) {
                        var d98 = e542.config.chart.dropShadow;
                        new v(this.ctx).dropShadow(c110, d98, h123);
                    }
                    for(var g82 = 0, u66 = e542.config.plotOptions.heatmap.shadeIntensity, f56 = 0; f56 < l149[h123].length; f56++){
                        var p51 = this.helpers.getShadeColor(e542.config.chart.type, h123, f56, this.negRange), b42 = p51.color, y33 = p51.colorProps;
                        if ("image" === e542.config.fill.type) b42 = new T(this.ctx).fillPath({
                            seriesNumber: h123,
                            dataPointIndex: f56,
                            opacity: e542.globals.hasNegs ? y33.percent < 0 ? 1 - (1 + y33.percent / 100) : u66 + y33.percent / 100 : y33.percent / 100,
                            patternID: x.randomId(),
                            width: e542.config.fill.image.width ? e542.config.fill.image.width : s271,
                            height: e542.config.fill.image.height ? e542.config.fill.image.height : r234
                        });
                        var w25 = this.rectRadius, k20 = i411.drawRect(g82, o207, s271, r234, w25);
                        if (k20.attr({
                            cx: g82,
                            cy: o207
                        }), k20.node.classList.add("apexcharts-heatmap-rect"), c110.add(k20), k20.attr({
                            fill: b42,
                            i: h123,
                            index: h123,
                            j: f56,
                            val: l149[h123][f56],
                            "stroke-width": this.strokeWidth,
                            stroke: e542.config.plotOptions.heatmap.useFillColorAsStroke ? b42 : e542.globals.stroke.colors[0],
                            color: b42
                        }), this.helpers.addListeners(k20), e542.config.chart.animations.enabled && !e542.globals.dataChanged) {
                            var A17 = 1;
                            e542.globals.resized || (A17 = e542.config.chart.animations.speed), this.animateHeatMap(k20, g82, o207, s271, r234, A17);
                        }
                        if (e542.globals.dataChanged) {
                            var S14 = 1;
                            if (this.dynamicAnim.enabled && e542.globals.shouldAnimate) {
                                S14 = this.dynamicAnim.speed;
                                var C12 = e542.globals.previousPaths[h123] && e542.globals.previousPaths[h123][f56] && e542.globals.previousPaths[h123][f56].color;
                                C12 || (C12 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(k20, x.isColorHex(C12) ? C12 : x.rgb2hex(C12), x.isColorHex(b42) ? b42 : x.rgb2hex(b42), S14);
                            }
                        }
                        var L11 = (0, e542.config.dataLabels.formatter)(e542.globals.series[h123][f56], {
                            value: e542.globals.series[h123][f56],
                            seriesIndex: h123,
                            dataPointIndex: f56,
                            w: e542
                        }), P10 = this.helpers.calculateDataLabels({
                            text: L11,
                            x: g82 + s271 / 2,
                            y: o207 + r234 / 2,
                            i: h123,
                            j: f56,
                            colorProps: y33,
                            series: l149
                        });
                        null !== P10 && c110.add(P10), g82 += s271;
                    }
                    o207 += r234, a341.add(c110);
                }
                var M8 = e542.globals.yAxisScale[0].result.slice();
                e542.config.yaxis[0].reversed ? M8.unshift("") : M8.push(""), e542.globals.yAxisScale[0].result = M8;
                var I5 = e542.globals.gridHeight / e542.globals.series.length;
                return e542.config.yaxis[0].labels.offsetY = -I5 / 2, a341;
            }
        },
        {
            key: "animateHeatMap",
            value: function(t708, e543, i412, a342, s272, r235) {
                var o208 = new b(this.ctx);
                o208.animateRect(t708, {
                    x: e543 + a342 / 2,
                    y: i412 + s272 / 2,
                    width: 0,
                    height: 0
                }, {
                    x: e543,
                    y: i412,
                    width: a342,
                    height: s272
                }, r235, function() {
                    o208.animationCompleted(t708);
                });
            }
        },
        {
            key: "animateHeatColor",
            value: function(t709, e544, i413, a343) {
                t709.attr({
                    fill: e544
                }).animate(a343).attr({
                    fill: i413
                });
            }
        }
    ]), t706;
}(), St = function() {
    function t710(e545) {
        a(this, t710), this.ctx = e545, this.w = e545.w;
    }
    return r(t710, [
        {
            key: "drawYAxisTexts",
            value: function(t711, e546, i414, a344) {
                var s273 = this.w, r236 = s273.config.yaxis[0], o209 = s273.globals.yLabelFormatters[0];
                return new m(this.ctx).drawText({
                    x: t711 + r236.labels.offsetX,
                    y: e546 + r236.labels.offsetY,
                    text: o209(a344, i414),
                    textAnchor: "middle",
                    fontSize: r236.labels.style.fontSize,
                    fontFamily: r236.labels.style.fontFamily,
                    foreColor: Array.isArray(r236.labels.style.colors) ? r236.labels.style.colors[i414] : r236.labels.style.colors
                });
            }
        }
    ]), t710;
}(), Ct = function() {
    function t712(e547) {
        a(this, t712), this.ctx = e547, this.w = e547.w;
        var i415 = this.w;
        this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [
            0
        ], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== i415.globals.stroke.colors ? i415.globals.stroke.colors : i415.globals.colors, this.defaultSize = Math.min(i415.globals.gridWidth, i415.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = i415.globals.gridWidth / 2, "radialBar" === i415.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(i415.config.plotOptions.pie.endAngle - i415.config.plotOptions.pie.startAngle), this.initialAngle = i415.config.plotOptions.pie.startAngle % this.fullAngle, i415.globals.radialSize = this.defaultSize / 2.05 - i415.config.stroke.width - (i415.config.chart.sparkline.enabled ? 0 : i415.config.chart.dropShadow.blur), this.donutSize = i415.globals.radialSize * parseInt(i415.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    return r(t712, [
        {
            key: "draw",
            value: function(t713) {
                var e548 = this, i416 = this.w, a345 = new m(this.ctx);
                if (this.ret = a345.group({
                    class: "apexcharts-pie"
                }), i416.globals.noData) return this.ret;
                for(var s274 = 0, r237 = 0; r237 < t713.length; r237++)s274 += x.negToZero(t713[r237]);
                var o210 = [], n181 = a345.group();
                0 === s274 && (s274 = 0.00001), t713.forEach(function(t714) {
                    e548.maxY = Math.max(e548.maxY, t714);
                }), i416.config.yaxis[0].max && (this.maxY = i416.config.yaxis[0].max), "back" === i416.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret);
                for(var l150 = 0; l150 < t713.length; l150++){
                    var h124 = this.fullAngle * x.negToZero(t713[l150]) / s274;
                    o210.push(h124), "polarArea" === this.chartType ? (o210[l150] = this.fullAngle / t713.length, this.sliceSizes.push(i416.globals.radialSize * t713[l150] / this.maxY)) : this.sliceSizes.push(i416.globals.radialSize);
                }
                if (i416.globals.dataChanged) {
                    for(var c111, d99 = 0, g83 = 0; g83 < i416.globals.previousPaths.length; g83++)d99 += x.negToZero(i416.globals.previousPaths[g83]);
                    for(var u67 = 0; u67 < i416.globals.previousPaths.length; u67++)c111 = this.fullAngle * x.negToZero(i416.globals.previousPaths[u67]) / d99, this.prevSectorAngleArr.push(c111);
                }
                this.donutSize < 0 && (this.donutSize = 0);
                var f57 = i416.config.plotOptions.pie.customScale, p52 = i416.globals.gridWidth / 2, b43 = i416.globals.gridHeight / 2, v31 = p52 - i416.globals.gridWidth / 2 * f57, y34 = b43 - i416.globals.gridHeight / 2 * f57;
                if ("donut" === this.chartType) {
                    var w26 = a345.drawCircle(this.donutSize);
                    w26.attr({
                        cx: this.centerX,
                        cy: this.centerY,
                        fill: i416.config.plotOptions.pie.donut.background ? i416.config.plotOptions.pie.donut.background : "transparent"
                    }), n181.add(w26);
                }
                var k21 = this.drawArcs(o210, t713);
                if (this.sliceLabels.forEach(function(t715) {
                    k21.add(t715);
                }), n181.attr({
                    transform: "translate(".concat(v31, ", ").concat(y34, ") scale(").concat(f57, ")")
                }), n181.add(k21), this.ret.add(n181), this.donutDataLabels.show) {
                    var A18 = this.renderInnerDataLabels(this.donutDataLabels, {
                        hollowSize: this.donutSize,
                        centerX: this.centerX,
                        centerY: this.centerY,
                        opacity: this.donutDataLabels.show,
                        translateX: v31,
                        translateY: y34
                    });
                    this.ret.add(A18);
                }
                return "front" === i416.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret), this.ret;
            }
        },
        {
            key: "drawArcs",
            value: function(t716, e549) {
                var i417 = this.w, a346 = new v(this.ctx), s275 = new m(this.ctx), r238 = new T(this.ctx), o211 = s275.group({
                    class: "apexcharts-slices"
                }), n182 = this.initialAngle, l151 = this.initialAngle, h125 = this.initialAngle, c112 = this.initialAngle;
                this.strokeWidth = i417.config.stroke.show ? i417.config.stroke.width : 0;
                for(var d100 = 0; d100 < t716.length; d100++){
                    var g84 = s275.group({
                        class: "apexcharts-series apexcharts-pie-series",
                        seriesName: x.escapeString(i417.globals.seriesNames[d100]),
                        rel: d100 + 1,
                        "data:realIndex": d100
                    });
                    o211.add(g84), l151 = c112, h125 = (n182 = h125) + t716[d100], c112 = l151 + this.prevSectorAngleArr[d100];
                    var u68 = h125 < n182 ? this.fullAngle + h125 - n182 : h125 - n182, f58 = r238.fillPath({
                        seriesNumber: d100,
                        size: this.sliceSizes[d100],
                        value: e549[d100]
                    }), p53 = this.getChangedPath(l151, c112), b44 = s275.drawPath({
                        d: p53,
                        stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d100] : this.lineColorArr,
                        strokeWidth: 0,
                        fill: f58,
                        fillOpacity: i417.config.fill.opacity,
                        classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d100)
                    });
                    if (b44.attr({
                        index: 0,
                        j: d100
                    }), a346.setSelectionFilter(b44, 0, d100), i417.config.chart.dropShadow.enabled) {
                        var y35 = i417.config.chart.dropShadow;
                        a346.dropShadow(b44, y35, d100);
                    }
                    this.addListeners(b44, this.donutDataLabels), m.setAttrs(b44.node, {
                        "data:angle": u68,
                        "data:startAngle": n182,
                        "data:strokeWidth": this.strokeWidth,
                        "data:value": e549[d100]
                    });
                    var w27 = {
                        x: 0,
                        y: 0
                    };
                    "pie" === this.chartType || "polarArea" === this.chartType ? w27 = x.polarToCartesian(this.centerX, this.centerY, i417.globals.radialSize / 1.25 + i417.config.plotOptions.pie.dataLabels.offset, (n182 + u68 / 2) % this.fullAngle) : "donut" === this.chartType && (w27 = x.polarToCartesian(this.centerX, this.centerY, (i417.globals.radialSize + this.donutSize) / 2 + i417.config.plotOptions.pie.dataLabels.offset, (n182 + u68 / 2) % this.fullAngle)), g84.add(b44);
                    var k22 = 0;
                    if (!this.initialAnim || i417.globals.resized || i417.globals.dataChanged ? this.animBeginArr.push(0) : (0 === (k22 = u68 / this.fullAngle * i417.config.chart.animations.speed) && (k22 = 1), this.animDur = k22 + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i417.globals.dataChanged ? this.animatePaths(b44, {
                        size: this.sliceSizes[d100],
                        endAngle: h125,
                        startAngle: n182,
                        prevStartAngle: l151,
                        prevEndAngle: c112,
                        animateStartingPos: !0,
                        i: d100,
                        animBeginArr: this.animBeginArr,
                        shouldSetPrevPaths: !0,
                        dur: i417.config.chart.animations.dynamicAnimation.speed
                    }) : this.animatePaths(b44, {
                        size: this.sliceSizes[d100],
                        endAngle: h125,
                        startAngle: n182,
                        i: d100,
                        totalItems: t716.length - 1,
                        animBeginArr: this.animBeginArr,
                        dur: k22
                    }), i417.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && b44.click(this.pieClicked.bind(this, d100)), void 0 !== i417.globals.selectedDataPoints[0] && i417.globals.selectedDataPoints[0].indexOf(d100) > -1 && this.pieClicked(d100), i417.config.dataLabels.enabled) {
                        var A19 = w27.x, S15 = w27.y, C13 = 100 * u68 / this.fullAngle + "%";
                        if (0 !== u68 && i417.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t716[d100]) {
                            var L12 = i417.config.dataLabels.formatter;
                            void 0 !== L12 && (C13 = L12(i417.globals.seriesPercent[d100][0], {
                                seriesIndex: d100,
                                w: i417
                            }));
                            var P11 = i417.globals.dataLabels.style.colors[d100], M9 = s275.group({
                                class: "apexcharts-datalabels"
                            }), I6 = s275.drawText({
                                x: A19,
                                y: S15,
                                text: C13,
                                textAnchor: "middle",
                                fontSize: i417.config.dataLabels.style.fontSize,
                                fontFamily: i417.config.dataLabels.style.fontFamily,
                                fontWeight: i417.config.dataLabels.style.fontWeight,
                                foreColor: P11
                            });
                            if (M9.add(I6), i417.config.dataLabels.dropShadow.enabled) {
                                var z4 = i417.config.dataLabels.dropShadow;
                                a346.dropShadow(I6, z4);
                            }
                            I6.node.classList.add("apexcharts-pie-label"), i417.config.chart.animations.animate && !1 === i417.globals.resized && (I6.node.classList.add("apexcharts-pie-label-delay"), I6.node.style.animationDelay = i417.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(M9);
                        }
                    }
                }
                return o211;
            }
        },
        {
            key: "addListeners",
            value: function(t717, e550) {
                var i418 = new m(this.ctx);
                t717.node.addEventListener("mouseenter", i418.pathMouseEnter.bind(this, t717)), t717.node.addEventListener("mouseleave", i418.pathMouseLeave.bind(this, t717)), t717.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t717.node, e550)), t717.node.addEventListener("mousedown", i418.pathMouseDown.bind(this, t717)), this.donutDataLabels.total.showAlways || (t717.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t717.node, e550)), t717.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t717.node, e550)));
            }
        },
        {
            key: "animatePaths",
            value: function(t718, e551) {
                var i419 = this.w, a347 = e551.endAngle < e551.startAngle ? this.fullAngle + e551.endAngle - e551.startAngle : e551.endAngle - e551.startAngle, s276 = a347, r239 = e551.startAngle, o212 = e551.startAngle;
                void 0 !== e551.prevStartAngle && void 0 !== e551.prevEndAngle && (r239 = e551.prevEndAngle, s276 = e551.prevEndAngle < e551.prevStartAngle ? this.fullAngle + e551.prevEndAngle - e551.prevStartAngle : e551.prevEndAngle - e551.prevStartAngle), e551.i === i419.config.series.length - 1 && (a347 + o212 > this.fullAngle ? e551.endAngle = e551.endAngle - (a347 + o212) : a347 + o212 < this.fullAngle && (e551.endAngle = e551.endAngle + (this.fullAngle - (a347 + o212)))), a347 === this.fullAngle && (a347 = this.fullAngle - 0.01), this.animateArc(t718, r239, o212, a347, s276, e551);
            }
        },
        {
            key: "animateArc",
            value: function(t719, e552, i420, a348, s277, r240) {
                var o213, n183 = this, l152 = this.w, h126 = new b(this.ctx), c113 = r240.size;
                (isNaN(e552) || isNaN(s277)) && (e552 = i420, s277 = a348, r240.dur = 0);
                var d101 = a348, g85 = i420, u69 = e552 < i420 ? this.fullAngle + e552 - i420 : e552 - i420;
                l152.globals.dataChanged && r240.shouldSetPrevPaths && r240.prevEndAngle && (o213 = n183.getPiePath({
                    me: n183,
                    startAngle: r240.prevStartAngle,
                    angle: r240.prevEndAngle < r240.prevStartAngle ? this.fullAngle + r240.prevEndAngle - r240.prevStartAngle : r240.prevEndAngle - r240.prevStartAngle,
                    size: c113
                }), t719.attr({
                    d: o213
                })), 0 !== r240.dur ? t719.animate(r240.dur, l152.globals.easing, r240.animBeginArr[r240.i]).afterAll(function() {
                    "pie" !== n183.chartType && "donut" !== n183.chartType && "polarArea" !== n183.chartType || this.animate(l152.config.chart.animations.dynamicAnimation.speed).attr({
                        "stroke-width": n183.strokeWidth
                    }), r240.i === l152.config.series.length - 1 && h126.animationCompleted(t719);
                }).during(function(l153) {
                    d101 = u69 + (a348 - u69) * l153, r240.animateStartingPos && (d101 = s277 + (a348 - s277) * l153, g85 = e552 - s277 + (i420 - (e552 - s277)) * l153), o213 = n183.getPiePath({
                        me: n183,
                        startAngle: g85,
                        angle: d101,
                        size: c113
                    }), t719.node.setAttribute("data:pathOrig", o213), t719.attr({
                        d: o213
                    });
                }) : (o213 = n183.getPiePath({
                    me: n183,
                    startAngle: g85,
                    angle: a348,
                    size: c113
                }), r240.isTrack || (l152.globals.animationEnded = !0), t719.node.setAttribute("data:pathOrig", o213), t719.attr({
                    d: o213,
                    "stroke-width": n183.strokeWidth
                }));
            }
        },
        {
            key: "pieClicked",
            value: function(t720) {
                var e553, i421 = this.w, a349 = this, s278 = a349.sliceSizes[t720] + (i421.config.plotOptions.pie.expandOnClick ? 4 : 0), r241 = i421.globals.dom.Paper.select(".apexcharts-".concat(a349.chartType.toLowerCase(), "-slice-").concat(t720)).members[0];
                if ("true" !== r241.attr("data:pieClicked")) {
                    var o214 = i421.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
                    Array.prototype.forEach.call(o214, function(t721) {
                        t721.setAttribute("data:pieClicked", "false");
                        var e554 = t721.getAttribute("data:pathOrig");
                        t721.setAttribute("d", e554);
                    }), r241.attr("data:pieClicked", "true");
                    var n184 = parseInt(r241.attr("data:startAngle"), 10), l154 = parseInt(r241.attr("data:angle"), 10);
                    e553 = a349.getPiePath({
                        me: a349,
                        startAngle: n184,
                        angle: l154,
                        size: s278
                    }), 360 !== l154 && r241.plot(e553);
                } else {
                    r241.attr({
                        "data:pieClicked": "false"
                    }), this.revertDataLabelsInner(r241.node, this.donutDataLabels);
                    var h127 = r241.attr("data:pathOrig");
                    r241.attr({
                        d: h127
                    });
                }
            }
        },
        {
            key: "getChangedPath",
            value: function(t722, e555) {
                var i422 = "";
                return this.dynamicAnim && this.w.globals.dataChanged && (i422 = this.getPiePath({
                    me: this,
                    startAngle: t722,
                    angle: e555 - t722,
                    size: this.size
                })), i422;
            }
        },
        {
            key: "getPiePath",
            value: function(t723) {
                var e556 = t723.me, i423 = t723.startAngle, a350 = t723.angle, s279 = t723.size, r242 = i423, o215 = Math.PI * (r242 - 90) / 180, n185 = a350 + i423;
                Math.ceil(n185) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (n185 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(n185) > this.fullAngle && (n185 -= this.fullAngle);
                var l155 = Math.PI * (n185 - 90) / 180, h128 = e556.centerX + s279 * Math.cos(o215), c114 = e556.centerY + s279 * Math.sin(o215), d102 = e556.centerX + s279 * Math.cos(l155), g86 = e556.centerY + s279 * Math.sin(l155), u70 = x.polarToCartesian(e556.centerX, e556.centerY, e556.donutSize, n185), f59 = x.polarToCartesian(e556.centerX, e556.centerY, e556.donutSize, r242), p54 = a350 > 180 ? 1 : 0, b45 = [
                    "M",
                    h128,
                    c114,
                    "A",
                    s279,
                    s279,
                    0,
                    p54,
                    1,
                    d102,
                    g86
                ];
                return "donut" === e556.chartType ? [].concat(b45, [
                    "L",
                    u70.x,
                    u70.y,
                    "A",
                    e556.donutSize,
                    e556.donutSize,
                    0,
                    p54,
                    0,
                    f59.x,
                    f59.y,
                    "L",
                    h128,
                    c114,
                    "z"
                ]).join(" ") : "pie" === e556.chartType || "polarArea" === e556.chartType ? [].concat(b45, [
                    "L",
                    e556.centerX,
                    e556.centerY,
                    "L",
                    h128,
                    c114
                ]).join(" ") : [].concat(b45).join(" ");
            }
        },
        {
            key: "drawPolarElements",
            value: function(t724) {
                var e557 = this.w, i424 = new q(this.ctx), a351 = new m(this.ctx), s280 = new St(this.ctx), r243 = a351.group(), o216 = a351.group(), n186 = i424.niceScale(0, Math.ceil(this.maxY), e557.config.yaxis[0].tickAmount, 0, !0), l156 = n186.result.reverse(), h129 = n186.result.length;
                this.maxY = n186.niceMax;
                for(var c115 = e557.globals.radialSize, d103 = c115 / (h129 - 1), g87 = 0; g87 < h129 - 1; g87++){
                    var u71 = a351.drawCircle(c115);
                    if (u71.attr({
                        cx: this.centerX,
                        cy: this.centerY,
                        fill: "none",
                        "stroke-width": e557.config.plotOptions.polarArea.rings.strokeWidth,
                        stroke: e557.config.plotOptions.polarArea.rings.strokeColor
                    }), e557.config.yaxis[0].show) {
                        var f60 = s280.drawYAxisTexts(this.centerX, this.centerY - c115 + parseInt(e557.config.yaxis[0].labels.style.fontSize, 10) / 2, g87, l156[g87]);
                        o216.add(f60);
                    }
                    r243.add(u71), c115 -= d103;
                }
                this.drawSpokes(t724), t724.add(r243), t724.add(o216);
            }
        },
        {
            key: "renderInnerDataLabels",
            value: function(t725, e558) {
                var i425 = this.w, a352 = new m(this.ctx), s281 = a352.group({
                    class: "apexcharts-datalabels-group",
                    transform: "translate(".concat(e558.translateX ? e558.translateX : 0, ", ").concat(e558.translateY ? e558.translateY : 0, ") scale(").concat(i425.config.plotOptions.pie.customScale, ")")
                }), r244 = t725.total.show;
                s281.node.style.opacity = e558.opacity;
                var o217, n187, l157 = e558.centerX, h130 = e558.centerY;
                o217 = void 0 === t725.name.color ? i425.globals.colors[0] : t725.name.color;
                var c116 = t725.name.fontSize, d104 = t725.name.fontFamily, g88 = t725.name.fontWeight;
                n187 = void 0 === t725.value.color ? i425.config.chart.foreColor : t725.value.color;
                var u72 = t725.value.formatter, f61 = "", p55 = "";
                if (r244 ? (o217 = t725.total.color, c116 = t725.total.fontSize, d104 = t725.total.fontFamily, g88 = t725.total.fontWeight, p55 = t725.total.label, f61 = t725.total.formatter(i425)) : 1 === i425.globals.series.length && (f61 = u72(i425.globals.series[0], i425), p55 = i425.globals.seriesNames[0]), p55 && (p55 = t725.name.formatter(p55, t725.total.show, i425)), t725.name.show) {
                    var x36 = a352.drawText({
                        x: l157,
                        y: h130 + parseFloat(t725.name.offsetY),
                        text: p55,
                        textAnchor: "middle",
                        foreColor: o217,
                        fontSize: c116,
                        fontWeight: g88,
                        fontFamily: d104
                    });
                    x36.node.classList.add("apexcharts-datalabel-label"), s281.add(x36);
                }
                if (t725.value.show) {
                    var b46 = t725.name.show ? parseFloat(t725.value.offsetY) + 16 : t725.value.offsetY, v32 = a352.drawText({
                        x: l157,
                        y: h130 + b46,
                        text: f61,
                        textAnchor: "middle",
                        foreColor: n187,
                        fontWeight: t725.value.fontWeight,
                        fontSize: t725.value.fontSize,
                        fontFamily: t725.value.fontFamily
                    });
                    v32.node.classList.add("apexcharts-datalabel-value"), s281.add(v32);
                }
                return s281;
            }
        },
        {
            key: "printInnerLabels",
            value: function(t726, e559, i426, a353) {
                var s282, r245 = this.w;
                a353 ? s282 = void 0 === t726.name.color ? r245.globals.colors[parseInt(a353.parentNode.getAttribute("rel"), 10) - 1] : t726.name.color : r245.globals.series.length > 1 && t726.total.show && (s282 = t726.total.color);
                var o218 = r245.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n188 = r245.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                i426 = (0, t726.value.formatter)(i426, r245), a353 || "function" != typeof t726.total.formatter || (i426 = t726.total.formatter(r245));
                var l158 = e559 === t726.total.label;
                e559 = t726.name.formatter(e559, l158, r245), null !== o218 && (o218.textContent = e559), null !== n188 && (n188.textContent = i426), null !== o218 && (o218.style.fill = s282);
            }
        },
        {
            key: "printDataLabelsInner",
            value: function(t727, e560) {
                var i427 = this.w, a354 = t727.getAttribute("data:value"), s283 = i427.globals.seriesNames[parseInt(t727.parentNode.getAttribute("rel"), 10) - 1];
                i427.globals.series.length > 1 && this.printInnerLabels(e560, s283, a354, t727);
                var r246 = i427.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                null !== r246 && (r246.style.opacity = 1);
            }
        },
        {
            key: "drawSpokes",
            value: function(t728) {
                var e561 = this, i428 = this.w, a355 = new m(this.ctx), s284 = i428.config.plotOptions.polarArea.spokes;
                if (0 !== s284.strokeWidth) {
                    for(var r247 = [], o219 = 360 / i428.globals.series.length, n189 = 0; n189 < i428.globals.series.length; n189++)r247.push(x.polarToCartesian(this.centerX, this.centerY, i428.globals.radialSize, i428.config.plotOptions.pie.startAngle + o219 * n189));
                    r247.forEach(function(i429, r) {
                        var o220 = a355.drawLine(i429.x, i429.y, e561.centerX, e561.centerY, Array.isArray(s284.connectorColors) ? s284.connectorColors[r] : s284.connectorColors);
                        t728.add(o220);
                    });
                }
            }
        },
        {
            key: "revertDataLabelsInner",
            value: function(t729, e562, i430) {
                var a356 = this, s285 = this.w, r248 = s285.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"), o221 = !1, n190 = s285.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), l159 = function(t730) {
                    var i431 = t730.makeSliceOut, s286 = t730.printLabel;
                    Array.prototype.forEach.call(n190, function(t731) {
                        "true" === t731.getAttribute("data:pieClicked") && (i431 && (o221 = !0), s286 && a356.printDataLabelsInner(t731, e562));
                    });
                };
                if (l159({
                    makeSliceOut: !0,
                    printLabel: !1
                }), e562.total.show && s285.globals.series.length > 1) o221 && !e562.total.showAlways ? l159({
                    makeSliceOut: !1,
                    printLabel: !0
                }) : this.printInnerLabels(e562, e562.total.label, e562.total.formatter(s285));
                else if (l159({
                    makeSliceOut: !1,
                    printLabel: !0
                }), !o221) {
                    if (s285.globals.selectedDataPoints.length && s285.globals.series.length > 1) {
                        if (s285.globals.selectedDataPoints[0].length > 0) {
                            var h131 = s285.globals.selectedDataPoints[0], c117 = s285.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(h131));
                            this.printDataLabelsInner(c117, e562);
                        } else r248 && s285.globals.selectedDataPoints.length && 0 === s285.globals.selectedDataPoints[0].length && (r248.style.opacity = 0);
                    } else r248 && s285.globals.series.length > 1 && (r248.style.opacity = 0);
                }
            }
        }
    ]), t712;
}(), Lt = function() {
    function t732(e563) {
        a(this, t732), this.ctx = e563, this.w = e563.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
        var i432 = this.w;
        this.graphics = new m(this.ctx), this.lineColorArr = void 0 !== i432.globals.stroke.colors ? i432.globals.stroke.colors : i432.globals.colors, this.defaultSize = i432.globals.svgHeight < i432.globals.svgWidth ? i432.globals.gridHeight + 1.5 * i432.globals.goldenPadding : i432.globals.gridWidth, this.isLog = i432.config.yaxis[0].logarithmic, this.coreUtils = new k(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(i432.globals.maxY, 0) : i432.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : i432.globals.minY, this.polygons = i432.config.plotOptions.radar.polygons, this.strokeWidth = i432.config.stroke.show ? i432.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - i432.config.chart.dropShadow.blur, i432.config.xaxis.labels.show && (this.size = this.size - i432.globals.xAxisLabelsWidth / 1.75), void 0 !== i432.config.plotOptions.radar.size && (this.size = i432.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    return r(t732, [
        {
            key: "draw",
            value: function(t733) {
                var i433 = this, a357 = this.w, s287 = new T(this.ctx), r249 = [], o222 = new z(this.ctx);
                t733.length && (this.dataPointsLen = t733[a357.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
                var n191 = a357.globals.gridWidth / 2, l160 = a357.globals.gridHeight / 2, h132 = n191 + a357.config.plotOptions.radar.offsetX, c118 = l160 + a357.config.plotOptions.radar.offsetY, d105 = this.graphics.group({
                    class: "apexcharts-radar-series apexcharts-plot-series",
                    transform: "translate(".concat(h132 || 0, ", ").concat(c118 || 0, ")")
                }), g89 = [], u73 = null, f62 = null;
                if (this.yaxisLabels = this.graphics.group({
                    class: "apexcharts-yaxis"
                }), t733.forEach(function(t734, n192) {
                    var l161 = t734.length === a357.globals.dataPoints, h133 = i433.graphics.group().attr({
                        class: "apexcharts-series",
                        "data:longestSeries": l161,
                        seriesName: x.escapeString(a357.globals.seriesNames[n192]),
                        rel: n192 + 1,
                        "data:realIndex": n192
                    });
                    i433.dataRadiusOfPercent[n192] = [], i433.dataRadius[n192] = [], i433.angleArr[n192] = [], t734.forEach(function(t735, e564) {
                        var a358 = Math.abs(i433.maxValue - i433.minValue);
                        t735 += Math.abs(i433.minValue), i433.isLog && (t735 = i433.coreUtils.getLogVal(t735, 0)), i433.dataRadiusOfPercent[n192][e564] = t735 / a358, i433.dataRadius[n192][e564] = i433.dataRadiusOfPercent[n192][e564] * i433.size, i433.angleArr[n192][e564] = e564 * i433.disAngle;
                    }), g89 = i433.getDataPointsPos(i433.dataRadius[n192], i433.angleArr[n192]);
                    var c119 = i433.createPaths(g89, {
                        x: 0,
                        y: 0
                    });
                    u73 = i433.graphics.group({
                        class: "apexcharts-series-markers-wrap apexcharts-element-hidden"
                    }), f62 = i433.graphics.group({
                        class: "apexcharts-datalabels",
                        "data:realIndex": n192
                    }), a357.globals.delayedElements.push({
                        el: u73.node,
                        index: n192
                    });
                    var d106 = {
                        i: n192,
                        realIndex: n192,
                        animationDelay: n192,
                        initialSpeed: a357.config.chart.animations.speed,
                        dataChangeSpeed: a357.config.chart.animations.dynamicAnimation.speed,
                        className: "apexcharts-radar",
                        shouldClipToGrid: !1,
                        bindEventsOnPaths: !1,
                        stroke: a357.globals.stroke.colors[n192],
                        strokeLineCap: a357.config.stroke.lineCap
                    }, p57 = null;
                    a357.globals.previousPaths.length > 0 && (p57 = i433.getPreviousPath(n192));
                    for(var b47 = 0; b47 < c119.linePathsTo.length; b47++){
                        var m16 = i433.graphics.renderPaths(e(e({
                        }, d106), {
                        }, {
                            pathFrom: null === p57 ? c119.linePathsFrom[b47] : p57,
                            pathTo: c119.linePathsTo[b47],
                            strokeWidth: Array.isArray(i433.strokeWidth) ? i433.strokeWidth[n192] : i433.strokeWidth,
                            fill: "none",
                            drawShadow: !1
                        }));
                        h133.add(m16);
                        var y36 = s287.fillPath({
                            seriesNumber: n192
                        }), w28 = i433.graphics.renderPaths(e(e({
                        }, d106), {
                        }, {
                            pathFrom: null === p57 ? c119.areaPathsFrom[b47] : p57,
                            pathTo: c119.areaPathsTo[b47],
                            strokeWidth: 0,
                            fill: y36,
                            drawShadow: !1
                        }));
                        if (a357.config.chart.dropShadow.enabled) {
                            var k23 = new v(i433.ctx), A20 = a357.config.chart.dropShadow;
                            k23.dropShadow(w28, Object.assign({
                            }, A20, {
                                noUserSpaceOnUse: !0
                            }), n192);
                        }
                        h133.add(w28);
                    }
                    t734.forEach(function(t, s288) {
                        var r250 = new M(i433.ctx).getMarkerConfig({
                            cssClass: "apexcharts-marker",
                            seriesIndex: n192,
                            dataPointIndex: s288
                        }), l162 = i433.graphics.drawMarker(g89[s288].x, g89[s288].y, r250);
                        l162.attr("rel", s288), l162.attr("j", s288), l162.attr("index", n192), l162.node.setAttribute("default-marker-size", r250.pSize);
                        var c120 = i433.graphics.group({
                            class: "apexcharts-series-markers"
                        });
                        c120 && c120.add(l162), u73.add(c120), h133.add(u73);
                        var d107 = a357.config.dataLabels;
                        if (d107.enabled) {
                            var p58 = d107.formatter(a357.globals.series[n192][s288], {
                                seriesIndex: n192,
                                dataPointIndex: s288,
                                w: a357
                            });
                            o222.plotDataLabelsText({
                                x: g89[s288].x,
                                y: g89[s288].y,
                                text: p58,
                                textAnchor: "middle",
                                i: n192,
                                j: n192,
                                parent: f62,
                                offsetCorrection: !1,
                                dataLabelsConfig: e({
                                }, d107)
                            });
                        }
                        h133.add(f62);
                    }), r249.push(h133);
                }), this.drawPolygons({
                    parent: d105
                }), a357.config.xaxis.labels.show) {
                    var p56 = this.drawXAxisTexts();
                    d105.add(p56);
                }
                return r249.forEach(function(t736) {
                    d105.add(t736);
                }), d105.add(this.yaxisLabels), d105;
            }
        },
        {
            key: "drawPolygons",
            value: function(t737) {
                for(var e565 = this, i434 = this.w, a359 = t737.parent, s289 = new St(this.ctx), r251 = i434.globals.yAxisScale[0].result.reverse(), o223 = r251.length, n193 = [], l163 = this.size / (o223 - 1), h134 = 0; h134 < o223; h134++)n193[h134] = l163 * h134;
                n193.reverse();
                var c121 = [], d108 = [];
                n193.forEach(function(t738, i435) {
                    var a360 = x.getPolygonPos(t738, e565.dataPointsLen), s290 = "";
                    a360.forEach(function(t739, a361) {
                        if (0 === i435) {
                            var r252 = e565.graphics.drawLine(t739.x, t739.y, 0, 0, Array.isArray(e565.polygons.connectorColors) ? e565.polygons.connectorColors[a361] : e565.polygons.connectorColors);
                            d108.push(r252);
                        }
                        0 === a361 && e565.yaxisLabelsTextsPos.push({
                            x: t739.x,
                            y: t739.y
                        }), s290 += t739.x + "," + t739.y + " ";
                    }), c121.push(s290);
                }), c121.forEach(function(t740, s) {
                    var r253 = e565.polygons.strokeColors, o224 = e565.polygons.strokeWidth, n194 = e565.graphics.drawPolygon(t740, Array.isArray(r253) ? r253[s] : r253, Array.isArray(o224) ? o224[s] : o224, i434.globals.radarPolygons.fill.colors[s]);
                    a359.add(n194);
                }), d108.forEach(function(t741) {
                    a359.add(t741);
                }), i434.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(t742, i436) {
                    var a362 = s289.drawYAxisTexts(t742.x, t742.y, i436, r251[i436]);
                    e565.yaxisLabels.add(a362);
                });
            }
        },
        {
            key: "drawXAxisTexts",
            value: function() {
                var t743 = this, i437 = this.w, a363 = i437.config.xaxis.labels, s291 = this.graphics.group({
                    class: "apexcharts-xaxis"
                }), r254 = x.getPolygonPos(this.size, this.dataPointsLen);
                return i437.globals.labels.forEach(function(o225, n195) {
                    var l164 = i437.config.xaxis.labels.formatter, h135 = new z(t743.ctx);
                    if (r254[n195]) {
                        var c122 = t743.getTextPos(r254[n195], t743.size), d109 = l164(o225, {
                            seriesIndex: -1,
                            dataPointIndex: n195,
                            w: i437
                        });
                        h135.plotDataLabelsText({
                            x: c122.newX,
                            y: c122.newY,
                            text: d109,
                            textAnchor: c122.textAnchor,
                            i: n195,
                            j: n195,
                            parent: s291,
                            color: Array.isArray(a363.style.colors) && a363.style.colors[n195] ? a363.style.colors[n195] : "#a8a8a8",
                            dataLabelsConfig: e({
                                textAnchor: c122.textAnchor,
                                dropShadow: {
                                    enabled: !1
                                }
                            }, a363),
                            offsetCorrection: !1
                        });
                    }
                }), s291;
            }
        },
        {
            key: "createPaths",
            value: function(t744, e566) {
                var i438 = this, a364 = [], s292 = [], r255 = [], o226 = [];
                if (t744.length) {
                    s292 = [
                        this.graphics.move(e566.x, e566.y)
                    ], o226 = [
                        this.graphics.move(e566.x, e566.y)
                    ];
                    var n196 = this.graphics.move(t744[0].x, t744[0].y), l165 = this.graphics.move(t744[0].x, t744[0].y);
                    t744.forEach(function(e567, a365) {
                        n196 += i438.graphics.line(e567.x, e567.y), l165 += i438.graphics.line(e567.x, e567.y), a365 === t744.length - 1 && (n196 += "Z", l165 += "Z");
                    }), a364.push(n196), r255.push(l165);
                }
                return {
                    linePathsFrom: s292,
                    linePathsTo: a364,
                    areaPathsFrom: o226,
                    areaPathsTo: r255
                };
            }
        },
        {
            key: "getTextPos",
            value: function(t745, e568) {
                var i439 = "middle", a366 = t745.x, s293 = t745.y;
                return Math.abs(t745.x) >= 10 ? t745.x > 0 ? (i439 = "start", a366 += 10) : t745.x < 0 && (i439 = "end", a366 -= 10) : i439 = "middle", Math.abs(t745.y) >= e568 - 10 && (t745.y < 0 ? s293 -= 10 : t745.y > 0 && (s293 += 10)), {
                    textAnchor: i439,
                    newX: a366,
                    newY: s293
                };
            }
        },
        {
            key: "getPreviousPath",
            value: function(t746) {
                for(var e569 = this.w, i440 = null, a367 = 0; a367 < e569.globals.previousPaths.length; a367++){
                    var s294 = e569.globals.previousPaths[a367];
                    s294.paths.length > 0 && parseInt(s294.realIndex, 10) === parseInt(t746, 10) && void 0 !== e569.globals.previousPaths[a367].paths[0] && (i440 = e569.globals.previousPaths[a367].paths[0].d);
                }
                return i440;
            }
        },
        {
            key: "getDataPointsPos",
            value: function(t747, e570) {
                var i441 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
                t747 = t747 || [], e570 = e570 || [];
                for(var a368 = [], s295 = 0; s295 < i441; s295++){
                    var r256 = {
                    };
                    r256.x = t747[s295] * Math.sin(e570[s295]), r256.y = -t747[s295] * Math.cos(e570[s295]), a368.push(r256);
                }
                return a368;
            }
        }
    ]), t732;
}(), Pt = function(t748) {
    n(i442, Ct);
    var e571 = d(i442);
    function i442(t749) {
        var s296;
        a(this, i442), (s296 = e571.call(this, t749)).ctx = t749, s296.w = t749.w, s296.animBeginArr = [
            0
        ], s296.animDur = 0;
        var r257 = s296.w;
        return s296.startAngle = r257.config.plotOptions.radialBar.startAngle, s296.endAngle = r257.config.plotOptions.radialBar.endAngle, s296.totalAngle = Math.abs(r257.config.plotOptions.radialBar.endAngle - r257.config.plotOptions.radialBar.startAngle), s296.trackStartAngle = r257.config.plotOptions.radialBar.track.startAngle, s296.trackEndAngle = r257.config.plotOptions.radialBar.track.endAngle, s296.donutDataLabels = s296.w.config.plotOptions.radialBar.dataLabels, s296.radialDataLabels = s296.donutDataLabels, s296.trackStartAngle || (s296.trackStartAngle = s296.startAngle), s296.trackEndAngle || (s296.trackEndAngle = s296.endAngle), 360 === s296.endAngle && (s296.endAngle = 359.99), s296.margin = parseInt(r257.config.plotOptions.radialBar.track.margin, 10), s296;
    }
    return r(i442, [
        {
            key: "draw",
            value: function(t750) {
                var e572 = this.w, i443 = new m(this.ctx), a369 = i443.group({
                    class: "apexcharts-radialbar"
                });
                if (e572.globals.noData) return a369;
                var s297 = i443.group(), r258 = this.defaultSize / 2, o227 = e572.globals.gridWidth / 2, n197 = this.defaultSize / 2.05;
                e572.config.chart.sparkline.enabled || (n197 = n197 - e572.config.stroke.width - e572.config.chart.dropShadow.blur);
                var l166 = e572.globals.fill.colors;
                if (e572.config.plotOptions.radialBar.track.show) {
                    var h136 = this.drawTracks({
                        size: n197,
                        centerX: o227,
                        centerY: r258,
                        colorArr: l166,
                        series: t750
                    });
                    s297.add(h136);
                }
                var c123 = this.drawArcs({
                    size: n197,
                    centerX: o227,
                    centerY: r258,
                    colorArr: l166,
                    series: t750
                }), d110 = 360;
                e572.config.plotOptions.radialBar.startAngle < 0 && (d110 = this.totalAngle);
                var g90 = (360 - d110) / 360;
                if (e572.globals.radialSize = n197 - n197 * g90, this.radialDataLabels.value.show) {
                    var u74 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
                    e572.globals.radialSize += u74 * g90;
                }
                return s297.add(c123.g), "front" === e572.config.plotOptions.radialBar.hollow.position && (c123.g.add(c123.elHollow), c123.dataLabels && c123.g.add(c123.dataLabels)), a369.add(s297), a369;
            }
        },
        {
            key: "drawTracks",
            value: function(t751) {
                var e573 = this.w, i444 = new m(this.ctx), a370 = i444.group({
                    class: "apexcharts-tracks"
                }), s298 = new v(this.ctx), r259 = new T(this.ctx), o228 = this.getStrokeWidth(t751);
                t751.size = t751.size - o228 / 2;
                for(var n198 = 0; n198 < t751.series.length; n198++){
                    var l167 = i444.group({
                        class: "apexcharts-radialbar-track apexcharts-track"
                    });
                    a370.add(l167), l167.attr({
                        rel: n198 + 1
                    }), t751.size = t751.size - o228 - this.margin;
                    var h137 = e573.config.plotOptions.radialBar.track, c124 = r259.fillPath({
                        seriesNumber: 0,
                        size: t751.size,
                        fillColors: Array.isArray(h137.background) ? h137.background[n198] : h137.background,
                        solid: !0
                    }), d111 = this.trackStartAngle, g91 = this.trackEndAngle;
                    Math.abs(g91) + Math.abs(d111) >= 360 && (g91 = 360 - Math.abs(this.startAngle) - 0.1);
                    var u75 = i444.drawPath({
                        d: "",
                        stroke: c124,
                        strokeWidth: o228 * parseInt(h137.strokeWidth, 10) / 100,
                        fill: "none",
                        strokeOpacity: h137.opacity,
                        classes: "apexcharts-radialbar-area"
                    });
                    if (h137.dropShadow.enabled) {
                        var f63 = h137.dropShadow;
                        s298.dropShadow(u75, f63);
                    }
                    l167.add(u75), u75.attr("id", "apexcharts-radialbarTrack-" + n198), this.animatePaths(u75, {
                        centerX: t751.centerX,
                        centerY: t751.centerY,
                        endAngle: g91,
                        startAngle: d111,
                        size: t751.size,
                        i: n198,
                        totalItems: 2,
                        animBeginArr: 0,
                        dur: 0,
                        isTrack: !0,
                        easing: e573.globals.easing
                    });
                }
                return a370;
            }
        },
        {
            key: "drawArcs",
            value: function(t752) {
                var e574 = this.w, i445 = new m(this.ctx), a371 = new T(this.ctx), s299 = new v(this.ctx), r260 = i445.group(), o229 = this.getStrokeWidth(t752);
                t752.size = t752.size - o229 / 2;
                var n199 = e574.config.plotOptions.radialBar.hollow.background, l168 = t752.size - o229 * t752.series.length - this.margin * t752.series.length - o229 * parseInt(e574.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h138 = l168 - e574.config.plotOptions.radialBar.hollow.margin;
                void 0 !== e574.config.plotOptions.radialBar.hollow.image && (n199 = this.drawHollowImage(t752, r260, l168, n199));
                var c125 = this.drawHollow({
                    size: h138,
                    centerX: t752.centerX,
                    centerY: t752.centerY,
                    fill: n199 || "transparent"
                });
                if (e574.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                    var d112 = e574.config.plotOptions.radialBar.hollow.dropShadow;
                    s299.dropShadow(c125, d112);
                }
                var g92 = 1;
                !this.radialDataLabels.total.show && e574.globals.series.length > 1 && (g92 = 0);
                var u76 = null;
                this.radialDataLabels.show && (u76 = this.renderInnerDataLabels(this.radialDataLabels, {
                    hollowSize: l168,
                    centerX: t752.centerX,
                    centerY: t752.centerY,
                    opacity: g92
                })), "back" === e574.config.plotOptions.radialBar.hollow.position && (r260.add(c125), u76 && r260.add(u76));
                var f64 = !1;
                e574.config.plotOptions.radialBar.inverseOrder && (f64 = !0);
                for(var p59 = f64 ? t752.series.length - 1 : 0; f64 ? p59 >= 0 : p59 < t752.series.length; f64 ? p59-- : p59++){
                    var b48 = i445.group({
                        class: "apexcharts-series apexcharts-radial-series",
                        seriesName: x.escapeString(e574.globals.seriesNames[p59])
                    });
                    r260.add(b48), b48.attr({
                        rel: p59 + 1,
                        "data:realIndex": p59
                    }), this.ctx.series.addCollapsedClassToSeries(b48, p59), t752.size = t752.size - o229 - this.margin;
                    var y37 = a371.fillPath({
                        seriesNumber: p59,
                        size: t752.size,
                        value: t752.series[p59]
                    }), w29 = this.startAngle, k24 = void 0, A21 = x.negToZero(t752.series[p59] > 100 ? 100 : t752.series[p59]) / 100, S16 = Math.round(this.totalAngle * A21) + this.startAngle, C14 = void 0;
                    e574.globals.dataChanged && (k24 = this.startAngle, C14 = Math.round(this.totalAngle * x.negToZero(e574.globals.previousPaths[p59]) / 100) + k24), Math.abs(S16) + Math.abs(w29) >= 360 && (S16 -= 0.01), Math.abs(C14) + Math.abs(k24) >= 360 && (C14 -= 0.01);
                    var L13 = S16 - w29, P12 = Array.isArray(e574.config.stroke.dashArray) ? e574.config.stroke.dashArray[p59] : e574.config.stroke.dashArray, M10 = i445.drawPath({
                        d: "",
                        stroke: y37,
                        strokeWidth: o229,
                        fill: "none",
                        fillOpacity: e574.config.fill.opacity,
                        classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + p59,
                        strokeDashArray: P12
                    });
                    if (m.setAttrs(M10.node, {
                        "data:angle": L13,
                        "data:value": t752.series[p59]
                    }), e574.config.chart.dropShadow.enabled) {
                        var I7 = e574.config.chart.dropShadow;
                        s299.dropShadow(M10, I7, p59);
                    }
                    s299.setSelectionFilter(M10, 0, p59), this.addListeners(M10, this.radialDataLabels), b48.add(M10), M10.attr({
                        index: 0,
                        j: p59
                    });
                    var z5 = 0;
                    !this.initialAnim || e574.globals.resized || e574.globals.dataChanged || (z5 = e574.config.chart.animations.speed), e574.globals.dataChanged && (z5 = e574.config.chart.animations.dynamicAnimation.speed), this.animDur = z5 / (1.2 * t752.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(M10, {
                        centerX: t752.centerX,
                        centerY: t752.centerY,
                        endAngle: S16,
                        startAngle: w29,
                        prevEndAngle: C14,
                        prevStartAngle: k24,
                        size: t752.size,
                        i: p59,
                        totalItems: 2,
                        animBeginArr: this.animBeginArr,
                        dur: z5,
                        shouldSetPrevPaths: !0,
                        easing: e574.globals.easing
                    });
                }
                return {
                    g: r260,
                    elHollow: c125,
                    dataLabels: u76
                };
            }
        },
        {
            key: "drawHollow",
            value: function(t753) {
                var e575 = new m(this.ctx).drawCircle(2 * t753.size);
                return e575.attr({
                    class: "apexcharts-radialbar-hollow",
                    cx: t753.centerX,
                    cy: t753.centerY,
                    r: t753.size,
                    fill: t753.fill
                }), e575;
            }
        },
        {
            key: "drawHollowImage",
            value: function(t754, e576, i446, a372) {
                var s300 = this.w, r261 = new T(this.ctx), o230 = x.randomId(), n200 = s300.config.plotOptions.radialBar.hollow.image;
                if (s300.config.plotOptions.radialBar.hollow.imageClipped) r261.clippedImgArea({
                    width: i446,
                    height: i446,
                    image: n200,
                    patternID: "pattern".concat(s300.globals.cuid).concat(o230)
                }), a372 = "url(#pattern".concat(s300.globals.cuid).concat(o230, ")");
                else {
                    var l169 = s300.config.plotOptions.radialBar.hollow.imageWidth, h139 = s300.config.plotOptions.radialBar.hollow.imageHeight;
                    if (void 0 === l169 && void 0 === h139) {
                        var c126 = s300.globals.dom.Paper.image(n200).loaded(function(e577) {
                            this.move(t754.centerX - e577.width / 2 + s300.config.plotOptions.radialBar.hollow.imageOffsetX, t754.centerY - e577.height / 2 + s300.config.plotOptions.radialBar.hollow.imageOffsetY);
                        });
                        e576.add(c126);
                    } else {
                        var d113 = s300.globals.dom.Paper.image(n200).loaded(function(e) {
                            this.move(t754.centerX - l169 / 2 + s300.config.plotOptions.radialBar.hollow.imageOffsetX, t754.centerY - h139 / 2 + s300.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l169, h139);
                        });
                        e576.add(d113);
                    }
                }
                return a372;
            }
        },
        {
            key: "getStrokeWidth",
            value: function(t755) {
                var e578 = this.w;
                return t755.size * (100 - parseInt(e578.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t755.series.length + 1) - this.margin;
            }
        }
    ]), i442;
}(), Tt = function() {
    function t756(e579) {
        a(this, t756), this.w = e579.w, this.lineCtx = e579;
    }
    return r(t756, [
        {
            key: "sameValueSeriesFix",
            value: function(t757, e580) {
                var i447 = this.w;
                if ("line" === i447.config.chart.type && ("gradient" === i447.config.fill.type || "gradient" === i447.config.fill.type[t757]) && new k(this.lineCtx.ctx, i447).seriesHaveSameValues(t757)) {
                    var a373 = e580[t757].slice();
                    a373[a373.length - 1] = a373[a373.length - 1] + 0.000001, e580[t757] = a373;
                }
                return e580;
            }
        },
        {
            key: "calculatePoints",
            value: function(t758) {
                var e581 = t758.series, i = t758.realIndex, a374 = t758.x, s301 = t758.y, r = t758.i, o231 = t758.j, n201 = t758.prevY, l170 = this.w, h140 = [], c127 = [];
                if (0 === o231) {
                    var d114 = this.lineCtx.categoryAxisCorrection + l170.config.markers.offsetX;
                    l170.globals.isXNumeric && (d114 = (l170.globals.seriesX[i][0] - l170.globals.minX) / this.lineCtx.xRatio + l170.config.markers.offsetX), h140.push(d114), c127.push(x.isNumber(e581[r][0]) ? n201 + l170.config.markers.offsetY : null), h140.push(a374 + l170.config.markers.offsetX), c127.push(x.isNumber(e581[r][o231 + 1]) ? s301 + l170.config.markers.offsetY : null);
                } else h140.push(a374 + l170.config.markers.offsetX), c127.push(x.isNumber(e581[r][o231 + 1]) ? s301 + l170.config.markers.offsetY : null);
                return {
                    x: h140,
                    y: c127
                };
            }
        },
        {
            key: "checkPreviousPaths",
            value: function(t759) {
                for(var e582 = t759.pathFromLine, i448 = t759.pathFromArea, a375 = t759.realIndex, s302 = this.w, r262 = 0; r262 < s302.globals.previousPaths.length; r262++){
                    var o232 = s302.globals.previousPaths[r262];
                    ("line" === o232.type || "area" === o232.type) && o232.paths.length > 0 && parseInt(o232.realIndex, 10) === parseInt(a375, 10) && ("line" === o232.type ? (this.lineCtx.appendPathFrom = !1, e582 = s302.globals.previousPaths[r262].paths[0].d) : "area" === o232.type && (this.lineCtx.appendPathFrom = !1, i448 = s302.globals.previousPaths[r262].paths[0].d, s302.config.stroke.show && s302.globals.previousPaths[r262].paths[1] && (e582 = s302.globals.previousPaths[r262].paths[1].d)));
                }
                return {
                    pathFromLine: e582,
                    pathFromArea: i448
                };
            }
        },
        {
            key: "determineFirstPrevY",
            value: function(t760) {
                var e583 = t760.i, i449 = t760.series, a376 = t760.prevY, s303 = t760.lineYPosition, r263 = this.w;
                if (void 0 !== i449[e583][0]) a376 = (s303 = r263.config.chart.stacked && e583 > 0 ? this.lineCtx.prevSeriesY[e583 - 1][0] : this.lineCtx.zeroY) - i449[e583][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? i449[e583][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0);
                else if (r263.config.chart.stacked && e583 > 0 && void 0 === i449[e583][0]) {
                    for(var o233 = e583 - 1; o233 >= 0; o233--)if (null !== i449[o233][0] && void 0 !== i449[o233][0]) {
                        a376 = s303 = this.lineCtx.prevSeriesY[o233][0];
                        break;
                    }
                }
                return {
                    prevY: a376,
                    lineYPosition: s303
                };
            }
        }
    ]), t756;
}(), Mt = function() {
    function t761(e584, i450, s304) {
        a(this, t761), this.ctx = e584, this.w = e584.w, this.xyRatios = i450, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || s304, this.scatter = new I(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Tt(this), this.markers = new M(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    return r(t761, [
        {
            key: "draw",
            value: function(t762, e585, i451) {
                var a377 = this.w, s305 = new m(this.ctx), r264 = a377.globals.comboCharts ? e585 : a377.config.chart.type, o234 = s305.group({
                    class: "apexcharts-".concat(r264, "-series apexcharts-plot-series")
                }), n202 = new k(this.ctx, a377);
                this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t762 = n202.getLogSeries(t762), this.yRatio = n202.getLogYRatios(this.yRatio);
                for(var l171 = [], h141 = 0; h141 < t762.length; h141++){
                    t762 = this.lineHelpers.sameValueSeriesFix(h141, t762);
                    var c128 = a377.globals.comboCharts ? i451[h141] : h141;
                    this._initSerieVariables(t762, h141, c128);
                    var d115 = [], g93 = [], u77 = a377.globals.padHorizontal + this.categoryAxisCorrection;
                    this.ctx.series.addCollapsedClassToSeries(this.elSeries, c128), a377.globals.isXNumeric && a377.globals.seriesX.length > 0 && (u77 = (a377.globals.seriesX[c128][0] - a377.globals.minX) / this.xRatio), g93.push(u77);
                    var f65, p60 = u77, x37 = p60, b49 = this.zeroY;
                    b49 = this.lineHelpers.determineFirstPrevY({
                        i: h141,
                        series: t762,
                        prevY: b49,
                        lineYPosition: 0
                    }).prevY, d115.push(b49), f65 = b49;
                    var v33 = this._calculatePathsFrom({
                        series: t762,
                        i: h141,
                        realIndex: c128,
                        prevX: x37,
                        prevY: b49
                    }), y38 = this._iterateOverDataPoints({
                        series: t762,
                        realIndex: c128,
                        i: h141,
                        x: u77,
                        y: 1,
                        pX: p60,
                        pY: f65,
                        pathsFrom: v33,
                        linePaths: [],
                        areaPaths: [],
                        seriesIndex: i451,
                        lineYPosition: 0,
                        xArrj: g93,
                        yArrj: d115
                    });
                    this._handlePaths({
                        type: r264,
                        realIndex: c128,
                        i: h141,
                        paths: y38
                    }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), l171.push(this.elSeries);
                }
                if (a377.config.chart.stacked) for(var w30 = l171.length; w30 > 0; w30--)o234.add(l171[w30 - 1]);
                else for(var A22 = 0; A22 < l171.length; A22++)o234.add(l171[A22]);
                return o234;
            }
        },
        {
            key: "_initSerieVariables",
            value: function(t763, e586, i452) {
                var a378 = this.w, s306 = new m(this.ctx);
                this.xDivision = a378.globals.gridWidth / (a378.globals.dataPoints - ("on" === a378.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a378.config.stroke.width) ? a378.config.stroke.width[i452] : a378.config.stroke.width, this.yRatio.length > 1 && (this.yaxisIndex = i452), this.isReversed = a378.config.yaxis[this.yaxisIndex] && a378.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a378.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? a378.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a378.globals.gridHeight || "end" === a378.config.plotOptions.area.fillTo) && (this.areaBottomY = a378.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s306.group({
                    class: "apexcharts-series",
                    seriesName: x.escapeString(a378.globals.seriesNames[i452])
                }), this.elPointsMain = s306.group({
                    class: "apexcharts-series-markers-wrap",
                    "data:realIndex": i452
                }), this.elDataLabelsWrap = s306.group({
                    class: "apexcharts-datalabels",
                    "data:realIndex": i452
                });
                var r265 = t763[e586].length === a378.globals.dataPoints;
                this.elSeries.attr({
                    "data:longestSeries": r265,
                    rel: e586 + 1,
                    "data:realIndex": i452
                }), this.appendPathFrom = !0;
            }
        },
        {
            key: "_calculatePathsFrom",
            value: function(t764) {
                var e587, i453, a379, s307, r266 = t764.series, o = t764.i, n203 = t764.realIndex, l172 = t764.prevX, h142 = t764.prevY, c129 = this.w, d116 = new m(this.ctx);
                if (null === r266[o][0]) {
                    for(var g94 = 0; g94 < r266[o].length; g94++)if (null !== r266[o][g94]) {
                        l172 = this.xDivision * g94, h142 = this.zeroY - r266[o][g94] / this.yRatio[this.yaxisIndex], e587 = d116.move(l172, h142), i453 = d116.move(l172, this.areaBottomY);
                        break;
                    }
                } else e587 = d116.move(l172, h142), i453 = d116.move(l172, this.areaBottomY) + d116.line(l172, h142);
                if (a379 = d116.move(-1, this.zeroY) + d116.line(-1, this.zeroY), s307 = d116.move(-1, this.zeroY) + d116.line(-1, this.zeroY), c129.globals.previousPaths.length > 0) {
                    var u78 = this.lineHelpers.checkPreviousPaths({
                        pathFromLine: a379,
                        pathFromArea: s307,
                        realIndex: n203
                    });
                    a379 = u78.pathFromLine, s307 = u78.pathFromArea;
                }
                return {
                    prevX: l172,
                    prevY: h142,
                    linePath: e587,
                    areaPath: i453,
                    pathFromLine: a379,
                    pathFromArea: s307
                };
            }
        },
        {
            key: "_handlePaths",
            value: function(t765) {
                var i454 = t765.type, a380 = t765.realIndex, s308 = t765.i, r267 = t765.paths, o235 = this.w, n204 = new m(this.ctx), l173 = new T(this.ctx);
                this.prevSeriesY.push(r267.yArrj), o235.globals.seriesXvalues[a380] = r267.xArrj, o235.globals.seriesYvalues[a380] = r267.yArrj;
                var h143 = o235.config.forecastDataPoints;
                if (h143.count > 0) {
                    var c130 = o235.globals.seriesXvalues[a380][o235.globals.seriesXvalues[a380].length - h143.count - 1], d117 = n204.drawRect(c130, 0, o235.globals.gridWidth, o235.globals.gridHeight, 0);
                    o235.globals.dom.elForecastMask.appendChild(d117.node);
                    var g95 = n204.drawRect(0, 0, c130, o235.globals.gridHeight, 0);
                    o235.globals.dom.elNonForecastMask.appendChild(g95.node);
                }
                this.pointsChart || o235.globals.delayedElements.push({
                    el: this.elPointsMain.node,
                    index: a380
                });
                var u79 = {
                    i: s308,
                    realIndex: a380,
                    animationDelay: s308,
                    initialSpeed: o235.config.chart.animations.speed,
                    dataChangeSpeed: o235.config.chart.animations.dynamicAnimation.speed,
                    className: "apexcharts-".concat(i454)
                };
                if ("area" === i454) for(var f66 = l173.fillPath({
                    seriesNumber: a380
                }), p61 = 0; p61 < r267.areaPaths.length; p61++){
                    var x38 = n204.renderPaths(e(e({
                    }, u79), {
                    }, {
                        pathFrom: r267.pathFromArea,
                        pathTo: r267.areaPaths[p61],
                        stroke: "none",
                        strokeWidth: 0,
                        strokeLineCap: null,
                        fill: f66
                    }));
                    this.elSeries.add(x38);
                }
                if (o235.config.stroke.show && !this.pointsChart) {
                    var b50 = null;
                    b50 = "line" === i454 ? l173.fillPath({
                        seriesNumber: a380,
                        i: s308
                    }) : o235.globals.stroke.colors[a380];
                    for(var v34 = 0; v34 < r267.linePaths.length; v34++){
                        var y39 = e(e({
                        }, u79), {
                        }, {
                            pathFrom: r267.pathFromLine,
                            pathTo: r267.linePaths[v34],
                            stroke: b50,
                            strokeWidth: this.strokeWidth,
                            strokeLineCap: o235.config.stroke.lineCap,
                            fill: "none"
                        }), w31 = n204.renderPaths(y39);
                        if (this.elSeries.add(w31), h143.count > 0) {
                            var k25 = n204.renderPaths(y39);
                            k25.node.setAttribute("stroke-dasharray", h143.dashArray), h143.strokeWidth && k25.node.setAttribute("stroke-width", h143.strokeWidth), this.elSeries.add(k25), k25.attr("clip-path", "url(#forecastMask".concat(o235.globals.cuid, ")")), w31.attr("clip-path", "url(#nonForecastMask".concat(o235.globals.cuid, ")"));
                        }
                    }
                }
            }
        },
        {
            key: "_iterateOverDataPoints",
            value: function(t766) {
                for(var e588 = t766.series, i455 = t766.realIndex, a381 = t766.i, s309 = t766.x, r268 = t766.y, o236 = t766.pX, n205 = t766.pY, l174 = t766.pathsFrom, h144 = t766.linePaths, c131 = t766.areaPaths, d118 = t766.seriesIndex, g96 = t766.lineYPosition, u80 = t766.xArrj, f67 = t766.yArrj, p62 = this.w, b51 = new m(this.ctx), v35 = this.yRatio, y40 = l174.prevY, w32 = l174.linePath, k26 = l174.areaPath, A23 = l174.pathFromLine, S17 = l174.pathFromArea, C15 = x.isNumber(p62.globals.minYArr[i455]) ? p62.globals.minYArr[i455] : p62.globals.minY, L14 = p62.globals.dataPoints > 1 ? p62.globals.dataPoints - 1 : p62.globals.dataPoints, P13 = 0; P13 < L14; P13++){
                    var T8 = void 0 === e588[a381][P13 + 1] || null === e588[a381][P13 + 1];
                    if (p62.globals.isXNumeric) {
                        var M11 = p62.globals.seriesX[i455][P13 + 1];
                        void 0 === p62.globals.seriesX[i455][P13 + 1] && (M11 = p62.globals.seriesX[i455][L14 - 1]), s309 = (M11 - p62.globals.minX) / this.xRatio;
                    } else s309 += this.xDivision;
                    if (p62.config.chart.stacked) {
                        if (a381 > 0 && p62.globals.collapsedSeries.length < p62.config.series.length - 1) g96 = this.prevSeriesY[(function(t) {
                            for(var e = t, i = 0; i < p62.globals.series.length; i++)if (p62.globals.collapsedSeriesIndices.indexOf(t) > -1) {
                                e--;
                                break;
                            }
                            return e >= 0 ? e : 0;
                        })(a381 - 1)][P13 + 1];
                        else g96 = this.zeroY;
                    } else g96 = this.zeroY;
                    r268 = T8 ? g96 - C15 / v35[this.yaxisIndex] + 2 * (this.isReversed ? C15 / v35[this.yaxisIndex] : 0) : g96 - e588[a381][P13 + 1] / v35[this.yaxisIndex] + 2 * (this.isReversed ? e588[a381][P13 + 1] / v35[this.yaxisIndex] : 0), u80.push(s309), f67.push(r268);
                    var I8 = this.lineHelpers.calculatePoints({
                        series: e588,
                        x: s309,
                        y: r268,
                        realIndex: i455,
                        i: a381,
                        j: P13,
                        prevY: y40
                    }), z6 = this._createPaths({
                        series: e588,
                        i: a381,
                        realIndex: i455,
                        j: P13,
                        x: s309,
                        y: r268,
                        pX: o236,
                        pY: n205,
                        linePath: w32,
                        areaPath: k26,
                        linePaths: h144,
                        areaPaths: c131,
                        seriesIndex: d118
                    });
                    c131 = z6.areaPaths, h144 = z6.linePaths, o236 = z6.pX, n205 = z6.pY, k26 = z6.areaPath, w32 = z6.linePath, this.appendPathFrom && (A23 += b51.line(s309, this.zeroY), S17 += b51.line(s309, this.zeroY)), this.handleNullDataPoints(e588, I8, a381, P13, i455), this._handleMarkersAndLabels({
                        pointsPos: I8,
                        series: e588,
                        x: s309,
                        y: r268,
                        prevY: y40,
                        i: a381,
                        j: P13,
                        realIndex: i455
                    });
                }
                return {
                    yArrj: f67,
                    xArrj: u80,
                    pathFromArea: S17,
                    areaPaths: c131,
                    pathFromLine: A23,
                    linePaths: h144
                };
            }
        },
        {
            key: "_handleMarkersAndLabels",
            value: function(t767) {
                var e589 = t767.pointsPos;
                t767.series, t767.x, t767.y, t767.prevY;
                var i = t767.i, a382 = t767.j, s310 = t767.realIndex, r269 = this.w, o237 = new z(this.ctx);
                if (this.pointsChart) this.scatter.draw(this.elSeries, a382, {
                    realIndex: s310,
                    pointsPos: e589,
                    zRatio: this.zRatio,
                    elParent: this.elPointsMain
                });
                else {
                    r269.globals.series[i].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
                    var n206 = this.markers.plotChartMarkers(e589, s310, a382 + 1);
                    null !== n206 && this.elPointsMain.add(n206);
                }
                var l175 = o237.drawDataLabel(e589, s310, a382 + 1, null);
                null !== l175 && this.elDataLabelsWrap.add(l175);
            }
        },
        {
            key: "_createPaths",
            value: function(t768) {
                var e590 = t768.series, i = t768.i, a = t768.realIndex, s311 = t768.j, r270 = t768.x, o238 = t768.y, n207 = t768.pX, l176 = t768.pY, h145 = t768.linePath, c132 = t768.areaPath, d119 = t768.linePaths, g97 = t768.areaPaths, u81 = t768.seriesIndex, f68 = this.w, p63 = new m(this.ctx), x39 = f68.config.stroke.curve, b52 = this.areaBottomY;
                if (Array.isArray(f68.config.stroke.curve) && (x39 = Array.isArray(u81) ? f68.config.stroke.curve[u81[i]] : f68.config.stroke.curve[i]), "smooth" === x39) {
                    var v36 = 0.35 * (r270 - n207);
                    f68.globals.hasNullValues ? (null !== e590[i][s311] && (null !== e590[i][s311 + 1] ? (h145 = p63.move(n207, l176) + p63.curve(n207 + v36, l176, r270 - v36, o238, r270 + 1, o238), c132 = p63.move(n207 + 1, l176) + p63.curve(n207 + v36, l176, r270 - v36, o238, r270 + 1, o238) + p63.line(r270, b52) + p63.line(n207, b52) + "z") : (h145 = p63.move(n207, l176), c132 = p63.move(n207, l176) + "z")), d119.push(h145), g97.push(c132)) : (h145 += p63.curve(n207 + v36, l176, r270 - v36, o238, r270, o238), c132 += p63.curve(n207 + v36, l176, r270 - v36, o238, r270, o238)), n207 = r270, l176 = o238, s311 === e590[i].length - 2 && (c132 = c132 + p63.curve(n207, l176, r270, o238, r270, b52) + p63.move(r270, o238) + "z", f68.globals.hasNullValues || (d119.push(h145), g97.push(c132)));
                } else {
                    if (null === e590[i][s311 + 1]) {
                        h145 += p63.move(r270, o238);
                        var y41 = f68.globals.isXNumeric ? (f68.globals.seriesX[a][s311] - f68.globals.minX) / this.xRatio : r270 - this.xDivision;
                        c132 = c132 + p63.line(y41, b52) + p63.move(r270, o238) + "z";
                    }
                    null === e590[i][s311] && (h145 += p63.move(r270, o238), c132 += p63.move(r270, b52)), "stepline" === x39 ? (h145 = h145 + p63.line(r270, null, "H") + p63.line(null, o238, "V"), c132 = c132 + p63.line(r270, null, "H") + p63.line(null, o238, "V")) : "straight" === x39 && (h145 += p63.line(r270, o238), c132 += p63.line(r270, o238)), s311 === e590[i].length - 2 && (c132 = c132 + p63.line(r270, b52) + p63.move(r270, o238) + "z", d119.push(h145), g97.push(c132));
                }
                return {
                    linePaths: d119,
                    areaPaths: g97,
                    pX: n207,
                    pY: l176,
                    linePath: h145,
                    areaPath: c132
                };
            }
        },
        {
            key: "handleNullDataPoints",
            value: function(t769, e591, i, a383, s312) {
                var r271 = this.w;
                if (null === t769[i][a383] && r271.config.markers.showNullDataPoints || 1 === t769[i].length) {
                    var o239 = this.markers.plotChartMarkers(e591, s312, a383 + 1, this.strokeWidth - r271.config.markers.strokeWidth / 2, !0);
                    null !== o239 && this.elPointsMain.add(o239);
                }
            }
        }
    ]), t761;
}();
window.TreemapSquared = {
}, window.TreemapSquared.generate = (function() {
    function t770(e593, i457, a385, s314) {
        this.xoffset = e593, this.yoffset = i457, this.height = s314, this.width = a385, this.shortestEdge = function() {
            return Math.min(this.height, this.width);
        }, this.getCoordinates = function(t771) {
            var e594, i458 = [], a386 = this.xoffset, s315 = this.yoffset, o241 = r272(t771) / this.height, n208 = r272(t771) / this.width;
            if (this.width >= this.height) for(e594 = 0; e594 < t771.length; e594++)i458.push([
                a386,
                s315,
                a386 + o241,
                s315 + t771[e594] / o241
            ]), s315 += t771[e594] / o241;
            else for(e594 = 0; e594 < t771.length; e594++)i458.push([
                a386,
                s315,
                a386 + t771[e594] / n208,
                s315 + n208
            ]), a386 += t771[e594] / n208;
            return i458;
        }, this.cutArea = function(e595) {
            var i459;
            if (this.width >= this.height) {
                var a387 = e595 / this.height, s316 = this.width - a387;
                i459 = new t770(this.xoffset + a387, this.yoffset, s316, this.height);
            } else {
                var r273 = e595 / this.width, o242 = this.height - r273;
                i459 = new t770(this.xoffset, this.yoffset + r273, this.width, o242);
            }
            return i459;
        };
    }
    function e592(e596, a388, s317, o243, n209) {
        return o243 = void 0 === o243 ? 0 : o243, n209 = void 0 === n209 ? 0 : n209, (function(t772) {
            var e597, i460, a389 = [];
            for(e597 = 0; e597 < t772.length; e597++)for(i460 = 0; i460 < t772[e597].length; i460++)a389.push(t772[e597][i460]);
            return a389;
        })(i456(function(t773, e598) {
            var i461, a390 = [], s318 = e598 / r272(t773);
            for(i461 = 0; i461 < t773.length; i461++)a390[i461] = t773[i461] * s318;
            return a390;
        }(e596, a388 * s317), [], new t770(o243, n209, a388, s317), []));
    }
    function i456(t774, e599, s319, o244) {
        var n210, l177, h146;
        if (0 !== t774.length) return n210 = s319.shortestEdge(), (function(t775, e600, i462) {
            var s320;
            if (0 === t775.length) return !0;
            (s320 = t775.slice()).push(e600);
            var r274 = a384(t775, i462), o245 = a384(s320, i462);
            return r274 >= o245;
        })(e599, l177 = t774[0], n210) ? (e599.push(l177), i456(t774.slice(1), e599, s319, o244)) : (h146 = s319.cutArea(r272(e599), o244), o244.push(s319.getCoordinates(e599)), i456(t774, [], h146, o244)), o244;
        o244.push(s319.getCoordinates(e599));
    }
    function a384(t776, e601) {
        var i463 = Math.min.apply(Math, t776), a391 = Math.max.apply(Math, t776), s321 = r272(t776);
        return Math.max(Math.pow(e601, 2) * a391 / Math.pow(s321, 2), Math.pow(s321, 2) / (Math.pow(e601, 2) * i463));
    }
    function s313(t777) {
        return t777 && t777.constructor === Array;
    }
    function r272(t778) {
        var e602, i464 = 0;
        for(e602 = 0; e602 < t778.length; e602++)i464 += t778[e602];
        return i464;
    }
    function o240(t779) {
        var e603, i465 = 0;
        if (s313(t779[0])) for(e603 = 0; e603 < t779.length; e603++)i465 += o240(t779[e603]);
        else i465 = r272(t779);
        return i465;
    }
    return function t780(i466, a392, r275, n211, l178) {
        n211 = void 0 === n211 ? 0 : n211, l178 = void 0 === l178 ? 0 : l178;
        var h147, c133, d120 = [], g98 = [];
        if (s313(i466[0])) {
            for(c133 = 0; c133 < i466.length; c133++)d120[c133] = o240(i466[c133]);
            for(h147 = e592(d120, a392, r275, n211, l178), c133 = 0; c133 < i466.length; c133++)g98.push(t780(i466[c133], h147[c133][2] - h147[c133][0], h147[c133][3] - h147[c133][1], h147[c133][0], h147[c133][1]));
        } else g98 = e592(i466, a392, r275, n211, l178);
        return g98;
    };
})();
var It, zt, Et = function() {
    function t781(e604, i) {
        a(this, t781), this.ctx = e604, this.w = e604.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new kt(e604), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    return r(t781, [
        {
            key: "draw",
            value: function(t782) {
                var e605 = this, i467 = this.w, a393 = new m(this.ctx), s322 = new T(this.ctx), r276 = a393.group({
                    class: "apexcharts-treemap"
                });
                if (i467.globals.noData) return r276;
                var o246 = [];
                return t782.forEach(function(t783) {
                    var e606 = t783.map(function(t784) {
                        return Math.abs(t784);
                    });
                    o246.push(e606);
                }), this.negRange = this.helpers.checkColorRange(), i467.config.series.forEach(function(t785, i) {
                    t785.data.forEach(function(t786) {
                        Array.isArray(e605.labels[i]) || (e605.labels[i] = []), e605.labels[i].push(t786.x);
                    });
                }), window.TreemapSquared.generate(o246, i467.globals.gridWidth, i467.globals.gridHeight).forEach(function(o247, n212) {
                    var l179 = a393.group({
                        class: "apexcharts-series apexcharts-treemap-series",
                        seriesName: x.escapeString(i467.globals.seriesNames[n212]),
                        rel: n212 + 1,
                        "data:realIndex": n212
                    });
                    if (i467.config.chart.dropShadow.enabled) {
                        var h148 = i467.config.chart.dropShadow;
                        new v(e605.ctx).dropShadow(r276, h148, n212);
                    }
                    var c134 = a393.group({
                        class: "apexcharts-data-labels"
                    });
                    o247.forEach(function(r277, o248) {
                        var h149 = r277[0], c135 = r277[1], d121 = r277[2], g99 = r277[3], u82 = a393.drawRect(h149, c135, d121 - h149, g99 - c135, 0, "#fff", 1, e605.strokeWidth, i467.config.plotOptions.treemap.useFillColorAsStroke ? p64 : i467.globals.stroke.colors[n212]);
                        u82.attr({
                            cx: h149,
                            cy: c135,
                            index: n212,
                            i: n212,
                            j: o248,
                            width: d121 - h149,
                            height: g99 - c135
                        });
                        var f69 = e605.helpers.getShadeColor(i467.config.chart.type, n212, o248, e605.negRange), p64 = f69.color;
                        void 0 !== i467.config.series[n212].data[o248] && i467.config.series[n212].data[o248].fillColor && (p64 = i467.config.series[n212].data[o248].fillColor);
                        var x40 = s322.fillPath({
                            color: p64,
                            seriesNumber: n212,
                            dataPointIndex: o248
                        });
                        u82.node.classList.add("apexcharts-treemap-rect"), u82.attr({
                            fill: x40
                        }), e605.helpers.addListeners(u82);
                        var b53 = {
                            x: h149 + (d121 - h149) / 2,
                            y: c135 + (g99 - c135) / 2,
                            width: 0,
                            height: 0
                        }, v37 = {
                            x: h149,
                            y: c135,
                            width: d121 - h149,
                            height: g99 - c135
                        };
                        if (i467.config.chart.animations.enabled && !i467.globals.dataChanged) {
                            var m17 = 1;
                            i467.globals.resized || (m17 = i467.config.chart.animations.speed), e605.animateTreemap(u82, b53, v37, m17);
                        }
                        if (i467.globals.dataChanged) {
                            var y42 = 1;
                            e605.dynamicAnim.enabled && i467.globals.shouldAnimate && (y42 = e605.dynamicAnim.speed, i467.globals.previousPaths[n212] && i467.globals.previousPaths[n212][o248] && i467.globals.previousPaths[n212][o248].rect && (b53 = i467.globals.previousPaths[n212][o248].rect), e605.animateTreemap(u82, b53, v37, y42));
                        }
                        var w33 = e605.getFontSize(r277), k27 = i467.config.dataLabels.formatter(e605.labels[n212][o248], {
                            value: i467.globals.series[n212][o248],
                            seriesIndex: n212,
                            dataPointIndex: o248,
                            w: i467
                        }), A24 = e605.helpers.calculateDataLabels({
                            text: k27,
                            x: (h149 + d121) / 2,
                            y: (c135 + g99) / 2 + e605.strokeWidth / 2 + w33 / 3,
                            i: n212,
                            j: o248,
                            colorProps: f69,
                            fontSize: w33,
                            series: t782
                        });
                        i467.config.dataLabels.enabled && A24 && e605.rotateToFitLabel(A24, k27, h149, c135, d121, g99), l179.add(u82), null !== A24 && l179.add(A24);
                    }), l179.add(c134), r276.add(l179);
                }), r276;
            }
        },
        {
            key: "getFontSize",
            value: function(t787) {
                var e607 = this.w;
                var i468, a394, s323, r278, o249 = function t788(e608) {
                    var i469, a395 = 0;
                    if (Array.isArray(e608[0])) for(i469 = 0; i469 < e608.length; i469++)a395 += t788(e608[i469]);
                    else for(i469 = 0; i469 < e608.length; i469++)a395 += e608[i469].length;
                    return a395;
                }(this.labels) / function t789(e609) {
                    var i470, a396 = 0;
                    if (Array.isArray(e609[0])) for(i470 = 0; i470 < e609.length; i470++)a396 += t789(e609[i470]);
                    else for(i470 = 0; i470 < e609.length; i470++)a396 += 1;
                    return a396;
                }(this.labels);
                return i468 = t787[2] - t787[0], a394 = t787[3] - t787[1], s323 = i468 * a394, r278 = Math.pow(s323, 0.5), Math.min(r278 / o249, parseInt(e607.config.dataLabels.style.fontSize, 10));
            }
        },
        {
            key: "rotateToFitLabel",
            value: function(t790, e610, i471, a397, s324, r279) {
                var o250 = new m(this.ctx), n213 = o250.getTextRects(e610);
                if (n213.width + 5 > s324 - i471 && n213.width <= r279 - a397) {
                    var l180 = o250.rotateAroundCenter(t790.node);
                    t790.node.setAttribute("transform", "rotate(-90 ".concat(l180.x, " ").concat(l180.y, ")"));
                }
            }
        },
        {
            key: "animateTreemap",
            value: function(t791, e611, i472, a398) {
                var s325 = new b(this.ctx);
                s325.animateRect(t791, {
                    x: e611.x,
                    y: e611.y,
                    width: e611.width,
                    height: e611.height
                }, {
                    x: i472.x,
                    y: i472.y,
                    width: i472.width,
                    height: i472.height
                }, a398, function() {
                    s325.animationCompleted(t791);
                });
            }
        }
    ]), t781;
}(), Xt = function() {
    function t792(e612) {
        a(this, t792), this.ctx = e612, this.w = e612.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    return r(t792, [
        {
            key: "calculateTimeScaleTicks",
            value: function(t793, i473) {
                var a399 = this, s326 = this.w;
                if (s326.globals.allSeriesCollapsed) return s326.globals.labels = [], s326.globals.timescaleLabels = [], [];
                var r280 = new R(this.ctx), o251 = (i473 - t793) / 86400000;
                this.determineInterval(o251), s326.globals.disableZoomIn = !1, s326.globals.disableZoomOut = !1, o251 < 0.00011574074074074075 ? s326.globals.disableZoomIn = !0 : o251 > 50000 && (s326.globals.disableZoomOut = !0);
                var n214 = r280.getTimeUnitsfromTimestamp(t793, i473, this.utc), l181 = s326.globals.gridWidth / o251, h150 = l181 / 24, c136 = h150 / 60, d122 = c136 / 60, g100 = Math.floor(24 * o251), u83 = Math.floor(1440 * o251), f70 = Math.floor(86400 * o251), p65 = Math.floor(o251), x41 = Math.floor(o251 / 30), b54 = Math.floor(o251 / 365), v38 = {
                    minMillisecond: n214.minMillisecond,
                    minSecond: n214.minSecond,
                    minMinute: n214.minMinute,
                    minHour: n214.minHour,
                    minDate: n214.minDate,
                    minMonth: n214.minMonth,
                    minYear: n214.minYear
                }, m18 = {
                    firstVal: v38,
                    currentMillisecond: v38.minMillisecond,
                    currentSecond: v38.minSecond,
                    currentMinute: v38.minMinute,
                    currentHour: v38.minHour,
                    currentMonthDate: v38.minDate,
                    currentDate: v38.minDate,
                    currentMonth: v38.minMonth,
                    currentYear: v38.minYear,
                    daysWidthOnXAxis: l181,
                    hoursWidthOnXAxis: h150,
                    minutesWidthOnXAxis: c136,
                    secondsWidthOnXAxis: d122,
                    numberOfSeconds: f70,
                    numberOfMinutes: u83,
                    numberOfHours: g100,
                    numberOfDays: p65,
                    numberOfMonths: x41,
                    numberOfYears: b54
                };
                switch(this.tickInterval){
                    case "years":
                        this.generateYearScale(m18);
                        break;
                    case "months":
                    case "half_year":
                        this.generateMonthScale(m18);
                        break;
                    case "months_days":
                    case "months_fortnight":
                    case "days":
                    case "week_days":
                        this.generateDayScale(m18);
                        break;
                    case "hours":
                        this.generateHourScale(m18);
                        break;
                    case "minutes_fives":
                    case "minutes":
                        this.generateMinuteScale(m18);
                        break;
                    case "seconds_tens":
                    case "seconds_fives":
                    case "seconds":
                        this.generateSecondScale(m18);
                }
                var y43 = this.timeScaleArray.map(function(t794) {
                    var i474 = {
                        position: t794.position,
                        unit: t794.unit,
                        year: t794.year,
                        day: t794.day ? t794.day : 1,
                        hour: t794.hour ? t794.hour : 0,
                        month: t794.month + 1
                    };
                    return "month" === t794.unit ? e(e({
                    }, i474), {
                    }, {
                        day: 1,
                        value: t794.value + 1
                    }) : "day" === t794.unit || "hour" === t794.unit ? e(e({
                    }, i474), {
                    }, {
                        value: t794.value
                    }) : "minute" === t794.unit ? e(e({
                    }, i474), {
                    }, {
                        value: t794.value,
                        minute: t794.value
                    }) : "second" === t794.unit ? e(e({
                    }, i474), {
                    }, {
                        value: t794.value,
                        minute: t794.minute,
                        second: t794.second
                    }) : t794;
                });
                return y43.filter(function(t795) {
                    var e613 = 1, i475 = Math.ceil(s326.globals.gridWidth / 120), r281 = t795.value;
                    void 0 !== s326.config.xaxis.tickAmount && (i475 = s326.config.xaxis.tickAmount), y43.length > i475 && (e613 = Math.floor(y43.length / i475));
                    var o252 = !1, n215 = !1;
                    switch(a399.tickInterval){
                        case "years":
                            "year" === t795.unit && (o252 = !0);
                            break;
                        case "half_year":
                            e613 = 7, "year" === t795.unit && (o252 = !0);
                            break;
                        case "months":
                            e613 = 1, "year" === t795.unit && (o252 = !0);
                            break;
                        case "months_fortnight":
                            e613 = 15, "year" !== t795.unit && "month" !== t795.unit || (o252 = !0), 30 === r281 && (n215 = !0);
                            break;
                        case "months_days":
                            e613 = 10, "month" === t795.unit && (o252 = !0), 30 === r281 && (n215 = !0);
                            break;
                        case "week_days":
                            e613 = 8, "month" === t795.unit && (o252 = !0);
                            break;
                        case "days":
                            e613 = 1, "month" === t795.unit && (o252 = !0);
                            break;
                        case "hours":
                            "day" === t795.unit && (o252 = !0);
                            break;
                        case "minutes_fives":
                            r281 % 5 != 0 && (n215 = !0);
                            break;
                        case "seconds_tens":
                            r281 % 10 != 0 && (n215 = !0);
                            break;
                        case "seconds_fives":
                            r281 % 5 != 0 && (n215 = !0);
                    }
                    if ("hours" === a399.tickInterval || "minutes_fives" === a399.tickInterval || "seconds_tens" === a399.tickInterval || "seconds_fives" === a399.tickInterval) {
                        if (!n215) return !0;
                    } else if ((r281 % e613 == 0 || o252) && !n215) return !0;
                });
            }
        },
        {
            key: "recalcDimensionsBasedOnFormat",
            value: function(t796, e) {
                var i476 = this.w, a400 = this.formatDates(t796), s327 = this.removeOverlappingTS(a400);
                i476.globals.timescaleLabels = s327.slice(), new lt(this.ctx).plotCoords();
            }
        },
        {
            key: "determineInterval",
            value: function(t797) {
                var e614 = 24 * t797, i477 = 60 * e614;
                switch(!0){
                    case t797 / 365 > 5:
                        this.tickInterval = "years";
                        break;
                    case t797 > 800:
                        this.tickInterval = "half_year";
                        break;
                    case t797 > 180:
                        this.tickInterval = "months";
                        break;
                    case t797 > 90:
                        this.tickInterval = "months_fortnight";
                        break;
                    case t797 > 60:
                        this.tickInterval = "months_days";
                        break;
                    case t797 > 30:
                        this.tickInterval = "week_days";
                        break;
                    case t797 > 2:
                        this.tickInterval = "days";
                        break;
                    case e614 > 2.4:
                        this.tickInterval = "hours";
                        break;
                    case i477 > 15:
                        this.tickInterval = "minutes_fives";
                        break;
                    case i477 > 5:
                        this.tickInterval = "minutes";
                        break;
                    case i477 > 1:
                        this.tickInterval = "seconds_tens";
                        break;
                    case 60 * i477 > 20:
                        this.tickInterval = "seconds_fives";
                        break;
                    default:
                        this.tickInterval = "seconds";
                }
            }
        },
        {
            key: "generateYearScale",
            value: function(t798) {
                var e615 = t798.firstVal, i478 = t798.currentMonth, a401 = t798.currentYear, s328 = t798.daysWidthOnXAxis, r282 = t798.numberOfYears, o253 = e615.minYear, n216 = 0, l182 = new R(this.ctx), h151 = "year";
                if (e615.minDate > 1 || e615.minMonth > 0) {
                    var c137 = l182.determineRemainingDaysOfYear(e615.minYear, e615.minMonth, e615.minDate);
                    n216 = (l182.determineDaysOfYear(e615.minYear) - c137 + 1) * s328, o253 = e615.minYear + 1, this.timeScaleArray.push({
                        position: n216,
                        value: o253,
                        unit: h151,
                        year: o253,
                        month: x.monthMod(i478 + 1)
                    });
                } else 1 === e615.minDate && 0 === e615.minMonth && this.timeScaleArray.push({
                    position: n216,
                    value: o253,
                    unit: h151,
                    year: a401,
                    month: x.monthMod(i478 + 1)
                });
                for(var d123 = o253, g101 = n216, u84 = 0; u84 < r282; u84++)d123++, g101 = l182.determineDaysOfYear(d123 - 1) * s328 + g101, this.timeScaleArray.push({
                    position: g101,
                    value: d123,
                    unit: h151,
                    year: d123,
                    month: 1
                });
            }
        },
        {
            key: "generateMonthScale",
            value: function(t799) {
                var e616 = t799.firstVal, i479 = t799.currentMonthDate, a402 = t799.currentMonth, s329 = t799.currentYear, r283 = t799.daysWidthOnXAxis, o254 = t799.numberOfMonths, n217 = a402, l183 = 0, h152 = new R(this.ctx), c138 = "month", d124 = 0;
                if (e616.minDate > 1) {
                    l183 = (h152.determineDaysOfMonths(a402 + 1, e616.minYear) - i479 + 1) * r283, n217 = x.monthMod(a402 + 1);
                    var g102 = s329 + d124, u85 = x.monthMod(n217), f71 = n217;
                    0 === n217 && (c138 = "year", f71 = g102, u85 = 1, g102 += d124 += 1), this.timeScaleArray.push({
                        position: l183,
                        value: f71,
                        unit: c138,
                        year: g102,
                        month: u85
                    });
                } else this.timeScaleArray.push({
                    position: l183,
                    value: n217,
                    unit: c138,
                    year: s329,
                    month: x.monthMod(a402)
                });
                for(var p66 = n217 + 1, b55 = l183, v39 = 0, m19 = 1; v39 < o254; v39++, m19++){
                    0 === (p66 = x.monthMod(p66)) ? (c138 = "year", d124 += 1) : c138 = "month";
                    var y44 = this._getYear(s329, p66, d124);
                    b55 = h152.determineDaysOfMonths(p66, y44) * r283 + b55;
                    var w34 = 0 === p66 ? y44 : p66;
                    this.timeScaleArray.push({
                        position: b55,
                        value: w34,
                        unit: c138,
                        year: y44,
                        month: 0 === p66 ? 1 : p66
                    }), p66++;
                }
            }
        },
        {
            key: "generateDayScale",
            value: function(t800) {
                var e617 = t800.firstVal, i480 = t800.currentMonth, a403 = t800.currentYear, s330 = t800.hoursWidthOnXAxis, r284 = t800.numberOfDays, o255 = new R(this.ctx), n218 = "day", l184 = e617.minDate + 1, h153 = l184, c139 = function(t801, e618, i481) {
                    return t801 > o255.determineDaysOfMonths(e618 + 1, i481) ? (h153 = 1, n218 = "month", g103 = e618 += 1, e618) : e618;
                }, d125 = (24 - e617.minHour) * s330, g103 = l184, u86 = c139(h153, i480, a403);
                0 === e617.minHour && 1 === e617.minDate ? (d125 = 0, g103 = x.monthMod(e617.minMonth), n218 = "month", h153 = e617.minDate, r284++) : 1 !== e617.minDate && 0 === e617.minHour && 0 === e617.minMinute && (d125 = 0, l184 = e617.minDate, g103 = l184, u86 = c139(h153 = l184, i480, a403)), this.timeScaleArray.push({
                    position: d125,
                    value: g103,
                    unit: n218,
                    year: this._getYear(a403, u86, 0),
                    month: x.monthMod(u86),
                    day: h153
                });
                for(var f72 = d125, p67 = 0; p67 < r284; p67++){
                    n218 = "day", u86 = c139(h153 += 1, u86, this._getYear(a403, u86, 0));
                    var b56 = this._getYear(a403, u86, 0);
                    f72 = 24 * s330 + f72;
                    var v40 = 1 === h153 ? x.monthMod(u86) : h153;
                    this.timeScaleArray.push({
                        position: f72,
                        value: v40,
                        unit: n218,
                        year: b56,
                        month: x.monthMod(u86),
                        day: v40
                    });
                }
            }
        },
        {
            key: "generateHourScale",
            value: function(t802) {
                var e619 = t802.firstVal, i482 = t802.currentDate, a404 = t802.currentMonth, s331 = t802.currentYear, r285 = t802.minutesWidthOnXAxis, o256 = t802.numberOfHours, n219 = new R(this.ctx), l185 = "hour", h154 = function(t803, e620) {
                    return t803 > n219.determineDaysOfMonths(e620 + 1, s331) && (p68 = 1, e620 += 1), {
                        month: e620,
                        date: p68
                    };
                }, c140 = function(t804, e621) {
                    return t804 > n219.determineDaysOfMonths(e621 + 1, s331) ? e621 += 1 : e621;
                }, d126 = 60 - (e619.minMinute + e619.minSecond / 60), g104 = d126 * r285, u87 = e619.minHour + 1, f73 = u87 + 1;
                60 === d126 && (g104 = 0, f73 = (u87 = e619.minHour) + 1);
                var p68 = i482, b57 = c140(p68, a404);
                this.timeScaleArray.push({
                    position: g104,
                    value: u87,
                    unit: l185,
                    day: p68,
                    hour: f73,
                    year: s331,
                    month: x.monthMod(b57)
                });
                for(var v41 = g104, m20 = 0; m20 < o256; m20++){
                    if (l185 = "hour", f73 >= 24) f73 = 0, l185 = "day", b57 = h154(p68 += 1, b57).month, b57 = c140(p68, b57);
                    var y45 = this._getYear(s331, b57, 0);
                    v41 = 0 === f73 && 0 === m20 ? d126 * r285 : 60 * r285 + v41;
                    var w35 = 0 === f73 ? p68 : f73;
                    this.timeScaleArray.push({
                        position: v41,
                        value: w35,
                        unit: l185,
                        hour: f73,
                        day: p68,
                        year: y45,
                        month: x.monthMod(b57)
                    }), f73++;
                }
            }
        },
        {
            key: "generateMinuteScale",
            value: function(t805) {
                for(var e622 = t805.currentMillisecond, i483 = t805.currentSecond, a405 = t805.currentMinute, s332 = t805.currentHour, r286 = t805.currentDate, o257 = t805.currentMonth, n220 = t805.currentYear, l186 = t805.minutesWidthOnXAxis, h155 = t805.secondsWidthOnXAxis, c141 = t805.numberOfMinutes, d127 = a405 + 1, g105 = r286, u88 = o257, f74 = n220, p69 = s332, b58 = (60 - i483 - e622 / 1000) * h155, v42 = 0; v42 < c141; v42++)d127 >= 60 && (d127 = 0, 24 === (p69 += 1) && (p69 = 0)), this.timeScaleArray.push({
                    position: b58,
                    value: d127,
                    unit: "minute",
                    hour: p69,
                    minute: d127,
                    day: g105,
                    year: this._getYear(f74, u88, 0),
                    month: x.monthMod(u88)
                }), b58 += l186, d127++;
            }
        },
        {
            key: "generateSecondScale",
            value: function(t806) {
                for(var e623 = t806.currentMillisecond, i484 = t806.currentSecond, a406 = t806.currentMinute, s333 = t806.currentHour, r287 = t806.currentDate, o258 = t806.currentMonth, n221 = t806.currentYear, l187 = t806.secondsWidthOnXAxis, h156 = t806.numberOfSeconds, c142 = i484 + 1, d128 = a406, g106 = r287, u89 = o258, f75 = n221, p70 = s333, b59 = (1000 - e623) / 1000 * l187, v43 = 0; v43 < h156; v43++)c142 >= 60 && (c142 = 0, ++d128 >= 60 && (d128 = 0, 24 === ++p70 && (p70 = 0))), this.timeScaleArray.push({
                    position: b59,
                    value: c142,
                    unit: "second",
                    hour: p70,
                    minute: d128,
                    second: c142,
                    day: g106,
                    year: this._getYear(f75, u89, 0),
                    month: x.monthMod(u89)
                }), b59 += l187, c142++;
            }
        },
        {
            key: "createRawDateString",
            value: function(t807, e624) {
                var i485 = t807.year;
                return 0 === t807.month && (t807.month = 1), i485 += "-" + ("0" + t807.month.toString()).slice(-2), "day" === t807.unit ? i485 += "day" === t807.unit ? "-" + ("0" + e624).slice(-2) : "-01" : i485 += "-" + ("0" + (t807.day ? t807.day : "1")).slice(-2), "hour" === t807.unit ? i485 += "hour" === t807.unit ? "T" + ("0" + e624).slice(-2) : "T00" : i485 += "T" + ("0" + (t807.hour ? t807.hour : "0")).slice(-2), "minute" === t807.unit ? i485 += ":" + ("0" + e624).slice(-2) : i485 += ":" + (t807.minute ? ("0" + t807.minute).slice(-2) : "00"), "second" === t807.unit ? i485 += ":" + ("0" + e624).slice(-2) : i485 += ":00", this.utc && (i485 += ".000Z"), i485;
            }
        },
        {
            key: "formatDates",
            value: function(t808) {
                var e625 = this, i486 = this.w;
                return t808.map(function(t809) {
                    var a407 = t809.value.toString(), s334 = new R(e625.ctx), r288 = e625.createRawDateString(t809, a407), o259 = s334.getDate(s334.parseDate(r288));
                    if (e625.utc || (o259 = s334.getDate(s334.parseDateWithTimezone(r288))), void 0 === i486.config.xaxis.labels.format) {
                        var n222 = "dd MMM", l188 = i486.config.xaxis.labels.datetimeFormatter;
                        "year" === t809.unit && (n222 = l188.year), "month" === t809.unit && (n222 = l188.month), "day" === t809.unit && (n222 = l188.day), "hour" === t809.unit && (n222 = l188.hour), "minute" === t809.unit && (n222 = l188.minute), "second" === t809.unit && (n222 = l188.second), a407 = s334.formatDate(o259, n222);
                    } else a407 = s334.formatDate(o259, i486.config.xaxis.labels.format);
                    return {
                        dateString: r288,
                        position: t809.position,
                        value: a407,
                        unit: t809.unit,
                        year: t809.year,
                        month: t809.month
                    };
                });
            }
        },
        {
            key: "removeOverlappingTS",
            value: function(t810) {
                var e626, i487 = this, a408 = new m(this.ctx), s335 = !1;
                t810.length > 0 && t810[0].value && t810.every(function(e627) {
                    return e627.value.length === t810[0].value.length;
                }) && (s335 = !0, e626 = a408.getTextRects(t810[0].value).width);
                var r289 = 0, o260 = t810.map(function(o261, n223) {
                    if (n223 > 0 && i487.w.config.xaxis.labels.hideOverlappingLabels) {
                        var l189 = s335 ? e626 : a408.getTextRects(t810[r289].value).width, h157 = t810[r289].position;
                        return o261.position > h157 + l189 + 10 ? (r289 = n223, o261) : null;
                    }
                    return o261;
                });
                return o260 = o260.filter(function(t811) {
                    return null !== t811;
                });
            }
        },
        {
            key: "_getYear",
            value: function(t812, e628, i488) {
                return t812 + Math.floor(e628 / 12) + i488;
            }
        }
    ]), t792;
}(), Yt = function() {
    function t813(e629, i489) {
        a(this, t813), this.ctx = i489, this.w = i489.w, this.el = e629;
    }
    return r(t813, [
        {
            key: "setupElements",
            value: function() {
                var t814 = this.w.globals, e630 = this.w.config, i490 = e630.chart.type;
                t814.axisCharts = [
                    "line",
                    "area",
                    "bar",
                    "rangeBar",
                    "candlestick",
                    "boxPlot",
                    "scatter",
                    "bubble",
                    "radar",
                    "heatmap",
                    "treemap"
                ].indexOf(i490) > -1, t814.xyCharts = [
                    "line",
                    "area",
                    "bar",
                    "rangeBar",
                    "candlestick",
                    "boxPlot",
                    "scatter",
                    "bubble"
                ].indexOf(i490) > -1, t814.isBarHorizontal = ("bar" === e630.chart.type || "rangeBar" === e630.chart.type || "boxPlot" === e630.chart.type) && e630.plotOptions.bar.horizontal, t814.chartClass = ".apexcharts" + t814.chartID, t814.dom.baseEl = this.el, t814.dom.elWrap = document.createElement("div"), m.setAttrs(t814.dom.elWrap, {
                    id: t814.chartClass.substring(1),
                    class: "apexcharts-canvas " + t814.chartClass.substring(1)
                }), this.el.appendChild(t814.dom.elWrap), t814.dom.Paper = new window.SVG.Doc(t814.dom.elWrap), t814.dom.Paper.attr({
                    class: "apexcharts-svg",
                    "xmlns:data": "ApexChartsNS",
                    transform: "translate(".concat(e630.chart.offsetX, ", ").concat(e630.chart.offsetY, ")")
                }), t814.dom.Paper.node.style.background = e630.chart.background, this.setSVGDimensions(), t814.dom.elGraphical = t814.dom.Paper.group().attr({
                    class: "apexcharts-inner apexcharts-graphical"
                }), t814.dom.elAnnotations = t814.dom.Paper.group().attr({
                    class: "apexcharts-annotations"
                }), t814.dom.elDefs = t814.dom.Paper.defs(), t814.dom.elLegendWrap = document.createElement("div"), t814.dom.elLegendWrap.classList.add("apexcharts-legend"), t814.dom.elWrap.appendChild(t814.dom.elLegendWrap), t814.dom.Paper.add(t814.dom.elGraphical), t814.dom.elGraphical.add(t814.dom.elDefs);
            }
        },
        {
            key: "plotChartType",
            value: function(t815, e631) {
                var i491 = this.w, a409 = i491.config, s336 = i491.globals, r290 = {
                    series: [],
                    i: []
                }, o262 = {
                    series: [],
                    i: []
                }, n224 = {
                    series: [],
                    i: []
                }, l190 = {
                    series: [],
                    i: []
                }, h158 = {
                    series: [],
                    i: []
                }, c143 = {
                    series: [],
                    i: []
                }, d129 = {
                    series: [],
                    i: []
                };
                s336.series.map(function(e632, g108) {
                    var u91 = 0;
                    void 0 !== t815[g108].type ? ("column" === t815[g108].type || "bar" === t815[g108].type ? (s336.series.length > 1 && a409.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), h158.series.push(e632), h158.i.push(g108), u91++, i491.globals.columnSeries = h158.series) : "area" === t815[g108].type ? (o262.series.push(e632), o262.i.push(g108), u91++) : "line" === t815[g108].type ? (r290.series.push(e632), r290.i.push(g108), u91++) : "scatter" === t815[g108].type ? (n224.series.push(e632), n224.i.push(g108)) : "bubble" === t815[g108].type ? (l190.series.push(e632), l190.i.push(g108), u91++) : "candlestick" === t815[g108].type ? (c143.series.push(e632), c143.i.push(g108), u91++) : "boxPlot" === t815[g108].type ? (d129.series.push(e632), d129.i.push(g108), u91++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"), u91 > 1 && (s336.comboCharts = !0)) : (r290.series.push(e632), r290.i.push(g108));
                });
                var g107 = new Mt(this.ctx, e631), u90 = new wt(this.ctx, e631);
                this.ctx.pie = new Ct(this.ctx);
                var f76 = new Pt(this.ctx);
                this.ctx.rangeBar = new H(this.ctx, e631);
                var p71 = new Lt(this.ctx), x42 = [];
                if (s336.comboCharts) {
                    if (o262.series.length > 0 && x42.push(g107.draw(o262.series, "area", o262.i)), h158.series.length > 0) {
                        if (i491.config.chart.stacked) {
                            var b60 = new yt(this.ctx, e631);
                            x42.push(b60.draw(h158.series, h158.i));
                        } else this.ctx.bar = new F(this.ctx, e631), x42.push(this.ctx.bar.draw(h158.series, h158.i));
                    }
                    if (r290.series.length > 0 && x42.push(g107.draw(r290.series, "line", r290.i)), c143.series.length > 0 && x42.push(u90.draw(c143.series, c143.i)), d129.series.length > 0 && x42.push(u90.draw(d129.series, d129.i)), n224.series.length > 0) {
                        var v44 = new Mt(this.ctx, e631, !0);
                        x42.push(v44.draw(n224.series, "scatter", n224.i));
                    }
                    if (l190.series.length > 0) {
                        var m21 = new Mt(this.ctx, e631, !0);
                        x42.push(m21.draw(l190.series, "bubble", l190.i));
                    }
                } else switch(a409.chart.type){
                    case "line":
                        x42 = g107.draw(s336.series, "line");
                        break;
                    case "area":
                        x42 = g107.draw(s336.series, "area");
                        break;
                    case "bar":
                        if (a409.chart.stacked) x42 = new yt(this.ctx, e631).draw(s336.series);
                        else this.ctx.bar = new F(this.ctx, e631), x42 = this.ctx.bar.draw(s336.series);
                        break;
                    case "candlestick":
                        x42 = new wt(this.ctx, e631).draw(s336.series);
                        break;
                    case "boxPlot":
                        x42 = new wt(this.ctx, e631).draw(s336.series);
                        break;
                    case "rangeBar":
                        x42 = this.ctx.rangeBar.draw(s336.series);
                        break;
                    case "heatmap":
                        x42 = new At(this.ctx, e631).draw(s336.series);
                        break;
                    case "treemap":
                        x42 = new Et(this.ctx, e631).draw(s336.series);
                        break;
                    case "pie":
                    case "donut":
                    case "polarArea":
                        x42 = this.ctx.pie.draw(s336.series);
                        break;
                    case "radialBar":
                        x42 = f76.draw(s336.series);
                        break;
                    case "radar":
                        x42 = p71.draw(s336.series);
                        break;
                    default:
                        x42 = g107.draw(s336.series);
                }
                return x42;
            }
        },
        {
            key: "setSVGDimensions",
            value: function() {
                var t816 = this.w.globals, e633 = this.w.config;
                t816.svgWidth = e633.chart.width, t816.svgHeight = e633.chart.height;
                var i492 = x.getDimensions(this.el), a410 = e633.chart.width.toString().split(/[0-9]+/g).pop();
                "%" === a410 ? x.isNumber(i492[0]) && (0 === i492[0].width && (i492 = x.getDimensions(this.el.parentNode)), t816.svgWidth = i492[0] * parseInt(e633.chart.width, 10) / 100) : "px" !== a410 && "" !== a410 || (t816.svgWidth = parseInt(e633.chart.width, 10));
                var s337 = e633.chart.height.toString().split(/[0-9]+/g).pop();
                if ("auto" !== t816.svgHeight && "" !== t816.svgHeight) {
                    if ("%" === s337) {
                        var r291 = x.getDimensions(this.el.parentNode);
                        t816.svgHeight = r291[1] * parseInt(e633.chart.height, 10) / 100;
                    } else t816.svgHeight = parseInt(e633.chart.height, 10);
                } else t816.axisCharts ? t816.svgHeight = t816.svgWidth / 1.61 : t816.svgHeight = t816.svgWidth / 1.2;
                if (t816.svgWidth < 0 && (t816.svgWidth = 0), t816.svgHeight < 0 && (t816.svgHeight = 0), m.setAttrs(t816.dom.Paper.node, {
                    width: t816.svgWidth,
                    height: t816.svgHeight
                }), "%" !== s337) {
                    var o263 = e633.chart.sparkline.enabled ? 0 : t816.axisCharts ? e633.chart.parentHeightOffset : 0;
                    t816.dom.Paper.node.parentNode.parentNode.style.minHeight = t816.svgHeight + o263 + "px";
                }
                t816.dom.elWrap.style.width = t816.svgWidth + "px", t816.dom.elWrap.style.height = t816.svgHeight + "px";
            }
        },
        {
            key: "shiftGraphPosition",
            value: function() {
                var t817 = this.w.globals, e634 = t817.translateY, i493 = {
                    transform: "translate(" + t817.translateX + ", " + e634 + ")"
                };
                m.setAttrs(t817.dom.elGraphical.node, i493);
            }
        },
        {
            key: "resizeNonAxisCharts",
            value: function() {
                var t818 = this.w, e635 = t818.globals, i494 = 0, a411 = t818.config.chart.sparkline.enabled ? 1 : 15;
                a411 += t818.config.grid.padding.bottom, "top" !== t818.config.legend.position && "bottom" !== t818.config.legend.position || !t818.config.legend.show || t818.config.legend.floating || (i494 = new ct(this.ctx).legendHelpers.getLegendBBox().clwh + 10);
                var s338 = t818.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r292 = 2.05 * t818.globals.radialSize;
                if (s338 && !t818.config.chart.sparkline.enabled && 0 !== t818.config.plotOptions.radialBar.startAngle) {
                    var o264 = x.getBoundingClientRect(s338);
                    r292 = o264.bottom;
                    var n225 = o264.bottom - o264.top;
                    r292 = Math.max(2.05 * t818.globals.radialSize, n225);
                }
                var l191 = r292 + e635.translateY + i494 + a411;
                e635.dom.elLegendForeign && e635.dom.elLegendForeign.setAttribute("height", l191), e635.dom.elWrap.style.height = l191 + "px", m.setAttrs(e635.dom.Paper.node, {
                    height: l191
                }), e635.dom.Paper.node.parentNode.parentNode.style.minHeight = l191 + "px";
            }
        },
        {
            key: "coreCalculations",
            value: function() {
                new Z(this.ctx).init();
            }
        },
        {
            key: "resetGlobals",
            value: function() {
                var t819 = this, e636 = function() {
                    return t819.w.config.series.map(function(t) {
                        return [];
                    });
                }, i495 = new O, a412 = this.w.globals;
                i495.initGlobalVars(a412), a412.seriesXvalues = e636(), a412.seriesYvalues = e636();
            }
        },
        {
            key: "isMultipleY",
            value: function() {
                if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return this.w.globals.isMultipleYAxis = !0, !0;
            }
        },
        {
            key: "xySettings",
            value: function() {
                var t820 = null, e637 = this.w;
                if (e637.globals.axisCharts) {
                    if ("back" === e637.config.xaxis.crosshairs.position) new tt(this.ctx).drawXCrosshairs();
                    if ("back" === e637.config.yaxis[0].crosshairs.position) new tt(this.ctx).drawYCrosshairs();
                    if ("datetime" === e637.config.xaxis.type && void 0 === e637.config.xaxis.labels.formatter) {
                        this.ctx.timeScale = new Xt(this.ctx);
                        var i496 = [];
                        isFinite(e637.globals.minX) && isFinite(e637.globals.maxX) && !e637.globals.isBarHorizontal ? i496 = this.ctx.timeScale.calculateTimeScaleTicks(e637.globals.minX, e637.globals.maxX) : e637.globals.isBarHorizontal && (i496 = this.ctx.timeScale.calculateTimeScaleTicks(e637.globals.minY, e637.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i496);
                    }
                    t820 = new k(this.ctx).getCalculatedRatios();
                }
                return t820;
            }
        },
        {
            key: "updateSourceChart",
            value: function(t821) {
                this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({
                    chart: {
                        selection: {
                            xaxis: {
                                min: t821.w.globals.minX,
                                max: t821.w.globals.maxX
                            }
                        }
                    }
                }, !1, !1);
            }
        },
        {
            key: "setupBrushHandler",
            value: function() {
                var t822 = this, i497 = this.w;
                if (i497.config.chart.brush.enabled && "function" != typeof i497.config.chart.events.selection) {
                    var a413 = i497.config.chart.brush.targets || [
                        i497.config.chart.brush.target
                    ];
                    a413.forEach(function(e638) {
                        var i498 = ApexCharts.getChartByID(e638);
                        i498.w.globals.brushSource = t822.ctx, "function" != typeof i498.w.config.chart.events.zoomed && (i498.w.config.chart.events.zoomed = function() {
                            t822.updateSourceChart(i498);
                        }), "function" != typeof i498.w.config.chart.events.scrolled && (i498.w.config.chart.events.scrolled = function() {
                            t822.updateSourceChart(i498);
                        });
                    }), i497.config.chart.events.selection = function(t823, s339) {
                        a413.forEach(function(t824) {
                            var a414 = ApexCharts.getChartByID(t824), r293 = x.clone(i497.config.yaxis);
                            if (i497.config.chart.brush.autoScaleYaxis && 1 === a414.w.globals.series.length) {
                                var o265 = new q(a414);
                                r293 = o265.autoScaleY(a414, r293, s339);
                            }
                            var n226 = a414.w.config.yaxis.reduce(function(t825, i, s) {
                                return [].concat(u(t825), [
                                    e(e({
                                    }, a414.w.config.yaxis[s]), {
                                    }, {
                                        min: r293[0].min,
                                        max: r293[0].max
                                    })
                                ]);
                            }, []);
                            a414.ctx.updateHelpers._updateOptions({
                                xaxis: {
                                    min: s339.xaxis.min,
                                    max: s339.xaxis.max
                                },
                                yaxis: n226
                            }, !1, !1, !1, !1);
                        });
                    };
                }
            }
        }
    ]), t813;
}(), Ft = function() {
    function t826(e639) {
        a(this, t826), this.ctx = e639, this.w = e639.w;
    }
    return r(t826, [
        {
            key: "_updateOptions",
            value: function(t827) {
                var e640 = this, a415 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s340 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r294 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o266 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return new Promise(function(n227) {
                    var l192 = [
                        e640.ctx
                    ];
                    r294 && (l192 = e640.ctx.getSyncedCharts()), e640.ctx.w.globals.isExecCalled && (l192 = [
                        e640.ctx
                    ], e640.ctx.w.globals.isExecCalled = !1), l192.forEach(function(r295, h159) {
                        var c144 = r295.w;
                        return c144.globals.shouldAnimate = s340, a415 || (c144.globals.resized = !0, c144.globals.dataChanged = !0, s340 && r295.series.getPreviousPaths()), t827 && "object" === i(t827) && (r295.config = new N(t827), t827 = k.extendArrayProps(r295.config, t827, c144), r295.w.globals.chartID !== e640.ctx.w.globals.chartID && delete t827.series, c144.config = x.extend(c144.config, t827), o266 && (c144.globals.lastXAxis = t827.xaxis ? x.clone(t827.xaxis) : [], c144.globals.lastYAxis = t827.yaxis ? x.clone(t827.yaxis) : [], c144.globals.initialConfig = x.extend({
                        }, c144.config), c144.globals.initialSeries = x.clone(c144.config.series))), r295.update(t827).then(function() {
                            h159 === l192.length - 1 && n227(r295);
                        });
                    });
                });
            }
        },
        {
            key: "_updateSeries",
            value: function(t828, e641) {
                var i499 = this, a416 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return new Promise(function(s341) {
                    var r296, o267 = i499.w;
                    return o267.globals.shouldAnimate = e641, o267.globals.dataChanged = !0, e641 && i499.ctx.series.getPreviousPaths(), o267.globals.axisCharts ? (0 === (r296 = t828.map(function(t829, e642) {
                        return i499._extendSeries(t829, e642);
                    })).length && (r296 = [
                        {
                            data: []
                        }
                    ]), o267.config.series = r296) : o267.config.series = t828.slice(), a416 && (o267.globals.initialSeries = x.clone(o267.config.series)), i499.ctx.update().then(function() {
                        s341(i499.ctx);
                    });
                });
            }
        },
        {
            key: "_extendSeries",
            value: function(t830, i) {
                var a417 = this.w, s342 = a417.config.series[i];
                return e(e({
                }, a417.config.series[i]), {
                }, {
                    name: t830.name ? t830.name : s342 && s342.name,
                    color: t830.color ? t830.color : s342 && s342.color,
                    type: t830.type ? t830.type : s342 && s342.type,
                    data: t830.data ? t830.data : s342 && s342.data
                });
            }
        },
        {
            key: "toggleDataPointSelection",
            value: function(t831, e643) {
                var i500 = this.w, a418 = null, s343 = ".apexcharts-series[data\\:realIndex='".concat(t831, "']");
                return i500.globals.axisCharts ? a418 = i500.globals.dom.Paper.select("".concat(s343, " path[j='").concat(e643, "'], ").concat(s343, " circle[j='").concat(e643, "'], ").concat(s343, " rect[j='").concat(e643, "']")).members[0] : void 0 === e643 && (a418 = i500.globals.dom.Paper.select("".concat(s343, " path[j='").concat(t831, "']")).members[0], "pie" !== i500.config.chart.type && "polarArea" !== i500.config.chart.type && "donut" !== i500.config.chart.type || this.ctx.pie.pieClicked(t831)), a418 ? (new m(this.ctx).pathMouseDown(a418, null), a418.node ? a418.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
            }
        },
        {
            key: "forceXAxisUpdate",
            value: function(t832) {
                var e644 = this.w;
                if ([
                    "min",
                    "max"
                ].forEach(function(i) {
                    void 0 !== t832.xaxis[i] && (e644.config.xaxis[i] = t832.xaxis[i], e644.globals.lastXAxis[i] = t832.xaxis[i]);
                }), t832.xaxis.categories && t832.xaxis.categories.length && (e644.config.xaxis.categories = t832.xaxis.categories), e644.config.xaxis.convertedCatToNumeric) {
                    var i501 = new D(t832);
                    t832 = i501.convertCatToNumericXaxis(t832, this.ctx);
                }
                return t832;
            }
        },
        {
            key: "forceYAxisUpdate",
            value: function(t833) {
                var e645 = this.w;
                return e645.config.chart.stacked && "100%" === e645.config.chart.stackType && (Array.isArray(t833.yaxis) ? t833.yaxis.forEach(function(e, i) {
                    t833.yaxis[i].min = 0, t833.yaxis[i].max = 100;
                }) : (t833.yaxis.min = 0, t833.yaxis.max = 100)), t833;
            }
        },
        {
            key: "revertDefaultAxisMinMax",
            value: function(t834) {
                var e646 = this, i502 = this.w, a419 = i502.globals.lastXAxis, s344 = i502.globals.lastYAxis;
                t834 && t834.xaxis && (a419 = t834.xaxis), t834 && t834.yaxis && (s344 = t834.yaxis), i502.config.xaxis.min = a419.min, i502.config.xaxis.max = a419.max;
                var r297 = function(t) {
                    void 0 !== s344[t] && (i502.config.yaxis[t].min = s344[t].min, i502.config.yaxis[t].max = s344[t].max);
                };
                i502.config.yaxis.map(function(t835, a420) {
                    i502.globals.zoomed || void 0 !== s344[a420] ? r297(a420) : void 0 !== e646.ctx.opts.yaxis[a420] && (t835.min = e646.ctx.opts.yaxis[a420].min, t835.max = e646.ctx.opts.yaxis[a420].max);
                });
            }
        }
    ]), t826;
}();
It = "undefined" != typeof window ? window : void 0, zt = function(t836, e647) {
    var a421 = (void 0 !== this ? this : t836).SVG = function(t837) {
        if (a421.supported) return t837 = new a421.Doc(t837), a421.parser.draw || a421.prepare(), t837;
    };
    if (a421.ns = "http://www.w3.org/2000/svg", a421.xmlns = "http://www.w3.org/2000/xmlns/", a421.xlink = "http://www.w3.org/1999/xlink", a421.svgjs = "http://svgjs.dev", a421.supported = !0, !a421.supported) return !1;
    a421.did = 1000, a421.eid = function(t838) {
        return "Svgjs" + d130(t838) + a421.did++;
    }, a421.create = function(t839) {
        var i503 = e647.createElementNS(this.ns, t839);
        return i503.setAttribute("id", this.eid(t839)), i503;
    }, a421.extend = function() {
        var t840, e648;
        e648 = (t840 = [].slice.call(arguments)).pop();
        for(var i504 = t840.length - 1; i504 >= 0; i504--)if (t840[i504]) for(var s in e648)t840[i504].prototype[s] = e648[s];
        a421.Set && a421.Set.inherit && a421.Set.inherit();
    }, a421.invent = function(t841) {
        var e649 = "function" == typeof t841.create ? t841.create : function() {
            this.constructor.call(this, a421.create(t841.create));
        };
        return t841.inherit && (e649.prototype = new t841.inherit), t841.extend && a421.extend(e649, t841.extend), t841.construct && a421.extend(t841.parent || a421.Container, t841.construct), e649;
    }, a421.adopt = function(e650) {
        var i505;
        return e650 ? e650.instance ? e650.instance : ((i505 = "svg" == e650.nodeName ? e650.parentNode instanceof t836.SVGElement ? new a421.Nested : new a421.Doc : "linearGradient" == e650.nodeName ? new a421.Gradient("linear") : "radialGradient" == e650.nodeName ? new a421.Gradient("radial") : a421[d130(e650.nodeName)] ? new a421[d130(e650.nodeName)] : new a421.Element(e650)).type = e650.nodeName, i505.node = e650, e650.instance = i505, i505 instanceof a421.Doc && i505.namespace().defs(), i505.setData(JSON.parse(e650.getAttribute("svgjs:data")) || {
        }), i505) : null;
    }, a421.prepare = function() {
        var t842 = e647.getElementsByTagName("body")[0], i506 = (t842 ? new a421.Doc(t842) : a421.adopt(e647.documentElement).nested()).size(2, 0);
        a421.parser = {
            body: t842 || e647.documentElement,
            draw: i506.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
            poly: i506.polyline().node,
            path: i506.path().node,
            native: a421.create("svg")
        };
    }, a421.parser = {
        native: a421.create("svg")
    }, e647.addEventListener("DOMContentLoaded", function() {
        a421.parser.draw || a421.prepare();
    }, !1), a421.regex = {
        numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
        hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        rgb: /rgb\((\d+),(\d+),(\d+)\)/,
        reference: /#([a-z0-9\-_]+)/i,
        transforms: /\)\s*,?\s*/,
        whitespace: /\s/g,
        isHex: /^#[a-f0-9]{3,6}$/i,
        isRgb: /^rgb\(/,
        isCss: /[^:]+:[^;]+;?/,
        isBlank: /^(\s+)?$/,
        isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        isPercent: /^-?[\d\.]+%$/,
        isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
        delimiter: /[\s,]+/,
        hyphen: /([^e])\-/gi,
        pathLetters: /[MLHVCSQTAZ]/gi,
        isPathLetter: /[MLHVCSQTAZ]/i,
        numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
        dots: /\./g
    }, a421.utils = {
        map: function(t843, e651) {
            for(var i507 = t843.length, a422 = [], s346 = 0; s346 < i507; s346++)a422.push(e651(t843[s346]));
            return a422;
        },
        filter: function(t844, e652) {
            for(var i508 = t844.length, a423 = [], s347 = 0; s347 < i508; s347++)e652(t844[s347]) && a423.push(t844[s347]);
            return a423;
        },
        filterSVGElements: function(e653) {
            return this.filter(e653, function(e654) {
                return e654 instanceof t836.SVGElement;
            });
        }
    }, a421.defaults = {
        attrs: {
            "fill-opacity": 1,
            "stroke-opacity": 1,
            "stroke-width": 0,
            "stroke-linejoin": "miter",
            "stroke-linecap": "butt",
            fill: "#000000",
            stroke: "#000000",
            opacity: 1,
            x: 0,
            y: 0,
            cx: 0,
            cy: 0,
            width: 0,
            height: 0,
            r: 0,
            rx: 0,
            ry: 0,
            offset: 0,
            "stop-opacity": 1,
            "stop-color": "#000000",
            "font-size": 16,
            "font-family": "Helvetica, Arial, sans-serif",
            "text-anchor": "start"
        }
    }, a421.Color = function(t845) {
        var e655, s348;
        this.r = 0, this.g = 0, this.b = 0, t845 && ("string" == typeof t845 ? a421.regex.isRgb.test(t845) ? (e655 = a421.regex.rgb.exec(t845.replace(a421.regex.whitespace, "")), this.r = parseInt(e655[1]), this.g = parseInt(e655[2]), this.b = parseInt(e655[3])) : a421.regex.isHex.test(t845) && (e655 = a421.regex.hex.exec(4 == (s348 = t845).length ? [
            "#",
            s348.substring(1, 2),
            s348.substring(1, 2),
            s348.substring(2, 3),
            s348.substring(2, 3),
            s348.substring(3, 4),
            s348.substring(3, 4)
        ].join("") : s348), this.r = parseInt(e655[1], 16), this.g = parseInt(e655[2], 16), this.b = parseInt(e655[3], 16)) : "object" === i(t845) && (this.r = t845.r, this.g = t845.g, this.b = t845.b));
    }, a421.extend(a421.Color, {
        toString: function() {
            return this.toHex();
        },
        toHex: function() {
            return "#" + g109(this.r) + g109(this.g) + g109(this.b);
        },
        toRgb: function() {
            return "rgb(" + [
                this.r,
                this.g,
                this.b
            ].join() + ")";
        },
        brightness: function() {
            return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
        },
        morph: function(t846) {
            return this.destination = new a421.Color(t846), this;
        },
        at: function(t847) {
            return this.destination ? (t847 = t847 < 0 ? 0 : t847 > 1 ? 1 : t847, new a421.Color({
                r: ~~(this.r + (this.destination.r - this.r) * t847),
                g: ~~(this.g + (this.destination.g - this.g) * t847),
                b: ~~(this.b + (this.destination.b - this.b) * t847)
            })) : this;
        }
    }), a421.Color.test = function(t848) {
        return t848 += "", a421.regex.isHex.test(t848) || a421.regex.isRgb.test(t848);
    }, a421.Color.isRgb = function(t849) {
        return t849 && "number" == typeof t849.r && "number" == typeof t849.g && "number" == typeof t849.b;
    }, a421.Color.isColor = function(t850) {
        return a421.Color.isRgb(t850) || a421.Color.test(t850);
    }, a421.Array = function(t851, e656) {
        0 == (t851 = (t851 || []).valueOf()).length && e656 && (t851 = e656.valueOf()), this.value = this.parse(t851);
    }, a421.extend(a421.Array, {
        toString: function() {
            return this.value.join(" ");
        },
        valueOf: function() {
            return this.value;
        },
        parse: function(t852) {
            return t852 = t852.valueOf(), Array.isArray(t852) ? t852 : this.split(t852);
        }
    }), a421.PointArray = function(t853, e657) {
        a421.Array.call(this, t853, e657 || [
            [
                0,
                0
            ]
        ]);
    }, a421.PointArray.prototype = new a421.Array, a421.PointArray.prototype.constructor = a421.PointArray;
    for(var s345 = {
        M: function(t854, e658, i509) {
            return e658.x = i509.x = t854[0], e658.y = i509.y = t854[1], [
                "M",
                e658.x,
                e658.y
            ];
        },
        L: function(t855, e659) {
            return e659.x = t855[0], e659.y = t855[1], [
                "L",
                t855[0],
                t855[1]
            ];
        },
        H: function(t856, e660) {
            return e660.x = t856[0], [
                "H",
                t856[0]
            ];
        },
        V: function(t857, e661) {
            return e661.y = t857[0], [
                "V",
                t857[0]
            ];
        },
        C: function(t858, e662) {
            return e662.x = t858[4], e662.y = t858[5], [
                "C",
                t858[0],
                t858[1],
                t858[2],
                t858[3],
                t858[4],
                t858[5]
            ];
        },
        Q: function(t859, e663) {
            return e663.x = t859[2], e663.y = t859[3], [
                "Q",
                t859[0],
                t859[1],
                t859[2],
                t859[3]
            ];
        },
        Z: function(t, e664, i510) {
            return e664.x = i510.x, e664.y = i510.y, [
                "Z"
            ];
        }
    }, r298 = "mlhvqtcsaz".split(""), o268 = 0, n228 = r298.length; o268 < n228; ++o268)s345[r298[o268]] = (function(t860) {
        return function(e665, i511, a424) {
            if ("H" == t860) e665[0] = e665[0] + i511.x;
            else if ("V" == t860) e665[0] = e665[0] + i511.y;
            else if ("A" == t860) e665[5] = e665[5] + i511.x, e665[6] = e665[6] + i511.y;
            else for(var r299 = 0, o269 = e665.length; r299 < o269; ++r299)e665[r299] = e665[r299] + (r299 % 2 ? i511.y : i511.x);
            if (s345 && "function" == typeof s345[t860]) return s345[t860](e665, i511, a424);
        };
    })(r298[o268].toUpperCase());
    a421.PathArray = function(t861, e666) {
        a421.Array.call(this, t861, e666 || [
            [
                "M",
                0,
                0
            ]
        ]);
    }, a421.PathArray.prototype = new a421.Array, a421.PathArray.prototype.constructor = a421.PathArray, a421.extend(a421.PathArray, {
        toString: function() {
            return (function(t862) {
                for(var e667 = 0, i512 = t862.length, a425 = ""; e667 < i512; e667++)a425 += t862[e667][0], null != t862[e667][1] && (a425 += t862[e667][1], null != t862[e667][2] && (a425 += " ", a425 += t862[e667][2], null != t862[e667][3] && (a425 += " ", a425 += t862[e667][3], a425 += " ", a425 += t862[e667][4], null != t862[e667][5] && (a425 += " ", a425 += t862[e667][5], a425 += " ", a425 += t862[e667][6], null != t862[e667][7] && (a425 += " ", a425 += t862[e667][7])))));
                return a425 + " ";
            })(this.value);
        },
        move: function(t, e) {
            var i513 = this.bbox();
            return i513.x, i513.y, this;
        },
        at: function(t863) {
            if (!this.destination) return this;
            for(var e668 = this.value, i514 = this.destination.value, s349 = [], r300 = new a421.PathArray, o270 = 0, n229 = e668.length; o270 < n229; o270++){
                s349[o270] = [
                    e668[o270][0]
                ];
                for(var l194 = 1, h161 = e668[o270].length; l194 < h161; l194++)s349[o270][l194] = e668[o270][l194] + (i514[o270][l194] - e668[o270][l194]) * t863;
                "A" === s349[o270][0] && (s349[o270][4] = +(0 != s349[o270][4]), s349[o270][5] = +(0 != s349[o270][5]));
            }
            return r300.value = s349, r300;
        },
        parse: function(t864) {
            if (t864 instanceof a421.PathArray) return t864.valueOf();
            var e669, i515 = {
                M: 2,
                L: 2,
                H: 1,
                V: 1,
                C: 6,
                S: 4,
                Q: 4,
                T: 2,
                A: 7,
                Z: 0
            };
            t864 = "string" == typeof t864 ? t864.replace(a421.regex.numbersWithDots, h160).replace(a421.regex.pathLetters, " $& ").replace(a421.regex.hyphen, "$1 -").trim().split(a421.regex.delimiter) : t864.reduce(function(t865, e670) {
                return [].concat.call(t865, e670);
            }, []);
            var r301 = [], o271 = new a421.Point, n230 = new a421.Point, l195 = 0, c146 = t864.length;
            do a421.regex.isPathLetter.test(t864[l195]) ? (e669 = t864[l195], ++l195) : "M" == e669 ? e669 = "L" : "m" == e669 && (e669 = "l"), r301.push(s345[e669].call(null, t864.slice(l195, l195 += i515[e669.toUpperCase()]).map(parseFloat), o271, n230));
            while (c146 > l195)
            return r301;
        },
        bbox: function() {
            return a421.parser.draw || a421.prepare(), a421.parser.path.setAttribute("d", this.toString()), a421.parser.path.getBBox();
        }
    }), a421.Number = a421.invent({
        create: function(t866, e671) {
            this.value = 0, this.unit = e671 || "", "number" == typeof t866 ? this.value = isNaN(t866) ? 0 : isFinite(t866) ? t866 : t866 < 0 ? -340000000000000000000000000000000000000 : 340000000000000000000000000000000000000 : "string" == typeof t866 ? (e671 = t866.match(a421.regex.numberAndUnit)) && (this.value = parseFloat(e671[1]), "%" == e671[5] ? this.value /= 100 : "s" == e671[5] && (this.value *= 1000), this.unit = e671[5]) : t866 instanceof a421.Number && (this.value = t866.valueOf(), this.unit = t866.unit);
        },
        extend: {
            toString: function() {
                return ("%" == this.unit ? ~~(100000000 * this.value) / 1000000 : "s" == this.unit ? this.value / 1000 : this.value) + this.unit;
            },
            toJSON: function() {
                return this.toString();
            },
            valueOf: function() {
                return this.value;
            },
            plus: function(t867) {
                return t867 = new a421.Number(t867), new a421.Number(this + t867, this.unit || t867.unit);
            },
            minus: function(t868) {
                return t868 = new a421.Number(t868), new a421.Number(this - t868, this.unit || t868.unit);
            },
            times: function(t869) {
                return t869 = new a421.Number(t869), new a421.Number(this * t869, this.unit || t869.unit);
            },
            divide: function(t870) {
                return t870 = new a421.Number(t870), new a421.Number(this / t870, this.unit || t870.unit);
            },
            to: function(t871) {
                var e672 = new a421.Number(this);
                return "string" == typeof t871 && (e672.unit = t871), e672;
            },
            morph: function(t872) {
                return this.destination = new a421.Number(t872), t872.relative && (this.destination.value += this.value), this;
            },
            at: function(t873) {
                return this.destination ? new a421.Number(this.destination).minus(this).times(t873).plus(this) : this;
            }
        }
    }), a421.Element = a421.invent({
        create: function(t874) {
            this._stroke = a421.defaults.attrs.stroke, this._event = null, this.dom = {
            }, (this.node = t874) && (this.type = t874.nodeName, this.node.instance = this, this._stroke = t874.getAttribute("stroke") || this._stroke);
        },
        extend: {
            x: function(t875) {
                return this.attr("x", t875);
            },
            y: function(t876) {
                return this.attr("y", t876);
            },
            cx: function(t877) {
                return null == t877 ? this.x() + this.width() / 2 : this.x(t877 - this.width() / 2);
            },
            cy: function(t878) {
                return null == t878 ? this.y() + this.height() / 2 : this.y(t878 - this.height() / 2);
            },
            move: function(t879, e673) {
                return this.x(t879).y(e673);
            },
            center: function(t880, e674) {
                return this.cx(t880).cy(e674);
            },
            width: function(t881) {
                return this.attr("width", t881);
            },
            height: function(t882) {
                return this.attr("height", t882);
            },
            size: function(t883, e675) {
                var i516 = u92(this, t883, e675);
                return this.width(new a421.Number(i516.width)).height(new a421.Number(i516.height));
            },
            clone: function(t884) {
                this.writeDataToDom();
                var e676 = x43(this.node.cloneNode(!0));
                return t884 ? t884.add(e676) : this.after(e676), e676;
            },
            remove: function() {
                return this.parent() && this.parent().removeElement(this), this;
            },
            replace: function(t885) {
                return this.after(t885).remove(), t885;
            },
            addTo: function(t886) {
                return t886.put(this);
            },
            putIn: function(t887) {
                return t887.add(this);
            },
            id: function(t888) {
                return this.attr("id", t888);
            },
            show: function() {
                return this.style("display", "");
            },
            hide: function() {
                return this.style("display", "none");
            },
            visible: function() {
                return "none" != this.style("display");
            },
            toString: function() {
                return this.attr("id");
            },
            classes: function() {
                var t889 = this.attr("class");
                return null == t889 ? [] : t889.trim().split(a421.regex.delimiter);
            },
            hasClass: function(t890) {
                return -1 != this.classes().indexOf(t890);
            },
            addClass: function(t891) {
                if (!this.hasClass(t891)) {
                    var e677 = this.classes();
                    e677.push(t891), this.attr("class", e677.join(" "));
                }
                return this;
            },
            removeClass: function(t892) {
                return this.hasClass(t892) && this.attr("class", this.classes().filter(function(e678) {
                    return e678 != t892;
                }).join(" ")), this;
            },
            toggleClass: function(t893) {
                return this.hasClass(t893) ? this.removeClass(t893) : this.addClass(t893);
            },
            reference: function(t894) {
                return a421.get(this.attr(t894));
            },
            parent: function(e679) {
                var i517 = this;
                if (!i517.node.parentNode) return null;
                if (i517 = a421.adopt(i517.node.parentNode), !e679) return i517;
                for(; i517 && i517.node instanceof t836.SVGElement;){
                    if ("string" == typeof e679 ? i517.matches(e679) : i517 instanceof e679) return i517;
                    if (!i517.node.parentNode || "#document" == i517.node.parentNode.nodeName) return null;
                    i517 = a421.adopt(i517.node.parentNode);
                }
            },
            doc: function() {
                return this instanceof a421.Doc ? this : this.parent(a421.Doc);
            },
            parents: function(t895) {
                var e680 = [], i518 = this;
                do {
                    if (!(i518 = i518.parent(t895)) || !i518.node) break;
                    e680.push(i518);
                }while (i518.parent)
                return e680;
            },
            matches: function(t896) {
                return (function(t897, e681) {
                    return (t897.matches || t897.matchesSelector || t897.msMatchesSelector || t897.mozMatchesSelector || t897.webkitMatchesSelector || t897.oMatchesSelector).call(t897, e681);
                })(this.node, t896);
            },
            native: function() {
                return this.node;
            },
            svg: function(t898) {
                var i519 = e647.createElement("svg");
                if (!(t898 && this instanceof a421.Parent)) return i519.appendChild(t898 = e647.createElement("svg")), this.writeDataToDom(), t898.appendChild(this.node.cloneNode(!0)), i519.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                i519.innerHTML = "<svg>" + t898.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                for(var s350 = 0, r302 = i519.firstChild.childNodes.length; s350 < r302; s350++)this.node.appendChild(i519.firstChild.firstChild);
                return this;
            },
            writeDataToDom: function() {
                return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
                    this.writeDataToDom();
                }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
            },
            setData: function(t899) {
                return this.dom = t899, this;
            },
            is: function(t900) {
                return (function(t901, e682) {
                    return t901 instanceof e682;
                })(this, t900);
            }
        }
    }), a421.easing = {
        "-": function(t902) {
            return t902;
        },
        "<>": function(t903) {
            return -Math.cos(t903 * Math.PI) / 2 + 0.5;
        },
        ">": function(t904) {
            return Math.sin(t904 * Math.PI / 2);
        },
        "<": function(t905) {
            return 1 - Math.cos(t905 * Math.PI / 2);
        }
    }, a421.morph = function(t906) {
        return function(e683, i520) {
            return new a421.MorphObj(e683, i520).at(t906);
        };
    }, a421.Situation = a421.invent({
        create: function(t907) {
            this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new a421.Number(t907.duration).valueOf(), this.delay = new a421.Number(t907.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t907.ease, this.loop = 0, this.loops = !1, this.animations = {
            }, this.attrs = {
            }, this.styles = {
            }, this.transforms = [], this.once = {
            };
        }
    }), a421.FX = a421.invent({
        create: function(t908) {
            this._target = t908, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
        },
        extend: {
            animate: function(t909, e684, s351) {
                "object" === i(t909) && (e684 = t909.ease, s351 = t909.delay, t909 = t909.duration);
                var r303 = new a421.Situation({
                    duration: t909 || 1000,
                    delay: s351 || 0,
                    ease: a421.easing[e684 || "-"] || e684
                });
                return this.queue(r303), this;
            },
            target: function(t910) {
                return t910 && t910 instanceof a421.Element ? (this._target = t910, this) : this._target;
            },
            timeToAbsPos: function(t911) {
                return (t911 - this.situation.start) / (this.situation.duration / this._speed);
            },
            absPosToTime: function(t912) {
                return this.situation.duration / this._speed * t912 + this.situation.start;
            },
            startAnimFrame: function() {
                this.stopAnimFrame(), this.animationFrame = t836.requestAnimationFrame((function() {
                    this.step();
                }).bind(this));
            },
            stopAnimFrame: function() {
                t836.cancelAnimationFrame(this.animationFrame);
            },
            start: function() {
                return !this.active && this.situation && (this.active = !0, this.startCurrent()), this;
            },
            startCurrent: function() {
                return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
            },
            queue: function(t913) {
                return ("function" == typeof t913 || t913 instanceof a421.Situation) && this.situations.push(t913), this.situation || (this.situation = this.situations.shift()), this;
            },
            dequeue: function() {
                return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof a421.Situation ? this.start() : this.situation.call(this)), this;
            },
            initAnimations: function() {
                var t914, e685 = this.situation;
                if (e685.init) return this;
                for(var i521 in e685.animations){
                    t914 = this.target()[i521](), Array.isArray(t914) || (t914 = [
                        t914
                    ]), Array.isArray(e685.animations[i521]) || (e685.animations[i521] = [
                        e685.animations[i521]
                    ]);
                    for(var s352 = t914.length; s352--;)e685.animations[i521][s352] instanceof a421.Number && (t914[s352] = new a421.Number(t914[s352])), e685.animations[i521][s352] = t914[s352].morph(e685.animations[i521][s352]);
                }
                for(var i521 in e685.attrs)e685.attrs[i521] = new a421.MorphObj(this.target().attr(i521), e685.attrs[i521]);
                for(var i521 in e685.styles)e685.styles[i521] = new a421.MorphObj(this.target().style(i521), e685.styles[i521]);
                return e685.initialTransformation = this.target().matrixify(), e685.init = !0, this;
            },
            clearQueue: function() {
                return this.situations = [], this;
            },
            clearCurrent: function() {
                return this.situation = null, this;
            },
            stop: function(t915, e686) {
                var i522 = this.active;
                return this.active = !1, e686 && this.clearQueue(), t915 && this.situation && (!i522 && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
            },
            after: function(t916) {
                var e687 = this.last();
                return this.target().on("finished.fx", function i523(a426) {
                    a426.detail.situation == e687 && (t916.call(this, e687), this.off("finished.fx", i523));
                }), this._callStart();
            },
            during: function(t917) {
                var e688 = this.last(), i524 = function(i525) {
                    i525.detail.situation == e688 && t917.call(this, i525.detail.pos, a421.morph(i525.detail.pos), i525.detail.eased, e688);
                };
                return this.target().off("during.fx", i524).on("during.fx", i524), this.after(function() {
                    this.off("during.fx", i524);
                }), this._callStart();
            },
            afterAll: function(t918) {
                var e689 = function e690(i) {
                    t918.call(this), this.off("allfinished.fx", e690);
                };
                return this.target().off("allfinished.fx", e689).on("allfinished.fx", e689), this._callStart();
            },
            last: function() {
                return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
            },
            add: function(t, e691, i) {
                return this.last()[i || "animations"][t] = e691, this._callStart();
            },
            step: function(t919) {
                var e692, i526, a427;
                t919 || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e692 = Math.max(this.absPos, 0), i526 = Math.floor(e692), !0 === this.situation.loops || i526 < this.situation.loops ? (this.pos = e692 - i526, a427 = this.situation.loop, this.situation.loop = i526) : (this.absPos = this.situation.loops, this.pos = 1, a427 = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a427) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                var s353 = this.situation.ease(this.pos);
                for(var r304 in this.situation.once)r304 > this.lastPos && r304 <= s353 && (this.situation.once[r304].call(this.target(), this.pos, s353), delete this.situation.once[r304]);
                return this.active && this.target().fire("during", {
                    pos: this.pos,
                    eased: s353,
                    fx: this,
                    situation: this.situation
                }), this.situation ? (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
                    fx: this,
                    situation: this.situation
                }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s353, this) : this;
            },
            eachAt: function() {
                var t920, e693 = this, i527 = this.target(), s354 = this.situation;
                for(var r305 in s354.animations)t920 = [].concat(s354.animations[r305]).map(function(t921) {
                    return "string" != typeof t921 && t921.at ? t921.at(s354.ease(e693.pos), e693.pos) : t921;
                }), i527[r305].apply(i527, t920);
                for(var r305 in s354.attrs)t920 = [
                    r305
                ].concat(s354.attrs[r305]).map(function(t922) {
                    return "string" != typeof t922 && t922.at ? t922.at(s354.ease(e693.pos), e693.pos) : t922;
                }), i527.attr.apply(i527, t920);
                for(var r305 in s354.styles)t920 = [
                    r305
                ].concat(s354.styles[r305]).map(function(t923) {
                    return "string" != typeof t923 && t923.at ? t923.at(s354.ease(e693.pos), e693.pos) : t923;
                }), i527.style.apply(i527, t920);
                if (s354.transforms.length) {
                    t920 = s354.initialTransformation, r305 = 0;
                    for(var o272 = s354.transforms.length; r305 < o272; r305++){
                        var n231 = s354.transforms[r305];
                        n231 instanceof a421.Matrix ? t920 = n231.relative ? t920.multiply((new a421.Matrix).morph(n231).at(s354.ease(this.pos))) : t920.morph(n231).at(s354.ease(this.pos)) : (n231.relative || n231.undo(t920.extract()), t920 = t920.multiply(n231.at(s354.ease(this.pos))));
                    }
                    i527.matrix(t920);
                }
                return this;
            },
            once: function(t924, e694, i528) {
                var a428 = this.last();
                return i528 || (t924 = a428.ease(t924)), a428.once[t924] = e694, this;
            },
            _callStart: function() {
                return setTimeout((function() {
                    this.start();
                }).bind(this), 0), this;
            }
        },
        parent: a421.Element,
        construct: {
            animate: function(t925, e695, i529) {
                return (this.fx || (this.fx = new a421.FX(this))).animate(t925, e695, i529);
            },
            delay: function(t926) {
                return (this.fx || (this.fx = new a421.FX(this))).delay(t926);
            },
            stop: function(t927, e696) {
                return this.fx && this.fx.stop(t927, e696), this;
            },
            finish: function() {
                return this.fx && this.fx.finish(), this;
            }
        }
    }), a421.MorphObj = a421.invent({
        create: function(t928, e697) {
            return a421.Color.isColor(e697) ? new a421.Color(t928).morph(e697) : a421.regex.delimiter.test(t928) ? a421.regex.pathLetters.test(t928) ? new a421.PathArray(t928).morph(e697) : new a421.Array(t928).morph(e697) : a421.regex.numberAndUnit.test(e697) ? new a421.Number(t928).morph(e697) : (this.value = t928, void (this.destination = e697));
        },
        extend: {
            at: function(t, e698) {
                return e698 < 1 ? this.value : this.destination;
            },
            valueOf: function() {
                return this.value;
            }
        }
    }), a421.extend(a421.FX, {
        attr: function(t929, e699, a) {
            if ("object" === i(t929)) for(var s355 in t929)this.attr(s355, t929[s355]);
            else this.add(t929, e699, "attrs");
            return this;
        },
        plot: function(t930, e700, i530, a429) {
            return 4 == arguments.length ? this.plot([
                t930,
                e700,
                i530,
                a429
            ]) : this.add("plot", new (this.target()).morphArray(t930));
        }
    }), a421.Box = a421.invent({
        create: function(t931, e701, s356, r306) {
            if (!("object" !== i(t931) || t931 instanceof a421.Element)) return a421.Box.call(this, null != t931.left ? t931.left : t931.x, null != t931.top ? t931.top : t931.y, t931.width, t931.height);
            4 == arguments.length && (this.x = t931, this.y = e701, this.width = s356, this.height = r306), b61(this);
        }
    }), a421.BBox = a421.invent({
        create: function(t932) {
            if (a421.Box.apply(this, [].slice.call(arguments)), t932 instanceof a421.Element) {
                var i531;
                try {
                    if (!e647.documentElement.contains) {
                        for(var s357 = t932.node; s357.parentNode;)s357 = s357.parentNode;
                        if (s357 != e647) throw new Error("Element not in the dom");
                    }
                    i531 = t932.node.getBBox();
                } catch (e) {
                    if (t932 instanceof a421.Shape) {
                        a421.parser.draw || a421.prepare();
                        var r307 = t932.clone(a421.parser.draw.instance).show();
                        r307 && r307.node && "function" == typeof r307.node.getBBox && (i531 = r307.node.getBBox()), r307 && "function" == typeof r307.remove && r307.remove();
                    } else i531 = {
                        x: t932.node.clientLeft,
                        y: t932.node.clientTop,
                        width: t932.node.clientWidth,
                        height: t932.node.clientHeight
                    };
                }
                a421.Box.call(this, i531);
            }
        },
        inherit: a421.Box,
        parent: a421.Element,
        construct: {
            bbox: function() {
                return new a421.BBox(this);
            }
        }
    }), a421.BBox.prototype.constructor = a421.BBox, a421.Matrix = a421.invent({
        create: function(t933) {
            var e702 = p72([
                1,
                0,
                0,
                1,
                0,
                0
            ]);
            t933 = null === t933 ? e702 : t933 instanceof a421.Element ? t933.matrixify() : "string" == typeof t933 ? p72(t933.split(a421.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? p72([].slice.call(arguments)) : Array.isArray(t933) ? p72(t933) : t933 && "object" === i(t933) ? t933 : e702;
            for(var s358 = m22.length - 1; s358 >= 0; --s358)this[m22[s358]] = null != t933[m22[s358]] ? t933[m22[s358]] : e702[m22[s358]];
        },
        extend: {
            extract: function() {
                var t934 = f77(this, 0, 1);
                f77(this, 1, 0);
                var e703 = 180 / Math.PI * Math.atan2(t934.y, t934.x) - 90;
                return {
                    x: this.e,
                    y: this.f,
                    transformedX: (this.e * Math.cos(e703 * Math.PI / 180) + this.f * Math.sin(e703 * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                    transformedY: (this.f * Math.cos(e703 * Math.PI / 180) + this.e * Math.sin(-e703 * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                    rotation: e703,
                    a: this.a,
                    b: this.b,
                    c: this.c,
                    d: this.d,
                    e: this.e,
                    f: this.f,
                    matrix: new a421.Matrix(this)
                };
            },
            clone: function() {
                return new a421.Matrix(this);
            },
            morph: function(t935) {
                return this.destination = new a421.Matrix(t935), this;
            },
            multiply: function(t936) {
                return new a421.Matrix(this.native().multiply((function(t937) {
                    return t937 instanceof a421.Matrix || (t937 = new a421.Matrix(t937)), t937;
                })(t936).native()));
            },
            inverse: function() {
                return new a421.Matrix(this.native().inverse());
            },
            translate: function(t938, e704) {
                return new a421.Matrix(this.native().translate(t938 || 0, e704 || 0));
            },
            native: function() {
                for(var t939 = a421.parser.native.createSVGMatrix(), e705 = m22.length - 1; e705 >= 0; e705--)t939[m22[e705]] = this[m22[e705]];
                return t939;
            },
            toString: function() {
                return "matrix(" + v45(this.a) + "," + v45(this.b) + "," + v45(this.c) + "," + v45(this.d) + "," + v45(this.e) + "," + v45(this.f) + ")";
            }
        },
        parent: a421.Element,
        construct: {
            ctm: function() {
                return new a421.Matrix(this.node.getCTM());
            },
            screenCTM: function() {
                if (this instanceof a421.Nested) {
                    var t940 = this.rect(1, 1), e706 = t940.node.getScreenCTM();
                    return t940.remove(), new a421.Matrix(e706);
                }
                return new a421.Matrix(this.node.getScreenCTM());
            }
        }
    }), a421.Point = a421.invent({
        create: function(t941, e707) {
            var a430;
            a430 = Array.isArray(t941) ? {
                x: t941[0],
                y: t941[1]
            } : "object" === i(t941) ? {
                x: t941.x,
                y: t941.y
            } : null != t941 ? {
                x: t941,
                y: null != e707 ? e707 : t941
            } : {
                x: 0,
                y: 0
            }, this.x = a430.x, this.y = a430.y;
        },
        extend: {
            clone: function() {
                return new a421.Point(this);
            },
            morph: function(t942, e708) {
                return this.destination = new a421.Point(t942, e708), this;
            }
        }
    }), a421.extend(a421.Element, {
        point: function(t943, e709) {
            return new a421.Point(t943, e709).transform(this.screenCTM().inverse());
        }
    }), a421.extend(a421.Element, {
        attr: function(t944, e710, s359) {
            if (null == t944) {
                for(t944 = {
                }, s359 = (e710 = this.node.attributes).length - 1; s359 >= 0; s359--)t944[e710[s359].nodeName] = a421.regex.isNumber.test(e710[s359].nodeValue) ? parseFloat(e710[s359].nodeValue) : e710[s359].nodeValue;
                return t944;
            }
            if ("object" === i(t944)) for(var r308 in t944)this.attr(r308, t944[r308]);
            else if (null === e710) this.node.removeAttribute(t944);
            else {
                if (null == e710) return null == (e710 = this.node.getAttribute(t944)) ? a421.defaults.attrs[t944] : a421.regex.isNumber.test(e710) ? parseFloat(e710) : e710;
                "stroke-width" == t944 ? this.attr("stroke", parseFloat(e710) > 0 ? this._stroke : null) : "stroke" == t944 && (this._stroke = e710), "fill" != t944 && "stroke" != t944 || (a421.regex.isImage.test(e710) && (e710 = this.doc().defs().image(e710, 0, 0)), e710 instanceof a421.Image && (e710 = this.doc().defs().pattern(0, 0, function() {
                    this.add(e710);
                }))), "number" == typeof e710 ? e710 = new a421.Number(e710) : a421.Color.isColor(e710) ? e710 = new a421.Color(e710) : Array.isArray(e710) && (e710 = new a421.Array(e710)), "leading" == t944 ? this.leading && this.leading(e710) : "string" == typeof s359 ? this.node.setAttributeNS(s359, t944, e710.toString()) : this.node.setAttribute(t944, e710.toString()), !this.rebuild || "font-size" != t944 && "x" != t944 || this.rebuild(t944, e710);
            }
            return this;
        }
    }), a421.extend(a421.Element, {
        transform: function(t945, e711) {
            var s360;
            return "object" !== i(t945) ? (s360 = new a421.Matrix(this).extract(), "string" == typeof t945 ? s360[t945] : s360) : (s360 = new a421.Matrix(this), e711 = !!e711 || !!t945.relative, null != t945.a && (s360 = e711 ? s360.multiply(new a421.Matrix(t945)) : new a421.Matrix(t945)), this.attr("transform", s360));
        }
    }), a421.extend(a421.Element, {
        untransform: function() {
            return this.attr("transform", null);
        },
        matrixify: function() {
            return (this.attr("transform") || "").split(a421.regex.transforms).slice(0, -1).map(function(t946) {
                var e712 = t946.trim().split("(");
                return [
                    e712[0],
                    e712[1].split(a421.regex.delimiter).map(function(t947) {
                        return parseFloat(t947);
                    })
                ];
            }).reduce(function(t948, e713) {
                return "matrix" == e713[0] ? t948.multiply(p72(e713[1])) : t948[e713[0]].apply(t948, e713[1]);
            }, new a421.Matrix);
        },
        toParent: function(t949) {
            if (this == t949) return this;
            var e714 = this.screenCTM(), i532 = t949.screenCTM().inverse();
            return this.addTo(t949).untransform().transform(i532.multiply(e714)), this;
        },
        toDoc: function() {
            return this.toParent(this.doc());
        }
    }), a421.Transformation = a421.invent({
        create: function(t950, e715) {
            if (arguments.length > 1 && "boolean" != typeof e715) return this.constructor.call(this, [].slice.call(arguments));
            if (Array.isArray(t950)) for(var a431 = 0, s361 = this.arguments.length; a431 < s361; ++a431)this[this.arguments[a431]] = t950[a431];
            else if (t950 && "object" === i(t950)) for(a431 = 0, s361 = this.arguments.length; a431 < s361; ++a431)this[this.arguments[a431]] = t950[this.arguments[a431]];
            this.inversed = !1, !0 === e715 && (this.inversed = !0);
        }
    }), a421.Translate = a421.invent({
        parent: a421.Matrix,
        inherit: a421.Transformation,
        create: function(t, e) {
            this.constructor.apply(this, [].slice.call(arguments));
        },
        extend: {
            arguments: [
                "transformedX",
                "transformedY"
            ],
            method: "translate"
        }
    }), a421.extend(a421.Element, {
        style: function(t951, e716) {
            if (0 == arguments.length) return this.node.style.cssText || "";
            if (arguments.length < 2) {
                if ("object" === i(t951)) for(var s362 in t951)this.style(s362, t951[s362]);
                else {
                    if (!a421.regex.isCss.test(t951)) return this.node.style[c145(t951)];
                    for(t951 = t951.split(/\s*;\s*/).filter(function(t952) {
                        return !!t952;
                    }).map(function(t953) {
                        return t953.split(/\s*:\s*/);
                    }); e716 = t951.pop();)this.style(e716[0], e716[1]);
                }
            } else this.node.style[c145(t951)] = null === e716 || a421.regex.isBlank.test(e716) ? "" : e716;
            return this;
        }
    }), a421.Parent = a421.invent({
        create: function(t954) {
            this.constructor.call(this, t954);
        },
        inherit: a421.Element,
        extend: {
            children: function() {
                return a421.utils.map(a421.utils.filterSVGElements(this.node.childNodes), function(t955) {
                    return a421.adopt(t955);
                });
            },
            add: function(t956, e717) {
                return null == e717 ? this.node.appendChild(t956.node) : t956.node != this.node.childNodes[e717] && this.node.insertBefore(t956.node, this.node.childNodes[e717]), this;
            },
            put: function(t957, e718) {
                return this.add(t957, e718), t957;
            },
            has: function(t958) {
                return this.index(t958) >= 0;
            },
            index: function(t959) {
                return [].slice.call(this.node.childNodes).indexOf(t959.node);
            },
            get: function(t) {
                return a421.adopt(this.node.childNodes[t]);
            },
            first: function() {
                return this.get(0);
            },
            last: function() {
                return this.get(this.node.childNodes.length - 1);
            },
            each: function(t960, e719) {
                for(var i533 = this.children(), s363 = 0, r309 = i533.length; s363 < r309; s363++)i533[s363] instanceof a421.Element && t960.apply(i533[s363], [
                    s363,
                    i533
                ]), e719 && i533[s363] instanceof a421.Container && i533[s363].each(t960, e719);
                return this;
            },
            removeElement: function(t961) {
                return this.node.removeChild(t961.node), this;
            },
            clear: function() {
                for(; this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);
                return delete this._defs, this;
            },
            defs: function() {
                return this.doc().defs();
            }
        }
    }), a421.extend(a421.Parent, {
        ungroup: function(t962, e720) {
            return 0 === e720 || this instanceof a421.Defs || this.node == a421.parser.draw || (t962 = t962 || (this instanceof a421.Doc ? this : this.parent(a421.Parent)), e720 = e720 || 1 / 0, this.each(function() {
                return this instanceof a421.Defs ? this : this instanceof a421.Parent ? this.ungroup(t962, e720 - 1) : this.toParent(t962);
            }), this.node.firstChild || this.remove()), this;
        },
        flatten: function(t963, e721) {
            return this.ungroup(t963, e721);
        }
    }), a421.Container = a421.invent({
        create: function(t964) {
            this.constructor.call(this, t964);
        },
        inherit: a421.Parent
    }), a421.ViewBox = a421.invent({
        parent: a421.Container,
        construct: {
        }
    }), [
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mouseover",
        "mouseout",
        "mousemove",
        "touchstart",
        "touchmove",
        "touchleave",
        "touchend",
        "touchcancel"
    ].forEach(function(t965) {
        a421.Element.prototype[t965] = function(e722) {
            return a421.on(this.node, t965, e722), this;
        };
    }), a421.listeners = [], a421.handlerMap = [], a421.listenerId = 0, a421.on = function(t966, e723, i534, s364, r310) {
        var o273 = i534.bind(s364 || t966.instance || t966), n = (a421.handlerMap.indexOf(t966) + 1 || a421.handlerMap.push(t966)) - 1, l196 = e723.split(".")[0], h = e723.split(".")[1] || "*";
        a421.listeners[n] = a421.listeners[n] || {
        }, a421.listeners[n][l196] = a421.listeners[n][l196] || {
        }, a421.listeners[n][l196][h] = a421.listeners[n][l196][h] || {
        }, i534._svgjsListenerId || (i534._svgjsListenerId = ++a421.listenerId), a421.listeners[n][l196][h][i534._svgjsListenerId] = o273, t966.addEventListener(l196, o273, r310 || {
            passive: !0
        });
    }, a421.off = function(t967, e724, i535) {
        var s365 = a421.handlerMap.indexOf(t967), r311 = e724 && e724.split(".")[0], o274 = e724 && e724.split(".")[1], n232 = "";
        if (-1 != s365) {
            if (i535) {
                if ("function" == typeof i535 && (i535 = i535._svgjsListenerId), !i535) return;
                a421.listeners[s365][r311] && a421.listeners[s365][r311][o274 || "*"] && (t967.removeEventListener(r311, a421.listeners[s365][r311][o274 || "*"][i535], !1), delete a421.listeners[s365][r311][o274 || "*"][i535]);
            } else if (o274 && r311) {
                if (a421.listeners[s365][r311] && a421.listeners[s365][r311][o274]) {
                    for(var l197 in a421.listeners[s365][r311][o274])a421.off(t967, [
                        r311,
                        o274
                    ].join("."), l197);
                    delete a421.listeners[s365][r311][o274];
                }
            } else if (o274) for(var h162 in a421.listeners[s365])for(var n232 in a421.listeners[s365][h162])o274 === n232 && a421.off(t967, [
                h162,
                o274
            ].join("."));
            else if (r311) {
                if (a421.listeners[s365][r311]) {
                    for(var n232 in a421.listeners[s365][r311])a421.off(t967, [
                        r311,
                        n232
                    ].join("."));
                    delete a421.listeners[s365][r311];
                }
            } else {
                for(var h162 in a421.listeners[s365])a421.off(t967, h162);
                delete a421.listeners[s365], delete a421.handlerMap[s365];
            }
        }
    }, a421.extend(a421.Element, {
        on: function(t968, e725, i536, s366) {
            return a421.on(this.node, t968, e725, i536, s366), this;
        },
        off: function(t969, e726) {
            return a421.off(this.node, t969, e726), this;
        },
        fire: function(e727, i537) {
            return e727 instanceof t836.Event ? this.node.dispatchEvent(e727) : this.node.dispatchEvent(e727 = new a421.CustomEvent(e727, {
                detail: i537,
                cancelable: !0
            })), this._event = e727, this;
        },
        event: function() {
            return this._event;
        }
    }), a421.Defs = a421.invent({
        create: "defs",
        inherit: a421.Container
    }), a421.G = a421.invent({
        create: "g",
        inherit: a421.Container,
        extend: {
            x: function(t970) {
                return null == t970 ? this.transform("x") : this.transform({
                    x: t970 - this.x()
                }, !0);
            }
        },
        construct: {
            group: function() {
                return this.put(new a421.G);
            }
        }
    }), a421.Doc = a421.invent({
        create: function(t971) {
            t971 && ("svg" == (t971 = "string" == typeof t971 ? e647.getElementById(t971) : t971).nodeName ? this.constructor.call(this, t971) : (this.constructor.call(this, a421.create("svg")), t971.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
        },
        inherit: a421.Container,
        extend: {
            namespace: function() {
                return this.attr({
                    xmlns: a421.ns,
                    version: "1.1"
                }).attr("xmlns:xlink", a421.xlink, a421.xmlns).attr("xmlns:svgjs", a421.svgjs, a421.xmlns);
            },
            defs: function() {
                var t972;
                return this._defs || ((t972 = this.node.getElementsByTagName("defs")[0]) ? this._defs = a421.adopt(t972) : this._defs = new a421.Defs, this.node.appendChild(this._defs.node)), this._defs;
            },
            parent: function() {
                return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null;
            },
            remove: function() {
                return this.parent() && this.parent().removeChild(this.node), this;
            },
            clear: function() {
                for(; this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);
                return delete this._defs, a421.parser.draw && !a421.parser.draw.parentNode && this.node.appendChild(a421.parser.draw), this;
            },
            clone: function(t973) {
                this.writeDataToDom();
                var e728 = this.node, i538 = x43(e728.cloneNode(!0));
                return t973 ? (t973.node || t973).appendChild(i538.node) : e728.parentNode.insertBefore(i538.node, e728.nextSibling), i538;
            }
        }
    }), a421.extend(a421.Element, {
    }), a421.Gradient = a421.invent({
        create: function(t974) {
            this.constructor.call(this, a421.create(t974 + "Gradient")), this.type = t974;
        },
        inherit: a421.Container,
        extend: {
            at: function(t975, e729, i539) {
                return this.put(new a421.Stop).update(t975, e729, i539);
            },
            update: function(t976) {
                return this.clear(), "function" == typeof t976 && t976.call(this, this), this;
            },
            fill: function() {
                return "url(#" + this.id() + ")";
            },
            toString: function() {
                return this.fill();
            },
            attr: function(t977, e730, i540) {
                return "transform" == t977 && (t977 = "gradientTransform"), a421.Container.prototype.attr.call(this, t977, e730, i540);
            }
        },
        construct: {
            gradient: function(t978, e731) {
                return this.defs().gradient(t978, e731);
            }
        }
    }), a421.extend(a421.Gradient, a421.FX, {
        from: function(t979, e732) {
            return "radial" == (this._target || this).type ? this.attr({
                fx: new a421.Number(t979),
                fy: new a421.Number(e732)
            }) : this.attr({
                x1: new a421.Number(t979),
                y1: new a421.Number(e732)
            });
        },
        to: function(t980, e733) {
            return "radial" == (this._target || this).type ? this.attr({
                cx: new a421.Number(t980),
                cy: new a421.Number(e733)
            }) : this.attr({
                x2: new a421.Number(t980),
                y2: new a421.Number(e733)
            });
        }
    }), a421.extend(a421.Defs, {
        gradient: function(t981, e734) {
            return this.put(new a421.Gradient(t981)).update(e734);
        }
    }), a421.Stop = a421.invent({
        create: "stop",
        inherit: a421.Element,
        extend: {
            update: function(t982) {
                return ("number" == typeof t982 || t982 instanceof a421.Number) && (t982 = {
                    offset: arguments[0],
                    color: arguments[1],
                    opacity: arguments[2]
                }), null != t982.opacity && this.attr("stop-opacity", t982.opacity), null != t982.color && this.attr("stop-color", t982.color), null != t982.offset && this.attr("offset", new a421.Number(t982.offset)), this;
            }
        }
    }), a421.Pattern = a421.invent({
        create: "pattern",
        inherit: a421.Container,
        extend: {
            fill: function() {
                return "url(#" + this.id() + ")";
            },
            update: function(t983) {
                return this.clear(), "function" == typeof t983 && t983.call(this, this), this;
            },
            toString: function() {
                return this.fill();
            },
            attr: function(t984, e735, i541) {
                return "transform" == t984 && (t984 = "patternTransform"), a421.Container.prototype.attr.call(this, t984, e735, i541);
            }
        },
        construct: {
            pattern: function(t985, e736, i542) {
                return this.defs().pattern(t985, e736, i542);
            }
        }
    }), a421.extend(a421.Defs, {
        pattern: function(t986, e737, i543) {
            return this.put(new a421.Pattern).update(i543).attr({
                x: 0,
                y: 0,
                width: t986,
                height: e737,
                patternUnits: "userSpaceOnUse"
            });
        }
    }), a421.Shape = a421.invent({
        create: function(t987) {
            this.constructor.call(this, t987);
        },
        inherit: a421.Element
    }), a421.Symbol = a421.invent({
        create: "symbol",
        inherit: a421.Container,
        construct: {
            symbol: function() {
                return this.put(new a421.Symbol);
            }
        }
    }), a421.Use = a421.invent({
        create: "use",
        inherit: a421.Shape,
        extend: {
            element: function(t988, e738) {
                return this.attr("href", (e738 || "") + "#" + t988, a421.xlink);
            }
        },
        construct: {
            use: function(t989, e739) {
                return this.put(new a421.Use).element(t989, e739);
            }
        }
    }), a421.Rect = a421.invent({
        create: "rect",
        inherit: a421.Shape,
        construct: {
            rect: function(t990, e740) {
                return this.put(new a421.Rect).size(t990, e740);
            }
        }
    }), a421.Circle = a421.invent({
        create: "circle",
        inherit: a421.Shape,
        construct: {
            circle: function(t991) {
                return this.put(new a421.Circle).rx(new a421.Number(t991).divide(2)).move(0, 0);
            }
        }
    }), a421.extend(a421.Circle, a421.FX, {
        rx: function(t992) {
            return this.attr("r", t992);
        },
        ry: function(t993) {
            return this.rx(t993);
        }
    }), a421.Ellipse = a421.invent({
        create: "ellipse",
        inherit: a421.Shape,
        construct: {
            ellipse: function(t994, e741) {
                return this.put(new a421.Ellipse).size(t994, e741).move(0, 0);
            }
        }
    }), a421.extend(a421.Ellipse, a421.Rect, a421.FX, {
        rx: function(t995) {
            return this.attr("rx", t995);
        },
        ry: function(t996) {
            return this.attr("ry", t996);
        }
    }), a421.extend(a421.Circle, a421.Ellipse, {
        x: function(t997) {
            return null == t997 ? this.cx() - this.rx() : this.cx(t997 + this.rx());
        },
        y: function(t998) {
            return null == t998 ? this.cy() - this.ry() : this.cy(t998 + this.ry());
        },
        cx: function(t999) {
            return null == t999 ? this.attr("cx") : this.attr("cx", t999);
        },
        cy: function(t1000) {
            return null == t1000 ? this.attr("cy") : this.attr("cy", t1000);
        },
        width: function(t1001) {
            return null == t1001 ? 2 * this.rx() : this.rx(new a421.Number(t1001).divide(2));
        },
        height: function(t1002) {
            return null == t1002 ? 2 * this.ry() : this.ry(new a421.Number(t1002).divide(2));
        },
        size: function(t1003, e742) {
            var i544 = u92(this, t1003, e742);
            return this.rx(new a421.Number(i544.width).divide(2)).ry(new a421.Number(i544.height).divide(2));
        }
    }), a421.Line = a421.invent({
        create: "line",
        inherit: a421.Shape,
        extend: {
            array: function() {
                return new a421.PointArray([
                    [
                        this.attr("x1"),
                        this.attr("y1")
                    ],
                    [
                        this.attr("x2"),
                        this.attr("y2")
                    ]
                ]);
            },
            plot: function(t1004, e743, i545, s367) {
                return null == t1004 ? this.array() : (t1004 = void 0 !== e743 ? {
                    x1: t1004,
                    y1: e743,
                    x2: i545,
                    y2: s367
                } : new a421.PointArray(t1004).toLine(), this.attr(t1004));
            },
            move: function(t1005, e744) {
                return this.attr(this.array().move(t1005, e744).toLine());
            },
            size: function(t1006, e745) {
                var i546 = u92(this, t1006, e745);
                return this.attr(this.array().size(i546.width, i546.height).toLine());
            }
        },
        construct: {
            line: function(t1007, e746, i547, s368) {
                return a421.Line.prototype.plot.apply(this.put(new a421.Line), null != t1007 ? [
                    t1007,
                    e746,
                    i547,
                    s368
                ] : [
                    0,
                    0,
                    0,
                    0
                ]);
            }
        }
    }), a421.Polyline = a421.invent({
        create: "polyline",
        inherit: a421.Shape,
        construct: {
            polyline: function(t1008) {
                return this.put(new a421.Polyline).plot(t1008 || new a421.PointArray);
            }
        }
    }), a421.Polygon = a421.invent({
        create: "polygon",
        inherit: a421.Shape,
        construct: {
            polygon: function(t1009) {
                return this.put(new a421.Polygon).plot(t1009 || new a421.PointArray);
            }
        }
    }), a421.extend(a421.Polyline, a421.Polygon, {
        array: function() {
            return this._array || (this._array = new a421.PointArray(this.attr("points")));
        },
        plot: function(t1010) {
            return null == t1010 ? this.array() : this.clear().attr("points", "string" == typeof t1010 ? t1010 : this._array = new a421.PointArray(t1010));
        },
        clear: function() {
            return delete this._array, this;
        },
        move: function(t1011, e747) {
            return this.attr("points", this.array().move(t1011, e747));
        },
        size: function(t1012, e748) {
            var i548 = u92(this, t1012, e748);
            return this.attr("points", this.array().size(i548.width, i548.height));
        }
    }), a421.extend(a421.Line, a421.Polyline, a421.Polygon, {
        morphArray: a421.PointArray,
        x: function(t1013) {
            return null == t1013 ? this.bbox().x : this.move(t1013, this.bbox().y);
        },
        y: function(t1014) {
            return null == t1014 ? this.bbox().y : this.move(this.bbox().x, t1014);
        },
        width: function(t1015) {
            var e749 = this.bbox();
            return null == t1015 ? e749.width : this.size(t1015, e749.height);
        },
        height: function(t1016) {
            var e750 = this.bbox();
            return null == t1016 ? e750.height : this.size(e750.width, t1016);
        }
    }), a421.Path = a421.invent({
        create: "path",
        inherit: a421.Shape,
        extend: {
            morphArray: a421.PathArray,
            array: function() {
                return this._array || (this._array = new a421.PathArray(this.attr("d")));
            },
            plot: function(t1017) {
                return null == t1017 ? this.array() : this.clear().attr("d", "string" == typeof t1017 ? t1017 : this._array = new a421.PathArray(t1017));
            },
            clear: function() {
                return delete this._array, this;
            }
        },
        construct: {
            path: function(t1018) {
                return this.put(new a421.Path).plot(t1018 || new a421.PathArray);
            }
        }
    }), a421.Image = a421.invent({
        create: "image",
        inherit: a421.Shape,
        extend: {
            load: function(e751) {
                if (!e751) return this;
                var i549 = this, s369 = new t836.Image;
                return a421.on(s369, "load", function() {
                    a421.off(s369);
                    var t1019 = i549.parent(a421.Pattern);
                    null !== t1019 && (0 == i549.width() && 0 == i549.height() && i549.size(s369.width, s369.height), t1019 && 0 == t1019.width() && 0 == t1019.height() && t1019.size(i549.width(), i549.height()), "function" == typeof i549._loaded && i549._loaded.call(i549, {
                        width: s369.width,
                        height: s369.height,
                        ratio: s369.width / s369.height,
                        url: e751
                    }));
                }), a421.on(s369, "error", function(t1020) {
                    a421.off(s369), "function" == typeof i549._error && i549._error.call(i549, t1020);
                }), this.attr("href", s369.src = this.src = e751, a421.xlink);
            },
            loaded: function(t1021) {
                return this._loaded = t1021, this;
            },
            error: function(t1022) {
                return this._error = t1022, this;
            }
        },
        construct: {
            image: function(t1023, e752, i550) {
                return this.put(new a421.Image).load(t1023).size(e752 || 0, i550 || e752 || 0);
            }
        }
    }), a421.Text = a421.invent({
        create: function() {
            this.constructor.call(this, a421.create("text")), this.dom.leading = new a421.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", a421.defaults.attrs["font-family"]);
        },
        inherit: a421.Shape,
        extend: {
            x: function(t1024) {
                return null == t1024 ? this.attr("x") : this.attr("x", t1024);
            },
            text: function(t1025) {
                if (void 0 === t1025) {
                    t1025 = "";
                    for(var e753 = this.node.childNodes, i551 = 0, s370 = e753.length; i551 < s370; ++i551)0 != i551 && 3 != e753[i551].nodeType && 1 == a421.adopt(e753[i551]).dom.newLined && (t1025 += "\n"), t1025 += e753[i551].textContent;
                    return t1025;
                }
                if (this.clear().build(!0), "function" == typeof t1025) t1025.call(this, this);
                else {
                    i551 = 0;
                    for(var r312 = (t1025 = t1025.split("\n")).length; i551 < r312; i551++)this.tspan(t1025[i551]).newLine();
                }
                return this.build(!1).rebuild();
            },
            size: function(t1026) {
                return this.attr("font-size", t1026).rebuild();
            },
            leading: function(t1027) {
                return null == t1027 ? this.dom.leading : (this.dom.leading = new a421.Number(t1027), this.rebuild());
            },
            lines: function() {
                var t1028 = (this.textPath && this.textPath() || this).node, e754 = a421.utils.map(a421.utils.filterSVGElements(t1028.childNodes), function(t1029) {
                    return a421.adopt(t1029);
                });
                return new a421.Set(e754);
            },
            rebuild: function(t1030) {
                if ("boolean" == typeof t1030 && (this._rebuild = t1030), this._rebuild) {
                    var e755 = this, i552 = 0, s371 = this.dom.leading * new a421.Number(this.attr("font-size"));
                    this.lines().each(function() {
                        this.dom.newLined && (e755.textPath() || this.attr("x", e755.attr("x")), "\n" == this.text() ? i552 += s371 : (this.attr("dy", s371 + i552), i552 = 0));
                    }), this.fire("rebuild");
                }
                return this;
            },
            build: function(t1031) {
                return this._build = !!t1031, this;
            },
            setData: function(t1032) {
                return this.dom = t1032, this.dom.leading = new a421.Number(t1032.leading || 1.3), this;
            }
        },
        construct: {
            text: function(t1033) {
                return this.put(new a421.Text).text(t1033);
            },
            plain: function(t1034) {
                return this.put(new a421.Text).plain(t1034);
            }
        }
    }), a421.Tspan = a421.invent({
        create: "tspan",
        inherit: a421.Shape,
        extend: {
            text: function(t1035) {
                return null == t1035 ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t1035 ? t1035.call(this, this) : this.plain(t1035), this);
            },
            dx: function(t1036) {
                return this.attr("dx", t1036);
            },
            dy: function(t1037) {
                return this.attr("dy", t1037);
            },
            newLine: function() {
                var t1038 = this.parent(a421.Text);
                return this.dom.newLined = !0, this.dy(t1038.dom.leading * t1038.attr("font-size")).attr("x", t1038.x());
            }
        }
    }), a421.extend(a421.Text, a421.Tspan, {
        plain: function(t1039) {
            return !1 === this._build && this.clear(), this.node.appendChild(e647.createTextNode(t1039)), this;
        },
        tspan: function(t1040) {
            var e756 = (this.textPath && this.textPath() || this).node, i553 = new a421.Tspan;
            return !1 === this._build && this.clear(), e756.appendChild(i553.node), i553.text(t1040);
        },
        clear: function() {
            for(var t1041 = (this.textPath && this.textPath() || this).node; t1041.hasChildNodes();)t1041.removeChild(t1041.lastChild);
            return this;
        },
        length: function() {
            return this.node.getComputedTextLength();
        }
    }), a421.TextPath = a421.invent({
        create: "textPath",
        inherit: a421.Parent,
        parent: a421.Text,
        construct: {
            morphArray: a421.PathArray,
            array: function() {
                var t1042 = this.track();
                return t1042 ? t1042.array() : null;
            },
            plot: function(t1043) {
                var e757 = this.track(), i554 = null;
                return e757 && (i554 = e757.plot(t1043)), null == t1043 ? i554 : this;
            },
            track: function() {
                var t1044 = this.textPath();
                if (t1044) return t1044.reference("href");
            },
            textPath: function() {
                if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return a421.adopt(this.node.firstChild);
            }
        }
    }), a421.Nested = a421.invent({
        create: function() {
            this.constructor.call(this, a421.create("svg")), this.style("overflow", "visible");
        },
        inherit: a421.Container,
        construct: {
            nested: function() {
                return this.put(new a421.Nested);
            }
        }
    });
    var l193 = {
        stroke: [
            "color",
            "width",
            "opacity",
            "linecap",
            "linejoin",
            "miterlimit",
            "dasharray",
            "dashoffset"
        ],
        fill: [
            "color",
            "opacity",
            "rule"
        ],
        prefix: function(t1045, e758) {
            return "color" == e758 ? t1045 : t1045 + "-" + e758;
        }
    };
    function h160(t, e, i555, s372) {
        return i555 + s372.replace(a421.regex.dots, " .");
    }
    function c145(t1046) {
        return t1046.toLowerCase().replace(/-(.)/g, function(t, e759) {
            return e759.toUpperCase();
        });
    }
    function d130(t1047) {
        return t1047.charAt(0).toUpperCase() + t1047.slice(1);
    }
    function g109(t1048) {
        var e760 = t1048.toString(16);
        return 1 == e760.length ? "0" + e760 : e760;
    }
    function u92(t1049, e761, i556) {
        if (null == e761 || null == i556) {
            var a432 = t1049.bbox();
            null == e761 ? e761 = a432.width / a432.height * i556 : null == i556 && (i556 = a432.height / a432.width * e761);
        }
        return {
            width: e761,
            height: i556
        };
    }
    function f77(t1050, e762, i557) {
        return {
            x: e762 * t1050.a + i557 * t1050.c + 0,
            y: e762 * t1050.b + i557 * t1050.d + 0
        };
    }
    function p72(t1051) {
        return {
            a: t1051[0],
            b: t1051[1],
            c: t1051[2],
            d: t1051[3],
            e: t1051[4],
            f: t1051[5]
        };
    }
    function x43(e763) {
        for(var i558 = e763.childNodes.length - 1; i558 >= 0; i558--)e763.childNodes[i558] instanceof t836.SVGElement && x43(e763.childNodes[i558]);
        return a421.adopt(e763).id(a421.eid(e763.nodeName));
    }
    function b61(t1052) {
        return null == t1052.x && (t1052.x = 0, t1052.y = 0, t1052.width = 0, t1052.height = 0), t1052.w = t1052.width, t1052.h = t1052.height, t1052.x2 = t1052.x + t1052.width, t1052.y2 = t1052.y + t1052.height, t1052.cx = t1052.x + t1052.width / 2, t1052.cy = t1052.y + t1052.height / 2, t1052;
    }
    function v45(t1053) {
        return Math.abs(t1053) > 0.0000000000000000000000000000000000001 ? t1053 : 0;
    }
    [
        "fill",
        "stroke"
    ].forEach(function(t1054) {
        var e764 = {
        };
        e764[t1054] = function(e765) {
            if (void 0 === e765) return this;
            if ("string" == typeof e765 || a421.Color.isRgb(e765) || e765 && "function" == typeof e765.fill) this.attr(t1054, e765);
            else for(var i559 = l193[t1054].length - 1; i559 >= 0; i559--)null != e765[l193[t1054][i559]] && this.attr(l193.prefix(t1054, l193[t1054][i559]), e765[l193[t1054][i559]]);
            return this;
        }, a421.extend(a421.Element, a421.FX, e764);
    }), a421.extend(a421.Element, a421.FX, {
        translate: function(t1055, e766) {
            return this.transform({
                x: t1055,
                y: e766
            });
        },
        matrix: function(t1056) {
            return this.attr("transform", new a421.Matrix(6 == arguments.length ? [].slice.call(arguments) : t1056));
        },
        opacity: function(t1057) {
            return this.attr("opacity", t1057);
        },
        dx: function(t1058) {
            return this.x(new a421.Number(t1058).plus(this instanceof a421.FX ? 0 : this.x()), !0);
        },
        dy: function(t1059) {
            return this.y(new a421.Number(t1059).plus(this instanceof a421.FX ? 0 : this.y()), !0);
        }
    }), a421.extend(a421.Path, {
        length: function() {
            return this.node.getTotalLength();
        },
        pointAt: function(t1060) {
            return this.node.getPointAtLength(t1060);
        }
    }), a421.Set = a421.invent({
        create: function(t1061) {
            Array.isArray(t1061) ? this.members = t1061 : this.clear();
        },
        extend: {
            add: function() {
                for(var t1062 = [].slice.call(arguments), e767 = 0, i560 = t1062.length; e767 < i560; e767++)this.members.push(t1062[e767]);
                return this;
            },
            remove: function(t1063) {
                var e768 = this.index(t1063);
                return e768 > -1 && this.members.splice(e768, 1), this;
            },
            each: function(t1064) {
                for(var e769 = 0, i561 = this.members.length; e769 < i561; e769++)t1064.apply(this.members[e769], [
                    e769,
                    this.members
                ]);
                return this;
            },
            clear: function() {
                return this.members = [], this;
            },
            length: function() {
                return this.members.length;
            },
            has: function(t1065) {
                return this.index(t1065) >= 0;
            },
            index: function(t1066) {
                return this.members.indexOf(t1066);
            },
            get: function(t) {
                return this.members[t];
            },
            first: function() {
                return this.get(0);
            },
            last: function() {
                return this.get(this.members.length - 1);
            },
            valueOf: function() {
                return this.members;
            }
        },
        construct: {
            set: function(t1067) {
                return new a421.Set(t1067);
            }
        }
    }), a421.FX.Set = a421.invent({
        create: function(t1068) {
            this.set = t1068;
        }
    }), a421.Set.inherit = function() {
        var t1069 = [];
        for(var e770 in a421.Shape.prototype)"function" == typeof a421.Shape.prototype[e770] && "function" != typeof a421.Set.prototype[e770] && t1069.push(e770);
        for(var e770 in t1069.forEach(function(t1070) {
            a421.Set.prototype[t1070] = function() {
                for(var e771 = 0, i562 = this.members.length; e771 < i562; e771++)this.members[e771] && "function" == typeof this.members[e771][t1070] && this.members[e771][t1070].apply(this.members[e771], arguments);
                return "animate" == t1070 ? this.fx || (this.fx = new a421.FX.Set(this)) : this;
            };
        }), t1069 = [], a421.FX.prototype)"function" == typeof a421.FX.prototype[e770] && "function" != typeof a421.FX.Set.prototype[e770] && t1069.push(e770);
        t1069.forEach(function(t) {
            a421.FX.Set.prototype[t] = function() {
                for(var e772 = 0, i563 = this.set.members.length; e772 < i563; e772++)this.set.members[e772].fx[t].apply(this.set.members[e772].fx, arguments);
                return this;
            };
        });
    }, a421.extend(a421.Element, {
    }), a421.extend(a421.Element, {
        remember: function(t1071, e773) {
            if ("object" === i(arguments[0])) for(var a433 in t1071)this.remember(a433, t1071[a433]);
            else {
                if (1 == arguments.length) return this.memory()[t1071];
                this.memory()[t1071] = e773;
            }
            return this;
        },
        forget: function() {
            if (0 == arguments.length) this._memory = {
            };
            else for(var t1072 = arguments.length - 1; t1072 >= 0; t1072--)delete this.memory()[arguments[t1072]];
            return this;
        },
        memory: function() {
            return this._memory || (this._memory = {
            });
        }
    }), a421.get = function(t1073) {
        var i564 = e647.getElementById(function(t1074) {
            var e774 = (t1074 || "").toString().match(a421.regex.reference);
            if (e774) return e774[1];
        }(t1073) || t1073);
        return a421.adopt(i564);
    }, a421.select = function(t1075, i565) {
        return new a421.Set(a421.utils.map((i565 || e647).querySelectorAll(t1075), function(t1076) {
            return a421.adopt(t1076);
        }));
    }, a421.extend(a421.Parent, {
        select: function(t1077) {
            return a421.select(t1077, this.node);
        }
    });
    var m22 = "abcdef".split("");
    if ("function" != typeof t836.CustomEvent) {
        var y46 = function(t1078, i566) {
            i566 = i566 || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var a434 = e647.createEvent("CustomEvent");
            return a434.initCustomEvent(t1078, i566.bubbles, i566.cancelable, i566.detail), a434;
        };
        y46.prototype = t836.Event.prototype, a421.CustomEvent = y46;
    } else a421.CustomEvent = t836.CustomEvent;
    return a421;
}, "function" == typeof define && define.amd ? define(function() {
    return zt(It, It.document);
}) : "object" === ("undefined" == typeof exports ? "undefined" : i(exports)) && "undefined" != typeof module ? module.exports = It.document ? zt(It, It.document) : function(t1079) {
    return zt(t1079, t1079.document);
} : It.SVG = zt(It, It.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
* https://github.com/wout/svg.filter.js
* Copyright (c) 2016 Wout Fierens; Licensed MIT */ (function() {
    SVG.Filter = SVG.invent({
        create: "filter",
        inherit: SVG.Parent,
        extend: {
            source: "SourceGraphic",
            sourceAlpha: "SourceAlpha",
            background: "BackgroundImage",
            backgroundAlpha: "BackgroundAlpha",
            fill: "FillPaint",
            stroke: "StrokePaint",
            autoSetIn: !0,
            put: function(t1081, e776) {
                return this.add(t1081, e776), !t1081.attr("in") && this.autoSetIn && t1081.attr("in", this.source), t1081.attr("result") || t1081.attr("result", t1081), t1081;
            },
            blend: function(t1082, e777, i568) {
                return this.put(new SVG.BlendEffect(t1082, e777, i568));
            },
            colorMatrix: function(t1083, e778) {
                return this.put(new SVG.ColorMatrixEffect(t1083, e778));
            },
            convolveMatrix: function(t1084) {
                return this.put(new SVG.ConvolveMatrixEffect(t1084));
            },
            componentTransfer: function(t1085) {
                return this.put(new SVG.ComponentTransferEffect(t1085));
            },
            composite: function(t1086, e779, i569) {
                return this.put(new SVG.CompositeEffect(t1086, e779, i569));
            },
            flood: function(t1087, e780) {
                return this.put(new SVG.FloodEffect(t1087, e780));
            },
            offset: function(t1088, e781) {
                return this.put(new SVG.OffsetEffect(t1088, e781));
            },
            image: function(t1089) {
                return this.put(new SVG.ImageEffect(t1089));
            },
            merge: function() {
                var t1090 = [
                    void 0
                ];
                for(var e in arguments)t1090.push(arguments[e]);
                return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t1090)));
            },
            gaussianBlur: function(t1091, e782) {
                return this.put(new SVG.GaussianBlurEffect(t1091, e782));
            },
            morphology: function(t1092, e783) {
                return this.put(new SVG.MorphologyEffect(t1092, e783));
            },
            diffuseLighting: function(t1093, e784, i570) {
                return this.put(new SVG.DiffuseLightingEffect(t1093, e784, i570));
            },
            displacementMap: function(t1094, e785, i571, a436, s374) {
                return this.put(new SVG.DisplacementMapEffect(t1094, e785, i571, a436, s374));
            },
            specularLighting: function(t1095, e786, i572, a437) {
                return this.put(new SVG.SpecularLightingEffect(t1095, e786, i572, a437));
            },
            tile: function() {
                return this.put(new SVG.TileEffect);
            },
            turbulence: function(t1096, e787, i573, a438, s375) {
                return this.put(new SVG.TurbulenceEffect(t1096, e787, i573, a438, s375));
            },
            toString: function() {
                return "url(#" + this.attr("id") + ")";
            }
        }
    }), SVG.extend(SVG.Defs, {
        filter: function(t1097) {
            var e788 = this.put(new SVG.Filter);
            return "function" == typeof t1097 && t1097.call(e788, e788), e788;
        }
    }), SVG.extend(SVG.Container, {
        filter: function(t1098) {
            return this.defs().filter(t1098);
        }
    }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
        filter: function(t1099) {
            return this.filterer = t1099 instanceof SVG.Element ? t1099 : this.doc().filter(t1099), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
        },
        unfilter: function(t1100) {
            return this.filterer && !0 === t1100 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
        }
    }), SVG.Effect = SVG.invent({
        create: function() {
            this.constructor.call(this);
        },
        inherit: SVG.Element,
        extend: {
            in: function(t1101) {
                return null == t1101 ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t1101);
            },
            result: function(t1102) {
                return null == t1102 ? this.attr("result") : this.attr("result", t1102);
            },
            toString: function() {
                return this.result();
            }
        }
    }), SVG.ParentEffect = SVG.invent({
        create: function() {
            this.constructor.call(this);
        },
        inherit: SVG.Parent,
        extend: {
            in: function(t1103) {
                return null == t1103 ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t1103);
            },
            result: function(t1104) {
                return null == t1104 ? this.attr("result") : this.attr("result", t1104);
            },
            toString: function() {
                return this.result();
            }
        }
    });
    var t1080 = {
        blend: function(t1105, e789) {
            return this.parent() && this.parent().blend(this, t1105, e789);
        },
        colorMatrix: function(t1106, e790) {
            return this.parent() && this.parent().colorMatrix(t1106, e790).in(this);
        },
        convolveMatrix: function(t1107) {
            return this.parent() && this.parent().convolveMatrix(t1107).in(this);
        },
        componentTransfer: function(t1108) {
            return this.parent() && this.parent().componentTransfer(t1108).in(this);
        },
        composite: function(t1109, e791) {
            return this.parent() && this.parent().composite(this, t1109, e791);
        },
        flood: function(t1110, e792) {
            return this.parent() && this.parent().flood(t1110, e792);
        },
        offset: function(t1111, e793) {
            return this.parent() && this.parent().offset(t1111, e793).in(this);
        },
        image: function(t1112) {
            return this.parent() && this.parent().image(t1112);
        },
        merge: function() {
            return this.parent() && this.parent().merge.apply(this.parent(), [
                this
            ].concat(arguments));
        },
        gaussianBlur: function(t1113, e794) {
            return this.parent() && this.parent().gaussianBlur(t1113, e794).in(this);
        },
        morphology: function(t1114, e795) {
            return this.parent() && this.parent().morphology(t1114, e795).in(this);
        },
        diffuseLighting: function(t1115, e796, i574) {
            return this.parent() && this.parent().diffuseLighting(t1115, e796, i574).in(this);
        },
        displacementMap: function(t1116, e797, i575, a439) {
            return this.parent() && this.parent().displacementMap(this, t1116, e797, i575, a439);
        },
        specularLighting: function(t1117, e798, i576, a440) {
            return this.parent() && this.parent().specularLighting(t1117, e798, i576, a440).in(this);
        },
        tile: function() {
            return this.parent() && this.parent().tile().in(this);
        },
        turbulence: function(t1118, e799, i577, a441, s376) {
            return this.parent() && this.parent().turbulence(t1118, e799, i577, a441, s376).in(this);
        }
    };
    SVG.extend(SVG.Effect, t1080), SVG.extend(SVG.ParentEffect, t1080), SVG.ChildEffect = SVG.invent({
        create: function() {
            this.constructor.call(this);
        },
        inherit: SVG.Element,
        extend: {
            in: function(t1119) {
                this.attr("in", t1119);
            }
        }
    });
    var e775 = {
        blend: function(t1120, e800, i578) {
            this.attr({
                in: t1120,
                in2: e800,
                mode: i578 || "normal"
            });
        },
        colorMatrix: function(t1121, e801) {
            "matrix" == t1121 && (e801 = s373(e801)), this.attr({
                type: t1121,
                values: void 0 === e801 ? null : e801
            });
        },
        convolveMatrix: function(t1122) {
            t1122 = s373(t1122), this.attr({
                order: Math.sqrt(t1122.split(" ").length),
                kernelMatrix: t1122
            });
        },
        composite: function(t1123, e802, i579) {
            this.attr({
                in: t1123,
                in2: e802,
                operator: i579
            });
        },
        flood: function(t1124, e803) {
            this.attr("flood-color", t1124), null != e803 && this.attr("flood-opacity", e803);
        },
        offset: function(t1125, e804) {
            this.attr({
                dx: t1125,
                dy: e804
            });
        },
        image: function(t1126) {
            this.attr("href", t1126, SVG.xlink);
        },
        displacementMap: function(t1127, e805, i580, a442, s377) {
            this.attr({
                in: t1127,
                in2: e805,
                scale: i580,
                xChannelSelector: a442,
                yChannelSelector: s377
            });
        },
        gaussianBlur: function(t1128, e806) {
            null != t1128 || null != e806 ? this.attr("stdDeviation", r313(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
        },
        morphology: function(t1129, e807) {
            this.attr({
                operator: t1129,
                radius: e807
            });
        },
        tile: function() {
        },
        turbulence: function(t1130, e808, i581, a443, s378) {
            this.attr({
                numOctaves: e808,
                seed: i581,
                stitchTiles: a443,
                baseFrequency: t1130,
                type: s378
            });
        }
    }, i567 = {
        merge: function() {
            var t1131;
            if (arguments[0] instanceof SVG.Set) {
                var e809 = this;
                arguments[0].each(function(t) {
                    this instanceof SVG.MergeNode ? e809.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e809.put(new SVG.MergeNode(this));
                });
            } else {
                t1131 = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                for(var i582 = 0; i582 < t1131.length; i582++)t1131[i582] instanceof SVG.MergeNode ? this.put(t1131[i582]) : this.put(new SVG.MergeNode(t1131[i582]));
            }
        },
        componentTransfer: function(t1132) {
            if (this.rgb = new SVG.Set, [
                "r",
                "g",
                "b",
                "a"
            ].forEach((function(t) {
                this[t] = new SVG["Func" + t.toUpperCase()]("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node);
            }).bind(this)), t1132) for(var e in t1132.rgb && ([
                "r",
                "g",
                "b"
            ].forEach((function(e) {
                this[e].attr(t1132.rgb);
            }).bind(this)), delete t1132.rgb), t1132)this[e].attr(t1132[e]);
        },
        diffuseLighting: function(t1133, e810, i583) {
            this.attr({
                surfaceScale: t1133,
                diffuseConstant: e810,
                kernelUnitLength: i583
            });
        },
        specularLighting: function(t1134, e811, i584, a444) {
            this.attr({
                surfaceScale: t1134,
                diffuseConstant: e811,
                specularExponent: i584,
                kernelUnitLength: a444
            });
        }
    }, a435 = {
        distantLight: function(t1135, e812) {
            this.attr({
                azimuth: t1135,
                elevation: e812
            });
        },
        pointLight: function(t1136, e813, i585) {
            this.attr({
                x: t1136,
                y: e813,
                z: i585
            });
        },
        spotLight: function(t1137, e814, i586, a445, s379, r314) {
            this.attr({
                x: t1137,
                y: e814,
                z: i586,
                pointsAtX: a445,
                pointsAtY: s379,
                pointsAtZ: r314
            });
        },
        mergeNode: function(t1138) {
            this.attr("in", t1138);
        }
    };
    function s373(t1139) {
        return Array.isArray(t1139) && (t1139 = new SVG.Array(t1139)), t1139.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
    }
    function r313(t1140) {
        if (!Array.isArray(t1140)) return t1140;
        for(var e815 = 0, i587 = t1140.length, a446 = []; e815 < i587; e815++)a446.push(t1140[e815]);
        return a446.join(" ");
    }
    function o275() {
        var t1141 = function() {
        };
        for(var e in "function" == typeof arguments[arguments.length - 1] && (t1141 = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)for(var i588 in arguments[e])t1141(arguments[e][i588], i588, arguments[e]);
    }
    [
        "r",
        "g",
        "b",
        "a"
    ].forEach(function(t1142) {
        a435["Func" + t1142.toUpperCase()] = function(t1143) {
            switch(this.attr("type", t1143), t1143){
                case "table":
                    this.attr("tableValues", arguments[1]);
                    break;
                case "linear":
                    this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                    break;
                case "gamma":
                    this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
            }
        };
    }), o275(e775, function(t1144, e816) {
        var i589 = e816.charAt(0).toUpperCase() + e816.slice(1);
        SVG[i589 + "Effect"] = SVG.invent({
            create: function() {
                this.constructor.call(this, SVG.create("fe" + i589)), t1144.apply(this, arguments), this.result(this.attr("id") + "Out");
            },
            inherit: SVG.Effect,
            extend: {
            }
        });
    }), o275(i567, function(t1145, e817) {
        var i590 = e817.charAt(0).toUpperCase() + e817.slice(1);
        SVG[i590 + "Effect"] = SVG.invent({
            create: function() {
                this.constructor.call(this, SVG.create("fe" + i590)), t1145.apply(this, arguments), this.result(this.attr("id") + "Out");
            },
            inherit: SVG.ParentEffect,
            extend: {
            }
        });
    }), o275(a435, function(t1146, e818) {
        var i591 = e818.charAt(0).toUpperCase() + e818.slice(1);
        SVG[i591] = SVG.invent({
            create: function() {
                this.constructor.call(this, SVG.create("fe" + i591)), t1146.apply(this, arguments);
            },
            inherit: SVG.ChildEffect,
            extend: {
            }
        });
    }), SVG.extend(SVG.MergeEffect, {
        in: function(t1147) {
            return t1147 instanceof SVG.MergeNode ? this.add(t1147, 0) : this.add(new SVG.MergeNode(t1147), 0), this;
        }
    }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
        in2: function(t1148) {
            return null == t1148 ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t1148);
        }
    }), SVG.filter = {
        sepiatone: [
            0.343,
            0.669,
            0.119,
            0,
            0,
            0.249,
            0.626,
            0.13,
            0,
            0,
            0.172,
            0.334,
            0.111,
            0,
            0,
            0,
            0,
            0,
            1,
            0
        ]
    };
}).call(void 0), (function() {
    function t1149(t1150, s381, r315, o276, n233, l198, h163) {
        for(var c147 = t1150.slice(s381, r315 || h163), d131 = o276.slice(n233, l198 || h163), g110 = 0, u93 = {
            pos: [
                0,
                0
            ],
            start: [
                0,
                0
            ]
        }, f78 = {
            pos: [
                0,
                0
            ],
            start: [
                0,
                0
            ]
        };;){
            if (c147[g110] = e819.call(u93, c147[g110]), d131[g110] = e819.call(f78, d131[g110]), c147[g110][0] != d131[g110][0] || "M" == c147[g110][0] || "A" == c147[g110][0] && (c147[g110][4] != d131[g110][4] || c147[g110][5] != d131[g110][5]) ? (Array.prototype.splice.apply(c147, [
                g110,
                1
            ].concat(a447.call(u93, c147[g110]))), Array.prototype.splice.apply(d131, [
                g110,
                1
            ].concat(a447.call(f78, d131[g110])))) : (c147[g110] = i592.call(u93, c147[g110]), d131[g110] = i592.call(f78, d131[g110])), ++g110 == c147.length && g110 == d131.length) break;
            g110 == c147.length && c147.push([
                "C",
                u93.pos[0],
                u93.pos[1],
                u93.pos[0],
                u93.pos[1],
                u93.pos[0],
                u93.pos[1]
            ]), g110 == d131.length && d131.push([
                "C",
                f78.pos[0],
                f78.pos[1],
                f78.pos[0],
                f78.pos[1],
                f78.pos[0],
                f78.pos[1]
            ]);
        }
        return {
            start: c147,
            dest: d131
        };
    }
    function e819(t1151) {
        switch(t1151[0]){
            case "z":
            case "Z":
                t1151[0] = "L", t1151[1] = this.start[0], t1151[2] = this.start[1];
                break;
            case "H":
                t1151[0] = "L", t1151[2] = this.pos[1];
                break;
            case "V":
                t1151[0] = "L", t1151[2] = t1151[1], t1151[1] = this.pos[0];
                break;
            case "T":
                t1151[0] = "Q", t1151[3] = t1151[1], t1151[4] = t1151[2], t1151[1] = this.reflection[1], t1151[2] = this.reflection[0];
                break;
            case "S":
                t1151[0] = "C", t1151[6] = t1151[4], t1151[5] = t1151[3], t1151[4] = t1151[2], t1151[3] = t1151[1], t1151[2] = this.reflection[1], t1151[1] = this.reflection[0];
        }
        return t1151;
    }
    function i592(t1152) {
        var e = t1152.length;
        return this.pos = [
            t1152[e - 2],
            t1152[e - 1]
        ], -1 != "SCQT".indexOf(t1152[0]) && (this.reflection = [
            2 * this.pos[0] - t1152[e - 4],
            2 * this.pos[1] - t1152[e - 3]
        ]), t1152;
    }
    function a447(t1153) {
        var e820 = [
            t1153
        ];
        switch(t1153[0]){
            case "M":
                return this.pos = this.start = [
                    t1153[1],
                    t1153[2]
                ], e820;
            case "L":
                t1153[5] = t1153[3] = t1153[1], t1153[6] = t1153[4] = t1153[2], t1153[1] = this.pos[0], t1153[2] = this.pos[1];
                break;
            case "Q":
                t1153[6] = t1153[4], t1153[5] = t1153[3], t1153[4] = 1 * t1153[4] / 3 + 2 * t1153[2] / 3, t1153[3] = 1 * t1153[3] / 3 + 2 * t1153[1] / 3, t1153[2] = 1 * this.pos[1] / 3 + 2 * t1153[2] / 3, t1153[1] = 1 * this.pos[0] / 3 + 2 * t1153[1] / 3;
                break;
            case "A":
                t1153 = (e820 = (function(t1154, e821) {
                    var i593, a448, s382, r316, o277, n234, l199, h164, c148, d132, g111, u94, f79, p73, x44, b62, v46, m23, y47, w36, k28, A25, S18, C16, L15, P14, T9 = Math.abs(e821[1]), M12 = Math.abs(e821[2]), I9 = e821[3] % 360, z7 = e821[4], E4 = e821[5], X3 = e821[6], Y2 = e821[7], F1 = new SVG.Point(t1154), R1 = new SVG.Point(X3, Y2), H1 = [];
                    if (0 === T9 || 0 === M12 || F1.x === R1.x && F1.y === R1.y) return [
                        [
                            "C",
                            F1.x,
                            F1.y,
                            R1.x,
                            R1.y,
                            R1.x,
                            R1.y
                        ]
                    ];
                    i593 = new SVG.Point((F1.x - R1.x) / 2, (F1.y - R1.y) / 2).transform((new SVG.Matrix).rotate(I9)), (a448 = i593.x * i593.x / (T9 * T9) + i593.y * i593.y / (M12 * M12)) > 1 && (T9 *= a448 = Math.sqrt(a448), M12 *= a448);
                    s382 = (new SVG.Matrix).rotate(I9).scale(1 / T9, 1 / M12).rotate(-I9), F1 = F1.transform(s382), R1 = R1.transform(s382), r316 = [
                        R1.x - F1.x,
                        R1.y - F1.y
                    ], n234 = r316[0] * r316[0] + r316[1] * r316[1], o277 = Math.sqrt(n234), r316[0] /= o277, r316[1] /= o277, l199 = n234 < 4 ? Math.sqrt(1 - n234 / 4) : 0, z7 === E4 && (l199 *= -1);
                    h164 = new SVG.Point((R1.x + F1.x) / 2 + l199 * -r316[1], (R1.y + F1.y) / 2 + l199 * r316[0]), c148 = new SVG.Point(F1.x - h164.x, F1.y - h164.y), d132 = new SVG.Point(R1.x - h164.x, R1.y - h164.y), g111 = Math.acos(c148.x / Math.sqrt(c148.x * c148.x + c148.y * c148.y)), c148.y < 0 && (g111 *= -1);
                    u94 = Math.acos(d132.x / Math.sqrt(d132.x * d132.x + d132.y * d132.y)), d132.y < 0 && (u94 *= -1);
                    E4 && g111 > u94 && (u94 += 2 * Math.PI);
                    !E4 && g111 < u94 && (u94 -= 2 * Math.PI);
                    for(p73 = Math.ceil(2 * Math.abs(g111 - u94) / Math.PI), b62 = [], v46 = g111, f79 = (u94 - g111) / p73, x44 = 4 * Math.tan(f79 / 4) / 3, k28 = 0; k28 <= p73; k28++)y47 = Math.cos(v46), m23 = Math.sin(v46), w36 = new SVG.Point(h164.x + y47, h164.y + m23), b62[k28] = [
                        new SVG.Point(w36.x + x44 * m23, w36.y - x44 * y47),
                        w36,
                        new SVG.Point(w36.x - x44 * m23, w36.y + x44 * y47)
                    ], v46 += f79;
                    for(b62[0][0] = b62[0][1].clone(), b62[b62.length - 1][2] = b62[b62.length - 1][1].clone(), s382 = (new SVG.Matrix).rotate(I9).scale(T9, M12).rotate(-I9), k28 = 0, A25 = b62.length; k28 < A25; k28++)b62[k28][0] = b62[k28][0].transform(s382), b62[k28][1] = b62[k28][1].transform(s382), b62[k28][2] = b62[k28][2].transform(s382);
                    for(k28 = 1, A25 = b62.length; k28 < A25; k28++)S18 = (w36 = b62[k28 - 1][2]).x, C16 = w36.y, L15 = (w36 = b62[k28][0]).x, P14 = w36.y, X3 = (w36 = b62[k28][1]).x, Y2 = w36.y, H1.push([
                        "C",
                        S18,
                        C16,
                        L15,
                        P14,
                        X3,
                        Y2
                    ]);
                    return H1;
                })(this.pos, t1153))[0];
        }
        return t1153[0] = "C", this.pos = [
            t1153[5],
            t1153[6]
        ], this.reflection = [
            2 * t1153[5] - t1153[3],
            2 * t1153[6] - t1153[4]
        ], e820;
    }
    function s380(t1155, e822) {
        if (!1 === e822) return !1;
        for(var i594 = e822, a449 = t1155.length; i594 < a449; ++i594)if ("M" == t1155[i594][0]) return i594;
        return !1;
    }
    SVG.extend(SVG.PathArray, {
        morph: function(e823) {
            for(var i595 = this.value, a450 = this.parse(e823), r317 = 0, o278 = 0, n235 = !1, l200 = !1; !1 !== r317 || !1 !== o278;){
                var h165;
                n235 = s380(i595, !1 !== r317 && r317 + 1), l200 = s380(a450, !1 !== o278 && o278 + 1), !1 === r317 && (r317 = 0 == (h165 = new SVG.PathArray(c149.start).bbox()).height || 0 == h165.width ? i595.push(i595[0]) - 1 : i595.push([
                    "M",
                    h165.x + h165.width / 2,
                    h165.y + h165.height / 2
                ]) - 1), !1 === o278 && (o278 = 0 == (h165 = new SVG.PathArray(c149.dest).bbox()).height || 0 == h165.width ? a450.push(a450[0]) - 1 : a450.push([
                    "M",
                    h165.x + h165.width / 2,
                    h165.y + h165.height / 2
                ]) - 1);
                var c149 = t1149(i595, r317, n235, a450, o278, l200);
                i595 = i595.slice(0, r317).concat(c149.start, !1 === n235 ? [] : i595.slice(n235)), a450 = a450.slice(0, o278).concat(c149.dest, !1 === l200 ? [] : a450.slice(l200)), r317 = !1 !== n235 && r317 + c149.start.length, o278 = !1 !== l200 && o278 + c149.dest.length;
            }
            return this.value = i595, this.destination = new SVG.PathArray, this.destination.value = a450, this;
        }
    });
})(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
* https://github.com/svgdotjs/svg.draggable.js
* Copyright (c) 2019 Wout Fierens; Licensed MIT */ (function() {
    function t1156(t1157) {
        t1157.remember("_draggable", this), this.el = t1157;
    }
    t1156.prototype.init = function(t1158, e824) {
        var i596 = this;
        this.constraint = t1158, this.value = e824, this.el.on("mousedown.drag", function(t1159) {
            i596.start(t1159);
        }), this.el.on("touchstart.drag", function(t1160) {
            i596.start(t1160);
        });
    }, t1156.prototype.transformPoint = function(t1161, e825) {
        var i597 = (t1161 = t1161 || window.event).changedTouches && t1161.changedTouches[0] || t1161;
        return this.p.x = i597.clientX - (e825 || 0), this.p.y = i597.clientY, this.p.matrixTransform(this.m);
    }, t1156.prototype.getBBox = function() {
        var t1162 = this.el.bbox();
        return this.el instanceof SVG.Nested && (t1162 = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t1162.x = this.el.x(), t1162.y = this.el.y()), t1162;
    }, t1156.prototype.start = function(t1163) {
        if ("click" != t1163.type && "mousedown" != t1163.type && "mousemove" != t1163.type || 1 == (t1163.which || t1163.buttons)) {
            var e826 = this;
            if (this.el.fire("beforedrag", {
                event: t1163,
                handler: this
            }), !this.el.event().defaultPrevented) {
                t1163.preventDefault(), t1163.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
                var i598, a451 = this.getBBox();
                if (this.el instanceof SVG.Text) switch(i598 = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")){
                    case "middle":
                        i598 /= 2;
                        break;
                    case "start":
                        i598 = 0;
                }
                this.startPoints = {
                    point: this.transformPoint(t1163, i598),
                    box: a451,
                    transform: this.el.transform()
                }, SVG.on(window, "mousemove.drag", function(t1164) {
                    e826.drag(t1164);
                }), SVG.on(window, "touchmove.drag", function(t1165) {
                    e826.drag(t1165);
                }), SVG.on(window, "mouseup.drag", function(t1166) {
                    e826.end(t1166);
                }), SVG.on(window, "touchend.drag", function(t1167) {
                    e826.end(t1167);
                }), this.el.fire("dragstart", {
                    event: t1163,
                    p: this.startPoints.point,
                    m: this.m,
                    handler: this
                });
            }
        }
    }, t1156.prototype.drag = function(t1168) {
        var e827 = this.getBBox(), i599 = this.transformPoint(t1168), a452 = this.startPoints.box.x + i599.x - this.startPoints.point.x, s383 = this.startPoints.box.y + i599.y - this.startPoints.point.y, r318 = this.constraint, o279 = i599.x - this.startPoints.point.x, n236 = i599.y - this.startPoints.point.y;
        if (this.el.fire("dragmove", {
            event: t1168,
            p: i599,
            m: this.m,
            handler: this
        }), this.el.event().defaultPrevented) return i599;
        if ("function" == typeof r318) {
            var l201 = r318.call(this.el, a452, s383, this.m);
            "boolean" == typeof l201 && (l201 = {
                x: l201,
                y: l201
            }), !0 === l201.x ? this.el.x(a452) : !1 !== l201.x && this.el.x(l201.x), !0 === l201.y ? this.el.y(s383) : !1 !== l201.y && this.el.y(l201.y);
        } else "object" == typeof r318 && (null != r318.minX && a452 < r318.minX ? o279 = (a452 = r318.minX) - this.startPoints.box.x : null != r318.maxX && a452 > r318.maxX - e827.width && (o279 = (a452 = r318.maxX - e827.width) - this.startPoints.box.x), null != r318.minY && s383 < r318.minY ? n236 = (s383 = r318.minY) - this.startPoints.box.y : null != r318.maxY && s383 > r318.maxY - e827.height && (n236 = (s383 = r318.maxY - e827.height) - this.startPoints.box.y), null != r318.snapToGrid && (a452 -= a452 % r318.snapToGrid, s383 -= s383 % r318.snapToGrid, o279 -= o279 % r318.snapToGrid, n236 -= n236 % r318.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
            x: o279,
            y: n236
        }, !0) : this.el.move(a452, s383));
        return i599;
    }, t1156.prototype.end = function(t1169) {
        var e828 = this.drag(t1169);
        this.el.fire("dragend", {
            event: t1169,
            p: e828,
            m: this.m,
            handler: this
        }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
    }, SVG.extend(SVG.Element, {
        draggable: function(e829, i600) {
            "function" != typeof e829 && "object" != typeof e829 || (i600 = e829, e829 = !0);
            var a453 = this.remember("_draggable") || new t1156(this);
            return (e829 = void 0 === e829 || e829) ? a453.init(i600 || {
            }, e829) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
        }
    });
}).call(void 0), (function() {
    function t1170(t1171) {
        this.el = t1171, t1171.remember("_selectHandler", this), this.pointSelection = {
            isSelected: !1
        }, this.rectSelection = {
            isSelected: !1
        }, this.pointsList = {
            lt: [
                0,
                0
            ],
            rt: [
                "width",
                0
            ],
            rb: [
                "width",
                "height"
            ],
            lb: [
                0,
                "height"
            ],
            t: [
                "width",
                0
            ],
            r: [
                "width",
                "height"
            ],
            b: [
                "width",
                "height"
            ],
            l: [
                0,
                "height"
            ]
        }, this.pointCoord = function(t1172, e830, i601) {
            var a454 = "string" != typeof t1172 ? t1172 : e830[t1172];
            return i601 ? a454 / 2 : a454;
        }, this.pointCoords = function(t1173, e831) {
            var i602 = this.pointsList[t1173];
            return {
                x: this.pointCoord(i602[0], e831, "t" === t1173 || "b" === t1173),
                y: this.pointCoord(i602[1], e831, "r" === t1173 || "l" === t1173)
            };
        };
    }
    t1170.prototype.init = function(t1174, e832) {
        var i603 = this.el.bbox();
        this.options = {
        };
        var a455 = this.el.selectize.defaults.points;
        for(var s in this.el.selectize.defaults)this.options[s] = this.el.selectize.defaults[s], void 0 !== e832[s] && (this.options[s] = e832[s]);
        var r319 = [
            "points",
            "pointsExclude"
        ];
        for(var s in r319){
            var o280 = this.options[r319[s]];
            "string" == typeof o280 ? o280 = o280.length > 0 ? o280.split(/\s*,\s*/i) : [] : "boolean" == typeof o280 && "points" === r319[s] && (o280 = o280 ? a455 : []), this.options[r319[s]] = o280;
        }
        this.options.points = [
            a455,
            this.options.points
        ].reduce(function(t1175, e833) {
            return t1175.filter(function(t1176) {
                return e833.indexOf(t1176) > -1;
            });
        }), this.options.points = [
            this.options.points,
            this.options.pointsExclude
        ].reduce(function(t1177, e834) {
            return t1177.filter(function(t1178) {
                return e834.indexOf(t1178) < 0;
            });
        }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i603.x, i603.y)), this.options.deepSelect && -1 !== [
            "line",
            "polyline",
            "polygon"
        ].indexOf(this.el.type) ? this.selectPoints(t1174) : this.selectRect(t1174), this.observe(), this.cleanup();
    }, t1170.prototype.selectPoints = function(t1179) {
        return this.pointSelection.isSelected = t1179, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
    }, t1170.prototype.getPointArray = function() {
        var t1180 = this.el.bbox();
        return this.el.array().valueOf().map(function(e835) {
            return [
                e835[0] - t1180.x,
                e835[1] - t1180.y
            ];
        });
    }, t1170.prototype.drawPoints = function() {
        for(var t1181 = this, e836 = this.getPointArray(), i604 = 0, a456 = e836.length; i604 < a456; ++i604){
            var s384 = function(e837) {
                return function(i605) {
                    (i605 = i605 || window.event).preventDefault ? i605.preventDefault() : i605.returnValue = !1, i605.stopPropagation();
                    var a457 = i605.pageX || i605.touches[0].pageX, s386 = i605.pageY || i605.touches[0].pageY;
                    t1181.el.fire("point", {
                        x: a457,
                        y: s386,
                        i: e837,
                        event: i605
                    });
                };
            }(i604), r320 = this.drawPoint(e836[i604][0], e836[i604][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s384).on("mousedown", s384);
            this.pointSelection.set.add(r320);
        }
    }, t1170.prototype.drawPoint = function(t1182, e838) {
        var i606 = this.options.pointType;
        switch(i606){
            case "circle":
                return this.drawCircle(t1182, e838);
            case "rect":
                return this.drawRect(t1182, e838);
            default:
                if ("function" == typeof i606) return i606.call(this, t1182, e838);
                throw new Error("Unknown " + i606 + " point type!");
        }
    }, t1170.prototype.drawCircle = function(t1183, e839) {
        return this.nested.circle(this.options.pointSize).center(t1183, e839);
    }, t1170.prototype.drawRect = function(t1184, e840) {
        return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t1184, e840);
    }, t1170.prototype.updatePointSelection = function() {
        var t1185 = this.getPointArray();
        this.pointSelection.set.each(function(e) {
            this.cx() === t1185[e][0] && this.cy() === t1185[e][1] || this.center(t1185[e][0], t1185[e][1]);
        });
    }, t1170.prototype.updateRectSelection = function() {
        var t1186 = this, e841 = this.el.bbox();
        if (this.rectSelection.set.get(0).attr({
            width: e841.width,
            height: e841.height
        }), this.options.points.length && this.options.points.map(function(i608, a458) {
            var s387 = t1186.pointCoords(i608, e841);
            t1186.rectSelection.set.get(a458 + 1).center(s387.x, s387.y);
        }), this.options.rotationPoint) {
            var i607 = this.rectSelection.set.length();
            this.rectSelection.set.get(i607 - 1).center(e841.width / 2, 20);
        }
    }, t1170.prototype.selectRect = function(t1187) {
        var e842 = this, i609 = this.el.bbox();
        function a459(t1188) {
            return function(i610) {
                (i610 = i610 || window.event).preventDefault ? i610.preventDefault() : i610.returnValue = !1, i610.stopPropagation();
                var a460 = i610.pageX || i610.touches[0].pageX, s389 = i610.pageY || i610.touches[0].pageY;
                e842.el.fire(t1188, {
                    x: a460,
                    y: s389,
                    event: i610
                });
            };
        }
        if (this.rectSelection.isSelected = t1187, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i609.width, i609.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2) this.options.points.map(function(t1189, s) {
            var r322 = e842.pointCoords(t1189, i609), o281 = e842.drawPoint(r322.x, r322.y).attr("class", e842.options.classPoints + "_" + t1189).on("mousedown", a459(t1189)).on("touchstart", a459(t1189));
            e842.rectSelection.set.add(o281);
        }), this.rectSelection.set.each(function() {
            this.addClass(e842.options.classPoints);
        });
        if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
            var s388 = function(t1190) {
                (t1190 = t1190 || window.event).preventDefault ? t1190.preventDefault() : t1190.returnValue = !1, t1190.stopPropagation();
                var i611 = t1190.pageX || t1190.touches[0].pageX, a461 = t1190.pageY || t1190.touches[0].pageY;
                e842.el.fire("rot", {
                    x: i611,
                    y: a461,
                    event: t1190
                });
            }, r321 = this.drawPoint(i609.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", s388).on("mousedown", s388);
            this.rectSelection.set.add(r321);
        }
    }, t1170.prototype.handler = function() {
        var t1191 = this.el.bbox();
        this.nested.matrix(new SVG.Matrix(this.el).translate(t1191.x, t1191.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
    }, t1170.prototype.observe = function() {
        var t1192 = this;
        if (MutationObserver) {
            if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function() {
                t1192.handler();
            }), this.observerInst.observe(this.el.node, {
                attributes: !0
            });
            else try {
                this.observerInst.disconnect(), delete this.observerInst;
            } catch (t) {
            }
        } else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
            t1192.handler();
        });
    }, t1170.prototype.cleanup = function() {
        !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
            this.remove();
        }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
            this.remove();
        }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
    }, SVG.extend(SVG.Element, {
        selectize: function(e843, i612) {
            return "object" == typeof e843 && (i612 = e843, e843 = !0), (this.remember("_selectHandler") || new t1170(this)).init(void 0 === e843 || e843, i612 || {
            }), this;
        }
    }), SVG.Element.prototype.selectize.defaults = {
        points: [
            "lt",
            "rt",
            "rb",
            "lb",
            "t",
            "r",
            "b",
            "l"
        ],
        pointsExclude: [],
        classRect: "svg_select_boundingRect",
        classPoints: "svg_select_points",
        pointSize: 7,
        rotationPoint: !0,
        deepSelect: !1,
        pointType: "circle"
    };
})(), (function() {
    (function() {
        function t1193(t1194) {
            t1194.remember("_resizeHandler", this), this.el = t1194, this.parameters = {
            }, this.lastUpdateCall = null, this.p = t1194.doc().node.createSVGPoint();
        }
        t1193.prototype.transformPoint = function(t1195, e844, i613) {
            return this.p.x = t1195 - (this.offset.x - window.pageXOffset), this.p.y = e844 - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i613 || this.m);
        }, t1193.prototype._extractPosition = function(t1196) {
            return {
                x: null != t1196.clientX ? t1196.clientX : t1196.touches[0].clientX,
                y: null != t1196.clientY ? t1196.clientY : t1196.touches[0].clientY
            };
        }, t1193.prototype.init = function(t1197) {
            var e845 = this;
            if (this.stop(), "stop" !== t1197) {
                for(var i in this.options = {
                }, this.el.resize.defaults)this.options[i] = this.el.resize.defaults[i], void 0 !== t1197[i] && (this.options[i] = t1197[i]);
                this.el.on("lt.resize", function(t1198) {
                    e845.resize(t1198 || window.event);
                }), this.el.on("rt.resize", function(t1199) {
                    e845.resize(t1199 || window.event);
                }), this.el.on("rb.resize", function(t1200) {
                    e845.resize(t1200 || window.event);
                }), this.el.on("lb.resize", function(t1201) {
                    e845.resize(t1201 || window.event);
                }), this.el.on("t.resize", function(t1202) {
                    e845.resize(t1202 || window.event);
                }), this.el.on("r.resize", function(t1203) {
                    e845.resize(t1203 || window.event);
                }), this.el.on("b.resize", function(t1204) {
                    e845.resize(t1204 || window.event);
                }), this.el.on("l.resize", function(t1205) {
                    e845.resize(t1205 || window.event);
                }), this.el.on("rot.resize", function(t1206) {
                    e845.resize(t1206 || window.event);
                }), this.el.on("point.resize", function(t1207) {
                    e845.resize(t1207 || window.event);
                }), this.update();
            }
        }, t1193.prototype.stop = function() {
            return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
        }, t1193.prototype.resize = function(t1208) {
            var e846 = this;
            this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
            var i614 = this._extractPosition(t1208.detail.event);
            if (this.parameters = {
                type: this.el.type,
                p: this.transformPoint(i614.x, i614.y),
                x: t1208.detail.x,
                y: t1208.detail.y,
                box: this.el.bbox(),
                rotation: this.el.transform().rotation
            }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t1208.detail.i) {
                var a462 = this.el.array().valueOf();
                this.parameters.i = t1208.detail.i, this.parameters.pointCoords = [
                    a462[t1208.detail.i][0],
                    a462[t1208.detail.i][1]
                ];
            }
            switch(t1208.type){
                case "lt":
                    this.calc = function(t1209, e847) {
                        var i615 = this.snapToGrid(t1209, e847);
                        if (this.parameters.box.width - i615[0] > 0 && this.parameters.box.height - i615[1] > 0) {
                            if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i615[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i615[0]);
                            i615 = this.checkAspectRatio(i615), this.el.move(this.parameters.box.x + i615[0], this.parameters.box.y + i615[1]).size(this.parameters.box.width - i615[0], this.parameters.box.height - i615[1]);
                        }
                    };
                    break;
                case "rt":
                    this.calc = function(t1210, e848) {
                        var i616 = this.snapToGrid(t1210, e848, 2);
                        if (this.parameters.box.width + i616[0] > 0 && this.parameters.box.height - i616[1] > 0) {
                            if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i616[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i616[0]);
                            i616 = this.checkAspectRatio(i616, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + i616[1]).size(this.parameters.box.width + i616[0], this.parameters.box.height - i616[1]);
                        }
                    };
                    break;
                case "rb":
                    this.calc = function(t1211, e849) {
                        var i617 = this.snapToGrid(t1211, e849, 0);
                        if (this.parameters.box.width + i617[0] > 0 && this.parameters.box.height + i617[1] > 0) {
                            if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i617[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i617[0]);
                            i617 = this.checkAspectRatio(i617), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i617[0], this.parameters.box.height + i617[1]);
                        }
                    };
                    break;
                case "lb":
                    this.calc = function(t1212, e850) {
                        var i618 = this.snapToGrid(t1212, e850, 1);
                        if (this.parameters.box.width - i618[0] > 0 && this.parameters.box.height + i618[1] > 0) {
                            if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i618[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i618[0]);
                            i618 = this.checkAspectRatio(i618, !0), this.el.move(this.parameters.box.x + i618[0], this.parameters.box.y).size(this.parameters.box.width - i618[0], this.parameters.box.height + i618[1]);
                        }
                    };
                    break;
                case "t":
                    this.calc = function(t1213, e851) {
                        var i619 = this.snapToGrid(t1213, e851, 2);
                        if (this.parameters.box.height - i619[1] > 0) {
                            if ("text" === this.parameters.type) return;
                            this.el.move(this.parameters.box.x, this.parameters.box.y + i619[1]).height(this.parameters.box.height - i619[1]);
                        }
                    };
                    break;
                case "r":
                    this.calc = function(t1214, e852) {
                        var i620 = this.snapToGrid(t1214, e852, 0);
                        if (this.parameters.box.width + i620[0] > 0) {
                            if ("text" === this.parameters.type) return;
                            this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i620[0]);
                        }
                    };
                    break;
                case "b":
                    this.calc = function(t1215, e853) {
                        var i621 = this.snapToGrid(t1215, e853, 0);
                        if (this.parameters.box.height + i621[1] > 0) {
                            if ("text" === this.parameters.type) return;
                            this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i621[1]);
                        }
                    };
                    break;
                case "l":
                    this.calc = function(t1216, e854) {
                        var i622 = this.snapToGrid(t1216, e854, 1);
                        if (this.parameters.box.width - i622[0] > 0) {
                            if ("text" === this.parameters.type) return;
                            this.el.move(this.parameters.box.x + i622[0], this.parameters.box.y).width(this.parameters.box.width - i622[0]);
                        }
                    };
                    break;
                case "rot":
                    this.calc = function(t1217, e855) {
                        var i623 = t1217 + this.parameters.p.x, a463 = e855 + this.parameters.p.y, s390 = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), r323 = Math.atan2(a463 - this.parameters.box.y - this.parameters.box.height / 2, i623 - this.parameters.box.x - this.parameters.box.width / 2), o282 = this.parameters.rotation + 180 * (r323 - s390) / Math.PI + this.options.snapToAngle / 2;
                        this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(o282 - o282 % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
                    };
                    break;
                case "point":
                    this.calc = function(t1218, e856) {
                        var i624 = this.snapToGrid(t1218, e856, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), a464 = this.el.array().valueOf();
                        a464[this.parameters.i][0] = this.parameters.pointCoords[0] + i624[0], a464[this.parameters.i][1] = this.parameters.pointCoords[1] + i624[1], this.el.plot(a464);
                    };
            }
            this.el.fire("resizestart", {
                dx: this.parameters.x,
                dy: this.parameters.y,
                event: t1208
            }), SVG.on(window, "touchmove.resize", function(t1219) {
                e846.update(t1219 || window.event);
            }), SVG.on(window, "touchend.resize", function() {
                e846.done();
            }), SVG.on(window, "mousemove.resize", function(t1220) {
                e846.update(t1220 || window.event);
            }), SVG.on(window, "mouseup.resize", function() {
                e846.done();
            });
        }, t1193.prototype.update = function(t1221) {
            if (t1221) {
                var e857 = this._extractPosition(t1221), i625 = this.transformPoint(e857.x, e857.y), a465 = i625.x - this.parameters.p.x, s391 = i625.y - this.parameters.p.y;
                this.lastUpdateCall = [
                    a465,
                    s391
                ], this.calc(a465, s391), this.el.fire("resizing", {
                    dx: a465,
                    dy: s391,
                    event: t1221
                });
            } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
        }, t1193.prototype.done = function() {
            this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
        }, t1193.prototype.snapToGrid = function(t1222, e858, i626, a466) {
            var s392;
            return void 0 !== a466 ? s392 = [
                (i626 + t1222) % this.options.snapToGrid,
                (a466 + e858) % this.options.snapToGrid
            ] : (i626 = null == i626 ? 3 : i626, s392 = [
                (this.parameters.box.x + t1222 + (1 & i626 ? 0 : this.parameters.box.width)) % this.options.snapToGrid,
                (this.parameters.box.y + e858 + (2 & i626 ? 0 : this.parameters.box.height)) % this.options.snapToGrid
            ]), t1222 < 0 && (s392[0] -= this.options.snapToGrid), e858 < 0 && (s392[1] -= this.options.snapToGrid), t1222 -= Math.abs(s392[0]) < this.options.snapToGrid / 2 ? s392[0] : s392[0] - (t1222 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e858 -= Math.abs(s392[1]) < this.options.snapToGrid / 2 ? s392[1] : s392[1] - (e858 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t1222, e858, i626, a466);
        }, t1193.prototype.constraintToBox = function(t1223, e859, i627, a467) {
            var s393, r324, o283 = this.options.constraint || {
            };
            return void 0 !== a467 ? (s393 = i627, r324 = a467) : (s393 = this.parameters.box.x + (1 & i627 ? 0 : this.parameters.box.width), r324 = this.parameters.box.y + (2 & i627 ? 0 : this.parameters.box.height)), void 0 !== o283.minX && s393 + t1223 < o283.minX && (t1223 = o283.minX - s393), void 0 !== o283.maxX && s393 + t1223 > o283.maxX && (t1223 = o283.maxX - s393), void 0 !== o283.minY && r324 + e859 < o283.minY && (e859 = o283.minY - r324), void 0 !== o283.maxY && r324 + e859 > o283.maxY && (e859 = o283.maxY - r324), [
                t1223,
                e859
            ];
        }, t1193.prototype.checkAspectRatio = function(t1224, e860) {
            if (!this.options.saveAspectRatio) return t1224;
            var i628 = t1224.slice(), a468 = this.parameters.box.width / this.parameters.box.height, s394 = this.parameters.box.width + t1224[0], r325 = this.parameters.box.height - t1224[1], o284 = s394 / r325;
            return o284 < a468 ? (i628[1] = s394 / a468 - this.parameters.box.height, e860 && (i628[1] = -i628[1])) : o284 > a468 && (i628[0] = this.parameters.box.width - r325 * a468, e860 && (i628[0] = -i628[0])), i628;
        }, SVG.extend(SVG.Element, {
            resize: function(e861) {
                return (this.remember("_resizeHandler") || new t1193(this)).init(e861 || {
                }), this;
            }
        }), SVG.Element.prototype.resize.defaults = {
            snapToAngle: 0.1,
            snapToGrid: 1,
            constraint: {
            },
            saveAspectRatio: !1
        };
    }).call(this);
})(), void 0 === window.Apex && (window.Apex = {
});
var Rt = function() {
    function t1225(e862) {
        a(this, t1225), this.ctx = e862, this.w = e862.w;
    }
    return r(t1225, [
        {
            key: "initModules",
            value: function() {
                this.ctx.publicMethods = [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ], this.ctx.eventList = [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ], this.ctx.animations = new b(this.ctx), this.ctx.axes = new K(this.ctx), this.ctx.core = new Yt(this.ctx.el, this.ctx), this.ctx.config = new N({
                }), this.ctx.data = new B(this.ctx), this.ctx.grid = new U(this.ctx), this.ctx.graphics = new m(this.ctx), this.ctx.coreUtils = new k(this.ctx), this.ctx.crosshairs = new tt(this.ctx), this.ctx.events = new J(this.ctx), this.ctx.exports = new j(this.ctx), this.ctx.localization = new Q(this.ctx), this.ctx.options = new L, this.ctx.responsive = new et(this.ctx), this.ctx.series = new X(this.ctx), this.ctx.theme = new it(this.ctx), this.ctx.formatters = new V(this.ctx), this.ctx.titleSubtitle = new at(this.ctx), this.ctx.legend = new ct(this.ctx), this.ctx.toolbar = new dt(this.ctx), this.ctx.dimensions = new lt(this.ctx), this.ctx.updateHelpers = new Ft(this.ctx), this.ctx.zoomPanSelection = new gt(this.ctx), this.ctx.w.globals.tooltip = new mt(this.ctx);
            }
        }
    ]), t1225;
}(), Ht = function() {
    function t1226(e863) {
        a(this, t1226), this.ctx = e863, this.w = e863.w;
    }
    return r(t1226, [
        {
            key: "clear",
            value: function(t1227) {
                var e864 = t1227.isUpdating;
                this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({
                    isUpdating: e864
                });
            }
        },
        {
            key: "killSVG",
            value: function(t1228) {
                t1228.each(function(t, e) {
                    this.removeClass("*"), this.off(), this.stop();
                }, !0), t1228.ungroup(), t1228.clear();
            }
        },
        {
            key: "clearDomElements",
            value: function(t1229) {
                var e865 = this, i629 = t1229.isUpdating, a469 = this.w.globals.dom.Paper.node;
                a469.parentNode && a469.parentNode.parentNode && !i629 && (a469.parentNode.parentNode.style.minHeight = "unset");
                var s395 = this.w.globals.dom.baseEl;
                s395 && this.ctx.eventList.forEach(function(t1230) {
                    s395.removeEventListener(t1230, e865.ctx.events.documentEvent);
                });
                var r326 = this.w.globals.dom;
                if (null !== this.ctx.el) for(; this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);
                this.killSVG(r326.Paper), r326.Paper.remove(), r326.elWrap = null, r326.elGraphical = null, r326.elAnnotations = null, r326.elLegendWrap = null, r326.baseEl = null, r326.elGridRect = null, r326.elGridRectMask = null, r326.elGridRectMarkerMask = null, r326.elForecastMask = null, r326.elNonForecastMask = null, r326.elDefs = null;
            }
        }
    ]), t1226;
}(), Dt = new WeakMap;
var Nt = function() {
    function t1231(e866, i630) {
        a(this, t1231), this.opts = i630, this.ctx = this, this.w = new W(i630).init(), this.el = e866, this.w.globals.cuid = x.randomId(), this.w.globals.chartID = this.w.config.chart.id ? x.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Rt(this).initModules(), this.create = x.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
    }
    return r(t1231, [
        {
            key: "render",
            value: function() {
                var t1232 = this;
                return new Promise(function(e867, i631) {
                    if (null !== t1232.el) {
                        void 0 === Apex._chartInstances && (Apex._chartInstances = []), t1232.w.config.chart.id && Apex._chartInstances.push({
                            id: t1232.w.globals.chartID,
                            group: t1232.w.config.chart.group,
                            chart: t1232
                        }), t1232.setLocale(t1232.w.config.chart.defaultLocale);
                        var a470 = t1232.w.config.chart.events.beforeMount;
                        if ("function" == typeof a470 && a470(t1232, t1232.w), t1232.events.fireEvent("beforeMount", [
                            t1232,
                            t1232.w
                        ]), window.addEventListener("resize", t1232.windowResizeHandler), (function(t1233, e868) {
                            var i632 = !1, a471 = t1233.getBoundingClientRect();
                            "none" !== t1233.style.display && 0 !== a471.width || (i632 = !0);
                            var s398 = new ResizeObserver(function(a472) {
                                i632 && e868.call(t1233, a472), i632 = !0;
                            });
                            t1233.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t1233.children).forEach(function(t1234) {
                                return s398.observe(t1234);
                            }) : s398.observe(t1233), Dt.set(e868, s398);
                        })(t1232.el.parentNode, t1232.parentResizeHandler), !t1232.css) {
                            var s396 = t1232.el.getRootNode && t1232.el.getRootNode(), r327 = x.is("ShadowRoot", s396), o285 = t1232.el.ownerDocument, n237 = o285.getElementById("apexcharts-css");
                            !r327 && n237 || (t1232.css = document.createElement("style"), t1232.css.id = "apexcharts-css", t1232.css.textContent = '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-title:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-goals-group, \n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  display: flex;\n}\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-box, .apexcharts-custom-tooltip {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}', r327 ? s396.prepend(t1232.css) : o285.head.appendChild(t1232.css));
                        }
                        var l202 = t1232.create(t1232.w.config.series, {
                        });
                        if (!l202) return e867(t1232);
                        t1232.mount(l202).then(function() {
                            "function" == typeof t1232.w.config.chart.events.mounted && t1232.w.config.chart.events.mounted(t1232, t1232.w), t1232.events.fireEvent("mounted", [
                                t1232,
                                t1232.w
                            ]), e867(l202);
                        }).catch(function(t1235) {
                            i631(t1235);
                        });
                    } else i631(new Error("Element not found"));
                });
            }
        },
        {
            key: "create",
            value: function(t1236, e869) {
                var i633 = this.w;
                new Rt(this).initModules();
                var a473 = this.w.globals;
                (a473.noData = !1, a473.animationEnded = !1, this.responsive.checkResponsiveConfig(e869), i633.config.xaxis.convertedCatToNumeric) && new D(i633.config).convertCatToNumericXaxis(i633.config, this.ctx);
                if (null === this.el) return a473.animationEnded = !0, null;
                if (this.core.setupElements(), "treemap" === i633.config.chart.type && (i633.config.grid.show = !1, i633.config.yaxis[0].show = !1), 0 === a473.svgWidth) return a473.animationEnded = !0, null;
                var s399 = k.checkComboSeries(t1236);
                a473.comboCharts = s399.comboCharts, a473.comboBarCount = s399.comboBarCount;
                var r328 = t1236.every(function(t1237) {
                    return t1237.data && 0 === t1237.data.length;
                });
                (0 === t1236.length || r328) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t1236), this.theme.init(), new M(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a473.noData && a473.collapsedSeries.length !== a473.series.length && !i633.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a473.axisCharts && (this.core.coreCalculations(), "category" !== i633.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i633.globals.minX, this.ctx.toolbar.maxX = i633.globals.maxX), this.formatters.heatmapLabelFormatters(), new k(this).getLargestMarkerSize(), this.dimensions.plotCoords();
                var o286 = this.core.xySettings();
                this.grid.createGridMask();
                var n238 = this.core.plotChartType(t1236, o286), l203 = new z(this);
                l203.bringForward(), i633.config.dataLabels.background.enabled && l203.dataLabelsBackground(), this.core.shiftGraphPosition();
                var h166 = {
                    plot: {
                        left: i633.globals.translateX,
                        top: i633.globals.translateY,
                        width: i633.globals.gridWidth,
                        height: i633.globals.gridHeight
                    }
                };
                return {
                    elGraph: n238,
                    xyRatios: o286,
                    elInner: i633.globals.dom.elGraphical,
                    dimensions: h166
                };
            }
        },
        {
            key: "mount",
            value: function() {
                var t1238 = this, e870 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i634 = this, a474 = i634.w;
                return new Promise(function(s400, r329) {
                    if (null === i634.el) return r329(new Error("Not enough data to display or target element not found"));
                    (null === e870 || a474.globals.allSeriesCollapsed) && i634.series.handleNoData(), "treemap" !== a474.config.chart.type && i634.axes.drawAxis(a474.config.chart.type, e870.xyRatios), i634.grid = new U(i634);
                    var o287 = i634.grid.drawGrid();
                    i634.annotations = new P(i634), i634.annotations.drawImageAnnos(), i634.annotations.drawTextAnnos(), "back" === a474.config.grid.position && o287 && a474.globals.dom.elGraphical.add(o287.el);
                    var n239 = new _(t1238.ctx), l204 = new $(t1238.ctx);
                    if (null !== o287 && (n239.xAxisLabelCorrections(o287.xAxisTickWidth), l204.setYAxisTextAlignments(), a474.config.yaxis.map(function(t1239, e871) {
                        -1 === a474.globals.ignoreYAxisIndexes.indexOf(e871) && l204.yAxisTitleRotate(e871, t1239.opposite);
                    })), "back" === a474.config.annotations.position && (a474.globals.dom.Paper.add(a474.globals.dom.elAnnotations), i634.annotations.drawAxesAnnotations()), Array.isArray(e870.elGraph)) for(var h167 = 0; h167 < e870.elGraph.length; h167++)a474.globals.dom.elGraphical.add(e870.elGraph[h167]);
                    else a474.globals.dom.elGraphical.add(e870.elGraph);
                    if ("front" === a474.config.grid.position && o287 && a474.globals.dom.elGraphical.add(o287.el), "front" === a474.config.xaxis.crosshairs.position && i634.crosshairs.drawXCrosshairs(), "front" === a474.config.yaxis[0].crosshairs.position && i634.crosshairs.drawYCrosshairs(), "front" === a474.config.annotations.position && (a474.globals.dom.Paper.add(a474.globals.dom.elAnnotations), i634.annotations.drawAxesAnnotations()), !a474.globals.noData) {
                        if (a474.config.tooltip.enabled && !a474.globals.noData && i634.w.globals.tooltip.drawTooltip(e870.xyRatios), a474.globals.axisCharts && (a474.globals.isXNumeric || a474.config.xaxis.convertedCatToNumeric || a474.globals.isRangeBar)) (a474.config.chart.zoom.enabled || a474.config.chart.selection && a474.config.chart.selection.enabled || a474.config.chart.pan && a474.config.chart.pan.enabled) && i634.zoomPanSelection.init({
                            xyRatios: e870.xyRatios
                        });
                        else {
                            var c150 = a474.config.chart.toolbar.tools;
                            [
                                "zoom",
                                "zoomin",
                                "zoomout",
                                "selection",
                                "pan",
                                "reset"
                            ].forEach(function(t) {
                                c150[t] = !1;
                            });
                        }
                        a474.config.chart.toolbar.show && !a474.globals.allSeriesCollapsed && i634.toolbar.createToolbar();
                    }
                    a474.globals.memory.methodsToExec.length > 0 && a474.globals.memory.methodsToExec.forEach(function(t1240) {
                        t1240.method(t1240.params, !1, t1240.context);
                    }), a474.globals.axisCharts || a474.globals.noData || i634.core.resizeNonAxisCharts(), s400(i634);
                });
            }
        },
        {
            key: "destroy",
            value: function() {
                var t1241, e872;
                window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t1241 = this.parentResizeHandler, (e872 = Dt.get(t1241)) && (e872.disconnect(), Dt.delete(t1241));
                var i635 = this.w.config.chart.id;
                i635 && Apex._chartInstances.forEach(function(t1242, e873) {
                    t1242.id === x.escapeString(i635) && Apex._chartInstances.splice(e873, 1);
                }), new Ht(this.ctx).clear({
                    isUpdating: !1
                });
            }
        },
        {
            key: "updateOptions",
            value: function(t1243) {
                var e874 = this, i636 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a475 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s401 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r330 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o288 = this.w;
                return o288.globals.selection = void 0, t1243.series && (this.series.resetSeries(!1, !0, !1), t1243.series.length && t1243.series[0].data && (t1243.series = t1243.series.map(function(t1244, i637) {
                    return e874.updateHelpers._extendSeries(t1244, i637);
                })), this.updateHelpers.revertDefaultAxisMinMax()), t1243.xaxis && (t1243 = this.updateHelpers.forceXAxisUpdate(t1243)), t1243.yaxis && (t1243 = this.updateHelpers.forceYAxisUpdate(t1243)), o288.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t1243.theme && (t1243 = this.theme.updateThemeOptions(t1243)), this.updateHelpers._updateOptions(t1243, i636, a475, s401, r330);
            }
        },
        {
            key: "updateSeries",
            value: function() {
                var t1245 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e875 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i638 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t1245, e875, i638);
            }
        },
        {
            key: "appendSeries",
            value: function(t1246) {
                var e876 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i639 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a476 = this.w.config.series.slice();
                return a476.push(t1246), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a476, e876, i639);
            }
        },
        {
            key: "appendData",
            value: function(t1247) {
                var e877 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i640 = this;
                i640.w.globals.dataChanged = !0, i640.series.getPreviousPaths();
                for(var a477 = i640.w.config.series.slice(), s402 = 0; s402 < a477.length; s402++)if (null !== t1247[s402] && void 0 !== t1247[s402]) for(var r331 = 0; r331 < t1247[s402].data.length; r331++)a477[s402].data.push(t1247[s402].data[r331]);
                return i640.w.config.series = a477, e877 && (i640.w.globals.initialSeries = x.clone(i640.w.config.series)), this.update();
            }
        },
        {
            key: "update",
            value: function(t1248) {
                var e878 = this;
                return new Promise(function(i641, a478) {
                    new Ht(e878.ctx).clear({
                        isUpdating: !0
                    });
                    var s403 = e878.create(e878.w.config.series, t1248);
                    if (!s403) return i641(e878);
                    e878.mount(s403).then(function() {
                        "function" == typeof e878.w.config.chart.events.updated && e878.w.config.chart.events.updated(e878, e878.w), e878.events.fireEvent("updated", [
                            e878,
                            e878.w
                        ]), e878.w.globals.isDirty = !0, i641(e878);
                    }).catch(function(t1249) {
                        a478(t1249);
                    });
                });
            }
        },
        {
            key: "getSyncedCharts",
            value: function() {
                var t1250 = this.getGroupedCharts(), e879 = [
                    this
                ];
                return t1250.length && (e879 = [], t1250.forEach(function(t1251) {
                    e879.push(t1251);
                })), e879;
            }
        },
        {
            key: "getGroupedCharts",
            value: function() {
                var t1252 = this;
                return Apex._chartInstances.filter(function(t1253) {
                    if (t1253.group) return !0;
                }).map(function(e880) {
                    return t1252.w.config.chart.group === e880.group ? e880.chart : t1252;
                });
            }
        },
        {
            key: "toggleSeries",
            value: function(t1254) {
                return this.series.toggleSeries(t1254);
            }
        },
        {
            key: "highlightSeriesOnLegendHover",
            value: function(t1255, e881) {
                return this.series.toggleSeriesOnHover(t1255, e881);
            }
        },
        {
            key: "showSeries",
            value: function(t1256) {
                this.series.showSeries(t1256);
            }
        },
        {
            key: "hideSeries",
            value: function(t1257) {
                this.series.hideSeries(t1257);
            }
        },
        {
            key: "resetSeries",
            value: function() {
                var t1258 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e882 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.series.resetSeries(t1258, e882);
            }
        },
        {
            key: "addEventListener",
            value: function(t1259, e883) {
                this.events.addEventListener(t1259, e883);
            }
        },
        {
            key: "removeEventListener",
            value: function(t1260, e884) {
                this.events.removeEventListener(t1260, e884);
            }
        },
        {
            key: "addXaxisAnnotation",
            value: function(t1261) {
                var e885 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i642 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a479 = this;
                i642 && (a479 = i642), a479.annotations.addXaxisAnnotationExternal(t1261, e885, a479);
            }
        },
        {
            key: "addYaxisAnnotation",
            value: function(t1262) {
                var e886 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i643 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a480 = this;
                i643 && (a480 = i643), a480.annotations.addYaxisAnnotationExternal(t1262, e886, a480);
            }
        },
        {
            key: "addPointAnnotation",
            value: function(t1263) {
                var e887 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i644 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a481 = this;
                i644 && (a481 = i644), a481.annotations.addPointAnnotationExternal(t1263, e887, a481);
            }
        },
        {
            key: "clearAnnotations",
            value: function() {
                var t1264 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e888 = this;
                t1264 && (e888 = t1264), e888.annotations.clearAnnotations(e888);
            }
        },
        {
            key: "removeAnnotation",
            value: function(t1265) {
                var e889 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i645 = this;
                e889 && (i645 = e889), i645.annotations.removeAnnotation(i645, t1265);
            }
        },
        {
            key: "getChartArea",
            value: function() {
                return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
            }
        },
        {
            key: "getSeriesTotalXRange",
            value: function(t1266, e890) {
                return this.coreUtils.getSeriesTotalsXRange(t1266, e890);
            }
        },
        {
            key: "getHighestValueInSeries",
            value: function() {
                var t1267 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e891 = new Z(this.ctx);
                return e891.getMinYMaxY(t1267).highestY;
            }
        },
        {
            key: "getLowestValueInSeries",
            value: function() {
                var t1268 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e892 = new Z(this.ctx);
                return e892.getMinYMaxY(t1268).lowestY;
            }
        },
        {
            key: "getSeriesTotal",
            value: function() {
                return this.w.globals.seriesTotals;
            }
        },
        {
            key: "toggleDataPointSelection",
            value: function(t1269, e893) {
                return this.updateHelpers.toggleDataPointSelection(t1269, e893);
            }
        },
        {
            key: "zoomX",
            value: function(t1270, e894) {
                this.ctx.toolbar.zoomUpdateOptions(t1270, e894);
            }
        },
        {
            key: "setLocale",
            value: function(t1271) {
                this.localization.setCurrentLocaleValues(t1271);
            }
        },
        {
            key: "dataURI",
            value: function(t1272) {
                return new j(this.ctx).dataURI(t1272);
            }
        },
        {
            key: "paper",
            value: function() {
                return this.w.globals.dom.Paper;
            }
        },
        {
            key: "_parentResizeCallback",
            value: function() {
                this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
            }
        },
        {
            key: "_windowResize",
            value: function() {
                var t1273 = this;
                clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
                    t1273.w.globals.resized = !0, t1273.w.globals.dataChanged = !1, t1273.ctx.update();
                }, 150);
            }
        },
        {
            key: "_windowResizeHandler",
            value: function() {
                var t1274 = this.w.config.chart.redrawOnWindowResize;
                "function" == typeof t1274 && (t1274 = t1274()), t1274 && this._windowResize();
            }
        }
    ], [
        {
            key: "getChartByID",
            value: function(t1275) {
                var e895 = x.escapeString(t1275), i646 = Apex._chartInstances.filter(function(t1276) {
                    return t1276.id === e895;
                })[0];
                return i646 && i646.chart;
            }
        },
        {
            key: "initOnLoad",
            value: function() {
                for(var e896 = document.querySelectorAll("[data-apexcharts]"), i647 = 0; i647 < e896.length; i647++)new t1231(e896[i647], JSON.parse(e896[i647].getAttribute("data-options"))).render();
            }
        },
        {
            key: "exec",
            value: function(t1277, e897) {
                var i648 = this.getChartByID(t1277);
                if (i648) {
                    i648.w.globals.isExecCalled = !0;
                    var a482 = null;
                    if (-1 !== i648.publicMethods.indexOf(e897)) {
                        for(var s404 = arguments.length, r332 = new Array(s404 > 2 ? s404 - 2 : 0), o289 = 2; o289 < s404; o289++)r332[o289 - 2] = arguments[o289];
                        a482 = i648[e897].apply(i648, r332);
                    }
                    return a482;
                }
            }
        },
        {
            key: "merge",
            value: function(t1278, e898) {
                return x.extend(t1278, e898);
            }
        }
    ]), t1231;
}();
module.exports = Nt;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["76jC4","f47v6"], "f47v6", "parcelRequire235c")

//# sourceMappingURL=index.b2335e0c.js.map
