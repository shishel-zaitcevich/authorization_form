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
;
var _s = __turbopack_context__.k.signature();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
                lineNumber: 39,
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
                        borderColor: (theme)=>theme.palette.primary.light,
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
                            lineNumber: 75,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, void 0)
                },
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 52,
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
                        borderColor: (theme)=>theme.palette.primary.light,
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
                            src: "/images/lock.svg",
                            alt: "Lock icon",
                            style: {
                                width: 16,
                                height: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, void 0)
                }
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fullWidth: true,
                variant: "contained",
                onClick: handleSubmit,
                disabled: isDisabled || mutation.isPending,
                sx: {
                    backgroundColor: (theme)=>isDisabled || mutation.isPending ? theme.palette.primary.dark : theme.palette.primary.main,
                    color: isDisabled ? 'rgba(0, 0, 0, 0.25))' : '#fff',
                    height: '40px',
                    border: (theme)=>"1px solid ".concat(isDisabled || mutation.isPending ? theme.palette.primary.light : theme.palette.primary.main),
                    '&:hover': {
                        backgroundColor: (theme)=>isDisabled || mutation.isPending ? theme.palette.primary.dark : theme.palette.primary.main
                    },
                    '&.Mui-disabled': {
                        backgroundColor: (theme)=>theme.palette.primary.dark,
                        opacity: 0.6
                    }
                },
                children: mutation.isPending ? 'Logging in...' : 'Log in'
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
} // import { useState } from 'react';
 // import { useMutation } from '@tanstack/react-query';
 // import { loginMock } from '../lib/apiMocks';
 // import Typography from '@mui/material/Typography';
 // import TextField from '@mui/material/TextField';
 // import Button from '@mui/material/Button';
 // import InputAdornment from '@mui/material/InputAdornment';
 // import { motion } from 'framer-motion';
 // import { Box } from '@mui/material';
 // import Header from '../widgets/ui/Header';
 // interface Props {
 //   onSuccess: () => void;
 //   setError: (error: string | null) => void;
 // }
 // export default function AuthForm({ onSuccess, setError }: Props) {
 //   const [email, setEmail] = useState('');
 //   const [password, setPassword] = useState('');
 //   const isDisabled = !email || !password;
 //   const mutation = useMutation({
 //     mutationFn: loginMock,
 //     onSuccess: (data) => {
 //       if (data.requires2FA) {
 //         onSuccess();
 //       } else {
 //         alert('Logged in!');
 //       }
 //     },
 //     onError: (error: any) => {
 //       setError(error.message);
 //     },
 //   });
 //   const handleSubmit = () => {
 //     mutation.mutate({ email, password });
 //   };
 //   return (
 //     <Box
 //       sx={{
 //         p: 2,
 //         boxShadow: 3,
 //         borderRadius: '6px',
 //         minHeight: '372px',
 //         width: '440px',
 //         padding: '32px',
 //       }}
 //     >
 //       <Header />
 //       <Typography
 //         variant="h5"
 //         align="center"
 //         gutterBottom
 //         sx={{
 //           lineHeight: '32px',
 //           fontSize: '24px',
 //           fontWeight: 600,
 //           mb: '24px',
 //         }}
 //       >
 //         Sign in to your account to continue
 //       </Typography>
 //       <TextField
 //         fullWidth
 //         placeholder="Email"
 //         variant="outlined"
 //         value={email}
 //         onChange={(e) => setEmail(e.target.value)}
 //         sx={{
 //           mb: 2,
 //           '& .MuiOutlinedInput-root': {
 //             height: '40px',
 //             padding: '8px 11px',
 //             '&:hover': {
 //               '& .MuiOutlinedInput-notchedOutline': {
 //                 borderColor: (theme) => theme.palette.primary.main,
 //                 boxShadow: '0px 0px 0px 2px rgba(5, 145, 255, 0.1)',
 //               },
 //             },
 //           },
 //         }}
 //         InputProps={{
 //           startAdornment: (
 //             <InputAdornment position="start">
 //               <img
 //                 src="/images/login.svg"
 //                 alt="Login icon"
 //                 style={{ width: 16, height: 16 }}
 //               />
 //             </InputAdornment>
 //           ),
 //         }}
 //         autoFocus
 //       />
 //       <TextField
 //         fullWidth
 //         placeholder="Password"
 //         type="password"
 //         variant="outlined"
 //         value={password}
 //         onChange={(e) => setPassword(e.target.value)}
 //         sx={{
 //           mb: 2,
 //           '& .MuiOutlinedInput-root': {
 //             height: '40px',
 //             padding: '8px 11px',
 //             '&:hover': {
 //               '& .MuiOutlinedInput-notchedOutline': {
 //                 borderColor: (theme) => theme.palette.primary.main,
 //                 boxShadow: '0px 0px 0px 2px rgba(5, 145, 255, 0.1)',
 //               },
 //             },
 //           },
 //         }}
 //         InputProps={{
 //           startAdornment: (
 //             <InputAdornment position="start">
 //               <img
 //                 src="/images/lock.svg"
 //                 alt="Lock icon"
 //                 style={{ width: 16, height: 16 }}
 //               />
 //             </InputAdornment>
 //           ),
 //         }}
 //       />
 //       <Button
 //         fullWidth
 //         variant="contained"
 //         color="primary"
 //         onClick={handleSubmit}
 //         disabled={isDisabled || mutation.isPending}
 //         sx={{
 //           background: isDisabled ? '#e0e0e0' : '#1976d2',
 //           color: '#fff',
 //           height: '40px',
 //         }}
 //       >
 //         {mutation.isPending ? 'Logging in...' : 'Log in'}
 //       </Button>
 //     </Box>
 //   );
 // }
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
            background: disabled ? '#e0e0e0' : '#1976d2',
            color: disabled ? '#999' : '#fff',
            height: '40px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 500,
            '&:hover': {
                background: disabled ? '#e0e0e0' : '#1565c0'
            },
            '&.Mui-disabled': {
                background: '#e0e0e0',
                color: '#999'
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
"[project]/authorization_form/src/hooks/useTwoFATimer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTwoFATimer",
    ()=>useTwoFATimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../utils/twoFAHelpers'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var _s = __turbopack_context__.k.signature();
;
;
const useTwoFATimer = (setState, setError, state)=>{
    _s();
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimer = ()=>{
        // Очищаем предыдущий таймер, если есть
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            setState('expired');
            setError('Code has expired. Please request a new one.');
        }, CODE_EXPIRATION_TIME);
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
    // Останавливаем таймер когда код заполнен
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
"[project]/authorization_form/src/lib/twoFAHelpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CODE_EXPIRATION_TIME",
    ()=>CODE_EXPIRATION_TIME,
    "getBorderColor",
    ()=>getBorderColor,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/apiMocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$shared$2f$ui$2f$TwoFAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/shared/ui/TwoFAButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFATimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/hooks/useTwoFATimer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFACode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/hooks/useTwoFACode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/twoFAHelpers.ts [app-client] (ecmascript)");
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
function TwoFAForm(param) {
    let { setError } = param;
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('initial');
    const { startTimer, clearTimer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFATimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTwoFATimer"])(setState, setError);
    const { code, inputs, handleChange, handleKeyDown, resetCode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$hooks$2f$useTwoFACode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTwoFACode"])(setState, setError, state);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify2FAMock"],
        onSuccess: {
            "TwoFAForm.useMutation[mutation]": ()=>{
                clearTimer();
                alert('2FA verified!');
            }
        }["TwoFAForm.useMutation[mutation]"],
        onError: {
            "TwoFAForm.useMutation[mutation]": (error)=>{
                if (error.message.includes('expired') || error.message.includes('Expired')) {
                    setState('expired');
                    setError('Code has expired');
                } else {
                    setState('invalid');
                    setError(error.message || 'Invalid code');
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TwoFAForm.useEffect": ()=>{
            var _inputs_current_;
            (_inputs_current_ = inputs.current[0]) === null || _inputs_current_ === void 0 ? void 0 : _inputs_current_.focus();
        }
    }["TwoFAForm.useEffect"], []);
    const showButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowButton"])(state);
    const buttonType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonType"])(state);
    const buttonDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isButtonDisabled"])(state);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "h5",
                align: "center",
                gutterBottom: true,
                sx: {
                    lineHeight: '32px',
                    fontSize: '24px',
                    fontWeight: 600,
                    mb: '8px',
                    color: 'rgba(0, 0, 0, 0.88)'
                },
                children: "Two-Factor Authentication"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "body1",
                align: "center",
                sx: {
                    fontSize: '16px',
                    color: 'rgba(0, 0, 0, 0.88)',
                    mb: 3,
                    lineHeight: '24px'
                },
                children: "Enter the 6-digit code from the Google Authenticator app"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '8px',
                    mb: 1
                },
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
                        sx: {
                            width: '52.67px',
                            '& .MuiOutlinedInput-root': {
                                height: '60px',
                                '& fieldset': {
                                    borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBorderColor"])(state),
                                    borderWidth: state !== 'initial' && state !== 'filled' ? '2px' : '1px'
                                },
                                '&:hover fieldset': {
                                    borderColor: state !== 'initial' && state !== 'filled' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBorderColor"])(state) : undefined
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: state !== 'initial' && state !== 'filled' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$twoFAHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBorderColor"])(state) : undefined
                                }
                            }
                        }
                    }, index, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            state === 'invalid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: '#ff4d4f',
                    fontSize: '16px',
                    mb: 2
                },
                children: "Invalid code"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    mt: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$shared$2f$ui$2f$TwoFAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: buttonType,
                    disabled: buttonDisabled,
                    loading: mutation.isPending,
                    onClick: buttonType === 'getNew' ? handleGetNew : handleSubmit
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
} // import { useState, useRef, useEffect } from 'react';
 // import { useMutation } from '@tanstack/react-query';
 // import Card from '@mui/material/Card';
 // import Typography from '@mui/material/Typography';
 // import TextField from '@mui/material/TextField';
 // import Button from '@mui/material/Button';
 // import ArrowBack from '@mui/icons-material/ArrowBack';
 // import IconButton from '@mui/material/IconButton';
 // import { motion } from 'framer-motion';
 // import { verify2FAMock } from '../lib/apiMocks';
 // import Header from '../widgets/ui/Header';
 // interface Props {
 //   setError: (error: string | null) => void;
 // }
 // export default function TwoFAForm({ setError }: Props) {
 //   const [code, setCode] = useState(['', '', '', '', '', '']);
 //   const [invalid, setInvalid] = useState(false);
 //   const inputs = useRef<HTMLInputElement[]>([]);
 //   const mutation = useMutation({
 //     mutationFn: verify2FAMock,
 //     onSuccess: () => {
 //       alert('2FA verified!');
 //     },
 //     onError: (error: any) => {
 //       setInvalid(true);
 //       setError(error.message);
 //     },
 //   });
 //   const handleChange = (index: number, value: string) => {
 //     if (value.length > 1 || isNaN(Number(value))) return;
 //     const newCode = [...code];
 //     newCode[index] = value;
 //     setCode(newCode);
 //     setInvalid(false);
 //     if (value && index < 5) {
 //       inputs.current[index + 1]?.focus();
 //     }
 //   };
 //   const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
 //     if (e.key === 'Backspace' && !code[index] && index > 0) {
 //       inputs.current[index - 1]?.focus();
 //     }
 //   };
 //   const fullCode = code.join('');
 //   const isDisabled = fullCode.length < 6;
 //   const handleSubmit = () => {
 //     mutation.mutate({ code: fullCode });
 //   };
 //   const handleGetNew = () => {
 //     alert('New code sent!');
 //   };
 //   useEffect(() => {
 //     inputs.current[0]?.focus();
 //   }, []);
 //   return (
 //     <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
 //       <IconButton onClick={() => window.location.reload()} sx={{ mb: 1 }}>
 //         <ArrowBack />
 //       </IconButton>
 //       <Header />
 //       <Typography variant="h6" align="center" gutterBottom>
 //         Two-Factor Authentication
 //       </Typography>
 //       <Typography variant="body1" align="center" gutterBottom>
 //         Enter the 6-digit code from the Google Authenticator app
 //       </Typography>
 //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
 //         {code.map((digit, index) => (
 //           <TextField
 //             key={index}
 //             inputRef={(el) => (inputs.current[index] = el)}
 //             value={digit}
 //             onChange={(e) => handleChange(index, e.target.value)}
 //             onKeyDown={(e) => handleKeyDown(index, e)}
 //             inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
 //             variant="outlined"
 //             error={invalid}
 //             sx={{ width: '40px' }}
 //           />
 //         ))}
 //       </div>
 //       {invalid && (
 //         <Typography color="error" align="center" sx={{ mb: 2 }}>
 //           Invalid code
 //         </Typography>
 //       )}
 //       <Button
 //         fullWidth
 //         variant="contained"
 //         color="primary"
 //         onClick={handleSubmit}
 //         disabled={isDisabled || mutation.isPending}
 //         sx={{
 //           mb: 1,
 //           background: isDisabled ? '#e0e0e0' : '#1976d2',
 //           color: '#fff',
 //         }}
 //       >
 //         {mutation.isPending ? 'Verifying...' : 'Continue'}
 //       </Button>
 //       <Button
 //         fullWidth
 //         variant="contained"
 //         color="primary"
 //         onClick={handleGetNew}
 //       >
 //         Get new
 //       </Button>
 //     </Card>
 //   );
 // }
