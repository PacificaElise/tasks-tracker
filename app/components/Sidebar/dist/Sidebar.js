'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var globalProvider_1 = require("@/app/context/globalProvider");
var image_1 = require("next/image");
var menu_1 = require("@/app/utils/menu");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var Button_1 = require("../Button/Button");
var icons_1 = require("@/app/utils/icons");
var nextjs_1 = require("@clerk/nextjs");
var Sidebar = function () {
    var theme = globalProvider_1.useGlobalState().theme;
    var signOut = nextjs_1.useClerk().signOut;
    var user = nextjs_1.useUser().user;
    var _a = user || {
        firstName: '',
        lastName: '',
        imageUrl: '/profile.jpg'
    }, firstName = _a.firstName, lastName = _a.lastName, imageUrl = _a.imageUrl;
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var handleClick = function (link) {
        router.push(link);
    };
    return (react_1["default"].createElement(SidebarStyled, { theme: theme },
        react_1["default"].createElement("div", { className: 'profile' },
            react_1["default"].createElement("div", { className: 'profile-overlay' }),
            react_1["default"].createElement("div", { className: 'image' },
                react_1["default"].createElement(image_1["default"], { width: 70, height: 70, src: imageUrl, alt: 'avatar' })),
            react_1["default"].createElement("div", { className: 'user-btn absolute z-20 top-0 w-full h-full' },
                react_1["default"].createElement(nextjs_1.UserButton, null)),
            react_1["default"].createElement("h1", { className: 'capitalize' },
                firstName,
                " ",
                lastName)),
        react_1["default"].createElement("ul", { className: 'nav-items' }, menu_1["default"].map(function (item) {
            var link = item.link;
            return (react_1["default"].createElement("li", { onClick: function () { return handleClick(link); }, className: "nav-item " + (pathname === link ? 'active' : ''), key: item.id },
                item.icon,
                react_1["default"].createElement(link_1["default"], { href: link }, item.title)));
        })),
        react_1["default"].createElement("div", { className: 'sign-out relative m-6' },
            react_1["default"].createElement(Button_1["default"], { name: 'Sign Out', type: 'submit', padding: '0.4rem 0.8rem', borderRad: '0.8rem', fw: '500', fs: '1.2rem', icon: icons_1.logout, click: function () {
                    signOut(function () { return router.push('/signin'); });
                } }))));
};
var SidebarStyled = styled_components_1["default"].nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  color: ", ";\n\n\n  .toggle-nav {\n    display: none;\n    padding: 0.8rem 0.9rem;\n    position: absolute;\n    right: -69px;\n    top: 1.8rem;\n\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n\n    background-color: ", ";\n    border-right: 2px solid ", ";\n    border-top: 2px solid ", ";\n    border-bottom: 2px solid ", ";\n  }\n\n  .user-btn {\n    .cl-rootBox {\n      width: 100%;\n      height: 100%;\n\n      .cl-userButtonBox {\n        width: 100%;\n        height: 100%;\n\n        .cl-userButtonTrigger {\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n        }\n      }\n    }\n  }\n\n  .profile {\n    margin: 1.5rem;\n    padding: 1rem 0.8rem;\n    position: relative;\n\n    border-radius: 1rem;\n    cursor: pointer;\n\n    font-weight: 500;\n    color: ", ";\n\n    display: flex;\n    align-items: center;\n\n    .profile-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      backdrop-filter: blur(10px);\n      z-index: 0;\n      background: ", ";\n      transition: all 0.55s linear;\n      border-radius: 1rem;\n      border: 2px solid ", ";\n\n      opacity: 0.2;\n    }\n\n    h1 {\n      font-size: 1.2rem;\n      display: flex;\n      flex-direction: column;\n\n      line-height: 1.4rem;\n    }\n\n    .image,\n    h1 {\n      position: relative;\n      z-index: 1;\n    }\n\n    .image {\n      flex-shrink: 0;\n      display: inline-block;\n      overflow: hidden;\n      transition: all 0.5s ease;\n      border-radius: 100%;\n\n      width: 70px;\n      height: 70px;\n\n      img {\n        border-radius: 100%;\n        transition: all 0.5s ease;\n      }\n    }\n\n    > h1 {\n      margin-left: 0.8rem;\n      font-size: clamp(1.2rem, 4vw, 1.4rem);\n      line-height: 100%;\n    }\n\n    &:hover {\n      .profile-overlay {\n        opacity: 1;\n        border: 2px solid ", ";\n      }\n\n      img {\n        transform: scale(1.1);\n      }\n    }\n  }\n\n  .nav-item {\n    position: relative;\n    padding: 0.8rem 1rem 0.9rem 2.1rem;\n    margin: 0.3rem 0;\n\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    cursor: pointer;\n    align-items: center;\n\n    &::after {\n      position: absolute;\n      content: \"\";\n      left: 0;\n      top: 0;\n      width: 0;\n      height: 100%;\n      background-color: ", ";\n      z-index: 1;\n      transition: all 0.3s ease-in-out;\n    }\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      right: 0;\n      top: 0;\n      width: 0%;\n      height: 100%;\n      background-color: ", ";\n\n      border-bottom-left-radius: 5px;\n      border-top-left-radius: 5px;\n    }\n\n    a {\n      font-weight: 500;\n      transition: all 0.3s ease-in-out;\n      z-index: 2;\n      line-height: 0;\n    }\n\n    i {\n      display: flex;\n      align-items: center;\n      color: ", ";\n    }\n\n    &:hover {\n      &::after {\n        width: 100%;\n      }\n    }\n  }\n\n  .active {\n    background-color: ", ";\n\n    i,\n    a {\n      color: ", ";\n    }\n  }\n\n  .active::before {\n    width: 0.3rem;\n  }\n\n  > button {\n    margin: 1.5rem;\n"], ["\n  position: relative;\n  width: ", ";\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  color: ", ";\n\n\n  .toggle-nav {\n    display: none;\n    padding: 0.8rem 0.9rem;\n    position: absolute;\n    right: -69px;\n    top: 1.8rem;\n\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n\n    background-color: ", ";\n    border-right: 2px solid ", ";\n    border-top: 2px solid ", ";\n    border-bottom: 2px solid ", ";\n  }\n\n  .user-btn {\n    .cl-rootBox {\n      width: 100%;\n      height: 100%;\n\n      .cl-userButtonBox {\n        width: 100%;\n        height: 100%;\n\n        .cl-userButtonTrigger {\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n        }\n      }\n    }\n  }\n\n  .profile {\n    margin: 1.5rem;\n    padding: 1rem 0.8rem;\n    position: relative;\n\n    border-radius: 1rem;\n    cursor: pointer;\n\n    font-weight: 500;\n    color: ", ";\n\n    display: flex;\n    align-items: center;\n\n    .profile-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      backdrop-filter: blur(10px);\n      z-index: 0;\n      background: ", ";\n      transition: all 0.55s linear;\n      border-radius: 1rem;\n      border: 2px solid ", ";\n\n      opacity: 0.2;\n    }\n\n    h1 {\n      font-size: 1.2rem;\n      display: flex;\n      flex-direction: column;\n\n      line-height: 1.4rem;\n    }\n\n    .image,\n    h1 {\n      position: relative;\n      z-index: 1;\n    }\n\n    .image {\n      flex-shrink: 0;\n      display: inline-block;\n      overflow: hidden;\n      transition: all 0.5s ease;\n      border-radius: 100%;\n\n      width: 70px;\n      height: 70px;\n\n      img {\n        border-radius: 100%;\n        transition: all 0.5s ease;\n      }\n    }\n\n    > h1 {\n      margin-left: 0.8rem;\n      font-size: clamp(1.2rem, 4vw, 1.4rem);\n      line-height: 100%;\n    }\n\n    &:hover {\n      .profile-overlay {\n        opacity: 1;\n        border: 2px solid ", ";\n      }\n\n      img {\n        transform: scale(1.1);\n      }\n    }\n  }\n\n  .nav-item {\n    position: relative;\n    padding: 0.8rem 1rem 0.9rem 2.1rem;\n    margin: 0.3rem 0;\n\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    cursor: pointer;\n    align-items: center;\n\n    &::after {\n      position: absolute;\n      content: \"\";\n      left: 0;\n      top: 0;\n      width: 0;\n      height: 100%;\n      background-color: ", ";\n      z-index: 1;\n      transition: all 0.3s ease-in-out;\n    }\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      right: 0;\n      top: 0;\n      width: 0%;\n      height: 100%;\n      background-color: ", ";\n\n      border-bottom-left-radius: 5px;\n      border-top-left-radius: 5px;\n    }\n\n    a {\n      font-weight: 500;\n      transition: all 0.3s ease-in-out;\n      z-index: 2;\n      line-height: 0;\n    }\n\n    i {\n      display: flex;\n      align-items: center;\n      color: ", ";\n    }\n\n    &:hover {\n      &::after {\n        width: 100%;\n      }\n    }\n  }\n\n  .active {\n    background-color: ", ";\n\n    i,\n    a {\n      color: ", ";\n    }\n  }\n\n  .active::before {\n    width: 0.3rem;\n  }\n\n  > button {\n    margin: 1.5rem;\n"])), function (props) { return props.theme.sidebarWidth; }, function (props) { return props.theme.colorBg2; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.colorGrey3; }, function (props) { return props.theme.colorBg2; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.colorGrey0; }, function (props) { return props.theme.colorBg3; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.borderColor2; }, function (props) { return props.theme.activeNavLinkHover; }, function (props) { return props.theme.colorGreenDark; }, function (props) { return props.theme.colorIcons; }, function (props) { return props.theme.activeNavLink; }, function (props) { return props.theme.colorIcons2; });
exports["default"] = Sidebar;
var templateObject_1;
