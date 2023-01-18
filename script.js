const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


const send = document.getElementById("send").addEventListener("click", formDone);
const res = document.getElementById("return").addEventListener("click", activateB);

/*
const runway = document.getElementById("runway");
const cForm = document.getElementById("customer-form");
*/
const formMessage = document.getElementById("sub-input");




function activateB(){
    console.log("Knappen kommer in RESET")
    
    if(document.getElementById("send").disabled == true){
        formMessage.classList.toggle("active");
        document.getElementById("send").disabled = false;
    }
    
}



function openHamburger(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
}
function closeHamburger(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
}


/*Form Done temp solution*/


function formDone(){
    console.log("FormDone");
   
    if(requierd() == true){
        console.log("IT WAS TRUE");
        formMessage.classList.toggle("active");
        /*send.classList.toggle("after");*/
        document.getElementById("send").disabled = true;
    
    }

}


function requierd(){

    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let customerStatus = document.getElementById("customer-status").value;
    let message = document.getElementById("message").value;

    console.log("Innna if sats");
    console.log(email +" " + name +" " + phone +" " + customerStatus + " " +message);
  
    if( email !="" && email.includes("@")){
        console.log("Kom igenom email");

        if(name != "underfiend"){
            console.log("Kom igenom name");

            if( phone !="undefiend"){
                console.log("Kom igenom phone "+ phone);

                if( customerStatus !="Reason for contact"){
                console.log("Kom igenom CustomerStatus "+ customerStatus);

                    if( message !=""){
                        console.log("Kom igenom message "+ message);
                        return true;
                    }
                }
            }
        }
    }
    else{
        alert("Saknar info")
         return false;
        }

}


hamburger.addEventListener("click",openHamburger);
document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", closeHamburger));


const h2 = document.getElementById("testh2");
h2.addEventListener("click",cT);
