module.exports = [
"[project]/authorization_form/node_modules/@mui/material/styles/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experimental_sx",
    ()=>experimental_sx
]);
'use client';
;
;
;
;
function experimental_sx() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The \`experimental_sx\` has been moved to \`theme.unstable_sx\`.For more details, see https://github.com/mui/material-ui/pull/35150.` : "TURBOPACK unreachable");
}
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
;
;
;
;
;
;
;
;
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
"[project]/authorization_form/node_modules/@mui/material/styles/adaptV4Theme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>adaptV4Theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createBreakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createBreakpoints$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/createTheme/createBreakpoints.js [app-ssr] (ecmascript) <export default as createBreakpoints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createSpacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSpacing$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/createTheme/createSpacing.js [app-ssr] (ecmascript) <export default as createSpacing>");
;
;
const _excluded = [
    "defaultProps",
    "mixins",
    "overrides",
    "palette",
    "props",
    "styleOverrides"
], _excluded2 = [
    "type",
    "mode"
];
;
function adaptV4Theme(inputTheme) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn([
            'MUI: adaptV4Theme() is deprecated.',
            'Follow the upgrade guide on https://mui.com/r/migration-v4#theme.'
        ].join('\n'));
    }
    const { defaultProps = {}, mixins = {}, overrides = {}, palette = {}, props = {}, styleOverrides = {} } = inputTheme, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inputTheme, _excluded);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, other, {
        components: {}
    });
    // default props
    Object.keys(defaultProps).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.defaultProps = defaultProps[component];
        theme.components[component] = componentValue;
    });
    Object.keys(props).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.defaultProps = props[component];
        theme.components[component] = componentValue;
    });
    // CSS overrides
    Object.keys(styleOverrides).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.styleOverrides = styleOverrides[component];
        theme.components[component] = componentValue;
    });
    Object.keys(overrides).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.styleOverrides = overrides[component];
        theme.components[component] = componentValue;
    });
    // theme.spacing
    theme.spacing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createSpacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createSpacing$3e$__["createSpacing"])(inputTheme.spacing);
    // theme.mixins.gutters
    const breakpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createBreakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createBreakpoints$3e$__["createBreakpoints"])(inputTheme.breakpoints || {});
    const spacing = theme.spacing;
    theme.mixins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        gutters: (styles = {})=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                paddingLeft: spacing(2),
                paddingRight: spacing(2)
            }, styles, {
                [breakpoints.up('sm')]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    paddingLeft: spacing(3),
                    paddingRight: spacing(3)
                }, styles[breakpoints.up('sm')])
            });
        }
    }, mixins);
    const { type: typeInput, mode: modeInput } = palette, paletteRest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(palette, _excluded2);
    const finalMode = modeInput || typeInput || 'light';
    theme.palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        // theme.palette.text.hint
        text: {
            hint: finalMode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)'
        },
        mode: finalMode,
        type: finalMode
    }, paletteRest);
    return theme;
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
"[project]/authorization_form/node_modules/@mui/material/styles/createMuiStrictModeTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createMuiStrictModeTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)");
;
;
function createMuiStrictModeTheme(options, ...args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        unstable_strictMode: true
    }, options), ...args);
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/createStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyles
]);
let warnedOnce = false;
function createStyles(styles) {
    if (!warnedOnce) {
        console.warn([
            'MUI: createStyles from @mui/material/styles is deprecated.',
            'Please use @mui/styles/createStyles'
        ].join('\n'));
        warnedOnce = true;
    }
    return styles;
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/cssUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignProperty",
    ()=>alignProperty,
    "convertLength",
    ()=>convertLength,
    "fontGrid",
    ()=>fontGrid,
    "getUnit",
    ()=>getUnit,
    "isUnitless",
    ()=>isUnitless,
    "responsiveProperty",
    ()=>responsiveProperty,
    "toUnitless",
    ()=>toUnitless
]);
function isUnitless(value) {
    return String(parseFloat(value)).length === String(value).length;
}
function getUnit(input) {
    return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}
