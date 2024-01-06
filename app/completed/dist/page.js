'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var globalProvider_1 = require("../context/globalProvider");
var Tasks_1 = require("../components/Tasks/Tasks");
function page() {
    var completedTasks = globalProvider_1.useGlobalState().completedTasks;
    return (react_1["default"].createElement(Tasks_1["default"], { title: 'Completed Tasks', tasks: completedTasks }));
}
exports["default"] = page;
