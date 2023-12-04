"use strict";

var login = prompt("Login: ");
var password = "";

if (login === "Admin") {
    password = prompt("Password: ");

    if (password === "TheMaster") {
        alert("Welcome!");

    } else if (password === "" || password === null) {
        alert("Canceled.");

    } else {
        alert("Wrong password.");

    }

} else if (login === "" || login === null) {
    alert("Canceled.");

} else {
    alert("I don't know you.");

}