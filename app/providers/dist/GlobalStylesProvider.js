'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var GlobalStylesProvider = function (_a) {
    var children = _a.children;
    return react_1["default"].createElement(GlobalStyles, null, children);
};
var GlobalStyles = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 2.5rem;\n  display: flex;\n  gap: 2.5rem;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n\n  // @media screen and (max-width: 768px) {\n  //   padding: 1rem;\n  //   gap: 1rem;\n  // }\n\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 1.5rem;\n  }\n"], ["\n  padding: 2.5rem;\n  display: flex;\n  gap: 2.5rem;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n\n  // @media screen and (max-width: 768px) {\n  //   padding: 1rem;\n  //   gap: 1rem;\n  // }\n\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 1.5rem;\n  }\n"])));
exports["default"] = GlobalStylesProvider;
var templateObject_1;
