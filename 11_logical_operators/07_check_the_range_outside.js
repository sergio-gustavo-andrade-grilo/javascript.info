"use strict";

var age = Number(prompt("Type in your age:"));

if (!(14 <= age && age <= 90)) {
    alert("Your age is in range.");
}

if (age < 14 || age > 90) {
    alert("Your age is in range.");
}

