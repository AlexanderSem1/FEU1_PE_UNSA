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

function validateMyForm(){
    let regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/; // RegEx for email address format 
        
    let inputEmail = document.getElementById("email_ID").value; 
    
(function verifyEmail(){
    if(inputEmail.match(regExEmail)){
        return true;
        
    } else {
        document.getElementById("emailError").style.display = "inline";  
    }
})();  
    
(function allTrue(){
    if(inputEmail.match(regExEmail))
        alert("Thank you for subscribing to our Newsletter!")
})();
}


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

