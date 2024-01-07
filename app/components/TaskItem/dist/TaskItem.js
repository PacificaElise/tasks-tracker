'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var globalProvider_1 = require("@/app/context/globalProvider");
var icons_1 = require("@/app/utils/icons");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var formatDate_1 = require("@/app/utils/formatDate");
var TaskItem = function (_a) {
    var title = _a.title, description = _a.description, date = _a.date, isCompleted = _a.isCompleted, id = _a.id;
    var _b = globalProvider_1.useGlobalState(), theme = _b.theme, deleteTask = _b.deleteTask, updateTask = _b.updateTask, startEdit = _b.startEdit, openModal = _b.openModal, setID = _b.setID;
    return (react_1["default"].createElement(TaskItemStyled, { theme: theme },
        react_1["default"].createElement("h1", null, title),
        react_1["default"].createElement("p", null, description),
        react_1["default"].createElement("p", { className: 'date' }, formatDate_1["default"](date)),
        react_1["default"].createElement("div", { className: 'task-footer' },
            isCompleted ? (react_1["default"].createElement("button", { className: 'completed', onClick: function () {
                    var task = {
                        id: id,
                        isCompleted: !isCompleted
                    };
                    updateTask(task);
                } }, "Completed")) : (react_1["default"].createElement("button", { className: 'incomplete', onClick: function () {
                    var task = {
                        id: id,
                        isCompleted: !isCompleted
                    };
                    updateTask(task);
                } }, "Incomplete")),
            react_1["default"].createElement("button", { className: 'edit', onClick: function () {
                    startEdit();
                    setID(id);
                    openModal();
                } }, icons_1.edit),
            react_1["default"].createElement("button", { className: 'delete', onClick: function () {
                    deleteTask(id);
                } }, icons_1.trash))));
};
var TaskItemStyled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1.2rem 1rem;\n  border-radius: 1rem;\n  background-color: ", ";\n  box-shadow: ", ";\n  border: 2px solid ", ";\n\n  height: 16rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  .date {\n    margin-top: auto;\n  }\n\n  > h1 {\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n\n  .task-footer {\n    display: flex;\n    align-items: center;\n    gap: 1.2rem;\n\n    button {\n      border: none;\n      outline: none;\n      cursor: pointer;\n\n      i {\n        font-size: 1.4rem;\n        color: ", ";\n      }\n    }\n\n    .edit {\n      margin-left: auto;\n    }\n\n    .completed,\n    .incomplete {\n      display: inline-block;\n      padding: 0.4rem 1rem;\n      background: ", ";\n      border-radius: 30px;\n    }\n\n    .completed {\n      background: ", " !important;\n    }\n  }\n"], ["\n  padding: 1.2rem 1rem;\n  border-radius: 1rem;\n  background-color: ", ";\n  box-shadow: ", ";\n  border: 2px solid ", ";\n\n  height: 16rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  .date {\n    margin-top: auto;\n  }\n\n  > h1 {\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n\n  .task-footer {\n    display: flex;\n    align-items: center;\n    gap: 1.2rem;\n\n    button {\n      border: none;\n      outline: none;\n      cursor: pointer;\n\n      i {\n        font-size: 1.4rem;\n        color: ", ";\n      }\n    }\n\n    .edit {\n      margin-left: auto;\n    }\n\n    .completed,\n    .incomplete {\n      display: inline-block;\n      padding: 0.4rem 1rem;\n      background: ", ";\n      border-radius: 30px;\n    }\n\n    .completed {\n      background: ", " !important;\n    }\n  }\n"])), function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.shadow7; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.colorGrey2; }, function (props) { return props.theme.colorDanger; }, function (props) { return props.theme.colorGreenDark; });
exports["default"] = TaskItem;
var templateObject_1;
