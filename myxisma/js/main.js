const tab = {
    glossar : $("#glossarTab"),
    scanner : $("#scannerTab"),
    warenkorb : $("#warenkorbTab"),
    verlauf: $("#verlaufTab"),
}

function gotoPage(tabPage) {
    tab.glossar.hide();
    tab.scanner.hide();
    tab.warenkorb.hide();
    tab.verlauf.hide();

    tabPage.show();

    if (tabPage == tab.scanner) {
        //$("#credits").css("color","white");
        initScanner();
    } else {
        //$("#credits").css("color","black");
        stopScanning();

    }
}

$("#credits").css("color","black");
gotoPage(tab.scanner);

function glossarBtn_Clicked() {
    stopScanning();
    gotoPage(tab.glossar);
}

function scannerBtn_Clicked() {
    initScanner();

    gotoPage(tab.scanner);

}

function warenkorbBtn_Clicked() {
    stopScanning();

    loadAllCartItemsFromCookies();
    gotoPage(tab.warenkorb);
}

function verlauf_Clicked() {
    stopScanning();

    loadAllVerlaufItems();
    gotoPage(tab.verlauf);

}