const scanner = new Html5QrcodeScanner('reader',{
    qrbox: {
        width: 250,
        height: 250,
    },
    fps: 20,
});

scanner.render(success, error);

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

function success(result) {
    alert(result);

    scanner.clear();
}

function error(err) {
    console.error(err);
}