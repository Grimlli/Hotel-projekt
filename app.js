const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",openHamburger);
document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", closeHamburger));

function openHamburger(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    console.log("kom in i hambrger");
}
function closeHamburger(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
}


const room1Open = document.getElementById("room1-open");
const room1Info = document.getElementById("room1-info");
const arrow1 = document.getElementById("arrow-down1");

const room2Open = document.getElementById("room2-open");
const room2Info = document.getElementById("room2-info");
const arrow2 = document.getElementById("arrow-down2");

const room3Open = document.getElementById("room3-open");
const room3Info = document.getElementById("room3-info");
const arrow3 = document.getElementById("arrow-down3");

const room4Open = document.getElementById("room4-open");
const room4Info = document.getElementById("room4-info");
const arrow4 = document.getElementById("arrow-down4");

function openRoomText1(){
    console.log("kom in i 1");
    room1Open.classList.toggle("active");
    arrow1.classList.toggle("active");
}
function openRoomText2(){
    console.log("kom in i 2");
    room2Open.classList.toggle("active");
    arrow2.classList.toggle("active");
}
function openRoomText3(){
    console.log("kom in i 3");
    room3Open.classList.toggle("active");
    arrow3.classList.toggle("active");
}
function openRoomText4(){
    console.log("kom in i 4");
    room4Open.classList.toggle("active");
    arrow4.classList.toggle("active");
}
room1Info.addEventListener("click", openRoomText1);
room2Info.addEventListener("click", openRoomText2);
room3Info.addEventListener("click", openRoomText3);
room4Info.addEventListener("click", openRoomText4);


