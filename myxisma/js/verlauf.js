// Settings

function renderVerlaufItem(nummer, anzeigename) {
    $(".verlauf__inhalt").append("<article style='display: inline-flex' id='warenkorbInhaltId_" + nummer + "'><h1>" +
     nummer + " <span class='wk_anzeigename'>(" + anzeigename + ")</span> </h1><a href='https://www.xxxlutz.at/s/?s=" + nummer + "'><img src='images/up-right-from-square-solid.svg' alt='' ></a><a artikelnummer='" 
     + nummer + "' onclick='restoreVerlaufItem(this)'><img src='images/rotate-right-solid.svg' alt='' ></a></article><br>");
}

function restoreVerlaufItem(item) {
    let nummer = item.getAttribute("artikelnummer");
    console.log(nummer);

    if (confirm("Bist du sicher dass du " + nummer + " wiederherstellen willst?")) {
        $("#warenkorbInhaltId_" + nummer).remove();

        let c = JSON.parse(getCookie(nummer));
        setCookie(nummer, getCartFormat(c[0],c[1],true)); // InCart wird jetzt auf false gesetzt
        loadAllCartItemsFromCookies();
    }
    loadAllVerlaufItems();
}

function loadAllVerlaufItems() {    

    $('.verlauf__inhalt').empty();

    for (var cookie in get_cookies_array()) {
        try {
            if (!(JSON.parse(getCookie(cookie))[2])) { // NOT
                let c = JSON.parse(getCookie(cookie));
                renderVerlaufItem(c[0],c[1]);
            }
        } catch (error) {
            
        }
    }

    if ($(".verlauf__inhalt").children().length == 0) { // 1 weil das leerlabel auch drinnen ist.
        $("#verlaufLeerLabel").show();
    } else { $("#verlaufLeerLabel").hide(); }
}

loadAllVerlaufItems();