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
    await new Promise((resolve)=>setTimeout(resolve, 1000));
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
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    if (code === '123456') {
        return {
            success: true
        };
    } else if (Math.random() < 0.1) {
        throw new Error('Expired code');
    } else {
        throw new Error('Invalid code');
    }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/apiMocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/InputAdornment/InputAdornment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
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
function AuthForm(param) {
    let { onSuccess, setError } = param;
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const isDisabled = !email || !password;
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginMock"],
        onSuccess: {
            "AuthForm.useMutation[mutation]": (data)=>{
                if (data.requires2FA) {
                    onSuccess();
                } else {
                    // Успех без 2FA (не по макету, но для полноты)
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
        mutation.mutate({
            email,
            password
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            p: 2,
            boxShadow: 3,
            borderRadius: '6px',
            // maxWidth: '440px',
            minHeight: '372px',
            width: '440px',
            padding: '32px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fullWidth: true,
                placeholder: "Email",
                variant: "outlined",
                value: email,
                onChange: (e)=>setEmail(e.target.value),
                sx: {
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                        height: '40px',
                        padding: '8px 11px',
                        '&:hover': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: (theme)=>theme.palette.primary.main,
                                boxShadow: '0px 0px 0px 2px rgba(5, 145, 255, 0.1)'
                            }
                        }
                    }
                },
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
                            lineNumber: 90,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, void 0)
                },
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fullWidth: true,
                placeholder: "Password",
                type: "password",
                variant: "outlined",
                value: password,
                onChange: (e)=>setPassword(e.target.value),
                sx: {
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                        height: '40px',
                        padding: '8px 11px',
                        '&:hover': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: (theme)=>theme.palette.primary.main,
                                boxShadow: '0px 0px 0px 2px rgba(5, 145, 255, 0.1)'
                            }
                        }
                    }
                },
                InputProps: {
                    style: {
                        fontFamily: 'text-security-disc'
                    },
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
                            lineNumber: 126,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, void 0)
                }
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fullWidth: true,
                variant: "contained",
                color: "primary",
                onClick: handleSubmit,
                disabled: isDisabled || mutation.isPending,
                sx: {
                    background: isDisabled ? '#e0e0e0' : '#1976d2',
                    color: '#fff',
                    height: '40px'
                },
                children: mutation.isPending ? 'Logging in...' : 'Log in'
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(AuthForm, "e3jJ3mNLTiYafQj7QJJh1EDhWSY=", false, function() {
    return [
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
"[project]/authorization_form/src/components/TwoFAForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TwoFAForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
// import ArrowBack from '@mui/icons-material/ArrowBack';
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/apiMocks.ts [app-client] (ecmascript)");
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
function TwoFAForm(param) {
    let { setError } = param;
    _s();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '',
        '',
        '',
        '',
        '',
        ''
    ]);
    const [invalid, setInvalid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify2FAMock"],
        onSuccess: {
            "TwoFAForm.useMutation[mutation]": ()=>{
                alert('2FA verified!'); // Переход к успеху
            }
        }["TwoFAForm.useMutation[mutation]"],
        onError: {
            "TwoFAForm.useMutation[mutation]": (error)=>{
                setInvalid(true);
                setError(error.message);
            }
        }["TwoFAForm.useMutation[mutation]"]
    });
    const handleChange = (index, value)=>{
        if (value.length > 1 || isNaN(Number(value))) return;
        const newCode = [
            ...code
        ];
        newCode[index] = value;
        setCode(newCode);
        setInvalid(false);
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
    const fullCode = code.join('');
    const isDisabled = fullCode.length < 6;
    const handleSubmit = ()=>{
        mutation.mutate({
            code: fullCode
        });
    };
    const handleGetNew = ()=>{
        // Симуляция запроса нового кода (не по макету, но добавлено)
        alert('New code sent!');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TwoFAForm.useEffect": ()=>{
            var _inputs_current_;
            (_inputs_current_ = inputs.current[0]) === null || _inputs_current_ === void 0 ? void 0 : _inputs_current_.focus();
        }
    }["TwoFAForm.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            p: 2,
            boxShadow: 3,
            borderRadius: 2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>window.location.reload(),
                sx: {
                    mb: 1
                }
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#fff',
                            borderRadius: '50%',
                            marginRight: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "h6",
                            color: "primary",
                            sx: {
                                fontSize: 24,
                                background: '#1976d2',
                                color: '#fff',
                                borderRadius: '50%',
                                width: 32,
                                height: 32,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "O"
                        }, void 0, false, {
                            fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h6",
                        sx: {
                            display: 'inline'
                        },
                        children: "Company"
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "h6",
                align: "center",
                gutterBottom: true,
                children: "Two-Factor Authentication"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "body1",
                align: "center",
                gutterBottom: true,
                children: "Enter the 6-digit code from the Google Authenticator app"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: code.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        inputRef: (el)=>inputs.current[index] = el,
                        value: digit,
                        onChange: (e)=>handleChange(index, e.target.value),
                        onKeyDown: (e)=>handleKeyDown(index, e),
                        inputProps: {
                            maxLength: 1,
                            style: {
                                textAlign: 'center'
                            }
                        },
                        variant: "outlined",
                        error: invalid,
                        sx: {
                            width: '40px'
                        }
                    }, index, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            invalid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "error",
                align: "center",
                sx: {
                    mb: 2
                },
                children: "Invalid code"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fullWidth: true,
                variant: "contained",
                color: "primary",
                onClick: handleSubmit,
                disabled: isDisabled || mutation.isPending,
                sx: {
                    mb: 1,
                    background: isDisabled ? '#e0e0e0' : '#1976d2',
                    color: '#fff'
                },
                children: mutation.isPending ? 'Verifying...' : 'Continue'
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fullWidth: true,
                variant: "contained",
                color: "primary",
                onClick: handleGetNew,
                children: "Get new"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(TwoFAForm, "NcHhUPQlbE0ZD2qejnFcFZYhnDg=", false, function() {
    return [
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
;
var _s = __turbopack_context__.k.signature();
'use client';
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
            style: {
                width: '300px'
            },
            children: [
                !show2FA ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$AuthForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSuccess: handleLoginSuccess,
                    setError: setError
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$TwoFAForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setError: setError
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'red',
                        textAlign: 'center'
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/authorization_form/src/app/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/authorization_form/src/app/page.tsx",
        lineNumber: 17,
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

//# sourceMappingURL=authorization_form_src_d20f3ca0._.js.map