"use strict";

var b = document.getElementById("b");
var c = document.getElementById("c");

window.onload = function() {
    setTimeout(function() {
        c.classList.add("z");
    }, 420);
}

document.addEventListener("DOMContentLoaded", function() {
    c.classList.add("a");
});