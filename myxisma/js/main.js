const tab = {
    glossar : $("#glossarTab"),
    scanner : $("#scannerTab"),
    warenkorb : $("#warenkorbTab"),
}

tab.glossar.show();
tab.scanner.hide();
tab.warenkorb.hide();

function glossarBtn_Clicked() {
    stopScanning();

    tab.glossar.show();
    tab.scanner.hide();
    tab.warenkorb.hide();
}

function scannerBtn_Clicked() {
    initScanner();

    tab.glossar.hide();
    tab.scanner.show();
    tab.warenkorb.hide();
}

function warenkorbBtn_Clicked() {
    stopScanning();

    tab.glossar.hide();
    tab.scanner.hide();
    tab.warenkorb.show();
}
