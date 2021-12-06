"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomCoordinates = exports.generateRandomCoordinate = void 0;

var _coordinates = require("./modules/coordinates");

var generateRandomCoordinate = function generateRandomCoordinate() {
  return {
    latitude: (0, _coordinates.generateRandomLat)(),
    longitude: (0, _coordinates.generateRandomLong)()
  };
};

exports.generateRandomCoordinate = generateRandomCoordinate;

var generateRandomCoordinates = function generateRandomCoordinates() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var arr = [];
  Array(len).fill(1).forEach(function (item, index) {
    arr.push(generateRandomCoordinate());
  });
  return arr;
};

exports.generateRandomCoordinates = generateRandomCoordinates;