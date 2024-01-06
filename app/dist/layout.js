"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Sidebar_1 = require("./components/Sidebar/Sidebar");
var GlobalStylesProvider_1 = require("./providers/GlobalStylesProvider");
var ContextProvider_1 = require("./providers/ContextProvider");
var nextjs_1 = require("@clerk/nextjs");
var nextjs_toploader_1 = require("nextjs-toploader");
var nunito = google_1.Nunito({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin']
});
exports.metadata = {
    title: 'Tasks Tracker',
    description: 'Tasks Manager App'
};
function RootLayout(_a) {
    var children = _a.children;
    var userId = nextjs_1.auth().userId;
    return (React.createElement(nextjs_1.ClerkProvider, null,
        React.createElement("html", { lang: 'en' },
            React.createElement("head", null,
                React.createElement("link", { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', integrity: 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==', crossOrigin: 'anonymous', referrerPolicy: 'no-referrer' })),
            React.createElement("body", { className: nunito.className },
                React.createElement(nextjs_toploader_1["default"], { height: 2, color: '#27AE60', easing: 'cubic-bezier(0.53,0.21,0,1)' }),
                React.createElement(ContextProvider_1["default"], null,
                    React.createElement(GlobalStylesProvider_1["default"], null,
                        userId && React.createElement(Sidebar_1["default"], null),
                        React.createElement("div", { className: 'w-full' },
                            " ",
                            children)))))));
}
exports["default"] = RootLayout;
