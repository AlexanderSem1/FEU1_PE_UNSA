//Navigation bar display/ hide for mobile 

function myFunction() {
        let menu = document.getElementById("pop-menu");
        if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
        menu.style.display = "block";
        }
    }



// Email validation for newsletter 

function validateSubForm(){
    let regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/; // RegEx for email address format 
        
    let inputEmail = document.getElementById("email_ID").value; 
    
(function verifyEmail(){
    if(inputEmail.match(regExEmail)){
        return true;
    } else {
        document.getElementById("emailSubError").style.display = "inline";  
    }
})();  
    
(function correctEmail(){
    if(inputEmail.match(regExEmail))
        alert("Thank you for subscribing to our Newsletter!")
})();
}




// Accordian on about us page 

//document.getElementById("moreReadingTrigger").addEventListener("click", display); 
//
//function display(){
//    let x = document.getElementById("moreReading"); 
//    if (x.style.display === "none"){
//        x.style.display = "block"; 
//    }else{
//        x.style.display = "none"; 
//    }
//}; 

//document.getElementById("moreInfoTrigger").addEventListener('click', display); 
//
//function display(){
//    var temp = document.getElementById("moreInfoContent");
//    if (temp.style.display === "none"){
//        temp.style.display = "block"; 
//    }else {
//        temp.style.display = "none"; 
//    }
//}; 


function clickDisplay(){
    let toggle = document.getElementById('moreReading');
    
    if (document.getElementById('moreReading').style.display === 'none'){
        toggle.style.display ='block'; 
        }
        else{
            toggle.style.display = 'none'; 
        }
}; 
document.getElementById('moreReadingTrigger').addEventListener('click', clickDisplay); 





// Local Associations 

function unOslo() {
	let location = "Oslo"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=7&ie=UTF8&iwloc=&output=embed"
}

function unAgder() {
	let location = "Agder"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=5&ie=UTF8&iwloc=&output=embed"
}

function unNordland() {
	let location = "Nordland"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=5&ie=UTF8&iwloc=&output=embed"
}

function unTromsoe() {
	let location = "Tromsø"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=5&ie=UTF8&iwloc=&output=embed"
}

function unTroendelag() {
	let location = "Trondheim"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=7&ie=UTF8&iwloc=&output=embed"
}

function unHordaland() {
	let location ="Hordaland"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=5&ie=UTF8&iwloc=&output=embed"
}


//Contact form validation 


function validateMyForm(){
    let regExName = /^[a-zA-Z]+$/; // RegEx for first and last name not to be empty
    let regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/; // RegEx for email address format 
        
    let inputFirstName = document.getElementById("firstName").value;
    let inputLastName = document.getElementById("lastName").value; 
    let inputEmail = document.getElementById("email").value; 
    
(function verifyFirstName(){
    if(inputFirstName.match(regExName)){
        return true;
    } else {
        document.getElementById("firstNameError").style.display = "inline"; 
    }    
})();

(function verifyLastName(){
    if(inputLastName.match(regExName)){
        return true;
    } else {
        document.getElementById("lastNameError").style.display = "inline"; 
    }
})();    


(function verifyEmail(){
    if(inputEmail.match(regExEmail)){
        return true;
    } else {
        document.getElementById("emailError").style.display = "inline";  
    }
})();  
    
(function allTrue(){
    if(inputFirstName.match(regExName) && inputLastName.match(regExName) && inputEmail.match(regExEmail))
        alert("Thank you for contacting us, we will get back to you shortly!")
})();
}







