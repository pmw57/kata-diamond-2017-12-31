/*jslint browser*/ /*global test, expect*/
var diamond = require("./diamond.js");
(function iife() {
    "use strict";
    test("diamond exists", function () {
        expect(diamond.create).toBeInstanceOf(Function);
    });
    test("diamond gives an array", function () {
        expect(diamond.create()).toEqual([]);
    });
    test("An A diamond is just the letter A", function () {
        expect(diamond.create("A")).toEqual(["A"]);
    });
}());