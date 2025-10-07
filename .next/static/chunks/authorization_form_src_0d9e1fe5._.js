(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/authorization_form/src/lib/apiMocks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginMock",
    ()=>loginMock,
    "verify2FAMock",
    ()=>verify2FAMock
]);
const loginMock = async (param)=>{
    let { email, password } = param;
    await new Promise((resolve)=>setTimeout(resolve, 3000));
    if (email === 'info@mail.com' && password === 'password') {
        return {
            success: true,
            requires2FA: true
        };
    } else if (Math.random() < 0.1) {
        throw new Error('Network error');
    } else {
        throw new Error('Invalid credentials');
    }
};
const verify2FAMock = async (param)=>{
    let { code } = param;
    await new Promise((resolve)=>setTimeout(resolve, 300));
    if (code === '123456') {
        return {
            success: true
        };
    } else if (Math.random() < 0.1) {
        throw new Error('Expired code');
    } else {
        throw new Error('');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/lib/validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMAIL_REGEX",
    ()=>EMAIL_REGEX,
    "validateEmail",
    ()=>validateEmail
]);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validateEmail = (value)=>{
    if (!value) {
        return 'Email is required';
    }
    if (!EMAIL_REGEX.test(value)) {
        return 'Please enter a valid email address';
    }
    return '';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/hooks/useEmailValidation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEmailValidation",
    ()=>useEmailValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/validation.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useEmailValidation = ()=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleEmailChange = (value)=>{
        setEmail(value);
        if (touched) {
            setEmailError((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEmail"])(value));
        }
    };
    const handleEmailBlur = ()=>{
        setTouched(true);
        setEmailError((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEmail"])(email));
    };
    const validateBeforeSubmit = ()=>{
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEmail"])(email);
        if (error) {
            setTouched(true);
            setEmailError(error);
            return false;
        }
        return true;
    };
    return {
        email,
        emailError,
        touched,
        handleEmailChange,
        handleEmailBlur,
        validateBeforeSubmit
    };
};
_s(useEmailValidation, "LGtAUR8VOf9RTzQDfn5/gyHhyL8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/lib/textFieldStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorTextStyles",
    ()=>errorTextStyles,
    "getButtonStyles",
    ()=>getButtonStyles,
    "getInputStyles",
    ()=>getInputStyles
]);
const getInputStyles = function() {
    let hasError = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    return {
        '& .MuiOutlinedInput-root': {
            height: '40px',
            padding: '8px 11px',
            '& fieldset': {
                borderColor: (theme)=>hasError ? theme.palette.error.main : theme.palette.primary.light
            },
            '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: (theme)=>hasError ? theme.palette.error.main : theme.palette.primary.main,
                    boxShadow: hasError ? '0px 0px 0px 2px rgba(255, 77, 79, 0.1)' : '0px 0px 0px 2px rgba(5, 145, 255, 0.1)'
                }
            },
            '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: (theme)=>hasError ? theme.palette.error.main : theme.palette.primary.main
                }
            }
        }
    };
};
const getButtonStyles = (isDisabled)=>({
        backgroundColor: (theme)=>isDisabled ? theme.palette.primary.dark : theme.palette.primary.main,
        color: isDisabled ? 'rgba(0, 0, 0, 0.25)' : '#fff',
        height: '40px',
        border: (theme)=>"1px solid ".concat(isDisabled ? theme.palette.primary.light : theme.palette.primary.main),
        '&:hover': {
            backgroundColor: (theme)=>isDisabled ? theme.palette.primary.dark : theme.palette.primary.main
        },
        '&.Mui-disabled': {
            backgroundColor: (theme)=>theme.palette.primary.dark,
            opacity: 0.6
        }
    });