_s(TwoFAForm, "bCndzqHiAQxx97zxqsXghaPFQkI=", false, function() {
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
                        background: '#1976d2',
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
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/widgets/ui/Header.tsx [app-client] (ecmascript)");
;
;
;
;
function AuthCard(param) {
    let { children, onBack, showBackButton = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        sx: {
            p: 2,
            boxShadow: 3,
            borderRadius: '6px',
            // minHeight: '372px',
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
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/authorization_form/src/widgets/ui/AuthCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = AuthCard;
var _c;
__turbopack_context__.k.register(_c, "AuthCard");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
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
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
} // 'use client';
 // import { useState } from 'react';
 // import { motion } from 'framer-motion';
 // import AuthForm from '../components/AuthForm';
 // import TwoFAForm from '../components/TwoFAForm';
 // export default function Home() {
 //   const [show2FA, setShow2FA] = useState(false);
 //   const [error, setError] = useState<string | null>(null);
 //   const handleLoginSuccess = () => {
 //     setShow2FA(true);
 //   };
 //   return (
 //     <main
 //       style={{
 //         display: 'flex',
 //         justifyContent: 'center',
 //         alignItems: 'center',
 //         height: '100vh',
 //         background: '#f0f0f0',
 //       }}
 //     >
 //       <motion.div
 //         initial={{ opacity: 0, y: 20 }}
 //         animate={{ opacity: 1, y: 0 }}
 //         transition={{ duration: 0.5 }}
 //         style={{ width: '300px' }}
 //       >
 //         {!show2FA ? (
 //           <AuthForm onSuccess={handleLoginSuccess} setError={setError} />
 //         ) : (
 //           <TwoFAForm setError={setError} />
 //         )}
 //         {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
 //       </motion.div>
 //     </main>
 //   );
 // }
_s(Home, "i7VYJT/DDmujsCOvqGC1lVEVKgo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=authorization_form_src_5ff5cae5._.js.map