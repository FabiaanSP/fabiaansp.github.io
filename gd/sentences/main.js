const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const encrypted = "XYZABCDEFGHIJKLMNOPQRSTUVW";

const phraseDatabase = [
    "Erlaubnis für Anschlag?",
    "Wir nehmen Funkbunker ein",
    "Wir nehmen die Stadt ein",
    "Wir haben eine Geisel",
    "NATO Patrouille vor dem Dorf",
    "Darf ich ein Attentat machen?",
    "Darf ich einen Anschlag machen?",
    "Scharfschützen auf dem Berg",
    "Wir machen Angriff, alle kommen",
    "Versammlung! Wir greifen an",
    "Brauchen sie EK mein Groß-Wesir",
    "Ansaar+ zur Ausbildungstafel kommen",
    "Kommt alle zum Funkbunker",
    "Wo bist du?",
    "Haben sie momentan Zeit?",
    "NATO hat einen Emir",
    "Ich brauche Hilfe",
    "Bring ihn zum GD Büro",
    "Komm zur Waffenkammer",
    "Ich warte beim Fahrzeughändler auf dich",
    "Hier braucht ein Zivi eine Ausbildung",
    "Status?",
    "Was machen wir gerade?",
    "Was machen wir gerade?",
    "Kommt alle zur Waffenfabrik",
    "Ich brauche Hilfe in der Stadt",
    "Wir werden beobachtet",
    "Scharfschützen auf dem Berg neben dem Dorf!",
    "Wir nehmen die Schs hops",
    "Wo sind sie?",
    "Ich bin bei der Einnahme",
    "Wir haben einen NATO GDler im Dorf",
    "Wir haben einen NATO GDler unter uns",
    "Könnte ich Sie kurz Sprechen?",
    "Ich mach eine Carbomb",
    "NATO hat einen Ansaar",
    "NATO hat einen Rayid-Ansaar von uns",
    "Wir haben einen Vize-Kommandaten",
    "Wo sind sie mein Vize-Emir",
    "Wir sind im Dorf",
    "NATO macht Versammlung",
    "Erschieß den Vize-Kommandanten",
    "Major General mit den Seals drausen",
    "Leck mich",
    "Ich hasse dich",
    "Spast",
    "Sag das noch einmal und du bekommst eine Kugel zwischen die Augen",
    "Ihr werdet alle erschossen!",
    "Ein Kämpfer läuft über",
    "Wo bist du?",
    "Wo seit ihr?",
    "Von wem hast du die Erlaubnis?",
    "Haben sie zeit für ein Tryout"
];

function randomIntFromInterval(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) } // min and max included
function isUpperCase(x) { if (x == x.toUpperCase()) { return true; } else { return false; } }

let input = document.querySelector('#input');
let display = document.querySelector('#display');
let rnd = randomIntFromInterval(0, phraseDatabase.length - 1);
display.innerHTML = convert(phraseDatabase[rnd]);

var firstNext = true;
next();

function next() {       
        if (input.value.toUpperCase() == phraseDatabase[rnd].toUpperCase() || firstNext) {
            firstNext = false;

            // Richtig
            $('#input').css("box-shadow", "0px 0px 20px #00ff00");
            rnd = randomIntFromInterval(0, phraseDatabase.length - 1);
            display.innerHTML = convert(phraseDatabase[rnd]);
    
            setTimeout(function(){
                $('#input').css("box-shadow", "none");
            },1250)
        } else {
            // Falsch
            alert("Das war leider Falsch\nRichtige Antwort: " + phraseDatabase[rnd]);
            
            rnd = randomIntFromInterval(0, phraseDatabase.length - 1);
            display.innerHTML = convert(phraseDatabase[rnd]);
        }
        input.value = "";
}

// HINWEIß:
/*
Die funktion convert() Verschlüsselt Klartext in die von Legionofsensei MRP verwendete Funkverschlüsselung
Eine Funktion oder ein Programm um den Funk für die Endnutzer automatisch entschlüsseln zu lassen, wäre ein
verstoß gegen das Legionofsensei-Regelwerk und würde sehr stark bestraft werden. Daher sind wir dazu GEZWUNGEN
diese Methode der Überprüfung zu verwenden.
*/

function convert(x) {
    let output = "";
    x.split('').forEach(char => {
        if (abc.includes(char.toUpperCase())) {
            if (isUpperCase(char)) {
                output += abc[encrypted.split('').indexOf(char.toUpperCase())];
            } else {
                output += abc[encrypted.split('').indexOf(char.toUpperCase())].toLowerCase();
            }
        } else {
            output += char;
        }
    });

    return output;
}


function changeMode() {
    location.href = "../"
}