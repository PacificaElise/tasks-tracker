"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var moment = require('moment/moment');

var formatDate = function formatDate(date) {
  return moment(date).format('DD/MM/YYYY');
};

var _default = formatDate;
exports["default"] = _default;