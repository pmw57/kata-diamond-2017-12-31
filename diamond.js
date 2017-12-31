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
        if (!char) {
            return diamond;
        }
        if (char === "A") {
            diamond.push(char);
            return diamond;
        }
        if (char === "B") {
            diamond.push(charLine(char));
            char = prevChar(char);
            diamond.unshift(" " + charLine(char) + " ");
            diamond.push(" " + charLine(char) + " ");
            return diamond;
        }
        diamond.push(charLine(char));
        char = prevChar(char);
        diamond.unshift(" " + charLine(char) + " ");
        diamond.push(" " + charLine(char) + " ");
        char = prevChar(char);
        diamond.unshift("  " + charLine(char) + "  ");
        diamond.push("  " + charLine(char) + "  ");
        return diamond;
    }
    return {
        create
    };
}());
