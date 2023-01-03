const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

/* TEST*/ 
/*const title = document.getElementById("navbranding");*/

const room1Open = document.getElementById("room1-open");
const room1Info = document.getElementById("room1-info");
const arrow = document.getElementById("arrow-down");

const room2Open = document.getElementById("room2-open");
const room2Info = document.getElementById("room2-info");

const room3Open = document.getElementById("room3-open");
const room3Info = document.getElementById("room3-info");





function openHamburger(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    test.classList.toggle("changeColor");
}
function closeHamburger(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
}

function openRoomText1(){
    room1Open.classList.toggle("active");
    arrow.classList.toggle("active");
}
function openRoomText2(){
    room2Open.classList.toggle("active");
}
function openRoomText3(){
    room3Open.classList.toggle("active");
}
    
hamburger.addEventListener("click",openHamburger);
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", closeHamburger))
room1Info.addEventListener("click", openRoomText1);
room2Info.addEventListener("click", openRoomText2);
room3Info.addEventListener("click", openRoomText3);

