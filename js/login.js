const password = 'e18bb3d9e0bab2218764a976f047db1eb57555fc7b497be800795aeb3eb78c65';
const passInput = document.getElementById("passwort");

function tryLogin() {
    if (sha256(passInput.value) == password) {
        changePageTo('index.html?page=securedEmployees&auth=' + sha224(passInput.value));
    } else { alert("Passwort nicht gültig"); }
}

function changePageTo(_target) {
    $("#main-content").removeClass('animate__slideInRight');
    $("#main-content").addClass('animate__fadeOutLeftBig');

    setTimeout(function(){
        window.location.href = _target;
    },400)
}