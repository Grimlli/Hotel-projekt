const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

/* TEST*/ 
/*const title = document.getElementById("navbranding");*/

const room1Open = document.getElementById("room1-open")
const room1Info = document.getElementById("room1-info");
const arrow = document.getElementById("arrow-down");

const room2Open = document.getElementById("room2-open");
const room2Info = document.getElementById("room2-info");

const room3Open = document.getElementById("room3-open");
const room3Info = document.getElementById("room3-info");

const send = document.getElementById("send").addEventListener("click", formDone);


/*
const runway = document.getElementById("runway");
const cForm = document.getElementById("customer-form");
*/
const formMessage = document.getElementById("sub-input");




function openHamburger(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
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



/*Form Done temp solution*/
function formDone(){
    console.log("FormDone");
   
    if(requierd() == true){
        console.log(requierd);
        formMessage.classList.toggle("active");
        send.classList.toggle("after");
    
    }

}


function requierd(){

    const email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var customerStatus = document.getElementById("customer-status").value;
    var message = document.getElementById("message").value;
    console.log("Innna if sats");
  
  
    if(typeof email !="undefiend" && email.includes("@")){
        console.log("Kom igenom email");

        if(typeof name != ""){
            console.log("Kom igenom name");

            if(typeof phone !="undefiend"){
                console.log("Kom igenom phone");

                if(typeof customerStatus !="undefiend"){
                console.log("Kom igenom CustomerStatus");

                    if(typeof message !="undefiend"){
                        console.log("Kom igenom message");
                        return true;
                    }
                }
            }
        }
    }
    else{
         return false;
        }

}


    
hamburger.addEventListener("click",openHamburger);
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", closeHamburger))


room1Info.addEventListener("click", openRoomText1);
room2Info.addEventListener("click", openRoomText2);
room3Info.addEventListener("click", openRoomText3);





