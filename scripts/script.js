/*
    Student Name: Christain Pellicore
    File Name: script.js
    Current Date: 04/11/24
*/


// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}