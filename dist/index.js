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
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _groupCard = require("./group-card");
var _groupCardEditor = require("./group-card-editor");
var _zoneCard = require("./zone-card");
var _zoneCardEditor = require("./zone-card-editor");
customElements.define("amplipi-group-card", (0, _groupCard.AmplipiGroupCard));
customElements.define("amplipi-group-card-editor", (0, _groupCardEditor.AmplipiGroupCardEditor));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "amplipi-group-card",
    name: "Amplipi Group",
    description: "Represents an AmpliPi group of zones."
});
customElements.define("amplipi-zone-card", (0, _zoneCard.AmplipiZoneCard));
customElements.define("amplipi-zone-card-editor", (0, _zoneCardEditor.AmplipiZoneCardEditor));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "amplipi-zone-card",
    name: "Amplipi Zone",
    description: "Represents an AmpliPi zone."
});

},{"./group-card":"hioGL","./group-card-editor":"1O0y5","./zone-card":"aykBb","./zone-card-editor":"lcrXX"}],"hioGL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AmplipiGroupCard", ()=>AmplipiGroupCard);
var _commonAmplipiCard = require("./common-amplipi-card");
const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
class AmplipiGroupCard extends (0, _commonAmplipiCard.CommonAmplipiCard) {
    static getConfigElement() {
        return document.createElement("amplipi-group-card-editor");
    }
    setConfig(config) {
        this._config = config;
        this._group = config.entity;
        this._num_zones = 0;
    }
    _findZoneNames() {
        const zone_ids = this._hass.states[this._group].attributes.amplipi_zones;
        let zone_names = [];
        Object.keys(this._hass.states).forEach((key)=>{
            if (this._hass.states[key].attributes.amplipi_zone_id !== undefined && zone_ids.includes(this._hass.states[key].attributes.amplipi_zone_id)) zone_names.push(this._hass.states[key].entity_id);
        });
        return zone_names;
    }
    set hass(hass) {
        this._hass = hass;
        if (this._media_player) this._media_player.hass = hass;
        if (this._source_player) this._source_player.hass = hass;
        if (this._helpers && this.source != this._hass.states[this._group].attributes.source) {
            this._source_player = this._loadSourcePlayer(this._hass.states[this._group].attributes.source);
            this._controls_player = this._loadControlsPlayer(this._hass.states[this._group].attributes.source);
        }
        if (this._controls_player) this._controls_player.hass = hass;
        if (this._zone_players) {
            for (var zone of this._zone_players)if (zone) zone.hass = hass;
        }
        if (this._hassResolve) this._hassResolve();
        if (hass.states[this._group].attributes.amplipi_zones.length != this._num_zones && this._zone_players) {
            this.loadCardHelpers();
            this._zone_players = this._loadZonePlayers(this._findZoneNames());
            this._num_zones = this._zone_players.length;
            for (var zone of this._zone_players)if (zone) zone.hass = hass;
            this.triggerRender();
        }
    }
    render() {
        if (!this._hass || !this._config) return html``;
        return html`
        <ha-card header="${this._config.name}" style="padding: 1.5rem;">
        <b>Now Playing:</b> ${this._hass.states[this._group] == undefined ? "" : this._hass.states[this._group].attributes.media_album_artist}
            - ${this._hass.states[this._group] == undefined ? "" : this._hass.states[this._group].attributes.media_track}
            ${this._media_player == undefined ? "" : this._media_player}
            ${this._source_player == undefined ? "" : this._source_player}
            ${this._zone_players == undefined ? "" : this._zone_players}
            ${this._controls_player == undefined ? "" : this._controls_player}
        </ha-card>`;
    }
    _findZoneNames() {
        const zone_ids = this._hass.states[this._group].attributes.amplipi_zones;
        let zone_names = [];
        Object.keys(this._hass.states).forEach((key)=>{
            if (this._hass.states[key].attributes.amplipi_zone_id !== undefined && zone_ids.includes(this._hass.states[key].attributes.amplipi_zone_id)) zone_names.push(this._hass.states[key].entity_id);
        });
        return zone_names;
    }
    _loadZonePlayers(zone_names) {
        let zone_player_configs = {};
        let zone_players = [];
        for (var zone of zone_names){
            zone_player_configs.zone = {
                "type": "custom:mini-media-player",
                "entity": zone,
                "group": "true",
                "source": "icon",
                "hide": {
                    "power": "true",
                    "controls": "true",
                    "info": "true",
                    "icon": "true",
                    "source": "true"
                }
            };
            if (this._config.media_config instanceof Object) zone_player_configs.zone = {
                ...zone_player_configs.zone,
                ...this._config.media_config
            };
            var zone_player;
            zone_player = this._helpers.createCardElement(zone_player_configs.zone);
            zone_player.hass = this._hass;
            zone_players.push(zone_player);
            this.triggerRender();
        }
        return zone_players;
    }
    async addMediaPlayer() {
        if (this._helpers === undefined) await new Promise((resolve)=>this._helpersResolve = resolve);
        if (this._hass === undefined) await new Promise((resolve)=>this._hassResolve = resolve);
        this._hassResolve = undefined;
        this._helpersResolve = undefined;
        let media_config = {
            "type": "custom:mini-media-player",
            "entity": this._group,
            "group": "false",
            "info": "scroll",
            "artwork": "cover",
            "source": "icon",
            "hide": {
                "power": "true",
                "controls": "true"
            }
        };
        if (this._config.media_config instanceof Object) media_config = {
            ...media_config,
            ...this._config.media_config
        };
        if (this._hass.states[this._group] !== undefined && this._hass.states[this._group].attributes.amplipi_zones !== undefined) {
            this._media_player = await this._helpers.createCardElement(media_config);
            this._media_player.hass = this._hass;
            this._source_player = this._loadSourcePlayer(this._hass.states[this._group].attributes.source);
            this._controls_player = this._loadControlsPlayer(this._hass.states[this._group].attributes.source);
            this._zone_players = this._loadZonePlayers(this._findZoneNames());
        }
        this.triggerRender();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./common-amplipi-card":"bLmz7"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"bLmz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CommonAmplipiCard", ()=>CommonAmplipiCard);
const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
class CommonAmplipiCard extends LitElement {
    static get properties() {
        return {
            _hass: {},
            _config: {}
        };
    }
    constructor(){
        super();
        this.loadCardHelpers();
        this.addMediaPlayer();
        this._num_zones = 0;
    }
    static getStubConfig() {
        return {
            entity: ""
        };
    }
    async loadCardHelpers() {
        this._helpers = await window.loadCardHelpers();
        if (this._helpersResolve) this._helpersResolve();
    }
    get hass() {
        return this._hass;
    }
    _loadSourcePlayer(source) {
        if (source === undefined) return undefined;
        var source_id;
        const source_num = source.split(" ")[1] - 1;
        for (var [name, entity] of Object.entries(this._hass.states))if (entity.attributes.amplipi_source_id !== undefined && entity.attributes.amplipi_source_id === source_num) source_id = name;
        let source_player_config = {
            "type": "custom:mini-media-player",
            "entity": source_id,
            "group": "true",
            "source": "full",
            "hide": {
                "volume": "true",
                "controls": "true",
                "info": "true",
                "name": "true",
                "power": "true"
            }
        };
        if (this._config.media_config instanceof Object) source_player_config = {
            ...source_player_config,
            ...this._config.media_config
        };
        var player;
        player = this._helpers.createCardElement(source_player_config);
        player.hass = this._hass;
        this.triggerRender();
        return player;
    }
    _loadControlsPlayer(source) {
        if (source === undefined) {
            this.source = undefined;
            return undefined;
        }
        var source_id;
        let supports_pause = false;
        let supports_stop = false;
        const source_num = source.split(" ")[1] - 1;
        for (var [name, entity] of Object.entries(this._hass.states))if (entity.attributes.amplipi_source_id !== undefined && entity.attributes.amplipi_source_id === source_num) {
            source_id = name;
            let features = entity.attributes.supported_features;
            if ((features | 1) === features) supports_pause = true;
            else if ((features | 4096) === features) supports_stop = true;
        }
        this.source = source;
        let source_player_config = {
            "type": "custom:mini-media-player",
            "entity": source_id,
            "group": "true",
            "hide": {
                "volume": "true",
                "info": "true",
                "name": "true",
                "power": "true",
                "source": "true",
                "icon": "true"
            }
        };
        if (!supports_pause) {
            source_player_config.hide.play_pause = true;
            if (supports_stop) source_player_config.hide.play_stop = false;
        } else source_player_config.hide.play_stop = true;
        if (this._config.media_config instanceof Object) source_player_config = {
            ...source_player_config,
            ...this._config.media_config
        };
        var player;
        player = this._helpers.createCardElement(source_player_config);
        player.hass = this._hass;
        this.triggerRender();
        return player;
    }
    triggerRender() {
        this.trigger = Math.random();
        this.requestUpdate();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1O0y5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AmplipiGroupCardEditor", ()=>AmplipiGroupCardEditor);
var _commonAmplipiEditor = require("./common-amplipi-editor");
const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
class AmplipiGroupCardEditor extends (0, _commonAmplipiEditor.CommonAmplipiCardEditor) {
    render() {
        let entities = [
            ""
        ].concat(Object.keys(this.hass.states).filter((eid)=>eid.substr(0, eid.indexOf(".")) === "media_player"));
        if (!this.hass || !this._config) return html``;
        return html`
        <h2>Name</h2>
        <input
        type="text"
        .value=${this._config.name}
        @focusout=${this._nameChanged}
        ></input>

        <h2>Group</h2>
        <div class="group-select">
            <select
            @change=${this._entityChanged}>
            <option value="${this._config.entity}">${this._config.entity}</option>
            ${entities.map((entity)=>{
            if (this.hass.states[entity] !== undefined && this.hass.states[entity].attributes.amplipi_zones !== undefined && entity != this._config.entity) return html`
                        <option value="${entity}">${entity}</option>`;
        })}
            </select>
        </div>
        `;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./common-amplipi-editor":"3s1l3"}],"3s1l3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CommonAmplipiCardEditor", ()=>CommonAmplipiCardEditor);
const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;
class CommonAmplipiCardEditor extends LitElement {
    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }
    setConfig(config) {
        this._config = config;
    }
    _entityChanged(ev) {
        const _config = Object.assign({}, this._config);
        _config.entity = ev.target.value;
        this._config = _config;
        const event = new CustomEvent("config-changed", {
            detail: {
                config: _config
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    _nameChanged(ev) {
        const _config = Object.assign({}, this._config);
        _config.name = ev.target.value;
        this._config = _config;
        const event = new CustomEvent("config-changed", {
            detail: {
                config: _config
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    get _entity() {
        return this._config.entity || "";
    }
    static styles = css`
        select {
            width: 80%;
            padding: 16px;
            border: none;
            border-radius: 12px;
            background-color: #DDDDDD;
        }
        
        select:hover {
            background-color: #CCCCCC;
        }

        input{
            width: 80%;
            padding: 16px;
            border: none;
            border-bottom: 2px solid blue;
            background-color: #FFFFFF;
        }
    `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aykBb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AmplipiZoneCard", ()=>AmplipiZoneCard);
var _commonAmplipiCard = require("./common-amplipi-card");
const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
class AmplipiZoneCard extends (0, _commonAmplipiCard.CommonAmplipiCard) {
    static getConfigElement() {
        return document.createElement("amplipi-zone-card-editor");
    }
    setConfig(config) {
        this._config = config;
        this._zone = config.entity;
        this._num_zones = 0;
    }
    set hass(hass) {
        this._hass = hass;
        if (this._media_player) this._media_player.hass = hass;
        if (this._source_player) this._source_player.hass = hass;
        if (this._helpers && this.source != this._hass.states[this._zone].attributes.source) {
            this._source_player = this._loadSourcePlayer(this._hass.states[this._zone].attributes.source);
            this._controls_player = this._loadControlsPlayer(this._hass.states[this._zone].attributes.source);
        }
        if (this._controls_player) this._controls_player.hass = hass;
        if (this._hassResolve) this._hassResolve();
    }
    render() {
        if (!this._hass || !this._config) return html``;
        return html`
        <ha-card header="${this._config.name}" style="padding: 1.5rem;">
        <b>Now Playing:</b> ${this._hass.states[this._zone].attributes.media_album_artist} - ${this._hass.states[this._zone].attributes.media_track}
            ${this._media_player == undefined ? "" : this._media_player}
            ${this._source_player == undefined ? "" : this._source_player}
            ${this._controls_player == undefined ? "" : this._controls_player}
        </ha-card>`;
    }
    async addMediaPlayer() {
        if (this._helpers === undefined) await new Promise((resolve)=>this._helpersResolve = resolve);
        if (this._hass === undefined) await new Promise((resolve)=>this._hassResolve = resolve);
        this._hassResolve = undefined;
        this._helpersResolve = undefined;
        let media_config = {
            "type": "custom:mini-media-player",
            "entity": this._zone,
            "group": "false",
            "info": "scroll",
            "artwork": "cover",
            "source": "icon",
            "hide": {
                "power": "true",
                "controls": "true"
            }
        };
        if (this._config.media_config instanceof Object) media_config = {
            ...media_config,
            ...this._config.media_config
        };
        this._media_player = await this._helpers.createCardElement(media_config);
        this._media_player.hass = this._hass;
        this._source_player = this._loadSourcePlayer(this._hass.states[this._zone].attributes.source);
        this._controls_player = this._loadControlsPlayer(this._hass.states[this._zone].attributes.source);
        this.triggerRender();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./common-amplipi-card":"bLmz7"}],"lcrXX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AmplipiZoneCardEditor", ()=>AmplipiZoneCardEditor);
var _commonAmplipiEditor = require("./common-amplipi-editor");
const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
class AmplipiZoneCardEditor extends (0, _commonAmplipiEditor.CommonAmplipiCardEditor) {
    render() {
        let entities = [
            ""
        ].concat(Object.keys(this.hass.states).filter((eid)=>eid.substr(0, eid.indexOf(".")) === "media_player"));
        if (!this.hass || !this._config) return html``;
        return html`
        <h2>Name</h2>
        <input
        .value=${this._config.name}
        @focusout=${this._nameChanged}
        ></input>

        <h2>Zone</h2>
        <div class="group-select">
            <select
            @change=${this._entityChanged}>
            <option value="${this._config.entity}">${this._config.entity}</option>
            ${entities.map((entity)=>{
            if (this.hass.states[entity] !== undefined && this.hass.states[entity].attributes.amplipi_zone_id !== undefined && entity != this._config.entity) return html`
                        <option value="${entity}">${entity}</option>`;
        })}
            </select>
        </div>
        `;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./common-amplipi-editor":"3s1l3"}]},["farZc","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.js.map
