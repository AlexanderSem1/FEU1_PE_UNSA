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
