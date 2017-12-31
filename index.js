/*jslint browser */
var diamond = require("./diamond.js");
var results = document.querySelector(".results");
results.innerHTML = diamond.create("Z").join("<br>");