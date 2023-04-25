const config = { fps: 20, qrbox: { width: 250, height: 250 } };

const scanner = new Html5QrcodeScanner('reader',config);

//scanner.render(success, error);

// Rückkamera
scanner.render({ facingMode: "environment" }, config, success, error);

function success(result) {
    alert(result);

    scanner.clear();
}

function error(err) {
    console.error(err);
}