const errorTextStyles = {
    color: (theme)=>theme.palette.error.main,
    fontSize: '14px',
    mt: '4px',
    lineHeight: '20px'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/components/AuthForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/InputAdornment/InputAdornment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/apiMocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useEmailValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/hooks/useEmailValidation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$textFieldStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/textFieldStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function AuthForm(param) {
    let { onSuccess, setError } = param;
    _s();
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { email, emailError, touched, handleEmailChange, handleEmailBlur, validateBeforeSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useEmailValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmailValidation"])();
    const isDisabled = !email || !password || !!emailError;
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginMock"],
        onSuccess: {
            "AuthForm.useMutation[mutation]": (data)=>{
                if (data.requires2FA) {
                    onSuccess();
                } else {
                    alert('Logged in!');
                }
            }
        }["AuthForm.useMutation[mutation]"],
        onError: {
            "AuthForm.useMutation[mutation]": (error)=>{
                setError(error.message);
            }
        }["AuthForm.useMutation[mutation]"]
    });
    const handleSubmit = ()=>{
        if (!validateBeforeSubmit()) {
            return;
        }
        mutation.mutate({
            email,
            password
        });
    };
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h5",
                        align: "center",
                        gutterBottom: true,
                        sx: {
                            lineHeight: '32px',
                            fontSize: '24px',
                            fontWeight: 600,
                            mb: '24px'
                        },
                        children: "Sign in to your account to continue"
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        mb: 2,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fullWidth: true,
                                placeholder: "Email",
                                variant: "outlined",
                                value: email,
                                onChange: (e)=>handleEmailChange(e.target.value),
                                onBlur: handleEmailBlur,
                                error: touched && !!emailError,
                                sx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$textFieldStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInputStyles"])(touched && !!emailError),
                                InputProps: {
                                    startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        position: "start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/login.svg",
                                            alt: "Login icon",
                                            style: {
                                                width: 16,
                                                height: 16
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                                        lineNumber: 121,
                                        columnNumber: 19
                                    }, void 0)
                                },
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            touched && emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$textFieldStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorTextStyles"],
                                children: emailError
                            }, void 0, false, {
                                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        placeholder: "Password",
                        type: "password",
                        variant: "outlined",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        sx: {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$textFieldStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInputStyles"])(),
                            mb: 2
                        },
                        InputProps: {
                            startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                position: "start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/lock.svg",
                                    alt: "Lock icon",
                                    style: {
                                        width: 16,
                                        height: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                                    lineNumber: 150,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, void 0)
                        }
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        variant: "contained",
                        onClick: handleSubmit,
                        disabled: isDisabled || mutation.isPending,
                        sx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$textFieldStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonStyles"])(isDisabled || mutation.isPending),
                        children: mutation.isPending ? 'Logging in...' : 'Log in'
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(AuthForm, "pgi1mJO52CKLrBzEn+4ELYLCGD0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useEmailValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmailValidation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = AuthForm;
var _c;
__turbopack_context__.k.register(_c, "AuthForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/shared/ui/TwoFAButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TwoFAButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
;
;
function TwoFAButton(param) {
    let { type, disabled = false, loading = false, onClick } = param;
    const isGetNew = type === 'getNew';
    const buttonText = isGetNew ? 'Get new' : loading ? 'Verifying...' : 'Continue';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fullWidth: true,
        variant: "contained",
        color: "primary",
        onClick: onClick,
        disabled: disabled || loading,
        sx: {
            background: (theme)=>disabled ? theme.palette.primary.dark : theme.palette.primary.main,
            color: disabled ? '#rgba(0, 0, 0, 0.25' : '#fff',
            height: '40px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 500,
            '&:hover': {
                backgroundColor: (theme)=>disabled ? theme.palette.primary.dark : theme.palette.primary.main
            },
            '&.Mui-disabled': {
                background: 'rgba(0, 0, 0, 0.04)',
                color: 'rgba(0, 0, 0, 0.25'
            }
        },
        children: buttonText
    }, void 0, false, {
        fileName: "[project]/authorization_form/src/shared/ui/TwoFAButton.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = TwoFAButton;
var _c;
__turbopack_context__.k.register(_c, "TwoFAButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/components/SuccessModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuccessModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/icons-material/CheckCircle.js [app-client] (ecmascript)");
;
;
;
function SuccessModal(param) {
    let { open, onClose } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        disableScrollLock: true,
        PaperProps: {
            sx: {
                borderRadius: '8px',
                padding: '24px',
                minWidth: '400px'
            }
        },
        slotProps: {
            backdrop: {
                sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
            sx: {
                textAlign: 'center',
                padding: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 64,
                            color: '#52c41a'
                        }
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/SuccessModal.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/SuccessModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h5",
                    sx: {
                        fontSize: '24px',
                        fontWeight: 600,
                        mb: 1,
                        color: 'rgba(0, 0, 0, 0.88)'
                    },
                    children: "Congratulations!"
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/SuccessModal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "body1",
                    sx: {
                        fontSize: '16px',
                        color: 'rgba(0, 0, 0, 0.65)',
                        lineHeight: '24px'
                    },
                    children: "You have been successfully authorized"
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/SuccessModal.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/authorization_form/src/components/SuccessModal.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/authorization_form/src/components/SuccessModal.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SuccessModal;
var _c;
__turbopack_context__.k.register(_c, "SuccessModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/lib/twoFAHelpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CODE_EXPIRATION_TIME",
    ()=>CODE_EXPIRATION_TIME,
    "getBorderColor",
    ()=>getBorderColor,
    "getBorderWidth",
    ()=>getBorderWidth,
    "getButtonType",
    ()=>getButtonType,
    "isButtonDisabled",
    ()=>isButtonDisabled,
    "isCodeFilled",
    ()=>isCodeFilled,
    "shouldShowButton",
    ()=>shouldShowButton
]);
const CODE_EXPIRATION_TIME = 20000;
const getBorderColor = (state)=>{
    if (state === 'invalid' || state === 'expired') return '#ff4d4f';
    return undefined;
};
const getBorderWidth = (state)=>{
    if (state === 'expired') return '2px';
    if (state === 'invalid') return '1px';
    return '1px';
};
const isCodeFilled = (code)=>{
    return code.every((digit)=>digit !== '');
};
const shouldShowButton = (state)=>{
    return state === 'filled' || state === 'invalid' || state === 'expired';
};
const getButtonType = (state)=>{
    return state === 'expired' ? 'getNew' : 'continue';
};
const isButtonDisabled = (state)=>{
    return state === 'invalid';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/hooks/useTwoFATimer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTwoFATimer",
    ()=>useTwoFATimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/twoFAHelpers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTwoFATimer = (setState, setError, state)=>{
    _s();
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimer = ()=>{
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            setState('expired');
            setError('Code has expired. Please request a new one.');
        }, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODE_EXPIRATION_TIME"]);
    };
    const clearTimer = ()=>{
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTwoFATimer.useEffect": ()=>{
            startTimer();
            return ({
                "useTwoFATimer.useEffect": ()=>{
                    clearTimer();
                }
            })["useTwoFATimer.useEffect"];
        }
    }["useTwoFATimer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTwoFATimer.useEffect": ()=>{
            if (state === 'filled') {
                clearTimer();
            }
        }
    }["useTwoFATimer.useEffect"], [
        state
    ]);
    return {
        startTimer,
        clearTimer
    };
};
_s(useTwoFATimer, "5FM3fdGB0hxROxEqNUfPsLmIOpI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/hooks/useTwoFACode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTwoFACode",
    ()=>useTwoFACode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/twoFAHelpers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTwoFACode = (setState, setError, state)=>{
    _s();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '',
        '',
        '',
        '',
        '',
        ''
    ]);
    const inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleChange = (index, value)=>{
        if (value.length > 1 || isNaN(Number(value))) return;
        if (state === 'expired') return;
        const newCode = [
            ...code
        ];
        newCode[index] = value;
        setCode(newCode);
        if (state === 'invalid') {
            setState('initial');
            setError(null);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCodeFilled"])(newCode)) {
            setState('filled');
        } else {
            setState('initial');
        }
        if (value && index < 5) {
            var _inputs_current_;
            (_inputs_current_ = inputs.current[index + 1]) === null || _inputs_current_ === void 0 ? void 0 : _inputs_current_.focus();
        }
    };
    const handleKeyDown = (index, e)=>{
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            var _inputs_current_;
            (_inputs_current_ = inputs.current[index - 1]) === null || _inputs_current_ === void 0 ? void 0 : _inputs_current_.focus();
        }
    };
    const resetCode = ()=>{
        setCode([
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
    };
    return {
        code,
        inputs,
        handleChange,
        handleKeyDown,
        resetCode
    };
};
_s(useTwoFACode, "vzK7b9a+SZIJlfV7eHjZ27fBaXw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/lib/twoFAStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonBoxStyles",
    ()=>buttonBoxStyles,
    "errorMessageStyles",
    ()=>errorMessageStyles,
    "getTwoFAInputStyles",
    ()=>getTwoFAInputStyles,
    "inputBoxStyles",
    ()=>inputBoxStyles,
    "subtitleStyles",
    ()=>subtitleStyles,
    "titleStyles",
    ()=>titleStyles
]);
const getTwoFAInputStyles = (state)=>({
        width: '52.67px',
        '& .MuiOutlinedInput-root': {
            height: '60px',
            '& fieldset': {
                borderColor: (theme)=>{
                    if (state === 'invalid' || state === 'expired') return '#ff4d4f';
                    return theme.palette.primary.light;
                },
                borderWidth: state === 'invalid' ? '1px' : state === 'expired' ? '2px' : '1px'
            },
            '&:hover fieldset': {
                borderColor: (theme)=>{
                    if (state === 'invalid' || state === 'expired') return '#ff4d4f';
                    return theme.palette.primary.main;
                },
                borderWidth: state === 'invalid' ? '1px' : state === 'expired' ? '2px' : '1px'
            },
            '&.Mui-focused fieldset': {
                borderColor: (theme)=>{
                    if (state === 'invalid' || state === 'expired') return '#ff4d4f';
                    return theme.palette.primary.main;
                },
                borderWidth: state === 'invalid' ? '1px' : state === 'expired' ? '2px' : '1px'
            }
        }
    });
const titleStyles = {
    lineHeight: '32px',
    fontSize: '24px',
    fontWeight: 600,
    mb: '8px',
    color: 'rgba(0, 0, 0, 0.88)'
};
const subtitleStyles = {
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.88)',
    mb: 3,
    lineHeight: '24px'
};
const errorMessageStyles = {
    color: '#ff4d4f',
    fontSize: '16px',
    mb: 2
};
const inputBoxStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    mb: 1
};
const buttonBoxStyles = {
    mt: 3
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/components/TwoFAForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TwoFAForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/apiMocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$shared$2f$ui$2f$TwoFAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/shared/ui/TwoFAButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$SuccessModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/components/SuccessModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFATimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/hooks/useTwoFATimer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFACode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/hooks/useTwoFACode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/twoFAHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/twoFAStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
function TwoFAForm(param) {
    let { setError } = param;
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('initial');
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { startTimer, clearTimer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFATimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTwoFATimer"])(setState, setError, state);
    const { code, inputs, handleChange, handleKeyDown, resetCode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFACode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTwoFACode"])(setState, setError, state);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify2FAMock"],
        onSuccess: {
            "TwoFAForm.useMutation[mutation]": ()=>{
                clearTimer();
                setShowSuccessModal(true);
                setTimeout({
                    "TwoFAForm.useMutation[mutation]": ()=>{
                        setShowSuccessModal(false);
                    }
                }["TwoFAForm.useMutation[mutation]"], 3000);
            }
        }["TwoFAForm.useMutation[mutation]"],
        onError: {
            "TwoFAForm.useMutation[mutation]": (error)=>{
                if (error.message.includes('expired') || error.message.includes('Expired')) {
                    setState('expired');
                    setError(null);
                } else {
                    setState('invalid');
                    setError(null);
                }
            }
        }["TwoFAForm.useMutation[mutation]"]
    });
    const handleSubmit = ()=>{
        const fullCode = code.join('');
        mutation.mutate({
            code: fullCode
        });
    };
    const handleGetNew = ()=>{
        var _inputs_current_;
        resetCode();
        setState('initial');
        setError(null);
        startTimer();
        alert('New code sent!');
        (_inputs_current_ = inputs.current[0]) === null || _inputs_current_ === void 0 ? void 0 : _inputs_current_.focus();
    };
    const handleCloseModal = ()=>{
        setShowSuccessModal(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TwoFAForm.useEffect": ()=>{
            var _inputs_current_;
            (_inputs_current_ = inputs.current[0]) === null || _inputs_current_ === void 0 ? void 0 : _inputs_current_.focus();
        }
    }["TwoFAForm.useEffect"], []);
    const showButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowButton"])(state);
    const buttonType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonType"])(state);
    const buttonDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isButtonDisabled"])(state);
    const inputContainerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };
    const inputVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h5",
                        align: "center",
                        gutterBottom: true,
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["titleStyles"],
                        children: "Two-Factor Authentication"
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "body1",
                        align: "center",
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtitleStyles"],
                        children: "Enter the 6-digit code from the Google Authenticator app"
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: inputContainerVariants,
                initial: "hidden",
                animate: "visible",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBoxStyles"],
                    children: code.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            inputRef: (el)=>inputs.current[index] = el,
                            value: digit,
                            onChange: (e)=>handleChange(index, e.target.value),
                            onKeyDown: (e)=>handleKeyDown(index, e),
                            disabled: state === 'expired',
                            inputProps: {
                                maxLength: 1,
                                style: {
                                    textAlign: 'center',
                                    fontSize: '20px',
                                    fontWeight: 500
                                }
                            },
                            variant: "outlined",
                            sx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTwoFAInputStyles"])(state)
                        }, index, false, {
                            fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: state === 'invalid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessageStyles"],
                        children: "Invalid code"
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 10
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBoxStyles"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$shared$2f$ui$2f$TwoFAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: buttonType,
                            disabled: buttonDisabled,
                            loading: mutation.isPending,
                            onClick: buttonType === 'getNew' ? handleGetNew : handleSubmit
                        }, void 0, false, {
                            fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                            lineNumber: 185,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$SuccessModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showSuccessModal,
                onClose: handleCloseModal
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TwoFAForm, "L5zRVEu0wfd/jx1VZQWsOOwvmW8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFATimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTwoFATimer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFACode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTwoFACode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = TwoFAForm;
var _c;
__turbopack_context__.k.register(_c, "TwoFAForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/widgets/ui/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            marginBottom: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '9px',
            minWidth: '376px',
            width: '100%',
            height: '64px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "symbol",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#1677ff',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#fff',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/widgets/ui/Header.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/widgets/ui/Header.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/widgets/ui/Header.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/Text Wrapper.png",
                alt: "Lock icon",
                style: {
                    width: 65.24,
                    height: 'auto'
                }
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/widgets/ui/Header.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/authorization_form/src/widgets/ui/Header.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/widgets/ui/AuthCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/icons-material/ArrowBack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/widgets/ui/Header.tsx [app-client] (ecmascript)");
;
;
;
;
;
const MotionCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"]);
_c = MotionCard;
function AuthCard(param) {
    let { children, onBack, showBackButton = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionCard, {
        initial: {
            opacity: 0,
            scale: 0.95,
            y: 20
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        },
        sx: {
            p: 2,
            boxShadow: 3,
            borderRadius: '6px',
            minHeight: '372px',
            width: '440px',
            padding: '32px',
            position: 'relative'
        },
        children: [
            showBackButton && onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                position: 'absolute',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    onClick: onBack,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c1 = AuthCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionCard");
__turbopack_context__.k.register(_c1, "AuthCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/authorization_form/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$AuthForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/components/AuthForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$TwoFAForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/components/TwoFAForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$AuthCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/widgets/ui/AuthCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const [show2FA, setShow2FA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLoginSuccess = ()=>{
        setShow2FA(true);
        setError(null);
    };
    const handleBack = ()=>{
        setShow2FA(false);
        setError(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#f0f0f0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$AuthCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    showBackButton: show2FA,
                    onBack: handleBack,
                    children: !show2FA ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$AuthForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onSuccess: handleLoginSuccess,
                        setError: setError
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$TwoFAForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setError: setError
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                error && !show2FA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: {
                        color: 'red',
                        textAlign: 'center',
                        mt: 2
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/authorization_form/src/app/page.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/authorization_form/src/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Home, "i7VYJT/DDmujsCOvqGC1lVEVKgo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=authorization_form_src_0d9e1fe5._.js.map