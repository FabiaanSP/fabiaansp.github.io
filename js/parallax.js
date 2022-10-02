function parallax() {
    var s = document.getElementById('floater');
    var yPos = 0 - window.pageYOffset/10;  
    s.style.top = 45 + yPos + "%"; 
}

function MopedParallax() {
    var s = document.getElementById('mopedImg');
    var xPos = window.pageYOffset/15; 
    
    if (window.pageYOffset >= 1900) {
        
    } else { s.style.marginLeft = -135 + xPos + "%"; }
}

window.addEventListener("scroll", function(){
    parallax();
    MopedParallax();
});

window.addEventListener("load", function(){
    parallax(); 
});