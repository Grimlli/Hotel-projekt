const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function openHamburger(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    console.log("kom in i hambrger");
}
function closeHamburger(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
}

hamburger.addEventListener("click",openHamburger);
document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", closeHamburger));