const config = { fps: 40, qrbox: { width: 250, height: 250 } };

const scanner = new Html5Qrcode('reader',config);

//scanner.render(success, error);

// Rückkamera
scanner.start({ facingMode: "environment" }, config, success);

function success(result) {
    scanner.stop().then((ignore) => {
        // QR Code scanning is stopped.
      }).catch((err) => {
        // Stop failed, handle it.
      });

    alert(result);
}

function error(err) {
    // catching error
}