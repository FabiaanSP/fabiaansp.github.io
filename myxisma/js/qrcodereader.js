const config = { fps: 40, qrbox: { width: 250, height: 250 } };

const scanner = new Html5Qrcode('reader',config);

//scanner.render(success, error);

// Rückkamera

// ============================== KAMERA STARTUP ==================================

// DO NOT DELETE
scanner.start({ facingMode: "environment" }, config, success);

// ============================================================================
function success(result) {
    scanner.stop().then((ignore) => {
        // QR Code scanning is stopped.
      }).catch((err) => {
        // Stop failed, handle it.
      });

      Toastify({
        text: "Artikel in Warenkorb gelegt",
        duration: 1000,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();


      alert(result);
    }


getArticleInformation('0350001515');

// /////////////////////////////////////////////////////////
