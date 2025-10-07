module.exports = [
"[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/authorization_form/node_modules/@babel/runtime/helpers/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _extends() {
    return module.exports = _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/authorization_form/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/authorization_form/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/authorization_form/node_modules/prop-types/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/authorization_form/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/authorization_form/node_modules/hoist-non-react-statics/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/authorization_form/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/authorization_form/node_modules/object-assign/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}),
"[project]/authorization_form/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/authorization_form/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/authorization_form/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/authorization_form/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_context__.r("[project]/authorization_form/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/authorization_form/node_modules/prop-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/authorization_form/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/exactProp/exactProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>exactProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
;
// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, propTypes, {
        [specialProperty]: (props)=>{
            const unsupportedProps = Object.keys(props).filter((prop)=>!propTypes.hasOwnProperty(prop));
            if (unsupportedProps.length > 0) {
                return new Error(`The following props are not supported: ${unsupportedProps.map((prop)=>`\`${prop}\``).join(', ')}. Please remove them.`);
            }
            return null;
        }
    });
}
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/exactProp/exactProp.js [app-ssr] (ecmascript) <export default as exactProp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exactProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/exactProp/exactProp.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>resolveProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
;
function resolveProps(defaultProps, props) {
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props);
    Object.keys(defaultProps).forEach((propName)=>{
        if (propName.toString().match(/^(components|slots)$/)) {
            output[propName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, defaultProps[propName], output[propName]);
        } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
            const defaultSlotProps = defaultProps[propName] || {};
            const slotProps = props[propName];
            output[propName] = {};
            if (!slotProps || !Object.keys(slotProps)) {
                // Reduce the iteration if the slot props is empty
                output[propName] = defaultSlotProps;
            } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
                // Reduce the iteration if the default slot props is empty
                output[propName] = slotProps;
            } else {
                output[propName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, slotProps);
                Object.keys(defaultSlotProps).forEach((slotPropName)=>{
                    output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
                });
            }
        } else if (output[propName] === undefined) {
            output[propName] = defaultProps[propName];
        }
    });
    return output;
}
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */ const useEnhancedEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useEnhancedEffect;
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/useId/useId.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
let globalId = 0;
function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (defaultId == null) {
            // Fallback to this default id when possible.
            // Use the incrementing value for client-side rendering only.
            // We can't use it server-side.
            // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
            globalId += 1;
            setDefaultId(`mui-${globalId}`);
        }
    }, [
        defaultId
    ]);
    return id;
}
// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__['useId'.toString()];
function useId(idOverride) {
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride != null ? idOverride : reactId;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
}
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>deepmerge,
    "isPlainObject",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function isPlainObject(item) {
    if (typeof item !== 'object' || item === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](source) || !isPlainObject(source)) {
        return source;
    }
    const output = {};
    Object.keys(source).forEach((key)=>{
        output[key] = deepClone(source[key]);
    });
    return output;
}
function deepmerge(target, source, options = {
    clone: true
}) {
    const output = options.clone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key)=>{
            if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](source[key])) {
                output[key] = source[key];
            } else if (isPlainObject(source[key]) && // Avoid prototype pollution
            Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
                // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                output[key] = deepmerge(target[key], source[key], options);
            } else if (options.clone) {
                output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
}
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>capitalize
]);
;
function capitalize(string) {
    if (typeof string !== 'string') {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: \`capitalize(string)\` expects a string argument.` : "TURBOPACK unreachable");
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const defaultGenerator = (componentName)=>componentName;
const createClassNameGenerator = ()=>{
    let generate = defaultGenerator;
    return {
        configure (generator) {
            generate = generator;
        },
        generate (componentName) {
            return generate(componentName);
        },
        reset () {
            generate = defaultGenerator;
        }
    };
};
const ClassNameGenerator = createClassNameGenerator();
const __TURBOPACK__default__export__ = ClassNameGenerator;
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClass,
    "globalStateClasses",
    ()=>globalStateClasses,
    "isGlobalState",
    ()=>isGlobalState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-ssr] (ecmascript)");
;
const globalStateClasses = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].generate(componentName)}-${slot}`;
}
function isGlobalState(slot) {
    return globalStateClasses[slot] !== undefined;
}
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/formatMuiErrorMessage/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/internal-babel-macros/MuiError.macro` instead.
 * @param {number} code
 */ __turbopack_context__.s([
    "default",
    ()=>formatMuiErrorMessage
]);
function formatMuiErrorMessage(code) {
    // Apply babel-plugin-transform-template-literals in loose mode
    // loose mode is safe if we're concatenating primitives
    // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
    /* eslint-disable prefer-template */ let url = 'https://mui.com/production-error/?code=' + code;
    for(let i = 1; i < arguments.length; i += 1){
        // rest params over-transpile for this case
        // eslint-disable-next-line prefer-rest-params
        url += '&args[]=' + encodeURIComponent(arguments[i]);
    }
    return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
/* eslint-enable prefer-template */ }
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$formatMuiErrorMessage$2f$formatMuiErrorMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$formatMuiErrorMessage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/formatMuiErrorMessage/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$formatMuiErrorMessage$2f$formatMuiErrorMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/clamp/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/clamp/clamp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
}
const __TURBOPACK__default__export__ = clamp;
}),
"[project]/authorization_form/node_modules/@mui/utils/esm/clamp/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$clamp$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$clamp$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/clamp/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$clamp$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/clamp/clamp.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@mui/private-theming/useTheme/ThemeContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ThemeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) {
    ThemeContext.displayName = 'ThemeContext';
}
const __TURBOPACK__default__export__ = ThemeContext;
}),
"[project]/authorization_form/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/private-theming/useTheme/ThemeContext.js [app-ssr] (ecmascript)");
;
;
function useTheme() {
    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"](theme);
    }
    return theme;
}
}),
"[project]/authorization_form/node_modules/@mui/private-theming/ThemeProvider/nested.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
const __TURBOPACK__default__export__ = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';
}),
"[project]/authorization_form/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__exactProp$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/exactProp/exactProp.js [app-ssr] (ecmascript) <export default as exactProp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/private-theming/useTheme/ThemeContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/private-theming/ThemeProvider/nested.js [app-ssr] (ecmascript)");
// To support composition of theme.
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function mergeOuterLocalTheme(outerTheme, localTheme) {
    if (typeof localTheme === 'function') {
        const mergedTheme = localTheme(outerTheme);
        if ("TURBOPACK compile-time truthy", 1) {
            if (!mergedTheme) {
                console.error([
                    'MUI: You should return an object from your theme function, i.e.',
                    '<ThemeProvider theme={() => ({})} />'
                ].join('\n'));
            }
        }
        return mergedTheme;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */ function ThemeProvider(props) {
    const { children, theme: localTheme } = props;
    const outerTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    if ("TURBOPACK compile-time truthy", 1) {
        if (outerTheme === null && typeof localTheme === 'function') {
            console.error([
                'MUI: You are providing a theme function prop to the ThemeProvider component:',
                '<ThemeProvider theme={outerTheme => outerTheme} />',
                '',
                'However, no outer theme is present.',
                'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'
            ].join('\n'));
        }
    }
    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
        if (output != null) {
            output[__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]] = outerTheme !== null;
        }
        return output;
    }, [
        localTheme,
        outerTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: theme,
        children: children
    });
}
("TURBOPACK compile-time truthy", 1) ? ThemeProvider.propTypes = {
    /**
   * Your component tree.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A theme object. You can provide a function to extend the outer theme.
   */ theme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
    ]).isRequired
} : "TURBOPACK unreachable";
if ("TURBOPACK compile-time truthy", 1) {
    ("TURBOPACK compile-time truthy", 1) ? ThemeProvider.propTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__exactProp$3e$__["exactProp"])(ThemeProvider.propTypes) : "TURBOPACK unreachable";
}
const __TURBOPACK__default__export__ = ThemeProvider;
}),
"[project]/authorization_form/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyleSheet",
    ()=>StyleSheet
]);
var isDevelopment = true;
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/ function sheetForTag(tag) {
    if (tag.sheet) {
        return tag.sheet;
    } // this weirdness brought to you by firefox
    /* istanbul ignore next */ for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) {
            return document.styleSheets[i];
        }
    } // this function should always return with a value
    // TS can't understand it though so we make it stop complaining here
    return undefined;
}
function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);
    if (options.nonce !== undefined) {
        tag.setAttribute('nonce', options.nonce);
    }
    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
}
var StyleSheet = /*#__PURE__*/ function() {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
        var _this = this;
        this._insertTag = function(tag) {
            var before;
            if (_this.tags.length === 0) {
                if (_this.insertionPoint) {
                    before = _this.insertionPoint.nextSibling;
                } else if (_this.prepend) {
                    before = _this.container.firstChild;
                } else {
                    before = _this.before;
                }
            } else {
                before = _this.tags[_this.tags.length - 1].nextSibling;
            }
            _this.container.insertBefore(tag, before);
            _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
    }
    var _proto = StyleSheet.prototype;
    _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
            this._insertTag(createStyleElement(this));
        }
        var tag = this.tags[this.tags.length - 1];
        {
            var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
            if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
                // this would only cause problem in speedy mode
                // but we don't want enabling speedy to affect the observable behavior
                // so we report this error at all times
                console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
            }
            this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
        }
        if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
                if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
                    console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
                }
            }
        } else {
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr++;
    };
    _proto.flush = function flush() {
        this.tags.forEach(function(tag) {
            var _tag$parentNode;
            return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        {
            this._alreadyInsertedOrderInsensitiveRule = false;
        }
    };
    return StyleSheet;
}();
;
}),
"[project]/authorization_form/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {number}
 * @return {number}
 */ __turbopack_context__.s([
    "abs",
    ()=>abs,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "charat",
    ()=>charat,
    "combine",
    ()=>combine,
    "from",
    ()=>from,
    "hash",
    ()=>hash,
    "indexof",
    ()=>indexof,
    "match",
    ()=>match,
    "replace",
    ()=>replace,
    "sizeof",
    ()=>sizeof,
    "strlen",
    ()=>strlen,
    "substr",
    ()=>substr,
    "trim",
    ()=>trim
]);
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search) {
    return value.indexOf(search);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
}),
"[project]/authorization_form/node_modules/stylis/src/Tokenizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "caret",
    ()=>caret,
    "char",
    ()=>char,
    "character",
    ()=>character,
    "characters",
    ()=>characters,
    "column",
    ()=>column,
    "commenter",
    ()=>commenter,
    "copy",
    ()=>copy,
    "dealloc",
    ()=>dealloc,
    "delimit",
    ()=>delimit,
    "delimiter",
    ()=>delimiter,
    "escaping",
    ()=>escaping,
    "identifier",
    ()=>identifier,
    "length",
    ()=>length,
    "line",
    ()=>line,
    "next",
    ()=>next,
    "node",
    ()=>node,
    "peek",
    ()=>peek,
    "position",
    ()=>position,
    "prev",
    ()=>prev,
    "slice",
    ()=>slice,
    "token",
    ()=>token,
    "tokenize",
    ()=>tokenize,
    "tokenizer",
    ()=>tokenizer,
    "whitespace",
    ()=>whitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: ''
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0), root, {
        length: -root.length
    }, props);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}),
