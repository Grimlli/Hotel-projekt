const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

/* TEST*/ 
const title = document.getElementById("navbranding");
hamburger.addEventListener("click",openHamburger);

function openHamburger(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
}
function closeHamburger(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
}


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", closeHamburger))
    

