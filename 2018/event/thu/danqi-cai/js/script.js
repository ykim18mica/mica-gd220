function expandNav() {
    document.getElementById("nav-expand").style.zIndex = "100";
    document.getElementById("nav-expand").style.opacity = "1";
    document.getElementById("orange-screen").style.zIndex = "5";
    document.getElementById("orange-screen").style.opacity = "0.5";
    document.getElementById("nav-button").style.display = "none";
}

function closeNav() {
    document.getElementById("nav-expand").style.opacity = "0";
    document.getElementById("orange-screen").style.opacity = "0";
    document.getElementById("nav-expand").style.zIndex = "-100";
    document.getElementById("orange-screen").style.zIndex = "-5";
    document.getElementById("nav-button").style.display = "block";

}
