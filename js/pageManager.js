const iframe = document.getElementById("content-iframe");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('page')
console.log("Page: "+ page);

let titleSufix = "";

// ------------- Page Management

if (page == null) {
    window.location.replace("index.html?page=home");
} else {
    iframe.src = "pages/" + page + ".html";
}

// -------------- Title Management

if (page == "home") {
    titleSufix = "Home";
} else if (page == "team") {
    titleSufix = "Team"
} else if (page == "sponsoren") {
    titleSufix = "Sponsoren"
} else if (page == "schueler") {
    titleSufix = "Schüler 1C"
}
document.title = "Investmentakademie - " + titleSufix;

// ---------------- Animation before sitechange

function changePageTo(_target) {
    $("#main-content").removeClass('animate__slideInRight');
    $("#main-content").addClass('animate__fadeOutLeftBig');

    setTimeout(function(){
        window.location.href = _target;
    },400)
}

