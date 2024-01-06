"use strict";
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma;
if (process.env.NODE_ENV === "production") {
    prisma = new client_1.PrismaClient();
}
else {
    // @ts-ignore
    if (!global.prisma) {
        // @ts-ignore
        global.prisma = new client_1.PrismaClient();
    }
    // @ts-ignore
    prisma = global.prisma;
}
exports["default"] = prisma;
