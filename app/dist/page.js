'use client';
"use strict";
exports.__esModule = true;
var Tasks_1 = require("./components/Tasks/Tasks");
var globalProvider_1 = require("./context/globalProvider");
var Home = function () {
    var tasks = globalProvider_1.useGlobalState().tasks;
    return (React.createElement(Tasks_1["default"], { title: 'All Tasks', tasks: tasks }));
};
exports["default"] = Home;