"[project]/authorization_form/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARSET",
    ()=>CHARSET,
    "COMMENT",
    ()=>COMMENT,
    "COUNTER_STYLE",
    ()=>COUNTER_STYLE,
    "DECLARATION",
    ()=>DECLARATION,
    "DOCUMENT",
    ()=>DOCUMENT,
    "FONT_FACE",
    ()=>FONT_FACE,
    "FONT_FEATURE_VALUES",
    ()=>FONT_FEATURE_VALUES,
    "IMPORT",
    ()=>IMPORT,
    "KEYFRAMES",
    ()=>KEYFRAMES,
    "LAYER",
    ()=>LAYER,
    "MEDIA",
    ()=>MEDIA,
    "MOZ",
    ()=>MOZ,
    "MS",
    ()=>MS,
    "NAMESPACE",
    ()=>NAMESPACE,
    "PAGE",
    ()=>PAGE,
    "RULESET",
    ()=>RULESET,
    "SUPPORTS",
    ()=>SUPPORTS,
    "VIEWPORT",
    ()=>VIEWPORT,
    "WEBKIT",
    ()=>WEBKIT
]);
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
}),
"[project]/authorization_form/node_modules/stylis/src/Serializer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children);
    for(var i = 0; i < length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
            element.value = element.props.join(',');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}),
"[project]/authorization_form/node_modules/stylis/src/Prefixer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefix",
    ()=>prefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
;
;
function prefix(value, length, children) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // tab-size
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') + (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') : '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/g, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // justify-self
        case 4200:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-column-align' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, length) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'template-', '') + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-end/);
            })) {
                return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(value + (children = children[length].value), 'span') ? value : __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(children, 'span') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) : +(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-end', '-span'), 'span ', '') + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch') ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        // position: sticky
        case 4949:
            // stick(y)?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 6) === 121) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}
}),
"[project]/authorization_form/node_modules/stylis/src/Middleware.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware,
    "namespace",
    ()=>namespace,
    "prefixer",
    ()=>prefixer,
    "rulesheet",
    ()=>rulesheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Tokenizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Serializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Prefixer.js [app-ssr] (ecmascript)");
;
;
;
;
;
function middleware(collection) {
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element.return = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefix"])(element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combine"])(element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case '::placeholder':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combine"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])(value), function(value, index, children) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 0)){
                        // \f
                        case 12:
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(value));
                        // \0 ( + > ~
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        // :
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(children[index], index = 1, -1);
                        // \s
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children) > 1 ? '' : value;
                                case index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}
}),
"[project]/authorization_form/node_modules/stylis/src/Parser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comment",
    ()=>comment,
    "compile",
    ()=>compile,
    "declaration",
    ()=>declaration,
    "parse",
    ()=>parse,
    "ruleset",
    ()=>ruleset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Tokenizer.js [app-ssr] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caret"])()), root, parent), declarations);
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) - length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(atrule === 99 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110 ? 100 : atrule){
                        // d l m s
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length);
}
function comment(value, root, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0);
}
function declaration(value, root, parent, length) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length);
}
}),
"[project]/authorization_form/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>weakMemoize
]);
var weakMemoize = function weakMemoize(func) {
    var cache = new WeakMap();
    return function(arg) {
        if (cache.has(arg)) {
            // Use non-null assertion because we just checked that the cache `has` it
            // This allows us to remove `undefined` from the return value
            return cache.get(arg);
        }
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
    };
};
;
}),
"[project]/authorization_form/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/authorization_form/node_modules/@emotion/cache/dist/emotion-cache.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$sheet$2f$dist$2f$emotion$2d$sheet$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Tokenizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Serializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Middleware.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/stylis/src/Parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-ssr] (ecmascript)");
;
;
;
;
var isBrowser = typeof document !== 'undefined';
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while(true){
        previous = character;
        character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])(); // &\f
        if (previous === 38 && character === 12) {
            points[index] = 1;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["token"])(character)) {
            break;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(begin, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["position"]);
};
var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do {
        switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["token"])(character)){
            case 0:
                // &\f
                if (character === 38 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])() === 12) {
                    // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
                    // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
                    // and when it should just concatenate the outer and inner selectors
                    // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
                    points[index] = 1;
                }
                parsed[index] += identifierWithPointTracking(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["position"] - 1, points, index);
                break;
            case 2:
                parsed[index] += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delimit"])(character);
                break;
            case 4:
                // comma
                if (character === 44) {
                    // colon
                    parsed[++index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])() === 58 ? '&\f' : '';
                    points[index] = parsed[index].length;
                    break;
                }
            // fallthrough
            default:
                parsed[index] += (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(character);
        }
    }while (character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])())
    return parsed;
};
var getRules = function getRules(value, points) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dealloc"])(toRules((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alloc"])(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
        return;
    }
    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while(parent.type !== 'rule'){
        parent = parent.parent;
        if (!parent) return;
    } // short-circuit for the simplest case
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
        return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
    if (isImplicitRule) {
        return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for(var i = 0, k = 0; i < rules.length; i++){
        for(var j = 0; j < parentRules.length; j++, k++){
            element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
    }
};
var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98) {
            // this ignores label
            element["return"] = '';
            element.value = '';
        }
    }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
    return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function(element, index, children) {
        if (element.type !== 'rule' || cache.compat) return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses) {
            var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
            //
            // considering this input:
            // .a {
            //   .b /* comm */ {}
            //   color: hotpink;
            // }
            // we get output corresponding to this:
            // .a {
            //   & {
            //     /* comm */
            //     color: hotpink;
            //   }
            //   .b {}
            // }
            var commentContainer = isNested ? element.parent.children : children;
            for(var i = commentContainer.length - 1; i >= 0; i--){
                var node = commentContainer[i];
                if (node.line < element.line) {
                    break;
                } // it is quite weird but comments are *usually* put at `column: element.column - 1`
                // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
                // this will also match inputs like this:
                // .a {
                //   /* comm */
                //   .b {}
                // }
                //
                // but that is fine
                //
                // it would be the easiest to change the placement of the comment to be the first child of the rule:
                // .a {
                //   .b { /* comm */ }
                // }
                // with such inputs we wouldn't have to search for the comment at all
                // TODO: consider changing this comment placement in the next major version
                if (node.column < element.column) {
                    if (isIgnoringComment(node)) {
                        return;
                    }
                    break;
                }
            }
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
            });
        }
    };
};
var isImportRule = function isImportRule(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
    for(var i = index - 1; i >= 0; i--){
        if (!isImportRule(children[i])) {
            return true;
        }
    }
    return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user
var nullifyElement = function nullifyElement(element) {
    element.type = '';
    element.value = '';
    element["return"] = '';
    element.children = '';
    element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
    if (!isImportRule(element)) {
        return;
    }
    if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        nullifyElement(element);
    }
};
/* eslint-disable no-fallthrough */ function prefix(value, length) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // flex, flex-direction
        case 6828:
        case 4268:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/, '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch') ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length) + value : value;
            }
            break;
        // position: sticky
        case 4949:
            // (s)ticky?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 1) !== 115) break;
        // display: (flex|inline-flex)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(value) - 3 - (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(value, '!important') && 10))){
                // stic(k)y
                case 107:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
                // (inline-)?fl(e)x
                case 101:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
            }
            break;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
    }
    return value;
}
var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element["return"]) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element["return"] = prefix(element.value, element.length);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combine"])(element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case '::placeholder':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
};
var getServerStylisCache = isBrowser ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        return {};
    });
});
var defaultStylisPlugins = [
    prefixer
];
var getSourceMap;
{
    var sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    getSourceMap = function getSourceMap(styles) {
        var matches = styles.match(sourceMapPattern);
        if (!matches) return;
        return matches[matches.length - 1];
    };
}var createCache = function createCache(options) {
    var key = options.key;
    if (!key) {
        throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
    }
    if (isBrowser && key === 'css') {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
        // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
        // note this very very intentionally targets all style elements regardless of the key to ensure
        // that creating a cache works inside of render of a React component
        Array.prototype.forEach.call(ssrStyles, function(node) {
            // we want to only move elements which have a space in the data-emotion attribute value
            // because that indicates that it is an Emotion 11 server-side rendered style elements
            // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
            // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
            // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
            // will not result in the Emotion 10 styles being destroyed
            var dataEmotionAttribute = node.getAttribute('data-emotion');
            if (dataEmotionAttribute.indexOf(' ') === -1) {
                return;
            }
            document.head.appendChild(node);
            node.setAttribute('data-s', '');
        });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    {
        if (/[^a-z-]/.test(key)) {
            throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
        }
    }
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    if (isBrowser) {
        container = options.container || document.head;
        Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
            var attrib = node.getAttribute("data-emotion").split(' ');
            for(var i = 1; i < attrib.length; i++){
                inserted[attrib[i]] = true;
            }
            nodesToHydrate.push(node);
        });
    }
    var _insert;
    var omnipresentPlugins = [
        compat,
        removeLabel
    ];
    {
        omnipresentPlugins.push(createUnsafeSelectorsAlarm({
            get compat () {
                return cache.compat;
            }
        }), incorrectImportAlarm);
    }
    if (!getServerStylisCache) {
        var currentSheet;
        var finalizingPlugins = [
            __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"],
            function(element) {
                if (!element.root) {
                    if (element["return"]) {
                        currentSheet.insert(element["return"]);
                    } else if (element.value && element.type !== __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMENT"]) {
                        // insert empty rule in non-production environments
                        // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
                        currentSheet.insert(element.value + "{}");
                    }
                }
            }
        ];
        var serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["middleware"])(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
        var stylis = function stylis(styles) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compile"])(styles), serializer);
        };
        _insert = function insert(selector, serialized, sheet, shouldCache) {
            currentSheet = sheet;
            if (getSourceMap) {
                var sourceMap = getSourceMap(serialized.styles);
                if (sourceMap) {
                    currentSheet = {
                        insert: function insert(rule) {
                            sheet.insert(rule + sourceMap);
                        }
                    };
                }
            }
            stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
            if (shouldCache) {
                cache.inserted[serialized.name] = true;
            }
        };
    } else {
        var _finalizingPlugins = [
            __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"]
        ];
        var _serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["middleware"])(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
        var _stylis = function _stylis(styles) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compile"])(styles), _serializer);
        };
        var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
        var getRules = function getRules(selector, serialized) {
            var name = serialized.name;
            if (serverStylisCache[name] === undefined) {
                serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
            }
            return serverStylisCache[name];
        };
        _insert = function _insert(selector, serialized, sheet, shouldCache) {
            var name = serialized.name;
            var rules = getRules(selector, serialized);
            if (cache.compat === undefined) {
                // in regular mode, we don't set the styles on the inserted cache
                // since we don't need to and that would be wasting memory
                // we return them so that they are rendered in a style tag
                if (shouldCache) {
                    cache.inserted[name] = true;
                }
                if (getSourceMap) {
                    var sourceMap = getSourceMap(serialized.styles);
                    if (sourceMap) {
                        return rules + sourceMap;
                    }
                }
                return rules;
            } else {
                // in compat mode, we put the styles on the inserted cache so
                // that emotion-server can pull out the styles
                // except when we don't want to cache it which was in Global but now
                // is nowhere but we don't want to do a major right now
                // and just in case we're going to leave the case here
                // it's also not affecting client side bundle size
                // so it's really not a big deal
                if (shouldCache) {
                    cache.inserted[name] = rules;
                } else {
                    return rules;
                }
            }
        };
    }
    var cache = {
        key: key,
        sheet: new __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$sheet$2f$dist$2f$emotion$2d$sheet$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyleSheet"]({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {},
        insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
};
;
}),
"[project]/authorization_form/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/authorization_form/node_modules/hoist-non-react-statics/node_modules/react-is/index.js [app-ssr] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/authorization_form/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hoistNonReactStatics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-ssr] (ecmascript)");
;
// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks
var hoistNonReactStatics = function(targetComponent, sourceComponent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(targetComponent, sourceComponent);
};
;
}),
"[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>CacheProvider,
    "E",
    ()=>Emotion$1,
    "T",
    ()=>ThemeContext,
    "_",
    ()=>__unsafe_useEmotionCache,
    "a",
    ()=>ThemeProvider,
    "b",
    ()=>withTheme,
    "c",
    ()=>createEmotionProps,
    "h",
    ()=>hasOwn,
    "i",
    ()=>isBrowser,
    "u",
    ()=>useTheme,
    "w",
    ()=>withEmotionCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/cache/dist/emotion-cache.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$_isolated$2d$hnrs$2f$dist$2f$emotion$2d$react$2d$_isolated$2d$hnrs$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/utils/dist/emotion-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var isBrowser = typeof document !== 'undefined';
