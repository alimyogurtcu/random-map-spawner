"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomLong = exports.generateRandomLat = void 0;

// -180 & +180
var generateRandomLong = function generateRandomLong() {
  var num = parseFloat((Math.random() * 180).toFixed(3));
  var positiveOrNegative = Math.random();

  if (positiveOrNegative >= .5) {
    num = num * -1;
  }

  return num;
}; // -90 & +90


exports.generateRandomLong = generateRandomLong;

var generateRandomLat = function generateRandomLat() {
  var num = parseFloat((Math.random() * 90).toFixed(3));
  var positiveOrNegative = Math.random();

  if (positiveOrNegative >= .5) {
    num = num * -1;
  }

  return num;
};

exports.generateRandomLat = generateRandomLat;