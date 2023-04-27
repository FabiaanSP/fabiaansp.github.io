// Settings

const cookieExpireDays = 1;


function renderCartItem(nummer, anzeigename) {
    $(".warenkorb__inhalt").append("<article style='display: inline-flex' id='warenkorbInhaltId_" + nummer + "'><h1>" +
     nummer + " " + anzeigename + " </h1><a href='https://www.xxxlutz.at/s/?s=" + nummer + "'><img src='images/up-right-from-square-solid.svg' alt='' ></a><a artikelnummer='" 
     + nummer + "' onclick='removeItemFromCart(this)'><img src='images/trash-solid.svg' alt='' ></a></article><br>");
}

function addItemToCart(artikelnummer, Anzeigename, InCart) {
    setCookie(artikelnummer, getCartFormat(artikelnummer, Anzeigename, InCart), cookieExpireDays);
    location.reload();
 
}

function removeItemFromCart(rawNummer) {
    
    let nummer = rawNummer.getAttribute("artikelnummer");
    console.log(nummer);

    if (confirm("Bist du sicher dass du " + nummer + " entfernen willst?")) {
        $("#warenkorbInhaltId_" + nummer).remove();

        let c = JSON.parse(getCookie(nummer));
        setCookie(nummer, getCartFormat(c[0],c[1],false)); // InCart wird jetzt auf false gesetzt
        location.reload();
    }

}

function delete_cookie(name) {
    if (DeleteCookieMethod_getCookie(name)) {
        document.cookie = name + "=path=/" +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}

function DeleteCookieMethod_getCookie(name) {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

function getCartFormat(artikelnumemr, anzeigename, InCart) {
    return JSON.stringify([artikelnumemr, anzeigename, InCart]);
}

function setCookie(cookieName, cookieValue, expireDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function get_cookies_array() {

    var cookies = {};

    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }

    return cookies;

}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadAllCartItemsFromCookies() {
    for (var cookie in get_cookies_array()) {
        try {
            if (JSON.parse(getCookie(cookie))[2]) {
                let c = JSON.parse(getCookie(cookie));
                renderCartItem(c[0],c[1]);

                warenkorbAnzahl++;
            }
        } catch (error) {

        }
    }
    if ($(".warenkorb__inhalt").children().length == 1) { // 1 weil das leerlabel auch drinnen ist.
        $("#warenkorbLeerLabel").show();
    } else { $("#warenkorbLeerLabel").hide(); }
}

loadAllCartItemsFromCookies();