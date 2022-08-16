const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const encrypted = "XYZABCDEFGHIJKLMNOPQRSTUVW";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let input = document.querySelector('#input');
let display = document.querySelector('#display');
let rnd = randomIntFromInterval(0, abc.length - 1);
display.innerHTML = abc[rnd];

next();

function next() {
    
    display.innerHTML = abc[rnd];
    
    if (input.value.toUpperCase() == encrypted[rnd]) {
        // Richtig
        $('#input').css("box-shadow", "0px 0px 20px #00ff00");
        rnd = randomIntFromInterval(0, abc.length - 1);
        display.innerHTML = abc[rnd];

    } else {
        // Falsch
        $('#input').css("box-shadow", "0px 0px 20px #ff0040");
        
        rnd = randomIntFromInterval(0, abc.length - 1);
        display.innerHTML = abc[rnd];
    }
    
    input.value = "";    
}

function convert(x) {
    let output = "";
    x.split('').forEach(char => {
        output += encrypted[abc.indexOf(char.toUpperCase())];
    });

    console.log(output);
}