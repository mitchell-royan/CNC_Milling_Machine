"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/debug-tracker-vscode/dist/index.js
var require_dist = __commonJS({
  "node_modules/debug-tracker-vscode/dist/index.js"(exports, module2) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module2 === "object")
        module2.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["debug_tracker_vscode"] = factory();
      else
        root["debug_tracker_vscode"] = factory();
    })(global, () => {
      return (() => {
        "use strict";
        var __webpack_modules__ = [
          (__unused_webpack_module, exports2, __webpack_require__2) => {
            Object.defineProperty(exports2, "__esModule", { value: true });
            const tslib_1 = __webpack_require__2(1);
            tslib_1.__exportStar(__webpack_require__2(2), exports2);
            tslib_1.__exportStar(__webpack_require__2(4), exports2);
          },
          (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
            __webpack_require__2.r(__webpack_exports__2);
            __webpack_require__2.d(__webpack_exports__2, {
              "__assign": () => __assign,
              "__asyncDelegator": () => __asyncDelegator,
              "__asyncGenerator": () => __asyncGenerator,
              "__asyncValues": () => __asyncValues,
              "__await": () => __await,
              "__awaiter": () => __awaiter,
              "__classPrivateFieldGet": () => __classPrivateFieldGet,
              "__classPrivateFieldSet": () => __classPrivateFieldSet,
              "__createBinding": () => __createBinding,
              "__decorate": () => __decorate,
              "__exportStar": () => __exportStar,
              "__extends": () => __extends,
              "__generator": () => __generator,
              "__importDefault": () => __importDefault,
              "__importStar": () => __importStar,
              "__makeTemplateObject": () => __makeTemplateObject,
              "__metadata": () => __metadata,
              "__param": () => __param,
              "__read": () => __read,
              "__rest": () => __rest,
              "__spread": () => __spread,
              "__spreadArrays": () => __spreadArrays,
              "__values": () => __values
            });
            var extendStatics = function(d, b) {
              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                d2.__proto__ = b2;
              } || function(d2, b2) {
                for (var p in b2)
                  if (b2.hasOwnProperty(p))
                    d2[p] = b2[p];
              };
              return extendStatics(d, b);
            };
            function __extends(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function() {
              __assign = Object.assign || function __assign2(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
                }
                return t;
              };
              return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
              var t = {};
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                  t[p] = s[p];
              if (s != null && typeof Object.getOwnPropertySymbols === "function")
                for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                  if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
                }
              return t;
            }
            function __decorate(decorators, target, key, desc) {
              var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
              if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(decorators, target, key, desc);
              else
                for (var i = decorators.length - 1; i >= 0; i--)
                  if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
              return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
              return function(target, key) {
                decorator(target, key, paramIndex);
              };
            }
            function __metadata(metadataKey, metadataValue) {
              if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
              function adopt(value) {
                return value instanceof P ? value : new P(function(resolve) {
                  resolve(value);
                });
              }
              return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function rejected(value) {
                  try {
                    step(generator["throw"](value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
              });
            }
            function __generator(thisArg, body) {
              var _ = { label: 0, sent: function() {
                if (t[0] & 1)
                  throw t[1];
                return t[1];
              }, trys: [], ops: [] }, f, y, t, g;
              return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
              }), g;
              function verb(n) {
                return function(v) {
                  return step([n, v]);
                };
              }
              function step(op) {
                if (f)
                  throw new TypeError("Generator is already executing.");
                while (_)
                  try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                      return t;
                    if (y = 0, t)
                      op = [op[0] & 2, t.value];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t = op;
                        break;
                      case 4:
                        _.label++;
                        return { value: op[1], done: false };
                      case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                      case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                      default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                        }
                        if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                        }
                        if (t[2])
                          _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                  } catch (e) {
                    op = [6, e];
                    y = 0;
                  } finally {
                    f = t = 0;
                  }
                if (op[0] & 5)
                  throw op[1];
                return { value: op[0] ? op[1] : void 0, done: true };
              }
            }
            function __createBinding(o, m, k, k2) {
              if (k2 === void 0)
                k2 = k;
              o[k2] = m[k];
            }
            function __exportStar(m, exports2) {
              for (var p in m)
                if (p !== "default" && !exports2.hasOwnProperty(p))
                  exports2[p] = m[p];
            }
            function __values(o) {
              var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
              if (m)
                return m.call(o);
              if (o && typeof o.length === "number")
                return {
                  next: function() {
                    if (o && i >= o.length)
                      o = void 0;
                    return { value: o && o[i++], done: !o };
                  }
                };
              throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function __read(o, n) {
              var m = typeof Symbol === "function" && o[Symbol.iterator];
              if (!m)
                return o;
              var i = m.call(o), r, ar = [], e;
              try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                  ar.push(r.value);
              } catch (error) {
                e = { error };
              } finally {
                try {
                  if (r && !r.done && (m = i["return"]))
                    m.call(i);
                } finally {
                  if (e)
                    throw e.error;
                }
              }
              return ar;
            }
            function __spread() {
              for (var ar = [], i = 0; i < arguments.length; i++)
                ar = ar.concat(__read(arguments[i]));
              return ar;
            }
            function __spreadArrays() {
              for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                s += arguments[i].length;
              for (var r = Array(s), k = 0, i = 0; i < il; i++)
                for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                  r[k] = a[j];
              return r;
            }
            ;
            function __await(v) {
              return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var g = generator.apply(thisArg, _arguments || []), i, q = [];
              return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
              }, i;
              function verb(n) {
                if (g[n])
                  i[n] = function(v) {
                    return new Promise(function(a, b) {
                      q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                  };
              }
              function resume(n, v) {
                try {
                  step(g[n](v));
                } catch (e) {
                  settle(q[0][3], e);
                }
              }
              function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
              }
              function fulfill(value) {
                resume("next", value);
              }
              function reject(value) {
                resume("throw", value);
              }
              function settle(f, v) {
                if (f(v), q.shift(), q.length)
                  resume(q[0][0], q[0][1]);
              }
            }
            function __asyncDelegator(o) {
              var i, p;
              return i = {}, verb("next"), verb("throw", function(e) {
                throw e;
              }), verb("return"), i[Symbol.iterator] = function() {
                return this;
              }, i;
              function verb(n, f) {
                i[n] = o[n] ? function(v) {
                  return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
                } : f;
              }
            }
            function __asyncValues(o) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var m = o[Symbol.asyncIterator], i;
              return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
              }, i);
              function verb(n) {
                i[n] = o[n] && function(v) {
                  return new Promise(function(resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                  });
                };
              }
              function settle(resolve, reject, d, v) {
                Promise.resolve(v).then(function(v2) {
                  resolve({ value: v2, done: d });
                }, reject);
              }
            }
            function __makeTemplateObject(cooked, raw) {
              if (Object.defineProperty) {
                Object.defineProperty(cooked, "raw", { value: raw });
              } else {
                cooked.raw = raw;
              }
              return cooked;
            }
            ;
            function __importStar(mod) {
              if (mod && mod.__esModule)
                return mod;
              var result = {};
              if (mod != null) {
                for (var k in mod)
                  if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
              }
              result.default = mod;
              return result;
            }
            function __importDefault(mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            }
            function __classPrivateFieldGet(receiver, privateMap) {
              if (!privateMap.has(receiver)) {
                throw new TypeError("attempted to get private field on non-instance");
              }
              return privateMap.get(receiver);
            }
            function __classPrivateFieldSet(receiver, privateMap, value) {
              if (!privateMap.has(receiver)) {
                throw new TypeError("attempted to set private field on non-instance");
              }
              privateMap.set(receiver, value);
              return value;
            }
          },
          (__unused_webpack_module, exports2, __webpack_require__2) => {
            Object.defineProperty(exports2, "__esModule", { value: true });
            exports2.DebugTracker = exports2.OtherDebugEvents = exports2.DebugSessionStatus = exports2.TRACKER_EXT_ID = void 0;
            const tslib_1 = __webpack_require__2(1);
            const vscode3 = tslib_1.__importStar(__webpack_require__2(3));
            const debug_tracker_1 = __webpack_require__2(4);
            exports2.TRACKER_EXT_ID = "mcu-debug.debug-tracker-vscode";
            var DebugSessionStatus2;
            (function(DebugSessionStatus3) {
              DebugSessionStatus3["Unknown"] = "unknown";
              DebugSessionStatus3["Initializing"] = "initializing";
              DebugSessionStatus3["Started"] = "started";
              DebugSessionStatus3["Stopped"] = "stopped";
              DebugSessionStatus3["Running"] = "running";
              DebugSessionStatus3["Terminated"] = "terminated";
            })(DebugSessionStatus2 = exports2.DebugSessionStatus || (exports2.DebugSessionStatus = {}));
            var OtherDebugEvents2;
            (function(OtherDebugEvents3) {
              OtherDebugEvents3["FirstStackTrace"] = "first-stack-trace";
              OtherDebugEvents3["Capabilities"] = "capabilities";
              OtherDebugEvents3["ProtocolEvent"] = "protocol-event";
            })(OtherDebugEvents2 = exports2.OtherDebugEvents || (exports2.OtherDebugEvents = {}));
            class DebugTracker2 {
              constructor(context, dbgChannel) {
                this.context = context;
                this.tracker = debug_tracker_1.DebugTrackerFactory.register(context, dbgChannel);
              }
              subscribe(arg) {
                if (arg.version !== 1) {
                  return `Unknown version ${arg.version} for debug-tracker`;
                }
                return this.tracker.subscribe(arg);
              }
              unsubscribe(clientId) {
                this.tracker.unsubscribe(clientId);
              }
              getSessionStatus(sessionId) {
                return this.tracker.getSessionStatus(sessionId);
              }
              getSessionInfo(sessionId) {
                return this.tracker.getSessionInfo(sessionId);
              }
              static getTrackerExtension(callerExtName, maxTimeout = 10 * 1e3) {
                let trackerApi2;
                return new Promise(async (resolve) => {
                  let trackerExt = vscode3.extensions.getExtension(exports2.TRACKER_EXT_ID);
                  const activate2 = () => {
                    if (trackerExt) {
                      trackerExt.activate().then((api) => {
                        trackerApi2 = api;
                        resolve(api);
                      }), (e) => {
                        resolve(new Error(`Activation of extension ${exports2.TRACKER_EXT_ID} failed: ${e}`));
                      };
                    } else {
                      resolve(new Error("Internal Error: invalid call to activate"));
                    }
                  };
                  if (!trackerExt) {
                    const installStr = `Install ${exports2.TRACKER_EXT_ID}`;
                    const doInstall = await vscode3.window.showErrorMessage(`${callerExtName} requires extension '${exports2.TRACKER_EXT_ID}' to be installed. Do you want to install '${exports2.TRACKER_EXT_ID}'`, installStr, "Cancel");
                    if (doInstall === installStr) {
                      await vscode3.commands.executeCommand("workbench.extensions.installExtension", exports2.TRACKER_EXT_ID);
                      trackerExt = vscode3.extensions.getExtension(exports2.TRACKER_EXT_ID);
                      while (!trackerExt) {
                        if (trackerApi2) {
                          break;
                        }
                        if (maxTimeout <= 0) {
                          resolve(new Error(`Install of extension ${exports2.TRACKER_EXT_ID} timed out`));
                          return;
                        }
                        const waitTime = 500;
                        await new Promise((res) => {
                          setTimeout(() => {
                            maxTimeout -= waitTime;
                            res();
                          }, waitTime);
                        });
                        trackerExt = vscode3.extensions.getExtension(exports2.TRACKER_EXT_ID);
                      }
                      activate2();
                    } else {
                      resolve(new Error(`Install of extension ${exports2.TRACKER_EXT_ID} cancelled`));
                      return;
                    }
                  } else {
                    activate2();
                  }
                });
              }
            }
            exports2.DebugTracker = DebugTracker2;
          },
          (module3) => {
            module3.exports = require("vscode");
          },
          (__unused_webpack_module, exports2, __webpack_require__2) => {
            Object.defineProperty(exports2, "__esModule", { value: true });
            exports2.DebugTrackerFactory = exports2.DebuggerTracker = void 0;
            const tslib_1 = __webpack_require__2(1);
            const vscode3 = tslib_1.__importStar(__webpack_require__2(3));
            const exports_1 = __webpack_require__2(2);
            class ClientInfo {
              constructor(clientId, handler) {
                this.clientId = clientId;
                this.handler = handler;
              }
            }
            let ExtensionName = "unknown extension name";
            const DebugClients = {};
            const DebugEventClients = {};
            const AllSessionsById = {};
            class DebuggerTracker {
              constructor(session) {
                this.session = session;
                this.isTerminated = false;
                this.status = exports_1.DebugSessionStatus.Unknown;
                AllSessionsById[session.id] = this;
                DebuggerTracker.setStatus(session, exports_1.DebugSessionStatus.Initializing);
              }
              static getSessionById(id) {
                return AllSessionsById[id];
              }
              onDidSendMessage(msg) {
                if (this.isTerminated)
                  return;
                if (DebugTrackerFactory.dbgLevel > 1) {
                  appendMsgToDbgChannel("--> ", msg);
                }
                const message = msg;
                if (!message) {
                  return;
                }
                switch (message.type) {
                  case "event": {
                    const ev = message;
                    if (ev) {
                      if (ev.event === "stopped") {
                        this.fistStackTrace = void 0;
                        DebuggerTracker.setStatus(this.session, exports_1.DebugSessionStatus.Stopped, ev);
                        return;
                      } else if (ev.event === "continued") {
                        DebuggerTracker.setStatus(this.session, exports_1.DebugSessionStatus.Running);
                        return;
                      } else if (ev.event === "capabilities") {
                        const capabilities = ev.body?.capabilities;
                        if (capabilities) {
                          DebuggerTracker.sendCapabilities(this.session, capabilities);
                        }
                        return;
                      }
                    }
                    const arg = {
                      clientId: "",
                      event: exports_1.OtherDebugEvents.ProtocolEvent,
                      sessionId: this.session.id,
                      protocolEvent: ev
                    };
                    DebuggerTracker.notifyEventClients(this.session.type, arg);
                    break;
                  }
                  case "response": {
                    const rsp = message;
                    if (rsp) {
                      if (!rsp.success && ["initialize", "launch", "attach"].find((v) => v === rsp.command)) {
                        this.terminate();
                        break;
                      }
                      const continueCommands = ["continue", "reverseContinue", "step", "stepIn", "stepOut", "stepBack", "next", "goto"];
                      if (rsp.success && rsp.command === "stackTrace") {
                        if (rsp.body?.stackFrames && rsp.body.stackFrames.length > 0 && this.fistStackTrace === void 0) {
                          this.fistStackTrace = rsp;
                          DebuggerTracker.sendFirstStackTrace(this.session, this.fistStackTrace);
                        }
                      } else if (rsp.success && continueCommands.includes(rsp.command)) {
                        DebuggerTracker.setStatus(this.session, exports_1.DebugSessionStatus.Running);
                      } else if (rsp.command === "initialize") {
                        const capabilities = rsp.body;
                        if (capabilities) {
                          DebuggerTracker.sendCapabilities(this.session, capabilities);
                        }
                      }
                    }
                    break;
                  }
                  default: {
                    break;
                  }
                }
              }
              onWillReceiveMessage(msg) {
                if (DebugTrackerFactory.dbgLevel > 1) {
                  appendMsgToDbgChannel("<-- ", msg);
                }
                if (this.isTerminated)
                  return;
              }
              static trackAllSessions() {
                const ret = [
                  vscode3.debug.onDidStartDebugSession((s) => {
                    DebuggerTracker.setStatus(s, exports_1.DebugSessionStatus.Started);
                  }),
                  vscode3.debug.onDidTerminateDebugSession((s) => {
                    const tracker = AllSessionsById[s.id];
                    if (tracker) {
                      tracker.terminate();
                    }
                  })
                ];
                return ret;
              }
              terminate() {
                if (!this.isTerminated) {
                  this.isTerminated = true;
                  DebuggerTracker.setStatus(this.session, exports_1.DebugSessionStatus.Terminated);
                  delete AllSessionsById[this.session.id];
                }
              }
              static notifyClientsGeneric(arg, clients) {
                for (const client of clients) {
                  const tmp = { ...arg, clientId: client.clientId };
                  try {
                    client.handler(tmp).catch((e) => {
                      console.error(`debug-tracer: Client handler threw an exception, ${e}`, tmp);
                    });
                  } catch (e) {
                    console.error(`debug-tracer: Could not run client handler, ${e}`, tmp);
                  }
                }
              }
              static notifyClients(daName, arg) {
                const wildOnes = DebugClients["*"] || [];
                const thisOne = DebugClients[daName] || [];
                const all = wildOnes.concat(thisOne);
                DebuggerTracker.notifyClientsGeneric(arg, all);
              }
              static notifyEventClients(daName, arg) {
                const wildOnes = DebugEventClients["*"] || [];
                const thisOne = DebugEventClients[daName] || [];
                const all = wildOnes.concat(thisOne);
                DebuggerTracker.notifyClientsGeneric(arg, all);
              }
              static setStatus(s, status, optArg) {
                if (DebugTrackerFactory.dbgLevel) {
                  const str = `${ExtensionName}: Session '${s.type}:${s.name}': Status '${status}', id = ${s.id}`;
                  appendMsgToDbgChannel(str, void 0);
                }
                const tracker = AllSessionsById[s.id];
                if (tracker && tracker.status !== status) {
                  tracker.status = status;
                  const arg = {
                    clientId: "",
                    event: status,
                    sessionId: s.id
                  };
                  if (status === exports_1.DebugSessionStatus.Initializing) {
                    arg.session = s;
                  } else if (status === exports_1.DebugSessionStatus.Stopped) {
                    arg.stoppedEvent = optArg;
                  }
                  this.notifyClients(s.type, arg);
                }
              }
              static sendCapabilities(s, capabilities) {
                if (DebugTrackerFactory.dbgLevel) {
                  const str = `${ExtensionName}: Session '${s.type}:${s.name}': event '${exports_1.OtherDebugEvents.Capabilities}', id = ${s.id}`;
                  appendMsgToDbgChannel(str, void 0);
                }
                const arg = {
                  clientId: "",
                  event: exports_1.OtherDebugEvents.Capabilities,
                  sessionId: s.id,
                  capabilities
                };
                this.notifyClients(s.type, arg);
              }
              static sendFirstStackTrace(s, response) {
                if (DebugTrackerFactory.dbgLevel) {
                  const str = `${ExtensionName}: Session '${s.type}:${s.name}': event '${exports_1.OtherDebugEvents.FirstStackTrace}', id = ${s.id}`;
                  appendMsgToDbgChannel(str, void 0);
                }
                const arg = {
                  clientId: "",
                  event: exports_1.OtherDebugEvents.FirstStackTrace,
                  sessionId: s.id,
                  stackTrace: response
                };
                this.notifyClients(s.type, arg);
              }
              notifyCurrentStatus(clientId) {
                const arg = {
                  clientId,
                  event: this.status,
                  sessionId: this.session.id,
                  session: this.session
                };
                DebuggerTracker.notifyClients(this.session.type, arg);
              }
            }
            exports2.DebuggerTracker = DebuggerTracker;
            class DebugTrackerFactory {
              constructor() {
                DebugTrackerFactory.context.subscriptions.push(...DebuggerTracker.trackAllSessions(), vscode3.workspace.onDidChangeConfiguration(this.settingsChanged.bind(this)), vscode3.debug.registerDebugAdapterTrackerFactory("*", this));
              }
              static register(cxt, dbgChannel) {
                if (dbgChannel) {
                  DebugTrackerFactory.dbgChannel = dbgChannel;
                }
                DebugTrackerFactory.context = cxt;
                const elements = cxt.extensionUri.path.split(/[\\/]+/);
                ExtensionName = elements.pop() || cxt.extensionUri.path;
                return new DebugTrackerFactory();
              }
              settingsChanged(e) {
                console.log(e);
              }
              createDebugAdapterTracker(session) {
                return new DebuggerTracker(session);
              }
              static getNonce() {
                let text = "";
                const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < 32; i++) {
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
              }
              subscribe(arg) {
                const nonce = DebugTrackerFactory.getNonce();
                const item = new ClientInfo(nonce, arg.body.handler);
                const add = (daName) => {
                  let existing = DebugClients[daName];
                  if (existing) {
                    existing.push(item);
                  } else {
                    DebugClients[daName] = [item];
                  }
                  if (arg.body.wantCurrentStatus) {
                    setImmediate(() => {
                      for (const [_id, tracker] of Object.entries(AllSessionsById)) {
                        tracker.notifyCurrentStatus(nonce);
                        if (daName === "*" || daName === tracker.session.type) {
                          tracker.notifyCurrentStatus(nonce);
                        }
                      }
                    });
                  }
                  if (arg.body.notifyAllEvents) {
                    existing = DebugEventClients[daName];
                    if (existing) {
                      existing.push(item);
                    } else {
                      DebugEventClients[daName] = [item];
                    }
                  }
                };
                if (!arg.body) {
                  return "Body field missing for debug-tracker subscribe()";
                } else if (!arg.body.debuggers) {
                  return "No debuggers specified in debug-tracker subscribe()";
                } else if (!arg.body.handler) {
                  return "No handler specified in debug-tracker subscribe()";
                } else if (typeof arg.body.handler !== "function") {
                  return "Invalid handler, must be a function in debug-tracker subscribe()";
                } else if (arg.body.debuggers === "*") {
                  add("*");
                } else {
                  for (const daName of arg.body.debuggers) {
                    add(daName);
                  }
                }
                if (arg.body.debugLevel !== void 0 && arg.body.debugLevel > DebugTrackerFactory.dbgLevel) {
                  DebugTrackerFactory.dbgLevel = arg.body.debugLevel;
                }
                const tmp = {
                  clientId: nonce
                };
                return tmp;
              }
              unsubscribe(clientId) {
                for (const item of [DebugClients, DebugEventClients]) {
                  for (const daName of Object.getOwnPropertyNames(item)) {
                    const clientInfo = item[daName];
                    item[daName] = clientInfo.filter((v) => v.clientId !== clientId);
                    if (item[daName].length === 0) {
                      delete item[daName];
                    }
                  }
                }
              }
              getSessionStatus(sessionId) {
                const session = DebuggerTracker.getSessionById(sessionId);
                if (!session) {
                  return exports_1.DebugSessionStatus.Unknown;
                }
                return session.status;
              }
              getSessionInfo(sessionId) {
                const session = DebuggerTracker.getSessionById(sessionId);
                if (!session) {
                  return void 0;
                }
                const ret = {
                  session: session.session,
                  status: session.status
                };
                return ret;
              }
            }
            exports2.DebugTrackerFactory = DebugTrackerFactory;
            DebugTrackerFactory.dbgLevel = 0;
            function appendMsgToDbgChannel(str, obj) {
              if (DebugTrackerFactory.dbgChannel && DebugTrackerFactory.dbgLevel > 0) {
                str += obj ? JSON.stringify(obj) : "";
                try {
                  DebugTrackerFactory.dbgChannel.appendLine(str);
                } catch (e) {
                  console.error(e ? e.toString() : "unknown exception?");
                }
              }
            }
          }
        ];
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
          var cachedModule = __webpack_module_cache__[moduleId];
          if (cachedModule !== void 0) {
            return cachedModule.exports;
          }
          var module3 = __webpack_module_cache__[moduleId] = {
            exports: {}
          };
          __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
          return module3.exports;
        }
        (() => {
          __webpack_require__.d = (exports2, definition) => {
            for (var key in definition) {
              if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
              }
            }
          };
        })();
        (() => {
          __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        })();
        (() => {
          __webpack_require__.r = (exports2) => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
        })();
        var __webpack_exports__ = __webpack_require__(0);
        return __webpack_exports__;
      })();
    });
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode2 = __toESM(require("vscode"));

