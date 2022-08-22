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
    if (Passcodes.includes(sha224(pass))) {
        // Access granted

        let passIndex = Passcodes.indexOf(sha224(pass));
        $('login').attr("pass", pass);
        $('login').attr("index", passIndex);

        console.log("access granted");
        $(".loginPage").hide();
        document.getElementById('agentName').innerHTML = Usernames[passIndex];
        document.getElementById('input').value = "";
    }
}

var PassInputField = document.getElementById("passInput");
PassInputField.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
 		checkPass(PassInputField.value);
     }
});