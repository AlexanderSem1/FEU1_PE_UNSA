// Accordian on about us page 

function showMore(){
    let toggle = document.getElementById('moreReading');
    
    if (document.getElementById('moreReading').style.display === 'none'){
        toggle.style.display ='block'; 
        }
        else{
            toggle.style.display = 'none'; 
        }
}; 

document.getElementById('moreReadTrigger').addEventListener('click', showMore); 