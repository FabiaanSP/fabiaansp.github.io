const preloader = document.getElementById("preloader");
const bottomShape = document.getElementById("bottomShape");
const navigation = document.getElementById("navigation");
const main_content = document.getElementById("main-content");
var delayedLoad = 750; // Milliseconds

bottomShape.style.display = "none";
navigation.style.display = "none";
main_content.style.display = "none";

// Event tritt auf wenn die Seite vollständig geladen ist.
window.addEventListener('load', function () {
  setTimeout(function() {
        siteLoaded()
    },delayedLoad)
  })

function siteLoaded() {
  preloader.style.display = "none";
  bottomShape.style.display = "block";
  navigation.style.display = "block";
  main_content.style.display = "block";
}