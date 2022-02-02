const password = '2ed4ac02e3c2bc1a67905aec2e500694b231166ebfb28238fe0886633e3f552a';
var token = '';

var userInput = document.getElementById("loginId");  
var passInput = document.getElementById("passwordInput");

setTimeout(function(){
    // Inputfelder werden beim Seitenladen geleert
    userInput.value == "";
    passInput.value == "";
},500)

function inputWrong() {
    userInput.style.borderColor = "red";
    passInput.style.borderColor = "red";
}
function inputCorrect(key) {
    if (key == password) {

        generateToken(key);
        setTimeout(function(){

            console.log(token)
            window.location.href = "intern.html?token=" + token;

        },500);;


    }
}

// function welche beim click auf den bestätigen button aufgerufen werden
function auth() {
    let userInput = document.getElementById("loginId");  
    let passInput = document.getElementById("passwordInput");

    if (userInput.value == 'user') {
        if (sha256(sha256(passInput.value)) == password) {
            console.log("Password akzeptiert")
            inputCorrect(sha256(sha256(passInput.value)))

        } else { inputWrong(); }

    } else { inputWrong(); }
}

function json(url) {
    return fetch(url).then(res => res.json());
  }

function generateToken(key) {
    if (key == password) {

        json(`https://api.ipdata.co?api-key=086d68eee3f19808d82ead83c2f629231feb65b6081115310d499d84`).then(data => {
          console.log('fetched ip: ' + data.ip);
          token = sha256(data.ip + sha256(key));
          // so many more properties
          });

    } else {console.error("getIP() - Access denied")}
}