var EmotionCacheContext = /* #__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
    key: 'css'
}) : null);
{
    EmotionCacheContext.displayName = 'EmotionCacheContext';
}var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache(func) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
        // the cache will never be null in the browser
        var cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(EmotionCacheContext);
        return func(props, cache, ref);
    });
};
if (!isBrowser) {
    withEmotionCache = function withEmotionCache(func) {
        return function(props) {
            var cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(EmotionCacheContext);
            if (cache === null) {
                // yes, we're potentially creating this on every render
                // it doesn't actually matter though since it's only on the server
                // so there will only every be a single render
                // that could change in the future because of suspense and etc. but for now,
                // this works and i don't want to optimise for a future thing that we aren't sure about
                cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    key: 'css'
                });
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](EmotionCacheContext.Provider, {
                    value: cache
                }, func(props, cache));
            } else {
                return func(props, cache);
            }
        };
    };
}
var ThemeContext = /* #__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
{
    ThemeContext.displayName = 'EmotionThemeContext';
}var useTheme = function useTheme() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
};
var getTheme = function getTheme(outerTheme, theme) {
    if (typeof theme === 'function') {
        var mergedTheme = theme(outerTheme);
        if (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme)) {
            throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
        }
        return mergedTheme;
    }
    if (theme == null || typeof theme !== 'object' || Array.isArray(theme)) {
        throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(outerTheme) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(theme) {
        return getTheme(outerTheme, theme);
    });
});
var ThemeProvider = function ThemeProvider(props) {
    var theme = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
    if (props.theme !== theme) {
        theme = createCacheWithTheme(theme)(props.theme);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ThemeContext.Provider, {
        value: theme
    }, props.children);
};
function withTheme(Component) {
    var componentName = Component.displayName || Component.name || 'Component';
    var WithTheme = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function render(props, ref) {
        var theme = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ThemeContext);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            theme: theme,
            ref: ref
        }, props));
    });
    WithTheme.displayName = "WithTheme(" + componentName + ")";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$_isolated$2d$hnrs$2f$dist$2f$emotion$2d$react$2d$_isolated$2d$hnrs$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(WithTheme, Component);
}
var hasOwn = {}.hasOwnProperty;
var getLastPart = function getLastPart(functionName) {
    // The match may be something like 'Object.createEmotionProps' or
    // 'Loader.prototype.render'
    var parts = functionName.split('.');
    return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
    // V8
    var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
    if (match) return getLastPart(match[1]); // Safari / Firefox
    match = /^([A-Za-z0-9$.]+)@/.exec(line);
    if (match) return getLastPart(match[1]);
    return undefined;
};
var internalReactFunctionNames = /* #__PURE__ */ new Set([
    'renderWithHooks',
    'processChild',
    'finishClassComponent',
    'renderToString'
]); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.
var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
    return identifier.replace(/\$/g, '-');
};
var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
    if (!stackTrace) return undefined;
    var lines = stackTrace.split('\n');
    for(var i = 0; i < lines.length; i++){
        var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"
        if (!functionName) continue; // If we reach one of these, we have gone too far and should quit
        if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
        // uppercase letter
        if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
    }
    return undefined;
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
    if (typeof props.css === 'string' && // check if there is a css declaration
    props.css.indexOf(':') !== -1) {
        throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
    }
    var newProps = {};
    for(var _key in props){
        if (hasOwn.call(props, _key)) {
            newProps[_key] = props[_key];
        }
    }
    newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:
    // - It causes hydration warnings when using Safari and SSR
    // - It can degrade performance if there are a huge number of elements
    //
    // Even if the flag is set, we still don't compute the label if it has already
    // been determined by the Babel plugin.
    if (typeof globalThis !== 'undefined' && !!globalThis.EMOTION_RUNTIME_AUTO_LABEL && !!props.css && (typeof props.css !== 'object' || !('name' in props.css) || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
        var label = getLabelFromStackTrace(new Error().stack);
        if (label) newProps[labelPropName] = label;
    }
    return newProps;
};
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, isStringTag);
    var rules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized, isStringTag);
    });
    if (!isBrowser && rules !== undefined) {
        var _ref2;
        var serializedNames = serialized.name;
        var next = serialized.next;
        while(next !== undefined){
            serializedNames += ' ' + next.name;
            next = next.next;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
            __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }
    return null;
};
var Emotion = /* #__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible
    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
        cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [
        cssProp
    ];
    var className = '';
    if (typeof props.className === 'string') {
        className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
        className = props.className + " ";
    }
    var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])(registeredStyles, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ThemeContext));
    if (serialized.name.indexOf('-') === -1) {
        var labelFromStack = props[labelPropName];
        if (labelFromStack) {
            serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])([
                serialized,
                'label:' + labelFromStack + ';'
            ]);
        }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for(var _key2 in props){
        if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && _key2 !== labelPropName) {
            newProps[_key2] = props[_key2];
        }
    }
    newProps.className = className;
    if (ref) {
        newProps.ref = ref;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](WrappedComponent, newProps));
});
{
    Emotion.displayName = 'EmotionCssPropInternal';
}var Emotion$1 = Emotion;
;
}),
"[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export T as ThemeContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@emotion/react/dist/emotion-react.development.esm.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassNames",
    ()=>ClassNames,
    "Global",
    ()=>Global,
    "createElement",
    ()=>jsx,
    "css",
    ()=>css,
    "jsx",
    ()=>jsx,
    "keyframes",
    ()=>keyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/utils/dist/emotion-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/cache/dist/emotion-cache.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$weak$2d$memoize$2f$dist$2f$emotion$2d$weak$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
var isDevelopment = true;
var pkg = {
    name: "@emotion/react",
    version: "11.14.0",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    types: "dist/emotion-react.cjs.d.ts",
    exports: {
        ".": {
            types: {
                "import": "./dist/emotion-react.cjs.mjs",
                "default": "./dist/emotion-react.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./dist/emotion-react.development.edge-light.esm.js",
                    "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
                    "default": "./dist/emotion-react.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./dist/emotion-react.browser.development.esm.js",
                    "import": "./dist/emotion-react.browser.development.cjs.mjs",
                    "default": "./dist/emotion-react.browser.development.cjs.js"
                },
                module: "./dist/emotion-react.development.esm.js",
                "import": "./dist/emotion-react.development.cjs.mjs",
                "default": "./dist/emotion-react.development.cjs.js"
            },
            "edge-light": {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            worker: {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            workerd: {
                module: "./dist/emotion-react.edge-light.esm.js",
                "import": "./dist/emotion-react.edge-light.cjs.mjs",
                "default": "./dist/emotion-react.edge-light.cjs.js"
            },
            browser: {
                module: "./dist/emotion-react.browser.esm.js",
                "import": "./dist/emotion-react.browser.cjs.mjs",
                "default": "./dist/emotion-react.browser.cjs.js"
            },
            module: "./dist/emotion-react.esm.js",
            "import": "./dist/emotion-react.cjs.mjs",
            "default": "./dist/emotion-react.cjs.js"
        },
        "./jsx-runtime": {
            types: {
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
                    "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
                    "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
                },
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
            },
            "edge-light": {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            worker: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            workerd: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
            },
            browser: {
                module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
                "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
            },
            module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
            "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
            "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
        },
        "./_isolated-hnrs": {
            types: {
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
                    "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
                    "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
                },
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
            },
            "edge-light": {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            worker: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            workerd: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
            },
            browser: {
                module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
                "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
            },
            module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
            "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
            "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
        },
        "./jsx-dev-runtime": {
            types: {
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
            },
            development: {
                "edge-light": {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                worker: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                workerd: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
                },
                browser: {
                    module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
                    "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
                    "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
                },
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
            },
            "edge-light": {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            worker: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            workerd: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
            },
            browser: {
                module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
                "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
            },
            module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
            "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
            "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
        },
        "./package.json": "./package.json",
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
            types: {
                "import": "./macro.d.mts",
                "default": "./macro.d.ts"
            },
            "default": "./macro.js"
        }
    },
    imports: {
        "#is-development": {
            development: "./src/conditions/true.ts",
            "default": "./src/conditions/false.ts"
        },
        "#is-browser": {
            "edge-light": "./src/conditions/false.ts",
            workerd: "./src/conditions/false.ts",
            worker: "./src/conditions/false.ts",
            browser: "./src/conditions/true.ts",
            "default": "./src/conditions/is-browser.ts"
        }
    },
    files: [
        "src",
        "dist",
        "jsx-runtime",
        "jsx-dev-runtime",
        "_isolated-hnrs",
        "types/css-prop.d.ts",
        "macro.*"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
        "test:typescript": "dtslint types"
    },
    dependencies: {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
        react: ">=16.8.0"
    },
    peerDependenciesMeta: {
        "@types/react": {
            optional: true
        }
    },
    devDependencies: {
        "@definitelytyped/dtslint": "0.0.112",
        "@emotion/css": "11.13.5",
        "@emotion/css-prettifier": "1.2.0",
        "@emotion/server": "11.11.0",
        "@emotion/styled": "11.14.0",
        "@types/hoist-non-react-statics": "^3.3.5",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^5.4.5"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
        access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
        entrypoints: [
            "./index.ts",
            "./jsx-runtime.ts",
            "./jsx-dev-runtime.ts",
            "./_isolated-hnrs.ts"
        ],
        umdName: "emotionReact",
        exports: {
            extra: {
                "./types/css-prop": "./types/css-prop.d.ts",
                "./macro": {
                    types: {
                        "import": "./macro.d.mts",
                        "default": "./macro.d.ts"
                    },
                    "default": "./macro.js"
                }
            }
        }
    }
};
var jsx = function jsx(type, props) {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    if (props == null || !__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"].call(props, 'css')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"].apply(undefined, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E"];
    createElementArgArray[1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(type, props);
    for(var i = 2; i < argsLength; i++){
        createElementArgArray[i] = args[i];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"].apply(null, createElementArgArray);
};
(function(_jsx) {
    var JSX;
    (function(_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var Global = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && (// probably using the custom createElement which
    // means it will be turned into a className prop
    // I don't really want to add it to the type since it shouldn't be used
    'className' in props && props.className || 'css' in props && props.css)) {
        console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
        warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])([
        styles
    ], undefined, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"]));
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]) {
        var _ref;
        var serializedNames = serialized.name;
        var serializedStyles = serialized.styles;
        var next = serialized.next;
        while(next !== undefined){
            serializedNames += ' ' + next.name;
            serializedStyles += next.styles;
            next = next.next;
        }
        var shouldCache = cache.compat === true;
        var rules = cache.insert("", {
            name: serializedNames,
            styles: serializedStyles
        }, cache.sheet, shouldCache);
        if (shouldCache) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref));
    } // yes, i know these hooks are used conditionally
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything
    var sheetRef = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffectWithLayoutFallback"])(function() {
        var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675
        var sheet = new cache.sheet.constructor({
            key: key,
            nonce: cache.sheet.nonce,
            container: cache.sheet.container,
            speedy: cache.sheet.isSpeedy
        });
        var rehydrating = false;
        var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
        if (cache.sheet.tags.length) {
            sheet.before = cache.sheet.tags[0];
        }
        if (node !== null) {
            rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s
            node.setAttribute('data-emotion', key);
            sheet.hydrate([
                node
            ]);
        }
        sheetRef.current = [
            sheet,
            rehydrating
        ];
        return function() {
            sheet.flush();
        };
    }, [
        cache
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffectWithLayoutFallback"])(function() {
        var sheetRefCurrent = sheetRef.current;
        var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
        if (rehydrating) {
            sheetRefCurrent[1] = false;
            return;
        }
        if (serialized.next !== undefined) {
            // insert keyframes
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized.next, true);
        }
        if (sheet.tags.length) {
            // if this doesn't exist then it will be null so the style element will be appended
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            sheet.before = element;
            sheet.flush();
        }
        cache.insert("", serialized, sheet, false);
    }, [
        cache,
        serialized.name
    ]);
    return null;
});
{
    Global.displayName = 'EmotionGlobal';
}function css() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])(args);
}
function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
        name: name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
    };
}
var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = '';
    for(; i < len; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case 'boolean':
                break;
            case 'object':
                {
                    if (Array.isArray(arg)) {
                        toAdd = classnames(arg);
                    } else {
                        if (arg.styles !== undefined && arg.name !== undefined) {
                            console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
                        }
                        toAdd = '';
                        for(var k in arg){
                            if (arg[k] && k) {
                                toAdd && (toAdd += ' ');
                                toAdd += k;
                            }
                        }
                    }
                    break;
                }
            default:
                {
                    toAdd = arg;
                }
        }
        if (toAdd) {
            cls && (cls += ' ');
            cls += toAdd;
        }
    }
    return cls;
};
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
        return className;
    }
    return rawClassName + css(registeredStyles);
}
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    var rules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])(function() {
        var rules = '';
        for(var i = 0; i < serializedArr.length; i++){
            var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serializedArr[i], false);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"] && res !== undefined) {
                rules += res;
            }
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]) {
            return rules;
        }
    });
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"] && rules.length !== 0) {
        var _ref2;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function(serialized) {
            return serialized.name;
        }).join(' '), _ref2.dangerouslySetInnerHTML = {
            __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }
    return null;
};
var ClassNames = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css = function css() {
        if (hasRendered && isDevelopment) {
            throw new Error('css can only be used during render');
        }
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])(args, cache.registered);
        serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var cx = function cx() {
        if (hasRendered && isDevelopment) {
            throw new Error('cx can only be used during render');
        }
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        return merge(cache.registered, css, classnames(args));
    };
    var content = {
        css: css,
        cx: cx,
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"])
    };
    var ele = props.children(content);
    hasRendered = true;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
        cache: cache,
        serializedArr: serializedArr
    }), ele);
});
{
    ClassNames.displayName = 'EmotionClassNames';
}{
    var isBrowser = typeof document !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked
    var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';
    if (isBrowser && !isTestEnv) {
        // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
        var globalContext = typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
         : isBrowser ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g;
        var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";
        if (globalContext[globalKey]) {
            console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
        }
        globalContext[globalKey] = true;
    }
};
}),
"[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export w as withEmotionCache>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withEmotionCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@emotion/utils/dist/emotion-utils.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRegisteredStyles",
    ()=>getRegisteredStyles,
    "insertStyles",
    ()=>insertStyles,
    "registerStyles",
    ()=>registerStyles
]);
var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function(className) {
        if (registered[className] !== undefined) {
            registeredStyles.push(registered[className] + ";");
        } else if (className) {
            rawClassName += className + " ";
        }
    });
    return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
        cache.registered[className] = serialized.styles;
    }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
        var stylesForSSR = '';
        var current = serialized;
        do {
            var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
            if (!isBrowser && maybeStyles !== undefined) {
                stylesForSSR += maybeStyles;
            }
            current = current.next;
        }while (current !== undefined)
        if (!isBrowser && stylesForSSR.length !== 0) {
            return stylesForSSR;
        }
    }
};
;
}),
"[project]/authorization_form/node_modules/@emotion/hash/dist/emotion-hash.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
__turbopack_context__.s([
    "default",
    ()=>murmur2
]);
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
;
}),
"[project]/authorization_form/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unitlessKeys
]);
var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
;
}),
"[project]/authorization_form/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeStyles",
    ()=>serializeStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/hash/dist/emotion-hash.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-ssr] (ecmascript)");
;
;
;
var isDevelopment = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
    switch(key){
        case 'animation':
        case 'animationName':
            {
                if (typeof value === 'string') {
                    return value.replace(animationRegex, function(match, p1, p2) {
                        cursor = {
                            name: p1,
                            styles: p2,
                            next: cursor
                        };
                        return p1;
                    });
                }
            }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
        return value + 'px';
    }
    return value;
};
{
    var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = [
        'normal',
        'none',
        'initial',
        'inherit',
        'unset'
    ];
    var oldProcessStyleValue = processStyleValue;
    var msPattern = /^-ms-/;
    var hyphenPattern = /-(.)/g;
    var hyphenatedCache = {};
    processStyleValue = function processStyleValue(key, value) {
        if (key === 'content') {
            if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
                throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
            }
        }
        var processed = oldProcessStyleValue(key, value);
        if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
            hyphenatedCache[key] = true;
            console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function(str, _char) {
                return _char.toUpperCase();
            }) + "?");
        }
        return processed;
    };
}var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
        return '';
    }
    var componentSelector = interpolation;
    if (componentSelector.__emotion_styles !== undefined) {
        if (String(componentSelector) === 'NO_COMPONENT_SELECTOR') {
            throw new Error(noComponentSelectorMessage);
        }
        return componentSelector;
    }
    switch(typeof interpolation){
        case 'boolean':
            {
                return '';
            }
        case 'object':
            {
                var keyframes = interpolation;
                if (keyframes.anim === 1) {
                    cursor = {
                        name: keyframes.name,
                        styles: keyframes.styles,
                        next: cursor
                    };
                    return keyframes.name;
                }
                var serializedStyles = interpolation;
                if (serializedStyles.styles !== undefined) {
                    var next = serializedStyles.next;
                    if (next !== undefined) {
                        // not the most efficient thing ever but this is a pretty rare case
                        // and there will be very few iterations of this generally
                        while(next !== undefined){
                            cursor = {
                                name: next.name,
                                styles: next.styles,
                                next: cursor
                            };
                            next = next.next;
                        }
                    }
                    var styles = serializedStyles.styles + ";";
                    return styles;
                }
                return createStringFromObject(mergedProps, registered, interpolation);
            }
        case 'function':
            {
                if (mergedProps !== undefined) {
                    var previousCursor = cursor;
                    var result = interpolation(mergedProps);
                    cursor = previousCursor;
                    return handleInterpolation(mergedProps, registered, result);
                } else {
                    console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
                }
                break;
            }
        case 'string':
            {
                var matched = [];
                var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
                    var fakeVarName = "animation" + matched.length;
                    matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
                    return "${" + fakeVarName + "}";
                });
                if (matched.length) {
                    console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, [
                        "`" + replaced + "`"
                    ]).join('\n') + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
                }
            }
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    var asString = interpolation;
    if (registered == null) {
        return asString;
    }
    var cached = registered[asString];
    return cached !== undefined ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) {
        for(var i = 0; i < obj.length; i++){
            string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
        }
    } else {
        for(var key in obj){
            var value = obj[key];
            if (typeof value !== 'object') {
                var asString = value;
                if (registered != null && registered[asString] !== undefined) {
                    string += key + "{" + registered[asString] + "}";
                } else if (isProcessableValue(asString)) {
                    string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
                }
            } else {
                if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
                    throw new Error(noComponentSelectorMessage);
                }
                if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
                    for(var _i = 0; _i < value.length; _i++){
                        if (isProcessableValue(value[_i])) {
                            string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
                        }
                    }
                } else {
                    var interpolated = handleInterpolation(mergedProps, registered, value);
                    switch(key){
                        case 'animation':
                        case 'animationName':
                            {
                                string += processStyleName(key) + ":" + interpolated + ";";
                                break;
                            }
                        default:
                            {
                                if (key === 'undefined') {
                                    console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                                }
                                string += key + "{" + interpolated + "}";
                            }
                    }
                }
            }
        }
    }
    return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;
function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
        return args[0];
    }
    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings);
    } else {
        var asTemplateStringsArr = strings;
        if (asTemplateStringsArr[0] === undefined) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += asTemplateStringsArr[0];
    } // we start at 1 since we've already handled the first arg
    for(var i = 1; i < args.length; i++){
        styles += handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) {
            var templateStringsArr = strings;
            if (templateStringsArr[i] === undefined) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles += templateStringsArr[i];
        }
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time
    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match = labelPattern.exec(styles)) !== null){
        identifierName += '-' + match[1];
    }
    var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(styles) + identifierName;
    {
        var devStyles = {
            name: name,
            styles: styles,
            next: cursor,
            toString: function toString() {
                return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            }
        };
        return devStyles;
    }
}
;
}),
"[project]/authorization_form/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInsertionEffectAlwaysWithSyncFallback",
    ()=>useInsertionEffectAlwaysWithSyncFallback,
    "useInsertionEffectWithLayoutFallback",
    ()=>useInsertionEffectWithLayoutFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var isBrowser = typeof document !== 'undefined';
var syncFallback = function syncFallback(create) {
    return create();
};
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__['useInsertion' + 'Effect'] ? __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser ? syncFallback : useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useLayoutEffect;
;
}),
"[project]/authorization_form/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/dist/emotion-react.development.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function isEmpty(obj) {
    return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
    const { styles, defaultTheme = {} } = props;
    const globalStyles = typeof styles === 'function' ? (themeInput)=>styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Global"], {
        styles: globalStyles
    });
}
("TURBOPACK compile-time truthy", 1) ? GlobalStyles.propTypes = {
    defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    styles: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
    ])
} : "TURBOPACK unreachable";
}),
"[project]/authorization_form/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript) <export default as GlobalStyles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@mui/styled-engine/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>styled,
    "internal_processStyles",
    ()=>internal_processStyles,
    "internal_serializeStyles",
    ()=>internal_serializeStyles
]);
/* eslint-disable no-underscore-dangle */ var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
function styled(tag, options) {
    const stylesFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tag, options);
    if ("TURBOPACK compile-time truthy", 1) {
        return (...styles)=>{
            const component = typeof tag === 'string' ? `"${tag}"` : 'component';
            if (styles.length === 0) {
                console.error([
                    `MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`,
                    'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'
                ].join('\n'));
            } else if (styles.some((style)=>style === undefined)) {
                console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
            }
            return stylesFactory(...styles);
        };
    }
    //TURBOPACK unreachable
    ;
}
const internal_processStyles = (tag, processor)=>{
    // Emotion attaches all the styles as `__emotion_styles`.
    // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
    if (Array.isArray(tag.__emotion_styles)) {
        tag.__emotion_styles = processor(tag.__emotion_styles);
    }
};
// Emotion only accepts an array, but we want to avoid allocations
const wrapper = [];
function internal_serializeStyles(styles) {
    wrapper[0] = styles;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])(wrapper);
}
;
;
;
}),
"[project]/authorization_form/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-ssr] (ecmascript)");
;
// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/authorization_form/node_modules/@emotion/styled/base/dist/emotion-styled-base.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export w as withEmotionCache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export T as ThemeContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/utils/dist/emotion-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var isBrowser = typeof document !== 'undefined';
var isDevelopment = true;
var testOmitPropsOnStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== 'function' && isReal) {
        shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, isStringTag);
    var rules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized, isStringTag);
    });
    if (!isBrowser && rules !== undefined) {
        var _ref2;
        var serializedNames = serialized.name;
        var next = serialized.next;
        while(next !== undefined){
            serializedNames += ' ' + next.name;
            next = next.next;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
            __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }
    return null;
};
var createStyled = function createStyled(tag, options) {
    {
        if (tag === undefined) {
            throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
        }
    }
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== undefined) {
        identifierName = options.label;
        targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function() {
        // eslint-disable-next-line prefer-rest-params
        var args = arguments;
        var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== undefined) {
            styles.push("label:" + identifierName + ";");
        }
        if (args[0] == null || args[0].raw === undefined) {
            // eslint-disable-next-line prefer-spread
            styles.push.apply(styles, args);
        } else {
            var templateStringsArr = args[0];
            if (templateStringsArr[0] === undefined) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles.push(templateStringsArr[0]);
            var len = args.length;
            var i = 1;
            for(; i < len; i++){
                if (templateStringsArr[i] === undefined) {
                    console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
                }
                styles.push(args[i], templateStringsArr[i]);
            }
        }
        var Styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__["withEmotionCache"])(function(props, cache, ref) {
            var FinalTag = shouldUseAs && props.as || baseTag;
            var className = '';
            var classInterpolations = [];
            var mergedProps = props;
            if (props.theme == null) {
                mergedProps = {};
                for(var key in props){
                    mergedProps[key] = props[key];
                }
                mergedProps.theme = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__["ThemeContext"]);
            }
            if (typeof props.className === 'string') {
                className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(cache.registered, classInterpolations, props.className);
            } else if (props.className != null) {
                className = props.className + " ";
            }
            var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name;
            if (targetClassName !== undefined) {
                className += " " + targetClassName;
            }
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
            var newProps = {};
            for(var _key in props){
                if (shouldUseAs && _key === 'as') continue;
                if (finalShouldForwardProp(_key)) {
                    newProps[_key] = props[_key];
                }
            }
            newProps.className = className;
            if (ref) {
                newProps.ref = ref;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Insertion, {
                cache: cache,
                serialized: serialized,
                isStringTag: typeof FinalTag === 'string'
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](FinalTag, newProps));
        });
        Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles;
        Styled.__emotion_forwardProp = shouldForwardProp;
        Object.defineProperty(Styled, 'toString', {
            value: function value() {
                if (targetClassName === undefined && isDevelopment) {
                    return 'NO_COMPONENT_SELECTOR';
                }
                return "." + targetClassName;
            }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
            var newStyled = createStyled(nextTag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, options, nextOptions, {
                shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
            }));
            return newStyled.apply(void 0, styles);
        };
        return Styled;
    };
};
;
}),
"[project]/authorization_form/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/styled/base/dist/emotion-styled-base.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/utils/dist/emotion-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];
// bind it to avoid mutating the original function
var styled = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(null);
tags.forEach(function(tagName) {
    styled[tagName] = styled(tagName);
});
;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '$$material';
}),
"[project]/authorization_form/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const _excluded = [
    "theme"
];
;
;
;
;
;
function ThemeProvider(_ref) {
    let { theme: themeInput } = _ref, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    const scopedTheme = themeInput[__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]];
    let finalTheme = scopedTheme || themeInput;
    if (typeof themeInput !== 'function') {
        if (scopedTheme && !scopedTheme.vars) {
            finalTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, scopedTheme, {
                vars: null
            });
        } else if (themeInput && !themeInput.vars) {
            finalTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, themeInput, {
                vars: null
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        themeId: scopedTheme ? __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : undefined,
        theme: finalTheme
    }));
}
("TURBOPACK compile-time truthy", 1) ? ThemeProvider.propTypes = {
    /**
   * Your component tree.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A theme object. You can provide a function to extend the outer theme.
   */ theme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
    ]).isRequired
} : "TURBOPACK unreachable";
}),
"[project]/authorization_form/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDefaultProps",
    ()=>useDefaultProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DefaultPropsProvider(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props));
}
("TURBOPACK compile-time truthy", 1) ? DefaultPropsProvider.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * @ignore
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object.isRequired
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = DefaultPropsProvider;
function useDefaultProps(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])(params);
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/createMixins.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createMixins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
;
function createMixins(breakpoints, mixins) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        toolbar: {
            minHeight: 56,
            [breakpoints.up('xs')]: {
                '@media (orientation: landscape)': {
                    minHeight: 48
                }
            },
            [breakpoints.up('sm')]: {
                minHeight: 64
            }
        }
    }, mixins);
}
}),
"[project]/authorization_form/node_modules/@mui/material/colors/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const common = {
    black: '#000',
    white: '#fff'
};
const __TURBOPACK__default__export__ = common;
}),
"[project]/authorization_form/node_modules/@mui/material/colors/grey.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
};
const __TURBOPACK__default__export__ = grey;
}),
"[project]/authorization_form/node_modules/@mui/material/colors/purple.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
};
const __TURBOPACK__default__export__ = purple;
}),
"[project]/authorization_form/node_modules/@mui/material/colors/red.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
};
const __TURBOPACK__default__export__ = red;
}),
"[project]/authorization_form/node_modules/@mui/material/colors/orange.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
};
const __TURBOPACK__default__export__ = orange;
}),
"[project]/authorization_form/node_modules/@mui/material/colors/blue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
};
const __TURBOPACK__default__export__ = blue;
}),
"[project]/authorization_form/node_modules/@mui/material/colors/lightBlue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
};
const __TURBOPACK__default__export__ = lightBlue;
}),
"[project]/authorization_form/node_modules/@mui/material/colors/green.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
};
const __TURBOPACK__default__export__ = green;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/createPalette.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dark",
    ()=>dark,
    "default",
    ()=>createPalette,
    "light",
    ()=>light
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$grey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/grey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/purple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/red.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/orange.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/blue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/lightBlue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/colors/green.js [app-ssr] (ecmascript)");
;
;
;
const _excluded = [
    "mode",
    "contrastThreshold",
    "tonalOffset"
];
;
;
;
;
;
;
;
;
;
;
const light = {
    // The colors used to style the text.
    text: {
        // The most important text.
        primary: 'rgba(0, 0, 0, 0.87)',
        // Secondary text.
        secondary: 'rgba(0, 0, 0, 0.6)',
        // Disabled text have even lower visual prominence.
        disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
        paper: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].white,
        default: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].white
    },
    // The colors used to style the action elements.
    action: {
        // The color of an active action like an icon button.
        active: 'rgba(0, 0, 0, 0.54)',
        // The color of an hovered action.
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: 'rgba(0, 0, 0, 0.26)',
        // The background color of a disabled action.
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12
    }
};
const dark = {
    text: {
        primary: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].white,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
        paper: '#121212',
        default: '#121212'
    },
    action: {
        active: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].white,
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.24
    }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
            intent[direction] = intent[shade];
        } else if (direction === 'light') {
            intent.light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lighten"])(intent.main, tonalOffsetLight);
        } else if (direction === 'dark') {
            intent.dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darken"])(intent.main, tonalOffsetDark);
        }
    }
}
function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][200],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][50],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][400]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][400],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][800]
    };
}
function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][200],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][50],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][400]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][500],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][300],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700]
    };
}
function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][500],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][400],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][800]
    };
}
function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][400],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][500],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][900]
    };
}
function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][400],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][800],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][500],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][900]
    };
}
function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][400],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: '#ed6c02',
        // closest to orange[800] that pass 3:1.
        light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][500],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][900]
    };
}
function createPalette(palette) {
    const { mode = 'light', contrastThreshold = 3, tonalOffset = 0.2 } = palette, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(palette, _excluded);
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    function getContrastText(background) {
        const contrastText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContrastRatio"])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
        if ("TURBOPACK compile-time truthy", 1) {
            const contrast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContrastRatio"])(background, contrastText);
            if (contrast < 3) {
                console.error([
                    `MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
                    'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
                    'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'
                ].join('\n'));
            }
        }
        return contrastText;
    }
    const augmentColor = ({ color, name, mainShade = 500, lightShade = 300, darkShade = 700 })=>{
        color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, color);
        if (!color.main && color[mainShade]) {
            color.main = color[mainShade];
        }
        if (!color.hasOwnProperty('main')) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : "TURBOPACK unreachable");
        }
        if (typeof color.main !== 'string') {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : "TURBOPACK unreachable");
        }
        addLightOrDark(color, 'light', lightShade, tonalOffset);
        addLightOrDark(color, 'dark', darkShade, tonalOffset);
        if (!color.contrastText) {
            color.contrastText = getContrastText(color.main);
        }
        return color;
    };
    const modes = {
        dark,
        light
    };
    if ("TURBOPACK compile-time truthy", 1) {
        if (!modes[mode]) {
            console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
        }
    }
    const paletteOutput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        // A collection of common colors.
        common: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
        // prevent mutable object.
        // The palette mode, can be light or dark.
        mode,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor({
            color: primary,
            name: 'primary'
        }),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor({
            color: secondary,
            name: 'secondary',
            mainShade: 'A400',
            lightShade: 'A200',
            darkShade: 'A700'
        }),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor({
            color: error,
            name: 'error'
        }),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor({
            color: warning,
            name: 'warning'
        }),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor({
            color: info,
            name: 'info'
        }),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor({
            color: success,
            name: 'success'
        }),
        // The grey colors.
        grey: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$grey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText,
        // Generate a rich color object.
        augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createTypography
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "fontFamily",
    "fontSize",
    "fontWeightLight",
    "fontWeightRegular",
    "fontWeightMedium",
    "fontWeightBold",
    "htmlFontSize",
    "allVariants",
    "pxToRem"
];
;
function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
    textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
    const _ref = typeof typography === 'function' ? typography(palette) : typography, { fontFamily = defaultFontFamily, // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, fontWeightBold = 700, // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16, // Apply the CSS properties to all the variants.
    allVariants, pxToRem: pxToRem2 } = _ref, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof fontSize !== 'number') {
            console.error('MUI: `fontSize` is required to be a number.');
        }
        if (typeof htmlFontSize !== 'number') {
            console.error('MUI: `htmlFontSize` is required to be a number.');
        }
    }
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size)=>`${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            fontFamily,
            fontWeight,
            fontSize: pxToRem(size),
            // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
            lineHeight
        }, fontFamily === defaultFontFamily ? {
            letterSpacing: `${round(letterSpacing / size)}em`
        } : {}, casing, allVariants);
    const variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
        // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
        inherit: {
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit'
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        htmlFontSize,
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold
    }, variants), other, {
        clone: false // No need to clone deep
    });
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/shadows.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
    return [
        `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
        `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
        `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`
    ].join(',');
}
// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = [
    'none',
    createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];
const __TURBOPACK__default__export__ = shadows;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/createTransitions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createTransitions,
    "duration",
    ()=>duration,
    "easing",
    ()=>easing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "duration",
    "easing",
    "delay"
];
const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};
const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
};
function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
    if (!height) {
        return 0;
    }
    const constant = height / 36;
    // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
    const mergedEasing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, easing, inputTransitions.easing);
    const mergedDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, duration, inputTransitions.duration);
    const create = (props = [
        'all'
    ], options = {})=>{
        const { duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay = 0 } = options, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options, _excluded);
        if ("TURBOPACK compile-time truthy", 1) {
            const isString = (value)=>typeof value === 'string';
            // IE11 support, replace with Number.isNaN
            // eslint-disable-next-line no-restricted-globals
            const isNumber = (value)=>!isNaN(parseFloat(value));
            if (!isString(props) && !Array.isArray(props)) {
                console.error('MUI: Argument "props" must be a string or Array.');
            }
            if (!isNumber(durationOption) && !isString(durationOption)) {
                console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
            }
            if (!isString(easingOption)) {
                console.error('MUI: Argument "easing" must be a string.');
            }
            if (!isNumber(delay) && !isString(delay)) {
                console.error('MUI: Argument "delay" must be a number or a string.');
            }
            if (typeof options !== 'object') {
                console.error([
                    'MUI: Secong argument of transition.create must be an object.',
                    "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"
                ].join('\n'));
            }
            if (Object.keys(other).length !== 0) {
                console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
            }
        }
        return (Array.isArray(props) ? props : [
            props
        ]).map((animatedProp)=>`${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        getAutoHeightDuration,
        create
    }, inputTransitions, {
        easing: mergedEasing,
        duration: mergedDuration
    });
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/zIndex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};
const __TURBOPACK__default__export__ = zIndex;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMuiTheme",
    ()=>createMuiTheme,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-ssr] (ecmascript) <export default as unstable_defaultSxConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/createTheme/createTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createMixins.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createPalette.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/shadows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTransitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$zIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/zIndex.js [app-ssr] (ecmascript)");
;
;
;
const _excluded = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape"
];
;
;
;
;
;
;
;
;
;
;
function createTheme(options = {}, ...args) {
    const { mixins: mixinsInput = {}, palette: paletteInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {} } = options, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options, _excluded);
    if (options.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
    // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
    options.generateCssVars === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : "TURBOPACK unreachable");
    }
    const palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(paletteInput);
    const systemTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options);
    let muiTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(systemTheme, {
        mixins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(systemTheme.breakpoints, mixinsInput),
        palette,
        // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
        shadows: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].slice(),
        typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(palette, typographyInput),
        transitions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(transitionsInput),
        zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$zIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
    });
    muiTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(muiTheme, other);
    muiTheme = args.reduce((acc, argument)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(acc, argument), muiTheme);
    if ("TURBOPACK compile-time truthy", 1) {
        // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
        const stateClasses = [
            'active',
            'checked',
            'completed',
            'disabled',
            'error',
            'expanded',
            'focused',
            'focusVisible',
            'required',
            'selected'
        ];
        const traverse = (node, component)=>{
            let key;
            // eslint-disable-next-line guard-for-in, no-restricted-syntax
            for(key in node){
                const child = node[key];
                if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        const stateClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('', key);
                        console.error([
                            `MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`,
                            'You can not override it like this: ',
                            JSON.stringify(node, null, 2),
                            '',
                            `Instead, you need to use the '&.${stateClass}' syntax:`,
                            JSON.stringify({
                                root: {
                                    [`&.${stateClass}`]: child
                                }
                            }, null, 2),
                            '',
                            'https://mui.com/r/state-classes-guide'
                        ].join('\n'));
                    }
                    // Remove the style to prevent global conflicts.
                    node[key] = {};
                }
            }
        };
        Object.keys(muiTheme.components).forEach((component)=>{
            const styleOverrides = muiTheme.components[component].styleOverrides;
            if (styleOverrides && component.indexOf('Mui') === 0) {
                traverse(styleOverrides, component);
            }
        });
    }
    muiTheme.unstable_sxConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__["unstable_defaultSxConfig"], other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            sx: props,
            theme: this
        });
    };
    return muiTheme;
}
let warnedOnce = false;
function createMuiTheme(...args) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedOnce) {
            warnedOnce = true;
            console.error([
                'MUI: the createMuiTheme function was renamed to createTheme.',
                '',
                "You should use `import { createTheme } from '@mui/material/styles'`"
            ].join('\n'));
        }
    }
    return createTheme(...args);
}
const __TURBOPACK__default__export__ = createTheme;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)");
'use client';
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = defaultTheme;
}),
"[project]/authorization_form/node_modules/@mui/material/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript) <export default as GlobalStyles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function GlobalStyles(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__["GlobalStyles"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        themeId: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
}
("TURBOPACK compile-time truthy", 1) ? GlobalStyles.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The styles you want to apply globally.
   */ styles: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = GlobalStyles;
}),
"[project]/authorization_form/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "body",
    ()=>body,
    "default",
    ()=>__TURBOPACK__default__export__,
    "html",
    ()=>html,
    "styles",
    ()=>styles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const html = (theme, enableColorScheme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        WebkitFontSmoothing: 'antialiased',
        // Antialiasing.
        MozOsxFontSmoothing: 'grayscale',
        // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box',
        // Fix font resize problem in iOS
        WebkitTextSizeAdjust: '100%'
    }, enableColorScheme && !theme.vars && {
        colorScheme: theme.palette.mode
    });
const body = (theme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        color: (theme.vars || theme).palette.text.primary
    }, theme.typography.body1, {
        backgroundColor: (theme.vars || theme).palette.background.default,
        '@media print': {
            // Save printer ink.
            backgroundColor: (theme.vars || theme).palette.common.white
        }
    });
const styles = (theme, enableColorScheme = false)=>{
    var _theme$components;
    const colorSchemeStyles = {};
    if (enableColorScheme && theme.colorSchemes) {
        Object.entries(theme.colorSchemes).forEach(([key, scheme])=>{
            var _scheme$palette;
            colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, '')] = {
                colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
            };
        });
    }
    let defaultStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        html: html(theme, enableColorScheme),
        '*, *::before, *::after': {
            boxSizing: 'inherit'
        },
        'strong, b': {
            fontWeight: theme.typography.fontWeightBold
        },
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            margin: 0
        }, body(theme), {
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            '&::backdrop': {
                backgroundColor: (theme.vars || theme).palette.background.default
            }
        })
    }, colorSchemeStyles);
    const themeOverrides = (_theme$components = theme.components) == null || (_theme$components = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components.styleOverrides;
    if (themeOverrides) {
        defaultStyles = [
            defaultStyles,
            themeOverrides
        ];
    }
    return defaultStyles;
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */ function CssBaseline(inProps) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiCssBaseline'
    });
    const { children, enableColorScheme = false } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                styles: (theme)=>styles(theme, enableColorScheme)
            }),
            children
        ]
    });
}
("TURBOPACK compile-time truthy", 1) ? CssBaseline.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * You can wrap a node.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */ enableColorScheme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CssBaseline;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/timeoutManager.ts
__turbopack_context__.s([
    "TimeoutManager",
    ()=>TimeoutManager,
    "defaultTimeoutProvider",
    ()=>defaultTimeoutProvider,
    "systemSetTimeoutZero",
    ()=>systemSetTimeoutZero,
    "timeoutManager",
    ()=>timeoutManager
]);
var defaultTimeoutProvider = {
    // We need the wrapper function syntax below instead of direct references to
    // global setTimeout etc.
    //
    // BAD: `setTimeout: setTimeout`
    // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
    //
    // If we use direct references here, then anything that wants to spy on or
    // replace the global setTimeout (like tests) won't work since we'll already
    // have a hard reference to the original implementation at the time when this
    // file was imported.
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
var TimeoutManager = class {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support ReturnType<typeof setTimeout>, which is infeasible.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    #provider = defaultTimeoutProvider;
    #providerCalled = false;
    setTimeoutProvider(provider) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.#providerCalled && provider !== this.#provider) {
                console.error(`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`, {
                    previous: this.#provider,
                    provider
                });
            }
        }
        this.#provider = provider;
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = false;
        }
    }
    setTimeout(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setTimeout(callback, delay);
    }
    clearTimeout(timeoutId) {
        this.#provider.clearTimeout(timeoutId);
    }
    setInterval(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setInterval(callback, delay);
    }
    clearInterval(intervalId) {
        this.#provider.clearInterval(intervalId);
    }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}
;
 //# sourceMappingURL=timeoutManager.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveEnabled",
    ()=>resolveEnabled,
    "resolveStaleTime",
    ()=>resolveStaleTime,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
var isServer = "undefined" === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    }
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
                throw error;
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
        }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") {
        return throwOnError(...params);
    }
    return !!throwOnError;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/notifyManager.ts
__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
var defaultScheduler = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["systemSetTimeoutZero"];
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/subscribable.ts
__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
;
 //# sourceMappingURL=subscribable.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/focusManager.ts
__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        });
    }
    setFocused(focused) {
        const changed = this.#focused !== focused;
        if (changed) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        if (typeof this.#focused === "boolean") {
            return this.#focused;
        }
        return globalThis.document?.visibilityState !== "hidden";
    }
};
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/onlineManager.ts
__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
        const changed = this.#online !== online;
        if (changed) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return this.#online;
    }
};
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/thenable.ts
__turbopack_context__.s([
    "pendingThenable",
    ()=>pendingThenable,
    "tryResolveSync",
    ()=>tryResolveSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    let data;
    promise.then((result)=>{
        data = result;
        return result;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"])?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    if (data !== void 0) {
        return {
            data
        };
    }
    return void 0;
}
;
 //# sourceMappingURL=thenable.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/retryer.ts
__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            const error = new CancelledError(cancelOptions);
            reject(error);
            config.onCancel?.(error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved() || canContinue()) {
                    continueResolve(value);
                }
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) {
                config.onContinue?.();
            }
        });
    };
    const run = ()=>{
        if (isResolved()) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved()) {
                return;
            }
            const retry = config.retry ?? (__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn?.();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/removable.ts
__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var Removable = class {
    #gcTimeout;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            this.#gcTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime);
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
        if (this.#gcTimeout) {
            __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
 //# sourceMappingURL=removable.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/query.ts
__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)");
;
;
;
;
var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Removable"] {
    #initialState;
    #revertState;
    #cache;
    #client;
    #retryer;
    #defaultOptions;
    #abortSignalConsumed;
    constructor(config){
        super();
        this.#abortSignalConsumed = false;
        this.#defaultOptions = config.defaultOptions;
        this.setOptions(config.options);
        this.observers = [];
        this.#client = config.client;
        this.#cache = this.#client.getQueryCache();
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        this.#initialState = getDefaultState(this.options);
        this.state = config.state ?? this.#initialState;
        this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get promise() {
        return this.#retryer?.promise;
    }
    setOptions(options) {
        this.options = {
            ...this.#defaultOptions,
            ...options
        };
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setData(defaultState.data, {
                    updatedAt: defaultState.dataUpdatedAt,
                    manual: true
                });
                this.#initialState = defaultState;
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            this.#cache.remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        this.#dispatch({
            data,
            type: "success",
            dataUpdatedAt: options?.updatedAt,
            manual: options?.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        this.#dispatch({
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        const promise = this.#retryer?.promise;
        this.#retryer?.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState(this.#initialState);
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(observer.options.staleTime, this) === "static");
        }
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(staleTime = 0) {
        if (this.state.data === void 0) {
            return true;
        }
        if (staleTime === "static") {
            return false;
        }
        if (this.state.isInvalidated) {
            return true;
        }
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    onOnline() {
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            this.#cache.notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if (this.#retryer) {
                    if (this.#abortSignalConsumed) {
                        this.#retryer.cancel({
                            revert: true
                        });
                    } else {
                        this.#retryer.cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            this.#cache.notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            this.#dispatch({
                type: "invalidate"
            });
        }
    }
    async fetch(options, fetchOptions) {
        if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        this.#retryer?.status() !== "rejected") {
            if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                this.cancel({
                    silent: true
                });
            } else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    this.#abortSignalConsumed = true;
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: this.#client,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            this.#abortSignalConsumed = false;
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#client,
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        this.options.behavior?.onFetch(context, this);
        this.#revertState = this.state;
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
            this.#dispatch({
                type: "fetch",
                meta: context.fetchOptions?.meta
            });
        }
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions?.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancelledError"] && error.revert) {
                    this.setState({
                        ...this.#revertState,
                        fetchStatus: "idle"
                    });
                }
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        });
        try {
            const data = await this.#retryer.start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                }
                throw new Error(`${this.queryHash} data is undefined`);
            }
            this.setData(data);
            this.#cache.config.onSuccess?.(data, this);
            this.#cache.config.onSettled?.(data, this.state.error, this);
            return data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) {
                    return this.#retryer.promise;
                } else if (error.revert) {
                    if (this.state.data === void 0) {
                        throw error;
                    }
                    return this.state.data;
                }
            }
            this.#dispatch({
                type: "error",
                error
            });
            this.#cache.config.onError?.(error, this);
            this.#cache.config.onSettled?.(this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        fetchFailureCount: action.failureCount,
                        fetchFailureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...state,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...state,
                        ...fetchState(state.data, this.options),
                        fetchMeta: action.meta ?? null
                    };
                case "success":
                    const newState = {
                        ...state,
                        data: action.data,
                        dataUpdateCount: state.dataUpdateCount + 1,
                        dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
                        error: null,
                        isInvalidated: false,
                        status: "success",
                        ...!action.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    this.#revertState = action.manual ? newState : void 0;
                    return newState;
                case "error":
                    const error = action.error;
                    return {
                        ...state,
                        error,
                        errorUpdateCount: state.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: state.fetchFailureCount + 1,
                        fetchFailureReason: error,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...state,
                        isInvalidated: true
                    };
                case "setState":
                    return {
                        ...state,
                        ...action.state
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.observers.forEach((observer)=>{
                observer.onQueryUpdate();
            });
            this.#cache.notify({
                query: this,
                type: "updated",
                action
            });
        });
    }
};
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
 //# sourceMappingURL=query.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryCache.ts
__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
;
;
;
;
var QueryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#queries = /* @__PURE__ */ new Map();
    }
    #queries;
    build(client, options, state) {
        const queryKey = options.queryKey;
        const queryHash = options.queryHash ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Query"]({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!this.#queries.has(query.queryHash)) {
            this.#queries.set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = this.#queries.get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) {
                this.#queries.delete(query.queryHash);
            }
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return this.#queries.get(queryHash);
    }
    getAll() {
        return [
            ...this.#queries.values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    findAll(filters = {}) {
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
};
;
 //# sourceMappingURL=queryCache.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutation.ts
__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)");
;
;
;
var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Removable"] {
    #client;
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.#client = config.client;
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                this.#mutationCache.remove(this);
            }
        }
    }
    continue() {
        return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        const onContinue = ()=>{
            this.#dispatch({
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: this.#client,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !this.#retryer.canStart();
        try {
            if (restored) {
                onContinue();
            } else {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                await this.#mutationCache.config.onMutate?.(variables, this, mutationFnContext);
                const context = await this.options.onMutate?.(variables, mutationFnContext);
                if (context !== this.state.context) {
                    this.#dispatch({
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await this.#retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
            await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
            await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
                await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
                await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
                throw error;
            } finally{
                this.#dispatch({
                    type: "error",
                    error
                });
            }
        } finally{
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
 //# sourceMappingURL=mutation.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationCache.ts
__turbopack_context__.s([
    "MutationCache",
    ()=>MutationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
;
;
;
;
var MutationCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#mutations = /* @__PURE__ */ new Set();
        this.#scopes = /* @__PURE__ */ new Map();
        this.#mutationId = 0;
    }
    #mutations;
    #scopes;
    #mutationId;
    build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mutation"]({
            client,
            mutationCache: this,
            mutationId: ++this.#mutationId,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        this.#mutations.add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = this.#scopes.get(scope);
            if (scopedMutations) {
                scopedMutations.push(mutation);
            } else {
                this.#scopes.set(scope, [
                    mutation
                ]);
            }
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        if (this.#mutations.delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = this.#scopes.get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) {
                            scopedMutations.splice(index, 1);
                        }
                    } else if (scopedMutations[0] === mutation) {
                        this.#scopes.delete(scope);
                    }
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const mutationsWithSameScope = this.#scopes.get(scope);
            const firstPendingMutation = mutationsWithSameScope?.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else {
            return true;
        }
    }
    runNext(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const foundMutation = this.#scopes.get(scope)?.find((m)=>m !== mutation && m.state.isPaused);
            return foundMutation?.continue() ?? Promise.resolve();
        } else {
            return Promise.resolve();
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#mutations.forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
            this.#mutations.clear();
            this.#scopes.clear();
        });
    }
    getAll() {
        return Array.from(this.#mutations);
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    findAll(filters = {}) {
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]))));
    }
};
function scopeFor(mutation) {
    return mutation.options.scope?.id;
}
;
 //# sourceMappingURL=mutationCache.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/infiniteQueryBehavior.ts
__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            const options = context.options;
            const direction = context.fetchOptions?.meta?.fetchMore?.direction;
            const oldPages = context.state.data?.pages || [];
            const oldPageParams = context.state.data?.pageParams || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    Object.defineProperty(object, "signal", {
                        enumerable: true,
                        get: ()=>{
                            if (context.signal.aborted) {
                                cancelled = true;
                            } else {
                                context.signal.addEventListener("abort", ()=>{
                                    cancelled = true;
                                });
                            }
                            return context.signal;
                        }
                    });
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    return context.options.persister?.(fetchFn, {
                        client: context.client,
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryClient.ts
__turbopack_context__.s([
    "QueryClient",
    ()=>QueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var QueryClient = class {
    #queryCache;
    #mutationCache;
    #defaultOptions;
    #queryDefaults;
    #mutationDefaults;
    #mountCount;
    #unsubscribeFocus;
    #unsubscribeOnline;
    constructor(config = {}){
        this.#queryCache = config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryCache"]();
        this.#mutationCache = config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MutationCache"]();
        this.#defaultOptions = config.defaultOptions || {};
        this.#queryDefaults = /* @__PURE__ */ new Map();
        this.#mutationDefaults = /* @__PURE__ */ new Map();
        this.#mountCount = 0;
    }
    mount() {
        this.#mountCount++;
        if (this.#mountCount !== 1) return;
        this.#unsubscribeFocus = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                this.#queryCache.onFocus();
            }
        });
        this.#unsubscribeOnline = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                this.#queryCache.onOnline();
            }
        });
    }
    unmount() {
        this.#mountCount--;
        if (this.#mountCount !== 0) return;
        this.#unsubscribeFocus?.();
        this.#unsubscribeFocus = void 0;
        this.#unsubscribeOnline?.();
        this.#unsubscribeOnline = void 0;
    }
    isFetching(filters) {
        return this.#queryCache.findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return this.#mutationCache.findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */ getQueryData(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state.data;
    }
    ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = this.#queryCache.build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) {
            return this.fetchQuery(options);
        }
        if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query))) {
            void this.prefetchQuery(defaultedOptions);
        }
        return Promise.resolve(cachedData);
    }
    getQueriesData(filters) {
        return this.#queryCache.findAll(filters).map(({ queryKey, state })=>{
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = this.#queryCache.get(defaultedOptions.queryHash);
        const prevData = query?.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) {
            return void 0;
        }
        return this.#queryCache.build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map(({ queryKey })=>[
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ]));
    }
    getQueryState(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state;
    }
    removeQueries(filters) {
        const queryCache = this.#queryCache;
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = this.#queryCache;
        return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                ...filters
            }, options);
        });
    }
    cancelQueries(filters, cancelOptions = {}) {
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    invalidateQueries(filters, options = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#queryCache.findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if (filters?.refetchType === "none") {
                return Promise.resolve();
            }
            return this.refetchQueries({
                ...filters,
                type: filters?.refetchType ?? filters?.type ?? "active"
            }, options);
        });
    }
    refetchQueries(filters, options = {}) {
        const fetchOptions = {
            ...options,
            cancelRefetch: options.cancelRefetch ?? true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                    promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) {
            defaultedOptions.retry = false;
        }
        const query = this.#queryCache.build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchInfiniteQuery(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    ensureInfiniteQueryData(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) {
            return this.#mutationCache.resumePausedMutations();
        }
        return Promise.resolve();
    }
    getQueryCache() {
        return this.#queryCache;
    }
    getMutationCache() {
        return this.#mutationCache;
    }
    getDefaultOptions() {
        return this.#defaultOptions;
    }
    setDefaultOptions(options) {
        this.#defaultOptions = options;
    }
    setQueryDefaults(queryKey, options) {
        this.#queryDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...this.#queryDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        this.#mutationDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...this.#mutationDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) {
            return options;
        }
        const defaultedOptions = {
            ...this.#defaultOptions.queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) {
            defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        }
        if (defaultedOptions.refetchOnReconnect === void 0) {
            defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        }
        if (defaultedOptions.throwOnError === void 0) {
            defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        }
        if (!defaultedOptions.networkMode && defaultedOptions.persister) {
            defaultedOptions.networkMode = "offlineFirst";
        }
        if (defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skipToken"]) {
            defaultedOptions.enabled = false;
        }
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options?._defaulted) {
            return options;
        }
        return {
            ...this.#defaultOptions.mutations,
            ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        this.#queryCache.clear();
        this.#mutationCache.clear();
    }
};
;
 //# sourceMappingURL=queryClient.js.map
}),
"[project]/authorization_form/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
];

//# sourceMappingURL=54a8a_8bc43a65._.js.map