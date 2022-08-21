let url = new URL(window.location);
let tokenFromURL = url.searchParams.get("token");
let passIndexFromURL = url.searchParams.get("passIndex");

if (tokenFromURL != null && passIndexFromURL != null) {
    if (sha256(Passcodes[passIndexFromURL]) == tokenFromURL) {
        console.log("access granted");
        $(".loginPage").hide();
    }
}

function checkPass(pass) {
    if (Passcodes.includes(sha224(pass))) {
        // Access granted

        let passIndex = Passcodes.indexOf(sha224(pass));
        location.href = "./index.html?token=" + sha256(sha224(pass)) + "&passIndex=" + passIndex.toString();
        
    }
}

var PassInputField = document.getElementById("passInput");
PassInputField.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
 		checkPass(PassInputField.value);
     }
});