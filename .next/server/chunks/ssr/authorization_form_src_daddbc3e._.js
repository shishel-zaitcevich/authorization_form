module.exports = [
"[project]/authorization_form/src/lib/apiMocks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginMock",
    ()=>loginMock,
    "verify2FAMock",
    ()=>verify2FAMock
]);
const loginMock = async ({ email, password })=>{
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
const verify2FAMock = async ({ code })=>{
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
}),
"[project]/authorization_form/src/components/AuthForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/apiMocks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/TextField/TextField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/InputAdornment/InputAdornment.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function AuthForm({ onSuccess, setError }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const isDisabled = !email || !password;
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginMock"],
        onSuccess: (data)=>{
            if (data.requires2FA) {
                onSuccess();
            } else {
                alert('Logged in!');
            }
        },
        onError: (error)=>{
            setError(error.message);
        }
    });
    const handleSubmit = ()=>{
        mutation.mutate({
            email,
            password
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        position: "start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/login.svg",
                            alt: "Login icon",
                            style: {
                                width: 16,
                                height: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                            lineNumber: 74,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, void 0)
                },
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        position: "start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/lock.svg",
                            alt: "Lock icon",
                            style: {
                                width: 16,
                                height: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, void 0)
                }
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/AuthForm.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                lineNumber: 116,
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
}),
"[project]/authorization_form/src/components/TwoFAForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TwoFAForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/TextField/TextField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/lib/apiMocks.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './TwoFAButton'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
function TwoFAForm({ setError }) {
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        '',
        '',
        '',
        '',
        '',
        ''
    ]);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('initial');
    const inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$lib$2f$apiMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verify2FAMock"],
        onSuccess: ()=>{
            alert('2FA verified!');
        },
        onError: (error)=>{
            if (error.message.includes('expired')) {
                setState('expired');
            } else {
                setState('invalid');
            }
            setError(error.message);
        }
    });
    const handleChange = (index, value)=>{
        if (value.length > 1 || isNaN(Number(value))) return;
        const newCode = [
            ...code
        ];
        newCode[index] = value;
        setCode(newCode);
        // Сбрасываем состояние ошибки при вводе
        if (state === 'invalid' || state === 'expired') {
            setState('initial');
        }
        // Проверяем заполненность всех полей
        const isCodeFilled = newCode.every((digit)=>digit !== '');
        if (isCodeFilled) {
            setState('filled');
        } else {
            setState('initial');
        }
        if (value && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };
    const handleKeyDown = (index, e)=>{
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };
    const fullCode = code.join('');
    const handleSubmit = ()=>{
        mutation.mutate({
            code: fullCode
        });
    };
    const handleGetNew = ()=>{
        setCode([
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
        setState('initial');
        setError(null);
        alert('New code sent!');
        inputs.current[0]?.focus();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inputs.current[0]?.focus();
    }, []);
    const getBorderColor = ()=>{
        if (state === 'invalid' || state === 'expired') return '#d32f2f';
        return undefined;
    };
    // Определяем, какую кнопку показывать
    const showButton = state === 'filled' || state === 'invalid' || state === 'expired';
    const buttonType = state === 'expired' ? 'getNew' : 'continue';
    const isButtonDisabled = state === 'invalid';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "h5",
                align: "center",
                gutterBottom: true,
                sx: {
                    lineHeight: '32px',
                    fontSize: '24px',
                    fontWeight: 600,
                    mb: '8px'
                },
                children: "Two-Factor Authentication"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "body1",
                align: "center",
                sx: {
                    fontSize: '14px',
                    color: '#666',
                    mb: 3
                },
                children: "Enter the 6-digit code from the Google Authenticator app"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '8px',
                    mb: 1
                },
                children: code.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        inputRef: (el)=>inputs.current[index] = el,
                        value: digit,
                        onChange: (e)=>handleChange(index, e.target.value),
                        onKeyDown: (e)=>handleKeyDown(index, e),
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
                                    borderColor: getBorderColor(),
                                    borderWidth: state !== 'initial' && state !== 'filled' ? '2px' : '1px'
                                },
                                '&:hover fieldset': {
                                    borderColor: state !== 'initial' && state !== 'filled' ? getBorderColor() : undefined
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: state !== 'initial' && state !== 'filled' ? getBorderColor() : undefined
                                }
                            }
                        }
                    }, index, false, {
                        fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            state === 'invalid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: '#d32f2f',
                    fontSize: '14px',
                    mb: 2
                },
                children: "Invalid code"
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this),
            showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    mt: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TwoFAButton, {
                    type: buttonType,
                    disabled: isButtonDisabled,
                    loading: mutation.isPending,
                    onClick: buttonType === 'getNew' ? handleGetNew : handleSubmit
                }, void 0, false, {
                    fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/authorization_form/src/components/TwoFAForm.tsx",
                lineNumber: 178,
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
}),
"[project]/authorization_form/src/widgets/ui/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "symbol",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#1976d2',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
}),
"[project]/authorization_form/src/widgets/ui/AuthCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Card/Card.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/IconButton/IconButton.js [app-ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ArrowBack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/icons-material/ArrowBack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/widgets/ui/Header.tsx [app-ssr] (ecmascript)");
;
;
;
;
function AuthCard({ children, onBack, showBackButton = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
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
            showBackButton && onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                position: 'absolute',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    onClick: onBack,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ArrowBack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
"[project]/authorization_form/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$AuthForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/components/AuthForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$TwoFAForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/components/TwoFAForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$AuthCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/src/widgets/ui/AuthCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Home() {
    const [show2FA, setShow2FA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLoginSuccess = ()=>{
        setShow2FA(true);
        setError(null);
    };
    const handleBack = ()=>{
        setShow2FA(false);
        setError(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#f0f0f0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$widgets$2f$ui$2f$AuthCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    showBackButton: show2FA,
                    onBack: handleBack,
                    children: !show2FA ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$AuthForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSuccess: handleLoginSuccess,
                        setError: setError
                    }, void 0, false, {
                        fileName: "[project]/authorization_form/src/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$src$2f$components$2f$TwoFAForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
];

//# sourceMappingURL=authorization_form_src_daddbc3e._.js.map