function toUnitless(length) {
    return parseFloat(length);
}
function convertLength(baseFontSize) {
    return (length, toUnit)=>{
        const fromUnit = getUnit(length);
        // Optimize for cases where `from` and `to` units are accidentally the same.
        if (fromUnit === toUnit) {
            return length;
        }
        // Convert input length to pixels.
        let pxLength = toUnitless(length);
        if (fromUnit !== 'px') {
            if (fromUnit === 'em') {
                pxLength = toUnitless(length) * toUnitless(baseFontSize);
            } else if (fromUnit === 'rem') {
                pxLength = toUnitless(length) * toUnitless(baseFontSize);
            }
        }
        // Convert length in pixels to the output unit
        let outputLength = pxLength;
        if (toUnit !== 'px') {
            if (toUnit === 'em') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else if (toUnit === 'rem') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else {
                return length;
            }
        }
        return parseFloat(outputLength.toFixed(5)) + toUnit;
    };
}
function alignProperty({ size, grid }) {
    const sizeBelow = size - size % grid;
    const sizeAbove = sizeBelow + grid;
    return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
function fontGrid({ lineHeight, pixels, htmlFontSize }) {
    return pixels / (lineHeight * htmlFontSize);
}
function responsiveProperty({ cssProperty, min, max, unit = 'rem', breakpoints = [
    600,
    900,
    1200
], transform = null }) {
    const output = {
        [cssProperty]: `${min}${unit}`
    };
    const factor = (max - min) / breakpoints[breakpoints.length - 1];
    breakpoints.forEach((breakpoint)=>{
        let value = min + factor * breakpoint;
        if (transform !== null) {
            value = transform(value);
        }
        output[`@media (min-width:${breakpoint}px)`] = {
            [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
        };
    });
    return output;
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/responsiveFontSizes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>responsiveFontSizes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/cssUtils.js [app-ssr] (ecmascript)");
;
;
;
function responsiveFontSizes(themeInput, options = {}) {
    const { breakpoints = [
        'sm',
        'md',
        'lg'
    ], disableAlign = false, factor = 2, variants = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline'
    ] } = options;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, themeInput);
    theme.typography = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, theme.typography);
    const typography = theme.typography;
    // Convert between CSS lengths e.g. em->px or px->rem
    // Set the baseFontSize for your project. Defaults to 16px (also the browser default).
    const convert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertLength"])(typography.htmlFontSize);
    const breakpointValues = breakpoints.map((x)=>theme.breakpoints.values[x]);
    variants.forEach((variant)=>{
        const style = typography[variant];
        if (!style) {
            return;
        }
        const remFontSize = parseFloat(convert(style.fontSize, 'rem'));
        if (remFontSize <= 1) {
            return;
        }
        const maxFontSize = remFontSize;
        const minFontSize = 1 + (maxFontSize - 1) / factor;
        let { lineHeight } = style;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUnitless"])(lineHeight) && !disableAlign) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : "TURBOPACK unreachable");
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUnitless"])(lineHeight)) {
            // make it unitless
            lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
        }
        let transform = null;
        if (!disableAlign) {
            transform = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alignProperty"])({
                    size: value,
                    grid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontGrid"])({
                        pixels: 4,
                        lineHeight,
                        htmlFontSize: typography.htmlFontSize
                    })
                });
        }
        typography[variant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, style, (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["responsiveProperty"])({
            cssProperty: 'fontSize',
            min: minFontSize,
            max: maxFontSize,
            unit: 'rem',
            breakpoints: breakpointValues,
            transform
        }));
    });
    return theme;
}
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
"[project]/authorization_form/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useTheme() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"](theme);
    }
    return theme[__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]] || theme;
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/useThemeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useThemeProps({ props, name }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        props,
        name,
        defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        themeId: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    });
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/slotShouldForwardProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// copied from @mui/system/createStyled
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const __TURBOPACK__default__export__ = slotShouldForwardProp;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/rootShouldForwardProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$slotShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/slotShouldForwardProp.js [app-ssr] (ecmascript)");
;
const rootShouldForwardProp = (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$slotShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prop) && prop !== 'classes';
const __TURBOPACK__default__export__ = rootShouldForwardProp;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/styled.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/createStyled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/rootShouldForwardProp.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    rootShouldForwardProp: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = styled;
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
"[project]/authorization_form/node_modules/@mui/material/styles/makeStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>makeStyles
]);
;
function makeStyles() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: makeStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : "TURBOPACK unreachable");
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/withStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>withStyles
]);
;
function withStyles() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: withStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : "TURBOPACK unreachable");
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/withTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>withTheme
]);
;
function withTheme() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: withTheme is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : "TURBOPACK unreachable");
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>shouldSkipGeneratingVar
]);
function shouldSkipGeneratingVar(keys) {
    var _keys$;
    return !!keys[0].match(/(cssVarPrefix|modularCssLayers|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
    keys[0] === 'palette' && !!((_keys$ = keys[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/getOverlayAlpha.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getOverlayAlpha = (elevation)=>{
    let alphaValue;
    if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
    } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return (alphaValue / 100).toFixed(2);
};
const __TURBOPACK__default__export__ = getOverlayAlpha;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/experimental_extendTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGetCssVar",
    ()=>createGetCssVar,
    "default",
    ()=>extendTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createGetCssVar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createGetCssVar$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/cssVars/createGetCssVar.js [app-ssr] (ecmascript) <export default as unstable_createGetCssVar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$prepareCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_prepareCssVars$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/cssVars/prepareCssVars.js [app-ssr] (ecmascript) <export default as unstable_prepareCssVars>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-ssr] (ecmascript) <export default as unstable_defaultSxConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shouldSkipGeneratingVar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/getOverlayAlpha.js [app-ssr] (ecmascript)");
;
;
const _excluded = [
    "colorSchemes",
    "cssVarPrefix",
    "shouldSkipGeneratingVar"
], _excluded2 = [
    "palette"
];
;
;
;
;
;
;
;
const defaultDarkOverlays = [
    ...Array(25)
].map((_, index)=>{
    if (index === 0) {
        return undefined;
    }
    const overlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(index);
    return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function assignNode(obj, keys) {
    keys.forEach((k)=>{
        if (!obj[k]) {
            obj[k] = {};
        }
    });
}
function setColor(obj, key, defaultValue) {
    if (!obj[key] && defaultValue) {
        obj[key] = defaultValue;
    }
}
function toRgb(color) {
    if (!color || !color.startsWith('hsl')) {
        return color;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hslToRgb"])(color);
}
function setColorChannel(obj, key) {
    if (!(`${key}Channel` in obj)) {
        // custom channel token is not provided, generate one.
        // if channel token can't be generated, show a warning.
        obj[`${key}Channel`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
    }
}
const silent = (fn)=>{
    try {
        return fn();
    } catch (error) {
    // ignore error
    }
    return undefined;
};
const createGetCssVar = (cssVarPrefix = 'mui')=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createGetCssVar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createGetCssVar$3e$__["unstable_createGetCssVar"])(cssVarPrefix);
function extendTheme(options = {}, ...args) {
    var _colorSchemesInput$li, _colorSchemesInput$da, _colorSchemesInput$li2, _colorSchemesInput$li3, _colorSchemesInput$da2, _colorSchemesInput$da3;
    const { colorSchemes: colorSchemesInput = {}, cssVarPrefix = 'mui', shouldSkipGeneratingVar = __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shouldSkipGeneratingVar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] } = options, input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options, _excluded);
    const getCssVar = createGetCssVar(cssVarPrefix);
    const _createThemeWithoutVa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, input, colorSchemesInput.light && {
        palette: (_colorSchemesInput$li = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li.palette
    })), { palette: lightPalette } = _createThemeWithoutVa, muiTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_createThemeWithoutVa, _excluded2);
    const { palette: darkPalette } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        palette: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            mode: 'dark'
        }, (_colorSchemesInput$da = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da.palette)
    });
    let theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, muiTheme, {
        cssVarPrefix,
        getCssVar,
        colorSchemes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, colorSchemesInput, {
            light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, colorSchemesInput.light, {
                palette: lightPalette,
                opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    inputPlaceholder: 0.42,
                    inputUnderline: 0.42,
                    switchTrackDisabled: 0.12,
                    switchTrack: 0.38
                }, (_colorSchemesInput$li2 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li2.opacity),
                overlays: ((_colorSchemesInput$li3 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li3.overlays) || []
            }),
            dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, colorSchemesInput.dark, {
                palette: darkPalette,
                opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    inputPlaceholder: 0.5,
                    inputUnderline: 0.7,
                    switchTrackDisabled: 0.2,
                    switchTrack: 0.3
                }, (_colorSchemesInput$da2 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da2.opacity),
                overlays: ((_colorSchemesInput$da3 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da3.overlays) || defaultDarkOverlays
            })
        })
    });
    Object.keys(theme.colorSchemes).forEach((key)=>{
        const palette = theme.colorSchemes[key].palette;
        const setCssVarColor = (cssVar)=>{
            const tokens = cssVar.split('-');
            const color = tokens[1];
            const colorToken = tokens[2];
            return getCssVar(cssVar, palette[color][colorToken]);
        };
        // attach black & white channels to common node
        if (key === 'light') {
            setColor(palette.common, 'background', '#fff');
            setColor(palette.common, 'onBackground', '#000');
        } else {
            setColor(palette.common, 'background', '#000');
            setColor(palette.common, 'onBackground', '#fff');
        }
        // assign component variables
        assignNode(palette, [
            'Alert',
            'AppBar',
            'Avatar',
            'Button',
            'Chip',
            'FilledInput',
            'LinearProgress',
            'Skeleton',
            'Slider',
            'SnackbarContent',
            'SpeedDialAction',
            'StepConnector',
            'StepContent',
            'Switch',
            'TableCell',
            'Tooltip'
        ]);
        if (key === 'light') {
            setColor(palette.Alert, 'errorColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>lightPalette.getContrastText(palette.error.main)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>lightPalette.getContrastText(palette.info.main)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>lightPalette.getContrastText(palette.success.main)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>lightPalette.getContrastText(palette.warning.main)));
            setColor(palette.Alert, 'errorStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
            setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.primary.main, 0.62));
            setColor(palette.LinearProgress, 'secondaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.secondary.main, 0.62));
            setColor(palette.LinearProgress, 'errorBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.main, 0.62));
            setColor(palette.LinearProgress, 'infoBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.main, 0.62));
            setColor(palette.LinearProgress, 'successBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.main, 0.62));
            setColor(palette.LinearProgress, 'warningBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.main, 0.62));
            setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
            setColor(palette.Slider, 'primaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.primary.main, 0.62));
            setColor(palette.Slider, 'secondaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.secondary.main, 0.62));
            setColor(palette.Slider, 'errorTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.main, 0.62));
            setColor(palette.Slider, 'infoTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.main, 0.62));
            setColor(palette.Slider, 'successTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.main, 0.62));
            setColor(palette.Slider, 'warningTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.main, 0.62));
            const snackbarContentBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.default, 0.8);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>lightPalette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
            setColor(palette.Switch, 'primaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.primary.main, 0.62));
            setColor(palette.Switch, 'secondaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.secondary.main, 0.62));
            setColor(palette.Switch, 'errorDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.main, 0.62));
            setColor(palette.Switch, 'infoDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.main, 0.62));
            setColor(palette.Switch, 'successDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.main, 0.62));
            setColor(palette.Switch, 'warningDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.main, 0.62));
            setColor(palette.TableCell, 'border', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.divider, 1), 0.88));
            setColor(palette.Tooltip, 'bg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.grey[700], 0.92));
        } else {
            setColor(palette.Alert, 'errorColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>darkPalette.getContrastText(palette.error.dark)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>darkPalette.getContrastText(palette.info.dark)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>darkPalette.getContrastText(palette.success.dark)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>darkPalette.getContrastText(palette.warning.dark)));
            setColor(palette.Alert, 'errorStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
            setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
            setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
            setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.primary.main, 0.5));
            setColor(palette.LinearProgress, 'secondaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.secondary.main, 0.5));
            setColor(palette.LinearProgress, 'errorBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.main, 0.5));
            setColor(palette.LinearProgress, 'infoBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.main, 0.5));
            setColor(palette.LinearProgress, 'successBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.main, 0.5));
            setColor(palette.LinearProgress, 'warningBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.main, 0.5));
            setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
            setColor(palette.Slider, 'primaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.primary.main, 0.5));
            setColor(palette.Slider, 'secondaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.secondary.main, 0.5));
            setColor(palette.Slider, 'errorTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.main, 0.5));
            setColor(palette.Slider, 'infoTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.main, 0.5));
            setColor(palette.Slider, 'successTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.main, 0.5));
            setColor(palette.Slider, 'warningTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.main, 0.5));
            const snackbarContentBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.default, 0.98);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>darkPalette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'primaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.primary.main, 0.55));
            setColor(palette.Switch, 'secondaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.secondary.main, 0.55));
            setColor(palette.Switch, 'errorDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.main, 0.55));
            setColor(palette.Switch, 'infoDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.main, 0.55));
            setColor(palette.Switch, 'successDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.main, 0.55));
            setColor(palette.Switch, 'warningDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.main, 0.55));
            setColor(palette.TableCell, 'border', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeDarken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.divider, 1), 0.68));
            setColor(palette.Tooltip, 'bg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.grey[700], 0.92));
        }
        // MUI X - DataGrid needs this token.
        setColorChannel(palette.background, 'default');
        // added for consistency with the `background.default` token
        setColorChannel(palette.background, 'paper');
        setColorChannel(palette.common, 'background');
        setColorChannel(palette.common, 'onBackground');
        setColorChannel(palette, 'divider');
        Object.keys(palette).forEach((color)=>{
            const colors = palette[color];
            // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.
            if (colors && typeof colors === 'object') {
                // Silent the error for custom palettes.
                if (colors.main) {
                    setColor(palette[color], 'mainChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.main)));
                }
                if (colors.light) {
                    setColor(palette[color], 'lightChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.light)));
                }
                if (colors.dark) {
                    setColor(palette[color], 'darkChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.dark)));
                }
                if (colors.contrastText) {
                    setColor(palette[color], 'contrastTextChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.contrastText)));
                }
                if (color === 'text') {
                    // Text colors: text.primary, text.secondary
                    setColorChannel(palette[color], 'primary');
                    setColorChannel(palette[color], 'secondary');
                }
                if (color === 'action') {
                    // Action colors: action.active, action.selected
                    if (colors.active) {
                        setColorChannel(palette[color], 'active');
                    }
                    if (colors.selected) {
                        setColorChannel(palette[color], 'selected');
                    }
                }
            }
        });
    });
    theme = args.reduce((acc, argument)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(acc, argument), theme);
    const parserConfig = {
        prefix: cssVarPrefix,
        shouldSkipGeneratingVar
    };
    const { vars: themeVars, generateCssVars } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$prepareCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_prepareCssVars$3e$__["unstable_prepareCssVars"])(theme, parserConfig);
    theme.vars = themeVars;
    theme.generateCssVars = generateCssVars;
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar;
    theme.unstable_sxConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__["unstable_defaultSxConfig"], input == null ? void 0 : input.unstable_sxConfig);
    theme.unstable_sx = function sx(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            sx: props,
            theme: this
        });
    };
    return theme;
}
}),
"[project]/authorization_form/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultMode="dark"`
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const excludeVariablesFromRoot = (cssVarPrefix)=>[
        ...[
            ...Array(24)
        ].map((_, index)=>`--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index + 1}`),
        `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`,
        `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`
    ];
const __TURBOPACK__default__export__ = excludeVariablesFromRoot;
}),
"[project]/authorization_form/node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultConfig",
    ()=>defaultConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
const defaultConfig = {
    attribute: 'data-mui-color-scheme',
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode'
};
const __TURBOPACK__default__export__ = function InitColorSchemeScript(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, defaultConfig, props));
};
}),
"[project]/authorization_form/node_modules/@mui/material/styles/CssVarsProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experimental_CssVarsProvider",
    ()=>CssVarsProvider,
    "getInitColorSchemeScript",
    ()=>getInitColorSchemeScript,
    "useColorScheme",
    ()=>useColorScheme
]);
// do not remove the following import (https://github.com/microsoft/TypeScript/issues/29808#issuecomment-1320713018)
/* eslint-disable @typescript-eslint/no-unused-vars */ // @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createCssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createCssVarsProvider$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js [app-ssr] (ecmascript) <export default as unstable_createCssVarsProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$experimental_extendTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/experimental_extendTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$excludeVariablesFromRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$experimental_extendTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const { CssVarsProvider, useColorScheme, getInitColorSchemeScript: getInitColorSchemeScriptSystem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createCssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createCssVarsProvider$3e$__["unstable_createCssVarsProvider"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    theme: defaultTheme,
    attribute: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].attribute,
    colorSchemeStorageKey: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].colorSchemeStorageKey,
    modeStorageKey: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].modeStorageKey,
    defaultColorScheme: {
        light: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].defaultLightColorScheme,
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].defaultDarkColorScheme
    },
    resolveTheme: (theme)=>{
        const newTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, theme, {
            typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme.palette, theme.typography)
        });
        newTheme.unstable_sx = function sx(props) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                sx: props,
                theme: this
            });
        };
        return newTheme;
    },
    excludeVariablesFromRoot: __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$excludeVariablesFromRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
const getInitColorSchemeScript = getInitColorSchemeScriptSystem;
;
}),
"[project]/authorization_form/node_modules/@mui/material/styles/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experimental_CssVarsProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Experimental_CssVarsProvider"],
    "StyledEngineProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$StyledEngineProvider$2f$StyledEngineProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StyledEngineProvider$3e$__["StyledEngineProvider"],
    "THEME_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "ThemeProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "adaptV4Theme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$adaptV4Theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "alpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"],
    "createMuiTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMuiTheme"],
    "createStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "createTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "css",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"],
    "darken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darken"],
    "decomposeColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decomposeColor"],
    "duration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["duration"],
    "easing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easing"],
    "emphasize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emphasize"],
    "experimentalStyled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "experimental_extendTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$experimental_extendTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "experimental_sx",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["experimental_sx"],
    "getContrastRatio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContrastRatio"],
    "getInitColorSchemeScript",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitColorSchemeScript"],
    "getLuminance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLuminance"],
    "getOverlayAlpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "hexToRgb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToRgb"],
    "hslToRgb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hslToRgb"],
    "keyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"],
    "lighten",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lighten"],
    "makeStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$makeStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "private_createMixins",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "private_createTypography",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "private_excludeVariablesFromRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$excludeVariablesFromRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "recomposeColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recomposeColor"],
    "responsiveFontSizes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$responsiveFontSizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "rgbToHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgbToHex"],
    "shouldSkipGeneratingVar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shouldSkipGeneratingVar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "styled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "unstable_createMuiStrictModeTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMuiStrictModeTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "unstable_getUnit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnit"],
    "unstable_toUnitless",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUnitless"],
    "useColorScheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"],
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "useThemeProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "withStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$withStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "withTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$withTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$adaptV4Theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/adaptV4Theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/system/esm/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@emotion/react/dist/emotion-react.development.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMuiStrictModeTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createMuiStrictModeTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/cssUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$responsiveFontSizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/responsiveFontSizes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTransitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/useThemeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/styled.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$StyledEngineProvider$2f$StyledEngineProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StyledEngineProvider$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js [app-ssr] (ecmascript) <export default as StyledEngineProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$makeStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/makeStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$withStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/withStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$withTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/withTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/CssVarsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$experimental_extendTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/experimental_extendTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/getOverlayAlpha.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shouldSkipGeneratingVar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/createMixins.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$excludeVariablesFromRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-ssr] (ecmascript)");
}),
"[project]/authorization_form/node_modules/@mui/material/CssBaseline/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
'use client';
;
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
"[project]/authorization_form/node_modules/@mui/material/CssBaseline/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/CssBaseline/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$authorization_form$2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/authorization_form/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=54a8a_%40mui_material_8db0b114._.js.map