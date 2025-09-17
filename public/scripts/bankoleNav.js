/* NAVIGATION SECTION */

function openSlideMenu(){
    document.getElementById("side-menu").style.width = "340px";
    document.getElementById("body").style.marginLeft = "340px";
    document.getElementById("overlay-body").style.display = "block";
}

function closeSideMenu(){
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    document.getElementById("overlay-body").style.display = "none";
}
