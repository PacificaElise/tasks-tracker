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
var TaskItem_1 = require("../TaskItem/TaskItem");
var icons_1 = require("@/app/utils/icons");
var Tasks = function (_a) {
    var title = _a.title, tasks = _a.tasks;
    var theme = globalProvider_1.useGlobalState().theme;
    return (react_1["default"].createElement(TaskStyled, { theme: theme },
        react_1["default"].createElement("h1", null, title),
        react_1["default"].createElement("div", { className: 'tasks grid' },
            tasks.map(function (task) { return (react_1["default"].createElement(TaskItem_1["default"], { key: task.id, title: task.title, description: task.description, date: task.date, isCompleted: task.isCompleted, id: task.id })); }),
            react_1["default"].createElement("button", { className: 'create-task' },
                icons_1.add,
                "Add New Task"))));
};
var TaskStyled = styled_components_1["default"].main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 2rem;\n  width: 100%;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 1rem;\n  height: 100%;\n\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n\n  .btn-rounded {\n    position: fixed;\n    top: 4.9rem;\n    right: 5.1rem;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n\n    background-color: ", ";\n    border: 2px solid ", ";\n    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);\n    color: ", ";\n    font-size: 1.4rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media screen and (max-width: 768px) {\n      top: 3rem;\n      right: 3.5rem;\n    }\n  }\n\n  .tasks {\n    margin: 2rem 0;\n  }\n\n  > h1 {\n    font-size: clamp(1.5rem, 2vw, 2rem);\n    font-weight: 800;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.5rem;\n      left: 0;\n      width: 3rem;\n      height: 0.2rem;\n      background-color: ", ";\n      border-radius: 0.5rem;\n    }\n  }\n\n  .create-task {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n\n    height: 16rem;\n    color: ", ";\n    font-weight: 600;\n    cursor: pointer;\n    border-radius: 1rem;\n    border: 3px dashed ", ";\n    transition: all 0.3s ease;\n\n    i {\n      font-size: 1.5rem;\n      margin-right: 0.2rem;\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  padding: 2rem;\n  width: 100%;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 1rem;\n  height: 100%;\n\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n\n  .btn-rounded {\n    position: fixed;\n    top: 4.9rem;\n    right: 5.1rem;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n\n    background-color: ", ";\n    border: 2px solid ", ";\n    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);\n    color: ", ";\n    font-size: 1.4rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media screen and (max-width: 768px) {\n      top: 3rem;\n      right: 3.5rem;\n    }\n  }\n\n  .tasks {\n    margin: 2rem 0;\n  }\n\n  > h1 {\n    font-size: clamp(1.5rem, 2vw, 2rem);\n    font-weight: 800;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.5rem;\n      left: 0;\n      width: 3rem;\n      height: 0.2rem;\n      background-color: ", ";\n      border-radius: 0.5rem;\n    }\n  }\n\n  .create-task {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n\n    height: 16rem;\n    color: ", ";\n    font-weight: 600;\n    cursor: pointer;\n    border-radius: 1rem;\n    border: 3px dashed ", ";\n    transition: all 0.3s ease;\n\n    i {\n      font-size: 1.5rem;\n      margin-right: 0.2rem;\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n"])), function (props) { return props.theme.colorBg2; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.colorBg; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.colorGrey2; }, function (props) { return props.theme.colorPrimaryGreen; }, function (props) { return props.theme.colorGrey2; }, function (props) { return props.theme.colorGrey5; }, function (props) { return props.theme.colorGrey5; }, function (props) { return props.theme.colorGrey0; });
exports["default"] = Tasks;
var templateObject_1;