// src/rtos/rtos.ts
var vscode = __toESM(require("vscode"));

// src/rtos/rtos-common.ts
var traceVars = false;
var ShouldRetry = class extends Error {
  constructor(str) {
    super("Busy or Error for expr " + str);
  }
};
var _RTOSBase = class {
  constructor(session, name) {
    this.session = session;
    this.name = name;
    this.status = "none";
    this.progStatus = "started";
    this.className = this.name.replace(new RegExp("[^_a-zA-Z0-9-]", "g"), "");
  }
  progStatus;
  status;
  className;
  exprValues = /* @__PURE__ */ new Map();
  failedWhy;
  uiElementState = /* @__PURE__ */ new Map();
  customRequest(cmd, arg, opt) {
    return new Promise(async (resolve, reject) => {
      const c = ++_RTOSBase.reqCounter;
      if (traceVars) {
        console.log(`${c} RTOS: request -> ${opt ? "opt" : ""} ${cmd} ${JSON.stringify(arg)}`);
      }
      try {
        const result = await this.session.customRequest(cmd, arg);
        if (traceVars) {
          console.log(`${c} RTOS: result <- ${JSON.stringify(result)}`);
        }
        resolve(result);
      } catch (e) {
        if (traceVars) {
          console.log(`${c} RTOS: exception <- ${e}`);
        }
        reject(e);
      }
    });
  }
  onStopped(frameId) {
    this.progStatus = "stopped";
    return this.refresh(frameId);
  }
  onContinued() {
    this.progStatus = "running";
  }
  onExited() {
    this.progStatus = "exited";
  }
  updateUIElementState(debugSessionId, elementId, state) {
    if (this.session.id.localeCompare(debugSessionId) === 0) {
      this.uiElementState.set(elementId, state);
    }
  }
  async evalForVarRef(prevValue, useFrameId, expr, optional) {
    if (prevValue !== void 0) {
      return prevValue;
    } else if (this.progStatus !== "stopped") {
      return void 0;
    }
    const arg = {
      frameId: useFrameId,
      expression: expr,
      context: "hover"
    };
    try {
      const result = await this.customRequest("evaluate", arg, optional);
      if (!result || !optional && result.variablesReference === 0) {
        throw new Error(`Failed to evaluate ${expr}`);
      }
      return result ? result.variablesReference : 0;
    } catch (e) {
      throw e;
    }
  }
  async evalForVarValue(useFrameId, expr) {
    const arg = {
      frameId: useFrameId,
      expression: expr,
      context: "hover"
    };
    try {
      const result = await this.customRequest("evaluate", arg);
      const ret = result?.result;
      return ret;
    } catch (e) {
      throw e;
    }
  }
  getVarChildren(varRef, dbg) {
    return new Promise((resolve, reject) => {
      if (this.progStatus !== "stopped") {
        return reject(new Error(`busy, failed to evaluate ${dbg}`));
      } else {
        const arg = {
          variablesReference: varRef
        };
        this.customRequest("variables", arg).then(
          (result) => {
            if (!result || !result.variables || !result.variables.length) {
              reject(Error(`Failed to evaluate variable ${arg.variablesReference} ${dbg}`));
            } else {
              resolve(result.variables);
            }
          },
          (e) => {
            reject(e);
          }
        );
      }
    });
  }
  getVarChildrenObj(varRef, dbg) {
    return new Promise((resolve, reject) => {
      if (varRef === void 0 || varRef === 0) {
        resolve(null);
        return;
      }
      this.getVarChildren(varRef, dbg).then(
        (vars) => {
          const obj = RTOSVarHelper.varsToObj(vars);
          resolve(obj);
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
  async getVarIfEmpty(prev, fId, expr, opt) {
    try {
      if (prev !== void 0 || this.progStatus !== "stopped") {
        return prev;
      }
      const tmp = new RTOSVarHelper(expr, this);
      const success = await tmp.tryInitOrUpdate(fId, opt);
      if (!success || isNullOrUndefined(tmp.value) && this.progStatus !== "stopped") {
        throw new ShouldRetry(expr);
      }
      if (isNullOrUndefined(tmp.value)) {
        if (!opt) {
          if (traceVars) {
            console.error(`1. Throwing exception for variable ${expr}`);
          }
          throw Error(`${expr} not found`);
        }
        return null;
      }
      return tmp;
    } catch (e) {
      if (e instanceof ShouldRetry) {
        throw e;
      }
      if (opt && this.progStatus === "stopped") {
        return null;
      }
      if (traceVars) {
        console.error(`2. Throwing exception for variable ${expr}`);
      }
      throw new Error(`Failed to evaluate ${expr}: ${e?.toString()}`);
    }
  }
  async getExprVal(expr, frameId) {
    let exprVar = this.exprValues.get(expr);
    if (!exprVar) {
      exprVar = new RTOSVarHelper(expr, this);
    }
    return exprVar.getValue(frameId);
  }
  async getExprValChildren(expr, frameId) {
    let exprVar = this.exprValues.get(expr);
    if (!exprVar) {
      exprVar = new RTOSVarHelper(expr, this);
    }
    return exprVar.getVarChildren(frameId);
  }
  getExprValChildrenObj(expr, frameId) {
    return new Promise(async (resolve) => {
      try {
        const vars = await this.getExprValChildren(expr, frameId);
        const obj = RTOSVarHelper.varsToObj(vars);
        resolve(obj);
      } catch (e) {
        resolve(e);
      }
    });
  }
  htmlEscape(s) {
    return s.replace(/&/g, "&amp").replace(/'/g, "&apos").replace(/"/g, "&quot").replace(/>/g, "&gt").replace(/</g, "&lt");
  }
  getHTMLDataGrid(columns, rows, attributes, hasComplexContent = false) {
    let html = "";
    let attrs = "";
    let headers = "";
    let dataRows = "";
    const columnKeys = [];
    if (attributes) {
      attributes.forEach((a) => {
        if ("name" in a && "value" in a) {
          attrs += `${a["name"]}="${a["value"]}"`;
        }
      });
    }
    if (columns) {
      let i = 0;
      columns.forEach((c) => {
        if ("title" in c && "columnDataKey" in c) {
          i++;
          columnKeys.push(c["columnDataKey"]);
          headers += `<vscode-data-grid-cell cell-type="columnheader" grid-column="${i}">
                                ${this.htmlEscape(c["title"].toString())}</vscode-data-grid-cell>`;
        }
      });
      headers = `<vscode-data-grid-row row-type="header">${headers}</vscode-data-grid-row>`;
    }
    if (rows) {
      rows.forEach((r) => {
        let i = 0;
        let dataRow = "";
        columnKeys.forEach((c) => {
          if (c in r) {
            dataRow += `<vscode-data-grid-cell grid-column="${i}">
                                    ${hasComplexContent ? r[c].toString() : this.htmlEscape(r[c].toString())}</vscode-data-grid-cell>`;
          } else {
            dataRow += `<vscode-data-grid-cell grid-column="${i}"></vscode-data-grid-cell>`;
          }
        });
        dataRows += `<vscode-data-grid-row>${dataRow}</vscode-data-grid-row>`;
        i++;
      });
    }
    html = `<vscode-data-grid ${attrs}}>${headers}${dataRows}</vscode-data-grid>`;
    return html;
  }
  getHTMLPanels(tabs, views, attributes, hasComplexContent = false) {
    let html = "";
    let attrs = "";
    let panelTabs = "";
    let panelViews = "";
    if (attributes) {
      attributes.forEach((a) => {
        if ("name" in a && "value" in a) {
          attrs += `${a["name"]}="${a["value"]}"`;
        }
      });
    }
    if (tabs) {
      let i = 1;
      tabs.forEach((t) => {
        if ("title" in t) {
          i++;
          panelTabs += `<vscode-panel-tab id="tab-${i}">
                                ${hasComplexContent ? t["title"].toString() : this.htmlEscape(t["title"].toString())}
                                </vscode-panel-tab>`;
        }
      });
    }
    if (views) {
      let i = 1;
      views.forEach((v) => {
        if ("content" in v) {
          i++;
          panelViews += `<vscode-panel-view id="view-${i}">
                                ${hasComplexContent ? v["content"].toString() : this.htmlEscape(v["content"].toString())}
                                </vscode-panel-view>`;
        }
      });
    }
    html = `<vscode-panels ${attrs}}>${panelTabs}${panelViews}</vscode-panels>`;
    return html;
  }
  getHTMLCommon(displayFieldNames, RTOSDisplayColumn, allThreads, timeInfo) {
    const getAlignClasses = (key) => {
      const colType = RTOSDisplayColumn[key].colType || 0 /* colTypeNormal */;
      let ret2 = "";
      if (colType & 1 /* colTypePercentage */) {
        ret2 += " centerAlign";
      }
      if (colType & 2 /* colTypeNumeric */) {
        ret2 += " rightAlign";
      }
      return ret2;
    };
    const padText = (key, txt) => {
      let needWSPreserve = false;
      const colSpaceFillThreshold = RTOSDisplayColumn[key].colSpaceFillThreshold;
      if (colSpaceFillThreshold !== void 0 && txt.length > 0) {
        txt = txt.padStart(colSpaceFillThreshold);
        needWSPreserve = true;
      }
      const gapBefore = RTOSDisplayColumn[key]?.colGapBefore || 0;
      if (gapBefore > 0) {
        txt = " ".repeat(gapBefore) + txt;
        needWSPreserve = true;
      }
      const gapAfter = RTOSDisplayColumn[key]?.colGapAfter || 0;
      if (gapAfter > 0) {
        txt += " ".repeat(gapAfter);
        needWSPreserve = true;
      }
      if (needWSPreserve) {
        txt = `<div class="whitespacePreserve">${txt}</div>`;
      }
      return txt;
    };
    const colFormat = displayFieldNames.map((key) => `${RTOSDisplayColumn[key].width}fr`).join(" ");
    let table = `<vscode-data-grid class="${this.className}-grid threads-grid" grid-template-columns="${colFormat}">
`;
    let header = "";
    let style = "";
    let row = 1;
    for (const thr of allThreads) {
      const th = thr.display;
      if (!header) {
        let col2 = 1;
        let have2ndRow = false;
        const commonHeaderRowPart = '  <vscode-data-grid-row row-type="header" class="threads-header-row">\n';
        const commonHeaderCellPart = '    <vscode-data-grid-cell cell-type="columnheader" class="threads-header-cell';
        header = commonHeaderRowPart;
        for (const key of displayFieldNames) {
          const txt = padText(key, RTOSDisplayColumn[key].headerRow1);
          const additionalClasses = getAlignClasses(key);
          header += `${commonHeaderCellPart}${additionalClasses}" grid-column="${col2}">${txt}</vscode-data-grid-cell>
`;
          if (!have2ndRow) {
            have2ndRow = !!RTOSDisplayColumn[key].headerRow2;
          }
          col2++;
        }
        header += "  </vscode-data-grid-row>\n";
        if (have2ndRow) {
          col2 = 1;
          header += commonHeaderRowPart;
          for (const key of displayFieldNames) {
            const txt = padText(key, RTOSDisplayColumn[key].headerRow2);
            const additionalClasses = getAlignClasses(key);
            header += `${commonHeaderCellPart}${additionalClasses}" grid-column="${col2}">${txt}</vscode-data-grid-cell>
`;
            col2++;
          }
          header += "  </vscode-data-grid-row>\n";
        }
        table += header;
      }
      let col = 1;
      const running = thr.running === true ? " running" : "";
      const rowClass = `thread-row-${row}`;
      table += `  <vscode-data-grid-row class="${this.className}-row threads-row ${rowClass}">
`;
      for (const key of displayFieldNames) {
        const v = th[key];
        let txt = padText(key, v.text);
        const lKey = key.toLowerCase();
        let additionalClasses = running + getAlignClasses(key);
        const colType = RTOSDisplayColumn[key].colType || 0 /* colTypeNormal */;
        if (colType & 1 /* colTypePercentage */) {
          if (v.value !== void 0) {
            const rowValueNumber = parseFloat(v.value);
            if (!isNaN(rowValueNumber)) {
              const activeValueStr = Math.floor(rowValueNumber).toString();
              additionalClasses += " backgroundPercent";
              style += `.${this.className}-grid .${rowClass} .threads-cell-${lKey}.backgroundPercent {
  --rtosview-percentage-active: ${activeValueStr}%;
}

`;
            }
          }
        } else if (colType & 4 /* colTypeLink */) {
        } else if (colType & 8 /* colTypeCollapse */ && v.value) {
          let length = 0;
          for (const val of Object.values(v.value)) {
            if (Array.isArray(val)) {
              length += val.length;
            }
          }
          if (length > 1) {
            const descriptions = Object.keys(v.value).map((key2) => `${key2}: ${v.value[key2].join(", ")}`).join("<br>");
            txt = `<button class="collapse-button">${v.text}</button><div class="collapse">${descriptions}</div>`;
          }
        }
        const cls = `class="${this.className}-cell threads-cell threads-cell-${lKey}${additionalClasses}"`;
        table += `    <vscode-data-grid-cell ${cls} grid-column="${col}">${txt}</vscode-data-grid-cell>
`;
        col++;
      }
      table += "  </vscode-data-grid-row>\n";
      row++;
    }
    table += "</vscode-data-grid>\n";
    let ret = table;
    if (timeInfo) {
      ret += `<p>Data collected at ${timeInfo}</p>
`;
    }
    const htmlContent = { html: ret, css: style };
    return htmlContent;
  }
};
var RTOSBase = _RTOSBase;
__publicField(RTOSBase, "disableStackPeaks", false);
__publicField(RTOSBase, "reqCounter", 0);
var RTOSVarHelper = class {
  constructor(expression, rtos) {
    this.expression = expression;
    this.rtos = rtos;
  }
  varReference;
  value;
  static varsToObj(vars) {
    const obj = {};
    for (const v of vars) {
      const tmp = {
        val: v.value,
        ref: v.variablesReference,
        exp: v.evaluateName
      };
      obj[v.name] = tmp;
    }
    return obj;
  }
  async tryInitOrUpdate(useFrameId, opt) {
    try {
      if (this.rtos.progStatus !== "stopped") {
        return false;
      }
      const arg = {
        frameId: useFrameId,
        expression: this.expression,
        context: "hover"
      };
      this.value = void 0;
      const result = await this.rtos.customRequest("evaluate", arg, opt);
      this.value = result.result;
      this.varReference = result.variablesReference;
      return true;
    } catch (e) {
      const msg = e?.message;
      if (msg) {
        if (msg === "Busy" || msg.includes("process is running")) {
          return false;
        }
      }
      throw e;
    }
  }
  getValue(frameId) {
    return new Promise(async (resolve, reject) => {
      if (this.rtos.progStatus !== "stopped") {
        return reject(new Error(`busy, failed on ${this.expression}`));
      } else {
        this.tryInitOrUpdate(frameId).then(
          (res) => {
            if (!res) {
              reject(new Error("failed to initialize/update"));
            } else {
              resolve(this.value);
            }
          },
          (e) => {
            reject(e);
          }
        );
      }
    });
  }
  getVarChildren(frameId) {
    return new Promise((resolve, reject) => {
      if (this.rtos.progStatus !== "stopped") {
        return reject(new Error(`busy, failed on ${this.expression}`));
      } else {
        this.getValue(frameId).then(
          (str) => {
            if (!this.varReference || !str) {
              reject(Error(`Failed to get variable reference for ${this.expression}`));
              return;
            }
            const arg = {
              variablesReference: this.varReference
            };
            this.rtos.customRequest("variables", arg).then(
              (result) => {
                if (!result || !result.variables || !result.variables.length) {
                  reject(
                    Error(
                      `Failed to evaluate variable ${this.expression} ${arg.variablesReference}`
                    )
                  );
                } else {
                  resolve(result.variables);
                }
              },
              (e) => {
                reject(e);
              }
            );
          },
          (e) => {
            reject(e);
          }
        );
      }
    });
  }
  getVarChildrenObj(useFrameId) {
    return new Promise((resolve, reject) => {
      this.getVarChildren(useFrameId).then(
        (vars) => {
          const obj = RTOSVarHelper.varsToObj(vars);
          resolve(obj);
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
};
var HrTimer = class {
  start;
  constructor() {
    this.start = process.hrtime.bigint();
  }
  restart() {
    this.start = process.hrtime.bigint();
  }
  getStart() {
    return this.start;
  }
  deltaNs() {
    return (process.hrtime.bigint() - this.start).toString();
  }
  deltaUs() {
    return this.toStringWithRes(3);
  }
  deltaMs() {
    return this.toStringWithRes(6);
  }
  createPaddedMs(padding) {
    const hrUs = this.deltaMs().padStart(padding, "0");
    return hrUs;
  }
  createDateTimestamp() {
    const hrUs = this.createPaddedMs(6);
    const date = new Date();
    const ret = `[${date.toISOString()}, +${hrUs}ms]`;
    return ret;
  }
  toStringWithRes(res) {
    const diff = process.hrtime.bigint() - this.start + BigInt(10 ** res / 2);
    let ret = diff.toString();
    ret = ret.length <= res ? "0" : ret.substr(0, ret.length - res);
    return ret;
  }
};
function isNullOrUndefined(x) {
  return x === void 0 || x === null;
}
function hexFormat(value, padding = 8, includePrefix = true) {
  let base = (value >>> 0).toString(16);
  base = base.padStart(padding, "0");
  return includePrefix ? "0x" + base : base;
}

// src/rtos/rtos-freertos.ts
var DisplayFields = /* @__PURE__ */ ((DisplayFields5) => {
  DisplayFields5[DisplayFields5["ID"] = 0] = "ID";
  DisplayFields5[DisplayFields5["Address"] = 1] = "Address";
  DisplayFields5[DisplayFields5["TaskName"] = 2] = "TaskName";
  DisplayFields5[DisplayFields5["Status"] = 3] = "Status";
  DisplayFields5[DisplayFields5["Priority"] = 4] = "Priority";
  DisplayFields5[DisplayFields5["StackStart"] = 5] = "StackStart";
  DisplayFields5[DisplayFields5["StackTop"] = 6] = "StackTop";
  DisplayFields5[DisplayFields5["StackEnd"] = 7] = "StackEnd";
  DisplayFields5[DisplayFields5["StackSize"] = 8] = "StackSize";
  DisplayFields5[DisplayFields5["StackUsed"] = 9] = "StackUsed";
  DisplayFields5[DisplayFields5["StackFree"] = 10] = "StackFree";
  DisplayFields5[DisplayFields5["StackPeak"] = 11] = "StackPeak";
  DisplayFields5[DisplayFields5["Runtime"] = 12] = "Runtime";
  return DisplayFields5;
})(DisplayFields || {});
var numType = 2 /* colTypeNumeric */;
var FreeRTOSItems = {};
FreeRTOSItems[DisplayFields[0 /* ID */]] = { width: 1, headerRow1: "", headerRow2: "ID", colType: numType };
FreeRTOSItems[DisplayFields[1 /* Address */]] = {
  width: 3,
  headerRow1: "Thread",
  headerRow2: "Address",
  colGapBefore: 1
};
FreeRTOSItems[DisplayFields[2 /* TaskName */]] = { width: 4, headerRow1: "", headerRow2: "Task Name" };
FreeRTOSItems[DisplayFields[3 /* Status */]] = { width: 3, headerRow1: "", headerRow2: "Status" };
FreeRTOSItems[DisplayFields[4 /* Priority */]] = {
  width: 1.5,
  headerRow1: "Prio",
  headerRow2: "rity",
  colType: numType
};
FreeRTOSItems[DisplayFields[5 /* StackStart */]] = {
  width: 3,
  headerRow1: "Stack",
  headerRow2: "Start",
  colType: 4 /* colTypeLink */,
  colGapBefore: 1
};
FreeRTOSItems[DisplayFields[6 /* StackTop */]] = { width: 3, headerRow1: "Stack", headerRow2: "Top" };
FreeRTOSItems[DisplayFields[7 /* StackEnd */]] = { width: 3, headerRow1: "Stack", headerRow2: "End" };
FreeRTOSItems[DisplayFields[8 /* StackSize */]] = {
  width: 2,
  headerRow1: "Stack",
  headerRow2: "Size",
  colType: numType
};
FreeRTOSItems[DisplayFields[9 /* StackUsed */]] = {
  width: 2,
  headerRow1: "Stack",
  headerRow2: "Used",
  colType: numType
};
FreeRTOSItems[DisplayFields[10 /* StackFree */]] = {
  width: 2,
  headerRow1: "Stack",
  headerRow2: "Free",
  colType: numType
};
FreeRTOSItems[DisplayFields[11 /* StackPeak */]] = {
  width: 2,
  headerRow1: "Stack",
  headerRow2: "Peak",
  colType: numType
};
FreeRTOSItems[DisplayFields[12 /* Runtime */]] = {
  width: 2,
  headerRow1: "",
  headerRow2: "Runtime",
  colType: numType
};
var DisplayFieldNames = Object.keys(FreeRTOSItems);
var RTOSFreeRTOS = class extends RTOSBase {
  constructor(session) {
    super(session, "FreeRTOS");
    this.session = session;
  }
  uxCurrentNumberOfTasks;
  uxCurrentNumberOfTasksVal = 0;
  pxReadyTasksLists;
  xDelayedTaskList1;
  xDelayedTaskList2;
  xPendingReadyList;
  pxCurrentTCB;
  xSuspendedTaskList;
  xTasksWaitingTermination;
  ulTotalRunTime;
  ulTotalRunTimeVal = 0;
  stale = true;
  curThreadAddr = 0;
  foundThreads = [];
  finalThreads = [];
  timeInfo = "";
  maxThreads = 1024;
  helpHtml;
  stackIncrements = -1;
  async tryDetect(useFrameId) {
    this.progStatus = "stopped";
    try {
      if (this.status === "none") {
        this.uxCurrentNumberOfTasks = await this.getVarIfEmpty(
          this.uxCurrentNumberOfTasks,
          useFrameId,
          "uxCurrentNumberOfTasks"
        );
        this.pxReadyTasksLists = await this.getVarIfEmpty(
          this.pxReadyTasksLists,
          useFrameId,
          "pxReadyTasksLists"
        );
        this.xDelayedTaskList1 = await this.getVarIfEmpty(
          this.xDelayedTaskList1,
          useFrameId,
          "xDelayedTaskList1"
        );
        this.xDelayedTaskList2 = await this.getVarIfEmpty(
          this.xDelayedTaskList2,
          useFrameId,
          "xDelayedTaskList2"
        );
        this.xPendingReadyList = await this.getVarIfEmpty(
          this.xPendingReadyList,
          useFrameId,
          "xPendingReadyList"
        );
        this.pxCurrentTCB = await this.getVarIfEmpty(this.pxCurrentTCB, useFrameId, "pxCurrentTCB");
        this.xSuspendedTaskList = await this.getVarIfEmpty(
          this.xSuspendedTaskList,
          useFrameId,
          "xSuspendedTaskList",
          true
        );
        this.xTasksWaitingTermination = await this.getVarIfEmpty(
          this.xTasksWaitingTermination,
          useFrameId,
          "xTasksWaitingTermination",
          true
        );
        this.ulTotalRunTime = await this.getVarIfEmpty(this.ulTotalRunTime, useFrameId, "ulTotalRunTime", true);
        this.status = "initialized";
      }
      return this;
    } catch (e) {
      if (e instanceof ShouldRetry) {
        console.error(e.message);
      } else {
        this.status = "failed";
        this.failedWhy = e;
      }
      return this;
    }
  }
  createHmlHelp(th, thInfo) {
    function strong(s) {
      return `<strong>${s}</strong>`;
    }
    if (this.helpHtml === void 0) {
      this.helpHtml = "";
      try {
        let ret = "";
        if (!thInfo["uxTCBNumber"].val) {
          ret += `Thread ID missing......: Enable macro ${strong("configUSE_TRACE_FACILITY")} in FW<br>`;
        }
        if (!th.stackInfo.stackEnd) {
          ret += `Stack End missing......: Enable macro
                    ${strong("configRECORD_STACK_HIGH_ADDRESS")} in FW<br>`;
        }
        if (thInfo["pcTaskName"].val === "[0]" || thInfo["pcTaskName"].val === "[1]") {
          ret += `Thread Name missing....: Set macro
                    ${strong("configMAX_TASK_NAME_LEN")} to something greater than 1 in FW<br>`;
        }
        if (!this.ulTotalRunTime) {
          ret += `<br>Missing Runtime stats..:<br>
                    /* To get runtime stats, modify the following macro in FreeRTOSConfig.h */<br>
                    #define ${strong("configGENERATE_RUN_TIME_STATS")}             1 /* 1: generate runtime statistics; 0: no runtime statistics */<br>
                    /* Also, add the following two macros to provide a high speed counter -- something at least 10x faster than<br>
                    ** your RTOS scheduler tick. One strategy could be to use a HW counter and sample its current value when needed<br>
                    */<br>
                    #define ${strong("portCONFIGURE_TIMER_FOR_RUN_TIME_STATS()")} /* Define this to initialize your timer/counter */<br>
                    #define ${strong("portGET_RUN_TIME_COUNTER_VALUE()")}${"&nbsp".repeat(9)}
                    /* Define this to sample the timer/counter */<br>
                    `;
        }
        if (ret) {
          ret += "<br>Note: Make sure you consider the performance/resources impact for any changes to your FW.<br>\n";
          ret = `<button class="help-button">Hints to get more out of the FreeRTOS viewer</button>
<div class="help"><p>
${ret}
</p></div>
`;
          this.helpHtml = ret;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  updateCurrentThreadAddr(frameId) {
    return new Promise((resolve, reject) => {
      this.pxCurrentTCB?.getValue(frameId).then(
        (ret) => {
          this.curThreadAddr = parseInt(ret || "");
          resolve();
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
  updateTotalRuntime(frameId) {
    return new Promise((resolve, reject) => {
      if (!this.ulTotalRunTime) {
        resolve();
        return;
      }
      this.ulTotalRunTime.getValue(frameId).then(
        (ret) => {
          this.ulTotalRunTimeVal = parseInt(ret || "");
          resolve();
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
  refresh(frameId) {
    return new Promise((resolve) => {
      if (this.progStatus !== "stopped") {
        resolve();
        return;
      }
      const timer = new HrTimer();
      this.stale = true;
      this.timeInfo = new Date().toISOString();
      this.uxCurrentNumberOfTasksVal = Number.MAX_SAFE_INTEGER;
      this.foundThreads = [];
      this.uxCurrentNumberOfTasks?.getValue(frameId).then(
        async (str) => {
          try {
            this.uxCurrentNumberOfTasksVal = str ? parseInt(str) : Number.MAX_SAFE_INTEGER;
            if (this.uxCurrentNumberOfTasksVal > 0 && this.uxCurrentNumberOfTasksVal <= this.maxThreads) {
              let promises = [];
              const ary = await this.pxReadyTasksLists?.getVarChildren(frameId);
              for (const v of ary || []) {
                promises.push(this.getThreadInfo(v.variablesReference, "READY", frameId));
              }
              promises.push(this.updateCurrentThreadAddr(frameId));
              promises.push(this.updateTotalRuntime(frameId));
              await Promise.all(promises);
              promises = [];
              promises.push(this.getThreadInfo(this.xDelayedTaskList1, "BLOCKED", frameId));
              promises.push(this.getThreadInfo(this.xDelayedTaskList2, "BLOCKED", frameId));
              promises.push(this.getThreadInfo(this.xPendingReadyList, "PENDING", frameId));
              await Promise.all(promises);
              promises = [];
              promises.push(this.getThreadInfo(this.xSuspendedTaskList, "SUSPENDED", frameId));
              promises.push(this.getThreadInfo(this.xTasksWaitingTermination, "TERMINATED", frameId));
              await Promise.all(promises);
              promises = [];
              if (this.foundThreads.length > 0) {
                const th = this.foundThreads[0];
                if (th.display["ID"].text !== "??") {
                  this.foundThreads.sort(
                    (a, b) => parseInt(a.display["ID"].text) - parseInt(b.display["ID"].text)
                  );
                } else {
                  this.foundThreads.sort(
                    (a, b) => parseInt(a.display["Address"].text) - parseInt(b.display["Address"].text)
                  );
                }
              }
              this.finalThreads = [...this.foundThreads];
            } else {
              this.finalThreads = [];
            }
            this.stale = false;
            this.timeInfo += " in " + timer.deltaMs() + " ms";
            resolve();
          } catch (e) {
            resolve();
            console.error("FreeRTOS.refresh() failed: ", e);
          }
        },
        (reason) => {
          resolve();
          console.error("FreeRTOS.refresh() failed: ", reason);
        }
      );
    });
  }
  getThreadInfo(varRef, state, frameId) {
    return new Promise((resolve, reject) => {
      if (!varRef || typeof varRef !== "number" && !varRef.varReference || this.foundThreads.length >= this.uxCurrentNumberOfTasksVal) {
        resolve();
        return;
      }
      if (this.progStatus !== "stopped") {
        reject(new Error("Busy"));
        return;
      }
      let promise;
      if (typeof varRef !== "number") {
        promise = varRef.getVarChildrenObj(frameId);
      } else {
        promise = this.getVarChildrenObj(varRef, "task-list");
      }
      promise.then(
        async (obj) => {
          const threadCount = parseInt(obj["uxNumberOfItems"]?.val);
          const listEndRef = obj["xListEnd"]?.ref;
          if (threadCount <= 0 || !listEndRef) {
            resolve();
            return;
          }
          try {
            const listEndObj = await this.getVarChildrenObj(listEndRef, "xListEnd") || {};
            let curRef = listEndObj["pxPrevious"]?.ref;
            for (let thIx = 0; thIx < threadCount; thIx++) {
              const element = await this.getVarChildrenObj(curRef, "pxPrevious") || {};
              const threadId = parseInt(element["pvOwner"]?.val);
              const thInfo = await this.getExprValChildrenObj(
                `((TCB_t*)${hexFormat(threadId)})`,
                frameId
              );
              const threadRunning = threadId === this.curThreadAddr;
              const tmpThName = await this.getExprVal("(char *)" + thInfo["pcTaskName"]?.exp, frameId) || "";
              const match = tmpThName.match(/"([^*]*)"$/);
              const thName = match ? match[1] : tmpThName;
              const stackInfo = await this.getStackInfo(thInfo, 165);
              const display = {};
              const mySetter = (x, text, value) => {
                display[DisplayFieldNames[x]] = { text, value };
              };
              mySetter(0 /* ID */, thInfo["uxTCBNumber"]?.val || "??");
              mySetter(1 /* Address */, hexFormat(threadId));
              mySetter(2 /* TaskName */, thName);
              mySetter(3 /* Status */, threadRunning ? "RUNNING" : state);
              mySetter(5 /* StackStart */, hexFormat(stackInfo.stackStart));
              mySetter(6 /* StackTop */, hexFormat(stackInfo.stackTop));
              mySetter(
                7 /* StackEnd */,
                stackInfo.stackEnd ? hexFormat(stackInfo.stackEnd) : "0x????????"
              );
              if (thInfo["uxBasePriority"]?.val) {
                mySetter(
                  4 /* Priority */,
                  `${thInfo["uxPriority"]?.val},${thInfo["uxBasePriority"]?.val}`
                );
              } else {
                mySetter(4 /* Priority */, `${thInfo["uxPriority"]?.val}`);
              }
              const func = (x) => x === void 0 ? "???" : x.toString();
              mySetter(8 /* StackSize */, func(stackInfo.stackSize));
              mySetter(9 /* StackUsed */, func(stackInfo.stackUsed));
              mySetter(10 /* StackFree */, func(stackInfo.stackFree));
              if (RTOSBase.disableStackPeaks) {
                mySetter(11 /* StackPeak */, "---");
              } else {
                mySetter(11 /* StackPeak */, func(stackInfo.stackPeak));
              }
              if (thInfo["ulRunTimeCounter"]?.val && this.ulTotalRunTimeVal) {
                const tmp = parseInt(thInfo["ulRunTimeCounter"]?.val) / this.ulTotalRunTimeVal * 100;
                mySetter(12 /* Runtime */, tmp.toFixed(2).padStart(5, "0") + "%");
              } else {
                mySetter(12 /* Runtime */, "??.??%");
              }
              const thread = {
                display,
                stackInfo,
                running: threadRunning
              };
              this.foundThreads.push(thread);
              this.createHmlHelp(thread, thInfo);
              curRef = element["pxPrevious"]?.ref;
            }
            resolve();
          } catch (e) {
            console.log("FreeRTOS read thread info error", e);
          }
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
  async getStackInfo(thInfo, waterMark) {
    const pxStack = thInfo["pxStack"]?.val;
    const pxTopOfStack = thInfo["pxTopOfStack"]?.val;
    const pxEndOfStack = thInfo["pxEndOfStack"]?.val;
    const stackInfo = {
      stackStart: parseInt(pxStack),
      stackTop: parseInt(pxTopOfStack)
    };
    const stackDelta = Math.abs(stackInfo.stackTop - stackInfo.stackStart);
    if (this.stackIncrements < 0) {
      stackInfo.stackFree = stackDelta;
    } else {
      stackInfo.stackUsed = stackDelta;
    }
    if (pxEndOfStack) {
      stackInfo.stackEnd = parseInt(pxEndOfStack);
      stackInfo.stackSize = Math.abs(stackInfo.stackStart - stackInfo.stackEnd);
      if (this.stackIncrements < 0) {
        stackInfo.stackUsed = stackInfo.stackSize - stackDelta;
      } else {
        stackInfo.stackFree = stackInfo.stackSize - stackDelta;
      }
      if (!RTOSBase.disableStackPeaks) {
        const memArg = {
          memoryReference: hexFormat(Math.min(stackInfo.stackStart, stackInfo.stackEnd)),
          count: stackInfo.stackSize
        };
        try {
          const stackData = await this.session.customRequest("readMemory", memArg);
          const buf = Buffer.from(stackData.data, "base64");
          stackInfo.bytes = new Uint8Array(buf);
          let start = this.stackIncrements < 0 ? 0 : stackInfo.bytes.length - 1;
          const end = this.stackIncrements < 0 ? stackInfo.bytes.length : -1;
          let peak = 0;
          while (start !== end) {
            if (stackInfo.bytes[start] !== waterMark) {
              break;
            }
            start -= this.stackIncrements;
            peak++;
          }
          stackInfo.stackPeak = stackInfo.stackSize - peak;
        } catch (e) {
          console.log(e);
        }
      }
    }
    return stackInfo;
  }
  lastValidHtmlContent = { html: "", css: "" };
  getHTML() {
    const htmlContent = { html: "", css: "" };
    let msg = "";
    if (this.status === "none") {
      htmlContent.html = "<p>RTOS not yet fully initialized. Will occur next time program pauses</p>\n";
      return htmlContent;
    } else if (this.stale) {
      const lastHtmlInfo = this.lastValidHtmlContent;
      if (this.uxCurrentNumberOfTasksVal === Number.MAX_SAFE_INTEGER) {
        msg = ' Could not read "uxCurrentNumberOfTasks". Perhaps program is busy or did not stop long enough';
        lastHtmlInfo.html = "";
        lastHtmlInfo.css = "";
      } else if (this.uxCurrentNumberOfTasksVal > this.maxThreads) {
        msg = ` FreeRTOS variable uxCurrentNumberOfTasks = ${this.uxCurrentNumberOfTasksVal} seems invalid`;
        lastHtmlInfo.html = "";
        lastHtmlInfo.css = "";
      } else if (lastHtmlInfo.html !== "") {
        msg = " Following info from last query may be stale.";
      }
      htmlContent.html = `<p>Unable to collect full RTOS information.${msg}</p>
` + lastHtmlInfo.html;
      htmlContent.css = lastHtmlInfo.css;
      return htmlContent;
    } else if (this.uxCurrentNumberOfTasksVal !== Number.MAX_SAFE_INTEGER && this.finalThreads.length !== this.uxCurrentNumberOfTasksVal) {
      msg += `<p>Expecting ${this.uxCurrentNumberOfTasksVal} threads, found ${this.finalThreads.length}. Thread data may be unreliable<p>
`;
    } else if (this.finalThreads.length === 0) {
      htmlContent.html = `<p>No ${this.name} threads detected, perhaps RTOS not yet initialized or tasks yet to be created!</p>
`;
      return htmlContent;
    }
    const ret = this.getHTMLCommon(DisplayFieldNames, FreeRTOSItems, this.finalThreads, this.timeInfo);
    htmlContent.html = msg + ret.html + (this.helpHtml || "");
    htmlContent.css = ret.css;
    this.lastValidHtmlContent = htmlContent;
    return this.lastValidHtmlContent;
  }
};

// src/rtos/rtos-ucosii.ts
var DisplayFields2 = /* @__PURE__ */ ((DisplayFields5) => {
  DisplayFields5[DisplayFields5["ID"] = 0] = "ID";
  DisplayFields5[DisplayFields5["Address"] = 1] = "Address";
  DisplayFields5[DisplayFields5["TaskName"] = 2] = "TaskName";
  DisplayFields5[DisplayFields5["Status"] = 3] = "Status";
  DisplayFields5[DisplayFields5["Priority"] = 4] = "Priority";
  DisplayFields5[DisplayFields5["StackPercent"] = 5] = "StackPercent";
  DisplayFields5[DisplayFields5["StackPeakPercent"] = 6] = "StackPeakPercent";
  return DisplayFields5;
})(DisplayFields2 || {});
var RTOSUCOS2Items = {};
RTOSUCOS2Items[DisplayFields2[0 /* ID */]] = {
  width: 1,
  headerRow1: "",
  headerRow2: "ID",
  colType: 2 /* colTypeNumeric */
};
RTOSUCOS2Items[DisplayFields2[1 /* Address */]] = {
  width: 2,
  headerRow1: "",
  headerRow2: "Address",
  colGapBefore: 1
};
RTOSUCOS2Items[DisplayFields2[2 /* TaskName */]] = {
  width: 4,
  headerRow1: "",
  headerRow2: "Name",
  colGapBefore: 1
};
RTOSUCOS2Items[DisplayFields2[3 /* Status */]] = {
  width: 4,
  headerRow1: "Thread",
  headerRow2: "Status",
  colType: 8 /* colTypeCollapse */
};
RTOSUCOS2Items[DisplayFields2[4 /* Priority */]] = {
  width: 1,
  headerRow1: "Prio",
  headerRow2: "rity",
  colType: 2 /* colTypeNumeric */,
  colGapAfter: 1
};
RTOSUCOS2Items[DisplayFields2[5 /* StackPercent */]] = {
  width: 4,
  headerRow1: "Stack Usage",
  headerRow2: "% (Used B / Size B)",
  colType: 1 /* colTypePercentage */
};
RTOSUCOS2Items[DisplayFields2[6 /* StackPeakPercent */]] = {
  width: 4,
  headerRow1: "Stack Peak Usage",
  headerRow2: "% (Peak B / Size B)",
  colType: 1 /* colTypePercentage */
};
var DisplayFieldNames2 = Object.keys(RTOSUCOS2Items);
var RTOSUCOS2 = class extends RTOSBase {
  constructor(session) {
    super(session, "uC/OS-II");
    this.session = session;
    if (session.configuration.rtosViewConfig) {
      if (session.configuration.rtosViewConfig.stackPattern) {
        this.stackPattern = parseInt(session.configuration.rtosViewConfig.stackPattern);
      }
      if (session.configuration.rtosViewConfig.stackGrowth) {
        this.stackIncrements = parseInt(session.configuration.rtosViewConfig.stackGrowth);
      }
    }
  }
  OSRunning;
  OSRunningVal = 0;
  stackEntrySize = 0;
  OSTaskCtr;
  OSTaskCtrVal = 0;
  OSTCBList;
  OSTCBCur;
  OSTCBCurVal = 0;
  OSFlagTbl;
  stale = true;
  foundThreads = [];
  finalThreads = [];
  timeInfo = "";
  maxThreads = 1024;
  stackPattern = 0;
  stackIncrements = -1;
  helpHtml;
  async tryDetect(useFrameId) {
    this.progStatus = "stopped";
    try {
      if (this.status === "none") {
        this.OSRunning = await this.getVarIfEmpty(this.OSRunning, useFrameId, "OSRunning", false);
        this.OSTaskCtr = await this.getVarIfEmpty(this.OSTaskCtr, useFrameId, "OSTaskCtr", false);
        this.OSTCBList = await this.getVarIfEmpty(this.OSTCBList, useFrameId, "OSTCBList", false);
        this.OSTCBCur = await this.getVarIfEmpty(this.OSTCBCur, useFrameId, "OSTCBCur", false);
        this.OSFlagTbl = await this.getVarIfEmpty(this.OSFlagTbl, useFrameId, "OSFlagTbl", true);
        this.status = "initialized";
      }
      return this;
    } catch (e) {
      if (e instanceof ShouldRetry) {
        console.error(e.message);
      } else {
        this.status = "failed";
        this.failedWhy = e;
      }
      return this;
    }
  }
  createHmlHelp(th, thInfo) {
    function strong(text) {
      return `<strong>${text}</strong>`;
    }
    if (this.helpHtml === void 0) {
      this.helpHtml = "";
      try {
        let ret = "";
        if (!thInfo["OSTCBTaskName"]?.val) {
          ret += `Thread name missing: Enable macro ${strong("OS_TASK_NAME_EN")} and use
                    ${strong("OSTaskNameSet")} in FW<br><br>`;
        }
        if (!thInfo["OSTCBId"]?.val || !th.stackInfo.stackSize) {
          ret += `Thread ID & Stack Size & Peak missing: Enable macro ${strong("OS_TASK_CREATE_EXT_EN")} anduse ${strong("OSTaskCreateExt")} in FW<br><br>`;
        }
        if (ret) {
          ret += "Note: Make sure you consider the performance/resources impact for any changes to your FW.<br>\n";
          this.helpHtml = `<button class="help-button">Hints to get more out of the uC/OS-II RTOS View</button>
<div class="help"><p>
${ret}
</p></div>
`;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  refresh(frameId) {
    return new Promise((resolve) => {
      if (this.progStatus !== "stopped") {
        resolve();
        return;
      }
      const timer = new HrTimer();
      this.stale = true;
      this.timeInfo = new Date().toISOString();
      this.OSTaskCtrVal = Number.MAX_SAFE_INTEGER;
      this.OSRunningVal = Number.MAX_SAFE_INTEGER;
      this.foundThreads = [];
      this.OSRunning?.getValue(frameId).then(
        async (str) => {
          try {
            this.OSRunningVal = str ? parseInt(str) : 0;
            if (0 !== this.OSRunningVal) {
              const count = await this.OSTaskCtr?.getValue(frameId);
              this.OSTaskCtrVal = count ? parseInt(count) : Number.MAX_SAFE_INTEGER;
              if (this.OSTaskCtrVal > 0 && this.OSTaskCtrVal <= this.maxThreads) {
                const OSTCBListVal = await this.OSTCBList?.getValue(frameId);
                if (OSTCBListVal && 0 !== parseInt(OSTCBListVal)) {
                  if (this.stackEntrySize === 0) {
                    const stackEntrySizeRef = await this.getExprVal("sizeof(OS_STK)", frameId);
                    this.stackEntrySize = parseInt(stackEntrySizeRef || "");
                  }
                  const osFlagTblVal = this.OSFlagTbl ? await this.OSFlagTbl.getVarChildren(frameId) : [];
                  const flagPendMap = await this.getPendingFlagGroupsForTasks(osFlagTblVal, frameId);
                  const tmpOSTCBCurVal = await this.OSTCBCur?.getValue(frameId);
                  this.OSTCBCurVal = tmpOSTCBCurVal ? parseInt(tmpOSTCBCurVal) : Number.MAX_SAFE_INTEGER;
                  await this.getThreadInfo(this.OSTCBList, flagPendMap, frameId);
                  if (this.foundThreads[0].display["ID"].text !== "???") {
                    this.foundThreads.sort(
                      (a, b) => parseInt(a.display["ID"].text) - parseInt(b.display["ID"].text)
                    );
                  } else {
                    this.foundThreads.sort(
                      (a, b) => parseInt(a.display["Address"].text) - parseInt(b.display["Address"].text)
                    );
                  }
                }
                this.finalThreads = [...this.foundThreads];
              } else {
                this.finalThreads = [];
              }
            } else {
              this.finalThreads = [];
            }
            this.stale = false;
            this.timeInfo += " in " + timer.deltaMs() + " ms";
            resolve();
          } catch (e) {
            resolve();
            console.error("RTOSUCOS2.refresh() failed: ", e);
          }
        },
        (reason) => {
          resolve();
          console.error("RTOSUCOS2.refresh() failed: ", reason);
        }
      );
    });
  }
  getThreadInfo(tcbListEntry, flagPendMap, frameId) {
    return new Promise((resolve, reject) => {
      if (!tcbListEntry || !tcbListEntry.varReference || this.foundThreads.length >= this.OSTaskCtrVal) {
        resolve();
        return;
      }
      if (this.progStatus !== "stopped") {
        reject(new Error("Busy"));
        return;
      }
      tcbListEntry.getVarChildrenObj(frameId).then(
        async (obj) => {
          try {
            let curTaskObj = obj;
            let thAddress = parseInt(tcbListEntry?.value || "");
            let threadCount = 1;
            do {
              const threadId = curTaskObj["OSTCBId"]?.val;
              let thName = "???";
              if (curTaskObj["OSTCBTaskName"]) {
                const tmpThName = await this.getExprVal("(char *)" + curTaskObj["OSTCBTaskName"]?.exp, frameId) || "";
                const matchName = tmpThName.match(/"([^*]*)"$/);
                thName = matchName ? matchName[1] : tmpThName;
              }
              const threadRunning = thAddress === this.OSTCBCurVal;
              const thStateObject = await this.analyzeTaskState(
                thAddress,
                curTaskObj,
                flagPendMap,
                frameId
              );
              const thState = thStateObject.describe();
              const stackInfo = await this.getStackInfo(curTaskObj, this.stackPattern, frameId);
              const display = {};
              const mySetter = (x, text, value) => {
                display[DisplayFieldNames2[x]] = { text, value };
              };
              mySetter(0 /* ID */, threadId ? parseInt(threadId).toString() : "???");
              mySetter(1 /* Address */, hexFormat(thAddress));
              mySetter(2 /* TaskName */, thName);
              mySetter(
                3 /* Status */,
                threadRunning ? "RUNNING" : thState,
                thStateObject.fullData()
              );
              mySetter(4 /* Priority */, parseInt(curTaskObj["OSTCBPrio"]?.val).toString());
              if (stackInfo.stackUsed !== void 0 && stackInfo.stackSize !== void 0) {
                const stackPercentVal = Math.round(stackInfo.stackUsed / stackInfo.stackSize * 100);
                const stackPercentText = `${stackPercentVal} % (${stackInfo.stackUsed} / ${stackInfo.stackSize})`;
                mySetter(5 /* StackPercent */, stackPercentText, stackPercentVal);
              } else {
                mySetter(5 /* StackPercent */, "?? %");
              }
              if (stackInfo.stackPeak !== void 0 && stackInfo.stackSize !== void 0) {
                const stackPeakPercentVal = Math.round(stackInfo.stackPeak / stackInfo.stackSize * 100);
                const stackPeakPercentText = `${stackPeakPercentVal.toString().padStart(3)} % (${stackInfo.stackPeak} / ${stackInfo.stackSize})`;
                mySetter(6 /* StackPeakPercent */, stackPeakPercentText, stackPeakPercentVal);
              } else if (RTOSBase.disableStackPeaks) {
                mySetter(6 /* StackPeakPercent */, "----");
              } else {
                mySetter(6 /* StackPeakPercent */, "?? %");
              }
              const thread = {
                display,
                stackInfo,
                running: threadRunning
              };
              this.foundThreads.push(thread);
              this.createHmlHelp(thread, curTaskObj);
              thAddress = parseInt(curTaskObj["OSTCBNext"]?.val);
              if (0 !== thAddress) {
                const nextThreadObj = await this.getVarChildrenObj(
                  curTaskObj["OSTCBNext"]?.ref,
                  "OSTCBNext"
                );
                curTaskObj = nextThreadObj || {};
                threadCount++;
              }
              if (threadCount > this.OSTaskCtrVal) {
                console.log(
                  "RTOSUCOS2.getThreadInfo() detected more threads in OSTCBCur linked list that OSTaskCtr states"
                );
                break;
              }
            } while (0 !== thAddress);
            resolve();
          } catch (e) {
            console.log("RTOSUCOS2.getThreadInfo() error", e);
          }
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
  async getEventInfo(address, eventObject, _frameId) {
    const eventInfo = { address, eventType: parseInt(eventObject["OSEventType"]?.val) };
    if (eventObject["OSEventName"]?.val) {
      const value = eventObject["OSEventName"]?.val;
      const matchName = value.match(/"(.*)"$/);
      eventInfo.name = matchName ? matchName[1] : value;
    }
    return eventInfo;
  }
  async readEventArray(baseAddress, frameId) {
    const result = [];
    for (let eventIndex = 0; ; eventIndex++) {
      const eventAddress = parseInt(
        await this.getExprVal(`((OS_EVENT**)(${baseAddress}))[${eventIndex}]`, frameId) || ""
      );
      if (eventAddress === 0) {
        break;
      } else {
        const eventObject = await this.getExprValChildrenObj(`(OS_EVENT*)(${eventAddress})`, frameId);
        result.push(await this.getEventInfo(eventAddress, eventObject, frameId));
      }
    }
    return result;
  }
  async analyzeTaskState(threadAddr, curTaskObj, flagPendMap, frameId) {
    const state = parseInt(curTaskObj["OSTCBStat"]?.val);
    switch (state) {
      case OsTaskState.READY:
        return new TaskReady();
      case OsTaskState.SUSPENDED:
        return new TaskSuspended();
      default: {
        const resultState = new TaskPending();
        PendingTaskStates.forEach((candidateState) => {
          if ((state & candidateState) === candidateState) {
            resultState.addEventType(getEventTypeForTaskState(candidateState));
          }
        });
        if (curTaskObj["OSTCBEventPtr"]?.val) {
          const eventAddress = parseInt(curTaskObj["OSTCBEventPtr"]?.val);
          if (eventAddress !== 0) {
            const event = await this.getVarChildrenObj(curTaskObj["OSTCBEventPtr"]?.ref, "OSTCBEventPtr");
            if (event) {
              const eventInfo = await this.getEventInfo(eventAddress, event, frameId);
              resultState.addEvent(eventInfo);
            }
          }
        }
        if (curTaskObj["OSTCBEventMultiPtr"]?.val) {
          const eventMultiBaseAddress = parseInt(curTaskObj["OSTCBEventMultiPtr"]?.val);
          if (eventMultiBaseAddress !== 0) {
            (await this.readEventArray(eventMultiBaseAddress, frameId)).forEach(
              (eventInfo) => resultState.addEvent(eventInfo)
            );
          }
        }
        if (flagPendMap.has(threadAddr)) {
          flagPendMap.get(threadAddr)?.forEach(
            (flagGroup) => resultState.addEvent({
              name: flagGroup.name,
              eventType: OsEventType.Flag,
              address: flagGroup.address
            })
          );
        }
        return resultState;
      }
    }
  }
  async getPendingFlagGroupsForTasks(osFlagTable, frameId) {
    const result = /* @__PURE__ */ new Map();
    for (const flagGroupPtr of osFlagTable) {
      if (flagGroupPtr.variablesReference > 0 && flagGroupPtr.evaluateName) {
        const osFlagGrp = await this.getVarChildrenObj(flagGroupPtr.variablesReference, flagGroupPtr.name);
        if (osFlagGrp && parseInt(osFlagGrp["OSFlagType"]?.val) === OsEventType.Flag) {
          const groupAddr = parseInt(
            await this.getExprVal(`&(${flagGroupPtr.evaluateName})`, frameId) || ""
          );
          const flagGroup = { address: groupAddr };
          const reprValue = osFlagGrp["OSFlagName"]?.val;
          if (reprValue) {
            const matchName = reprValue.match(/"(.*)"$/);
            flagGroup.name = matchName ? matchName[1] : reprValue;
          }
          let flagNode = await this.getExprValChildrenObj(
            `(OS_FLAG_NODE *)(${osFlagGrp["OSFlagWaitList"]?.exp})`,
            frameId
          );
          while (flagNode) {
            const waitingTcbAddr = parseInt(flagNode["OSFlagNodeTCB"]?.val || "");
            if (!waitingTcbAddr || waitingTcbAddr === 0) {
              break;
            }
            if (!result.has(waitingTcbAddr)) {
              result.set(waitingTcbAddr, []);
            }
            result.get(waitingTcbAddr)?.push(flagGroup);
            const nextFlagNodeAddr = parseInt(flagNode["OSFlagNodeNext"]?.val);
            if (nextFlagNodeAddr === 0) {
              break;
            } else {
              flagNode = await this.getExprValChildrenObj(
                `(OS_FLAG_NODE *) ${nextFlagNodeAddr}`,
                frameId
              );
            }
          }
        }
      }
    }
    return result;
  }
  async getStackInfo(thInfo, stackPattern, _frameId) {
    const TopOfStack = thInfo["OSTCBStkPtr"]?.val;
    const EndOfStack = parseInt(thInfo["OSTCBStkBottom"]?.val) || 0;
    const StackSize = parseInt(thInfo["OSTCBStkSize"]?.val) || 0;
    let Stack = 0;
    if (EndOfStack !== 0 && StackSize !== 0) {
      if (this.stackIncrements < 0) {
        Stack = EndOfStack + StackSize * this.stackEntrySize;
      } else {
        Stack = EndOfStack - StackSize * this.stackEntrySize;
      }
    } else {
      Stack = parseInt(TopOfStack);
    }
    const stackInfo = {
      stackStart: Stack,
      stackTop: parseInt(TopOfStack)
    };
    if (EndOfStack !== 0 && StackSize !== 0) {
      stackInfo.stackEnd = EndOfStack;
      stackInfo.stackSize = StackSize * this.stackEntrySize;
      if (this.stackIncrements < 0) {
        const stackDelta = stackInfo.stackStart - stackInfo.stackTop;
        stackInfo.stackFree = stackInfo.stackSize - stackDelta;
        stackInfo.stackUsed = stackDelta;
      } else {
        const stackDelta = stackInfo.stackTop - stackInfo.stackStart;
        stackInfo.stackFree = stackDelta;
        stackInfo.stackUsed = stackInfo.stackSize - stackDelta;
      }
      if (!RTOSBase.disableStackPeaks) {
        const memArg = {
          memoryReference: hexFormat(Math.min(stackInfo.stackTop, stackInfo.stackEnd)),
          count: stackInfo.stackFree
        };
        try {
          const stackData = await this.session.customRequest("readMemory", memArg);
          const buf = Buffer.from(stackData.data, "base64");
          stackInfo.bytes = new Uint8Array(buf);
          let start = this.stackIncrements < 0 ? 0 : stackInfo.bytes.length - 1;
          const end = this.stackIncrements < 0 ? stackInfo.bytes.length : -1;
          let peak = 0;
          while (start !== end) {
            if (stackInfo.bytes[start] !== stackPattern) {
              break;
            }
            start -= this.stackIncrements;
            peak++;
          }
          stackInfo.stackPeak = stackInfo.stackSize - peak;
        } catch (e) {
          console.log(e);
        }
      }
    }
    return stackInfo;
  }
  lastValidHtmlContent = { html: "", css: "" };
  getHTML() {
    const htmlContent = { html: "", css: "" };
    let msg = "";
    if (this.status === "none") {
      htmlContent.html = "<p>RTOS not yet fully initialized. Will occur next time program pauses</p>\n";
      return htmlContent;
    } else if (this.stale) {
      const lastHtmlInfo = this.lastValidHtmlContent;
      if (this.OSTaskCtrVal === Number.MAX_SAFE_INTEGER) {
        msg = ' Could not read "OSTaskCtr". Perhaps program is busy or did not stop long enough';
        lastHtmlInfo.html = "";
        lastHtmlInfo.css = "";
      } else if (this.OSTaskCtrVal > this.maxThreads) {
        msg = ` uC/OS-II variable OSTaskCtr = ${this.OSTaskCtrVal} seems invalid`;
        lastHtmlInfo.html = "";
        lastHtmlInfo.css = "";
      } else if (lastHtmlInfo.html !== "") {
        msg = " Following info from last query may be stale.";
      }
      htmlContent.html = `<p>Unable to collect full RTOS information.${msg}</p>
` + lastHtmlInfo.html;
      htmlContent.css = lastHtmlInfo.css;
      return htmlContent;
    } else if (this.OSTaskCtrVal !== Number.MAX_SAFE_INTEGER && this.finalThreads.length !== this.OSTaskCtrVal) {
      msg += `<p>Expecting ${this.OSTaskCtrVal} threads, found ${this.finalThreads.length}. Thread data may be unreliable<p>
`;
    } else if (this.finalThreads.length === 0) {
      htmlContent.html = `<p>No ${this.name} threads detected, perhaps RTOS not yet initialized or tasks yet to be created!</p>
`;
      return htmlContent;
    }
    const ret = this.getHTMLCommon(DisplayFieldNames2, RTOSUCOS2Items, this.finalThreads, this.timeInfo);
    htmlContent.html = msg + ret.html + (this.helpHtml || "");
    htmlContent.css = ret.css;
    this.lastValidHtmlContent = htmlContent;
    return this.lastValidHtmlContent;
  }
};
var OsTaskState = /* @__PURE__ */ ((OsTaskState3) => {
  OsTaskState3[OsTaskState3["READY"] = 0] = "READY";
  OsTaskState3[OsTaskState3["SUSPENDED"] = 8] = "SUSPENDED";
  OsTaskState3[OsTaskState3["PEND_SEMAPHORE"] = 1] = "PEND_SEMAPHORE";
  OsTaskState3[OsTaskState3["PEND_MAILBOX"] = 2] = "PEND_MAILBOX";
  OsTaskState3[OsTaskState3["PEND_QUEUE"] = 4] = "PEND_QUEUE";
  OsTaskState3[OsTaskState3["PEND_MUTEX"] = 16] = "PEND_MUTEX";
  OsTaskState3[OsTaskState3["PEND_FLAGGROUP"] = 32] = "PEND_FLAGGROUP";
  return OsTaskState3;
})(OsTaskState || {});
var PendingTaskStates = [
  1 /* PEND_SEMAPHORE */,
  2 /* PEND_MAILBOX */,
  4 /* PEND_QUEUE */,
  16 /* PEND_MUTEX */,
  32 /* PEND_FLAGGROUP */
];
var OsEventType = /* @__PURE__ */ ((OsEventType3) => {
  OsEventType3[OsEventType3["Mailbox"] = 1] = "Mailbox";
  OsEventType3[OsEventType3["Queue"] = 2] = "Queue";
  OsEventType3[OsEventType3["Semaphore"] = 3] = "Semaphore";
  OsEventType3[OsEventType3["Mutex"] = 4] = "Mutex";
  OsEventType3[OsEventType3["Flag"] = 5] = "Flag";
  return OsEventType3;
})(OsEventType || {});
function getEventTypeForTaskState(state) {
  switch (state) {
    case 1 /* PEND_SEMAPHORE */:
      return 3 /* Semaphore */;
    case 2 /* PEND_MAILBOX */:
      return 1 /* Mailbox */;
    case 4 /* PEND_QUEUE */:
      return 2 /* Queue */;
    case 16 /* PEND_MUTEX */:
      return 4 /* Mutex */;
    case 32 /* PEND_FLAGGROUP */:
      return 5 /* Flag */;
    default:
      return 5 /* Flag */;
  }
}
var TaskState = class {
};
var TaskReady = class extends TaskState {
  describe() {
    return "READY";
  }
  fullData() {
    return null;
  }
};
var TaskSuspended = class extends TaskState {
  describe() {
    return "SUSPENDED";
  }
  fullData() {
    return null;
  }
};
var TaskPending = class extends TaskState {
  pendingInfo;
  constructor() {
    super();
    this.pendingInfo = /* @__PURE__ */ new Map();
  }
  addEvent(event) {
    this.addEventType(event.eventType);
    this.pendingInfo.get(event.eventType)?.push(event);
  }
  addEventType(eventType) {
    if (!this.pendingInfo.has(eventType)) {
      this.pendingInfo.set(eventType, []);
    }
  }
  describe() {
    const eventCount = [...this.pendingInfo.values()].reduce((acc, events) => acc + events.length, 0);
    if (eventCount <= 1) {
      let event;
      for (const events of this.pendingInfo.values()) {
        if (events.length > 0) {
          event = events[0];
        }
      }
      if (event) {
        const eventTypeStr = OsEventType[event.eventType] ? OsEventType[event.eventType] : "Unknown";
        return `PEND ${eventTypeStr}: ${describeEvent(event)}`;
      } else {
        return "PEND Unknown";
      }
    } else {
      return "PEND MULTI";
    }
  }
  fullData() {
    const result = {};
    const eventTypes = [...this.pendingInfo.keys()];
    eventTypes.sort();
    for (const eventType of eventTypes) {
      result[OsEventType[eventType]] = [];
      for (const event of this.pendingInfo.get(eventType) || []) {
        result[OsEventType[eventType]].push(describeEvent(event));
      }
    }
    return result;
  }
};
function describeEvent(event) {
  if (event.name && event.name !== "?") {
    return event.name;
  } else {
    return `0x${event.address.toString(16)}`;
  }
}

// src/rtos/rtos-embos.ts
var RTOSEMBOS_OS_TIME_OVERFLOW = 2147483647;
var DisplayFields3 = /* @__PURE__ */ ((DisplayFields5) => {
  DisplayFields5[DisplayFields5["ID_Address"] = 0] = "ID_Address";
  DisplayFields5[DisplayFields5["TaskName"] = 1] = "TaskName";
  DisplayFields5[DisplayFields5["Status"] = 2] = "Status";
  DisplayFields5[DisplayFields5["Priority"] = 3] = "Priority";
  DisplayFields5[DisplayFields5["StackPercent"] = 4] = "StackPercent";
  DisplayFields5[DisplayFields5["StackPeakPercent"] = 5] = "StackPeakPercent";
  return DisplayFields5;
})(DisplayFields3 || {});
var RTOSEMBOSItems = {};
RTOSEMBOSItems[DisplayFields3[0 /* ID_Address */]] = { width: 2, headerRow1: "", headerRow2: "ID / Address" };
RTOSEMBOSItems[DisplayFields3[1 /* TaskName */]] = {
  width: 3,
  headerRow1: "",
  headerRow2: "Name",
  colGapBefore: 1
};
RTOSEMBOSItems[DisplayFields3[2 /* Status */]] = {
  width: 5,
  headerRow1: "Thread",
  headerRow2: "Status",
  colType: 8 /* colTypeCollapse */
};
RTOSEMBOSItems[DisplayFields3[3 /* Priority */]] = {
  width: 2,
  headerRow1: "Priority",
  headerRow2: "cur,base",
  colType: 2 /* colTypeNumeric */,
  colGapAfter: 1
};
RTOSEMBOSItems[DisplayFields3[4 /* StackPercent */]] = {
  width: 4,
  headerRow1: "Stack Usage",
  headerRow2: "% (Used B / Size B)",
  colType: 1 /* colTypePercentage */
};
RTOSEMBOSItems[DisplayFields3[5 /* StackPeakPercent */]] = {
  width: 4,
  headerRow1: "Stack Peak Usage",
  headerRow2: "% (Peak B / Size B)",
  colType: 1 /* colTypePercentage */
};
var DisplayFieldNames3 = Object.keys(RTOSEMBOSItems);
var RTOSEmbOS = class extends RTOSBase {
  constructor(session) {
    super(session, "embOS");
    this.session = session;
    if (session.configuration.rtosViewConfig) {
      if (session.configuration.rtosViewConfig.stackPattern) {
        this.stackPattern = parseInt(session.configuration.rtosViewConfig.stackPattern);
      }
      if (session.configuration.rtosViewConfig.stackGrowth) {
        this.stackIncrements = parseInt(session.configuration.rtosViewConfig.stackGrowth);
      }
    }
  }
  OSGlobal;
  OSGlobalVal;
  OSGlobalpTask;
  OSGlobalpObjNameRoot;
  pCurrentTaskVal = 0;
  taskCount = 0;
  stale = true;
  foundThreads = [];
  finalThreads = [];
  timeInfo = "";
  maxThreads = 1024;
  stackPattern = 205;
  stackIncrements = -1;
  helpHtml;
  async tryDetect(useFrameId) {
    this.progStatus = "stopped";
    try {
      if (this.status === "none") {
        this.OSGlobal = await this.getVarIfEmpty(this.OSGlobal, useFrameId, "OS_Global", false);
        this.OSGlobalpTask = await this.getVarIfEmpty(this.OSGlobalpTask, useFrameId, "OS_Global.pTask", false);
        this.OSGlobalpObjNameRoot = await this.getVarIfEmpty(
          this.OSGlobalpObjNameRoot,
          useFrameId,
          "OS_Global.pObjNameRoot",
          true
        );
        this.status = "initialized";
      }
      return this;
    } catch (e) {
      if (e instanceof ShouldRetry) {
        console.error(e.message);
      } else {
        this.status = "failed";
        this.failedWhy = e;
      }
      return this;
    }
  }
  createHmlHelp(th, thInfo) {
    function strong(text) {
      return `<strong>${text}</strong>`;
    }
    if (this.helpHtml === void 0) {
      this.helpHtml = "";
      try {
        let ret = "";
        if (!thInfo["sName"]?.val) {
          ret += `Thread name missing: Enable
                        ${strong("OS_SUPPORT_TRACKNAME")} or use library mode that enables it and
                    use ${strong("sName")} parameter on task creation in FW<br><br>`;
        }
        if (!th.stackInfo.stackSize) {
          ret += `Stack Size & Peak missing: Enable
                    ${strong("OS_SUPPORT_STACKCHECK")} or use library mode that enables it<br><br>`;
        }
        if (ret) {
          ret += "Note: Make sure you consider the performance/resources impact for any changes to your FW.<br>\n";
          this.helpHtml = `<button class="help-button">Hints to get more out of the embOS RTOS View</button>
<div class="help"><p>
${ret}
</p></div>
`;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  refresh(frameId) {
    return new Promise((resolve) => {
      if (this.progStatus !== "stopped") {
        resolve();
        return;
      }
      const timer = new HrTimer();
      this.stale = true;
      this.timeInfo = new Date().toISOString();
      this.taskCount = Number.MAX_SAFE_INTEGER;
      this.foundThreads = [];
      this.OSGlobal?.getVarChildrenObj(frameId).then(
        async (varObj) => {
          try {
            this.OSGlobalVal = varObj;
            let isRunning = "0";
            if (Object.hasOwn(this.OSGlobalVal, "IsRunning")) {
              isRunning = this.OSGlobalVal["IsRunning"]?.val;
            } else {
              isRunning = "1";
            }
            if (void 0 !== isRunning && !isNaN(isRunning) && 0 !== parseInt(isRunning)) {
              const taskList = this.OSGlobalVal["pTask"]?.val;
              if (void 0 !== taskList && 0 !== parseInt(taskList)) {
                if (this.OSGlobalVal["pCurrentTask"]?.val) {
                  this.pCurrentTaskVal = parseInt(this.OSGlobalVal["pCurrentTask"]?.val);
                } else {
                  this.pCurrentTaskVal = Number.MAX_SAFE_INTEGER;
                }
                const objectNameEntries = await this.getObjectNameEntries(frameId);
                await this.getThreadInfo(this.OSGlobalpTask, objectNameEntries, frameId);
                this.foundThreads.sort(
                  (a, b) => parseInt(a.display[DisplayFieldNames3[0 /* ID_Address */]].text) - parseInt(b.display[DisplayFieldNames3[0 /* ID_Address */]].text)
                );
                this.finalThreads = [...this.foundThreads];
              } else {
                this.finalThreads = [];
              }
            } else {
              this.finalThreads = [];
            }
            this.stale = false;
            this.timeInfo += " in " + timer.deltaMs() + " ms";
            resolve();
          } catch (e) {
            resolve();
            console.error("RTOSEMBOS.refresh() failed: ", e);
          }
        },
        (reason) => {
          resolve();
          console.error("RTOSEMBOS.refresh() failed: ", reason);
        }
      );
    });
  }
  getThreadInfo(taskListEntry, objectNameEntries, frameId) {
    return new Promise((resolve, reject) => {
      if (!taskListEntry || !taskListEntry.varReference) {
        resolve();
        return;
      }
      if (this.progStatus !== "stopped") {
        reject(new Error("Busy"));
        return;
      }
      taskListEntry.getVarChildrenObj(frameId).then(
        async (obj) => {
          try {
            let curTaskObj = obj;
            let thAddress = parseInt(taskListEntry.value || "");
            let threadCount = 1;
            const CurOSTime = parseInt(this.OSGlobalVal["Time"]?.val) || 0;
            do {
              let thName = "???";
              if (Object.hasOwn(curTaskObj, "sName")) {
                const matchName = curTaskObj["sName"]?.val.match(/"([^*]*)"$/);
                thName = matchName ? matchName[1] : curTaskObj["sName"]?.val;
              } else if (Object.hasOwn(curTaskObj, "Name")) {
                const matchName = curTaskObj["Name"]?.val.match(/"([^*]*)"$/);
                thName = matchName ? matchName[1] : curTaskObj["Name"]?.val;
              }
              const threadRunning = thAddress === this.pCurrentTaskVal;
              const thStateObject = await this.analyzeTaskState(curTaskObj, objectNameEntries, CurOSTime);
              const stackInfo = await this.getStackInfo(curTaskObj, this.stackPattern);
              const display = {};
              const mySetter = (x, text, value) => {
                display[DisplayFieldNames3[x]] = { text, value };
              };
              mySetter(0 /* ID_Address */, hexFormat(thAddress));
              mySetter(1 /* TaskName */, thName);
              mySetter(
                2 /* Status */,
                threadRunning ? "RUNNING" : thStateObject.describe(),
                thStateObject.fullData()
              );
              const myHexNumStrCon = (hexNumberString) => {
                return parseInt(hexNumberString).toString();
              };
              const prioString = `${myHexNumStrCon(curTaskObj["Priority"]?.val)},${myHexNumStrCon(
                curTaskObj["BasePrio"]?.val
              )}`;
              mySetter(3 /* Priority */, prioString);
              if (stackInfo.stackUsed !== void 0 && stackInfo.stackSize !== void 0) {
                const stackPercentVal = Math.round(stackInfo.stackUsed / stackInfo.stackSize * 100);
                const stackPercentText = `${stackPercentVal} % (${stackInfo.stackUsed} / ${stackInfo.stackSize})`;
                mySetter(4 /* StackPercent */, stackPercentText, stackPercentVal);
              } else {
                mySetter(4 /* StackPercent */, "?? %");
              }
              if (stackInfo.stackPeak !== void 0 && stackInfo.stackSize !== void 0) {
                const stackPeakPercentVal = Math.round(
                  stackInfo.stackPeak / stackInfo.stackSize * 100
                );
                const stackPeakPercentText = `${stackPeakPercentVal.toString().padStart(3)} % (${stackInfo.stackPeak} / ${stackInfo.stackSize})`;
                mySetter(5 /* StackPeakPercent */, stackPeakPercentText, stackPeakPercentVal);
              } else if (RTOSBase.disableStackPeaks) {
                mySetter(5 /* StackPeakPercent */, "----");
              } else {
                mySetter(5 /* StackPeakPercent */, "?? %");
              }
              const thread = {
                display,
                stackInfo,
                running: threadRunning
              };
              this.foundThreads.push(thread);
              this.createHmlHelp(thread, curTaskObj);
              thAddress = parseInt(curTaskObj["pNext"]?.val);
              if (0 !== thAddress) {
                const nextThreadObj = await this.getVarChildrenObj(curTaskObj["pNext"]?.ref, "pNext");
                curTaskObj = nextThreadObj || {};
                threadCount++;
              }
              if (threadCount > this.maxThreads) {
                console.error(`Exceeded maximum number of allowed threads (${this.maxThreads})`);
                break;
              }
            } while (0 !== thAddress);
            this.taskCount = threadCount;
            resolve();
          } catch (e) {
            console.log("RTOSEMBOS.getThreadInfo() error", e);
          }
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
  async analyzeTaskState(curTaskObj, objectNameEntries, CurOSTime) {
    const state = parseInt(curTaskObj["Stat"]?.val);
    const suspendCount = state & OS_TASK_STATE_SUSPEND_MASK;
    if (suspendCount !== 0) {
      return new TaskSuspended2(suspendCount);
    }
    let pendTimeout = Number.MAX_SAFE_INTEGER;
    let TimeoutActive = false;
    if (state & OS_TASK_STATE_TIMEOUT_ACTIVE) {
      pendTimeout = parseInt(curTaskObj["Timeout"]?.val);
      pendTimeout = getRemainingTicksFromTimeout(CurOSTime, pendTimeout);
      TimeoutActive = true;
    }
    const maskedState = state & OS_TASK_STATE_MASK;
    switch (maskedState) {
      case OsTaskPendingState.READY:
        if (TimeoutActive) {
          return new TaskDelayed(pendTimeout);
        } else {
          return new TaskReady2();
        }
      case OsTaskPendingState.TASK_EVENT:
        const resultState = new TaskPending2();
        resultState.addEventType(maskedState);
        if (curTaskObj["EventMask"]?.val) {
          const eventMask = parseInt(curTaskObj["EventMask"]?.val);
          const event = parseInt(curTaskObj["Events"]?.val);
          const eventInfo = {
            address: eventMask,
            eventType: state,
            name: `mask ${eventMask} - set ${event}`
          };
          if (TimeoutActive) {
            eventInfo.timeOut = pendTimeout;
          }
          resultState.addEvent(eventInfo);
        }
        return resultState;
      default: {
        const resultState2 = new TaskPending2();
        resultState2.addEventType(maskedState);
        if (curTaskObj["pWaitList"]?.val) {
          const waitListEntryAddress = parseInt(curTaskObj["pWaitList"]?.val);
          if (waitListEntryAddress !== 0) {
            const waitListEntry = await this.getVarChildrenObj(curTaskObj["pWaitList"]?.ref, "pWaitList");
            const waitObject = parseInt(waitListEntry ? waitListEntry["pWaitObj"]?.val : "");
            const eventInfo = { address: waitObject, eventType: state };
            if (objectNameEntries.has(waitObject)) {
              eventInfo.name = objectNameEntries.get(waitObject);
            }
            if (TimeoutActive) {
              eventInfo.timeOut = pendTimeout;
            }
            resultState2.addEvent(eventInfo);
          }
        }
        return resultState2;
      }
    }
  }
  async getStackInfo(thInfo, stackPattern) {
    const TopOfStack = thInfo["pStack"]?.val;
    const StackSize = thInfo["StackSize"]?.val;
    let EndOfStack;
    if (Object.hasOwn(thInfo, "pStackBase")) {
      EndOfStack = thInfo["pStackBase"]?.val;
    } else {
      EndOfStack = thInfo["pStackBot"]?.val;
    }
    let Stack = 0;
    if (EndOfStack && StackSize) {
      if (this.stackIncrements < 0) {
        Stack = parseInt(EndOfStack) + parseInt(StackSize);
      } else {
        Stack = parseInt(EndOfStack) - parseInt(StackSize);
      }
    } else {
      Stack = parseInt(TopOfStack);
    }
    const stackInfo = {
      stackStart: Stack,
      stackTop: parseInt(TopOfStack)
    };
    if (EndOfStack && StackSize) {
      stackInfo.stackEnd = parseInt(EndOfStack);
      stackInfo.stackSize = parseInt(StackSize);
      if (this.stackIncrements < 0) {
        const stackDelta = stackInfo.stackStart - stackInfo.stackTop;
        stackInfo.stackFree = stackInfo.stackSize - stackDelta;
        stackInfo.stackUsed = stackDelta;
      } else {
        const stackDelta = stackInfo.stackTop - stackInfo.stackStart;
        stackInfo.stackFree = stackDelta;
        stackInfo.stackUsed = stackInfo.stackSize - stackDelta;
      }
      if (!RTOSBase.disableStackPeaks) {
        const memArg = {
          memoryReference: hexFormat(Math.min(stackInfo.stackTop, stackInfo.stackEnd)),
          count: stackInfo.stackFree
        };
        try {
          const stackData = await this.session.customRequest("readMemory", memArg);
          const buf = Buffer.from(stackData.data, "base64");
          stackInfo.bytes = new Uint8Array(buf);
          let start = this.stackIncrements < 0 ? 0 : stackInfo.bytes.length - 1;
          const end = this.stackIncrements < 0 ? stackInfo.bytes.length : -1;
          let peak = 0;
          while (start !== end) {
            if (stackInfo.bytes[start] !== stackPattern) {
              break;
            }
            start -= this.stackIncrements;
            peak++;
          }
          stackInfo.stackPeak = stackInfo.stackSize - peak;
        } catch (e) {
          console.log(e);
        }
      }
    }
    return stackInfo;
  }
  async getObjectNameEntries(frameId) {
    const result = /* @__PURE__ */ new Map();
    if (this.OSGlobalpObjNameRoot) {
      await this.OSGlobalpObjNameRoot.getValue(frameId);
      if (0 !== parseInt(this.OSGlobalpObjNameRoot.value || "")) {
        let entry = await this.OSGlobalpObjNameRoot.getVarChildrenObj(
          frameId
        );
        while (entry) {
          const objectId = parseInt(entry["pOSObjID"]?.val);
          if (!objectId || objectId === 0) {
            break;
          }
          const matchName = entry["sName"]?.val.match(/"([^*]*)"$/);
          const objectName = matchName ? matchName[1] : entry["sName"]?.val;
          if (objectName && !result.has(objectId)) {
            result.set(objectId, objectName);
          }
          const nextEntryAddr = parseInt(entry["pNext"]?.val);
          if (nextEntryAddr === 0) {
            break;
          } else {
            entry = await this.getVarChildrenObj(entry["pNext"]?.ref, "pNext");
          }
        }
      }
    }
    return result;
  }
  lastValidHtmlContent = { html: "", css: "" };
  getHTML() {
    const htmlContent = { html: "", css: "" };
    let msg = "";
    if (this.status === "none") {
      htmlContent.html = "<p>RTOS not yet fully initialized. Will occur next time program pauses</p>\n";
      return htmlContent;
    } else if (this.stale) {
      const lastHtmlInfo = this.lastValidHtmlContent;
      if (this.taskCount === Number.MAX_SAFE_INTEGER) {
        msg = ' Could not read any task from "OS_Global.pTask". Perhaps program is busy or did not stop long enough';
        lastHtmlInfo.html = "";
        lastHtmlInfo.css = "";
      } else if (this.taskCount > this.maxThreads) {
        msg = ` embOS variable "OS_Global.pTask" holds ${this.taskCount} tasks which seems invalid for us`;
        lastHtmlInfo.html = "";
        lastHtmlInfo.css = "";
      } else if (lastHtmlInfo.html !== "") {
        msg = " Following info from last query may be stale.";
      }
      htmlContent.html = `<p>Unable to collect full RTOS information.${msg}</p>
` + lastHtmlInfo.html;
      htmlContent.css = lastHtmlInfo.css;
      return htmlContent;
    } else if (this.taskCount !== Number.MAX_SAFE_INTEGER && this.finalThreads.length !== this.taskCount) {
      msg += `<p>Expecting ${this.taskCount} threads, found ${this.finalThreads.length}. Thread data may be unreliable<p>
`;
    } else if (this.finalThreads.length === 0) {
      htmlContent.html = `<p>No ${this.name} threads detected, perhaps RTOS not yet initialized or tasks yet to be created!</p>
`;
      return htmlContent;
    }
    const ret = this.getHTMLCommon(DisplayFieldNames3, RTOSEMBOSItems, this.finalThreads, this.timeInfo);
    htmlContent.html = msg + ret.html + (this.helpHtml || "");
    htmlContent.css = ret.css;
    this.lastValidHtmlContent = htmlContent;
    return this.lastValidHtmlContent;
  }
};
function getRemainingTicksFromTimeout(curOSTime, delayTimeout) {
  let delay = 0;
  if (curOSTime <= delayTimeout) {
    delay = delayTimeout - curOSTime;
  } else {
    const timeUntilOverflow = RTOSEMBOS_OS_TIME_OVERFLOW - curOSTime;
    delay = timeUntilOverflow + delayTimeout;
  }
  return delay;
}
var OS_TASK_STATE_SUSPEND_MASK = 3;
var OS_TASK_STATE_TIMEOUT_ACTIVE = 4;
var OS_TASK_STATE_MASK = 248;
var OsTaskPendingState = /* @__PURE__ */ ((OsTaskPendingState2) => {
  OsTaskPendingState2[OsTaskPendingState2["READY"] = 0] = "READY";
  OsTaskPendingState2[OsTaskPendingState2["TASK_EVENT"] = 8] = "TASK_EVENT";
  OsTaskPendingState2[OsTaskPendingState2["MUTEX"] = 16] = "MUTEX";
  OsTaskPendingState2[OsTaskPendingState2["UNKNOWN"] = 24] = "UNKNOWN";
  OsTaskPendingState2[OsTaskPendingState2["SEMAPHORE"] = 32] = "SEMAPHORE";
  OsTaskPendingState2[OsTaskPendingState2["MEMPOOL"] = 40] = "MEMPOOL";
  OsTaskPendingState2[OsTaskPendingState2["QUEUE_NOT_EMPTY"] = 48] = "QUEUE_NOT_EMPTY";
  OsTaskPendingState2[OsTaskPendingState2["MAILBOX_NOT_FULL"] = 56] = "MAILBOX_NOT_FULL";
  OsTaskPendingState2[OsTaskPendingState2["MAILBOX_NOT_EMPTY"] = 64] = "MAILBOX_NOT_EMPTY";
  OsTaskPendingState2[OsTaskPendingState2["EVENT_OBJECT"] = 72] = "EVENT_OBJECT";
  OsTaskPendingState2[OsTaskPendingState2["QUEUE_NOT_FULL"] = 80] = "QUEUE_NOT_FULL";
  return OsTaskPendingState2;
})(OsTaskPendingState || {});
var TaskState2 = class {
};
var TaskReady2 = class extends TaskState2 {
  describe() {
    return "READY";
  }
  fullData() {
    return null;
  }
};
var TaskDelayed = class extends TaskState2 {
  delayTicks;
  constructor(delayTimeout) {
    super();
    this.delayTicks = delayTimeout;
  }
  describe() {
    return `DELAYED by ${this.delayTicks} ticks`;
  }
  fullData() {
    return null;
  }
};
var TaskSuspended2 = class extends TaskState2 {
  suspendCount;
  constructor(suspendCount) {
    super();
    this.suspendCount = suspendCount;
  }
  describe() {
    return `SUSPENDED (count: ${this.suspendCount})`;
  }
  fullData() {
    return null;
  }
};
var TaskPending2 = class extends TaskState2 {
  pendingInfo;
  constructor() {
    super();
    this.pendingInfo = /* @__PURE__ */ new Map();
  }
  addEvent(event) {
    this.addEventType(event.eventType);
    const val = this.pendingInfo.get(event.eventType);
    if (val) {
      val.push(event);
    }
  }
  addEventType(eventType) {
    if (!this.pendingInfo.has(eventType)) {
      this.pendingInfo.set(eventType, []);
    }
  }
  describe() {
    const eventCount = [...this.pendingInfo.values()].reduce((acc, events) => acc + events.length, 0);
    if (eventCount <= 1) {
      let event;
      for (const events of this.pendingInfo.values()) {
        if (events.length > 0) {
          event = events[0];
        }
      }
      if (event) {
        const maskedEventType = event.eventType & OS_TASK_STATE_MASK;
        const eventTypeStr = OsTaskPendingState[maskedEventType] ? OsTaskPendingState[maskedEventType] : "Unknown";
        const eventTimeoutString = event.timeOut ? ` for ${event.timeOut} ticks` : "";
        return `PEND ${eventTypeStr}: ${describeEvent2(event)}${eventTimeoutString}`;
      } else {
        return "PEND Unknown";
      }
    } else {
      return "PEND MULTI";
    }
  }
  fullData() {
    const result = {};
    const eventTypes = [...this.pendingInfo.keys()];
    eventTypes.sort();
    for (const eventType of eventTypes) {
      result[OsTaskPendingState[eventType]] = [];
      for (const event of this.pendingInfo.get(eventType) || []) {
        result[OsTaskPendingState[eventType]].push(describeEvent2(event));
      }
    }
    return result;
  }
};
function describeEvent2(event) {
  if (event.name && event.name !== "?") {
    return event.name;
  } else {
    return `0x${event.address.toString(16)}`;
  }
}

// src/rtos/rtos-chibios.ts
var threadDisplayFields = /* @__PURE__ */ ((threadDisplayFields2) => {
  threadDisplayFields2[threadDisplayFields2["ID"] = 0] = "ID";
  threadDisplayFields2[threadDisplayFields2["THREAD_DESCRIPTION"] = 1] = "THREAD_DESCRIPTION";
  threadDisplayFields2[threadDisplayFields2["FLAGS"] = 2] = "FLAGS";
  threadDisplayFields2[threadDisplayFields2["REFS"] = 3] = "REFS";
  threadDisplayFields2[threadDisplayFields2["TIME"] = 4] = "TIME";
  threadDisplayFields2[threadDisplayFields2["WTOBJP"] = 5] = "WTOBJP";
  threadDisplayFields2[threadDisplayFields2["STATS_N"] = 6] = "STATS_N";
  threadDisplayFields2[threadDisplayFields2["STATS_WORST"] = 7] = "STATS_WORST";
  threadDisplayFields2[threadDisplayFields2["STATS_CUMULATIVE"] = 8] = "STATS_CUMULATIVE";
  threadDisplayFields2[threadDisplayFields2["STACK_CURRENT_USAGE"] = 9] = "STACK_CURRENT_USAGE";
  threadDisplayFields2[threadDisplayFields2["STACK_PEAK_USAGE"] = 10] = "STACK_PEAK_USAGE";
  return threadDisplayFields2;
})(threadDisplayFields || {});
var chThreadState = /* @__PURE__ */ ((chThreadState2) => {
  chThreadState2[chThreadState2["READY"] = 0] = "READY";
  chThreadState2[chThreadState2["CURRENT"] = 1] = "CURRENT";
  chThreadState2[chThreadState2["STARTED"] = 2] = "STARTED";
  chThreadState2[chThreadState2["SUSPENDED"] = 3] = "SUSPENDED";
  chThreadState2[chThreadState2["QUEUED"] = 4] = "QUEUED";
  chThreadState2[chThreadState2["WTSEM"] = 5] = "WTSEM";
  chThreadState2[chThreadState2["WTMTX"] = 6] = "WTMTX";
  chThreadState2[chThreadState2["WTCOND"] = 7] = "WTCOND";
  chThreadState2[chThreadState2["SLEEPING"] = 8] = "SLEEPING";
  chThreadState2[chThreadState2["WTEXIT"] = 9] = "WTEXIT";
  chThreadState2[chThreadState2["WTOREVT"] = 10] = "WTOREVT";
  chThreadState2[chThreadState2["WTANDEVT"] = 11] = "WTANDEVT";
  chThreadState2[chThreadState2["SNDMSGQ"] = 12] = "SNDMSGQ";
  chThreadState2[chThreadState2["SNDMSG"] = 13] = "SNDMSG";
  chThreadState2[chThreadState2["WTMSG"] = 14] = "WTMSG";
  chThreadState2[chThreadState2["FINAL"] = 15] = "FINAL";
  chThreadState2[chThreadState2["UNKNOWN"] = 16] = "UNKNOWN";
  chThreadState2[chThreadState2["_SIZE"] = 17] = "_SIZE";
  return chThreadState2;
})(chThreadState || {});
var colNumType = 2 /* colTypeNumeric */;
var threadTableItems = {};
threadTableItems[threadDisplayFields[0 /* ID */]] = {
  width: 2,
  headerRow1: "",
  headerRow2: "id",
  colType: colNumType
};
threadTableItems[threadDisplayFields[1 /* THREAD_DESCRIPTION */]] = {
  width: 14,
  headerRow1: "",
  headerRow2: "Thread",
  colGapBefore: 1
};
threadTableItems[threadDisplayFields[2 /* FLAGS */]] = {
  width: 2,
  headerRow1: "",
  headerRow2: "Flags",
  colGapAfter: 1
};
threadTableItems[threadDisplayFields[3 /* REFS */]] = {
  width: 2,
  headerRow1: "",
  headerRow2: "Refs",
  colType: colNumType
};
threadTableItems[threadDisplayFields[4 /* TIME */]] = {
  width: 2,
  headerRow1: "",
  headerRow2: "Time",
  colType: colNumType
};
threadTableItems[threadDisplayFields[5 /* WTOBJP */]] = {
  width: 4,
  headerRow1: "Wait",
  headerRow2: "Obj/Msg",
  colGapBefore: 1
};
threadTableItems[threadDisplayFields[6 /* STATS_N */]] = {
  width: 4,
  headerRow1: "Stats",
  headerRow2: "Switches",
  colType: colNumType
};
threadTableItems[threadDisplayFields[7 /* STATS_WORST */]] = {
  width: 4,
  headerRow1: "",
  headerRow2: "Worst Path",
  colType: colNumType
};
threadTableItems[threadDisplayFields[8 /* STATS_CUMULATIVE */]] = {
  width: 4,
  headerRow1: "",
  headerRow2: "Cumulative Time",
  colType: colNumType
};
threadTableItems[threadDisplayFields[9 /* STACK_CURRENT_USAGE */]] = {
  width: 3,
  headerRow1: "Stack",
  headerRow2: "",
  colType: colNumType
};
threadTableItems[threadDisplayFields[10 /* STACK_PEAK_USAGE */]] = {
  width: 3,
  headerRow1: "",
  headerRow2: "",
  colType: colNumType
};
var threadDisplayFieldNames = Object.keys(threadTableItems);
var globalInfoCols = [{ columnDataKey: "name", title: "Name" }, { columnDataKey: "value", title: "Value" }];
var virtualTimersCols = [
  { columnDataKey: "timer", title: "Timer" },
  { columnDataKey: "time", title: "Time" },
  { columnDataKey: "delta", title: "Delta" },
  { columnDataKey: "callback", title: "Callback" },
  { columnDataKey: "params", title: "Parameters" },
  { columnDataKey: "last", title: "Last Deadline" },
  { columnDataKey: "reload", title: "Reload" }
];
var statisticsCols = [
  { columnDataKey: "description", title: "Measured Section" },
  { columnDataKey: "best", title: "Best Case" },
  { columnDataKey: "worst", title: "Worst Case" },
  { columnDataKey: "counter", title: "Iterations" },
  { columnDataKey: "cumulative", title: "Cumulative Time" }
];
function getThreadStateName(s) {
  if (s < 17 /* _SIZE */) {
    return chThreadState[s];
  }
  return chThreadState[17 /* _SIZE */ - 1];
}
function getCString(s, nullValue = "") {
  const matchName = s.match(/"([^*]*)"$/);
  return matchName ? matchName[1] : nullValue;
}
function getNumber(s) {
  return s ? parseInt(s) : 0;
}
function getNumberNVL(s, nullValue) {
  return s ? parseInt(s) : nullValue;
}
function nvl(v, nullValue) {
  if (v === void 0 || v === null) {
    return nullValue;
  }
  return v;
}
function getStackDisplayPercentage(s, v) {
  let text = "-";
  let percent = 0;
  if (s !== void 0 && v !== void 0) {
    if (v === -1) {
      text = "overflow";
      percent = 100;
    } else {
      percent = Math.round(v / s * 100);
      text = `${percent.toString()}% (${v} / ${s})`;
    }
  }
  return { text, percent };
}
function getStackDisplayValue(v) {
  let text = "-";
  if (v) {
    if (v === -1) {
      text = "overflow";
    } else {
      text = v.toString();
    }
  }
  return text;
}
var RTOSChibiOS = class extends RTOSBase {
  constructor(session) {
    super(session, "ChibiOS");
    this.session = session;
  }
  chRlistCurrent;
  chReglist;
  chCH0;
  chVTList;
  chDebug;
  chConfigDBGFillThreads = false;
  kernelVersion = "[UNKNOWN]" /* UNKNOWN */;
  rlistCurrent = 0;
  threadOffset = 0;
  threadSize = 0;
  traceRecordSize = 0;
  smp = false;
  hasWAEND = false;
  hasWABASE = false;
  stale = true;
  foundThreads = [];
  finalThreads = [];
  threads = /* @__PURE__ */ new Map();
  globalInfo = [];
  virtualTimersInfo = [];
  statistics = [];
  trace = [];
  timeInfo = "";
  helpHtml;
  stackIncrements = -1;
  maxThreads = 1024;
  async scanStackUnused(stackTop, stackEnd, s) {
    const stackData = await this.session.customRequest("readMemory", {
      memoryReference: hexFormat(Math.min(stackTop, stackEnd)),
      count: s
    });
    const bytes = new Uint8Array(Buffer.from(stackData.data, "base64"));
    let unused = 0;
    while (unused < bytes.length && bytes[unused] === 85) {
      unused++;
    }
    return unused;
  }
  async getStackPointer(threadAddr, frameId) {
    let stack = await this.getExprVal(`((struct ch_thread *) ${threadAddr})->ctx.r13`, frameId);
    if (!stack) {
      stack = await this.getExprVal(`((struct ch_thread *) ${threadAddr})->ctx.sp`, frameId);
    }
    return getNumberNVL(stack, 0);
  }
  getStackPeak(stackInfo, unused) {
    let peak = void 0;
    if (this.hasWAEND) {
      if (stackInfo.stackSize && stackInfo.stackSize !== 0) {
        peak = Math.max(0, stackInfo.stackSize - unused);
      }
    } else {
      peak = unused;
    }
    return peak;
  }
  async tryDetect(useFrameId) {
    this.progStatus = "stopped";
    try {
      if (this.status === "none") {
        try {
          this.chReglist = await this.getVarIfEmpty(
            this.chReglist,
            useFrameId,
            "&ch_system.reglist",
            false
          );
          this.smp = true;
        } catch (e) {
          if (e instanceof ShouldRetry) {
            throw e;
          }
          this.chReglist = await this.getVarIfEmpty(
            this.chReglist,
            useFrameId,
            "&ch0.reglist",
            false
          );
        }
        this.chRlistCurrent = await this.getVarIfEmpty(
          this.chRlistCurrent,
          useFrameId,
          "ch0.rlist.current",
          false
        );
        this.threadOffset = parseInt(await this.getExprVal(
          "((char *)(&((thread_t *)0)->rqueue) - (char *)0)",
          useFrameId
        ) || "");
        this.threadSize = parseInt(await this.getExprVal("sizeof(thread_t)", useFrameId) || "");
        this.traceRecordSize = parseInt(await this.getExprVal("sizeof(trace_event_t)", useFrameId) || "");
        this.chDebug = await this.getExprValChildrenObj("ch_debug", useFrameId);
        if (await this.getExprVal("ch0.rlist.current.wabase", useFrameId)) {
          this.hasWABASE = true;
        }
        if (!await this.getExprVal("ch0.rlist.current.waend", useFrameId)) {
          threadTableItems[threadDisplayFields[9 /* STACK_CURRENT_USAGE */]] = {
            width: 3,
            headerRow1: "Stack",
            headerRow2: "Current free",
            colType: colNumType
          };
          threadTableItems[threadDisplayFields[10 /* STACK_PEAK_USAGE */]] = {
            width: 3,
            headerRow1: "",
            headerRow2: "Min. free",
            colType: colNumType
          };
        } else {
          threadTableItems[threadDisplayFields[9 /* STACK_CURRENT_USAGE */]] = {
            width: 4,
            headerRow1: "Stack",
            headerRow2: "Current %<br><small>(Used B / Size B)</small>",
            colType: 1 /* colTypePercentage */
          };
          threadTableItems[threadDisplayFields[10 /* STACK_PEAK_USAGE */]] = {
            width: 4,
            headerRow1: "",
            headerRow2: "Peak %<br><small>(Peak B / Size B)</small>",
            colType: 1 /* colTypePercentage */
          };
          this.hasWAEND = true;
        }
        if (await this.getExprVal("__thd_stackfill", useFrameId)) {
          this.chConfigDBGFillThreads = true;
        }
        if (this.chDebug["version"]) {
          const v = parseInt(this.chDebug["version"]?.val);
          const major = v >> 11 & 15;
          const minor = v >> 6 & 15;
          const patch = v >> 0 & 15;
          this.kernelVersion = `${major}.${minor}.${patch}`;
        }
        this.status = "initialized";
      }
      return this;
    } catch (e) {
      if (e instanceof ShouldRetry) {
        console.error(e.message);
      } else {
        this.status = "failed";
        this.failedWhy = e;
      }
      return this;
    }
  }
  createHmlHelp() {
    function strong(text) {
      return `<strong>${text}</strong>`;
    }
    if (this.helpHtml === void 0) {
      this.helpHtml = "";
      try {
        let ret = "";
        if (!this.hasWABASE) {
          ret += `Thread stack debug information is not enabled: to enable set
                        ${strong("CH_DBG_ENABLE_STACK_CHECK")} to ${strong("TRUE")} in chconf.h<br><br>`;
        }
        if (!this.chConfigDBGFillThreads) {
          ret += `Thread stack peak calculation is disabled: to enable set
                        ${strong("CH_DBG_FILL_THREADS")} to ${strong("TRUE")} in chconf.h<br><br>`;
        }
        if (!this.chCH0["kernel_stats"]) {
          ret += `Kernel statistics are not enabled: to enable set
                        ${strong("CH_DBG_STATISTICS")} to ${strong("TRUE")} in chconf.h<br><br>`;
        }
        if (ret) {
          ret += "Note: Make sure you consider the performance/resources impact for any changes to your FW.<br>\n";
          this.helpHtml = `<button class="help-button">Hints to get more out of the ChibiOS RTOS View</button>

                        <div class="help"><p>
${ret}
</p></div>
`;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  refresh(frameId) {
    return new Promise((resolve) => {
      if (this.progStatus !== "stopped") {
        resolve();
        return;
      }
      const timer = new HrTimer();
      this.stale = true;
      this.timeInfo = new Date().toLocaleString();
      this.globalInfo = [];
      this.foundThreads = [];
      this.finalThreads = [];
      this.virtualTimersInfo = [];
      this.statistics = [];
      this.trace = [];
      this.threads.clear();
      this.chRlistCurrent?.getValue(frameId).then(
        async (rlistCurrentStr) => {
          try {
            this.chCH0 = await this.getExprValChildrenObj("ch0", frameId);
            this.chVTList = await this.getVarChildrenObj(this.chCH0["vtlist"]?.ref, "vtlist") || {};
            this.rlistCurrent = getNumberNVL(rlistCurrentStr, 0);
            if (0 !== this.rlistCurrent) {
              await this.getRTOSInfo(this.chReglist, frameId);
              this.finalThreads = [...this.foundThreads];
            } else {
              this.finalThreads = [];
            }
            this.stale = false;
            this.timeInfo += " in " + timer.deltaMs() + " ms";
            resolve();
          } catch (e) {
            resolve();
            console.error("ChibiOS.refresh() failed: ", e);
          }
        },
        (reason) => {
          resolve();
          console.error("ChibiOS.refresh() failed: ", reason);
        }
      );
    });
  }
  getRTOSInfo(reglist, frameId) {
    return new Promise((resolve, reject) => {
      if (!reglist) {
        resolve();
        return;
      }
      if (this.progStatus !== "stopped") {
        reject(new Error("Busy"));
        return;
      }
      reglist.getValue(frameId).then(async (reglistVal) => {
        try {
          await this.getGlobalInfo(frameId);
          await this.getThreadInfo(getNumberNVL(reglistVal, 0), frameId);
          await this.getVirtualTimersInfo(frameId);
          await this.getStatisticsInfo();
          resolve();
        } catch (e) {
          console.log("ChibiOS.getRTOSInfo() error: ", e);
        }
      }, (e) => {
        reject(e);
      });
    });
  }
  async getGlobalInfo(frameId) {
    const system = await this.getExprValChildrenObj("ch_system", frameId);
    const debug = await this.getVarChildrenObj(this.chCH0["dbg"]?.ref, "dbg") || {};
    const rlist = await this.getVarChildrenObj(this.chCH0["rlist"]?.ref, "rlist") || {};
    this.globalInfo.push({ name: "Kernel version" /* KERNEL_VERSION */, value: this.kernelVersion });
    this.globalInfo.push({
      name: "System state" /* SYSTEM_STATE */,
      value: system["state"] ? system["state"].val : "[UNKNOWN]" /* UNKNOWN */
    });
    if (this.chVTList["lasttime"]) {
      this.globalInfo.push({ name: "Systime mode" /* SYSTEM_TIME_MODE */, value: "tickless" /* TICKLESS */ });
      this.globalInfo.push({ name: "VT last event time" /* LAST_EVENT_TIME */, value: this.chVTList["lasttime"].val });
    } else if (this.chVTList["systime"]) {
      this.globalInfo.push({ name: "Systime mode" /* SYSTEM_TIME_MODE */, value: "systick" /* SYSTICK */ });
      this.globalInfo.push({ name: "System time" /* SYSTEM_TIME */, value: this.chVTList["systime"].val });
    } else {
      this.globalInfo.push({ name: "System time" /* SYSTEM_TIME */, value: "[UNKNOWN]" /* UNKNOWN */ });
    }
    if (debug["panic_msg"]) {
      this.globalInfo.push({
        name: "Panic message" /* PANIC_MESSAGE */,
        value: getCString(
          debug["panic_msg"].val,
          "[NONE]" /* NONE */
        )
      });
    } else {
      this.globalInfo.push({ name: "Panic message" /* PANIC_MESSAGE */, value: "[NOT ENABLED]" /* NOT_ENABLED */ });
    }
    if (debug["isr_cnt"]) {
      this.globalInfo.push({
        name: "ISR level" /* ISR_LEVEL */,
        value: getNumber(debug["isr_cnt"].val) === 0 ? "not within ISR" : "within ISR - " + debug["isr_cnt"]?.val
      });
    } else {
      this.globalInfo.push({ name: "ISR level" /* ISR_LEVEL */, value: "[NOT ENABLED]" /* NOT_ENABLED */ });
    }
    if (debug["lock_cnt"]) {
      this.globalInfo.push({
        name: "Lock level" /* LOCK_LEVEL */,
        value: getNumber(debug["lock_cnt"].val) === 0 ? "not within lock" : "within lock - " + debug["lock_cnt"]?.val
      });
    } else {
      this.globalInfo.push({ name: "Lock level" /* LOCK_LEVEL */, value: "[NOT ENABLED]" /* NOT_ENABLED */ });
    }
    if (rlist["preempt"]) {
      this.globalInfo.push({ name: "RList preempt" /* RLIST_PREEMPT */, value: rlist["preempt"] });
    }
  }
  async getThreadInfo(reglistHeader, frameId) {
    if (reglistHeader && 0 !== reglistHeader) {
      let nextEntry = await this.getExprValChildrenObj("(ch_queue_t *)" + reglistHeader, frameId);
      let currentReglist = getNumber(nextEntry["next"].val);
      let i = 0;
      do {
        const currentThreadAddr = currentReglist - this.threadOffset;
        const currentThread = await this.getExprValChildrenObj(`(thread_t *) ${currentThreadAddr}`, frameId);
        const currentThreadPqueue = await this.getExprValChildrenObj(
          `((thread_t *) ${currentThreadAddr} )->hdr.pqueue`,
          frameId
        );
        const currentThreadStateDetails = await this.getVarChildrenObj(currentThread["u"]?.ref, "u") || {};
        const currentThreadStats = await this.getVarChildrenObj(currentThread["stats"]?.ref, "stats") || {};
        const threadRunning = currentThreadAddr === this.rlistCurrent;
        const threadName = getCString(currentThread["name"].val, "[NO NAME]" /* NO_NAME */);
        const threadState = getThreadStateName(getNumberNVL(currentThread["state"]?.val, 17 /* _SIZE */));
        const threadFlags = getNumberNVL(currentThread["flags"]?.val, 0);
        const threadPrio = getNumberNVL(currentThreadPqueue["prio"]?.val, 0);
        const threadRefs = getNumberNVL(currentThread["refs"]?.val, 0);
        const threadTime = nvl(currentThread["time"]?.val, "-");
        const threadWaitForObj = currentThreadStateDetails["wtobjp"]?.val;
        const threadStatsN = nvl(currentThreadStats["n"]?.val, "-");
        const threadStatsWorst = nvl(currentThreadStats["worst"]?.val, "-");
        const threadStatsCumulative = nvl(currentThreadStats["cumulative"]?.val, "-");
        const stackInfo = await this.getStackInfo(currentThreadAddr, currentThread, frameId);
        i++;
        const display = {};
        const mySetter = (x, text, value) => {
          display[threadDisplayFieldNames[x]] = { text, value };
        };
        mySetter(0 /* ID */, i.toString());
        mySetter(
          1 /* THREAD_DESCRIPTION */,
          threadName + "@" + hexFormat(currentThreadAddr) + " " + threadState + " [P:" + threadPrio + "]"
        );
        mySetter(2 /* FLAGS */, hexFormat(threadFlags, 2));
        mySetter(3 /* REFS */, threadRefs.toString());
        mySetter(4 /* TIME */, threadTime);
        mySetter(5 /* WTOBJP */, hexFormat(parseInt(threadWaitForObj)));
        mySetter(6 /* STATS_N */, threadStatsN);
        mySetter(7 /* STATS_WORST */, threadStatsWorst);
        mySetter(8 /* STATS_CUMULATIVE */, threadStatsCumulative);
        if (this.hasWAEND) {
          const currentStackUsage = getStackDisplayPercentage(stackInfo.stackSize, stackInfo.stackUsed);
          const peakStackUsage = getStackDisplayPercentage(stackInfo.stackSize, stackInfo.stackPeak);
          mySetter(9 /* STACK_CURRENT_USAGE */, currentStackUsage.text, currentStackUsage.percent);
          mySetter(10 /* STACK_PEAK_USAGE */, peakStackUsage.text, peakStackUsage.percent);
        } else {
          mySetter(9 /* STACK_CURRENT_USAGE */, getStackDisplayValue(stackInfo.stackFree));
          mySetter(10 /* STACK_PEAK_USAGE */, getStackDisplayValue(stackInfo.stackPeak));
        }
        const threadInfo = {
          display,
          stackInfo,
          running: threadRunning
        };
        this.foundThreads.push(threadInfo);
        this.threads.set(currentThreadAddr, threadName);
        nextEntry = await this.getExprValChildrenObj(`(ch_queue_t *) ${currentReglist}`, frameId);
        currentReglist = getNumberNVL(nextEntry["next"]?.val, 0);
      } while (reglistHeader !== currentReglist && currentReglist !== 0);
    }
  }
  async getStackInfo(threadAddr, threadInfo, frameId) {
    const stackInfo = {
      stackStart: 0,
      stackTop: 0
    };
    stackInfo.stackEnd = getNumberNVL(threadInfo["wabase"]?.val, 0);
    stackInfo.stackTop = await this.getStackPointer(threadAddr, frameId);
    if (this.hasWAEND) {
      stackInfo.stackStart = getNumberNVL(threadInfo["waend"]?.val, 0) - this.threadSize;
      if (stackInfo.stackStart > 0 && stackInfo.stackEnd !== 0) {
        stackInfo.stackSize = Math.abs(stackInfo.stackStart - stackInfo.stackEnd);
        if (stackInfo.stackTop === 0) {
          stackInfo.stackTop = stackInfo.stackStart;
        }
      } else {
        stackInfo.stackStart = 0;
      }
    } else {
      stackInfo.stackStart = stackInfo.stackTop;
    }
    if (stackInfo.stackTop === 0 || stackInfo.stackEnd === 0) {
      stackInfo.stackFree = stackInfo.stackPeak = stackInfo.stackUsed = void 0;
    } else if (stackInfo.stackTop < stackInfo.stackEnd) {
      stackInfo.stackFree = stackInfo.stackPeak = stackInfo.stackUsed = -1;
    } else {
      stackInfo.stackFree = Math.abs(stackInfo.stackTop - stackInfo.stackEnd);
      if (stackInfo.stackSize && stackInfo.stackSize !== 0) {
        stackInfo.stackUsed = Math.max(0, stackInfo.stackSize - stackInfo.stackFree);
      }
      if (this.chConfigDBGFillThreads && !RTOSBase.disableStackPeaks) {
        const unused = await this.scanStackUnused(stackInfo.stackTop, stackInfo.stackEnd, stackInfo.stackFree);
        stackInfo.stackPeak = this.getStackPeak(stackInfo, unused);
      }
    }
    return stackInfo;
  }
  async getVirtualTimersInfo(frameId) {
    if (this.chCH0["vtlist"]) {
      const head = getNumberNVL(await this.getExprVal("&ch0.vtlist.dlist", frameId), 0);
      let dlist = await this.getVarChildrenObj(this.chVTList["dlist"]?.ref, "") || {};
      let current = getNumberNVL(dlist["next"]?.val, 0);
      let time = 0;
      while (current !== head && current !== 0) {
        const virtualTimer = await this.getExprValChildrenObj(`(struct ch_virtual_timer *) ${current}`, frameId);
        const timer = dlist["next"].val;
        dlist = await this.getVarChildrenObj(virtualTimer["dlist"]?.ref, "dlist") || {};
        const delta = getNumberNVL(dlist["delta"]?.val, 0);
        time = time + delta;
        this.virtualTimersInfo.push({
          timer,
          time,
          delta: dlist["delta"]?.val,
          callback: virtualTimer["func"]?.val,
          params: virtualTimer["par"]?.val,
          last: virtualTimer["last"] ? virtualTimer["par"].val : "-",
          reload: virtualTimer["reload"] ? virtualTimer["reload"].val : "-"
        });
        current = getNumberNVL(dlist["next"].val, 0);
      }
    }
  }
  async getStatisticsInfo() {
    if (this.chCH0["kernel_stats"]) {
      const kernelStats = await this.getVarChildrenObj(this.chCH0["kernel_stats"]?.ref, "kernel_stats") || {};
      const nIRQVal = kernelStats["n_irq"].val;
      const nCtxSwcVal = kernelStats["n_ctxswc"].val;
      const kernelStatsCriticalThd = await this.getVarChildrenObj(kernelStats["m_crit_thd"]?.ref, "m_crit_thd");
      const kernelStatsCriticalIsr = await this.getVarChildrenObj(kernelStats["m_crit_isr"]?.ref, "m_crit_isr");
      if (nIRQVal) {
        this.statistics.push({
          description: "IRQs counter" /* IRQS_COUNTER */,
          best: "",
          worst: "",
          counter: nIRQVal.toString(),
          cumulative: ""
        });
      }
      if (nCtxSwcVal) {
        this.statistics.push({
          description: "Context Switches counter" /* CTX_SW_COUNTER */,
          best: "",
          worst: "",
          counter: nCtxSwcVal.toString(),
          cumulative: ""
        });
      }
      if (kernelStatsCriticalThd) {
        let best = parseInt(kernelStatsCriticalThd["best"]?.val);
        let worst = parseInt(kernelStatsCriticalThd["worst"]?.val);
        let n = parseInt(kernelStatsCriticalThd["n"]?.val);
        let cumulative = parseInt(kernelStatsCriticalThd["cumulative"]?.val);
        if (best > worst) {
          best = 0;
          worst = 0;
          n = 0;
          cumulative = 0;
        }
        this.statistics.push({
          description: "Threads Critical Zones" /* THREAD_CRITICAL_ZONES */,
          best: best.toString(),
          worst: worst.toString(),
          counter: n.toString(),
          cumulative: cumulative.toString()
        });
      }
      if (kernelStatsCriticalIsr) {
        let best = parseInt(kernelStatsCriticalIsr["best"]?.val);
        let worst = parseInt(kernelStatsCriticalIsr["worst"]?.val);
        let n = parseInt(kernelStatsCriticalIsr["n"]?.val);
        let cumulative = parseInt(kernelStatsCriticalIsr["cumulative"]?.val);
        if (best > worst) {
          best = 0;
          worst = 0;
          n = 0;
          cumulative = 0;
        }
        this.statistics.push({
          description: "ISRs Critical Zones" /* IRQS_CRITTICAL_ZONES */,
          best: best.toString(),
          worst: worst.toString(),
          counter: n.toString(),
          cumulative: cumulative.toString()
        });
      }
    }
  }
  async getTraceBuffer(frameId) {
    if (this.chCH0["trace_buffer"]) {
      const traceBufferSize = parseInt(await this.getExprVal("ch0.trace_buffer.size", frameId) || "");
      if (traceBufferSize > 0) {
        const traceBuffer = await this.getVarChildrenObj(this.chCH0["trace_buffer"]?.ref, "trace_buffer") || {};
        const events = await this.getVarChildrenObj(traceBuffer["buffer"]?.ref, "buffer") || {};
        const next = parseInt(
          await this.getExprVal("(ch0.trace_buffer.ptr - ch0.trace_buffer.buffer)", frameId) || ""
        );
        let i = next;
        let n = 1;
        do {
          const event = await this.getVarChildrenObj(events[i]?.ref, "") || {};
          const eventType = getNumberNVL(event["type"]?.val, 0);
          if (eventType > 0) {
            const event2 = await this.getVarChildrenObj(events[i]?.ref, "") || {};
            const u = await this.getVarChildrenObj(event2["u"]?.ref, "") || {};
            switch (eventType) {
              case 1:
                const rdy = await this.getVarChildrenObj(u["rdy"]?.ref, "rdy") || {};
                const tp = parseInt(rdy["tp"]?.val);
                this.trace.push({
                  event: n,
                  eventType: "Ready" /* READY */,
                  state: "",
                  rtstamp: event2["rtstamp"]?.val,
                  time: event2["time"]?.val,
                  from: hexFormat(tp),
                  fromName: this.threads.get(tp),
                  obj_msg: hexFormat(parseInt(rdy["msg"]?.val)),
                  to: "",
                  toName: ""
                });
                break;
              case 2:
                const sw = await this.getVarChildrenObj(u["sw"]?.ref, "sw") || {};
                const ntp = parseInt(sw["ntp"]?.val);
                this.trace.push({
                  event: n,
                  eventType: "Ready" /* READY */,
                  state: getThreadStateName(parseInt(event2["state"]?.val)),
                  rtstamp: parseInt(event2["rtstamp"]?.val),
                  time: parseInt(event2["time"]?.val),
                  from: "",
                  fromName: "",
                  obj_msg: hexFormat(parseInt(sw["wtobjp"]?.val)),
                  to: hexFormat(ntp),
                  toName: this.threads.get(ntp)
                });
                break;
              case 3:
              case 4:
                const isr = await this.getVarChildrenObj(u["isr"]?.ref, "isr") || {};
                this.trace.push({
                  event: n,
                  eventType: eventType === 3 ? "ISR-enter" /* ISR_ENTER */ : "ISR-leave" /* ISR_LEAVE */,
                  state: "",
                  rtstamp: parseInt(event2["rtstamp"]?.val),
                  time: parseInt(event2["time"]?.val),
                  from: "",
                  fromName: getCString(isr["name"]?.val),
                  obj_msg: "",
                  to: "",
                  toName: ""
                });
                break;
              case 5:
                const halt = await this.getVarChildrenObj(u["halt"]?.ref, "halt") || {};
                this.trace.push({
                  event: n,
                  eventType: "Halt" /* HALT */,
                  state: "",
                  rtstamp: parseInt(event2["rtstamp"]?.val),
                  time: parseInt(event2["time"]?.val),
                  from: "",
                  fromName: getCString(halt["reason"]?.val),
                  obj_msg: "",
                  to: "",
                  toName: ""
                });
                break;
              case 6:
                const user = await this.getVarChildrenObj(u["user"]?.ref, "user") || {};
                this.trace.push({
                  event: n,
                  eventType: "User" /* USER */,
                  state: "",
                  rtstamp: parseInt(event2["rtstamp"]?.val),
                  time: parseInt(event2["time"]?.val),
                  from: hexFormat(parseInt(user["up1"]?.val)),
                  fromName: "",
                  obj_msg: "",
                  to: hexFormat(parseInt(user["up2"]?.val)),
                  toName: ""
                });
                break;
              default:
                break;
            }
            n++;
          }
          i++;
          if (i === traceBufferSize) {
            i = 0;
          }
        } while (i !== next);
      }
    }
  }
  lastValidHtmlContent = { html: "", css: "" };
  getHTML() {
    const htmlContent = { html: "", css: "" };
    if (this.status === "none") {
      htmlContent.html = "<p>RTOS not yet fully initialized. Will occur next time program pauses</p>\n";
      return htmlContent;
    } else if (this.stale) {
      const lastHtmlInfo = this.lastValidHtmlContent;
      htmlContent.html = "<p>Unable to collect full RTOS information.</p>\n" + lastHtmlInfo.html;
      htmlContent.css = lastHtmlInfo.css;
      return htmlContent;
    } else if (this.finalThreads.length === 0) {
      htmlContent.html = `<p>No ${this.name} threads detected, perhaps RTOS not yet initialized or
                            tasks yet to be created!</p>
`;
      return htmlContent;
    }
    this.createHmlHelp();
    const htmlThreads = this.getHTMLCommon(threadDisplayFieldNames, threadTableItems, this.finalThreads, "");
    const htmlGlobalInfo = this.getHTMLDataGrid(
      globalInfoCols,
      this.globalInfo,
      [
        { name: "id", value: "global" },
        { name: "aria-label", value: "Global Variables" },
        { name: "grid-template-columns", value: "30% 70%" }
      ]
    );
    const htmlVirtualTimersInfo = this.getHTMLDataGrid(
      virtualTimersCols,
      this.virtualTimersInfo,
      [
        { name: "id", value: "timers" },
        { name: "aria-label", value: "Virtual Timers" }
      ]
    );
    const htmlStatistics = this.getHTMLDataGrid(
      statisticsCols,
      this.statistics,
      [
        { name: "id", value: "statistics" },
        { name: "aria-label", value: "Statistics" }
      ]
    );
    const htmlRTOSPanels = this.getHTMLPanels(
      [
        { title: `THREADS
                                                            <vscode-badge appearance="secondary">
                                                            ${this.finalThreads.length}
                                                            </vscode-badge>` },
        { title: "GLOBAL" },
        { title: `TIMERS
                                                            <vscode-badge appearance="secondary">
                                                            ${this.virtualTimersInfo.length}
                                                            </vscode-badge>` },
        { title: "STATISTICS" }
      ],
      [
        { content: htmlThreads.html },
        { content: htmlGlobalInfo },
        { content: htmlVirtualTimersInfo },
        { content: htmlStatistics }
      ],
      [
        { name: "id", value: "rtos-panels" },
        { name: "aria-label", value: "ChibiOS RTOS Information Panel" },
        { name: "activeid", value: this.uiElementState.get("rtos-panels.activeid") },
        { name: "debug-session-id", value: this.session.id }
      ],
      true
    );
    htmlContent.html = `${htmlRTOSPanels}
<p>Data collected at ${this.timeInfo}</p>
`;
    htmlContent.html += this.helpHtml || "";
    htmlContent.css = htmlThreads.css;
    this.lastValidHtmlContent = htmlContent;
    return this.lastValidHtmlContent;
  }
};

// src/rtos/rtos-zephyr.ts
var DisplayFields4 = /* @__PURE__ */ ((DisplayFields5) => {
  DisplayFields5[DisplayFields5["Address"] = 0] = "Address";
  DisplayFields5[DisplayFields5["TaskName"] = 1] = "TaskName";
  DisplayFields5[DisplayFields5["Status"] = 2] = "Status";
  DisplayFields5[DisplayFields5["Priority"] = 3] = "Priority";
  DisplayFields5[DisplayFields5["StackPercent"] = 4] = "StackPercent";
  return DisplayFields5;
})(DisplayFields4 || {});
var RTOSZEPHYRItems = {};
RTOSZEPHYRItems[DisplayFields4[0 /* Address */]] = {
  width: 2,
  headerRow1: "Thread",
  headerRow2: "Address",
  colGapBefore: 1
};
RTOSZEPHYRItems[DisplayFields4[1 /* TaskName */]] = {
  width: 4,
  headerRow1: "Thread",
  headerRow2: "Name",
  colGapBefore: 1
};
RTOSZEPHYRItems[DisplayFields4[2 /* Status */]] = {
  width: 4,
  headerRow1: "Thread",
  headerRow2: "Status",
  colType: 8 /* colTypeCollapse */
};
RTOSZEPHYRItems[DisplayFields4[3 /* Priority */]] = {
  width: 1,
  headerRow1: "Thread",
  headerRow2: "Priority",
  colType: 2 /* colTypeNumeric */,
  colGapAfter: 1
};
RTOSZEPHYRItems[DisplayFields4[4 /* StackPercent */]] = {
  width: 4,
  headerRow1: "Stack Usage",
  headerRow2: "% (Used B / Size B)",
  colType: 1 /* colTypePercentage */
};
var DisplayFieldNames4 = Object.keys(RTOSZEPHYRItems);
var RTOSZEPHYR = class extends RTOSBase {
  constructor(session) {
    super(session, "Zephyr");
    this.session = session;
    if (session.configuration.rtosViewConfig) {
      if (session.configuration.rtosViewConfig.stackGrowth) {
        this.stackIncrements = parseInt(session.configuration.rtosViewConfig.stackGrowth);
      }
    }
  }
  stackEntrySize = 1;
  kernel;
  current;
  currentVal = Number.MAX_SAFE_INTEGER;
  threads;
  stale = true;
  foundThreads = [];
  finalThreads = [];
  timeInfo = "";
  stackIncrements = -1;
  helpHtml;
  async tryDetect(useFrameId) {
    this.progStatus = "stopped";
    try {
      if (this.status === "none") {
        this.kernel = await this.getVarIfEmpty(this.kernel, useFrameId, "_kernel", false);
        this.current = await this.getVarIfEmpty(this.current, useFrameId, "_kernel.cpus[0].current", false);
        this.threads = await this.getVarIfEmpty(this.threads, useFrameId, "_kernel.threads", true);
        this.status = "initialized";
      }
      return this;
    } catch (e) {
      if (e instanceof ShouldRetry) {
        console.error(e.message);
      } else {
        this.status = "failed";
        this.failedWhy = e;
      }
      return this;
    }
  }
  createHmlHelp(th, thInfo) {
    function strong(text) {
      return `<strong>${text}</strong>`;
    }
    if (this.helpHtml === void 0) {
      this.helpHtml = "";
      try {
        let ret = "";
        if (!("name" in thInfo)) {
          ret += `Thread name missing: Enable macro ${strong("CONFIG_THREAD_NAME")} and use ${strong("k_thread_name_set")} in FW<br><br>`;
        }
        if (!th.stackInfo.stackSize) {
          ret += `Stack information missing: Enable macro ${strong("CONFIG_THREAD_STACK_INFO")}`;
        }
        if (ret) {
          ret += "Note: Make sure you consider the performance/resources impact for any changes to your FW.<br>\n";
          this.helpHtml = `<button class="help-button">Hints to get more out of the Zephyr RTOS View</button>
<div class="help"><p>
${ret}
</p></div>
`;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  refresh(frameId) {
    return new Promise((resolve, reject) => {
      if (this.progStatus !== "stopped") {
        resolve();
        return;
      }
      const timer = new HrTimer();
      this.stale = true;
      this.timeInfo = new Date().toISOString();
      this.foundThreads = [];
      this.kernel?.getVarChildrenObj(frameId).then(
        async (kernel) => {
          try {
            if (this.threads) {
              const threadListStart = await this.threads?.getValue(frameId);
              if (threadListStart && 0 !== parseInt(threadListStart)) {
                const tmpCurrentVal = await this.current?.getValue(frameId);
                this.currentVal = tmpCurrentVal ? parseInt(tmpCurrentVal) : Number.MAX_SAFE_INTEGER;
                await this.getThreadInfo(this.threads, frameId);
                this.foundThreads.sort(
                  (a, b) => parseInt(a.display["Address"].text) - parseInt(b.display["Address"].text)
                );
              }
            } else {
            }
            this.finalThreads = [...this.foundThreads];
            this.stale = false;
            this.timeInfo += " in " + timer.deltaMs() + " ms";
            resolve();
          } catch (e) {
            resolve();
            console.error("Zephyr.refresh() failed: ", e);
          }
        },
        (reason) => {
          resolve();
          console.error("Zephyr.refresh() failed: ", reason);
        }
      );
    });
  }
  getThreadInfo(tcbListEntry, frameId) {
    return new Promise((resolve, reject) => {
      if (!tcbListEntry || !tcbListEntry.varReference) {
        resolve();
        return;
      }
      if (this.progStatus !== "stopped") {
        reject(new Error("Busy"));
        return;
      }
      tcbListEntry.getVarChildrenObj(frameId).then(
        async (obj) => {
          try {
            let curTaskObj = obj;
            let thAddress = parseInt(tcbListEntry?.value || "");
            do {
              let thName = "???";
              if (curTaskObj["name"]) {
                const tmpThName = await this.getExprVal("(char *)" + curTaskObj["name"]?.exp, frameId) || "";
                const matchName = tmpThName.match(/"([^*]*)"$/);
                thName = matchName ? matchName[1] : tmpThName;
              }
              const threadRunning = thAddress === this.currentVal;
              const curTaskObjBase = await this.getVarChildrenObj(curTaskObj.base.ref, "curTaskObjBase");
              const thStateObject = await this.analyzeTaskState(curTaskObjBase);
              const thState = thStateObject.describe();
              const stackInfo = await this.getStackInfo(curTaskObj);
              const display = {};
              const mySetter = (x, text, value) => {
                display[DisplayFieldNames4[x]] = { text, value };
              };
              mySetter(0 /* Address */, hexFormat(thAddress));
              mySetter(1 /* TaskName */, thName);
              mySetter(
                2 /* Status */,
                threadRunning ? "RUNNING" : thState,
                thStateObject.fullData()
              );
              mySetter(
                3 /* Priority */,
                curTaskObjBase ? parseInt(curTaskObjBase.prio.val).toString() : "???"
              );
              if (stackInfo.stackUsed !== void 0 && stackInfo.stackSize !== void 0) {
                const stackPercentVal = Math.round(stackInfo.stackUsed / stackInfo.stackSize * 100);
                const stackPercentText = `${stackPercentVal} % (${stackInfo.stackUsed} / ${stackInfo.stackSize})`;
                mySetter(4 /* StackPercent */, stackPercentText, stackPercentVal);
              } else {
                mySetter(4 /* StackPercent */, "?? %");
              }
              const thread = {
                display,
                stackInfo,
                running: threadRunning
              };
              this.foundThreads.push(thread);
              this.createHmlHelp(thread, curTaskObj);
              thAddress = parseInt(curTaskObj.next_thread?.val);
              if (0 !== thAddress) {
                const nextThreadObj = await this.getVarChildrenObj(
                  curTaskObj.next_thread?.ref,
                  "next_thread"
                );
                curTaskObj = nextThreadObj || {};
              }
            } while (0 !== thAddress);
            resolve();
          } catch (e) {
            console.log("RTOSZEPHYR.getThreadInfo() error", e);
          }
        },
        (e) => {
          reject(e);
        }
      );
    });
  }
  async getEventInfo(address, eventObject, timeoutVal) {
    const eventType = OsEventType2.Generic;
    const eventInfo = { address, eventType };
    if (timeoutVal) {
      eventInfo.timeout = timeoutVal;
    }
    return eventInfo;
  }
  async getTaskTimeout(curTaskObjBase) {
    let timeoutValue = null;
    if (curTaskObjBase !== null && curTaskObjBase["timeout"]?.ref) {
      const timeout = await this.getVarChildrenObj(curTaskObjBase.timeout?.ref, "timeout");
      if (timeout) {
        timeoutValue = parseInt(timeout.dticks.val);
      }
    }
    return timeoutValue;
  }
  async analyzeTaskState(curTaskObjBase) {
    if (curTaskObjBase === null) {
      return new TaskStateInvalid();
    } else {
      const state = parseInt(curTaskObjBase.thread_state.val);
      const timeoutValue = await this.getTaskTimeout(curTaskObjBase);
      switch (state) {
        case OsTaskState2.DUMMY:
          return new TaskDummy();
        case OsTaskState2.PENDING:
          const resultState = new TaskPending3();
          resultState.addEventType(OsEventType2.Generic);
          if (curTaskObjBase.pended_on?.val) {
            const eventWaitQAddress = parseInt(curTaskObjBase.pended_on?.val);
            if (eventWaitQAddress !== 0) {
              const event = await this.getVarChildrenObj(curTaskObjBase.pended_on?.ref, "pended_on");
              if (event) {
                const eventInfo = await this.getEventInfo(eventWaitQAddress, event, timeoutValue);
                resultState.addEvent(eventInfo);
              }
            }
          } else {
            if (timeoutValue) {
              const eventInfo = {
                address: 0,
                eventType: OsEventType2.Generic,
                timeout: timeoutValue
              };
              resultState.addEvent(eventInfo);
            }
          }
          return resultState;
        case OsTaskState2.PRESTART:
          return new TaskPrestart();
        case OsTaskState2.DEAD:
          return new TaskStateInvalid();
        case OsTaskState2.SUSPENDED:
          return new TaskSuspended3(timeoutValue);
        case OsTaskState2.ABORTING:
          return new TaskAborting();
        case OsTaskState2.READY:
          return new TaskReady3();
        default: {
          return new TaskStateInvalid();
        }
      }
    }
  }
  async getStackInfo(thInfo) {
    const stackInfo = {
      stackStart: 0,
      stackTop: 0
    };
    if (thInfo === null) {
      return stackInfo;
    }
    if (thInfo.callee_saved === null) {
      return stackInfo;
    }
    const callee_saved = await this.getVarChildrenObj(thInfo.callee_saved.ref, "callee_saved");
    if (callee_saved === null) {
      return stackInfo;
    }
    const TopOfStack = callee_saved.psp.val;
    stackInfo.stackTop = parseInt(TopOfStack);
    if (thInfo.stack_info !== null) {
      const stack_info = await this.getVarChildrenObj(thInfo.stack_info.ref, "stack_info");
      if (stack_info !== null) {
        const StackSize = stack_info["size"]?.val;
        const StackStart = stack_info["start"]?.val;
        const StackDelta = stack_info["delta"]?.val;
        if (StackSize && StackStart && StackDelta) {
          if (this.stackIncrements < 0) {
            stackInfo.stackStart = parseInt(StackStart) + parseInt(StackSize) * this.stackEntrySize - parseInt(StackDelta) * this.stackEntrySize;
            stackInfo.stackEnd = parseInt(StackStart);
          } else {
            stackInfo.stackStart = parseInt(StackStart) + parseInt(StackDelta) * this.stackEntrySize;
            stackInfo.stackEnd = parseInt(StackStart) + parseInt(StackSize) * this.stackEntrySize;
          }
          stackInfo.stackSize = parseInt(StackSize) * this.stackEntrySize;
          if (this.stackIncrements < 0) {
            const stackDelta = stackInfo.stackStart - stackInfo.stackTop;
            stackInfo.stackFree = stackInfo.stackSize - stackDelta;
            stackInfo.stackUsed = stackDelta;
          } else {
            const stackDelta = stackInfo.stackTop - stackInfo.stackStart;
            stackInfo.stackFree = stackDelta;
            stackInfo.stackUsed = stackInfo.stackSize - stackDelta;
          }
        }
      }
    } else {
      stackInfo.stackStart = stackInfo.stackTop;
    }
    return stackInfo;
  }
  lastValidHtmlContent = { html: "", css: "" };
  getHTML() {
    const htmlContent = { html: "", css: "" };
    let msg = "";
    if (this.status === "none") {
      htmlContent.html = "<p>RTOS not yet fully initialized. Will occur next time program pauses</p>\n";
      return htmlContent;
    } else if (this.stale) {
      const lastHtmlInfo = this.lastValidHtmlContent;
      msg = " Following info from last query may be stale.";
      htmlContent.html = `<p>Unable to collect full RTOS information.${msg}</p>
` + lastHtmlInfo.html;
      htmlContent.css = lastHtmlInfo.css;
      return htmlContent;
    } else if (this.finalThreads.length === 0) {
      htmlContent.html = `<p>No ${this.name} threads detected, perhaps RTOS not yet initialized or tasks yet to be created!</p>
`;
      return htmlContent;
    }
    const ret = this.getHTMLCommon(DisplayFieldNames4, RTOSZEPHYRItems, this.finalThreads, this.timeInfo);
    htmlContent.html = msg + ret.html + (this.helpHtml || "");
    htmlContent.css = ret.css;
    this.lastValidHtmlContent = htmlContent;
    return this.lastValidHtmlContent;
  }
};
var OsTaskState2 = /* @__PURE__ */ ((OsTaskState3) => {
  OsTaskState3[OsTaskState3["DUMMY"] = 0] = "DUMMY";
  OsTaskState3[OsTaskState3["PENDING"] = 1] = "PENDING";
  OsTaskState3[OsTaskState3["PRESTART"] = 2] = "PRESTART";
  OsTaskState3[OsTaskState3["DEAD"] = 4] = "DEAD";
  OsTaskState3[OsTaskState3["SUSPENDED"] = 16] = "SUSPENDED";
  OsTaskState3[OsTaskState3["ABORTING"] = 32] = "ABORTING";
  OsTaskState3[OsTaskState3["READY"] = 128] = "READY";
  return OsTaskState3;
})(OsTaskState2 || {});
var OsEventType2 = /* @__PURE__ */ ((OsEventType3) => {
  OsEventType3[OsEventType3["Generic"] = 1] = "Generic";
  return OsEventType3;
})(OsEventType2 || {});
var TaskState3 = class {
};
var TaskReady3 = class extends TaskState3 {
  describe() {
    return "READY";
  }
  fullData() {
    return null;
  }
};
var TaskSuspended3 = class extends TaskState3 {
  timeout;
  constructor(timeout) {
    super();
    this.timeout = timeout;
  }
  describe() {
    let suspendDescription = "SUSPENDED";
    if (this.timeout && this.timeout !== 0) {
      suspendDescription += ` for: ${this.timeout.toString()} ms`;
    }
    return suspendDescription;
  }
  fullData() {
    return null;
  }
};
var TaskAborting = class extends TaskState3 {
  describe() {
    return "ABORTING";
  }
  fullData() {
    return null;
  }
};
var TaskPrestart = class extends TaskState3 {
  describe() {
    return "PRESTART";
  }
  fullData() {
    return null;
  }
};
var TaskDummy = class extends TaskState3 {
  describe() {
    return "DUMMY";
  }
  fullData() {
    return null;
  }
};
var TaskStateInvalid = class extends TaskState3 {
  describe() {
    return "???";
  }
  fullData() {
    return null;
  }
};
var TaskPending3 = class extends TaskState3 {
  pendingInfo;
  constructor() {
    super();
    this.pendingInfo = /* @__PURE__ */ new Map();
  }
  addEvent(event) {
    this.addEventType(event.eventType);
    this.pendingInfo.get(event.eventType)?.push(event);
  }
  addEventType(eventType) {
    if (!this.pendingInfo.has(eventType)) {
      this.pendingInfo.set(eventType, []);
    }
  }
  describe() {
    const eventCount = [...this.pendingInfo.values()].reduce((acc, events) => acc + events.length, 0);
    if (eventCount <= 1) {
      let event;
      for (const events of this.pendingInfo.values()) {
        if (events.length > 0) {
          event = events[0];
        }
      }
      if (event) {
        const eventTypeStr = OsEventType2[event.eventType] ? OsEventType2[event.eventType] : "Unknown";
        return `PEND ${eventTypeStr}: ${describeEvent3(event)}`;
      } else {
        return "PEND Unknown";
      }
    } else {
      return "PEND MULTI";
    }
  }
  fullData() {
    const result = {};
    const eventTypes = [...this.pendingInfo.keys()];
    eventTypes.sort();
    for (const eventType of eventTypes) {
      result[OsEventType2[eventType]] = [];
      for (const event of this.pendingInfo.get(eventType) || []) {
        result[OsEventType2[eventType]].push(describeEvent3(event));
      }
    }
    return result;
  }
};
function describeEvent3(event) {
  let eventDescription = "";
  if (event.name && event.name !== "?") {
    eventDescription = event.name;
  } else {
    eventDescription = `0x${event.address.toString(16)}`;
  }
  if (event.timeout && event.timeout !== 0) {
    eventDescription += `, timeout: ${event.timeout.toString()}`;
  }
  return eventDescription;
}

// src/rtos/rtos.ts
var import_debug_tracker_vscode = __toESM(require_dist());
var TrackedDebuggers = [
  "cortex-debug",
  "cppdbg",
  "cspy"
];
var trackerApi;
var trackerApiClientInfo;
var RTOS_TYPES = {
  FreeRTOS: RTOSFreeRTOS,
  "uC/OS-II": RTOSUCOS2,
  embOS: RTOSEmbOS,
  ChibiOS: RTOSChibiOS,
  Zephyr: RTOSZEPHYR
};
var defaultHtmlInfo = { html: "", css: "" };
var RTOSSession = class {
  constructor(session) {
    this.session = session;
    this.lastFrameId = void 0;
    for (const rtosType of Object.values(RTOS_TYPES)) {
      this.allRTOSes.push(new rtosType(session));
    }
  }
  lastFrameId;
  htmlContent = defaultHtmlInfo;
  rtos;
  allRTOSes = [];
  triedAndFailed = false;
  async onStopped(frameId) {
    return new Promise((resolve) => {
      this.lastFrameId = frameId;
      const doRefresh = () => {
        if (this.rtos) {
          this.htmlContent.html = "<p>RTOS Views: Failed to get RTOS information. Please report an issue if RTOS is actually running</p>\n";
          this.htmlContent.css = "";
          this.rtos.onStopped(frameId).then(() => {
            this.htmlContent = this.rtos?.getHTML() || defaultHtmlInfo;
            resolve();
          });
        } else {
          this.triedAndFailed = true;
          this.htmlContent.html = "";
          this.htmlContent.css = "";
          resolve();
        }
      };
      if (this.rtos === void 0 && this.allRTOSes.length > 0) {
        const promises = [];
        for (const rtos of this.allRTOSes) {
          promises.push(rtos.tryDetect(frameId));
        }
        Promise.all(promises).then((results) => {
          for (const rtos of results) {
            if (rtos.status === "failed") {
              const ix = this.allRTOSes.findIndex((v) => v === rtos);
              this.allRTOSes.splice(ix, 1);
              if (this.allRTOSes.length === 0) {
                doRefresh();
                break;
              }
            } else if (rtos.status === "initialized") {
              this.allRTOSes = [];
              this.rtos = rtos;
              doRefresh();
              break;
            }
          }
          if (this.allRTOSes.length > 0) {
            this.htmlContent.html = "<p>RTOS Views: RTOS detection in progress...</p>\n";
            this.htmlContent.css = "";
            resolve();
          }
        });
      } else {
        doRefresh();
      }
    });
  }
  onContinued() {
    this.lastFrameId = void 0;
    if (this.rtos) {
      this.rtos.onContinued();
    }
  }
  onExited() {
    if (this.rtos) {
      this.rtos.onExited();
    }
    this.lastFrameId = void 0;
    this.rtos = void 0;
  }
  updateUIElementState(debugSessionId, elementId, state) {
    if (this.rtos) {
      this.rtos.updateUIElementState(debugSessionId, elementId, state);
    }
    return new Promise((r) => r());
  }
  refresh() {
    if (this.lastFrameId !== void 0) {
      return this.onStopped(this.lastFrameId);
    }
    return new Promise((r) => r());
  }
};
var _MyDebugTracker = class {
  constructor(context, handler) {
    this.context = context;
    this.handler = handler;
    context.subscriptions.push();
    this.subscribeToTracker();
  }
  isActive() {
    return !!trackerApiClientInfo;
  }
  subscribeToTracker() {
    return new Promise((resolve) => {
      import_debug_tracker_vscode.DebugTracker.getTrackerExtension("rtos-views").then((ret) => {
        if (ret instanceof Error) {
          vscode.window.showErrorMessage(ret.message);
          resolve(false);
        } else {
          trackerApi = ret;
          const arg = {
            version: 1,
            body: {
              debuggers: TrackedDebuggers,
              handler: this.debugTrackerEventHandler.bind(this),
              wantCurrentStatus: true,
              notifyAllEvents: false,
              debugLevel: 0
            }
          };
          const result = trackerApi.subscribe(arg);
          if (typeof result === "string") {
            vscode.window.showErrorMessage(
              `Subscription failed with extension 'debug-tracker-vscode' : ${result}`
            );
            resolve(false);
          } else {
            trackerApiClientInfo = result;
            resolve(true);
          }
        }
      });
    });
  }
  async debugTrackerEventHandler(event) {
    let session = event.session;
    if (import_debug_tracker_vscode.DebugSessionStatus.Initializing !== event.event) {
      session = _MyDebugTracker.allSessions[event.sessionId];
      if (!session) {
        console.error("rtos-views: Could not find session " + event.sessionId);
        return;
      }
    } else if (!session) {
      console.error("Initializing but no session info?");
      return;
    }
    switch (event.event) {
      case import_debug_tracker_vscode.DebugSessionStatus.Initializing: {
        _MyDebugTracker.allSessions[session.id] = session;
        break;
      }
      case import_debug_tracker_vscode.DebugSessionStatus.Started: {
        this.handler.onStarted(session);
        break;
      }
      case import_debug_tracker_vscode.OtherDebugEvents.FirstStackTrace: {
        const frameId = event.stackTrace && event.stackTrace.body.stackFrames && event.stackTrace.body.stackFrames[0].id || void 0;
        this.handler.onStopped(session, frameId);
        break;
      }
      case import_debug_tracker_vscode.DebugSessionStatus.Running: {
        this.handler.onContinued(session);
        break;
      }
      case import_debug_tracker_vscode.OtherDebugEvents.Capabilities: {
        break;
      }
      case import_debug_tracker_vscode.DebugSessionStatus.Terminated: {
        delete _MyDebugTracker.allSessions[event.sessionId];
        this.handler.onTerminated(session);
        break;
      }
    }
  }
};
var MyDebugTracker = _MyDebugTracker;
__publicField(MyDebugTracker, "allSessions", {});
var RTOSTracker = class {
  constructor(context) {
    this.context = context;
    this.provider = new RTOSViewProvider(context.extensionUri, this);
    this.theTracker = new MyDebugTracker(context, this);
    const config = vscode.workspace.getConfiguration("mcu-debug.rtos-views", null);
    this.enabled = config.get("showRTOS", true);
    RTOSBase.disableStackPeaks = config.get("disableStackPeaks", true);
    vscode.commands.executeCommand("setContext", "mcu-debug.rtos-views:showRTOS", this.enabled);
    context.subscriptions.push(
      vscode.window.registerWebviewViewProvider(RTOSViewProvider.viewType, this.provider),
      vscode.workspace.onDidChangeConfiguration(this.settingsChanged.bind(this)),
      vscode.commands.registerCommand("mcu-debug.rtos-views.toggleRTOSPanel", this.toggleRTOSPanel.bind(this)),
      vscode.commands.registerCommand("mcu-debug.rtos-views.refresh", this.update.bind(this))
    );
  }
  sessionMap = /* @__PURE__ */ new Map();
  provider;
  theTracker;
  enabled;
  visible = false;
  settingsChanged(e) {
    if (e.affectsConfiguration("mcu-debug.rtos-views.showRTOS")) {
      const config = vscode.workspace.getConfiguration("mcu-debug.rtos-views", null);
      this.enabled = config.get("showRTOS", true);
      vscode.commands.executeCommand("setContext", "mcu-debug.rtos-views:showRTOS", this.enabled);
      if (this.enabled) {
        this.provider.showAndFocus();
      }
      this.update();
    }
    if (e.affectsConfiguration("mcu-debug.rtos-views.disableStackPeaks")) {
      const config = vscode.workspace.getConfiguration("mcu-debug.rtos-views", null);
      RTOSBase.disableStackPeaks = config.get("disableStackPeaks", false);
    }
  }
  onStopped(session, frameId) {
    if (!frameId) {
      return;
    }
    for (const rtosSession of this.sessionMap.values()) {
      if (rtosSession.session.id === session.id) {
        rtosSession.lastFrameId = frameId;
        if (this.enabled && this.visible) {
          rtosSession.onStopped(frameId).then(() => {
            this.provider.updateHtml();
          });
        }
      }
    }
  }
  onContinued(session) {
    for (const rtosSession of this.sessionMap.values()) {
      if (rtosSession.session.id === session.id) {
        rtosSession.onContinued();
      }
    }
  }
  onStarted(session) {
    this.sessionMap.set(session.id, new RTOSSession(session));
  }
  onTerminated(session) {
    const s = this.sessionMap.get(session.id);
    if (s) {
      s.onExited();
      this.sessionMap.delete(session.id);
    }
  }
  async updateRTOSInfo() {
    const promises = [];
    if (this.enabled && this.visible) {
      for (const rtosSession of this.sessionMap.values()) {
        promises.push(rtosSession.refresh());
      }
    }
    return Promise.all(promises);
  }
  async updateUIElementStateChange(debugSessionId, elementId, state) {
    const promises = [];
    if (this.enabled && this.visible) {
      for (const rtosSession of this.sessionMap.values()) {
        promises.push(rtosSession.updateUIElementState(debugSessionId, elementId, state));
      }
    }
    return Promise.all(promises);
  }
  toggleRTOSPanel() {
    this.enabled = !this.enabled;
    this.updateRTOSPanelStatus(this.enabled);
  }
  updateRTOSPanelStatus(v) {
    this.enabled = v;
    const config = vscode.workspace.getConfiguration("mcu-debug.rtos-views", null);
    config.update("showRTOS", this.enabled);
    vscode.commands.executeCommand("setContext", "mcu-debug.rtos-views:showRTOS", this.enabled);
    if (this.enabled) {
      this.provider.showAndFocus();
    }
    this.update();
  }
  notifyPanelDisposed() {
    this.visible = false;
  }
  async visibilityChanged(v) {
    if (v !== this.visible) {
      this.visible = v;
      if (this.visible) {
        const msg = "RTOS Views: Some sessions are busy. RTOS panel will be updated when session is paused";
        for (const rtosSession of this.sessionMap.values()) {
          if (rtosSession.lastFrameId === void 0) {
            if (msg) {
              vscode.window.showInformationMessage(msg);
              break;
            }
          }
        }
      }
      try {
        await this.update();
      } catch {
      }
    }
  }
  busyHtml;
  update() {
    return new Promise((resolve) => {
      if (!this.enabled || !this.visible || !this.sessionMap.size) {
        resolve();
      }
      this.busyHtml = { html: "<h4>RTOS Views: Busy updating...</h4>\n", css: "" };
      this.provider.updateHtml();
      this.updateRTOSInfo().then(
        () => {
          this.busyHtml = void 0;
          this.provider.updateHtml();
          resolve();
        },
        (_e) => {
          this.busyHtml = void 0;
          this.provider.updateHtml();
          resolve();
        }
      );
    });
  }
  lastGoodHtmlContent;
  getHtml() {
    const ret = { html: "", css: "" };
    if (this.busyHtml) {
      return this.busyHtml;
    } else if (this.sessionMap.size === 0) {
      if (this.lastGoodHtmlContent) {
        return this.lastGoodHtmlContent;
      } else {
        ret.html = "<p>RTOS Views: No active/compatible debug sessions running.</p>\n";
        return ret;
      }
    } else if (!this.visible || !this.enabled) {
      ret.html = "<p>RTOS Views: Contents are not visible, so no html generated</p>\n";
      return ret;
    }
    for (const rtosSession of this.sessionMap.values()) {
      const name = `RTOS Views: Session Name: "${rtosSession.session.name}"`;
      if (!rtosSession.rtos) {
        const nameAndStatus = name + " -- No RTOS detected";
        ret.html += `<h4>${nameAndStatus}</h4>
`;
        if (rtosSession.triedAndFailed) {
          const supported = Object.keys(RTOS_TYPES).join(", ");
          ret.html += `<p>RTOS Views: Failed to match any supported RTOS. Supported RTOSes are (${supported}). Please report issues and/or contribute code/knowledge to add your RTOS</p>
`;
        } else {
          ret.html += "<p>RTOS Views: Try refreshing this panel. RTOS detection may be still in progress</p>\n";
        }
      } else {
        const nameAndStatus = name + ", " + rtosSession.rtos.name + " detected." + (!rtosSession.htmlContent ? " (No data available yet)" : "");
        ret.html += `<h4>${nameAndStatus}</h4>
` + rtosSession.htmlContent.html;
        ret.css = rtosSession.htmlContent.css;
      }
    }
    this.lastGoodHtmlContent = ret;
    return ret;
  }
};
var RTOSViewProvider = class {
  constructor(extensionUri, parent) {
    this.extensionUri = extensionUri;
    this.parent = parent;
  }
  webviewView;
  resolveWebviewView(webviewView, _context, _token) {
    this.webviewView = webviewView;
    this.parent.visible = this.webviewView.visible;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri]
    };
    this.webviewView.description = "View RTOS internals";
    this.webviewView.onDidDispose((_e) => {
      this.webviewView = void 0;
      this.parent.notifyPanelDisposed();
    });
    this.webviewView.onDidChangeVisibility((_e) => {
      if (this.webviewView) {
        this.parent.visibilityChanged(this.webviewView.visible);
      }
    });
    this.updateHtml();
    webviewView.webview.onDidReceiveMessage((msg) => {
      switch (msg?.type) {
        case "refresh": {
          this.parent.update();
          break;
        }
        case "change": {
          this.parent.updateUIElementStateChange(msg.debugSessionId, msg.elementId, msg.body);
          break;
        }
      }
    });
  }
  showAndFocus() {
    vscode.commands.executeCommand("rtos-views.rtos.focus");
  }
  updateHtml() {
    if (this.webviewView) {
      this.webviewView.webview.html = this.getHtmlForWebview();
    }
  }
  getHtmlForWebview() {
    const webview = this.webviewView?.webview;
    if (!webview) {
      return "";
    }
    if (!this.parent.enabled) {
      return `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>RTOS Threads</title>
                </head>
                <body>
                    <p>Currently disabled. Enable setting "mcu-debug.rtos-views.showRTOS" or use Command "RTOS Views: Toggle RTOS Panel" to see any RTOS info</p>
                </body>
                </html>`;
    }
    const toolkitUri = getUri(webview, this.extensionUri, [
      "node_modules",
      "@vscode",
      "webview-ui-toolkit",
      "dist",
      "toolkit.js"
    ]);
    const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, "dist", "rtos-view.js"));
    const rtosStyle = webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, "resources", "rtos.css"));
    const htmlInfo = this.parent.getHtml();
    const nonce = getNonce();
    const ret = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <!--
                    Use a content security policy to only allow loading images from https or from our extension directory,
                    and only allow scripts that have a specific nonce.
                -->
                <meta http-equiv="Content-Security-Policy" content="default-src 'none';
                style-src 'nonce-${nonce}' ${webview.cspSource}; script-src 'nonce-${nonce}';">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${rtosStyle}" rel="stylesheet">
                <style nonce="${nonce}">
                ${htmlInfo.css}
                </style>
                <title>RTOS Threads</title>
            </head>
            <body>
                ${htmlInfo.html}
                <script type="module" nonce="${nonce}" src="${toolkitUri}"><\/script>
                <script type="module" nonce="${nonce}" src="${scriptUri}"><\/script>
            </body>
            </html>`;
    writeHtmlToTmpDir(ret);
    return ret;
  }
};
__publicField(RTOSViewProvider, "viewType", "rtos-views.rtos");
function writeHtmlToTmpDir(str) {
  try {
    if (false) {
      const fname = path.join(os.tmpdir(), "rtos.html");
      console.log(`Write HTML to file ${fname}`);
      fs.writeFileSync(fname, str);
    }
  } catch (e) {
    console.log(e ? e.toString() : "unknown exception?");
  }
}
function getNonce() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
function getUri(webview, extensionUri, pathList) {
  return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}

// src/extension.ts
function activate(context) {
  context.subscriptions.push(
    vscode2.commands.registerCommand("mcu-debug.rtos-views.helloWorld", () => {
      vscode2.window.showInformationMessage("Hello from rtos-views!");
    })
  );
  const rtosTracker = new RTOSTracker(context);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
