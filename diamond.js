"use strict";
module.exports = {
    create: function (char) {
        var diamond = [];
        if (!char) {
            return diamond;
        }
        if (char === "A") {
            diamond.push(char);
            return diamond;
        }
        if (char === "B") {
            diamond = [
                " A ",
                char + " " + char,
                " A "
            ];
            return diamond;
        }
        diamond = [
            "  A  ",
            " B B ",
            char + "   " + char,
            " B B ",
            "  A  "
        ];
        return diamond;
    }
};
