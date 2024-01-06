'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var globalProvider_1 = require("../context/globalProvider");
var react_hot_toast_1 = require("react-hot-toast");
var ContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1["default"].useState(false), isReady = _b[0], setIsReady = _b[1];
    react_1["default"].useEffect(function () {
        setTimeout(function () {
            setIsReady(true);
        }, 250);
    }, []);
    if (!isReady) {
        return null;
        // (
        //   <div className='w-full h-full flex items-center justify-center'>
        //     <span className='loader'></span>
        //   </div>
        // );
    }
    return (react_1["default"].createElement(globalProvider_1.GlobalProvider, null,
        react_1["default"].createElement(react_hot_toast_1.Toaster, null),
        children));
};
exports["default"] = ContextProvider;
