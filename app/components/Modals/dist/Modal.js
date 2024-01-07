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
function Modal(_a) {
    var content = _a.content;
    var _b = globalProvider_1.useGlobalState(), closeModal = _b.closeModal, finishEdit = _b.finishEdit;
    var theme = globalProvider_1.useGlobalState().theme;
    return (react_1["default"].createElement(ModalStyled, { theme: theme },
        react_1["default"].createElement("div", { className: 'modal-overlay', onClick: function () {
                finishEdit();
                closeModal();
            } }),
        react_1["default"].createElement("div", { className: 'modal-content' }, content)));
}
var ModalStyled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .modal-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.45);\n    filter: blur(4px);\n  }\n\n  .modal-content {\n    margin: 0 1rem;\n\n    padding: 2rem;\n    position: relative;\n    max-width: 630px;\n    width: 100%;\n    z-index: 100;\n\n    border-radius: 1rem;\n    background-color: ", ";\n    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);\n    border-radius: ", ";\n\n    @media screen and (max-width: 450px) {\n      font-size: 90%;\n    }\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .modal-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.45);\n    filter: blur(4px);\n  }\n\n  .modal-content {\n    margin: 0 1rem;\n\n    padding: 2rem;\n    position: relative;\n    max-width: 630px;\n    width: 100%;\n    z-index: 100;\n\n    border-radius: 1rem;\n    background-color: ", ";\n    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);\n    border-radius: ", ";\n\n    @media screen and (max-width: 450px) {\n      font-size: 90%;\n    }\n  }\n"])), function (props) { return props.theme.colorBg2; }, function (props) { return props.theme.borderRadiusMd2; });
exports["default"] = Modal;
var templateObject_1;
