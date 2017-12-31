module.exports = (function iife() {
    "use strict";
    function charLine(char) {
        var codeForA = String("A").charCodeAt(0);
        var n = char.charCodeAt(0) - codeForA;
        if (n < 1) {
            return "A";
        }
        return char + " ".repeat(2 * n - 1) + char;
    }
    function prevChar(char) {
        var charCode = char.charCodeAt(0);
        if (char === "A") {
            return;
        }
        return String.fromCharCode(charCode - 1);
    }
    function create(char) {
        var diamond = [];
        var spaces = "";
        if (!char) {
            return diamond;
        }
        diamond.push(charLine(char));
        while (char !== "A") {
            char = prevChar(char);
            spaces += " ";
            diamond.unshift(spaces + charLine(char) + spaces);
            diamond.push(spaces + charLine(char) + spaces);
        }
        return diamond;
    }
    return {
        create
    };
}());
