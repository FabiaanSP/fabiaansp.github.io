let scrollIndex = 0;
let maxScrollIndex = 2;
let isAnimating = false;

let indicatorAnimation = "animate__rubberBand";

const animation_enterFromTop = "animate__zoomIn";
const animation_enterFromBottom = "animate__zoomIn";
const animation_exitToTop = "animate__zoomOut";
const animation_exitToBottom = "animate__zoomOut";

const cooldownTillFadeInAnimation = 350;

setTimeout(function(){
  $('#box0').removeClass(animation_enterFromTop);
},1000)

window.onwheel = e => {
  if(e.deltaY >= 0){

    // Scrolling Down

    if(!isAnimating && scrollIndex < maxScrollIndex) {

      // If abfrage überprüft ob bereits eine Animation am laufen ist, und ob man eh noch nicht auf der letzten Scroll-Seite angekommen ist.

      console.log("Scroll Down");
      isAnimating = true;
      $('#box' + scrollIndex).addClass(animation_exitToTop);
      $('#circle' + scrollIndex).removeClass(indicatorAnimation);

      document.getElementById("circle" + scrollIndex).innerHTML = "";
      setTimeout(function(){

        document.getElementById("box" + scrollIndex).style.display = "none";
        $('#box' + scrollIndex).removeClass(animation_exitToTop);
        scrollIndex += 1;

        document.getElementById("box" + scrollIndex).style.display = "block";
        $('#box' + scrollIndex).removeClass(animation_enterFromBottom);
        $('#box' + scrollIndex).addClass(animation_enterFromBottom);
        $('#circle' + scrollIndex).addClass(indicatorAnimation);

        document.getElementById("circle" + scrollIndex).innerHTML = '<i class="fas fa-angle-left"></i>';

        setTimeout(function(){
          isAnimating = false;
          $('#box' + scrollIndex - 1).removeClass(animation_enterFromBottom);
          $('#circle' + scrollIndex).removeClass(indicatorAnimation);
        },1000)
      },cooldownTillFadeInAnimation)

    }

  } else {
    // Scrolling Up

    if (!isAnimating && scrollIndex > 0) {
      console.log('Scroll Up');

      isAnimating = true;
      $('#box' + scrollIndex).addClass(animation_exitToBottom);
      $('#circle' + scrollIndex).removeClass(indicatorAnimation);

      document.getElementById("circle" + scrollIndex).innerHTML = "";
      setTimeout(function(){

        document.getElementById("box" + scrollIndex).style.display = "none";
        $('#box' + scrollIndex).removeClass(animation_exitToBottom);
        scrollIndex -= 1;

        document.getElementById("box" + scrollIndex).style.display = "block";
        $('#box' + scrollIndex).removeClass(animation_enterFromBottom);
        $('#box' + scrollIndex).addClass(animation_enterFromTop);
        $('#circle' + scrollIndex).addClass(indicatorAnimation);
        document.getElementById("circle" + scrollIndex).innerHTML = '<i class="fas fa-angle-left"></i>';

        setTimeout(function(){
          isAnimating = false;
          $('#box' + scrollIndex - 1).removeClass(animation_enterFromTop);
          $('#circle' + scrollIndex).removeClass(indicatorAnimation);
        },1000)
      },200)
    }
  }
}
