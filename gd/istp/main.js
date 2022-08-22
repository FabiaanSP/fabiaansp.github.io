const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const encrypted = "XYZABCDEFGHIJKLMNOPQRSTUVW";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function isUpperCase(x) {
    if (x == x.toUpperCase()) { return true; } else { return false; }
}

let input = document.querySelector('#input');
let display = document.querySelector('#display');
let rnd = randomIntFromInterval(0, abc.length - 1);
display.innerHTML = abc[rnd];

var firstNext = true;
var startup = true;
next();

function next() {
    if (verified()) {   
    display.innerHTML = abc[rnd];
        
        if (input.value.toUpperCase() == encrypted[rnd] || firstNext) {

            firstNext = false;
            
            // Richtig
            $('#input').css("box-shadow", "0px 0px 20px #00ff00");
            rnd = randomIntFromInterval(0, abc.length - 1);
            display.innerHTML = abc[rnd];
            tata.success('Richtig!', 'Immer weiter so!', { position: 'tr', animate: 'slide', duration: 2000 });
            
            setTimeout(function(){
                $('#input').css("box-shadow", "none");
            },1250)
        } else {
            // Falsch

            tata.error('Leider Falsch!', encrypted[rnd] + ' wäre die Richtige Antwort gewesen', {
                 position: 'br',
                 animate: 'slide',
                 duration: 20000
            });

            
            rnd = randomIntFromInterval(0, abc.length - 1);
            display.innerHTML = abc[rnd];
        }
        
        input.value = "";
    } else {
        if (!startup) { tata.error('Loginfehler!', 'Bitte versuche dich erneut anzumelden, und wende dich an Fabian Siedler', {
            position: 'br',
            animate: 'slide',
            duration: 20000
       }); } else {startup = false;}
    }
}

function convert(x) {
    let output = "";
    x.split('').forEach(char => {
        output += encrypted[abc.indexOf(char.toUpperCase())];
    });

    console.log(output);
    return output;
}


function changeMode() {
    location.href = "./sentences";
}

function verified() {
    let pass = $('login').attr('pass');
    let index = $('login').attr('index');

    if (Passcodes[index] == sha224(pass)) {
        return true;
    } else return false;
}