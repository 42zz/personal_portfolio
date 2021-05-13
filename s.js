"use strict";
var d = document,
    w = window,
    b = d.getElementById("b"),
    c = d.getElementById("c");

w.onload = function() {
    setTimeout(function() {
        c.classList.add("z");
    }, 420);
}

d.addEventListener("DOMContentLoaded", function() {
    c.classList.add("a");
});
