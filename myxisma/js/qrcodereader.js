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
      
      if (result.includes("xxxlutz")) {  
        addItemToCart(result);
        
        Toastify({
          text: "Artikel in Warenkorb gelegt",
          duration: 1500,
          close: false,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #0fd937, #00bf00)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      } else {
        Toastify({
          text: "Fehler: QR Code nicht von XXXLUTZ.AT",
          duration: 1500,
          close: false,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #ff483b, #bf0d00)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      }

      setTimeout(function() {initScanner();},0)
}

// /////////////////////////////////////////////////////////

function QRgetArtikelnummerOutOf(link) {
  link = link.replace("http://www.xxxlutz.at/qr/product/","");
  let splittedLink = link.split("/");

  let x = splittedLink[1] + splittedLink[2]
  console.log(x);
  return x;
}

QRgetArtikelnummerOutOf("http://www.xxxlutz.at/qr/product/21/23000175/01/4/1402/");

// function getArtikelnummerOutOf(link) {
//   if (!link.includes("xxxlutz.at")) {console.error("Link must be from xxxlutz.at"); return;}
//   let txt = link;
//   txt = txt.substring(txt.length-10,txt.length);
//   return txt;
// }

// getArtikelnummerOutOf("https://www.xxxlutz.at/p/dieter-knoll-relaxsessel-in-textil-hellbraun-000436013068");


// function getAnzeigenamenOutOf(link) {
//   if (!(link.includes("xxxlutz"))) {console.error("Link must be from xxxlutz.at");}

//   let txt = link.replace("https://www.xxxlutz.at/p/","");
//   while (txt.includes("-")) {
//     txt = txt.replace("-"," ");
//   }
//   txt = txt.substring(0,txt.length-12);
//   return txt
// }

// getAnzeigenamenOutOf("https://www.xxxlutz.at/p/dieter-knoll-relaxsessel-in-textil-hellbraun-000436013068");