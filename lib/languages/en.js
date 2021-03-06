"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.COMMON = exports.CALENDAR_MONTHS = exports.WEEK_DAYS = void 0;
var WEEK_DAYS = {
  sunday: 'Sun',
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat'
};
exports.WEEK_DAYS = WEEK_DAYS;
var CALENDAR_MONTHS = {
  january: 'Jan',
  february: 'Feb',
  march: 'Mar',
  april: 'Apr',
  may: 'May',
  june: 'Jun',
  july: 'Jul',
  august: 'Aug',
  september: 'Sep',
  october: 'Oct',
  november: 'Nov',
  dcember: 'Dec'
};
exports.CALENDAR_MONTHS = CALENDAR_MONTHS;
var COMMON = {
  year: '-',
  month: ' ',
  day: ' '
};
exports.COMMON = COMMON;

var _default = Object.assign({}, WEEK_DAYS, {}, CALENDAR_MONTHS, {}, COMMON);

exports["default"] = _default;