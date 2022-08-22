// let url = new URL(window.location);
// let tokenFromURL = url.searchParams.get("token");
// let passIndexFromURL = url.searchParams.get("passIndex");

// if (tokenFromURL != null && passIndexFromURL != null) {
//     if (sha256(Passcodes[passIndexFromURL]) == tokenFromURL) {
//         console.log("access granted");
//         $(".loginPage").hide();
//         document.getElementById('agentName').innerHTML = Usernames[passIndexFromURL];
//     }
// }

function checkPass(pass) {
    document.getElementById("passInput").disabled = true;

    if (Passcodes.includes(sha224(pass))) {
        // Access granted

        let passIndex = Passcodes.indexOf(sha224(pass));
        $('login').attr("pass", pass);
        $('login').attr("index", passIndex);

        console.log("access granted");

        tata.info('NATO Server', 'Verbindung wird hergestellt', { position: 'tr', animate: 'slide', duration: 2500 });
        setTimeout(function(){
            tata.info('Verbunden!', 'Überprüfe Verifizierungscode...', { position: 'tr', animate: 'slide', duration: 2500 });
            setTimeout(function(){
                tata.info('Verifiziert!', 'Sicherer Zugriff wird gewährt...', { position: 'tr', animate: 'slide', duration: 3500 });
                setTimeout(function(){

                    tata.success('Willkommen zurück', 'Agent ' + Usernames[passIndex], { position: 'tr', animate: 'slide', duration: 5000 });
                    $(".loginPage").hide();
                    document.getElementById('agentName').innerHTML = Usernames[passIndex];
                    document.getElementById('input').value = "";
                    document.getElementById("passInput").disabled = true;
                },3000)
            },2000)
        },2000);
    } else {

        tata.info('NATO Server', 'Verbindung wird hergestellt', { position: 'tr', animate: 'slide', duration: 2500 });
        setTimeout(function(){
            tata.info('Verbunden!', 'Überprüfe Verifizierungscode...', { position: 'tr', animate: 'slide', duration: 2500 });
            setTimeout(function(){
                tata.error('Zugriff verweigert!', 'Verifizierungscode ungültig!', { position: 'tr', animate: 'slide', duration: 5000 });
                document.getElementById("passInput").disabled = true;
            },3000)
        },3000);
    }
}

var PassInputField = document.getElementById("passInput");
PassInputField.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
 		checkPass(PassInputField.value);
     }
});