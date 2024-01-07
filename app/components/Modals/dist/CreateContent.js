'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var globalProvider_1 = require("@/app/context/globalProvider");
var axios_1 = require("axios");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var styled_components_1 = require("styled-components");
var Button_1 = require("../Button/Button");
var icons_1 = require("@/app/utils/icons");
function CreateContent() {
    var _this = this;
    var _a = react_1.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(''), description = _b[0], setDescription = _b[1];
    var _c = react_1.useState(''), date = _c[0], setDate = _c[1];
    var _d = react_1.useState(false), completed = _d[0], setCompleted = _d[1];
    var _e = react_1.useState(false), important = _e[0], setImportant = _e[1];
    var _f = globalProvider_1.useGlobalState(), theme = _f.theme, allTasks = _f.allTasks, closeModal = _f.closeModal;
    var handleChange = function (name) { return function (e) {
        switch (name) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'important':
                setImportant(e.target.checked);
                break;
            default:
                break;
        }
    }; };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var task, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    task = {
                        title: title,
                        description: description,
                        date: date,
                        completed: completed,
                        important: important
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post('/api/tasks', task)];
                case 2:
                    res = _a.sent();
                    if (res.data.error) {
                        react_hot_toast_1["default"].error(res.data.error);
                    }
                    if (!res.data.error) {
                        react_hot_toast_1["default"].success('Task created successfully.');
                        allTasks();
                        closeModal();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    react_hot_toast_1["default"].error('Something went wrong.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(CreateContentStyled, { onSubmit: handleSubmit, theme: theme },
        react_1["default"].createElement("h1", null, "Create a Task"),
        react_1["default"].createElement("div", { className: 'input-control' },
            react_1["default"].createElement("label", { htmlFor: 'title' }, "Title"),
            react_1["default"].createElement("input", { type: 'text', id: 'title', value: title, name: 'title', onChange: handleChange('title'), placeholder: 'e.g, Next.js Auth' })),
        react_1["default"].createElement("div", { className: 'input-control' },
            react_1["default"].createElement("label", { htmlFor: 'description' }, "Description"),
            react_1["default"].createElement("textarea", { value: description, onChange: handleChange('description'), name: 'description', id: 'description', rows: 4, placeholder: 'e.g, Learn Next.js Auth' })),
        react_1["default"].createElement("div", { className: 'input-control' },
            react_1["default"].createElement("label", { htmlFor: 'date' }, "Date"),
            react_1["default"].createElement("input", { value: date, onChange: handleChange('date'), type: 'date', name: 'date', id: 'date' })),
        react_1["default"].createElement("div", { className: 'input-control toggler' },
            react_1["default"].createElement("label", { htmlFor: 'completed' }, "Toggle Completed"),
            react_1["default"].createElement("input", { value: completed.toString(), onChange: handleChange('completed'), type: 'checkbox', name: 'completed', id: 'completed' })),
        react_1["default"].createElement("div", { className: 'input-control toggler' },
            react_1["default"].createElement("label", { htmlFor: 'important' }, "Toggle Important"),
            react_1["default"].createElement("input", { value: important.toString(), onChange: handleChange('important'), type: 'checkbox', name: 'important', id: 'important' })),
        react_1["default"].createElement("div", { className: 'submit-btn flex justify-end' },
            react_1["default"].createElement(Button_1["default"], { type: 'submit', name: 'Create Task', icon: icons_1.add, padding: '0.8rem 2rem', borderRad: '0.8rem', fw: '500', fs: '1.2rem', background: theme.colorPrimary }))));
}
var CreateContentStyled = styled_components_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  > h1 {\n    font-size: clamp(1.2rem, 5vw, 1.6rem);\n    font-weight: 600;\n  }\n\n  color: ", ";\n\n  .input-control {\n    position: relative;\n    margin: 1.6rem 0;\n    font-weight: 500;\n\n    @media screen and (max-width: 450px) {\n      margin: 1rem 0;\n    }\n\n    label {\n      margin-bottom: 0.5rem;\n      display: inline-block;\n      font-size: clamp(0.9rem, 5vw, 1.2rem);\n\n      span {\n        color: ", ";\n      }\n    }\n\n    input,\n    textarea {\n      width: 100%;\n      padding: 1rem;\n\n      resize: none;\n      background-color: ", ";\n      color: ", ";\n      border-radius: 0.5rem;\n    }\n  }\n\n  .submit-btn button {\n    transition: all 0.3s ease-in-out;\n\n    @media screen and (max-width: 500px) {\n      font-size: 0.9rem !important;\n      padding: 0.6rem 1rem !important;\n\n      i {\n        font-size: 1.2rem !important;\n        margin-right: 0.5rem !important;\n      }\n    }\n\n    i {\n      color: ", ";\n    }\n\n    &:hover {\n      background: ", " !important;\n      color: ", " !important;\n    }\n  }\n\n  .toggler {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    cursor: pointer;\n\n    label {\n      flex: 1;\n    }\n\n    input {\n      width: initial;\n    }\n  }\n"], ["\n  > h1 {\n    font-size: clamp(1.2rem, 5vw, 1.6rem);\n    font-weight: 600;\n  }\n\n  color: ", ";\n\n  .input-control {\n    position: relative;\n    margin: 1.6rem 0;\n    font-weight: 500;\n\n    @media screen and (max-width: 450px) {\n      margin: 1rem 0;\n    }\n\n    label {\n      margin-bottom: 0.5rem;\n      display: inline-block;\n      font-size: clamp(0.9rem, 5vw, 1.2rem);\n\n      span {\n        color: ", ";\n      }\n    }\n\n    input,\n    textarea {\n      width: 100%;\n      padding: 1rem;\n\n      resize: none;\n      background-color: ", ";\n      color: ", ";\n      border-radius: 0.5rem;\n    }\n  }\n\n  .submit-btn button {\n    transition: all 0.3s ease-in-out;\n\n    @media screen and (max-width: 500px) {\n      font-size: 0.9rem !important;\n      padding: 0.6rem 1rem !important;\n\n      i {\n        font-size: 1.2rem !important;\n        margin-right: 0.5rem !important;\n      }\n    }\n\n    i {\n      color: ", ";\n    }\n\n    &:hover {\n      background: ", " !important;\n      color: ", " !important;\n    }\n  }\n\n  .toggler {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    cursor: pointer;\n\n    label {\n      flex: 1;\n    }\n\n    input {\n      width: initial;\n    }\n  }\n"])), function (props) { return props.theme.colorGrey1; }, function (props) { return props.theme.colorGrey3; }, function (props) { return props.theme.colorGreyDark; }, function (props) { return props.theme.colorGrey2; }, function (props) { return props.theme.colorGrey0; }, function (props) { return props.theme.colorPrimary2; }, function (props) { return props.theme.colorWhite; });
exports["default"] = CreateContent;
var templateObject_1;
