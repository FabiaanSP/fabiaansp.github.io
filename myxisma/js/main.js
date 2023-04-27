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
        $("#credits").css("color","white");
    } else {
        $("#credits").css("color","black");

    }
}

gotoPage(tab.warenkorb);

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

    gotoPage(tab.warenkorb);
}

function verlauf_Clicked() {
    stopScanning();

    gotoPage(tab.verlauf);

}