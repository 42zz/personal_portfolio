"use strict";
var d = document;
var w = window;
var b = d.getElementById("b");
var c = d.getElementById("c");

w.onload = function() {
    setTimeout(function() {
        c.classList.add("z");
    }, 420);
}

d.addEventListener("DOMContentLoaded", function() {
    c.classList.add("a");
});
