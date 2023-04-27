const config = { fps: 40, qrbox: { width: 250, height: 250 } };

const scanner = new Html5Qrcode('reader',config);

//scanner.render(success, error);

// Rückkamera

// ============================== KAMERA STARTUP ==================================

// DO NOT DELETE
function initScanner() {
  try {
    scanner.start({ facingMode: "environment" }, config, success);
  } catch (error) {

  } 
}

function stopScanning() {
  try {
      scanner.stop().then((ignore) => {
        // QR Code scanning is stopped.
      }).catch((err) => {
        // Stop failed, handle it.
      });
  } catch (err) {

  }
}

// ============================================================================
function success(result) {
    scanner.stop().then((ignore) => {
        // QR Code scanning is stopped.
      }).catch((err) => {
        // Stop failed, handle it.
      });

      Toastify({
        text: "Artikel in Warenkorb gelegt",
        duration: 1500,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ffd414, #f0e248)",
        },
        onClick: function(){} // Callback after click
      }).showToast();


      alert(result);
}

// /////////////////////////////////////////////////////////

function getArtikelnummerOutOf(link) {
  let txt = link;
  txt = txt.substring(txt.length-12,txt.length);
  return txt;
}

getArtikelnummerOutOf("https://www.xxxlutz.at/p/dieter-knoll-relaxsessel-in-textil-hellbraun-000436013068");


function getAnzeigenamenOutOf(link) {
  let txt = link.replace("https://www.xxxlutz.at/p/","");
  while (txt.includes("-")) {
    txt = txt.replace("-"," ");
  }
  txt = txt.substring(0,txt.length-12);
  return txt
}

getAnzeigenamenOutOf("https://www.xxxlutz.at/p/dieter-knoll-relaxsessel-in-textil-hellbraun-000436013068");