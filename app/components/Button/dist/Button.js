'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var globalProvider_1 = require("@/app/context/globalProvider");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
function Button(_a) {
    var icon = _a.icon, name = _a.name, background = _a.background, padding = _a.padding, borderRad = _a.borderRad, fw = _a.fw, fs = _a.fs, click = _a.click, type = _a.type, border = _a.border, color = _a.color;
    var theme = globalProvider_1.useGlobalState().theme;
    return (react_1["default"].createElement(ButtonStyled, { type: type, style: {
            background: background,
            padding: padding || '0.5rem 1rem',
            borderRadius: borderRad || '0.5rem',
            fontWeight: fw || '500',
            fontSize: fs,
            border: border || 'none',
            color: color || theme.colorGrey0
        }, theme: theme, onClick: click },
        icon && icon,
        name));
}
var ButtonStyled = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  z-index: 5;\n  cursor: pointer;\n\n  transition: all 0.55s ease-in-out;\n\n  i {\n    margin-right: 1rem;\n    color: ", ";\n    font-size: 1.5rem;\n    transition: all 0.55s ease-in-out;\n  }\n\n  &:hover {\n    color: ", ";\n    i {\n      color: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  z-index: 5;\n  cursor: pointer;\n\n  transition: all 0.55s ease-in-out;\n\n  i {\n    margin-right: 1rem;\n    color: ", ";\n    font-size: 1.5rem;\n    transition: all 0.55s ease-in-out;\n  }\n\n  &:hover {\n    color: ", ";\n    i {\n      color: ", ";\n    }\n  }\n"])), function (props) { return props.theme.colorGrey2; }, function (props) { return props.theme.colorGrey2; }, function (props) { return props.theme.colorGrey0; }, function (props) { return props.theme.colorGrey0; });
exports["default"] = Button;
var templateObject_1;
