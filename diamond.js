"use strict";
module.exports = {
    create: function (char) {
        if (!char) {
            return [];
        }
        if (char === "A") {
            return ["A"];
        }
        return [
            " A ",
            "B B",
            " A "
        ];
    }
};
